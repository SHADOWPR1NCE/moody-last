// load-footer.js

fetch('./pages/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer_container').innerHTML = data;
  })
  .catch(error => {
    console.error('שגיאה בטעינת הפוטר:', error);
  });

  
// load-header.js
fetch('./pages/header.html')
  .then(response => response.text())
  .then(data => {
    // Insert the header HTML
    document.getElementById('header_container').innerHTML = data;
    
    // After inserting the header, set the current page active state
    const currentPath = window.location.pathname;
    
    // Clear any existing current_page attributes
    const navLinks = document.querySelectorAll('#header_container nav ul li a');
    navLinks.forEach(link => {
      link.removeAttribute('id');
    });
    
    // Set the current page attribute
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPath === linkPath || 
          (currentPath === '/' && linkPath === '/index.html') ||
          currentPath.endsWith(linkPath)) {
        link.setAttribute('id', 'current_page');
      }
    });
  })
  .catch(error => {
    console.error('שגיאה בטעינת ההדר:', error);
  });