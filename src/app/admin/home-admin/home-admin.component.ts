import { AuthService } from './../../core/auth.service';
import { CarouselImagesService, Image } from './../../core/carousel-images.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
  providers: [NgbCarouselConfig]
})

export class HomeAdminComponent implements OnInit {

  images: Image[];
  showNavigationIndicators = false;
  error: string;
  private uploadTask: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;
  private toAdd: Image = {
    image: '',
  }
  newEmail: string = '';
  pass: string = '';
  passConfirm: string = '';
  validPass: boolean = false;
  validConfirPass: boolean = false;
  
  errMes1 = 'The email address is already in use by another account.';
  errMes2 = 'The email address is badly formatted.';
  errMes3 = 'Los campos son inválidos';
  errMes4 = 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.';

  constructor(private carouselImagesService: CarouselImagesService,
    private afStorage: AngularFireStorage,
    public auth: AuthService) { }

  ngOnInit() {
    this.auth.error = '';
    this.getImages();
  }

  private getImages(){
    this.carouselImagesService.getImages().subscribe(data =>{
      this.images = data;
    })
  }

  eliminar(image: Image, i: number){
    this.carouselImagesService.deleteImage(image);
    this.images.slice(i,1);
  }

  advance(e){
    if(this.newEmail!='' && this.pass!=''){
      return true;
    }else{
      return false;
    }
  }

  validarConfirPass(e){
    if(this.pass != this.passConfirm){
      this.validConfirPass = true;
    }else{
      this.validConfirPass = false;
    }
  }

  validarPass(e){
    if(this.pass.length < 8){
      this.validPass = true;
    }else{
      this.validPass = false;
    }
    this.validarConfirPass(e)
  }

  register(e, f: NgForm){
    if(this.advance && !this.validConfirPass && !this.validPass){
      this.auth.signUpAdmin(this.newEmail, this.pass);
    }else{
      this.auth.error = this.errMes3;
    }
  }

  uploadFoto(e: any){
    const file: File = e.target.files[0];
    if(file){
      if(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg'){
        const id = 'carousel-images/'+file.name;
        this.ref = this.afStorage.ref(id);
        this.uploadTask = this.ref.put(file);
        this.uploadProgress = this.uploadTask.percentageChanges();
        this.ref.getDownloadURL().subscribe(data =>{
          this.toAdd.image = data;
          this.carouselImagesService.addImage(this.toAdd);
          this.toAdd.image = '';
          this.images.push(data);
          this.error = '';
        });
      }else{
        this.error = 'El archivo no es una imágen';
      }
    }else{
      this.error = '';
    }
  }

}
