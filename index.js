let hOne = document.getElementById("enter");
let hTwo = document.getElementById("init");
let btn = document.getElementById("increment");
let saveBtn = document.getElementById("save-count");
let counter = 0;
function increment() {
    counter++;
    hTwo.textContent = counter;
}
function save() {
    let displaySave = document.getElementById("prev");
    displaySave.textContent += counter + " - ";
    counter = 0;
    hTwo.textContent = 0;
}
saveBtn.addEventListener("click", save);
btn.addEventListener("click", increment);
