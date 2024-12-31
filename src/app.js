function generateStory(event){
    event.preventDefault();

  let storyElement=document.querySelector("#story");


new Typewriter('#story', {
  strings: ['the cool breeze was coming from the dam'],
  autoStart: true,
  delay:1,
  cursor:"",
});
  

}

let creativeGeneratorFormElement=document.querySelector("#creative-generator-form");
creativeGeneratorFormElement.addEventListener("submit", generateStory);
