
let quizQuestions = [{
    question: "What is the 6th planet from our sun?",
    //questionName : 1,
    answers: ["Earth", "Pluto", "Saturn", "Mercury"],
    correctAnswer: 2
  },
  {
    question: "How long does it take on average, for sunlight to reach earth?",
    //questionName : 2,
    answers: ["7min 30sec", "8min 20sec", "12min 15sec", "None of the above"],
    correctAnswer: 1
  },
  {
    question: "What is the largest known structure in the universe?",
    //questionName : 3,
    answers: ["Great wall of China", "Sloan Great Wall", "Hadrian's wall", "Sacsayhuaman"],
    correctAnswer: 1
  },
  {
    question: "What is the biggest star known to mankind?",
    //questionName : 4,
    answers: ["UY Scuti", "Betelgeuse", "NML Cygni", "VY Canis Majoris"],
    correctAnswer: 0
  },
  {
    question: "How cold is pluto?",
    //questionName : 5,
    answers: ["Minus 223 degrees Celsius", "Minus 372 degrees Celsius", "Minus 208 degrees Celsius", "Minus 411 degrees Celsius"],
    correctAnswer: 0
  },
  {
    question: "How many moons does Jupiter have?",
    //questionName : 6,
    answers: ["53", "27", "46", "69"],
    correctAnswer: 3
  },
  {
    question: "What is the name of our sun?",
    //questionName : 7,
    answers: ["Alpha Centauri", "Sol", "Sirius", "Rigel"],
    correctAnswer: 1
  },
  {
    question: "How many planets in our solar system?",
    //questionName : 8,
    answers: ["9", "11", "8", "13"],
    correctAnswer: 2
  },
  {
    question: "How long does the solar system take to orbit the Milky Way galaxy?",
    //questionName : 9,
    answers: ["About 250 million years", "About 210 million years", "About 270 million years", "About 230 million years"],
    correctAnswer: 3
  },
  {
    question: "What is the average velocity of the solar system?",
    //questionName : 10,
    answers: ["826,000 km/hr", "828,000 km/hr", "820,000 km/hr", "824,000 km/hr"],
    correctAnswer: 1
  },
  {
    question: "Who created the first telescope?",
    //questionName : 11,
    answers: ["Hans Lippershey", "Galileo Galilei", "Sir Isaac Newton", "Ptolemy"],
    correctAnswer: 0
  },
  {
    question: "How many earths fit inide of Jupiter?",
    //questionName : 12,
    answers: ["1400 earths", "1300 earths", "1350 earths", "1250 earths"],
    correctAnswer: 1
  },
  {
    question: "What is the most common type of star?",
    //questionName : 13,
    answers: ["Red Giant star", "Neutron star", "Red Dwarf star", "White Dwarf star"],
    correctAnswer: 2
  },
  {
    question: "How many years does Pluto take to orbit the sun?",
    //questionName : 14,
    answers: ["215 years", "165 years", "187 years", "248 years"],
    correctAnswer: 3
  },
  {
    question: "How large is the horsehead nebula?",
    //questionName : 15,
    answers: ["Approx 3.5 x 2.5 light years", "Approx 1.5 x 3.5 light years", "Approx 5.0 x 3.5 light years", "Approx 4.0 x 3.0 light years"],
    correctAnswer: 0
  },
  {
    question: "How many constellations are there in the sky?",
    //questionName : 16,
    answers: ["66 constellations", "74 constellations", "88 constellations", "94 constellations"],
    correctAnswer: 2
  },
  {
    question: "What is the speed of light?",
    //questionName : 17,
    answers: ["315,000 km per second", "310,000 km per second", "305,000 km per second", "300,000 km per second"],
    correctAnswer: 3
  },
  {
    question: "How hot is the sun?",
    //questionName : 18,
    answers: ["9 940 Kelvin", "5 778 Kelvin", "3 500 Kelvin", "4 290 Kelvin"],
    correctAnswer: 1
  },
  {
    question: "How far away is the moon?",
    //questionName : 19,
    answers: ["384 400 km", "385 400 km", "386 400 km", "387 400 km"],
    correctAnswer: 0
  },
  {
    question: "What is the closest spiral galaxy to the Milky Way?",
    //questionName : 20,
    answers: ["Pinwheel Galaxy", "Messier 74 Galaxy", "Sunflower Galaxy", "Andromeda Galaxy"],
    correctAnswer: 3
  },


];
$(document).ready(function() {

  var title = "Do you know the universe?";
  $('#heading').prepend('<h1>' + title + '</h1>');  

  let i = 0;

  for (object of quizQuestions) {

    var question = object.question;
    var answers = object.answers;
    $('#quiz').append('<h2>' + question + '</h2>');

    let u = 0;

    for (answer of answers) {
      $('#quiz').append('<input type="radio" name="' + i + '" value="' + u + '">' + answer + '</input>');

      u++;
    }

    i++;

  }
 //debugger;
  $('#questionnaire').submit(function(event) {

    event.preventDefault();
    let userData = $(this).serializeArray();

    console.log(userData);

    let y = 0;
    var finalScore = 0;

    for (returnedAnswer of userData) {


      if (returnedAnswer.value == quizQuestions[y].correctAnswer) {
        finalScore++;

      };

      y++;

    }
    if (finalScore >=15) {
      alert("Excellent!, you know stuff! You scored" + finalScore + "/20")
    }else if (finalScore <= 14 && finalScore >= 10) {
      alert("You have some knowledge. You scored" + finalScore + "/20")
    }else if (finalScore <= 9 && finalScore >= 5) {
      alert("I am concerned. You scored" + finalScore + "/20")
    }else if (finalScore <= 4) {
      alert("Are you sure you were here for this? You scored" + finalScore + "/20")
    };


  });

});
