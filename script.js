// Write your code here
let light1 = document.querySelector('#lightbulb1');

let light2 = document.querySelector("#lightbulb2");

let light3 = document.querySelector("#lightbulb3");

let subtitle = document.querySelector(".subtitle")

let count = 0;

light1.addEventListener("click", function()
{
    count = count + 1;
    subtitle.innerHTML = `You've clicked the lights ${count} times`
    light1.classList.toggle("active");
})

light2.addEventListener("click", function()
{
    count = count + 1;
    subtitle.innerHTML = `You've clicked the lights ${count} times`
    light2.classList.toggle("active");
})

light3.addEventListener("click", function()
{
    count = count + 1;
    subtitle.innerHTML = `You've clicked the lights ${count} times`
    light3.classList.toggle("active"); 
})