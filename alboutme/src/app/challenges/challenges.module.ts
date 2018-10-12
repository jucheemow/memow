import { ChallengesComponent } from './challenges.component';
import { NgModule } from '@angular/core';
import { challengesRouting } from './challenges.routing';

@NgModule({
  declarations: [ChallengesComponent],
  imports: [
    challengesRouting,
  ],
  exports: [ChallengesComponent],
  entryComponents: [ChallengesComponent]
})

export class ChallengesModule { }
