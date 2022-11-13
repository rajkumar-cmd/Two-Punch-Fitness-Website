import {navbar} from "../Components/navbar.js"
import footer from "../Components/footer.js";


document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

// let filter_btn = document.querySelector(".filter_btn");
// let search_btn = document.querySelector(".search_btn");

// filter_btn.onclick = () => {
//   if (document.querySelector("#filter-menu").style.display == "block") {
//     document.querySelector("#filter-menu").style.display = "none";
//   } else {
//     document.querySelector("#filter-menu").style.display = "block";
//     document.querySelector("#search-menu").style.display = "none";
//   }
// };
// search_btn.onclick = () => {
//   if (document.querySelector("#search-menu").style.display === "block") {
//     document.querySelector("#search-menu").style.display = "none";
//     document.querySelector("#filter-menu").style.display = "none";
//   } else {
//     document.querySelector("#search-menu").style.display = "block";
//     document.querySelector("#filter-menu").style.display = "none";
//   }
// };

let content_div = document.querySelector("#content");



let fetchData = async () => {
  try {
    let res = await fetch(`https://server-workout.onrender.com/meals`);
    let data = await res.json();
    console.log(data);
    appendindData(data)
  } catch (err) {
    console.log(err);
  }
};
fetchData();


let appendindData = (input) => {
  let cards_container = document.querySelector("#content");
  input.forEach((el)=>{
    let cont_div= document.createElement("div")
    cont_div.setAttribute("class","cart_div")

    let img_div= document.createElement("div")
    img_div.setAttribute("class","image_div")

    let img= document.createElement("img")
    img.setAttribute("class","image")
    img.src=el.img
    img_div.append(img)
    let content_div=document.createElement("div")
    content_div.setAttribute("class","cont_div")

    let title_des_div =document.createElement("div")
    title_des_div.setAttribute("class","title_des_div")

    let title_div=document.createElement("div")
    title_div.innerText=el.title
    let des_div=document.createElement("div")
    des_div.innerText=el.des
    title_des_div.append(title_div,des_div)

    let price_btn_div=document.createElement("div")
    price_btn_div.setAttribute("class","prise_btn_div")
    let price_div=document.createElement("div")
    price_div.innerText=`As Low As $${el.prise}`
    let btn= document.createElement("button")
    btn.setAttribute("class","add_to_cart_btn")
    btn.addEventListener("click", ()=>{
      paymentPage(el)
    })
    btn.innerText="Add to Bag"
    price_btn_div.append(price_div,btn)
    content_div.append(title_des_div,price_btn_div)

    cont_div.append(img_div,content_div)
    cards_container.append(cont_div)
  })
  
};


let paymentPage=(el) => {
 let obj=el
 console.log(obj)
  let data= JSON.parse(localStorage.getItem("obj")) || []
  data.push(obj)
  localStorage.setItem("obj",JSON.stringify(data))
  window.location.href="./payment.html"
}