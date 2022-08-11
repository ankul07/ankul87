
/**------------------------------------------------------------------------
 * -------------------navbar toggle------------------------------------------
 * --------------------------------------------------------------------------
 */

const navtoggler = document.querySelector(".nav-toggler");
navtoggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/**--------------------------------------------
 * ------actibe tabs----------------------------------
 * -----------------------------------------------------
 */

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !==""){
        //activate the overy lay to prevent multiple clcik
        document.querySelector(".overlay").classList.add("active");
        navtoggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
           toggleNavbar();
        }
        else{
           hideSection();
           document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
                document.querySelector("section.active").classList.remove("active", "fade-out");
                document.querySelector(e.target.hash).classList.add("active");
                window.scrollTo(0,0);
                document.body.classList.remove("hide-scrolling");
                navtoggler.classList.remove("hide");
                document.querySelector(".overlay").classList.remove("active");
        },200)
    }
})






/* ----------------------------------------------
--------------------about tabs--------------------
---------------------------------------------------*/
const tabcontainer = document.querySelector(".about-tabs"),
aboutsection = document.querySelector(".about-section");

tabcontainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabcontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutsection.querySelector(".tab-content.active").classList.remove("active");
        aboutsection.querySelector(target).classList.add("active");
        }
});


/*  ----portfoko item detail pop
*/

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);

    }
    

})
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//hide popup when cliking out of it

document.addEventListener("click" ,(e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.queryCommandIndeterm(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;

}

