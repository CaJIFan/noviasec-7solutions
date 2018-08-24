from django.shortcuts import render

# Create your views here.
def register_vendor(request):
    return render(request, 'register_vendor.html')
