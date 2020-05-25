from django.db import models
from auth1.models import MainUser
from utils.constants import *
from utils.upload import *
from utils.validators import *
from django.utils import timezone


class Lesson(models.Model):
    lesson_text = models.CharField(max_length=1000)
    file = models.FileField()


class Course(models.Model):
    #course_id = models.IntegerField(default=0)
    name = models.CharField(max_length=255)
    about = models.CharField(max_length=1000)
    price = models.IntegerField()
    sum_of_rates = models.IntegerField(default=0)
    no_of_rates = models.IntegerField(default=0)
    rating = models.FloatField(default=0.0)
    time_created = models.DateTimeField(default=timezone.now(), blank=True)
    organization = models.CharField(max_length=255)
    exam = models.CharField(max_length=255)
    teacher = models.CharField(max_length=255)
    creator = models.ForeignKey(MainUser, on_delete=models.CASCADE, related_name='courses')


    def __str__(self):
        return f'{self.creator}: {self.id} {self.name}'


class CourseImage(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=image_path, validators=[image_size, image_extension],
                              null=True)


class MyCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(MainUser, on_delete=models.CASCADE, related_name='my_courses')

