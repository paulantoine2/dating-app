import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    const initPos = {
      x: 0,
      y: 0
    };
    const card = document.getElementById('card');
    card.addEventListener('touchstart', (ev) => {
      initPos.x = ev.touches[0].clientX;
      initPos.y = ev.touches[0].clientY;
    });
    card.addEventListener('touchmove', (ev) => {
      const diff = {
        x: ev.touches[0].clientX - initPos.x,
        y: ev.touches[0].clientX - initPos.y,
      };
      card.style.transform = `translateX(${diff.x}px)`;
    });
    card.addEventListener('touchend', (ev) => {
      card.style.transition = `all 0.2s ease`;
      setTimeout(() => {
        card.style.transition = null;
      }, 200);
      card.style.transform = `translateX(0px)`;
    });
  }

}
