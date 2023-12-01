import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BankComponent } from './webpage/bank/bank.component';
import { HeaderComponent } from './webpage/header/header.component';
import { FooterComponent } from './webpage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
