from django.urls import path
from api.views import *

from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers

from api.views.views import create_course_with_file

urlpatterns = [
    path('create_course_with_file/', create_course_with_file),
]

router = routers.DefaultRouter()
router.register('courses', CourseViewSet, basename='api')
router.register('images', CourseImageViewSet, basename='api')

urlpatterns += router.urls