import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { TextsModule } from '../texts/texts.module';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    UiModule,
    TextsModule,
    IconsModule,
    NgbModule
  ]
})
export class CoreModule { }
