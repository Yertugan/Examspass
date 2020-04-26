import os
import shutil
from datetime import datetime


def image_path(instance, filename):
    course_id = instance.course.id
    return f'courses/{course_id}/{filename}'


def image_delete_path(image):
    image_path = os.path.abspath(os.path.join(image.path, '..'))
    shutil.rmtree(image_path)
