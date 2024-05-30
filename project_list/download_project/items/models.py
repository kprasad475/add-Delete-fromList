from django.db import models

# Create your models here.
from django.db import models

class Item(models.Model):
  name = models.CharField(max_length=255)
  description = models.TextField(blank=True)
  download_link = models.URLField(blank=True)  # Optional field for download URL

  def __str__(self):
    return self.name

class DownloadedItem(models.Model):
  user_id = models.IntegerField()  # You can use a User model if applicable
  item = models.ForeignKey(Item, on_delete=models.CASCADE)
  downloaded_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"{self.user_id} - {self.item.name} (Downloaded: {self.downloaded_date})"
