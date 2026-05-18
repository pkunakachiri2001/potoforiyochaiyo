/**
 * Advanced AI-Powered Search Engine Optimization
 * This file implements advanced SEO techniques including:
 * - AI-powered content explanation
 * - Smart search query understanding
 * - Dynamic meta tag optimization
 * - Local SEO for Zimbabwe
 * - Rich snippet generation
 */

(function() {
  'use strict';

  // SEO Keywords Database
  const seoDatabase = {
    brandQueries: {
      'kunaka tech': 'KUNAKA TECH - Professional Software Development & AI Solutions',
      'panashe kunaka': 'Panashe Kunaka - Software Engineer & AI/ML Developer',
      'mr kunaka': 'Mr Kunaka - Expert Web & Software Developer from Zimbabwe',
      'p kunaka': 'P Kunaka - Professional Web Development Services',
      'kunaka': 'KUNAKA TECH - Your Technology Partner'
    },
    zimbabweWebQueries: {
      'web development zimbabwe': 'Professional web development services based in Zimbabwe, serving clients globally',
      'zimbabwe web design': 'Custom web design solutions for Zimbabwean businesses and international clients',
      'website design zimbabwe': 'Responsive website design and development in Zimbabwe',
      'build website zimbabwe': 'Website building services from Zimbabwe with global reach',
      'zimbabwe software development': 'Custom software development from Zimbabwe',
      'zimbabwe ai solutions': 'AI and machine learning solutions developed in Zimbabwe',
      'web hosting zimbabwe': 'Reliable web hosting with global infrastructure',
      'harare web development': 'Web development services in Harare, Zimbabwe'
    },
    serviceQueries: {
      'web development': 'Full-stack web development, responsive design, e-commerce solutions',
      'website design': 'Professional website design with modern aesthetics and functionality',
      'ai development': 'Custom AI and ML solutions for your business needs',
      'mobile app': 'Mobile application development for iOS and Android',
      'hosting services': 'Reliable hosting with 99.9% uptime guarantee',
      'web hosting': 'Fast and secure hosting services globally'
    }
  };

  // AI-Powered SEO Optimizer
  class SEOOptimizer {
    constructor() {
      this.pageKeywords = this.extractPageKeywords();
      this.userIntent = this.detectUserIntent();
      this.location = this.detectLocation();
    }

    // Extract primary keywords from page content
    extractPageKeywords() {
      const titleText = document.title || '';
      const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
      const h1Tags = Array.from(document.querySelectorAll('h1')).map(h => h.textContent);
      
      return {
        title: titleText,
        description: metaDescription,
        headings: h1Tags
      };
    }

    // Detect user search intent
    detectUserIntent() {
      const searchParams = new URLSearchParams(window.location.search);
      const query = searchParams.get('q') || searchParams.get('query') || '';
      
      if (query) {
        return this.analyzeQuery(query.toLowerCase());
      }
      return 'informational';
    }

    // Analyze search query for intent
    analyzeQuery(query) {
      if (query.includes('kunaka') || query.includes('panashe')) return 'brand';
      if (query.includes('zimbabwe') && query.includes('web')) return 'local';
      if (query.includes('build') || query.includes('create')) return 'transactional';
      if (query.includes('how') || query.includes('what')) return 'informational';
      return 'general';
    }

    // Detect user location
    detectLocation() {
      // Try to get from geolocation API
      return new Promise((resolve) => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve({ 
              lat: position.coords.latitude, 
              lon: position.coords.longitude 
            }),
            () => resolve(null),
            { enableHighAccuracy: false, timeout: 5000 }
          );
        } else {
          resolve(null);
        }
      });
    }

    // Generate dynamic title based on query
    generateOptimalTitle(query) {
      const baseTitle = 'KUNAKA TECH | Professional Software & Web Development';
      
      if (query.includes('zimbabwe')) {
        return 'Professional Web Development in Zimbabwe | KUNAKA TECH';
      }
      if (query.includes('panashe')) {
        return 'Panashe Kunaka - Expert Software Engineer | KUNAKA TECH';
      }
      if (query.includes('kunaka')) {
        return 'KUNAKA TECH - AI Solutions & Web Development Services';
      }
      return baseTitle;
    }

    // Generate dynamic meta description
    generateOptimalDescription(query) {
      if (query.includes('zimbabwe') && query.includes('web')) {
        return 'Professional web development services from Zimbabwe. Building responsive websites, AI solutions, and hosting for businesses worldwide.';
      }
      if (query.includes('kunaka')) {
        return 'KUNAKA TECH - Expert software development, AI solutions, and web hosting. Serving clients globally from Zimbabwe.';
      }
      if (query.includes('panashe')) {
        return 'Panashe Kunaka - Professional Software Engineer specializing in AI, web development, and innovative tech solutions.';
      }
      return 'KUNAKA TECH - Professional software development, AI solutions, and hosting services. Building tomorrow\'s solutions today.';
    }

    // Add structured data (Schema.org)
    addStructuredData() {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'KUNAKA TECH',
        'description': 'Professional software development and AI solutions company based in Zimbabwe',
        'url': window.location.origin,
        'logo': window.location.origin + '/zimflag.png',
        'sameAs': [
          'https://github.com/pkunakachiri2001',
          'https://linkedin.com/in/pkunaka1engineer'
        ],
        'areaServed': [
          'ZW', 'ZA', 'ZM', 'IN', 'DE', 'GB', 'US'
        ],
        'serviceType': ['Web Development', 'AI Solutions', 'Mobile Apps', 'Web Hosting'],
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'ZW',
          'addressRegion': 'Harare'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+263-phone',
          'contactType': 'Customer Service',
          'email': 'panachiri55@gmail.com'
        }
      };

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    // Add LocalBusiness schema for Zimbabwe
    addLocalBusinessSchema() {
      const localSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'KUNAKA TECH',
        'description': 'Web Development and Software Solutions in Zimbabwe',
        'url': window.location.origin,
        'telephone': '+263',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Harare',
          'addressLocality': 'Harare',
          'addressRegion': 'Harare',
          'postalCode': '',
          'addressCountry': 'ZW'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -17.8252,
          'longitude': 31.0335
        },
        'priceRange': '$$',
        'image': window.location.origin + '/zimflag.png',
        'areaServed': ['Zimbabwe', 'South Africa', 'Zambia', 'India', 'Germany', 'United Kingdom', 'Global']
      };

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(localSchema);
      document.head.appendChild(scriptTag);
    }

    // Add BreadcrumbList schema
    addBreadcrumbSchema(breadcrumbs = []) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': crumb.name,
          'item': window.location.origin + crumb.url
        }))
      };

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }
  }

  // AI-Powered Content Explainer
  class AIContentExplainer {
    constructor() {
      this.explainerCache = new Map();
      this.initializeExplainer();
    }

    initializeExplainer() {
      // Add explain buttons to major content sections
      this.enhanceContentWithExplainers();
    }

    enhanceContentWithExplainers() {
      // Services section
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
        this.addExplainerButton(card, 'service');
      });

      // Website cards
      const websiteCards = document.querySelectorAll('.website-card');
      websiteCards.forEach(card => {
        this.addExplainerButton(card, 'website');
      });

      // Hosting features
      const hostingFeatures = document.querySelectorAll('.hosting-feature');
      hostingFeatures.forEach(feature => {
        this.addExplainerButton(feature, 'feature');
      });
    }

    addExplainerButton(element, type) {
      const btn = document.createElement('button');
      btn.className = 'ai-explain-btn';
      btn.innerHTML = '🤖 AI Explain';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = element.querySelector('h3, h4')?.textContent || 'Content';
        const description = element.querySelector('p')?.textContent || '';
        this.showExplanation(title, description, type);
      });
      element.appendChild(btn);
    }

    showExplanation(title, description, type) {
      const explanation = this.generateAIExplanation(title, description, type);
      
      // Create modal
      const modal = document.createElement('div');
      modal.className = 'ai-explanation-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <h3>🤖 AI Explanation: ${title}</h3>
          <div class="explanation-text">${explanation}</div>
          <div class="explanation-footer">
            <small>Powered by KUNAKA TECH AI</small>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
      });
    }

    generateAIExplanation(title, description, type) {
      const explanations = {
        service: (title, desc) => `
          <p><strong>${title}</strong> is a specialized service we offer to help your business succeed.</p>
          <p>${desc}</p>
          <p><strong>How it helps you:</strong></p>
          <ul>
            <li>Improves your business efficiency</li>
            <li>Reduces costs and increases ROI</li>
            <li>Provides professional expertise</li>
            <li>Scales with your business needs</li>
          </ul>
          <p>Our team has extensive experience delivering this service to clients worldwide.</p>
        `,
        website: (title, desc) => `
          <p><strong>${title}</strong> is one of the website types we specialize in building.</p>
          <p>${desc}</p>
          <p><strong>Our approach includes:</strong></p>
          <ul>
            <li>Modern, responsive design</li>
            <li>SEO optimization</li>
            <li>Fast loading times</li>
            <li>Mobile-friendly interface</li>
            <li>Security best practices</li>
          </ul>
          <p>Let us build your perfect website today!</p>
        `,
        feature: (title, desc) => `
          <p><strong>${title}</strong> is one of our key hosting features.</p>
          <p>${desc}</p>
          <p><strong>What this means for you:</strong></p>
          <ul>
            <li>Your website stays online 24/7</li>
            <li>Fast access from anywhere globally</li>
            <li>Your data is protected</li>
            <li>Professional support when you need it</li>
          </ul>
          <p>Experience hosting that actually works!</p>
        `
      };

      return explanations[type](title, description);
    }
  }

  // Smart SEO Meta Tag Generator
  class MetaTagGenerator {
    static generateForPage(pageName) {
      const metaTags = {
        'services': {
          title: 'Our Services - Web Development, AI, & Hosting | KUNAKA TECH Zimbabwe',
          description: 'Professional web development, AI solutions, web hosting, and software services from Zimbabwe. Serving clients globally with excellence.',
          keywords: 'web development zimbabwe, ai solutions, web hosting, software development, web design'
        },
        'products': {
          title: 'Products & Websites - KUNAKA TECH | Zimbabwe Web Developer',
          description: 'Custom website development, e-commerce platforms, hosting services. See our portfolio of websites built for businesses worldwide.',
          keywords: 'website development, web design, e-commerce, web hosting, zimbabwe'
        },
        'index': {
          title: 'KUNAKA TECH - Web Development & AI Solutions from Zimbabwe',
          description: 'Professional software development, AI/ML solutions, and web hosting. KUNAKA TECH - Building tomorrow\'s solutions today from Zimbabwe.',
          keywords: 'web development, ai solutions, software development, zimbabwe, panashe kunaka'
        }
      };

      return metaTags[pageName] || metaTags['index'];
    }

    static injectMetaTags(pageName) {
      const meta = this.generateForPage(pageName);
      
      // Update title
      document.title = meta.title;

      // Update or create meta tags
      this.updateMetaTag('description', meta.description);
      this.updateMetaTag('keywords', meta.keywords);
      
      // OG tags for social
      this.updateMetaTag('og:title', meta.title, 'property');
      this.updateMetaTag('og:description', meta.description, 'property');
      this.updateMetaTag('og:url', window.location.href, 'property');
      
      // Twitter cards
      this.updateMetaTag('twitter:title', meta.title);
      this.updateMetaTag('twitter:description', meta.description);
    }

    static updateMetaTag(name, content, attr = 'name') {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    }
  }

  // Initialize all SEO optimizations when DOM is ready
  function initializeSEO() {
    const seoOptimizer = new SEOOptimizer();
    seoOptimizer.addStructuredData();
    seoOptimizer.addLocalBusinessSchema();
    seoOptimizer.addBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services.html' },
      { name: 'Products', url: '/products.html' }
    ]);

    // Initialize AI content explainer
    new AIContentExplainer();

    // Log SEO optimization active
    console.log('🔍 Advanced SEO Optimization Active');
    console.log('📍 Local SEO for Zimbabwe: Enabled');
    console.log('🤖 AI Content Explainer: Ready');
    console.log('🌍 Global Reach: 7+ Countries');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSEO);
  } else {
    initializeSEO();
  }
})();
