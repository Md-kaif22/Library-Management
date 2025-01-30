from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    year = models.PositiveIntegerField()
    author_name = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class BookList(models.Model):
    name = models.CharField(max_length=255)
    books = models.ManyToManyField(Book, related_name="book_lists")

    def __str__(self):
        return self.name
