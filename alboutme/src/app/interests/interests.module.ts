import { InterestsComponent } from './interests.component';
import { NgModule } from '@angular/core';
import { interestsRouting } from './interests.routing';

@NgModule({
  declarations: [InterestsComponent],
  imports: [
    interestsRouting,
  ],
  exports: [InterestsComponent],
  entryComponents: [InterestsComponent]
})

export class InterestsModule { }
