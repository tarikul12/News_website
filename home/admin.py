from django.contrib import admin
from .models import NewsItem

@admin.register(NewsItem)
class NewsItemAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'category', 'created_at', 'modified_at')  # Display new fields
    list_filter = ('category', 'created_at', 'modified_at')
    search_fields = ('title', 'description', 'subheading')
