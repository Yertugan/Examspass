import operator

from django.http import HttpResponseRedirect
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response

from api.serializers import *

logger = logging.getLogger(__name__)


def upload_file(request):
    if request.method == 'POST':
        lesson_file = Lesson(request.POST, request.FILES)
        if lesson_file.is_valid():
            lesson_file.save()
            return HttpResponseRedirect('/success/url')
    else:
        lesson_file = Lesson()
    return render(request, 'upload.html', {'lesson_file': lesson_file})


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
    def my(self, request):
        logger.info('received my request')
        if request.method == 'GET':  # Get my courses
            fav_courses = request.user.my_courses.all()
            courses = Course.objects.filter(
                id__in=fav_courses.values('course_id'))
            serializer = CourseSerializer(courses, many=True)
            return Response(serializer.data)
        else:  # Register for courses
            print(request.data)
            course_ids = request.data['course_ids']
            for i in course_ids:
                logging.info("course id %s", i)
                try:
                    course = Course.objects.get(id=i)
                    MyCourse.objects.create(course=course, user=request.user)
                except:
                    raise Exception('no such course')
            fav_courses = request.user.my_courses.all()
            courses = Course.objects.filter(
                id__in=fav_courses.values('course_id'))
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
        logger.info('received request: get list sorted by rating by user %s',
                    request.user)
        courses = Course.objects.order_by('-rating')
        ordered = sorted(courses, key=operator.attrgetter('name'))
        serializer = CourseSerializer(ordered, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def get_courses_by_exam(self, request):
        logger.info('received request: get courses by exam by user %s',
                    request.user)
        exam = request.headers.get('exam')
        courses = Course.objects.filter(exam=exam)
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def refresh(self, request):
        logger.info('received request: refresh list of courses')
        courses = Course.objects.all()

        def obsolete_course(course):
            time_created_time = course.time_created.replace(tzinfo=None)
            now_time = datetime.now().replace(tzinfo=None)
            difference = now_time - time_created_time
            return difference.days >= 60

        [course.delete() for course in courses if obsolete_course(course)]

        return Response("OK")
