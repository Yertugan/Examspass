# Generated by Django 3.0.6 on 2020-05-22 19:37

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20200427_0010'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_text', models.CharField(max_length=1000)),
                ('file', models.FileField(upload_to='')),
            ],
        ),
        migrations.AlterField(
            model_name='course',
            name='about',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='course',
            name='time_created',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 5, 22, 19, 37, 56, 817854, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='courseimage',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.Course'),
        ),
        migrations.AlterField(
            model_name='mycourse',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Course'),
        ),
    ]
