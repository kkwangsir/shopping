window.onload = function(){
    var searchInput =document.getElementById("searchInput");
    searchInput.addEventListener("keyup",showKeyword,false);
    searchInput.addEventListener("blur",hideKeyword,false);
    searchInput.addEventListener("focus",showKeyword,false);

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
    // slide show contronl
    function bannerOption() {
        var swiper = document.getElementById("swiper");//get slide show layer
        var swiperItem = swiper.getElementsByClassName("swiper-item"); // get elements
        var prev = document.getElementsByClassName("prev")[0];//get prev
        var next = document.getElementsByClassName("next")[0]; //get next
        var timer =null;
        var index=0;// num of slide show is 0
        var indicators = document.getElementsByClassName("indicator");// get little cycle points


        //set slide show's opacity and move position
        for(var i=0;i< swiperItem.length;i++){
            if (index ===i){
                swiperItem[i].style.opacity =1;

            }else {
                swiperItem[i].style.opacity =0;
            }
            swiperItem[i].style.transform = "translateX(" + (-i * swiperItem[0].offsetWidth) + "px)";
        }
        //listener for cycle point 
        for(var k =0; k< indicators.length; k++){
            indicators[k].onclick =function () {
                clearInterval(timer);
                var clickIndex = parseInt(this.getAttribute("data-index"));
                index = clickIndex;
                changeImg();
            }
        }
        
        
        prev.onclick= function () {
            clearInterval(timer);

            index--;
            changeImg()

        }

        next.onclick=function () {
            clearInterval(timer);

            index++;
            changeImg()
        }
        swiper.addEventListener("mouseover", function () {
            clearInterval(timer)
        },false)
        swiper.addEventListener("mouseout",function () {
            autoChange()
        },false)

        //function make current index picture show
        function changeImg(){
            if (index<0){
                index = swiperItem.length -1;
            }else if(index > swiperItem.length-1){
                index =0
            }
            for(var j = 0; j <swiperItem.length;j++){
                swiperItem[j].style.opacity=0;
            }
            swiperItem[index].style.opacity=1;
            setIndicatorOn();
        }
        autoChange();
        // auto play pics
        function autoChange(){
            timer = setInterval(function () {
                index++;
                changeImg();
            }, 3000);

        }
        //active indicator
        function setIndicatorOn() {
            for (var i=0; i<indicators.length;i++){
                indicators[i].classList.remove("on");
            }
            indicators[index].classList.add("on")

        }
    }


    //lighing deal count down
    var deal_time=7200;
    var deal_timer= setInterval(function () {
        if(deal_timer<0){
            clearInterval(deal_timer)
        }else {
            calTime(deal_time);
            deal_time--

        }

    },1000)
    function calTime(time) {
        var hour = Math.floor(time/60/60); // hour
        var minutes =Math.floor(time/60 % 60) //modulus to seconds
        var seconds =Math.floor(time%60) // modulus to seconds
        hour =formatTime(hour);
        minutes=formatTime(minutes);
        seconds=formatTime(seconds);

        document.getElementsByClassName("cd_hour")[0].innerHTML =hour;
        document.getElementsByClassName("cd_minute")[0].innerHTML=minutes;
        document.getElementsByClassName("cd_second")[0].innerHTML=seconds;



    }
    function formatTime(t) {
        if (t <10){
            t="0"+t
        }
        return t;
    }


}


