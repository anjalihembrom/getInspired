//For functioning the button
const factcontainer = document.getElementById('fact-container');
const twitter = document.getElementById('twitter-button');
const newone = document.getElementById('new-fact');
const facttext = document.getElementById('fact');
const loader = document.getElementById('loader');


//Get fact from API 
let apiFacts =[];
//show loading
function loading() {
     loader.hidden = false;
     factcontainer.hidden = true;
}

//hide loader
function complete() {
    factcontainer.hidden = false;
    loader.hidden = true;
}

//show new fact
function newfact() {
    loading();
    const fact = apiFacts[Math.floor(Math.random()* apiFacts.length)];
    facttext.textContent = fact.text; 
    complete();
}
async function getFact(){
    loading();
    const apiUrl= 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiFacts = await response.json();
        newfact();
        
    } catch (error) {

    }
 }
//tweet fact
function tweetFact() {
     const twitterUrl= `https://twitter.com/intent/tweet?text=${facttext.textContent}`;
     window.open(twitterUrl, '_blank');
}


//event listeners
newone.addEventListener('click', getFact);
twitter.addEventListener('click', tweetFact);


//load
 getFact();