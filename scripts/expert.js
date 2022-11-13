// import {navbar} from "../Components/navbar.js"
// import {footer} from "../Components/footer.js";


// document.getElementById("navbar").innerHTML=navbar();
// document.getElementById("footer").innerHTML=footer();


let fetchData = async () => {
  try {
    let res = await fetch(`https://server-workout.onrender.com/expert-article`);
    let data = await res.json();
    console.log(data);
   appendindData(data)
  } catch (err) {
    console.log(err);
  }
};
fetchData();

let appendindData=(input) =>{
  let DOM_div= document.querySelector(".content")
  input.forEach((el)=>{
    let card_div= document.createElement("div")
    card_div.setAttribute("class","cart_div")
    let img_div= document.createElement("div")
    img_div.setAttribute("class","image_div")

    let img= document.createElement("img")
    img.setAttribute("class","image")
    img.src=el.img
    img_div.append(img)

    let card_content=document.createElement("div")
    card_content.setAttribute("class","card_content")
    let card_content_1=document.createElement("div")
    card_content_1.setAttribute("class","card-content-1")

    let title_div=document.createElement("div")
    title_div.innerText=el.title
    let des_div=document.createElement("div")
    des_div.innerText=el.des
    let des_2_div=document.createElement("div")
    des_2_div.innerText=el.des_2

    card_content_1.append(title_div,des_div,des_2_div)
    card_content.append(card_content_1)
    card_div.append(img_div,card_content)
    DOM_div.append(card_div)
  })
}

