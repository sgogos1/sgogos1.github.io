window.onload = function(){
    const pageHeader = document.getElementById('header-container');
    const navigationButton = document.getElementById('nav-button');
    const pageNavigation = document.getElementById('page-navigation');

    navigationButton.onclick = function(){
        if (navigationButton.classList.contains("nav-button-clicked")){
            navigationButton.classList.remove("nav-button-clicked");
            pageNavigation.style.display =  "none";
            pageHeader.style.setProperty("border-bottom", "2px gray solid");
        }
        else{
            navigationButton.classList.add("nav-button-clicked");
            pageNavigation.style.display = "block";
            pageHeader.style.setProperty("border-bottom", "none");
        }
    }

  }