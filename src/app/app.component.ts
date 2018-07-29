import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  fired = false;

  data: any;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  

  constructor() {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(image: string) {
    this.croppedImage = image;
}
imageLoaded() {
    // show cropper
    console.log("FIRED");
    this.fired = true; 
}
loadImageFailed() {
    // show message
}

}
