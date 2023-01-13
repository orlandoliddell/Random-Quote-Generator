function generate(){
    var quotes = {
       "- Albert Camus" : "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion",
       "-Denis Diderot" : "Man will never be free until the last king is strangled with the entrails of the last priest.",
       "Lewis B. Smedes" : "To forgive is to set a prisoner free and discover that the prisoner was you."
    } 

var authors = Object.keys(quotes);

var author = authors[Math.floor(Math.random() * authors.length)];

var quote = quotes[author];

document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;

}