import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

export class Image{
  id ?: string;
  image ?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarouselImagesService {

  private carouselCollection: AngularFirestoreCollection<Image>;
  private carouselImages: Observable<Image[]>;
  private carouselImageDoc: AngularFirestoreDocument<Image>;

  constructor(public afs: AngularFirestore,
    ) {
    }

  public addImage(carousel: Image){
    this.carouselCollection.add(carousel);
    console.log("Image added to carousel");
  }

  public getImages(){
    console.log('carousel fetch')
    this.carouselCollection = this.afs.collection<Image>('carousel-images', ref => ref.orderBy('image','asc'));
    this.carouselImages = this.carouselCollection.snapshotChanges().pipe(
      map(actions => actions.map( ref => { 
        const data = ref.payload.doc.data() as Image
        const id = ref.payload.doc.id;
        return {id, ...data};
        }
      ))
    );
    return this.carouselImages;
  }

  public deleteImage(image: Image){
    this.carouselImageDoc = this.afs.doc(`carousel-images/${image.id}`);
    this.carouselImageDoc.delete();
    console.log("Image deleted");
  }

}
