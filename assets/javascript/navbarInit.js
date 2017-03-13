$(function() {
  // Init navbar
  navbarInit();
});


/* Set the width of the side navigation to 250px */
function openNav() {
  console.log("openNav");
    document.getElementById("theSidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    console.log("closeNav");
//    console.log(this);
    document.getElementById("theSidenav").style.width = "0";
}
function toggleNav() {
  console.log("toggleNav");
    var sideNav = document.getElementById("theSidenav");
  //  sideNav.style.height = (sideNav.style.height == "0px") ? "300px" : "0px";
  console.log(sideNav.style.height);
    if(sideNav.style.height == "0px") {
      sideNav.style.height = "300px";
    } else {
      sideNav.style.height = "0px";
    }
    console.log(sideNav.style.height);
}

function navbarInit() {
  /* Close nav when clicking anywhere except the side nav */
  // document.getElementById("content").addEventListener('click', closeNav, true);

/*
 var navButtons = document.getElementsByClassName("navbutton");
 [].forEach.call(navButtons, function (navButton) {
   console.log(navButton);
   navButton.removeEventListener('click', closeNav, true);
 });
 */

//  document.getElementById("navbutton").addEventListener('click', toggleNav, true);

//  closeNav();
}
