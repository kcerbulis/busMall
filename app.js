 'use strics';
/*
 Gives the user 25 clicks
 Create a constructor function for the images
 ---takes the parameters: url, used before: (True/False), times shown, time clicked

*/




// ==========================================================
//                     Global Variables
// ==========================================================
// An array that will hold all picture objects (Don't know why yet)
var allImages = [];
// Counts the number of clicks the user has made on the images
var numberOfClicks = 0;
// Amount of choices the user is allowed
var numberOfGivenClicks = 25;
// Gives images a global reference
var leftImageSelector = document.getElementById('left_image_id')
var middleImageSelector = document.getElementById('middle_image_id')
var rightImageSelector = document.getElementById('right_image_id')

var leftImageOnThePage;
var middleImageOnThePage;
var rightImageOnThePage;




// ==========================================================
//                     Constructors
// ==========================================================

// A constructor function that takes in the images url and name as a parameter
// Initiates each image with 0 clicks and a false used before
var Product = function(url, name){
  this.imageUrl = url;
  this.imageName = name;

  this.clicks = 0;
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








function handleClickOnLeftImage(event){
  console.log('You clicked on the left image')
  numberOfClicks++


  leftImageOnThePage.clicks++;


// Picks 3 new images
  var leftImageIndex = Math.floor( Math.random() * allImages.length);
  var middleImageIndex = Math.floor( Math.random() * allImages.length);
  var rightImageIndex = Math.floor( Math.random() * allImages.length);

  leftImageOnThePage = allImages[leftImageIndex];
  middleImageOnThePage = allImages[middleImageIndex];
  rightImageOnThePage = allImages[rightImageIndex];

// Puts them on the page
  leftImageSelector.src = leftImageOnThePage.imageUrl;
  middleImageSelector.src = middleImageOnThePage.imageUrl;
  rightImageSelector.src = rightImageOnThePage.imageUrl;


// Stop after you run out of clicks
  if (numberOfClicks >= numberOfGivenClicks){
    console.log('The user ran out of clicks')
    leftProductImage.removeEventListener('click', handleClickOnLeftImage)
    middleProductImage.removeEventListener('click', handleClickOnMiddleImage)
    rightProductImage.removeEventListener('click', handleClickOnRightImage)
  }

}






function handleClickOnMiddleImage(event){
  console.log('You clicked on the middle image')
  numberOfClicks++


  middleImageOnThePage.clicks++;


// Picks 3 new images
  var leftImageIndex = Math.floor( Math.random() * allImages.length);
  var middleImageIndex = Math.floor( Math.random() * allImages.length);
  var rightImageIndex = Math.floor( Math.random() * allImages.length);

  leftImageOnThePage = allImages[leftImageIndex];
  middleImageOnThePage = allImages[middleImageIndex];
  rightImageOnThePage = allImages[rightImageIndex];

// Puts them on the page
  leftImageSelector.src = leftImageOnThePage.imageUrl;
  middleImageSelector.src = middleImageOnThePage.imageUrl;
  rightImageSelector.src = rightImageOnThePage.imageUrl;


// Stop after you run out of clicks
  if (numberOfClicks >= numberOfGivenClicks){
    console.log('The user ran out of clicks')
    leftProductImage.removeEventListener('click', handleClickOnLeftImage)
    middleProductImage.removeEventListener('click', handleClickOnMiddleImage)
    rightProductImage.removeEventListener('click', handleClickOnRightImage)
  }
}



function handleClickOnRightImage(event){
  console.log('You clicked on the right image')
  numberOfClicks++


  rightImageOnThePage.clicks++;


// Picks 3 new images
  var leftImageIndex = Math.floor( Math.random() * allImages.length);
  var middleImageIndex = Math.floor( Math.random() * allImages.length);
  var rightImageIndex = Math.floor( Math.random() * allImages.length);

  leftImageOnThePage = allImages[leftImageIndex];
  middleImageOnThePage = allImages[middleImageIndex];
  rightImageOnThePage = allImages[rightImageIndex];

// Puts them on the page
  leftImageSelector.src = leftImageOnThePage.imageUrl;
  middleImageSelector.src = middleImageOnThePage.imageUrl;
  rightImageSelector.src = rightImageOnThePage.imageUrl;


// Stop after you run out of clicks
  if (numberOfClicks >= numberOfGivenClicks){
    console.log('The user ran out of clicks')
    leftProductImage.removeEventListener('click', handleClickOnLeftImage)
    middleProductImage.removeEventListener('click', handleClickOnMiddleImage)
    rightProductImage.removeEventListener('click', handleClickOnRightImage)
  }
}






// Adds an event listeners that listens for clicks
// Executes the handler function once there is a click
leftProductImage.addEventListener('click', handleClickOnLeftImage);
middleProductImage.addEventListener('click', handleClickOnMiddleImage);
rightProductImage.addEventListener('click', handleClickOnRightImage);



// ==========================================================
//                  Initiates Product Images
// ==========================================================

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


// When the page gets loaded, these are the first images that the user will see
leftImageOnThePage = allImages[0];
middleImageOnThePage = allImages[1];
rightImageOnThePage = allImages[2];
