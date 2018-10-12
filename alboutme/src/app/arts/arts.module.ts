import { ArtsComponent } from './arts.component';
import { NgModule } from '@angular/core';
import { artsRouting } from './arts.routing';

@NgModule({
  declarations: [ArtsComponent],
  imports: [
    artsRouting,
  ],
  exports: [ArtsComponent],
  entryComponents: [ArtsComponent]
})

export class ArtsModule { }
