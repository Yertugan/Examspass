import operator

from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
import logging
from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework.parsers import JSONParser, FormParser, MultiPartParser
from api.models import *
from api.serializers import *
from rest_framework.views import APIView
from django.utils import timezone

logger = logging.getLogger(__name__)


class CourseImageViewSet(viewsets.ModelViewSet):
    queryset = CourseImage.objects.all()
    serializer_class = CourseImageSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'destroy']:
            return [IsAdminUser()]
        if self.action in ['list', 'retrieve']:
            return [IsAuthenticatedOrReadOnly()]
        return [IsAdminUser()]


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly())

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CourseFullSerializer
        return CourseSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'destroy']:
            return [IsAdminUser()]
        if self.action in ['list', 'retrieve']:
            return [IsAuthenticatedOrReadOnly()]
        return [IsAdminUser()]

    @action(methods=['GET', 'POST'], detail=False)
    def favorite(self, request):
        logger.info('received fovorite request')
        if request.method == 'GET':
            fav_courses = request.user.favorite_courses.all()
            courses = Course.objects.filter(id__in=fav_courses.values('course_id'))
            serializer = CourseSerializer(courses, many=True)
            return Response(serializer.data)
        else:
            print(request.data)
            course_ids = request.data['course_ids']
            for i in course_ids:
                logging.info("course id %s", i)
                try:
                    course = Course.objects.get(id=i)
                    FavoriteCourse.objects.create(course=course, user=request.user)
                except:
                    raise Exception('not such course')
            fav_courses = request.user.favorite_courses.all()
            courses = Course.objects.filter(id__in=fav_courses.values('course_id'))
            serializer = CourseSerializer(courses, many=True)
            return Response(serializer.data)

    @action(methods=['POST'], detail=False)
    def rate(self, request):
        logger.info('received request: set rating from user %s', request.user)
        course_id = request.data['course_id']
        rating = request.data['rating']
        course = Course.objects.get(id=course_id)

        course.sum_of_rates += rating
        course.no_of_rates += 1
        course.rating = course.sum_of_rates / course.no_of_rates
        course.save()
        serializer = CourseSerializer(course)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def get_sorted_by_rating(self, request):
        logger.info('received request: get list sorted by rating by user %s', request.user)
        courses = Course.objects.order_by('-rating')
        ordered = sorted(courses, key=operator.attrgetter('name'))
        serializer = CourseSerializer(ordered, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def get_courses_by_exam(self, request):
        logger.info('received request: get courses by exam by user %s', request.user)
        exam = request.headers.get('exam')
        courses = Course.objects.filter(exam=exam)
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def premieres_of_the_week(self, request):
        logger.info('received request: premieres of the week')

        def this_week(premiere):
            premiere_time = premiere.replace(tzinfo=None)
            now_time = datetime.now().replace(tzinfo=None)
            difference = premiere_time - now_time
            logger.info('number of days to wait to %s is : %s', premiere, difference.days)
            return 0 <= difference.days < 7 and premiere_time.weekday() >= now_time.weekday()

        courses = Course.objects.all()
        courses = [course for course in courses if this_week(course.premiere)]
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def refresh(self, request):
        logger.info('received request: refresh list of courses')
        courses = Course.objects.all()

        def obsolete_course(course):
            premiere_time = course.premiere.replace(tzinfo=None)
            now_time = datetime.now().replace(tzinfo=None)
            difference = now_time - premiere_time
            return difference.days >= 60

        [course.delete() for course in courses if obsolete_course(course)]

        return Response("OK")



