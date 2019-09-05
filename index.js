window.onload = function(){
    var searchInput =document.getElementById("searchInput");
    searchInput.addEventListener("keyup",showKeyword,false)
    searchInput.addEventListener("blur",hideKeyword,false)
    searchInput.addEventListener("focus",showKeyword,false)

    function showKeyword() {
        if(searchInput.value !==""){
            document.getElementById("search-suggest").style.display="block";

        }
// logic: if value not equal empty we do next
    }
    function hideKeyword() {
        document.getElementById("search-suggest").style.display="none";
    //lose focus makes element undisplayed

    }

}

