import { Routes, RouterModule } from '@angular/router';
import { JournalComponent } from './journal.component';

const journalRoutes: Routes = [
  {path: '', component: JournalComponent}
];

export const journalRouting = RouterModule.forChild(journalRoutes);

