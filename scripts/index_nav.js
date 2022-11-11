import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../Components/footer.js";
document.getElementById("footer").innerHTML = footer();

import { sidebar } from "../Components/sidebar.js";
document.getElementById("sidebar1").innerHTML = sidebar();

let workouts_tab = document.getElementById("workouts");
let programs_tab = document.getElementById("programs");
let healthy_living_tab = document.getElementById("healthy_living");
let community_tab = document.getElementById("community");
let about_tab = document.getElementById("about");

let on_workout = document.getElementById("workout_inner_pages");
let on_program = document.getElementById("program_inner_pages");
let on_healthy = document.getElementById("healthy_living_inner_pages");
let on_community = document.getElementById("community_inner_pages");
let on_about = document.getElementById("about_inner_pages");

import { onmouseover } from "./onmouseover.js";

onmouseover(
  workouts_tab,
  on_workout,
  on_program,
  on_healthy,
  on_about,
  on_community
);
onmouseover(
  programs_tab,
  on_program,
  on_workout,
  on_healthy,
  on_about,
  on_community
);
onmouseover(
  healthy_living_tab,
  on_healthy,
  on_program,
  on_workout,
  on_about,
  on_community
);
onmouseover(
  community_tab,
  on_community,
  on_healthy,
  on_program,
  on_workout,
  on_about
);
onmouseover(
  about_tab,
  on_about,
  on_community,
  on_healthy,
  on_program,
  on_workout
);

// hamburger

let ham = document.getElementById("ham");
let cancel = document.getElementById("cancel");
let middle_contain = document.getElementById("middle_contain");
let sidebar1 = document.getElementById("sidebar1");

// ham.onclick = () => {
//   sidebar1.style.display = "block";

//   middle_contain.style.width = "84vw";
//   middle_contain.style.marginLeft = "16vw";
//   ham.style.display = "none";
//   cancel.style.display = "block";
// };

// cancel.onclick = () => {
//   middle_contain.style.width = "100vw";
//   middle_contain.style.marginLeft = "vw";

//   sidebar1.style.display = "none";
//   cancel.style.display = "none";
//   ham.style.display = "block";
// };

// File linking menu

document.getElementById("workVideo").addEventListener("click",function(){
  window.location.assign("./workout.html");
})


// ############################################
document.getElementById("customWork").addEventListener("click",function(){
  window.location.assign("#");
})
// #############################################


document.getElementById("workPro").addEventListener("click",function(){
  window.location.assign("./workout-Program.html");
})

// ##################
document.getElementById("meal").addEventListener("click",function(){
  window.location.assign("#");
})
// #####################

// ##################
document.getElementById("pilot").addEventListener("click",function(){
  window.location.assign("#");
})
// #####################

// ##################
document.getElementById("routines").addEventListener("click",function(){
  window.location.assign("#");
})
// #####################


document.getElementById("articles").addEventListener("click",function(){
  window.location.assign("./expert.html");
})



document.getElementById("receipes").addEventListener("click",function(){
  window.location.assign("./healthy_living.html");
})



document.getElementById("wellnessVideos").addEventListener("click",function(){
  window.location.assign("./wellness_videos.html");
})


// ##################
document.getElementById("blog").addEventListener("click",function(){
  window.location.assign("#");
})
// #####################

// ##################
document.getElementById("whatNew").addEventListener("click",function(){
  window.location.assign("#");
})
// #####################


document.getElementById("about").addEventListener("click",function(){
  window.location.assign("./about.html");
})

// ########################
document.getElementById("careers").addEventListener("click",function(){
  window.location.assign("./careers.html");
})
// ###########################

// ##################
document.getElementById("tut").addEventListener("click",function(){
  window.location.assign("./tutorials.html");
})
// #####################

// ##################
document.getElementById("ourTeam").addEventListener("click",function(){
  window.location.assign("./ourteam.html");
})
// #####################


document.getElementById("cart").addEventListener("click",function(){
  window.location.assign("./payment.html");
})
