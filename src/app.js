function displayStory(response){
    console.log("story generated");


new Typewriter('#story', {
  strings:response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});
  





}

function generateStory(event){
    event.preventDefault();

  let storyElement=document.querySelector("#story");
  let instructionsInput=document.querySelector("#user-instructions");

  let apiKey="fbbeo522008a6t423889d2a000ef043e";
  let prompt=`Usr instructions: Generate creative english stories ${instructionsInput.value}`;
  let context="You are helpful AI Assistant who has a lot of knowlege about creative stories or compositions and love to to write.Your mission is to generate short stories or compositions in basic HTML not more than 120 words, do not include the tittle of the story.Make sure to follow user instructions.";
   
   let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayStory);
  console.log("Generating story");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);



  

}

let creativeGeneratorFormElement=document.querySelector("#creative-generator-form");
creativeGeneratorFormElement.addEventListener("submit", generateStory);
