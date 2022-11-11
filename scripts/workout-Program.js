import {navbar} from "../Components/navbar.js"
import footer from "../Components/footer.js";


document.getElementById("navbar").innerHTML=navbar();
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

let content_div = document.querySelector("#content");



let fetchData = async () => {
  try {
    let res = await fetch(`http://localhost:3000/workout-programs`);
    let data = await res.json();
    console.log(data);
    data.forEach((el) => {
      appendindData(el);
    });
  } catch (err) {
    console.log(err);
  }
};
fetchData();
let appendindData = (el) => {
  let cards_container = document.querySelector("#content");
  cards_container.innerHTML += ` <div class="card">
    <div class="img-div">
        <img id="image" src="${el.img}"
            alt="">
    </div>
    <div class="card-content">
        <div class="card-content-1">
            <div>
                <p class="blue"><span>${el.title}</span></p>
            </div>
            <div>${el.des}</div>

        </div>
        <div class="card-content-2">
            <div class="card-price-btn">
                <div>
                    <p>As Low As</p>
                    <p>$${el.prise}</p>
                </div>
                <div>
                <a href="./payment.html"> 
                <button id="${el.img}" class="${el.prise}">
                    ADD TO BAG
                </button>
            </a>
                </div>
            </div>
        </div>
    </div>
</div>`;
};


let paymentPage=(event) => {
  obj={
    img:event.target.id,
    prise:event.target.className
  }
  
  let data= JSON.parse(localStorage.getItem("obj")) || []
  data.push(obj)
  localStorage.setItem("obj",JSON.stringify(data))
  window.location.href="/"
}