import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NewTaskComponentComponent } from './new-task-component/new-task-component.component';
import { TasksListComponentComponent } from './tasks-list-component/tasks-list-component.component';
import { FormsModule } from '@angular/forms';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    NewTaskComponentComponent,
    TasksListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // needed for ngModel
    PokemonBaseModule //Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
