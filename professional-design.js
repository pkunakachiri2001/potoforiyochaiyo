/**
 * Professional Design Enhancement Script
 * Adds smooth animations, scroll reveals, and interactive effects
 * Demonstrates advanced web development capabilities
 */

(function() {
  'use strict';

  // Professional Enhancement Engine
  class ProfessionalDesignEngine {
    constructor() {
      this.initScrollReveal();
      this.initMouseTracking();
      this.initSmoothScroll();
      this.initParallax();
      this.addProfessionalEffects();
    }

    // Scroll Reveal Animation
    initScrollReveal() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all cards and sections
      document.querySelectorAll('.service-card, .website-card, .hosting-feature, .country-card, .card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }

    // Mouse Tracking for Interactive Elements
    initMouseTracking() {
      document.addEventListener('mousemove', (e) => {
        const elements = document.querySelectorAll('.interactive-element');
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          el.style.setProperty('--mouse-x', `${x}px`);
          el.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    }

    // Smooth Scroll Behavior
    initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
    }

    // Parallax Effect
    initParallax() {
      window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        const scrollPosition = window.scrollY;

        parallaxElements.forEach(el => {
          const speed = el.getAttribute('data-parallax') || 0.5;
          el.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      });
    }

    // Add Professional Effects
    addProfessionalEffects() {
      // Add interactive class to cards
      document.querySelectorAll('.service-card, .website-card, .hosting-feature, .country-card').forEach(card => {
        card.classList.add('interactive-element');

        // Add ripple effect on click
        card.addEventListener('click', (e) => {
          this.createRipple(e, card);
        });

        // Add hover gradient animation
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          card.style.setProperty('--hover-x', `${x}px`);
          card.style.setProperty('--hover-y', `${y}px`);
        });
      });

      // Add professional effects to buttons
      document.querySelectorAll('.cta-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.createRipple(e, btn);
        });
      });
    }

    // Create Ripple Effect
    createRipple(event, element) {
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(0, 217, 255, 0.4)';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'ripple-animation 0.6s ease-out';

      element.style.position = 'relative';
      element.style.overflow = 'hidden';
      element.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    }
  }

  // CSS Animation for Ripple Effect
  function addRippleCSS() {
    if (!document.querySelector('style[data-ripple]')) {
      const style = document.createElement('style');
      style.setAttribute('data-ripple', 'true');
      style.textContent = `
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Counter Animation for Stats
  class CounterAnimation {
    constructor() {
      this.initCounters();
    }

    initCounters() {
      const observerOptions = {
        threshold: 0.5
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            this.animateCounter(entry.target);
            entry.target.classList.add('counted');
          }
        });
      }, observerOptions);

      document.querySelectorAll('[data-count]').forEach(el => {
        observer.observe(el);
      });
    }

    animateCounter(element) {
      const target = parseInt(element.getAttribute('data-count'));
      const duration = 2000;
      const start = Date.now();

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = (now - start) / duration;

        if (progress >= 1) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(target * progress);
        }
      }, 10);
    }
  }

  // Professional Scroll Progress Indicator
  class ScrollProgressIndicator {
    constructor() {
      this.initScrollIndicator();
    }

    initScrollIndicator() {
      const indicator = document.createElement('div');
      indicator.className = 'scroll-progress';
      indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d9ff, #a78bfa, #ec4899);
        width: 0%;
        z-index: 1001;
        transition: width 0.1s linear;
      `;
      document.body.appendChild(indicator);

      window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        indicator.style.width = progress + '%';
      });
    }
  }

  // Initialize all professional enhancements
  function initializeAll() {
    addRippleCSS();
    new ProfessionalDesignEngine();
    new CounterAnimation();
    new ScrollProgressIndicator();

    console.log('✨ Professional Design Engine Activated');
    console.log('🎨 Advanced animations enabled');
    console.log('⚡ Interactive effects loaded');
    console.log('🚀 Your portfolio looks AMAZING!');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
  } else {
    initializeAll();
  }
})();
