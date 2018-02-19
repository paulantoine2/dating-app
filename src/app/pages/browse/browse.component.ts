import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  cards = ['Laura', 'Julie', 'Mathilde', 'Tina', 'Caro'];

  constructor() {

  }

  initSwipe() {
    const initPos = {
      x: 0,
      y: 0
    };
    const diff = {
      x: 0,
      y: 0
    };
    const card = <HTMLElement>document.getElementsByClassName('card')[0];
    card.addEventListener('touchstart', (ev) => {
      initPos.x = ev.touches[0].clientX;
      initPos.y = ev.touches[0].clientY;
    });
    card.addEventListener('touchmove', (ev) => {
      diff.x = ev.touches[0].clientX - initPos.x;
      diff.y = ev.touches[0].clientY - initPos.y;
      card.style.transform = `translateX(${diff.x}px)`;
    });
    card.addEventListener('touchend', (ev) => {
      card.style.transition = `all 0.2s ease`;
      if (diff.x > 200) {
        card.style.transform = `translateX(150%)`;
        setTimeout(() => {
          this.cards.shift();
          setTimeout(() => {
            this.initSwipe();
          }, 100);
        }, 200);
      } else {
        card.style.transform = `translateX(0px)`;
        setTimeout(() => {
          card.style.transition = null;
        }, 200);
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.initSwipe();
    }, 100);

  }

}
