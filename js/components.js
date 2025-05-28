// load-footer.js

fetch('../components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer_container').innerHTML = data;
  })
  .catch(error => {
    console.error('שגיאה בטעינת הפוטר:', error);
  });

  
// load-header.js
fetch('../components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header_container').innerHTML = data;
    
    // קבל את הנתיב הנוכחי ונקה אותו
    const currentPath = window.location.pathname.split('/').pop().toLowerCase();

    const navLinks = document.querySelectorAll('#header_container nav ul li a');
    navLinks.forEach(link => {
      // נקה את הנתיב של הקישור
      const linkPath = link.getAttribute('href').split('/').pop().toLowerCase();
      
      // הסר קודם את ה-class מכל הקישורים
      link.classList.remove('current_page');
      
      // בדוק אם זה העמוד הנוכחי
      if (currentPath === linkPath || 
          (currentPath === '' && linkPath === 'index.html') ||
          (currentPath === 'index.html' && linkPath === '')) {
        link.classList.add('current_page');
      }
    });
  })
  .catch(error => {
    console.error('שגיאה בטעינת ההדר:', error);
  });