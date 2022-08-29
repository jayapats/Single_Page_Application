from django.urls import path
from . import views

urlpatterns = [
    #http://127.0.0.1:9000/ugcbackend/myapp/
    path('myapp/', views.welcomeUGC),
    path('auth/', views.auth_oidc_codeflow)
    
]