var body = document.querySelector('body');
window.onload = function () {
  body.classList.remove('loading');
};


var siteNavLinks = document.querySelectorAll('.site-nav a');
var picContent = document.querySelector('.alex-img');
var mainContent = document.querySelector('.home__main');
var footerContent = document.querySelector('.home__footer');

siteNavLinks.forEach(function(link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var page = this.getAttribute('href');
    picContent.classList.add('slide-right');

    mainContent.classList.toggle('fade-out-up');
    mainContent.classList.toggle('fade-in-down');

    footerContent.classList.toggle('fade-out-down');
    footerContent.classList.toggle('fade-in-up');

    setTimeout(function () {
      window.location.assign(page);
    }, 750);

  });
});