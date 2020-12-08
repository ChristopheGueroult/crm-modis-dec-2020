import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';


@NgModule({
  declarations: [IconNavComponent, IconCloseComponent, IconDeleteComponent, IconEditComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconCloseComponent, IconDeleteComponent, IconEditComponent]
})
export class IconsModule { }
