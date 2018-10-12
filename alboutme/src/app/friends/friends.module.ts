import { FriendsComponent } from './friends.component';
import { NgModule } from '@angular/core';
import { friendsRouting } from './friends.routing';

@NgModule({
  declarations: [FriendsComponent],
  imports: [
    friendsRouting,
  ],
  exports: [FriendsComponent],
  entryComponents: [FriendsComponent]
})

export class FriendsModule { }
