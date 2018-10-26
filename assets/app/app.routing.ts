import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

//import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
    { path: '' , redirectTo:'/home', pathMatch:'full' },
    { path: 'home' , component: AppComponent },
    //{ path: 'about' , component: AboutComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);