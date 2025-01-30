import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';    // Import FormsModule

// Define BookList and Book types
interface Book {
    id: number;
    title: string;
    author_name: string;
    year: number;
}

interface BookList {
    id: number;
    name: string;
    books: Book[];
}

@Component({
    selector: 'app-manage-lists',
    standalone: true,
    templateUrl: './manage-lists.component.html',
    styleUrls: ['./manage-lists.component.scss'],
    imports: [CommonModule, FormsModule],  // Correct placement of imports
})
export class ManageListsComponent implements OnInit {
    // Define bookLists as an array of BookList type
    bookLists: BookList[] = [];
    listName = '';  // Type inference is enough for string

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.getBookLists();
    }

    // Fetch all book lists
    getBookLists(): void {
        this.apiService.getBookLists().subscribe((data) => {
            this.bookLists = data;
        });
    }

    // Create a new book list
    onCreateList(): void {
        if (this.listName.trim() === '') return;
        this.apiService.createBookList(this.listName).subscribe(() => {
            this.getBookLists();
            this.listName = '';
        });
    }

    // Delete a book list
    onDeleteList(id: number): void {
        this.apiService.deleteBookList(id).subscribe(() => {
            this.getBookLists();
        });
    }

    // Add a book to the list
    onAddBookToList(listId: number): void {
        const bookId = prompt('Enter book ID to add to list:');
        if (bookId) {
            this.apiService.addBookToList(listId, parseInt(bookId, 10)).subscribe(() => {
                this.getBookLists();
            });
        }
    }

    // Remove a book from the list
    onRemoveBookFromList(listId: number, bookId: number): void {
        this.apiService.removeBookFromList(listId, bookId).subscribe(() => {
            this.getBookLists();
        });
    }
}
