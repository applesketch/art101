/**
  * Author: Gloria Chim and Sabrina Pan
  * Created: 11.7.2022
  *
  * (c) ART101 Class
  **/

//button names
$('#challenge').append('<button id ="buttonChalEl"> UWU </button>');

$('#problems').append('<button id="buttonProbEl"> OWO </button>');

$('#results').append('<button id="buttonResEl"> EWE </button>');

//click events
$('#buttonChalEl').click(function(){
  $('#challenge').toggleClass("special");
});

$('#buttonProbEl').click(function(){
  $('#problems').toggleClass("special");
});

$('#buttonResEl').click(function(){
  $('#results').toggleClass("special");
});

// output also changes color
$('#buttonResEl').click(function(){
  $('#output').toggleClass("special");
});


//new buttons that change colors
$('#output').append('<button id ="b1"> PAIN </button>');

$('#output').append('<button id="b2"> MORE PAIN </button>');

$('#output').append('<button id="b3"> MORE PAIN </button>');

$('#output').append('<button id="b4"> MORE PAIN </button>');

$('#output').append('<button id="b5"> MORE PAIN </button>');

$('#output').append('<button id="b6"> MORE PAIN </button>');

$('#output').append('<button id="b7"> MORE PAIN </button>');

//click events
// one button changes another button's color
$('#b1').on('click', function(){
  $('#b2').toggleClass("buttonCol");
});

$('#b2').on('click', function (){
  $('#b1').toggleClass("buttonCol");
});

$('#b3').on('click', function (){
  $('#b4').toggleClass("buttonCol");
});

$('#b4').on('click', function (){
  $('#b5').toggleClass("buttonCol");
});

$('#b5').on('click', function (){
  $('#b7').toggleClass("buttonCol");
});

$('#b6').on('click', function (){
  $('#b3').toggleClass("buttonCol");
});

$('#b7').on('click', function (){
  $('#b6').toggleClass("buttonCol");
});
