'use strict';


// ==========================================================
//                     Global Variables
// ==========================================================
// An array that will hold all picture objects (Don't know why yet)
var allImages = [];
var productPercentageArray = [];
// Counts the number of clicks the user has made on the images
var numberOfClicks = 0;
// Amount of choices the user is allowed
var numberOfGivenClicks = 25;
var numberOfSelections = 3;
// Gives images a global reference
var leftImageSelector = document.getElementById('left_image_id')
var middleImageSelector = document.getElementById('middle_image_id')
var rightImageSelector = document.getElementById('right_image_id')
var leftImageOnThePage;
var middleImageOnThePage;
var rightImageOnThePage;
var imageOnThePage;
var leftImageIndex;
var middleImageIndex;
var rightImageIndex;
var leftImageIndexBefore;
var middleImageIndexBefore;
var rightImageIndexBefore;





// ==========================================================
//                     Constructors
// ==========================================================

// A constructor function that takes in the images url and name as a parameter
// Initiates each image with 0 clicks and a false used before
var Product = function(url, name){
  this.imageUrl = url;
  this.imageName = name;
  this.clicks = 0;
  this.shown = 0;
  this.usedBefore = false;
  allImages.push(this);
}


// ==========================================================================================
//                  Initiates The Page
// ==========================================================================================



// References picture container divs by their ID
var leftProductImage = document.getElementById('left');
var middleProductImage = document.getElementById('middle');
var rightProductImage = document.getElementById('right');




function handleClickOnAnyImage(event){
  numberOfClicks++



// Picks a new image index for the left side
  var leftImageIndex = Math.floor( Math.random() * allImages.length);

// Picks a new image index for the middle side
  var middleImageIndex = Math.floor( Math.random() * allImages.length);

// Picks a new image index for the right side
  var rightImageIndex = Math.floor( Math.random() * allImages.length);



  while (leftImageIndex === leftImageIndexBefore
      || leftImageIndex === middleImageIndexBefore
      || leftImageIndex === rightImageIndexBefore
      || leftImageIndex === middleImageIndex
      || leftImageIndex === rightImageIndex){
    leftImageIndex = Math.floor( Math.random() * allImages.length);
  }


  while (middleImageIndex === middleImageIndexBefore
      || middleImageIndex === leftImageIndexBefore
      || middleImageIndex === rightImageIndexBefore
      || middleImageIndex === leftImageIndex
      || middleImageIndex === rightImageIndex){
    middleImageIndex = Math.floor( Math.random() * allImages.length);
  }


  while (rightImageIndex === rightImageIndexBefore
      || rightImageIndex === leftImageIndexBefore
      || rightImageIndex === middleImageIndexBefore
      || rightImageIndex === leftImageIndex
      || rightImageIndex === middleImageIndex){
    rightImageIndex = Math.floor( Math.random() * allImages.length);
  }



  leftImageOnThePage = allImages[leftImageIndex];
  middleImageOnThePage = allImages[middleImageIndex];
  rightImageOnThePage = allImages[rightImageIndex];




// Incrieces the amount of times shown counter by one
  leftImageOnThePage.shown++
  middleImageOnThePage.shown++
  rightImageOnThePage.shown++


// Puts the images on the page
  leftImageSelector.src = leftImageOnThePage.imageUrl;
  middleImageSelector.src = middleImageOnThePage.imageUrl;
  rightImageSelector.src = rightImageOnThePage.imageUrl;

// Stop after you run out of clicks
  if (numberOfClicks >= numberOfGivenClicks){
    console.log('The user ran out of clicks')
    leftProductImage.removeEventListener('click', handleClickOnAnyImage)
    middleProductImage.removeEventListener('click', handleClickOnAnyImage)
    rightProductImage.removeEventListener('click', handleClickOnAnyImage)
    runTable();

// Save the goat data
  console.log('Saving goats on local storage');
  var allStringyImages = JSON.stringify(allImages);
  localStorage.setItem('allImages', allStringyImages);
  }
 leftImageIndexBefore = leftImageIndex;
 middleImageIndexBefore = middleImageIndex;
 rightImageIndexBefore = rightImageIndex;

}





