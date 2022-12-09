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


// This does not work.

// // Opacity Animation

// function fadeIn(elementID){

//     let opacity = 0; //Starting Opacity
//     let opacityinterval = 0.005; //Increment of Opacity
    
//     let animationtimer = 1 //Milliseconds

//     document.getElementById(elementID).style.opacity=0;

//     animation = setInterval(animate,animationtimer);

//     function animate(){
//         if (opacity>=1){
//             clearInterval(animation);
//         }else{
//             opacity+=opacityinterval;
//             document.getElementById(elementID).style.opacity = opacity;
//         }
//     }

// }

// function fadeOut(elementID){

//     let opacity = 1; //Starting Opacity
//     let opacityinterval = 0.1; //Decrement of Opacity
    
//     let animationtimer = 10 //Milliseconds

//     document.getElementById(elementID).style.opacity=1;

//     animation = setInterval(animate,animationtimer);

//     function animate(){
//         if (opacity<0){
//             clearInterval(animation);
//         }else{
//             opacity-=opacityinterval;
//             document.getElementById(elementID).style.opacity = opacity;
//         }
//     }

// }