import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { CeoComponent } from './ceo/ceo.component';
import { DirComponent } from './dir/dir.component';
import { TemplateRegisterComponent } from './template-register/template-register.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { PostPipe } from '../post.pipe';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { AuthGuard } from '../auth.guard';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app.store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
  {
    path: '',
    component: LoginReactiveComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'posts/create',
    component: PostCreateComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'posts/:id/edit',
    component: PostCreateComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    CeoComponent,
    DirComponent,
    TemplateRegisterComponent,
    ReactiveRegisterComponent,
    LoginReactiveComponent,
    PostPipe,
    NavComponent,
    PostListComponent,
    PostCreateComponent,
    PostDetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
