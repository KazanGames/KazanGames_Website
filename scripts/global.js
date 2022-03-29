
const MenuButton = document.getElementById('MenuButton');
const MobileMenu = document.getElementById('MobileMenu');

MenuButton.addEventListener('click' , function(){
    MobileMenu.style.display = 'flex';
})

if ( pageX.innerWidth <= 860 ){
    MobileMenu.style.display = 'none';
}

window.addEventListener('click', function(e){   
    if (document.getElementById('MobileMenu').contains(e.target)){
      // Clicked in box
    } else{
      MobileMenu.style.display = 'none';
    }
  });