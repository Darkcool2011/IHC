const English = document.querySelector('.English')
const menu = document.querySelector('.menu-navegacion')

//console.log(menu)
//console.log(English)

English.addEventListener('click',()=>{
  menu.classList.toggle("spread")
})

window.addEventListener('click',e=>{
  if(menu.classList.contains('spread') && e.target != menu && e.target != English){
    menu.classList.toggle("spread")
  }
})
