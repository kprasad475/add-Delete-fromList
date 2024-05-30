from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
from .models import Item, DownloadedItem

def item_list(request):
  items = Item.objects.all()
  context = {'items': items}
  return render(request, 'item_list.html', context)

def item_detail(request, item_id):
  item = get_object_or_404(Item, pk=item_id)
  context = {'item': item}
  return render(request, 'item_detail.html', context)

def download_item(request, item_id):
  if request.method == 'POST':
    user_id = 1  # Replace with actual user logic
    item = get_object_or_404(Item, pk=item_id)
    DownloadedItem.objects.create(user_id=user_id, item=item)
  
    if item.download_link:
      return redirect(item_list)  # Redirect to external link
  
  return redirect('item_detail', item_id)  # Redirect back to item details

def download_history(request):
  user_id = 1  # Replace with actual user logic
  downloaded_items = DownloadedItem.objects.filter(user_id=user_id)
  context = {'downloaded_items': downloaded_items}
  return render(request, 'download_history.html', context)
