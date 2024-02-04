let countClickedElement = 0;

document.addEventListener('click', function(e){

  let elementClicked = e.target;

  if(elementClicked.tagName === 'P'){
    countClickedElement++;

    if(countClickedElement === 1){
      elementClicked.classList.add('conclused');
    } else if(countClickedElement === 2){
      elementClicked.classList.remove('conclused');
      countClickedElement = 0; 
    };

  };

});

