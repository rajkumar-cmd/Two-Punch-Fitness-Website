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

// Prep Time
document.querySelector("#prep5").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?prepTime_lte=5`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#prep15").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?prepTime_lte=15`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#prep30").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?prepTime_lte=30`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})

// Cook Time
document.querySelector("#min5").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?cookTime_lte=5`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#min10").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?cookTime_lte=10`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#min15").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?cookTime_lte=15`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#min20").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?cookTime_lte=20`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})

// prise
document.querySelector("#pri10").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?prise_lte=10`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#pri15").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?prise_lte=15`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#pri20").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?prise_lte=20`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#pri25").addEventListener("change",async()=>{
    let res=await fetch(`http://localhost:3000/recipes?prise_lte=25`);
    let data=await res.json();
    let components=document.getElementById("components");
    appendWorkoutData(data,components);
    createButtons(data.length,12);
})
document.querySelector("#filterReset").addEventListener("click",async()=>{
    window.location.reload();
})

const getData=async()=>{
    let res=await fetch(`http://localhost:3000/recipes`);
    let data=await res.json();
    // console.log(data);
    createButtons(data.length,12);
}
const appendWorkoutData=async(data,components)=>{
    components.innerHTML=null;
    console.log(data);
    data.forEach((el)=> {
        let div=document.createElement("div");
        div.setAttribute("id","cardRes");

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
        
        let dietaryType=document.createElement("div");
        dietaryType.setAttribute("id","dietaryType");
        dietaryType.innerText=`Dietary Type- ${el.dietaryType}`;
        
        let prepTime=document.createElement("div");
        prepTime.setAttribute("id","prepTime");
        prepTime.innerText=`Prep Time- ${el.prepTime}min`;
        
        let cookTime=document.createElement("div");
        cookTime.setAttribute("id","cookTime");
        cookTime.innerText=`Cook Time- ${el.cookTime}min`;
        
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
        divText.append(description,dietaryType,prepTime,cookTime,price,buy);
        div.append(divMain,divText);
        components.append(div);
    });
}
const getPageData=async(clickedBtn,limit)=>{
    let res=await fetch(`http://localhost:3000/recipes?_page=${clickedBtn}&_limit=${limit}`);
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
     window.location.href="/payment.html"
}