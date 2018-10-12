import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'arts', loadChildren: './arts/arts.module#ArtsModule'},
  {path: 'challenges', loadChildren: './challenges/challenges.module#ChallengesModule'},
  {path: 'family', loadChildren: './family/family.module#FamilyModule'},
  {path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesModule'},
  {path: 'friends', loadChildren: './friends/friends.module#FriendsModule'},
  {path: 'goals', loadChildren: './goals/goals.module#GoalsModule'},
  {path: 'interests', loadChildren: './interests/interests.module#InterestsModule'},
  {path: 'journal', loadChildren: './journal/journal.module#JournalModule'},
  {path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
  {path: 'thoughts', loadChildren: './thoughts/thoughts.module#ThoughtsModule'},
  {path: '**', redirectTo: '/login'}
];

export const appRouting = RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
