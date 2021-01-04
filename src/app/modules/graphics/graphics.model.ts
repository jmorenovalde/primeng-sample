import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { GraphicsComponent } from './graphics.component';

@NgModule({
  declarations: [GraphicsComponent],
  exports: [GraphicsComponent],
  imports: [CardModule, ChartModule, CommonModule, SkeletonModule, TranslateModule.forChild()],
})
export class GraphicsModule {}
