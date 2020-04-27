# Generated by Django 2.2.1 on 2020-04-26 13:48

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20191222_2112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='time_created',
            field=models.DateTimeField(blank=True, default=datetime.date(2020, 4, 26)),
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
