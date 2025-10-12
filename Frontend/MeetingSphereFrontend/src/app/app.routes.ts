import { Routes } from '@angular/router';
import { LangingPage } from './LandingPage/langing-page/langing-page';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',component:LangingPage,
    },
    {
        path:'home',component:Home
    }
];
