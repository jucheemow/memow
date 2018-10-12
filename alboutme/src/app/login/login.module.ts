import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { loginRouting } from './login.routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    loginRouting,
  ],
  exports: [LoginComponent],
  entryComponents: [LoginComponent]
})

export class LoginModule { }
