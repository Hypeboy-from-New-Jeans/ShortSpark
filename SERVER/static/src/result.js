let thumbnail = document.getElementById("thumbnail");
let againBtn = document.getElementById("again-btn");
let goBtn = document.getElementById("go-btn");
let homeBtn = document.getElementById("home-btn");
let loading = document.getElementById("loading");

let url = document.getElementById("url").textContent;

window.addEventListener("load", (e) => {
    if (thumbnail.complete && thumbnail.naturalHeight !== 0) {
        let width = thumbnail.width;
        thumbnail.height = width * 1.8;
        thumbnail.width = width;
    }
});

againBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loading.classList.add("visible");
    window.location = `/go?url=${url}&again=1`;
});

goBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(url);
});

homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "/";
});
