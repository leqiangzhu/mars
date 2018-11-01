import { RoverFormComponent } from './rover-form/rover-form.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [ 
{
  path: '',
  component: RoverFormComponent
},

{
    path: 'user/photos',
    component: UserPhotosListComponent
  }
]