const slides = document.querySelectorAll('.slide')

var counter =0;

 slides.forEach((slide,index) =>{
        slide.style.right = `${index*100}%`
})


function goNext(){
        counter++;
        slideImg();
}


function goPrev(){
       counter--;
       slideImg();
}


 const slideImg = () =>{
         slides.forEach((slide) =>{
                       slide.style.transform = `translateX(-${counter *100}%)`
         })
 }
