// elements we want to act on when clicked:
let techDescription = document.getElementById("techDescription");
console.log(techDescription);
const files = document.getElementById("files");
const story = document.getElementById("story");
const launch = document.getElementById("launch");
const githubLink = document.getElementById("githubLink");

// set up eventListeners
techDescription.addEventListener("click", viewTechDetails);
// files.addEventListener("click", viewFiles);
// story.addEventListener("click", viewStory);
// launch.addEventListener("click", launchApp);
// githubLink.addEventListener("click", goToGithub);

// other global variables to keep track of states
let techDetails = false;

function viewTechDetails() {
  if (techDetails) {
    techDescription.innerHTML = "technical description of the project";
  }

  if (!techDetails) {
    techDescription.innerHTML = `technical description of the project<ul><li>Single-page App written in vanilla JavaScript</li><li>Stores data in private Google Sheet as back end</li><li>Log in with Google Identity Services</li><li>Authenticate / Authorize using JSON Web Tokens, automatically prompts user to re-authenticate at next API call if token has expired</li></ul>`;
  }

  techDetails = !techDetails;
}

let newObject = {};

function viewFiles() {
  //files.innerHTML =
}
