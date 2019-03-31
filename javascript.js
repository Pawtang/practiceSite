var imageCounter = 1;
document.getElementById('picSwitch').src = ('images/dog-' + imageCounter + '.jpg');

document.getElementById('prev').addEventListener("click", prevPhoto);
document.getElementById('next').addEventListener("click", nextPhoto);

function prevPhoto(){
  if (imageCounter > 1) {
    imageCounter --}
  else {
    imageCounter = 5;
  }
    document.getElementById('picSwitch').src =  'images/dog-' + imageCounter + '.jpg'
}

function nextPhoto(){
  if (imageCounter < 5) {
    imageCounter ++}
  else {
    imageCounter = 1;
  }
    document.getElementById('picSwitch').src =  'images/dog-' + imageCounter + '.jpg'
}
