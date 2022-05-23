window.addEventListener('scroll', () => {
  var header = this.document.querySelector('#header__sidebar')
  header.classList.toggle('header__sticky', window.scrollY > 0)
})

window.onscroll = function () {
  myFunction()
}

var header = document.getElementById('myHeader')
var sticky = header.offsetTop

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}
