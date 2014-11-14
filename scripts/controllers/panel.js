'use strict';

angular.module('matrixApp')
  .controller('PanelCtrl', function ($scope) {

var pictures =$scope.pictures=[];

$scope.rate = 0;
$scope.max = 10;
$scope.isReadonly = false;

//'images/slide1.jpg'

var baseURL="images/panel";

var titles=["The Crew","Neo","Morpheus",
             "Trinity","Trinity","Working Hard", "Taking a Walk","Busted","Dodged Bullets",
             "Movie","Morpheus","Being tapped","Shoot out"] ;

var summaryText= [ "This is your last chance. After this, there is no turning back.",
"Do not try and bend the spoon. That's impossible. Instead... only try to realize the truth.","To deny our own impulses is to deny the very thing that makes us human.", "Never send a human to do a machine's job.",
"Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?", "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain.",
"You know, I know this steak doesn't exist. I know that when I put it in my mouth, the Matrix is telling my brain that it is juicy and delicious. After nine years, you know what I realize?", "I imagine that right now, you're feeling a bit like Alice. Hmm? Tumbling down the rabbit hole?",
"Did you know that the first Matrix was designed to be a perfect human world? Where none suffered, where everyone would be happy. It was a disaster. No one would accept the program. Entire crops were lost.",
"You're cuter than I thought. I can see why she likes you.", "What are you waiting for? You're faster than this. Don't think you are, know you are. Come on. Stop trying to hit me and hit me", "I'm trying to free your mind, Neo. But I can only show you the door. You're the one that has to walk through it.",
"You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes."];


$scope.addPics=function(i){
   pictures.push({
         url:baseURL + [i] + ".jpg",
         title:titles[i],
         summary:summaryText[i]
    })
};
for (var i=0;i<12;i++){
    $scope.addPics(i);
}

  });