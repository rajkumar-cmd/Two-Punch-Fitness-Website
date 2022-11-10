import footer from "../Components/footer.js";

document.getElementById("footer").innerHTML=footer();

document.getElementById("join_now").addEventListener("click", function () {
    window.location.href = "./join.html";
});

document.getElementById("member_btn").addEventListener("click", function () {
    window.location.href = "./join.html";
});