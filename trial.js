'use strict';

ProductImg.all = [];
ProductImg.uniqueNum = [];
ProductImg.lastThree = [];
ProductImg.totalClicks = 0;
ProductImg.imgEl = document.getElementById('product1'); // make this linked to Objects?
ProductImg.imgEl1 = document.getElementById('product1'); // make this linked to Objects?
ProductImg.imgEl2 = document.getElementById('product2'); // make this linked to Objects?
ProductImg.imgEl3 = document.getElementById('product3'); // make this linked to Objects?
ProductImg.ulEl = document.getElementById('results');

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
//what if image 0 is replaced first then is chosen for the second image?! what about that check for 6 advice?
function notLastThree() {
  ProductImg.lastThree = [];
  while (ProductImg.lastThree.length < 3) {
    for (var i = 0; i < ProductImg.uniqueNum.length; i++) {
      ProductImg.imgEl.src = ProductImg.all[ProductImg.uniqueNum[i]].filePath;
      console.log(ProductImg.imgEl.src);
      // can use ProductImg.lastThree.includes() instead of indexOf() -- lastDisplayed array??
      if (ProductImg.lastThree.indexOf(ProductImg.imgEl.src) < 0) {
        ProductImg.lastThree.push(ProductImg.imgEl.src);
        // increment this.timesShown in the function when it's displayed!!!
        console.log(ProductImg.lastThree);
      } else {
        notLastThree();
      }
    }
  }
}

// use value of id to count votes for each image
//add id or alt parameter to constructor for comparison
// for loop if the event.target == [i]
// increment votes

// show results on list with function
// create, content, and append li to ul


//event handler
function handleClick() { // event parameter?
  ProductImg.totalClicks++;
  if (ProductImg.totalClicks === 25) {
    ProductImg.imgEl1.removeEventListener('click', handleClick); // make HTML section for one and remove event listeners?
    ProductImg.imgEl2.removeEventListener('click', handleClick);
    ProductImg.imgEl3.removeEventListener('click', handleClick);
  }

  // show results


  generateUniqueNum();
  notLastThree();
  ProductImg.imgEl1.src = ProductImg.lastThree[0];
  ProductImg.imgEl2.src = ProductImg.lastThree[1];
  ProductImg.imgEl3.src = ProductImg.lastThree[2];
}

// event listeners
ProductImg.imgEl1.addEventListener('click', handleClick);
ProductImg.imgEl2.addEventListener('click', handleClick);
ProductImg.imgEl3.addEventListener('click', handleClick);

// imgEl1.src.addEventListener('click', function() { // something like these next two; loop to hit them all?
//   this.timesClicked++;
// });

// executables
handleClick();

// try random color rgb(random(0,255), random(0, 255), random(0, 255))
// Math.floor(Math.random() * 256)
// set global alpha? ctx.globalAlpha = 0.2; ... or rgba? or opacity?
