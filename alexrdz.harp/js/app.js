var body = document.querySelector('.loading');
var loader = document.querySelector('.loader');
window.onload = function () {
  loader.remove();
  body.classList.remove('loading');
};


//- DOM Elements
var workLink = document.querySelector('.work-link');
var aboutLink = document.querySelector('.about-link');
var contactLink = document.querySelector('.contact-link');
var aboutContent = document.querySelector('.about-content');
var contactContent = document.querySelector('.contact-content');
var picContent = document.querySelector('.alex-img');
var mainContent = document.querySelector('.home__main');
var footerContent = document.querySelector('.home__footer');
var closeTriggers = document.querySelectorAll('.close-panel-trigger');

if (workLink && aboutLink && contactLink && closeTriggers) {
  workLink.addEventListener('click', function (e) {
    e.preventDefault();
    var page = this.getAttribute('href');
    picContent.classList.add('slide-right');


    mainContent.classList.toggle('fade-out-up');
    mainContent.classList.toggle('fade-in-down');

    footerContent.classList.toggle('fade-out-down');
    footerContent.classList.toggle('fade-in-up');

    setTimeout(function () {
      aboutContent.classList.remove('slide-in-left');
      contactContent.classList.remove('slide-in-left');
    }, 250);
    setTimeout(function () {
      window.location.assign(page);
    }, 750);

  });


  aboutLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll(0, 0);
    contactContent.classList.remove('slide-in-left');
    aboutContent.classList.add('slide-in-left');
  });

  contactLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll(0, 0);
    aboutContent.classList.remove('slide-in-left');
    contactContent.classList.add('slide-in-left');
  });

  closeTriggers.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      return this.parentNode.classList.remove('slide-in-left');
    });
  });
}
