import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ProfileImgComponent } from './profile-img/profile-img.component';
import { ImageService } from '../../services/image.service';


// const routes: Routes=[];
@NgModule({
  declarations: [ProfileImgComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forChild(routes)
  ],
  exports:[ProfileImgComponent],
  providers:[ImageService]
})
export class ImageUploadModule { }
