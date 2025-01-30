from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, BookListViewSet, manage_book_in_booklist, manage_book_in_booklist_delete

router = DefaultRouter()
router.register('books', BookViewSet)
router.register('booklists', BookListViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('booklists/<int:booklist_id>/books/', manage_book_in_booklist, name='manage_book_in_booklist'),
    path('booklists/<int:booklist_id>/books/<int:book_id>/', manage_book_in_booklist_delete, name='manage_book_in_booklist_delete'),
]
