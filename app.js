'use strict';

ProductImg.all = [];
ProductImg.last3 = [];
ProductImg.randomNum = [];
var imgEl1 = document.getElementById('product1'); // make this linked to Objects?
// var imgEl2 = document.getElementById('product2'); // make this linked to Objects?
// var imgEl3 = document.getElementById('product3'); // make this linked to Objects?

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
// function displayRandomProduct1() {
//   var randomIndex = Math.floor(Math.random() * ProductImg.all.length);
//   imgEl1.src = ProductImg.all[randomIndex].filePath;
// }
// function displayRandomProduct2() {
//   var randomIndex = Math.floor(Math.random() * ProductImg.all.length);
//   imgEl2.src = ProductImg.all[randomIndex].filePath;
// }
// function displayRandomProduct3() {
//   var randomIndex = Math.floor(Math.random() * ProductImg.all.length);
//   imgEl3.src = ProductImg.all[randomIndex].filePath;
// }

// function displayRandomProduct() {
//   var randomIndex = Math.floor(Math.random() * ProductImg.all.length);
//   imgEl1.src = ProductImg.all[randomIndex].filePath;
//   imgEl2.src = ProductImg.all[randomIndex].filePath;
//   imgEl3.src = ProductImg.all[randomIndex].filePath;
// }

function generateUniqueNum() {
  ProductImg.randomNum = [];
  while (ProductImg.randomNum.length < 3) { // while
    var randomIndex = Math.floor(Math.random() * ProductImg.all.length);
    console.log(randomIndex);
    if (ProductImg.randomNum.indexOf(randomIndex) < 0) {
      ProductImg.randomNum.push(randomIndex);
      console.log(ProductImg.randomNum);
    } else {
      // randomIndex = Math.floor(Math.random() * ProductImg.all.length);
      generateUniqueNum();
    }
  }
}

// push images based on ProductImg.randomNum indeces

// generate image not used last time


// function displayRandomProduct() {
//   imgEl1.src = ProductImg.all[randomIndex].filePath;
//   ProductImg.last3.push()
// }

// event listeners
// imgEl1.addEventListener('click', displayRandomProduct);


// executables
// displayRandomProduct();
// displayRandomProduct1();
// displayRandomProduct2();
// displayRandomProduct3();
