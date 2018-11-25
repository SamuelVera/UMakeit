import { Component, OnInit} from '@angular/core';
import { CarouselImagesService, Image } from './../../core/carousel-images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  images: Image[];
  showNavigationIndicators = false;

  constructor(private carouselImagesService: CarouselImagesService) { }

  ngOnInit() {
    this.getImages();
  }

  private getImages(){
    this.carouselImagesService.getImages().subscribe(data =>{
      this.images = data;
    })
  }
}
