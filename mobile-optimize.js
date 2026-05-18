// Mobile Optimization Script
// Ensures perfect mobile experience across all devices

(function() {
  'use strict';

  // Prevent horizontal scroll
  function preventHorizontalScroll() {
    let touchStartX = 0;
    document.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
    }, false);

    document.addEventListener('touchmove', function(e) {
      const touchEndX = e.touches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 10) {
        // Allow vertical scrolling, prevent horizontal
        if (window.innerWidth === document.documentElement.clientWidth) {
          // Only prevent if at edge
          if ((window.scrollX === 0 && diff < 0) || 
              (window.scrollX >= document.documentElement.scrollWidth - window.innerWidth && diff > 0)) {
            e.preventDefault();
          }
        }
      }
    }, false);
  }

  // Ensure proper viewport behavior
  function optimizeViewport() {
    // Fix for iOS Safari address bar
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    window.addEventListener('resize', function() {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', vh + 'px');
    });
  }

  // Optimize touch interactions
  function optimizeTouchInteractions() {
    // Remove 300ms tap delay on mobile
    if ('ontouchstart' in window) {
      document.addEventListener('touchstart', function() {}, false);
    }

    // Add touch feedback to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn-primary, .cta-btn, .service-card, .website-card, .quantum-btn');
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', function() {
        this.style.opacity = '0.8';
      });
      element.addEventListener('touchend', function() {
        this.style.opacity = '1';
      });
    });
  }

  // Fix mobile menu functionality
  function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
      });

      // Close menu when link is clicked
      const menuLinks = mobileMenu.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
        });
      });
    }
  }

  // Ensure images load properly on mobile
  function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
    });
  }

  // Prevent zoom on form input focus (iOS)
  function preventInputZoom() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        // Ensure font size is at least 16px to prevent zoom
        const fontSize = window.getComputedStyle(this).fontSize;
        if (parseInt(fontSize) < 16) {
          this.style.fontSize = '16px';
        }
      });
    });
  }

  // Detect mobile device type
  function detectMobileDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua);
    const isTablet = /ipad|android(?!.*mobi)/i.test(ua);
    
    if (isMobile) {
      document.documentElement.setAttribute('data-device', 'mobile');
    }
    if (isTablet) {
      document.documentElement.setAttribute('data-device', 'tablet');
    }
  }

  // Fix for notch/safe area (iOS)
  function handleSafeArea() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');
    }
  }

  // Optimize performance on mobile
  function optimizePerformance() {
    // Reduce animation complexity on low-end devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.animationDuration = '0.01ms !important';
      document.documentElement.style.animationIterationCount = '1 !important';
      document.documentElement.style.transitionDuration = '0.01ms !important';
    }
  }

  // Ensure proper scrolling behavior
  function optimizeScrolling() {
    // Use passive event listeners for better performance
    document.addEventListener('scroll', function() {}, { passive: true });
    window.addEventListener('scroll', function() {}, { passive: true });
  }

  // Initialize all optimizations when DOM is ready
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
      initializeAll();
    }
  }

  function initializeAll() {
    detectMobileDevice();
    handleSafeArea();
    optimizeViewport();
    optimizeTouchInteractions();
    initializeMobileMenu();
    optimizeImages();
    preventInputZoom();
    optimizePerformance();
    optimizeScrolling();
    
    // Log that optimizations are active
    if (window.matchMedia('(max-width: 768px)').matches) {
      console.log('Mobile optimization enabled ✓');
    }
  }

  init();

  // Re-optimize on orientation change
  window.addEventListener('orientationchange', function() {
    setTimeout(optimizeViewport, 100);
  });
})();
