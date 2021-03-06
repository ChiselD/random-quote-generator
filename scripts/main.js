// note to self: my quote library has 12 quotes in it

let quoteLibrary = [
  {
  	quote: "Don't feel entitled to anything you didn't sweat and struggle for.",
  	source: "Marian Wright Edelman"
  },
  {
  	quote: "The greatest gift is not being afraid to question.",
  	source: "Ruby Dee"
  },
   {
  	quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
  	source: "Amelia Earhart"
  },
  {
  	quote: "Done is better than perfect.",
  	source: "Sheryl Sandberg"
  },
  {
  	quote: "No matter what accomplishments you make, somebody helped you.",
  	source: "Althea Gibson"
  },
  {
  	quote: "A surplus of effort could overcome a deficit of confidence.",
  	source: "Sonia Sotomayor"
  },
  {
  	quote: "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.",
  	source: "Indira Gandhi"
  },
  {
  	quote: "Optimism is the faith that leads to achievement.",
  	source: "Helen Keller"
  },
  {
  	quote: "Dreams and reality are opposites. Action synthesizes them.",
  	source: "Assata Shakur"
  },
  {
  	quote: "Mistakes are a fact of life. It is the response to the error that counts.",
  	source: "Nikki Giovanni"
  },
  {
  	quote: "Art is too long and life is too short.",
  	source: "Grace Paley"
  },
  {
  	quote: "Nenne dich nicht arm, weil deine Traeume nicht in Erfuellung gegangen sind; wirklich arm ist nur, der nie getraeumt hat.",
  	source: "Marie von Ebner-Eschenbach"
  }
];

let numOfQuotes = quoteLibrary.length;

let prevNum = -1;
let num = -1;

// generate a random number to decide which quote to display
function getRandomNum() {
  return Math.ceil(Math.random() * numOfQuotes) - 1;
}

// display quote based on that random number
// if the random number is the same as the previous random number, get a new one
function displayQuote() {
  num = getRandomNum();
  if (num === prevNum) {
    num = getRandomNum();
  }
  let currentQuote = quoteLibrary[num];
  $(".quote").html(currentQuote.quote);
  $(".source").html("- " + currentQuote.source);
  prevNum = num;
}

// run quote-displaying function when the page loads
$(document).ready(displayQuote);

// run quote-displaying function when you click "get a new quote"
$(".newquote").on("click", displayQuote);

function tweetQuote() {
  let textToTweet = $(".quote").text() + " " + $(".source").text();
  if (textToTweet.length > 140) {
    alert("Sorry, that text is longer than 140 characters!");
    return false;
  } else {
    let tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(textToTweet);
    $(".tweet-button").attr("href", tweet);
  }
}

$(".tweet-button").on("click", tweetQuote);

///