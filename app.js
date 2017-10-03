'use strict';

ProductImg.all = [];
ProductImg.uniqueNum = [];
ProductImg.lastThree = [];
var imgEl = document.getElementById('product1'); // make this linked to Objects?
var imgEl1 = document.getElementById('product1'); // make this linked to Objects?
var imgEl2 = document.getElementById('product2'); // make this linked to Objects?
var imgEl3 = document.getElementById('product3'); // make this linked to Objects?

function ProductImg(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  ProductImg.all.push(this);
}

// refactor with fancy function later?
new ProductImg('luggage', 'img/bag.jpg');
new ProductImg('banana cutter', 'img/banana.jpg');
new ProductImg('bathroom stand', 'img/bathroom.jpg');
new ProductImg('rain boots', 'img/boots.jpg');
new ProductImg('breakfast maker', 'img/breakfast.jpg');
new ProductImg('meatball gum', 'img/bubblegum.jpg');
new ProductImg('chair', 'img/chair.jpg');
new ProductImg('cthulhu', 'img/cthulhu.jpg');
new ProductImg('dog beak', 'img/dog-duck.jpg');
new ProductImg('dragon meat', 'img/dragon.jpg');
new ProductImg('utensil pen', 'img/pen.jpg');
new ProductImg('sweeper dog', 'img/pet-sweep.jpg');
new ProductImg('pizza scissors', 'img/scissors.jpg');
new ProductImg('shark sleeper', 'img/shark.jpg');
new ProductImg('sweeper baby', 'img/sweep.png');
new ProductImg('tauntaun sleeper', 'img/tauntaun.jpg');
new ProductImg('unicorn meat', 'img/unicorn.jpg');
new ProductImg('usb tail', 'img/usb.gif');
new ProductImg('water can', 'img/water-can.jpg');
new ProductImg('wine glass', 'img/wine-glass.jpg');

console.log(ProductImg.all);

// functions
function generateUniqueNum() {
  ProductImg.uniqueNum = [];
  while (ProductImg.uniqueNum.length < 3) {
    var randomIndex = Math.floor(Math.random() * ProductImg.all.length);
    console.log(randomIndex);
    if (ProductImg.uniqueNum.indexOf(randomIndex) < 0) {
      ProductImg.uniqueNum.push(randomIndex);
      console.log(ProductImg.uniqueNum);
    } else {
      generateUniqueNum();
    }
  }
}
// check for 6 because what if one was replaced for index - then reused for index 1 or 2?
function notLastThree() {
  ProductImg.lastThree = [];
  while (ProductImg.lastThree.length < 3) {
    for (var i = 0; i < ProductImg.uniqueNum.length; i++) {
      imgEl.src = ProductImg.all[ProductImg.uniqueNum[i]].filePath;
      console.log(imgEl.src);
      if (ProductImg.lastThree.indexOf(imgEl.src) < 0) {
        ProductImg.lastThree.push(imgEl.src);
        console.log(ProductImg.lastThree);
      } else {
        notLastThree();
      }
    }
  }
}

//event handler
function displayRandomProduct() {
  generateUniqueNum();
  notLastThree();

  imgEl1.src = ProductImg.lastThree[0];
  imgEl2.src = ProductImg.lastThree[1];
  imgEl3.src = ProductImg.lastThree[2];
}

// event listeners
imgEl1.addEventListener('click', displayRandomProduct);
imgEl2.addEventListener('click', displayRandomProduct);
imgEl3.addEventListener('click', displayRandomProduct);

// executables
displayRandomProduct();
