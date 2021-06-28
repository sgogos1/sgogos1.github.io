window.onload = function(){
    const body = document.body;

    const navigationButton = document.getElementById('navigation-button');
    const navigationButtonElement = document.getElementById('navigation-button-element');
    const navigationMenu = document.getElementById('page-navigation');

    const tlNamesPortrait = ['NIWC PAC', 'SPA', 'NCMN', 'SPA', 'NMRL'];
    const tlNamesLandscape = ['NIWC Pacific', 'Systems Planning and Analysis', 'Nebraska Center for Materials & Nanoscience', 'Systems Planning and Analysis', 'Nano & Microsystems Research Lab']

    const timelineButtons = [document.getElementById('niwc-tl-btn'), document.getElementById('spa-tl-btn'), document.getElementById('ncmn-tl-btn'), document.getElementById('spa-2-tl-btn'), document.getElementById('nmrl-tl-btn')];
    let currentButton = timelineButtons[0];

    const timelineDisplays = [document.getElementById('niwc-1'), document.getElementById('spa-1'), document.getElementById('ncmn'), document.getElementById('spa-2'), document.getElementById('nmrl')];
    let currentTLDisplay = timelineDisplays[0];

    function formatPage(){
        if (window.innerHeight > window.innerWidth || window.innerWidth < 1000){
            body.classList.add("portrait");
            body.classList.remove("landscape");
            changeTimelineNames("portrait");
        }
        else {
            body.classList.add("landscape");
            body.classList.remove("portrait");
            changeTimelineNames("landscape");
        }
    }

    document.onload = formatPage;
    document.onresize = formatPage;
    window.onload = formatPage;
    window.onresize = formatPage;

    function changeTimelineNames(pageLayout){
        if (pageLayout === "portrait"){
            for (let i = 0; i < timelineButtons.length; i++){
                timelineButtons[i].innerHTML = tlNamesPortrait[i];
            }
        }
        else {
            for (let i = 0; i < timelineButtons.length; i++){
                timelineButtons[i].innerHTML = tlNamesLandscape[i];
            }
        }
    }

    navigationButton.onclick = function(){
        
        if (!navigationButtonElement.classList.contains("navigation-open")){
            navigationButtonElement.classList.add("navigation-open"); 
            navigationMenu.classList.add("page-navigation-expanded");
            navigationMenu.classList.remove("page-navigation-closed");
        }
        else{
            navigationButtonElement.classList.remove("navigation-open");
            navigationMenu.classList.remove("page-navigation-expanded");
            navigationMenu.classList.add("page-navigation-closed");
        }
    }

    function timelineButtonClick(event){
        const btn = document.getElementById(event.target.id);
        if (timelineButtons.includes(btn) && btn != currentButton){
            const index = timelineButtons.indexOf(btn)
            timelineButtons[index].classList.add("active-timeline-element");
            timelineButtons[index].classList.remove("inactive-timeline-element");
            timelineDisplays[index].classList.add("flex-displayed");
            timelineDisplays[index].classList.remove('not-displayed');

            currentTLDisplay.classList.add("not-displayed");
            currentTLDisplay.classList.remove("flex-displayed");
            currentButton.classList.remove("active-timeline-element");
            currentButton.classList.add("inactive-timeline-element");

            currentButton = timelineButtons[index];
            currentTLDisplay = timelineDisplays[index];
        }
    }

    for (let i = 0; i < timelineButtons.length; i++){
        timelineButtons[i].onclick = timelineButtonClick;
    }
}