from django.db import models

# Create your models here.
class Jadwal(models.Model):
    schedule_id = models.CharField(max_length=200)
    created_on = models.CharField(max_length=200)
    program_id = models.CharField(max_length=200)
    program_name = models.CharField(max_length=200)
    section_id = models.CharField(max_length=200)
    section_name = models.CharField(max_length=200)
    day = models.CharField(max_length=200)
    date = models.CharField(max_length=200)
    subject_name = models.CharField(max_length=200)
    event_obj = models.CharField(max_length=200)
    event_name = models.CharField(max_length=200)
    start_time = models.CharField(max_length=200)
    end_time = models.CharField(max_length=200)
    capacity = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    nik = models.CharField(max_length=200)
    faculty_name = models.CharField(max_length=200)
    room = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='photo')
    def __str__(self):
        return self.schedule_id