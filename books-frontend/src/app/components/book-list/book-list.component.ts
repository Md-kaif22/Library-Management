import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

// Define the Book type (based on assumed structure)
interface Book {
    id: number;
    title: string;
    author_name: string;
    year: number;
}

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports:[NgIf,NgFor],
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
    // Define books as an array of Book type
    books: Book[] = [];

    constructor(private apiService: ApiService,private router: Router) {}

    ngOnInit(): void {
        this.apiService.getBooks().subscribe((data) => {
            this.books = data;
        });
    }

  navigateToManageList() {
    this.router.navigate(['/manage-list']);
  }
}
