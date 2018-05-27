//Shows a random quote when the page loads
$(document).ready(function(){
  changeQuote();
  $($fade).fadeIn(1200);
});

//Quote object contructor. Easier way of entering new quotes
function quoteObj(quote, author) {
  this.quote = quote;
  this.author = author;
};

//Initialise the array of quote objects plus an index for very time the "New Quote" button is pushed
var quoteIndex = Math.floor(Math.random()*10);
var arrQuotes = [];

//Function that accesses the array of quote objects and inputs the quote and author into the page (only executed in the onclick)
//EDIT: Now also dynamically creates a tweet button containing the current quote as text.
var changeQuote = function(){
  
  document.getElementById("tweet").innerHTML = "";
  
  document.getElementById("quote").innerHTML= arrQuotes[quoteIndex].quote + " <i class='fa fa-quote-right'></i>";
  document.getElementById("author").innerHTML="- " + arrQuotes[quoteIndex].author;
  
  twttr.widgets.createShareButton(
        " ",
        document.getElementById("tweet"),
        {
            size: "large",
            text: arrQuotes[quoteIndex].quote + " - " + arrQuotes[quoteIndex].author,
            hashtags: "quotes,inspiration"
        }
);
}

//Button click function that fades out the previous quote and tweet button, changes to the next quote using changeQuote() and then fades back in. New tweet button will also contain new data.
var $fade = ".quote-box, #tweet";

function newQuote(){
  $($fade).fadeOut(1200);
  
  if(quoteIndex < arrQuotes.length -1){
    setTimeout(changeQuote, 1200);
    quoteIndex++;
  }
  else {
    quoteIndex = 0;
    setTimeout(changeQuote, 1200);
  }
  $($fade).fadeIn(1000);
}

//List of all the quotes as objects. (Make sure to push into the array if you add a new one!)
var quote1 = new quoteObj("One thing about music, when it hits you feel no pain", "Bob Marley");
var quote2 = new quoteObj("Think Big And Don't Listen To People Who Tell You It Can't Be Done. Life's Too Short To Think Small.", "Tim Ferriss");
var quote3 = new quoteObj("Preach the Gospel at all costs. And if you really have to, use words", "Francis of Assisi");
var quote4 = new quoteObj("Beautiful is what we see. More beautiful is what we know. Most beautiful, by far, is what we don't.","Nicolas Steno");
var quote5 = new quoteObj("The problem with quotes from the internet is that you can never verify their authenticity.","Abraham Lincoln");
var quote6 = new quoteObj('Your primary ambition should be to have people look at you and say: "I want what you have. Please tell me how I can have it."', "Angus Buchan");
var quote7 = new quoteObj("The effect you have on others is the most valuable currency there is", "Jim Carrey"); 
var quote8 = new quoteObj("You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.","Dr. Seuss");
var quote9 = new quoteObj("You were born into genius, but have you resigned yourself to mediocrity?" , "Robin Sharma");
var quote10 = new quoteObj("Sometimes you just need to let go, and Let God...", "Shanice May");

//Push all quotes into the array
arrQuotes.push(quote1);
arrQuotes.push(quote2);
arrQuotes.push(quote3);
arrQuotes.push(quote4);
arrQuotes.push(quote5);
arrQuotes.push(quote6);
arrQuotes.push(quote7);
arrQuotes.push(quote8);
arrQuotes.push(quote9);
arrQuotes.push(quote10);
