var currentShown = "";

function show(id)
{
    hide(currentShown);
    document.getElementById(id).style.display = "block";
    currentShown=id;
}

function hide(id){
    document.getElementById(currentShown).style.display = "none";
}

function test(){
    document.getElementById("navbar").style.display="none";
}