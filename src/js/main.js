$(document).ready(function(){


    // EASY-REVEAL


    window.onscroll=function(ev){
      easyReveal();
    };

    function elementInViewport(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;

      while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }

      return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
      );
    }


    function easyReveal(){

     var easyItem=  document.getElementsByClassName("easy");
     console.log(easyItem);

        for(var i=0; i<easyItem.length; i++){
            if(elementInViewport(easyItem[i])){
              $(easyItem[i]).animate({
        opacity: 1,
        bottom: 0



      }, 900 );
    }


    }

      }

 });
