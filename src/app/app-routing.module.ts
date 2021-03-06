import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogFormComponent } from './modules/blog/blog-post/blog-form.component';
import { BlogDetailComponent } from './modules/blog/blog-detail/blog-detail.component';

const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/new', component: BlogFormComponent },
  { path: 'blog/:postId', component: BlogDetailComponent },
  { path: 'blog/:postId/edit', component: BlogFormComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
