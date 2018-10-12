import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends.component';

const friendsRoutes: Routes = [
  {path: '', component: FriendsComponent}
];

export const friendsRouting = RouterModule.forChild(friendsRoutes);

