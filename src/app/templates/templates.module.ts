import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullWidthComponent } from './template-full-width/template-full-width.component';
import { TemplateContainerComponent } from './template-container/template-container.component';



@NgModule({
  declarations: [TemplateFullWidthComponent, TemplateContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateFullWidthComponent, TemplateContainerComponent]
})
export class TemplatesModule { }
