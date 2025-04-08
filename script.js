function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const hamburgerNav = document.getElementById('hamburger-nav');
  const isClickInside = hamburgerNav.contains(event.target);
  
  if (!isClickInside) {
    const menu = document.querySelector(".menu-links.open");
    const icon = document.querySelector(".hamburger-icon.open");
    if (menu && icon) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  }
});


// Add smooth scrolling for all arrow buttons
document.querySelectorAll('.arrow').forEach(arrow => {
  arrow.addEventListener('click', function() {
    // Determine which section to scroll to based on current section
    const currentSection = this.closest('section');
    let targetId;
    
    if (currentSection.id === 'profile') {
      targetId = 'about';
    } else if (currentSection.id === 'about') {
      targetId = 'experience';
    } else if (currentSection.id === 'experience') {
      targetId = 'projects';
    } else if (currentSection.id === 'projects') {
      targetId = 'contact';
    }else if (currentSection.id === 'contact') {
      targetId = 'profile';
    }
    
    if (targetId) {
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Smooth scroll to any section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ 
    behavior: 'smooth' 
  });
}