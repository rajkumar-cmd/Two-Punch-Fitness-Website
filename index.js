import { navbar }from "./components/navbar.js"

document.getElementById("navbar").innerHTML=navbar()



let workouts_tab = document.getElementById("workouts")
let programs_tab = document.getElementById("programs")
let healthy_living_tab = document.getElementById("healthy_living")
let community_tab = document.getElementById("community")
let about_tab = document.getElementById("about")


let on_workout = document.getElementById("workout_inner_pages")
let on_program = document.getElementById("program_inner_pages")
let on_healthy = document.getElementById("healthy_living_inner_pages")
let on_community = document.getElementById("community_inner_pages")
let on_about = document.getElementById("about_inner_pages")




import { onmouseover } from "./scripts/onmouseover.js"

onmouseover(workouts_tab,on_workout,on_program,on_healthy,on_about,on_community)
onmouseover(programs_tab,on_program,on_workout,on_healthy,on_about,on_community)
onmouseover(healthy_living_tab,on_healthy,on_program,on_workout,on_about,on_community)
onmouseover(community_tab,on_community,on_healthy,on_program,on_workout,on_about)
onmouseover(about_tab,on_about,on_community,on_healthy,on_program,on_workout)