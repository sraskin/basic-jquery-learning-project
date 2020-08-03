$(document).ready(function(){
  var listofAnswer=["Reply hazy", "try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again"];
  var magic8Ball = {};
  $("#answer").hide();
  magic8Ball.askQuestion = function(question){
    var randomNumber = Math.random();
    var randomNumberLength = randomNumber * listofAnswer.length;
    var randomIndex = Math.floor(randomNumberLength);
    var randomAnswer = listofAnswer[randomIndex];
    console.log(question);
    console.log(randomAnswer);
    console.log("I show immediately!")
    $("#8ball").effect( "shake");
    setTimeout(
      function() {
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      }, 1500);
      setTimeout(
        function() {
          $(answer).text(randomAnswer);
          $("#answer").fadeIn(2000);
        }, 2500);
      };
      var askQuestionPrompt = function(){
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        $("#answer").hide();
        var promptQuestion = prompt("Ask Me Anything button");
        magic8Ball.askQuestion(promptQuestion);
      };
      $(questionButton).click(askQuestionPrompt);
    });
