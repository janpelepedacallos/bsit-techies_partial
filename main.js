const user_toggle = document.getElementById("toggle");
const menu_lists = document.getElementById("menu_lists");
const bar_toggle = document.getElementById("bars");
const hamburger_lists = document.getElementById("hamburger_lists");

document.onclick = function(e) {
    if (e.target.id != "bars") {
        bar_toggle.classList.remove("active");
        hamburger_lists.classList.remove("active");
    }
}
bar_toggle.onclick = function() {
    bar_toggle.classList.toggle("active");
    hamburger_lists.classList.toggle("active");
}
user_toggle.onclick = function() {
    menu_lists.classList.toggle("active");
}
document.onclick = function(e) {
    if(e.target.id != "bars") {
        bar_toggle.classList.remove("active");
        hamburger_lists.classList.remove("active");
    }

    if(e.target.id != "toggle") {
        menu_lists.classList.remove("active");
    }
}