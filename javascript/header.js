window.onscroll = function () {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("page-header-container").classList.add("header-sticky");
    const openElements = document.querySelectorAll(".open");
    openElements.forEach((element) => {
      element.classList.remove("open");
    });
  } else {
    document.getElementById("page-header-container").classList.remove("header-sticky");
  }
};

document.getElementsByClassName('animated-header')[0]
  .addEventListener('click', function (event) {
    document.getElementsByClassName('animated-header')[0].classList.toggle('open');
    document.getElementsByClassName('page-header')[0].classList.toggle('open');
    document.getElementsByClassName('page-header-subtitle')[0].classList.toggle('open');
    document.getElementsByClassName('page-header-container')[0].classList.toggle('open');
    document.getElementsByTagName('body')[0].style.overflow = "none";
  });