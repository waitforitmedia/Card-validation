let input = document.getElementById('text1');
let input2 = document.getElementById('text2');
let input3 = document.getElementById('text3');
let input4 = document.getElementById('text4');
let boton = document.getElementById('button1');

boton.disabled = true;
input2.disabled = true;
input3.disabled = true;
input4.disabled = true;


//VALIDA LONGITUD DE CAMPOS
input.addEventListener('input',function()
{
  if (this.value.length > 4) 
     this.value = this.value.slice(0,4); 
   

  if (this.value.length == 4) 
     input2.disabled = false;
     input2.classList.remove("disabled");

}

)

input2.addEventListener('input',function(){
  if (this.value.length > 4) 
     this.value = this.value.slice(0,4); 

     if (this.value.length == 4) 
     input3.disabled = false;
     input3.classList.remove("disabled");
})


input3.addEventListener('input',function(){
  if (this.value.length > 4) 
     this.value = this.value.slice(0,4); 

     if (this.value.length == 4) 
     input4.disabled = false;
     input4.classList.remove("disabled");
})


input4.addEventListener('input',function(){
  if (this.value.length > 4) 
     this.value = this.value.slice(0,4); 

     if (this.value.length == 4) 
     boton.disabled = false;
     boton.classList.remove("disabled");
})

/*VALIDA TRUE O FALSE DE ELEMENTOS

function () {
    if (input.value.length===4){
      input2.disabled = false;
      input2.classList.remove("disabled");
    } else {
        input2.disabled = true;
    }
  }
*/



import validator from './validator.js';

console.log(validator);