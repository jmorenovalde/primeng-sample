import { Routes } from '@angular/router';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { HomeComponent } from '@modules/home/home.component';
import { ListComponent } from '@modules/list/list.component';
import { FormComponent } from '@modules/form/form.component';
import { GraphicsComponent } from '@modules/graphics/graphics.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
