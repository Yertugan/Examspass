from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes, \
    parser_classes
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from api.models import Course, CourseImage


@api_view(['POST'])
@permission_classes((IsAdminUser,))
@parser_classes([MultiPartParser])
def create_course_with_file(request):
    image = request.data['image']
    course_id = request.data['course_id']

    if image is None:
        return Response('image parameter not found', status=500)

    if course_id is None:
        return Response('course_id parameter not found', status=500)

    course = get_object_or_404(Course, id=course_id)

    try:
        course_image = CourseImage.objects.get(course=course)
        course_image.image = image
    except CourseImage.DoesNotExist:
        course_image = CourseImage(course=course, image=image)

    course_image.save()

    print(course_image)
    return Response({
        'id': course_image.id,
    })
