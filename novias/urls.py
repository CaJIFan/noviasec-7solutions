"""novias URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from build_pkg import views as bp_views
from reg_vendor import views as rv_views
from main_app import views as main_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main_views.home, name="home"),
    path('build_pkg/', bp_views.build_pkg, name="bp"),
    path('wedding_type/', bp_views.wedding_type, name="wedding_type"),
    path('register_vendor/', rv_views.register_vendor, name="rv"),
    path('services_list/', bp_views.services_list, name="services_list"),
    path('total/', bp_views.total, name="total"),
]
