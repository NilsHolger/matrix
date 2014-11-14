'use strict';

angular.module('matrixApp')
.controller('CharactersCtrl', function ($scope) {

	$scope.posts = [
	{
		title:"Neo",
		content:"Neo is Thomas Anderson's 'hacker name'. He is freed from the Matrix by Morpheus and his crew to be the savior of mankind (the One)."
	},
	{
		title:"Trinity",
		content:"Trinity is Morpheus' right-hand. Morpheus freed her years ago and she has since become his most trusted ally. The Oracle told her she would fall in love with the One."
	},
	{
		title:"Morpheus",
		content:"Captain of the hovercraft Nebuchadnezzar, Morpheus believes in The Oracle's prophecy, and he believes he has finally found the One. He acts as Neo's mentor."
	},
	{
		title:"Agent Smith",
		content:"The main adversary to Morpheus' plan. A sentient program in the Matrix, Smith is able to do almost everything Neo can. Agents are supremely powerful, and no one has every survived a standoff with an Agent before Neo."
	},
	{
		title:"The Oracle",
		content:" An unusual inhabitant of the Matrix, The Oracle is able to see the future. Morpheus takes members of his crew to her, most importantly Neo. The Oracle is also responsible for the original prophecy concerning the existence of the One."
	},
	{
		title:"Cypher",
		content:"A member of Morpheus' crew, Cypher decides the life of a resistance fighter isn't all it's cracked up to be and engineers a deal to be reinserted back into the Matrix, at the expense of Zion."
	},
	{
		title:"Switch",
		content:"A member of Morpheus' crew, Switch is curiously the only one who appears in white clothes when they enter the Matrix."
	},
	{
		title:"Apoc",
		content:"A member of Morpheus' crew, he is the first to die when Cypher sets his plan in motion."
	},
	{
		title:"Tank",
		content:"A member of Morpheus' crew, Tank was born in Zion - he never was a slave to the Matrix. His brother Dozer is also on the Nebuchadnezzar. Tank thwarts Cypher's plan, but not before Cypher wipes out most of the crew."
	},
	{
		title:"Mouse",
		content:"A member of Morpheus' crew, Mouse is the 'digital pimp' responsible for programming the woman in red - he offers private visits with her as well."
	},
	{
		title:"Dozer",
		content:" A member of Morpheus' crew, and Tank's brother, Dozer was born in Zion - he never was a slave to the Matrix."
	},
	{
		title:"Agent Jones & Brown",
		content:"Two other sentient programs, they have all the dangerous capabilities of Agent Smith, but are not as individualistic or driven as he is."
	}

	];

});