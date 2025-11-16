import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Customer } from './customer/customer';
import { Post } from './post/post';
import { NotfoundComponent } from './notfound-component/notfound-component';

export const routes: Routes = [
    {
        path:'dashboard',component:Dashboard,
    },{
        path:"customer",component:Customer,
    },{
        path:"post",component:Post,
    },{
       path:'',redirectTo:'/dashboard',pathMatch:'full' 
    },{
        path:"**",component:NotfoundComponent
    }
];
