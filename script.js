var con=document.querySelector(".picture")
var hearts=document.querySelector("#hearts")
con.addEventListener("dblclick",function(){
    hearts.style.transform=' scale(1)';
    hearts.style.opacity='0.8';
    hearts.style.color='red';
    setTimeout(() => {
        hearts.style.opacity='0';
    }, 1000);
    setTimeout(() => {
        hearts.style.transform=' scale(0)';
        hearts.style.color='white';
    }, 2000);
})

//delay deny ky lye yeh func lgaingye
