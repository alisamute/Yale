document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navLinks'); 
  
  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('show'); 
    });
  } else {
    console.error("Missing 'burger' or 'navLinks' element");
  }
});
