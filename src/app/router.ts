
import { RouterModule, Routes } from '@angular/router';
import {ImgUploadComponent} from './dashboard/img-upload/img-upload.component';


const APP_ROUTES: Routes =[
    { path: 'img', component: ImgUploadComponent },
  ];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);