import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [CommonModule, FormsModule, MultiSelectModule, TableModule, TranslateModule.forChild()],
})
export class FormModule {}
