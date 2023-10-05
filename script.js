function setActiveNavItem() {
    const navItems = document.querySelectorAll('.nav-links-item');
    
    navItems.forEach((navItem) => {
        const sectionId = navItem.querySelector('a').getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
            const rect = section.getBoundingClientRect();
            
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // The section is in the viewport
                navItem.classList.add('active');
            } else {
                // The section is not in the viewport
                navItem.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveNavItem);
window.addEventListener('load', setActiveNavItem);
