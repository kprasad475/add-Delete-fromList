from django.shortcuts import render

# Create your views here.

def registerUser(req):
    if req.method=='POST':
        fname=req.POST.get("fname","")
        lname=req.POST.get("lname","")
        email=req.POST.get("email","")
        username=req.POST.get("username","")
        password=req.POST.get("password","")
        cpassword=req.POST.get("cpassword","")
        print(fname,lname,email,username,password,cpassword)

    return render(req, 'registeruser.html')

