import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Book {
    id: number;
    title: string;
    year: number;
    author_name: string;
}

interface BookList {
    id: number;
    name: string;
    books: Book[];
}

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private baseUrl = 'http://127.0.0.1:8000/api'; // Backend URL

    constructor(private http: HttpClient) {}

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.baseUrl}/books/`);
    }

    getBookLists(): Observable<BookList[]> {
        return this.http.get<BookList[]>(`${this.baseUrl}/booklists/`);
    }

    createBookList(name: string): Observable<BookList> {
        return this.http.post<BookList>(`${this.baseUrl}/booklists/`, { name });
    }

    deleteBookList(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/booklists/${id}/`);
    }

    addBookToList(listId: number, bookId: number): Observable<BookList> {
        return this.http.post<BookList>(`${this.baseUrl}/booklists/${listId}/books/`, { book_id: bookId });
        // return this.http.post<BookList>(`${this.baseUrl}/${listId}/books/`, { book_id: bookId });
    }

    removeBookFromList(listId: number, bookId: number): Observable<BookList> {
        return this.http.delete<BookList>(`${this.baseUrl}/booklists/${listId}/books/${bookId}/`);
    }
}
