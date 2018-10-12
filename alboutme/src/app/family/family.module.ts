import { FamilyComponent } from './family.component';
import { NgModule } from '@angular/core';
import { familyRouting } from './family.routing';

@NgModule({
  declarations: [FamilyComponent],
  imports: [
    familyRouting,
  ],
  exports: [FamilyComponent],
  entryComponents: [FamilyComponent]
})

export class FamilyModule { }
