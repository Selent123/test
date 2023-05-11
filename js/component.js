function showSlides() {
  var slideIndex = 0;
  var slides_container = document.getElementById("slide-container");
  var slides = document.getElementsByClassName("slide");
  var dot = document.getElementsByClassName("dot");
  var dots = document.querySelector(".dots-container");
  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];
  // 设置slide dot初始状态 
  slides[slideIndex].className = "slide active";  
  dot[slideIndex].className = "dot active";    
  next.onclick = function (){
    goNext()
  };
  prev.onclick = function (){
    slideIndex = slideIndex <= 0 ? slides.length - 1 : --slideIndex;
    changeImg()
  }
  function goNext(){
       slideIndex = slideIndex >= slides.length - 1 ? 0 : ++slideIndex;
       changeImg()
  }
  function changeImg(){
    var i;
    // 隐藏所有slide
    for (i = 0; i < slides.length; i++) {
        slides[i].className = "slide";
    }
    // 取消所有dot的active状态
    for (i = 0; i < dot.length; i++) {
        dot[i].className = "dot";
    }
    slides[slideIndex].className = "slide active"
    dot[slideIndex].className = "dot active"
   }
   var t1 = setInterval(goNext, 2000) 
    slides_container.onmouseover = function () {
        clearInterval(t1);
    }
    slides_container.onmouseout = function () {
        t1 = setInterval(goNext, 2000)
    }

    
    dots.onclick = function(event){
    let index =  event.target.getAttribute("data-index")
    if(index === null){
        return
    }
    slideIndex = index
    changeImg()
  }
}


function actionbar(){
    var bar = document.getElementsByClassName("bar");
    var actionbar = document.querySelector(".actionbar");
    console.log(actionbar)
    actionbar.onclick = function(event) {
        let index =  event.target.getAttribute("data-index")
        console.log(index)
        if(index === null){
            return
        }
        for (i = 0; i < bar.length; i++) {
            bar[i].className = "bar";
        }
        bar[index].className = "bar active"
    }
}