import { Routes } from '@angular/router';
import { AddEjemploComponent } from './components/add-ejemplo/add-ejemplo.component';
import { EditorialComponent } from './editorial/editorial.component';
import { AlumnoComponent } from './alumno/alumno.component';

export const routes: Routes = [
    { path: '', component: AlumnoComponent },
    { path: 'editorial', component: EditorialComponent },
    { path: 'alumno', component: AlumnoComponent }
];