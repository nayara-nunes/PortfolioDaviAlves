
/*MENU SANDWICHE */
const $menu = document.querySelectorAll('#menu')[0];

const $nav = document.querySelectorAll('nav')[0];
let isOpen = false;
$menu.addEventListener('click',toggleMenu);
function toggleMenu(){
  if(!isOpen){
    $nav.classList.add('menu-open');
    $menu.firstElementChild.classList.add('close-btn')
    isOpen =true;
  }else {
        $nav.classList.remove('menu-open');
        $menu.firstElementChild.classList.remove('close-btn')
        isOpen = false;
    }
}
