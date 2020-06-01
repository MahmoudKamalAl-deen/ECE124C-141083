const counters = document.querySelectorAll('.counter');
const speed = 20;

counters.forEach( counter => {
    const updCount = () =>{
      const target = counter.getAttribute('data-target');
      const count  = +counter.innerText;
      const score  = Math.ceil(target / speed);
      if (count < target){
        counter.innerText = (count + score) ;
        setTimeout(updCount, 150);
      }else{
        counter.innerText = target;
      }
    }
    updCount();
});
