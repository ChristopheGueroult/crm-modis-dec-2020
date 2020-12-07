import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    IconsModule
  ]
})
export class CoreModule { }
