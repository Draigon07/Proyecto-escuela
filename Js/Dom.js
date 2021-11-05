





(function(){
    const sliders = [...document.querySelectorAll('.slider_body')];  //Asi combertimos una lista de nodos a Array agregandole los ...
    const arrowAfter = document.getElementById('after');
    const arrowBefore = document.getElementById('before');
    let value;
 
 
    arrowAfter.addEventListener('click', ()=> changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));
 
 
    function changePosition(change){
       const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
       console.log(currentElement)
 
 
       value = currentElement;
       value += change;
      
 
       if(value === 0 || value === sliders.length + 1){
           value = value === 0? sliders.length : 1;
 
       }
 
       sliders[currentElement-1].classList.toggle('slider_body--show')
       sliders[value-1].classList.toggle('slider_body--show')
    }
 
 })();

  

 //Section slider_welcome

 let slider = document.querySelector('.welcome_slider');
 let sliderIndividual = document.querySelectorAll('.welcome_slider_content');
 let contador  = 0;
 let width = sliderIndividual[0].clientWidth;
 let intervalo = 4000;

 window.addEventListener('resize',()=>{
     width = sliderIndividual[0].clientWidth
    })

    
const slides = ()=>{
         slider.style.transform = "translate("+(-width*contador)+"px)";
         contador++
         slider.style.transition = "transform .8s";
    
         if(contador == sliderIndividual.length){
             setTimeout(()=>{
                  slider.style.transform = "translate(0px)";
                  slider.style.transition = "transform 0s"
                  contador = 1
             },1500)
      }
    
 }

 setInterval(()=>{
     slides()
 },intervalo);


 
 


  














 

 