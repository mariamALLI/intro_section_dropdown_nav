const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".mobile_nav_toggle");
const navCloseToggle = document.querySelector(".mobile_close_nav_toggle");

navToggle.addEventListener('click', () => {
    const visibility = navList.getAttribute("data-visible")
  
    if (visibility === "false") {
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true) ;
    } else if (visibility === "true") {
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false); 
    }
});

navCloseToggle.addEventListener('click', () => {
    const nonvisible = navList.getAttribute("data-visible")

    if (nonvisible === "true") {
        navList.setAttribute("data-visible", false);
        navCloseToggle.setAttribute("aria-expanded", false);
    }else if (nonvisible === "false") {
        navList.setAttribute("data-visible", true);
        navCloseToggle.setAttribute("aria-expanded", true);
    }
});



const dropDown = document.querySelector(".dropdown_menu");
const dropDownn =  document.querySelector(".dropdown-menu");
const navLinkToggle = document.querySelector(".nav_link");
const navLinkTggle = document.querySelector("#nav-link");

navLinkToggle.addEventListener('click', () => {
    const expand = dropDown.getAttribute("data-visible");

    if (expand === "false") {
        dropDown.setAttribute("data-visible", true);
        navLinkToggle.setAttribute("aria-expanded", true);
    }else if (expand === "true") {
        dropDown.setAttribute("data-visible", false);
        navLinkToggle.setAttribute("aria-expanded", false);
    }
})

navLinkTggle.addEventListener('click', () => {
    const expand = dropDownn.getAttribute("data-visible");

    if (expand === "false") {
        dropDownn.setAttribute("data-visible", true);
        navLinkTggle.setAttribute("aria-expanded", true);
    }else if (expand === "true") {
        dropDownn.setAttribute("data-visible", false);
        navLinkTggle.setAttribute("aria-expanded", false);
    }
})