function changeBarSize(toSize)
{
    if(toSize == "large")
    {
        searchDiv = document.getElementById("search");
        emptyDiv = document.getElementById("empty_container");
        emptyDiv2 = document.getElementById("empty_container3");
        emptyDiv.style.width = "21.5%";
        searchDiv.style.width =  "30.5%";
        emptyDiv2.style.width = "26%";
    }
    else
    {
        searchDiv = document.getElementById("search");
        emptyDiv = document.getElementById("empty_container");
        emptyDiv2 = document.getElementById("empty_container3");
        emptyDiv.style.width = "24.5%";
        searchDiv.style.width =  "27.5%";
        emptyDiv2.style.width = "24%";
    }
    
}