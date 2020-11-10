import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HeaderPublicComponent } from './layout/header-public/header-public.component';
import { HeaderPrivateComponent } from './layout/header-private/header-private.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuPublicComponent } from './layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './layout/menu-private/menu-private.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RotateComponent } from './rotate/rotate.component';
import { RotateDirective } from './directives/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    GalleryComponent,
    DashboardComponent,
    ProfileComponent,
    RotateComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
