'use strict'


const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

const contact = document.querySelector("#contact");
const contactButton = document.querySelector(".home_contact");


//home scrollbar change -> opacity change
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  });


  //contact button 클릭시 contact 위치로 이동
  contactButton.addEventListener("click", () => {
      debugger;
    //contact.scrollIntoView();
    scrollIntoView("#contact");
})


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }


