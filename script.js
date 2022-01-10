let count = 0;
function increment(){
    count=count+1;
    document.getElementById("countershow").textContent = count;
}
function save(){
    let savedEl = document.getElementById("savedEntries");
    savedEl.textContent += count + " - ";
    count = 0
    document.getElementById("countershow").textContent = 0
}