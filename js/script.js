 // JavaScript to toggle the mobile menu and icons
 const mobileMenu = document.getElementById('mobile-menu');
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenuClose = document.getElementById('mobile-menu-close');

 mobileMenuButton.addEventListener('click', function() {
     mobileMenu.classList.remove('hidden');
     mobileMenuButton.classList.add('hidden');
     mobileMenuClose.classList.remove('hidden');
 });

 mobileMenuClose.addEventListener('click', function() {
     mobileMenu.classList.add('hidden');
     mobileMenuButton.classList.remove('hidden');
     mobileMenuClose.classList.add('hidden');
 });


  let lastScroll = 0;
    const scrollHideNav = document.getElementById('scroll-hide-nav');

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 64) {
            // Scroll down
            scrollHideNav.classList.add('scroll-hide-up');
            scrollHideNav.classList.remove('scroll-hide-down');
        } else {
            // Scroll up
            scrollHideNav.classList.remove('scroll-hide-up');
            scrollHideNav.classList.add('scroll-hide-down');
        }

        lastScroll = currentScroll;
    });