import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';

import{ ClienteService } from './cliente.service';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [ClienteService]
})
export class CoreModule { }
