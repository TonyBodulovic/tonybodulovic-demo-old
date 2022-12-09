// Show and Hide Content Functions

function showContent(navID,contentID)
{   
    hideContent(currentShownContent);
    selectNavigationItem(navID);
    document.getElementById(contentID).hidden = false;
    currentShownContent=contentID;
}

function hideContent(contentID){
    document.getElementById(contentID).hidden = true;
}

// Set Navigation Index Functions

function selectNavigationItem(navID){
    deselectNavigationItem(currentSelectedNav);
    document.getElementById(navID).classList.add("NavigationItemSelected");
    currentSelectedNav=navID;
}

function deselectNavigationItem(navID){
    document.getElementById(navID).classList.remove("NavigationItemSelected");
}