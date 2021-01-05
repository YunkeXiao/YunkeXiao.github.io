window.onload = () => {
    let target = document.getElementById("visit-container");
    target.addEventListener('click', transition, false);
}

let transition = () =>{
    let menu = document.getElementById("main-menu");
    let main = document.getElementById("main-page");
    menu.style.opacity = '0';
    menu.style.display = "none";
    menu.addEventListener('transitioned', () => menu.remove());
    main.style.display = "flex";
    main.style.opacity = '100';
}
