from django.db import models

class NewsItem(models.Model):
    CATEGORY_CHOICES = [
        ('Home', 'Home'),
        ('World', 'World'),
        ('Politics', 'Politics'),
        ('Technology', 'Technology'),
        ('Business', 'Business'),
        ('Science', 'Science'),
        ('Sports', 'Sports'),
        ('Entertainment', 'Entertainment'),
        ('Arts', 'Arts & Entertainment Desk'),
    ]
    
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    subheading = models.CharField(max_length=200)
    image = models.ImageField(upload_to='news_images/')
    content = models.TextField()
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default='Arts'  # Default category is Arts & Entertainment Desk
    )
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    href_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
