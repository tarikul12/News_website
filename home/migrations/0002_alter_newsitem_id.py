# Generated by Django 5.1.2 on 2025-01-05 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsitem',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
