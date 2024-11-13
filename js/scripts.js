/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsive){
        responsive.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
})

// Activate Bootstrap tabs
$('.nav-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('.nav-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    var slider = $('.nav-tabs .slider');
    slider.css('left', $(this).parent().position().left + ($(this).parent().width() - slider.width()) / 2);
  });

  $(document).ready(function() {
    var activeTab = $('.nav-tabs .nav-link.active');
    var slider = $('.nav-tabs .slider');
    var tabWidth = activeTab.parent().width();
    var sliderWidth = slider.width();
    var leftPosition = activeTab.parent().position().left + (tabWidth - sliderWidth) / 2;
    slider.css('left', leftPosition);
  });
  
  $('.nav-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    var slider = $('.nav-tabs .slider');
    var tabWidth = $(this).parent().width();
    var sliderWidth = slider.width();
    var leftPosition = $(this).parent().position().left + (tabWidth - sliderWidth) / 2;
    slider.css('left', leftPosition);
  });

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('https://formspree.io/f/mrbgboaw', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            form.reset(); // Clear the form
            const successMessage = document.createElement('p');
            successMessage.textContent = 'You\'ve successfully sent the message!';
            successMessage.className = 'success-message'; // add the success-message class
            form.parentNode.insertBefore(successMessage, form.nextSibling);
            setTimeout(function() {
                successMessage.remove();
            }, 5000); // Remove the success message after 5 seconds
        } else {
            throw new Error('Failed to send the message.');
        }
    })
    .catch(function(error) {
        console.error(error);
    });
  });

$('.lightbox').on('click', function(){
  $('#certificate-modal').modal('show');
  $('body').addClass('modal-open');
  // You can remove the line below, as it's not necessary
  // $('body').removeClass('modal-backdrop');
});
document.addEventListener('DOMContentLoaded', event => {
  // Check if the user has a Dark mode preference stored in local storage
  const storedPreference = localStorage.getItem('darkMode');

  // If no preference is stored, default to Light mode
  if (storedPreference === null) {
    localStorage.setItem('darkMode', 'false');
  }

  // Check if the user has a Dark mode preference stored in local storage
  function getDarkModePreference() {
    return localStorage.getItem('darkMode') === 'true';
  }

  // Set the user's Dark mode preference in local storage
  function setDarkModePreference(enabled) {
    localStorage.setItem('darkMode', enabled.toString());
  }

  // Toggle the Dark mode
  function toggleDarkMode() {
    const enabled = !document.body.classList.contains('night-mode');
    document.body.classList.toggle('night-mode');
    setDarkModePreference(enabled);
  }

  // Attach event listener to the Dark mode toggle
  const nightModeCheckbox = document.getElementById('night-mode-checkbox');
  const nightModeToggle = document.getElementById('night-mode-toggle');

  if (nightModeCheckbox && nightModeToggle) {
    nightModeCheckbox.addEventListener('change', toggleDarkMode);
    nightModeToggle.addEventListener('click', toggleDarkMode);
  }

  // Apply the stored Dark mode preference
  if (getDarkModePreference()) {
    document.body.classList.add('night-mode');
  } else {
    document.body.classList.remove('night-mode');
  }
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('#sideNav')) {
    // Close the dropdown menu
    document.getElementById('navbarResponsive').classList.remove('show');
  }
});

