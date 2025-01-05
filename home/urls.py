from django.urls import path
from . import views


urlpatterns = [
    path("index/", views.index, name="index"), 
    path('news/<int:id>/', views.news_detail, name='news_detail'),
    path('<str:category>/', views.category_view, name='category_view'),
    path("world/", views.world, name="world"),
    path("politics/", views.politics, name="politics"),
    path("technology/", views.technology, name="technology"),
    path("business/", views.business, name="business"),
    path("science/", views.science, name="science"),
    path("sports/", views.sports, name="sports"),
    path("entertainment/", views.entertainment, name="entertainment"),
    path("policy/", views.policy, name="policy"),
    path("contract/", views.contract, name="contract"),
    
]