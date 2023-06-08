let submitBtn = document.getElementById("submit-btn");
let forms = document.querySelector(".needs-validation");
let urlInput = document.getElementById("shorts-url-input");
let loading = document.getElementById("loading");

let formCheck = () => {
    "use strict"
    let forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach((form) => {
            form.addEventListener("submit", function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
};
formCheck();

// urlInput.pattern = "http://www\.youtube\.com\/shorts\/(.+)" +
//     "|https://www\.youtube\.com\/shorts\/(.+)" +
//     "|http://youtu\.be\/(.+)" +
//     "|https://youtu\.be\/(.+)"

submitBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    let isValid = true;
    Array.prototype.slice.call(forms)
        .forEach((form) => {
            if (!form.checkValidity()) {
                isValid = false;
            }
        })
    if (isValid) {
        e.preventDefault();
        loading.classList.add("visible");
        window.location = `/go?url=${urlInput.value}`;
    }
});

