import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatIconModule,
  MatCardModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FamilyComponent } from './family/family.component';
import { FriendsComponent } from './friends/friends.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { JournalComponent } from './journal/journal.component';
import { InterestsComponent } from './interests/interests.component';
import { ArtsComponent } from './arts/arts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { GoalsComponent } from './goals/goals.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    FriendsComponent,
    FavoritesComponent,
    JournalComponent,
    InterestsComponent,
    ArtsComponent,
    ProjectsComponent,
    ChallengesComponent,
    GoalsComponent,
    ThoughtsComponent,
    LoginComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
