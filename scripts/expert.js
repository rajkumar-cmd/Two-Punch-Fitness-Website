let content_div = document.querySelector("#content");
let fetchData = async () => {
  try {
    let res = await fetch(`http://localhost:3000/expert-article`);
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
  cards_container.innerHTML += `<div class="card">
  <div class="img-div">
      <img src="${el.img}"
          alt="">
  </div>
  <div class="card-content">
      <div class="card-content-1">
          <div>
              <p class="blue">${el.title}</p>
          </div>
          <div>${el.des}</div>
          <p><span>${el.des_2}</span></p>
          
      </div>
  </div>
</div>`;
};