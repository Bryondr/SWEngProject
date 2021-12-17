import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { NaviComponent } from './components/navi/navi.component';

import { SearchBookPipe } from './pipes/search-book.pipe';
import { LoginComponent } from './components/login/login.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';





@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    LeftMenuComponent,
    BooksComponent,
    SearchBookPipe,
    LoginComponent,
    BookDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
