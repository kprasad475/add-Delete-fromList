from django.shortcuts import render,redirect
from .models import Movie
from .forms import MovieForm

def Home(req):
    movies=Movie.objects.all()
    return render(req,'index.html',{'movies':movies})




def Form(req):
    if req.method=="POST": 
        
        name=req.POST.get('name','')
        rate=req.POST.get('rate','')
        screen=req.POST.get('screen','')
        language=req.POST.get('language','')
        duration=req.POST.get('duration','')
        category=req.POST.get('category','')
        certification=req.POST.get('certification','')
        date=req.POST.get('date','')
        image=req.FILES['image']
        banner=req.FILES['banner']
        description=req.POST.get('description','')        
        movie=Movie(name=name,rate=rate,screen=screen,language=language,duration=duration,category=category,certification=certification,date=date,image=image,banner=banner,description=description)
        movie.save()
        return redirect('home')
    return render(req,'form.html')



def Details(req,id):
    movies=Movie.objects.get(id=id)
        
        
    
    return render(req,'details.html',{'movies':movies})


def Update(req,id):
    movies=Movie.objects.get(id=id)
    # if req.method=="POST": 
        
    #     name=req.POST.get('name','')
    #     rate=req.POST.get('rate','')
    #     screen=req.POST.get('screen','')
    #     language=req.POST.get('language','')
    #     duration=req.POST.get('duration','')
    #     category=req.POST.get('category','')
    #     certification=req.POST.get('certification','')
    #     date=req.POST.get('date','')
    #     image=req.FILES['image']
    #     banner=req.FILES['banner']
    #     description=req.POST.get('description','')        
    #     Movie.objects.filter(id=id).update(name=name,rate=rate,screen=screen,language=language,duration=duration,category=category,certification=certification,date=date,image=image,banner=banner,description=description)
    #     return redirect('home')
    f=MovieForm(req.POST,req.FILES or None,instance=movies)
    if f.is_valid():
        f.save()
        return redirect('home')
    return render(req,'formUpdate.html',{"movies":movies,'f':f})

def Delete(req,id):
    movies=Movie.objects.get(id=id)
    if req.method=="POST":
        Movie.objects.filter(id=id).delete()
        return redirect('home')
    return render(req,'delete.html',{"movies":movies})