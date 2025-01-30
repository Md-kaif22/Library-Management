from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Book, BookList
from .serializers import BookSerializer, BookListSerializer
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookListViewSet(viewsets.ModelViewSet):
    queryset = BookList.objects.all()
    serializer_class = BookListSerializer


    # @action(detail=True, methods=['post'], url_path='add-book/(?P<book_id>[^/.]+)')
    # def add_book(self, request, pk=None, book_id=None):
    #     try:
    #         booklist = self.get_object()
    #         book = Book.objects.get(id=book_id)
    #         booklist.books.add(book)
    #         return Response({"message": "Book added to list successfully"}, status=status.HTTP_200_OK)
    #     except Book.DoesNotExist:
    #         return Response({"error": "Book not found"}, status=status.HTTP_404_NOT_FOUND)
    #     except Exception as e:
    #         return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def manage_book_in_booklist(request, booklist_id):
    booklist = get_object_or_404(BookList, id=booklist_id)
    
    book_id = request.data.get("book_id")  # Get book_id from payload
    if not book_id:
        return Response({"error": "book_id is required in the request body"}, status=status.HTTP_400_BAD_REQUEST)

    book = get_object_or_404(Book, id=book_id)

    if request.method == 'POST':
        booklist.books.add(book)
        return Response({"message": "Book added to booklist successfully"}, status=status.HTTP_200_OK)

    # elif request.method == 'DELETE':
    #     booklist.books.remove(book)
    #     return Response({"message": "Book removed from booklist successfully"}, status=status.HTTP_200_OK)

    return Response({"error": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def manage_book_in_booklist_delete(request, booklist_id, book_id):
    booklist = get_object_or_404(BookList, id=booklist_id)
    book = get_object_or_404(Book, id=book_id)

    book = get_object_or_404(Book, id=book_id)

    if request.method == 'DELETE':
        booklist.books.remove(book)
        return Response({"message": "Book removed from booklist successfully"}, status=status.HTTP_200_OK)

    return Response({"error": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)
