var i = 0;
var txt = 'Sonia Guimarães';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("author-js").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function myFunction() {
  var x = document.getElementById('aboutBox');
  var y = document.getElementById('aboutPlus')
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.transform = 'rotate(135deg)';
  } else {
    x.style.display = 'none';
    y.style.transform = 'rotate(0deg)';
  }
}