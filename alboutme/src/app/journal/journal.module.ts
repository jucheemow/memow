import { JournalComponent } from './journal.component';
import { NgModule } from '@angular/core';
import { journalRouting } from './journal.routing';

@NgModule({
  declarations: [JournalComponent],
  imports: [
    journalRouting,
  ],
  exports: [JournalComponent],
  entryComponents: [JournalComponent]
})

export class JournalModule { }
