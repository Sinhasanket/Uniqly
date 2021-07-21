import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginCompononent } from '../app/Login/login.component';
import { NavigationCompononent } from '../app/navigation/navigation.component';
import { LoginArtisanCompononent } from '../app/login-artisan/login-artisan.component';
import { HomeCompononent } from '../app/home/home.component';
import { ArtDetailCompononent } from '../app/art-detail/art-detail.component';
import { ProfileCompononent } from '../app/profile/profile.component';
import { ArtisanRegisterCompononent } from '../app/artisan-register/artisan-register.component';
import { CustomerRegisterCompononent } from '../app/customer-register/customer-register.component';
import { MyArtCompononent } from '../app/my-art/my-art.component';
import { ProductConfirmationCompononent } from './product-confirmation/product-confirmation.component';

const appRoutes : Routes =  [
 { path: '', component: LoginCompononent},
 { path: 'artisan',component: LoginArtisanCompononent },
 { path: 'home', component: HomeCompononent},
 { path: 'detail', component: ArtDetailCompononent },
 { path: 'profile', component: ProfileCompononent },
 { path: 'artisan/register', component: ArtisanRegisterCompononent },
 { path: 'register', component: CustomerRegisterCompononent },
 { path: 'my-art', component: MyArtCompononent},
 { path: 'confirmation', component:ProductConfirmationCompononent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginCompononent,
    NavigationCompononent,
    LoginArtisanCompononent,
    HomeCompononent,
    ArtDetailCompononent,
    ProfileCompononent,
    ArtisanRegisterCompononent,
    CustomerRegisterCompononent,
    MyArtCompononent,
    ProductConfirmationCompononent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
