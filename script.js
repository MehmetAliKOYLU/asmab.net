
function toggleMenu(){
  const m=document.getElementById('menu');
  if(getComputedStyle(m).display==='flex'){m.style.display='none';}
  else{m.style.display='flex';}
}
// Simple slider
let current=0;
const slides=document.getElementById('slides');
const dotWrap=document.getElementById('dots');
if(slides){
  const total=slides.children.length;
  for(let i=0;i<total;i++){
    const d=document.createElement('div'); d.className='dot'+(i===0?' active':''); 
    d.onclick=()=>go(i); dotWrap.appendChild(d);
  }
  function updateDots(){
    [...dotWrap.children].forEach((el,idx)=>{
      el.className='dot'+(idx===current?' active':'');
    });
  }
  function go(i){
    current=(i+total)%total;
    slides.style.transform='translateX('+(-100*current)+'%)';
    updateDots();
  }
  window.next=()=>go(current+1);
  window.prev=()=>go(current-1);
  setInterval(()=>go(current+1),6000);
}
