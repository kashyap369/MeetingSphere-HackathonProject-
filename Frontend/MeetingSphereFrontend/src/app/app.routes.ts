import { Routes } from '@angular/router';
import { LangingPage } from './LandingPage/langing-page/langing-page';
import { Home } from './home/home';
import { MainLayout } from './Layouts/main-layout/main-layout';
import { HomePage } from './Pages/home-page/home-page';
import { History } from './Pages/history/history';
import { Notes } from './Pages/notes/notes';
import { AISummary } from './Pages/aisummary/aisummary';
import { UserProfile } from './Pages/user-profile/user-profile';

export const routes: Routes = [
    {
        path: '',redirectTo:'landingpage',pathMatch:'full'  
    },
    {
        path: 'landingpage',component:LangingPage,
    },
    {
        path:'',component:MainLayout,
        children:[
            {path:'home',component:HomePage},
            {path:'history',component:History},
            {path:'notes',component:Notes},
            {path:'aisummary',component:AISummary},
            {path:'profile',component:UserProfile},

        ]
    }
];
