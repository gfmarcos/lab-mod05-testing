import { Component, OnInit } from '@angular/core';
import { PictureEntity } from '../model/PictureEntity';
import { interval, timer } from 'rxjs';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  path: string = '../../assets/img/gallery/';
  format: string = '.jpeg';
  activePicture: number;
  pictures: PictureEntity[];
  pagination: number;
  btnDisablePrevious: boolean;
  btnDisableNext: boolean;
  btnDisablePreviousPic: boolean;
  btnDisableNextPic: boolean;
  btnZoom: boolean;
  thumbColumns: number;
  zoomLevel: string;
  intervalID: number;
  runGallery: boolean;

  constructor() {
    this.activePicture = 0;
    this.btnDisablePrevious = true;
    this.btnDisableNext = false;
    this.btnDisablePreviousPic = true;
    this.btnDisableNextPic = false;
    this.btnZoom = true;
    this.runGallery = false;
    this.pagination = 0;
    this.thumbColumns = 3;
    this.pictures = [
      {
        id: 1,
        src: `${this.path}photo-1458560871784-56d23406c091${this.format}`,
        title: 'Turntable',
      },
      {
        id: 2,
        src: `${this.path}photo-1483412033650-1015ddeb83d1${this.format}`,
        title: 'Vinyls',
      },
      {
        id: 3,
        src: `${this.path}photo-1502773860571-211a597d6e4b${this.format}`,
        title: 'Record store',
      },
      {
        id: 4,
        src: `${this.path}photo-1503440765842-0c8293cb78ba${this.format}`,
        title: 'Synthesizers',
      },
      {
        id: 5,
        src: `${this.path}photo-1505740420928-5e560c06d30e${this.format}`,
        title: 'Headphones',
      },
      {
        id: 6,
        src: `${this.path}photo-1511379938547-c1f69419868d${this.format}`,
        title: 'Guitars',
      },
      {
        id: 7,
        src: `${this.path}photo-1511671782779-c97d3d27a1d4${this.format}`,
        title: 'Microphone',
      },
      {
        id: 8,
        src: `${this.path}photo-1514320291840-2e0a9bf2a9ae${this.format}`,
        title: 'Concert',
      },
      {
        id: 9,
        src: `${this.path}photo-1494232410401-ad00d5433cfa${this.format}`,
        title: 'Cassette',
      },
      {
        id: 10,
        src: `${this.path}photo-1470225620780-dba8ba36b745${this.format}`,
        title: 'DJ',
      },
      {
        id: 11,
        src: `${this.path}photo-1510915361894-db8b60106cb1${this.format}`,
        title: 'Play guitar',
      },
      {
        id: 12,
        src: `${this.path}photo-1453738773917-9c3eff1db985${this.format}`,
        title: 'Record voices',
      },
    ];
  }

  ngOnInit(): void {}

  paginationNext() {
    if (this.pagination < this.pictures.length - this.thumbColumns) {
      this.pagination = this.pagination + this.thumbColumns;
      this.btnDisablePrevious = false;
    }
    if (this.pagination === this.pictures.length - this.thumbColumns) {
      this.btnDisableNext = true;
    }
  }
  paginationPrevious() {
    if (this.pagination > 0) {
      this.pagination = this.pagination - this.thumbColumns;
      this.btnDisableNext = false;
    }
    if (this.pagination === 0) {
      this.btnDisablePrevious = true;
    }
  }
  selectPicture(id: number) {
    this.activePicture = --id;
  }
  btnNextPrevState() {
    if (this.activePicture === 0) {
      this.btnDisablePreviousPic = true;
    } else {
      this.btnDisablePreviousPic = false;
    }
    if (this.activePicture === this.pictures.length - 1) {
      this.btnDisableNextPic = true;
    } else {
      this.btnDisableNextPic = false;
    }
  }
  pictureNext() {
    this.stopGallery();
    if (this.activePicture < this.pictures.length - 1) {
      this.activePicture = ++this.activePicture;
      this.btnNextPrevState();
      if (this.activePicture - this.thumbColumns + 1 > this.pagination) {
        this.paginationNext();
      }
    }
  }
  picturePrevious() {
    this.stopGallery();
    if (this.activePicture > 0) {
      this.activePicture = --this.activePicture;
      this.btnNextPrevState();
      if (this.activePicture < this.pagination) {
        this.paginationPrevious();
      }
    }
  }
  zoom(level: string): void {
    switch (level) {
      case 'in':
        this.zoomLevel = 'zoom-in';
        this.btnZoom = false;
        break;
      case 'out':
        this.zoomLevel = 'zoom-out';
        this.btnZoom = true;
        break;
    }
  }
  galleryCallback() {
    if (this.activePicture < this.pictures.length - 1) {
      this.activePicture = ++this.activePicture;
      this.btnNextPrevState();
      if (this.activePicture - this.thumbColumns + 1 > this.pagination) {
        this.paginationNext();
      }
    } else {
      this.activePicture = 0;
      this.pagination = 0;
      this.btnDisablePrevious = true;
      this.btnDisableNext = false;
      this.btnNextPrevState();
    }
  }
  playGallery() {
    this.intervalID = setInterval(() => this.galleryCallback(), 2000);
    this.runGallery = true;
  }
  stopGallery() {
    clearInterval(this.intervalID);
    this.runGallery = false;
  }
}

/*
Lanza setinterval ejecuta picturenex
*/
