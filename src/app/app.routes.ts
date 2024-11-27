import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: NotFoundComponent },      
    { path: 'info', component: InfoComponent },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {} 
