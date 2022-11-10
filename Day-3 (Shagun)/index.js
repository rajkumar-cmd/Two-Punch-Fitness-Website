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
        <img src="${el.img}"
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
                    <button class="card-btn">
                        ADD TO BAG
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`;
};
