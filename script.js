var title = document.getElementById("title");
var button = document.getElementById("button");
var kdramaTitle = document.getElementById("outputText");
var input = document.getElementById("genreInput");

var romanceShows = ["My Liberation Notes", "Twenty Five Twenty One", "18 Again", "Kill Me Heal Me", "Flower of Evil", "Healer", "Reply 1988", "When the Camellia Blooms", "Crash Landing on You", "Familiar Wife", "Extraordinary You", "Weightlifting Fairy Kim Bok Joo", "Scarlet Heart Ryeo", "True Beauty", "Strong Woman Do Bong Soon", "A Piece of Your Mind", "The K2", "She Was Pretty", "Pinocchio", "Our Beloved Summer", "Hometown Cha Cha Cha"]

var thrillerShows = ["Voice", "Sky Castle", "Flower of Evil", "Sweet Home", "Squid Game", "Vincenzo", "Happiness", "Vagabond", "DP", "Save Me", "Memorist", "Rugal", "Taxi Driver", "Lawless Lawyer", "The K2", "Wanted", "Signal"]

var sliceoflifeShows = ["Hospital Playlist", "My Liberation Notes", "My Mister", "Twenty Five Twenty One", "18 Again", "Reply 1988", "Prison Playbook", "Extraordinary Attorney Woo", "Navillera", "A Piece of Your Mind", "Hometown Cha Cha Cha", "Move to Heaven", "Our Blues"]

var comedyShows = ["Hospital Playlist", "Sky Castle", "Kill Me Heal Me", "Reply 1988", "Prison Playbook", "Crash Landing on You", "Vincenzo", "Strong Woman Do Bong Soon"]

var schoolShows = ["Twenty Five Twenty One", "18 Again", "Sky Castle", "Reply 1988", "Extraordinary You", "Weightlifting Fairy Kim Bok Joo", "True Beauty", "Our Beloved Summer"]

var angstShows = ["Twenty Five Twenty One", "Sweet Home", "Squid Game", "Scarlet Heart Ryeo", "DP"]

button.addEventListener("click", generate);
button.addEventListener("click", restyle);


function generate() {
  var userInput = input.value;

  if (userInput == "romance") {
    kdramaTitle.innerHTML = romanceShows[Math.floor(Math.random() * romanceShows.length)];
  }

  else if (userInput == "thriller/crime") {
    kdramaTitle.innerHTML = thrillerShows[Math.floor(Math.random() * thrillerShows.length)];
  }

  else if (userInput == "slice of life") {
    kdramaTitle.innerHTML = sliceoflifeShows[Math.floor(Math.random() * sliceoflifeShows.length)];
  }

  else if (userInput == "comedy") {
    kdramaTitle.innerHTML = comedyShows[Math.floor(Math.random() * comedyShows.length)];
  }

  else if (userInput == "school") {
    kdramaTitle.innerHTML = schoolShows[Math.floor(Math.random() * schoolShows.length)];
  }

  else if (userInput == "angst") {
    kdramaTitle.innerHTML = angstShows[Math.floor(Math.random() * angstShows.length)];
  }

  else {
    kdramaTitle.innerHTML = "type an option from the list in all lowercase!"
  }

}



function restyle() {
  var fontNum = Math.floor(Math.random() * (6 - 3) + 3);
  var fontStr = fontNum.toString() + "vw";
  kdramaTitle.style.fontSize = fontStr;

  var angleNum = Math.floor(Math.random() * (20 - -20) + -20);
  var angleStr = "rotate(" + angleNum.toString() + "deg)";
  kdramaTitle.style.transform = angleStr;

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var colorStr = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  kdramaTitle.style.color = colorStr;

  var rightNum = Math.random() * 20;
  var downNum = Math.random() * 20;
  var blurNum = Math.random() * (20 - 5) + 5;
  var shadowStr = rightNum + "px " + downNum + "px " + blurNum + "px " + colorStr;
  kdramaTitle.style.textShadow = shadowStr;
}
