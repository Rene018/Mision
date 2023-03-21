var p= localStorage.getItem('personag')
let cont1= document.querySelector('.container-1') 
let cont2= document.querySelector('.container-2')
if(p==null){
    cont2.classList.add('remove')
}else{
    cont1.classList.add('remove')
}
