import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RsjsComponent } from './pages/rsjs/rsjs.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  {
    path: 'page', component: LayoutComponent,
    children: [
      { path: 'rx', component: RsjsComponent },
      { path: 'home', component: HomeComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
