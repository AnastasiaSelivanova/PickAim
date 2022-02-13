"use strict";


(function timeAnimationIdeaIcon() {
   let icons = document.querySelectorAll('.idea__column-im');
   let time = 0;
   let columns = document.querySelector('.idea__columns');

   document.addEventListener('scroll', () => {
      // console.log(columns.offsetTop);
      // console.log(pageYOffset)
      if (pageYOffset >= columns.offsetTop - 900) {
         for (let icon of icons) {
            setTimeout(() => {
               icon.style.animationName = 'animIconIdeaColumn';
            }, time);
            time += 500;
         }
      }
   });

}());


(function bacgroundColorTeamIcon() {
   let colors = ['#9308D2', '#AE1293', '#CE1F47', '#DE261F', '#8001FF', '#9C0BBD', '#BB1873', '#D72331'];

   let icons = document.querySelectorAll('.team__column-fon');

   for (let i = 0; i < icons.length; i++) {
      icons[i].style.backgroundColor = colors[i];
   }

}());


(function scrollMenu() {
   let menu = document.querySelector('.menu'),
      menuItems = menu.querySelectorAll('.menu__link'),
      elems = document.querySelector('.parent__groups'),
      elemsBlock = elems.querySelectorAll('.scroll');


   document.addEventListener('scroll', () => {
      onIf(elemsBlock)
   })

   function removeClassLink() {
      for (let item of menuItems) {
         item.classList.remove('link__active');
      }
   }

   function onIf(elems) {
      let body = document.querySelector('body');

      for (let i = 0; i < elems.length; i++) {
         let endClientHeight = elems[i].clientHeight + elems[i].offsetTop;
         let endContactHeight = elems[4].clientHeight + elems[4].offsetTop - 200;
         if (pageYOffset + 10 >= elems[i].offsetTop && pageYOffset <= endClientHeight) {
            removeClassLink()
            menuItems[i].classList.add('link__active');
         }
         if (pageYOffset >= body.clientHeight - document.documentElement.clientHeight - 50) {
            removeClassLink()
            menuItems[i].classList.add('link__active');
         }
      }
   }
}());


let ula = document.querySelector('.menu__items'),
   burger = document.querySelector('.munu__burger'),
   header = document.querySelector('.header');

ula.classList.add('menu-active');
ula.classList.remove('menu-active');
      header.style.height = '60px';
burger.addEventListener('click', () => {
   // console.log(ula.classList)
   if (ula.classList.contains('menu-active')) {
      ula.classList.remove('menu-active');
      header.style.height = '60px';
   } else {
      ula.classList.add('menu-active');
      header.style.height = '100%';
   }
});

// slider

