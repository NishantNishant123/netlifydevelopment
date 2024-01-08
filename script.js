document.addEventListener("DOMContentLoaded", function () {

  const openMenuButton = document.getElementById("open-menu");
  
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");

  openMenuButton.addEventListener("click", function () {



    if (menu.style.right == "-300px" || menu.style.right == "") {
      menu.style.right = "0";
      overlay.style.display = "block";


    }
    else {

      menu.style.right = "-300px"
      overlay.style.display = "none";

    }
  });


  overlay.addEventListener("click", closeMenu);

  menu.addEventListener("click", closeMenu);
  function closeMenu() {
    menu.style.right = "-300px";
    overlay.style.display = "none";
  }
});
