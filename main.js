
let character = document.getElementById('character');
word = document.getElementById('word');
sentence = document.getElementById('sentence');
spaces = document.getElementById('spaces');

const textArea = document.querySelector('.textArea');
process = document.getElementById('process_btn');

let ulValues = [character, word, sentence, spaces];
function init() {
    ulValues.forEach(value => value.innerHTML = 0)
}
init();

//button
process.addEventListener('click',()=>{
    let text = textArea.value;
    character.innerHTML = text.length-1;//-1 because they count the one after completion.
    word.innerHTML=text.split(" ").length;
    spaces.innerHTML= text.split(' ').length-1;
    sentence.innerHTML = findSentence(text);
    text.innerHTML="Put your text here";
})
function findSentence(text){
    const regex= /[\w|\)][.?!](\s|$)/g;
    let sentCount= text.match(regex);
    return sentCount ? sentCount.length : 0;
}
