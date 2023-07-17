import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MarkersMapComponent } from './pages/markers-map/markers-map.component';
import { FullInfoComponent } from './pages/full-info/full-info.component';
import { AddMarkerComponent } from './components/add-marker/add-marker.component';


const routes : Routes=[
    {
        path:'',
        component: MarkersMapComponent
    },
    {
        path:'add',
        component: AddMarkerComponent
    },
    {
        path:'info',
        component: FullInfoComponent
    },
    {path:'**', redirectTo:''},
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],

})
export class MapRoutingModule { }
