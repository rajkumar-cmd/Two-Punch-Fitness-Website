// import { sidebar } from "./Components/sidebar.js"

// document.getElementById("sidebar1").innerHTML = sidebar()

import footer from "../Components/footer.js";

document.getElementById("footer").innerHTML=footer();

let filter_btn = document.querySelector(".filter_btn");
let search_btn = document.querySelector(".search_btn");

filter_btn.onclick = () => {
    if (document.querySelector("#filter-menu").style.display == "block") {
        document.querySelector("#filter-menu").style.display = "none";
    } else {
        document.querySelector("#filter-menu").style.display = "block";
        document.querySelector("#search-menu").style.display = "none";
    }
};
search_btn.onclick = () => {
    if (document.querySelector("#search-menu").style.display === "block") {
        document.querySelector("#search-menu").style.display = "none";
        document.querySelector("#filter-menu").style.display = "none";
    } else {
        document.querySelector("#search-menu").style.display = "block";
        document.querySelector("#filter-menu").style.display = "none";
    }
};

// Price check
document.querySelector("#doll20").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?prise_lte=20`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#doll30").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?prise_lte=30`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#doll40").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?prise_lte=40`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#doll50").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?prise_lte=50`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#doll60").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?prise_lte=60`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
// Workout time check
document.querySelector("#min20").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?time_lte=20`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#min30").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?time_lte=30`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#min40").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?time_lte=40`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#min50").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?time_lte=50`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#min60").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?time_lte=60`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})

// Difficulty check
document.querySelector("#diff5").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?difficulty_lte=5&difficulty_gte=5`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#diff4").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?difficulty_lte=4&difficulty_gte=4`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#diff3").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?difficulty_lte=3&difficulty_gte=3`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#diff2").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?difficulty_lte=2&difficulty_gte=2`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#diff1").addEventListener("change",async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?difficulty_lte=1&difficulty_gte=1`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#filterReset").addEventListener("click",async()=>{
    window.location.reload();
})

const getData=async()=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos`);
    let data=await res.json();
    // console.log(data);
    createButtons(data.length,12);
}
const appendWorkoutData=async(data,components)=>{
    components.innerHTML=null;
    console.log(data);
    data.forEach((el)=> {
        let div=document.createElement("div");

        let divMain=document.createElement("div");
        divMain.setAttribute("id","mainImg");

        let img=document.createElement("img");
        img.src=el.img;

        let name=document.createElement("div");
        name.setAttribute("id","name")
        name.innerText=el.name;

        let divText=document.createElement("div");
        divText.setAttribute("id","divText");

        let description=document.createElement("div");
        description.setAttribute("id","description");
        description.innerText=`Description- ${el.description}`;
        
        let equipment=document.createElement("div");
        equipment.setAttribute("id","equipment");
        equipment.innerText=`Equipment- ${el.equipment}`;
        
        let time=document.createElement("div");
        time.setAttribute("id","time");
        time.innerText=`Time- ${el.time}min`;
        
        let difficulty=document.createElement("div");
        difficulty.setAttribute("id","difficulty");
        difficulty.innerText=`Difficulty- ${el.difficulty}/5`;
        
        let price=document.createElement("div");
        price.setAttribute("id","price");
        price.innerText=`Price- $${el.prise}`;
        
        let buy=document.createElement("div");
        buy.innerText="ADD TO CART";
        buy.setAttribute("id","buyButton");
        buy.addEventListener("click",()=>{
            paymentPage(el);
        })
        divMain.append(img,name);
        divText.append(description,equipment,time,difficulty,price,buy);
        div.append(divMain,divText);
        components.append(div);
    });
}
const getPageData=async(clickedBtn,limit)=>{
    let res=await fetch(`https://server-workout.onrender.com/workoutVideos?_page=${clickedBtn}&_limit=${limit}`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
}
getPageData(1,12);
let buttonDiv=document.getElementById("buttons");

const createButtons=(data,itemsPerPage)=>{
    document.getElementById("buttons").innerHTML="";
    const buttons=Math.ceil(data/itemsPerPage);
    for(let i=1;i<=buttons;i++){
        let btn=document.createElement("div");
        btn.id=i;
        btn.innerText=i;
        btn.onclick=()=>{
            getPageData(i,12);
        }
        buttonDiv.append(btn);
    }
}
getData();

let paymentPage=(el) => {
    let obj=el
    console.log(obj)
     let data= JSON.parse(localStorage.getItem("obj")) || []
     data.push(obj)
     localStorage.setItem("obj",JSON.stringify(data))
     window.location.href="./payment.html"
}