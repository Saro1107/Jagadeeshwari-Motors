AOS.init();

let button = document.querySelector(".arrow");
let links = document.querySelector(".nav-links");

button.addEventListener("click",()=>{
    links.classList.toggle("display");
    button.children[0].classList.toggle("toggle1");
    button.children[1].classList.toggle("toggle2");
    button.children[2].classList.toggle("toggle3");
});

$(".main-carousel").flickity({
 cellAlign:'left',
 wrapAround:false,
 freeScroll:false
});


$(document).on("click","a",function(){
    $(this).addClass("Focus").siblings().removeClass("Focus")
  });

  $(document).ready(function(){
  
    $(window).ready(function()
    {
        $(".image-grid-child1").show();
        $(".image-grid-child2").show();
        $(".image-grid-child3").show();
        $(".image-grid-child4").show();
        $(".image-grid-child5").show();
        $(".image-grid-child6").show();
        $(".image-grid-child7").show();
        $(".image-grid-child8").show();
    });
    $(".active").click(function()
    {
        $(".image-grid-child1").show();
        $(".image-grid-child2").show();
        $(".image-grid-child3").show();
        $(".image-grid-child4").show();
        $(".image-grid-child5").show();
        $(".image-grid-child6").show();
        $(".image-grid-child7").show();
        $(".image-grid-child8").show();
    });
    $(".active1").click(function()
    {              
        $(".image-grid-child1").show();
        $(".image-grid-child2").hide();
        $(".image-grid-child3").hide();
        $(".image-grid-child4").hide();
        $(".image-grid-child5").hide();
        $(".image-grid-child6").show();
        $(".image-grid-child7").hide();
        $(".image-grid-child8").hide();

        // document.querySelector(".image-grid-child1").style.transition ="1s";
        // document.querySelector(".image-grid-child2").style.transition ="1s";
        // document.querySelector(".image-grid-child3").style.transition ="1s";
        // document.querySelector(".image-grid-child4").style.transition ="1s";
        // document.querySelector(".image-grid-child5").style.transition ="1s";
        // document.querySelector(".image-grid-child6").style.transition ="1s";
        // document.querySelector(".image-grid-child7").style.transition ="1s";
        // document.querySelector(".image-grid-child8").style.transition ="1s";
    });
    $(".active2").click(function()
    {              
        $(".image-grid-child1").hide();
        $(".image-grid-child2").show();
        $(".image-grid-child3").hide();
        $(".image-grid-child4").hide();
        $(".image-grid-child5").hide();
        $(".image-grid-child6").hide();
        $(".image-grid-child7").show();
        $(".image-grid-child8").hide();
    });
    $(".active3").click(function()
    {              
        $(".image-grid-child1").hide();
        $(".image-grid-child2").hide();
        $(".image-grid-child3").show();
        $(".image-grid-child4").hide();
        $(".image-grid-child5").hide();
        $(".image-grid-child6").hide();
        $(".image-grid-child7").hide();
        $(".image-grid-child8").show();
    });
    $(".active4").click(function()
    {              
        $(".image-grid-child1").hide();
        $(".image-grid-child2").hide();
        $(".image-grid-child3").hide();
        $(".image-grid-child4").show();
        $(".image-grid-child5").hide();
        $(".image-grid-child6").hide();
        $(".image-grid-child7").hide();
        $(".image-grid-child8").hide();
    });
    $(".active5").click(function()
    {              
        $(".image-grid-child1").hide();
        $(".image-grid-child2").hide();
        $(".image-grid-child3").hide();
        $(".image-grid-child4").hide();
        $(".image-grid-child5").show();
        $(".image-grid-child6").hide();
        $(".image-grid-child7").hide();
        $(".image-grid-child8").hide();
        // document.querySelector(".image-grid-child1").style.display ="none";
        // document.querySelector(".image-grid-child2").style.display ="none";
        // document.querySelector(".image-grid-child3").style.display ="none";
        // document.querySelector(".image-grid-child4").style.display ="none";
        // document.querySelector(".image-grid-child5").style.display ="block";
        // document.querySelector(".image-grid-child6").style.display ="none";
        // document.querySelector(".image-grid-child7").style.display ="none";
        // document.querySelector(".image-grid-child8").style.display ="none";
    });
}); 

//scroll up button js...

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
    {
        toTop.classList.add("activeScroll");
    }
    else
    {
        toTop.classList.remove("activeScroll");
    }
})

 

