from django.db import models


# Create your models here.
class Movie(models.Model):
    name=models.CharField(max_length=30)
    rate=models.FloatField()
    screen=models.CharField(max_length=5)
    language=models.CharField(max_length=30)
    duration=models.CharField(max_length=10)
    category=models.CharField(max_length=15)
    certification=models.CharField(max_length=5)
    date=models.DateField()
    image=models.ImageField(upload_to='todoimage')
    banner=models.ImageField(upload_to='todoimage')
    description=models.CharField(max_length=200)

    
    def __str__(self):
        return self.name