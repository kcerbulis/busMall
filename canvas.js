'use strict';






var productNamesArray = [];
var productScoreArray = [];


for (var i = 0; i < allImages.length; i++){
  var singleProductName = allImages[i].imageName;
  productNamesArray.push(singleProductName);
  var singleProductScore = allImages[i].clicks;
  productScoreArray.push(singleProductScore);
}





var ctx = document.getElementById('busMallChart').getContext('2d');
var busMallChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: productNamesArray,
        datasets: [{
            label: 'Likes per product',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: productScoreArray
        }]
    },

    // Configuration options go here
    options: {}
});
