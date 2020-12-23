import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [MenubarModule],
})
export class MenuModule {}
