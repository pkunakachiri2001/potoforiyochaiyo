/**
 * Enhanced E-E-A-T Schema Markup Generator
 * Automatically injects expert, experience, authority, and trustworthiness signals
 */

(function() {
  'use strict';

  // Enhanced Organization Schema with Author Information
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KUNAKA TECH",
    "alternateName": ["Kunaka Tech", "KUNAKA TECH Solutions"],
    "url": "https://pkunaka1engineer.me",
    "logo": "https://pkunaka1engineer.me/zimflag.png",
    "description": "Professional software development company specializing in web development, AI solutions, and hosting services",
    "founder": {
      "@type": "Person",
      "name": "Panashe Kunaka",
      "url": "https://pkunaka1engineer.me/about.html",
      "sameAs": [
        "https://github.com/pkunakachiri2001",
        "https://linkedin.com/in/pkunaka1engineer"
      ]
    },
    "foundingDate": "2022-01-01",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Zimbabwe"
      },
      {
        "@type": "Country",
        "name": "South Africa"
      },
      {
        "@type": "Country",
        "name": "Zambia"
      },
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+263-phone",
      "contactType": "Customer Service",
      "email": "panachiri55@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Harare",
      "addressLocality": "Harare",
      "addressRegion": "ZW",
      "postalCode": "00263",
      "addressCountry": "ZW"
    },
    "sameAs": [
      "https://github.com/pkunakachiri2001",
      "https://linkedin.com/in/pkunaka1engineer"
    ],
    "knowsAbout": [
      "Web Development",
      "Full-Stack Development",
      "AI/Machine Learning",
      "React Development",
      "Node.js Development",
      "Mobile App Development",
      "Cloud Solutions",
      "Azure",
      "Blockchain",
      "Web3",
      "SEO Optimization"
    ]
  };

  // Person Schema - Author Authority
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Panashe Kunaka",
    "url": "https://pkunaka1engineer.me",
    "image": "https://pkunaka1engineer.me/panaface.jpg",
    "jobTitle": "Software Engineer & AI/ML Specialist",
    "description": "Panashe Kunaka is a software engineer and AI/ML specialist with expertise in full-stack web development, machine learning, blockchain technologies, and cloud solutions. Based in Zimbabwe, Panashe has built applications and solutions for clients across Africa, Europe, Asia, and beyond.",
    "workLocation": {
      "@type": "Place",
      "name": "Remote / Zimbabwe"
    },
    "sameAs": [
      "https://github.com/pkunakachiri2001",
      "https://linkedin.com/in/pkunaka1engineer",
      "https://twitter.com/KunakaTech"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "Machine Learning",
      "Artificial Intelligence",
      "Cloud Computing",
      "Blockchain Technology",
      "Mobile Development",
      "DevOps",
      "Technical Leadership"
    ],
    "affiliation": {
      "@type": "Organization",
      "name": "KUNAKA TECH",
      "url": "https://pkunaka1engineer.me"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Technology & Innovation Institute"
    },
    "expertise": [
      "Full-Stack Web Development",
      "React.js",
      "Node.js",
      "Python",
      "TensorFlow",
      "Azure Cloud",
      "Blockchain Development",
      "Mobile App Development"
    ]
  };

  // CreativeWork Schema for Blog Posts
  const blogPostSchema = (title, author, datePublished) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://pkunaka1engineer.me"
    },
    "datePublished": datePublished,
    "articleBody": "Full article content here",
    "keywords": [
      "web development",
      "AI solutions",
      "software engineering",
      "Zimbabwe",
      "technology"
    ]
  });

  // Service Schema - E-E-A-T signals
  const serviceSchema = (serviceName) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": "Professional Software Development",
    "provider": {
      "@type": "Organization",
      "name": "KUNAKA TECH",
      "url": "https://pkunaka1engineer.me"
    },
    "areaServed": ["ZW", "ZA", "ZM", "IN", "DE", "GB"],
    "offers": {
      "@type": "Offer",
      "url": "https://pkunaka1engineer.me/services.html",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly"
    }
  });

  class EnhancedSEOSchema {
    constructor() {
      this.injectSchemas();
    }

    injectSchemas() {
      // Inject Organization Schema
      this.injectSchema(organizationSchema);

      // Inject Person Schema
      this.injectSchema(personSchema);

      // Inject LocalBusiness for Zimbabwe presence
      this.injectLocalBusinessSchema();

      // Inject Breadcrumb Schema
      this.injectBreadcrumbSchema();
    }

    injectSchema(schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.setAttribute('data-schema', schema['@type']);
      document.head.appendChild(script);
    }

    injectLocalBusinessSchema() {
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "KUNAKA TECH",
        "image": "https://pkunaka1engineer.me/zimflag.png",
        "description": "Professional software development and web hosting services",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Harare",
          "addressLocality": "Harare",
          "addressRegion": "Harare Province",
          "postalCode": "00263",
          "addressCountry": "ZW"
        },
        "telephone": "+263phone",
        "email": "panachiri55@gmail.com",
        "url": "https://pkunaka1engineer.me",
        "priceRange": "$",
        "founder": {
          "@type": "Person",
          "name": "Panashe Kunaka"
        },
        "foundingDate": "2022",
        "areaServed": ["ZW", "ZA", "ZM", "IN", "DE", "GB"],
        "knowsLanguage": ["English"],
        "sameAs": [
          "https://github.com/pkunakachiri2001",
          "https://linkedin.com/in/pkunaka1engineer"
        ]
      };

      this.injectSchema(localBusinessSchema);
    }

    injectBreadcrumbSchema() {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://pkunaka1engineer.me"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://pkunaka1engineer.me/services.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "About",
            "item": "https://pkunaka1engineer.me/about.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Blog",
            "item": "https://pkunaka1engineer.me/blog.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Case Studies",
            "item": "https://pkunaka1engineer.me/case-studies.html"
          }
        ]
      };

      this.injectSchema(breadcrumbSchema);
    }

    // Add E-E-A-T confidence metadata
    addEEATMetadata() {
      const eeatMeta = {
        expertise: 'Software Engineer, AI/ML Specialist, Full-Stack Developer',
        experience: '5+ years professional software development',
        authority: 'Published on multiple platforms, GitHub contributor, LinkedIn professional',
        trustworthiness: 'Real client work, verifiable projects, transparent portfolio'
      };

      Object.entries(eeatMeta).forEach(([key, value]) => {
        const meta = document.createElement('meta');
        meta.name = `eeat:${key}`;
        meta.content = value;
        document.head.appendChild(meta);
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new EnhancedSEOSchema();
    });
  } else {
    new EnhancedSEOSchema();
  }

  console.log('✨ Enhanced E-E-A-T Schema Markup Injected');
  console.log('📊 AI Recognition Signals Active');
})();
