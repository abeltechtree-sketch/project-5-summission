const smalls=document.querySelectorAll('.small');
const inputText=document.querySelector('.input');


inputText.addEventListener('input',function(){
    const toBeFiltered = inputText.value.toLowerCase();
    smalls.forEach(function(small){

        const name_of_dataset =  small.dataset.name.toLowerCase();
        console.log(name_of_dataset)

        if(name_of_dataset.includes(toBeFiltered) || toBeFiltered === '') {
            small.style.display ="inline-block"
        }  else {
            small.style.display ="none";
        }
        
    })
})



