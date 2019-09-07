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
    bannerOption();
    function bannerOption() {
        var swiper = document.getElementById("swiper");//get slide show layer
        var swiperItem = swiper.getElementsByClassName("swiper-item"); // get elements
        var prev = document.getElementsByClassName("prev")[0];//get prev
        var next = document.getElementsByClassName("next")[0]; //get next

        var index=0;// num of slide show is 0

        for(var i=0;i< swiperItem.length;i++){
            if (index ==i){
                swiperItem[i].style.opacity =1;

            }else {
                swiperItem[i].style.opacity =0;
            }
            swiperItem[i].style.transform = "translateX(" + (-i * swiperItem[0].offsetWidth) + "px)";
        }

        prev.onclick= function () {
            index--;
            changeImg()

        }
        next.onclick=function () {
            index++;
            changeImg()
        }

        //function make current index picture show
        function changeImg(){
            for(var j = 0; j <swiperItem.length;j++){
                swiperItem[j].style.opacity=0;
            }
            swiperItem[index].style.opacity=1;
        }

    }


}


