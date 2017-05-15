
var question;
var response1;
var response2;
var answer;

function askquestion (question, response1, response2) {
  answer = prompt(question);
  if (answer === response1) {
    return true;
  } else if (answer === response2) {
    return false;
  } else alert("I didn't understand your answer. Please try again.");
    return askquestion(question, response1, response2);
  }


if (askquestion("Do you consider yourself an adventurous person?", "yes", "no")) {
  if (askquestion("Glad to hear it\nDo you want to play a game?", "yes", "no")) {
    if (askquestion("Do you want to go the past or the future?", "past", "future")) {
      if (askquestion("You see a dinosaur, do you run or attack?", "run", "attack")) {
        alert ("The dinosaur was much faster than you and ate you anyways. You tasted pretty good, if that's any consolation.\nTHE END")
      } else {alert("You killed the dinosaur. Unfortunately that was the first evolutionary link and you wiped out all of humanity. Good Job!\nTHE END")}
    } else if (askquestion("You see your older self running towards the edge a cliff. Do you stop them or let it happen?", "stop them", "let it happen")) {
      alert ("You rush to save your older self, but it turns it wasn't really you. When you realize your mistake, the surprise makes you fall off the cliff yourself, which effectively kills you and your older self, where ever they/you may be.\nTHE END")
    } else {alert("You're kind of a heartless bastard, aren't you? I guess you don't have much to look forward to.\nTHE END")}
  } else {alert("Whatever man. You do you I guess. Good Day to you.")}
} else {alert("That's too bad. Go watch some tv then.")}
