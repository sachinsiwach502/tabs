let tab_1 = document.querySelector(".one");
let tab_2 = document.querySelector(".two");
let tab_3 = document.querySelector(".three");

let txt_1 = document.querySelector(".para-1");
let txt_2 = document.querySelector(".para-2");
let txt_3 = document.querySelector(".para-3");


let disp_1 = window.getComputedStyle(txt_1).display;
let disp_2 = window.getComputedStyle(txt_2).display;
let disp_3 = window.getComputedStyle(txt_3).display;

tab_1.classList.add("brdr");
tab_1.style.color = "black"

tab_1.addEventListener("click", () => {
    if (disp_1 = "none") {
        txt_1.style.display = "block";
        txt_2.style.display = "none";
        txt_3.style.display = "none";
        tab_1.classList.add("brdr");
        tab_2.classList.remove("brdr");
        tab_3.classList.remove("brdr");
        tab_1.style.color = "black"
        tab_2.style.color = "#808080"
        tab_3.style.color = "#808080"
    }
});

tab_2.addEventListener("click", () => {
    if (disp_2 = "none") {
        txt_2.style.display = "block";
        txt_1.style.display = "none";
        txt_3.style.display = "none";
        tab_1.classList.remove("brdr");
        tab_2.classList.add("brdr");
        tab_3.classList.remove("brdr");
        tab_3.style.borderBottom = 'none';
        tab_2.style.color = "black"
        tab_1.style.color = "#808080"
        tab_3.style.color = "#808080"
    }
});

tab_3.addEventListener("click", () => {
    if (disp_3 = "none") {
        txt_3.style.display = "block";
        txt_1.style.display = "none";
        txt_2.style.display = "none";
        tab_1.classList.remove("brdr");
        tab_2.classList.remove("brdr");
        tab_3.classList.add("brdr");
        tab_3.style.color = "black"
        tab_2.style.color = "#808080"
        tab_1.style.color = "#808080"
    }
});


