# Generated by Django 2.2.1 on 2020-04-26 16:03

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20200426_2139'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='time_created',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 26, 16, 3, 11, 410408, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='courseimage',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.Course'),
        ),
        migrations.AlterField(
            model_name='favoritecourse',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Course'),
        ),
    ]
