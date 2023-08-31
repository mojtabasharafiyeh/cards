import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 1;
  images = [
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
    {
      title: 'a',
      url: 'https://images.freeimages.com/images/previews/34e/williamstown-1057646.jpg',
    },
    {
      title: 'b',
      url: 'https://images.freeimages.com/images/previews/ddf/tour-d-eiffel-1447025.jpg',
    },
    {
      title: 'c',
      url: 'https://images.freeimages.com/variants/a4nP2t7D23VdcT1Eu14pX6hN/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      title: 'd',
      url: 'https://images.freeimages.com/images/previews/b00/indian-bride-1181855.jpg',
    },
  ];
  clickHandler(i: number) {
    this.currentPage = i;
  }
  nextHandler() {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage += 1;
    }
  }
  preHandler() {
    if (this.currentPage !== 0) {
      this.currentPage -= 1;
    }
  }
}
