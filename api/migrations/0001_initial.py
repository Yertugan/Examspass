# Generated by Django 3.0.1 on 2019-12-21 20:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import utils.upload
import utils.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('about', models.CharField(max_length=2550)),
                ('price', models.IntegerField()),
                ('organization', models.CharField(max_length=255)),
                ('exam', models.CharField(max_length=255)),
                ('teacher', models.CharField(max_length=255)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='courses', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CourseImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=utils.upload.image_path, validators=[utils.validators.image_size, utils.validators.image_extension])),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.Course')),
            ],
        ),
        migrations.CreateModel(
            name='MyCourse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Course')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_courses', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
