import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { ManageListsComponent } from './components/manage-lists/manage-lists.component';

export const routes: Routes = [
    { path: '', component: BookListComponent },
    { path: 'manage-list', component: ManageListsComponent },
];
