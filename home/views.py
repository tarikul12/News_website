from django.shortcuts import render, get_object_or_404
from .models import NewsItem

def index(request):
    # Retrieve all news items
    news_items = NewsItem.objects.all()

    # Render the home page with the list of news items
    return render(request, 'home/index.html', {'news_list': news_items})

def news_detail(request, id):
    # Retrieve the news item based on the ID
    news_item = get_object_or_404(NewsItem, id=id)
    
    # Render the news detail page with the specific news item
    return render(request, 'home/news_detail.html', {'news_item': news_item})

def category_view(request, category):
    # Fetch news items for the given category
    news_items = NewsItem.objects.filter(category=category).order_by('-created_at')

    # Context passed to the template
    context = {
        'news_items': news_items,
        'category': category,
    }

    # Render template dynamically based on category
    return render(request, f'home/{category.lower()}.html', context)


def world(request):
    return render(request,'home/world.html')

def politics(request):
    return render(request,'home/politics.html')

def technology(request):
    return render(request,'home/technology.html')

def business(request):
    return render(request,'home/business.html')

def science(request):
    return render(request,'home/science.html')

def sports(request):
    return render(request,'home/sports.html')


def entertainment(request):
    return render(request,'home/entertainment.html')

def policy(request):
    return render(request,'home/policy.html')

def contract(request):
    return render(request,'home/contract.html')