function handleClickOnLeftImage(){
  console.log('User clicked on the left image')
  leftImageOnThePage.clicks++;
  handleClickOnAnyImage();
}

function handleClickOnMiddleImage(){
  console.log('User clicked on the middle image')
  middleImageOnThePage.clicks++
  handleClickOnAnyImage();
}


function handleClickOnRightImage(){
  console.log('User clicked on the right image')
  rightImageOnThePage.clicks++;
  handleClickOnAnyImage();
}



// Adds an event listeners that listens for clicks
// Executes the handler function once there is a click
leftProductImage.addEventListener('click', handleClickOnLeftImage);
middleProductImage.addEventListener('click', handleClickOnMiddleImage);
rightProductImage.addEventListener('click', handleClickOnRightImage);




// ==========================================================
//                  Initiates Product Images
// ==========================================================



if(localStorage.getItem('allImages') === null){

  console.log('Creating new goats')
  new Product ('./assets/bag.jpg', 'r2d2 bag');
  new Product ('./assets/banana.jpg', 'banana cutter');
  new Product ('./assets/bathroom.jpg', 'ipad holder');
  new Product ('./assets/boots.jpg', 'ugly boots');
  new Product ('./assets/breakfast.jpg', 'breakfast machine');
  new Product ('./assets/bubblegum.jpg', 'discusting gum');
  new Product ('./assets/chair.jpg', 'wierd chair');
  new Product ('./assets/cthulhu.jpg', 'cthulhu');
  new Product ('./assets/dog-duck.jpg', 'dog duck-mouth');
  new Product ('./assets/dragon.jpg', 'dragon');
  new Product ('./assets/pen.jpg', 'pen');
  new Product ('./assets/pet-sweep.jpg', 'pet sweeping shoes');
  new Product ('./assets/scissors.jpg', 'pizza scisors');
  new Product ('./assets/shark.jpg', 'shark');
  new Product ('./assets/sweep.png', 'sweep');
  new Product ('./assets/tauntaun.jpg', 'kid in a sleeping bag');
  new Product ('./assets/unicorn.jpg', 'unicorm meat');
  new Product ('./assets/usb.gif', 'freeky usb');
  new Product ('./assets/water-can.jpg', 'watering can');
  new Product ('./assets/wine-glass.jpg', 'wine glass');
}
  else {
    console.log('Getting products from local storage');
    var allStringyImages = localStorage.getItem('allImages');
    allImages = JSON.parse(allStringyImages);
  }







// When the page gets loaded, these are the first images that the user will see
leftImageOnThePage = allImages[0];
middleImageOnThePage = allImages[1];
rightImageOnThePage = allImages[2];





// ==========================================================
//                 ChartJS Implementations
// ==========================================================


function runTable(){

  document.getElementById("idid").style.visibility = "hidden";
  document.getElementById("table").style.visibility = "hidden";
  document.getElementById("busMallChart").style.display = "block";

  for (var i = 0; i < allImages.length; i++){
    var singleProductScore = allImages[i].clicks;
    var singleProductShown = allImages[i].shown;
    var singleProductPercentage = (singleProductScore/singleProductShown) * 100;
    if (singleProductShown === 0){
      singleProductPercentage = 0;
    }
    productPercentageArray.push(Math.floor(singleProductPercentage));
  }




  var productNamesArray = [];

  for (var i = 0; i < allImages.length; i++){
    var singleProductName = allImages[i].imageName;
    productNamesArray.push(singleProductName);
  }



  var ctx = document.getElementById('busMallChart').getContext('2d');
  var busMallChart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
          labels: productNamesArray,
          datasets: [{
              label: 'Product Poppularity %',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: productPercentageArray
          }]
      },

      // Configuration options go here
      options: {
                scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 5
                }
            }]
        }
      }
  });
}
