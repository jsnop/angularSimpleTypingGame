import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './game-container/input/input.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { SuccessComponent } from './game-container/success/success.component';
import { WordComponent } from './game-container/word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    InputComponent,
    GameContainerComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
