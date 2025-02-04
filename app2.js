const fo=document.querySelector('form')
fo.addEventListener('submit',function(e){
    e.preventDefault();
    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const r=document.querySelector('#results')
   if(h==='' || h<0 || isNaN(h)){
     r.innerHTML="please enter a valid height"
   }
  else  if(w==='' ||  w<0 || isNaN(w)){
    r.innerHTML="please enter a valid weight"
  }
  else {
    const bmi=( w/((h*h)/10000)).toFixed(2)
    if(bmi<=18.6){
        r.innerHTML='underweight';
    }
    else if(bmi<=24.6){
        r.innerHTML='normal';
    }
    else{
        r.innerHTML='over';
    }
  }
})