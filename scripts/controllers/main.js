'use strict';

angular.module('matrixApp')
  .controller('MainCtrl', function ($scope) {
   $scope.setInterval=5000;

   $scope.slides = [
   {
         title:'Welcome to the Matrix',
         image:'images/slide1.jpg',
         text:'May the fun begin!'
   },
   {
         title:'Cameras',
         image:'images/slide2.jpg',
         text:'You are under constant observation!'
   },
   {
         title:'Sentinel',
         image:'images/slide3.jpg',
         text:'These dudes are pretty fast!'
   }

    ];

$scope.content=[
{
   img:'images/rounded1.jpg',
   title:'Neo',
   summary:'I know you\'re out there. I can feel you now. I know that you\'re afraid... you\'re afraid of us. You\'re afraid of change. I don\'t know the future. I didn\'t come here to tell you how this is going to end. I came here to tell you how it\'s going to begin. I\'m going to hang up this phone, and then I\'m going to show these people what you don\'t want them to see. I\'m going to show them a world without you. A world without rules and controls, without borders or boundaries. A world where anything is possible. Where we go from there is a choice I leave to you.'
},
{
   img:'images/rounded2.jpg',
   title:'Trinity',
   summary:'I know why you\'re here, Neo. I know what you\'ve been doing... why you hardly sleep, why you live alone, and why night after night, you sit by your computer. You\'re looking for him. I know because I was once looking for the same thing. And when he found me, he told me I wasn\'t really looking for him. I was looking for an answer. It\'s the question that drives us, Neo. It\'s the question that brought you here. You know the question, just as I did.'
},
{

   img:'images/rounded3.jpg',
   title:'Morpheus',
   summary:'This is your last chance. After this, there is no turning back. You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes...The Matrix is everywhere. It is all around us. Even now, in this very room. You can see it when you look out your window or when you turn on your television. You can feel it when you go to work... when you go to church... when you pay your taxes. It is the world that has been pulled over your eyes to blind you from the truth.'
}
];
   
  });
