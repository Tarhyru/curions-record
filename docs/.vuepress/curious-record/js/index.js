if(window.Hammer){
    const {getGuideText} = window.Hammer;
    const textContent =  document.querySelector('#guide-text')
    getGuideText().then((text)=>{
         textContent.innerText = text;
     })
 }