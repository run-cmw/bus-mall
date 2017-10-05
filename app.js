'use strict';

ProductImg.all = [];
ProductImg.lastThree = [];
ProductImg.totalClicks = 0;
var chartNames = []; // can I attach to object?
var chartVotes = []; // can I attach to object?
ProductImg.imgElLeft = document.getElementById('product-left');
ProductImg.imgElMiddle = document.getElementById('product-middle');
ProductImg.imgElRight = document.getElementById('product-right');
ProductImg.olEl = document.getElementById('results');

function ProductImg(name, filePath, altText) {
  this.name = name;
  this.filePath = filePath;
  this.altText = altText;
  this.timesShown = 0;
  this.timesClicked = 0;
  ProductImg.all.push(this);
}

new ProductImg('luggage', 'img/bag.jpg', 'luggage');
new ProductImg('banana cutter', 'img/banana.jpg', 'banana cutter');
new ProductImg('bathroom stand', 'img/bathroom.jpg', 'bathroom stand');
new ProductImg('rain boots', 'img/boots.jpg', 'rain boots');
new ProductImg('breakfast maker', 'img/breakfast.jpg', 'breakfast maker');
new ProductImg('meatball gum', 'img/bubblegum.jpg', 'meatball gum');
new ProductImg('chair', 'img/chair.jpg', 'chair');
new ProductImg('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
new ProductImg('dog beak', 'img/dog-duck.jpg', 'dog beak');
new ProductImg('dragon meat', 'img/dragon.jpg', 'dragon meat');
new ProductImg('utensil pen', 'img/pen.jpg', 'utensil pen');
new ProductImg('sweeper dog', 'img/pet-sweep.jpg', 'sweeper dog');
new ProductImg('pizza scissors', 'img/scissors.jpg', 'pizza scissors');
new ProductImg('shark sleeper', 'img/shark.jpg', 'shark sleeper');
new ProductImg('sweeper baby', 'img/sweep.png', 'sweeper baby');
new ProductImg('tauntaun sleeper', 'img/tauntaun.jpg', 'tauntaun sleeper');
new ProductImg('unicorn meat', 'img/unicorn.jpg'), 'unicorn meat';
new ProductImg('usb tail', 'img/usb.gif', 'usb tail');
new ProductImg('water can', 'img/water-can.jpg', 'water can');
new ProductImg('wine glass', 'img/wine-glass.jpg', 'wine glass');

function randomNumber() {
  return Math.floor(Math.random() * ProductImg.all.length);
}

function randomProduct() {
  var randomLeft = randomNumber();
  var randomMiddle = randomNumber();
  var randomRight = randomNumber();

  while (ProductImg.lastThree.includes(randomLeft) || ProductImg.lastThree.includes(randomMiddle) || ProductImg.lastThree.includes(randomRight) || randomLeft === randomRight || randomLeft === randomMiddle || randomMiddle === randomRight) {
    randomLeft = randomNumber();
    randomMiddle = randomNumber();
    randomRight = randomNumber();
  }

  ProductImg.imgElLeft.src = ProductImg.all[randomLeft].filePath;
  ProductImg.imgElMiddle.src = ProductImg.all[randomMiddle].filePath;
  ProductImg.imgElRight.src = ProductImg.all[randomRight].filePath;

  ProductImg.imgElLeft.alt = ProductImg.all[randomLeft].altText;
  ProductImg.imgElMiddle.alt = ProductImg.all[randomMiddle].altText;
  ProductImg.imgElRight.alt = ProductImg.all[randomRight].altText;

  ProductImg.all[randomLeft].timesShown++;
  ProductImg.all[randomMiddle].timesShown++;
  ProductImg.all[randomRight].timesShown++;

  ProductImg.lastThree = [];
  ProductImg.lastThree.push(randomLeft, randomMiddle, randomRight);
}

function hideVoteOptions() {
  document.getElementById('options').hidden = true;
}

function hideChart() {
  document.getElementById('chart-bg').hidden = true;
}

function updateChartArrays() {
  for (var i = 0; i < ProductImg.all.length; i++) {
    chartNames[i] = ProductImg.all[i].name;
    chartVotes[i] = ProductImg.all[i].timesClicked;
  }
}

function generateRandomColor() {
  var colorArr = [];
  for (var i = 0; i < ProductImg.all.length; i++) {
    colorArr.push('hsl(' + (Math.random() * 360) + ', 80%, 60%)');
  }
  return colorArr;
}

// can this be attached to object?
var data = {
  labels: chartNames,
  datasets: [
    {
      label: 'Number of Votes',
      data: chartVotes,
      backgroundColor: generateRandomColor(),
      hoverBackgroundColor: generateRandomColor(),
    }],
  options: {
    legend: {display: false} // doesn't seem to work
  }
};

function drawChart() {
  var ctx = document.getElementById('chart').getContext('2d');
  var resultChart = new Chart(ctx, {
    type: 'bar',
    data: data,

  });
}

function handleClick(event) {
  for(var i = 0; i < ProductImg.all.length; i++) {
    if(event.target.alt === ProductImg.all[i].altText) {
      ProductImg.all[i].timesClicked++;
      updateChartArrays();
    }
  }

  ProductImg.totalClicks++;

  if (ProductImg.totalClicks > 25) {
    ProductImg.imgElLeft.removeEventListener('click', handleClick);
    ProductImg.imgElMiddle.removeEventListener('click', handleClick);
    ProductImg.imgElRight.removeEventListener('click', handleClick);

    hideVoteOptions();
    document.getElementById('chart-bg').hidden = false;
    drawChart();

    for (var j = 0; j < ProductImg.all.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = ProductImg.all[j].name + ' received ' + ProductImg.all[j].timesClicked + ' votes in ' + ProductImg.all[j].timesShown + ' timesShown';
      ProductImg.olEl.appendChild(liEl);
    }
  }

  randomProduct();
}

ProductImg.imgElLeft.addEventListener('click', handleClick);
ProductImg.imgElMiddle.addEventListener('click', handleClick);
ProductImg.imgElRight.addEventListener('click', handleClick);

randomProduct();
hideChart();
