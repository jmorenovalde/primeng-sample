import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';

import { HomeComponent } from './home.component';
import { CardModule } from 'primeng/card';
import { NgTruncatePipeModule } from '@pipes/truncate.pipe';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CardModule,
    GalleriaModule,
    TabViewModule,
    TranslateModule.forChild(),
    NgTruncatePipeModule,
  ],
})
export class HomeModule {}
