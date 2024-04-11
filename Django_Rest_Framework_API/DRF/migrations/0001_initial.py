# Generated by Django 5.0 on 2024-01-05 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Jadwal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('schedule_id', models.CharField(max_length=200)),
                ('created_on', models.CharField(max_length=200)),
                ('program_id', models.CharField(max_length=200)),
                ('program_name', models.CharField(max_length=200)),
                ('section_id', models.CharField(max_length=200)),
                ('section_name', models.CharField(max_length=200)),
                ('day', models.CharField(max_length=200)),
                ('date', models.CharField(max_length=200)),
                ('subject_name', models.CharField(max_length=200)),
                ('event_obj', models.CharField(max_length=200)),
                ('event_name', models.CharField(max_length=200)),
                ('start_time', models.CharField(max_length=200)),
                ('end_time', models.CharField(max_length=200)),
                ('capacity', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
                ('nik', models.CharField(max_length=200)),
                ('faculty_name', models.CharField(max_length=200)),
                ('room', models.CharField(max_length=200)),
                ('photo', models.ImageField(upload_to='photo')),
            ],
        ),
    ]
