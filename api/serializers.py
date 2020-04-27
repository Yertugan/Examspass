from rest_framework import serializers
from api.models import *
from django.db import transaction
import logging
from auth1.serializers import UserSerializer


logger = logging.getLogger(__name__)


class CourseSerializer(serializers.ModelSerializer):
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())
    creator_name = serializers.SerializerMethodField()
    images_uploaded = serializers.ListField(
        child=serializers.ImageField(), required=False
    )

    class Meta:
        model = Course
        fields = ('id', 'name', 'price', 'time_created', 'creator', 'organization', 'exam', 'rating', 'images_uploaded', 'creator_name')

    def get_creator_name(self, obj):
        if obj.creator is not None:
            return obj.creator.username
        return ''

    def validate_price(self, value):
        if value < 0 or value > 15000:
            raise serializers.ValidationError('price must be positive integer and at most 15000')
        return value

    '''
    def create(self, validated_data):
        # imgs = validated_data.pop('images_uploaded')
        imgs = [4]
        course = course(**validated_data)
        course.save()

        for i in imgs:
            print(i)
            img = courseImage(image=i, course=course)
            img.save()

        return course
    '''


class CourseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseImage
        fields = '__all__'


class CourseFullSerializer(CourseSerializer):
    creator = UserSerializer(read_only=True)

    # images = serializers.ListField(
    #     child=serializers.IntegerField(), required=False
    # )

    class Meta(CourseSerializer.Meta):
        fields = CourseSerializer.Meta.fields + ('description', 'images')
