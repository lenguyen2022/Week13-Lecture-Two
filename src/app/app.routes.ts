import { Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BookDetailsComponent} from "./book/book-details/book-details.component";
import {EditBookComponent} from "./book/edit-book/edit-book.component";

export const routes: Routes = [
  { path: 'book', component: BookComponent, children: [
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: EditBookComponent }
    ] },


];
