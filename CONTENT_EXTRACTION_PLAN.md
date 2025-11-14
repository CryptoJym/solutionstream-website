# SolutionStream Content Extraction & Organization Plan
**Comprehensive Content Data Structures & Migration Guide**

Generated: October 2025

---

## Table of Contents

1. [Homepage Content Structure](#1-homepage-content-structure)
2. [Image Asset Inventory](#2-image-asset-inventory)
3. [Form Field Specifications](#3-form-field-specifications)
4. [Client Testimonial Data](#4-client-testimonial-data)
5. [Case Study Content Structure](#5-case-study-content-structure)
6. [Blog Article Structure](#6-blog-article-structure)
7. [Technology Stack Data](#7-technology-stack-data)
8. [SEO Metadata](#8-seo-metadata)
9. [Content Organization Strategy](#9-content-organization-strategy)
10. [Folder Structure](#10-folder-structure)
11. [Content Extraction Checklist](#11-content-extraction-checklist)
12. [Maintenance Plan](#12-maintenance-plan)

---

## 1. Homepage Content Structure

### 1.1 JSON Schema

```typescript
// data/pages/homepage.json
{
  "page": "homepage",
  "sections": {
    "hero": {
      "type": "hero",
      "title": "Software Simplified - Supercharged by AI",
      "subtitle": [
        "We make software simple - so you can build faster, smarter, and more resilient solutions. Our AI-enhanced approach accelerates timelines, reduces complexity, and drives results.",
        "Need technical talent? We deliver AI-trained engineers who come with the tools, skills, and mindset to impact from day one."
      ],
      "backgroundImage": "/images/homepage/hero.webp",
      "ctas": [
        {
          "text": "Start a Project",
          "href": "/contact",
          "variant": "primary",
          "style": "white"
        },
        {
          "text": "What we do",
          "href": "/services",
          "variant": "secondary",
          "style": "ghost-white"
        }
      ],
      "waves": true
    },

    "servicesIntro": {
      "type": "text-section",
      "title": "AI-Driven Development and Technical Staffing",
      "description": "Our team goes beyond standard software, providing comprehensive solutions that help your business grow."
    },

    "servicesGrid": {
      "type": "services-grid",
      "services": [
        {
          "id": "software-development",
          "title": "Software Development",
          "description": "Smarter software. Built faster. We use AI-enhanced development to turn ideas into custom solutions that are efficient, scalable, and ready for what's next.",
          "image": "/images/services/development-1686073128.jpg",
          "href": "/services/software-development"
        },
        {
          "id": "technical-staffing",
          "title": "Technical Staffing",
          "description": "Staff confidently with AI-trained engineers. Our elite talent integrates with your team and delivers impact - without the hiring headache.",
          "image": "/images/services/web-dev-arch.jpg",
          "href": "/services/technical-staffing"
        },
        {
          "id": "ai-solutions",
          "title": "AI Solutions",
          "description": "We stay at the forefront of AI to help you navigate change, integrate powerful tools, and build better software. We apply AI to real-world challenges, turning potential into performance.",
          "image": "/images/services/tech.png",
          "href": "/services/ai-solutions"
        }
      ]
    },

    "techStack": {
      "type": "tech-marquee",
      "technologies": {
        "row1": [
          "Node.js",
          "Java",
          ".NET",
          "Python",
          "C#",
          "Rails",
          "Javascript",
          "HTML",
          "Ruby"
        ],
        "row2": [
          "CSS",
          "MongoDB",
          "SQL",
          "CouchDB",
          "SCSS",
          "VueJS",
          "ReactJS",
          "AngularJS",
          "PugJS"
        ]
      },
      "speed": 40000
    },

    "whyUs": {
      "type": "image-content",
      "heading": "Why Us?",
      "title": "Experts by your side",
      "description": "Together, we'll build smarter solutions - powered by AI and tailored to move your business forward, from first idea to final launch.",
      "image": "/images/homepage/experts.webp",
      "tags": [
        {
          "text": "Software Development",
          "href": "/services/software-development"
        },
        {
          "text": "Technical Staffing",
          "href": "/services/technical-staffing"
        },
        {
          "text": "AI Solutions",
          "href": "/services/ai-solutions"
        }
      ],
      "background": "gray"
    },

    "companyStats": {
      "type": "stats-section",
      "title": "Trusted Partner",
      "description": "For nearly three decades, clients have enjoyed software solutions that take their business to the next level.",
      "backgroundImage": "/images/homepage/hero.webp",
      "stats": [
        {
          "value": "28",
          "label": "years proudly serving clients"
        },
        {
          "value": "2,000+",
          "label": "projects delivered"
        },
        {
          "value": "500+",
          "label": "happy clients"
        }
      ],
      "reverse": true,
      "parallax": true
    },

    "clientLogos": {
      "type": "logo-wall",
      "heading": "Some of our Clients",
      "clients": [
        {
          "name": "Adobe",
          "logo": "/images/client-logos/adobe-1685555063.svg"
        },
        {
          "name": "Fidelity",
          "logo": "/images/client-logos/fidelity.svg"
        },
        {
          "name": "Pearson",
          "logo": "/images/client-logos/pearson-logo.svg"
        },
        {
          "name": "Ancestry",
          "logo": "/images/client-logos/ancestry-logo.svg"
        },
        {
          "name": "Overstock",
          "logo": "/images/client-logos/overstock.svg"
        },
        {
          "name": "Young Living",
          "logo": "/images/client-logos/youngliving.svg"
        },
        {
          "name": "Nu Skin",
          "logo": "/images/client-logos/nuskin.svg"
        },
        {
          "name": "Extra Space Storage",
          "logo": "/images/client-logos/extraspacestorage.svg"
        },
        {
          "name": "doTERRA",
          "logo": "/images/client-logos/doterra.svg"
        },
        {
          "name": "WGU",
          "logo": "/images/client-logos/wgu.svg"
        },
        {
          "name": "Qualtrics",
          "logo": "/images/client-logos/qualtrics.svg"
        },
        {
          "name": "Franklin Covey",
          "logo": "/images/client-logos/franklincovey.svg"
        }
      ],
      "cta": {
        "text": "View Case Studies",
        "href": "/work"
      }
    },

    "testimonials": {
      "type": "testimonial-carousel",
      "heading": "Testimonials",
      "testimonials": [
        {
          "id": "young-living",
          "quote": "SolutionStream has been a trusted partner and a key driving force behind our Software Development.",
          "author": "Aaron Raymond",
          "role": "VP of Technology",
          "company": "Young Living",
          "logo": "/images/client-logos/YoungLiving@2x.png"
        },
        {
          "id": "winder-farms",
          "quote": "From the design through to the development detail, they listened, understood, and carefully tested before release, often pushing our initial ideas to a better outcome.",
          "author": "Melanie Robinson",
          "role": "CEO",
          "company": "Winder Farms",
          "logo": "/images/client-logos/winder-farms-@2x.png"
        },
        {
          "id": "real-salt-lake",
          "quote": "SolutionStream has improved our efficiency and productivity, and the digital boards are functional and reliable.",
          "author": "Carlos Acevedo",
          "role": "Director of Stadium",
          "company": "Real Salt Lake",
          "logo": "/images/client-logos/RealSaltLake@2x.png"
        },
        {
          "id": "modere",
          "quote": "They have a history of success on other projects, as well as a deep bench of experts in a variety of technologies.",
          "author": "Henry Wythe",
          "role": "CIO",
          "company": "Modere",
          "logo": "/images/client-logos/modere-logo@2x.svg"
        },
        {
          "id": "nature-sunshine",
          "quote": "They follow through on their commitments. With them, we had a partner who shared our goals.",
          "author": "Nate Langston",
          "role": "Executive Director",
          "company": "Nature Sunshine",
          "logo": "/images/client-logos/nauresSunshine@2x.png"
        },
        {
          "id": "zija",
          "quote": "Overall, SolutionStream significantly improved connectivity within our field. Having a go-to business center for our distributors has been hugely beneficial.",
          "author": "Kyle Casteel",
          "role": "VP of Marketing",
          "company": "Zija",
          "logo": "/images/client-logos/zija@2x.png"
        }
      ]
    },

    "footerCta": {
      "type": "footer-cta",
      "title": "Simplify the way you build software",
      "cta": {
        "text": "Get Started",
        "href": "/contact",
        "style": "white"
      },
      "background": "secondary",
      "reverse": true
    }
  }
}
```

### 1.2 TypeScript Interface

```typescript
// types/homepage.ts
export interface Homepage {
  page: string;
  sections: {
    hero: HeroSection;
    servicesIntro: TextSection;
    servicesGrid: ServicesGridSection;
    techStack: TechMarqueeSection;
    whyUs: ImageContentSection;
    companyStats: StatsSection;
    clientLogos: LogoWallSection;
    testimonials: TestimonialSection;
    footerCta: FooterCtaSection;
  };
}

export interface HeroSection {
  type: 'hero';
  title: string;
  subtitle: string[];
  backgroundImage: string;
  ctas: CTA[];
  waves: boolean;
}

export interface CTA {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  style: string;
}

export interface TextSection {
  type: 'text-section';
  title: string;
  description: string;
}

export interface ServicesGridSection {
  type: 'services-grid';
  services: ServiceCard[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface TechMarqueeSection {
  type: 'tech-marquee';
  technologies: {
    row1: string[];
    row2: string[];
  };
  speed: number;
}

export interface ImageContentSection {
  type: 'image-content';
  heading: string;
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  background: string;
}

export interface Tag {
  text: string;
  href: string;
}

export interface StatsSection {
  type: 'stats-section';
  title: string;
  description: string;
  backgroundImage?: string;
  stats: Stat[];
  reverse: boolean;
  parallax: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface LogoWallSection {
  type: 'logo-wall';
  heading: string;
  clients: Client[];
  cta: CTA;
}

export interface Client {
  name: string;
  logo: string;
}

export interface TestimonialSection {
  type: 'testimonial-carousel';
  heading: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
}

export interface FooterCtaSection {
  type: 'footer-cta';
  title: string;
  cta: CTA;
  background: string;
  reverse: boolean;
}
```

---

## 2. Image Asset Inventory

### 2.1 Required Images by Category

```json
{
  "images": {
    "homepage": {
      "hero": {
        "path": "assets/homepage/hero.webp",
        "requiredSizes": [
          { "width": 1920, "height": 1080, "format": "webp" },
          { "width": 1280, "height": 720, "format": "webp" },
          { "width": 768, "height": 432, "format": "webp" }
        ],
        "fallback": "jpg",
        "priority": "high",
        "altText": "SolutionStream software development team"
      },
      "experts": {
        "path": "assets/homepage/experts.webp",
        "requiredSizes": [
          { "width": 476, "height": 476, "format": "webp" }
        ],
        "altText": "Expert developers collaborating"
      }
    },

    "services": {
      "development": {
        "thumbnail": {
          "path": "assets/services/development-1686073128.jpg",
          "requiredSizes": [
            { "width": 693, "height": 325, "format": "webp" }
          ],
          "altText": "Developer working on website"
        },
        "header": {
          "path": "assets/services/database-programer.jpg",
          "requiredSizes": [
            { "width": 1200, "height": 500, "format": "webp" }
          ],
          "altText": "Database programmer"
        },
        "sections": {
          "discovery": {
            "path": "assets/services/research.jpg",
            "requiredSizes": [
              { "width": 500, "height": 330, "format": "webp" }
            ],
            "altText": "Team working together on website"
          }
        }
      },
      "staffing": {
        "thumbnail": {
          "path": "assets/services/web-dev-arch.jpg",
          "requiredSizes": [
            { "width": 693, "height": 325, "format": "webp" }
          ],
          "altText": "Developer working with code on computer"
        }
      },
      "ai": {
        "thumbnail": {
          "path": "assets/services/tech.png",
          "requiredSizes": [
            { "width": 693, "height": 325, "format": "webp" }
          ],
          "altText": "AI generated computer image"
        }
      }
    },

    "caseStudies": {
      "senegence": {
        "logo": {
          "path": "assets/projects/senegence/senegence_logo.svg",
          "format": "svg",
          "altText": "SeneGence logo"
        },
        "thumbnail": {
          "path": "assets/projects/senegence/senegence-thumb.webp",
          "requiredSizes": [
            { "width": 580, "height": 390, "format": "webp" }
          ],
          "altText": "SeneGence project screenshot"
        }
      },
      "deluxe": {
        "logo": {
          "path": "assets/projects/deluxe/deluxe_technicolor_white.svg",
          "format": "svg",
          "altText": "Deluxe Technicolor logo"
        },
        "thumbnail": {
          "path": "assets/projects/deluxe/deluxe-thumb.webp",
          "requiredSizes": [
            { "width": 580, "height": 390, "format": "webp" }
          ],
          "altText": "Deluxe project screenshot"
        }
      },
      "youngLiving": {
        "logo": {
          "path": "assets/projects/young-living/young-living-logo-white.svg",
          "format": "svg",
          "altText": "Young Living logo"
        },
        "thumbnail": {
          "path": "assets/projects/young-living/youngliving-thumb.webp",
          "requiredSizes": [
            { "width": 580, "height": 390, "format": "webp" }
          ],
          "altText": "Young Living project screenshot"
        }
      },
      "wgu": {
        "logo": {
          "path": "assets/projects/wgu/WGU-logo.svg",
          "format": "svg",
          "altText": "WGU logo"
        },
        "thumbnail": {
          "path": "assets/projects/wgu/wgu-thumbnail.jpg",
          "requiredSizes": [
            { "width": 580, "height": 390, "format": "webp" }
          ],
          "altText": "WGU project screenshot"
        }
      },
      "modere": {
        "logo": {
          "path": "assets/projects/modere/modere-logo.svg",
          "format": "svg"
        },
        "thumbnail": {
          "path": "assets/projects/modere/modere-thumb.webp",
          "requiredSizes": [
            { "width": 580, "height": 390, "format": "webp" }
          ]
        }
      },
      "extraSpace": {
        "logo": {
          "path": "assets/projects/extra-space/extra-space-logo.svg",
          "format": "svg"
        },
        "thumbnail": {
          "path": "assets/projects/extra-space/extra-space-thumb.webp",
          "requiredSizes": [
            { "width": 580, "height": 390, "format": "webp" }
          ]
        }
      },
      "byuIdaho": {
        "logo": {
          "path": "assets/projects/byu-idaho/byu-idaho-logo.svg",
          "format": "svg"
        },
        "thumbnail": {
          "path": "assets/projects/byu-idaho/byu-idaho-thumb.webp",
          "requiredSizes": [
            { "width": 580, "height": 390, "format": "webp" }
          ]
        }
      }
    },

    "clientLogos": {
      "format": "svg",
      "fallbackFormat": "png",
      "logos": [
        {
          "name": "Adobe",
          "path": "assets/client-logos/adobe-1685555063.svg",
          "dimensions": { "width": 150, "height": 50 }
        },
        {
          "name": "Fidelity",
          "path": "assets/client-logos/fidelity.svg"
        },
        {
          "name": "Pearson",
          "path": "assets/client-logos/pearson-logo.svg"
        },
        {
          "name": "Ancestry",
          "path": "assets/client-logos/ancestry-logo.svg"
        },
        {
          "name": "Overstock",
          "path": "assets/client-logos/overstock.svg"
        },
        {
          "name": "Young Living",
          "path": "assets/client-logos/youngliving.svg"
        },
        {
          "name": "Nu Skin",
          "path": "assets/client-logos/nuskin.svg"
        },
        {
          "name": "Extra Space Storage",
          "path": "assets/client-logos/extraspacestorage.svg"
        },
        {
          "name": "doTERRA",
          "path": "assets/client-logos/doterra.svg"
        },
        {
          "name": "WGU",
          "path": "assets/client-logos/wgu.svg"
        },
        {
          "name": "Qualtrics",
          "path": "assets/client-logos/qualtrics.svg"
        },
        {
          "name": "Franklin Covey",
          "path": "assets/client-logos/franklincovey.svg"
        }
      ]
    },

    "testimonialLogos": {
      "format": "png",
      "retina": true,
      "logos": [
        {
          "company": "Young Living",
          "path": "assets/client-logos/YoungLiving@2x.png"
        },
        {
          "company": "Winder Farms",
          "path": "assets/client-logos/winder-farms-@2x.png"
        },
        {
          "company": "Real Salt Lake",
          "path": "assets/client-logos/RealSaltLake@2x.png"
        },
        {
          "company": "Modere",
          "path": "assets/client-logos/modere-logo@2x.svg"
        },
        {
          "company": "Nature Sunshine",
          "path": "assets/client-logos/nauresSunshine@2x.png"
        },
        {
          "company": "Zija",
          "path": "assets/client-logos/zija@2x.png"
        }
      ]
    },

    "blog": {
      "headerBackground": {
        "path": "assets/blog/dot-blue-wave-light-screen-gradient-texture-background_1045959-21388.avif",
        "format": "avif",
        "fallback": "webp"
      },
      "articleThumbnails": {
        "defaultSize": { "width": 400, "height": 300, "format": "webp" },
        "note": "Individual article images to be catalogued per article"
      }
    },

    "branding": {
      "logo": {
        "horizontal": {
          "dark": "assets/logos/solutionstream-logo-horz.svg",
          "light": "assets/logos/solutionstream-logo-white-horz.svg"
        },
        "format": "svg"
      },
      "favicon": {
        "ico": "assets/theme/app-icons/favicon.ico",
        "appleTouchIcon": "assets/theme/app-icons/apple-touch-icon.png"
      },
      "ogImage": {
        "path": "assets/theme/app-icons/og-card.jpg",
        "size": { "width": 1146, "height": 600 }
      }
    }
  }
}
```

### 2.2 Image Optimization Requirements

```typescript
// config/images.ts
export const imageConfig = {
  formats: {
    primary: 'webp',
    fallback: 'jpg',
    svg: 'svg' // for logos and icons
  },

  quality: {
    high: 90,      // Hero images, above-fold
    standard: 80,  // General content
    thumbnail: 75  // Small images, cards
  },

  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1280,
    ultraWide: 1920
  },

  categories: {
    hero: {
      sizes: [
        { width: 1920, quality: 90 },
        { width: 1280, quality: 85 },
        { width: 768, quality: 80 }
      ],
      priority: true
    },
    section: {
      sizes: [
        { width: 1200, quality: 85 },
        { width: 800, quality: 80 }
      ],
      priority: false
    },
    card: {
      sizes: [
        { width: 600, quality: 80 },
        { width: 400, quality: 75 }
      ],
      priority: false
    },
    thumbnail: {
      sizes: [
        { width: 400, quality: 75 }
      ],
      priority: false
    },
    logo: {
      format: 'svg',
      fallback: 'png'
    }
  }
};
```

---

## 3. Form Field Specifications

### 3.1 Contact Form

```json
{
  "contactForm": {
    "id": "contact-form",
    "method": "POST",
    "action": "/api/contact",
    "recaptcha": {
      "version": "v3",
      "siteKey": "RECAPTCHA_SITE_KEY",
      "action": "contact"
    },
    "fields": [
      {
        "name": "full_name",
        "type": "text",
        "label": "Full Name",
        "required": true,
        "validation": {
          "minLength": 2,
          "maxLength": 100,
          "pattern": "^[a-zA-Z\\s'-]+$",
          "errorMessage": "Please enter your full name"
        },
        "placeholder": "",
        "autocomplete": "name"
      },
      {
        "name": "email",
        "type": "email",
        "label": "Email",
        "required": true,
        "validation": {
          "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          "errorMessage": "Please enter a valid email address"
        },
        "placeholder": "",
        "autocomplete": "email"
      },
      {
        "name": "phone",
        "type": "tel",
        "label": "Phone",
        "required": false,
        "validation": {
          "pattern": "^[\\d\\s\\-\\(\\)\\+]+$",
          "minLength": 10,
          "errorMessage": "Please enter a valid phone number"
        },
        "placeholder": "",
        "autocomplete": "tel"
      },
      {
        "name": "company",
        "type": "text",
        "label": "Company",
        "required": false,
        "validation": {
          "maxLength": 100
        },
        "placeholder": "",
        "autocomplete": "organization"
      },
      {
        "name": "message",
        "type": "textarea",
        "label": "How can we help?",
        "required": true,
        "validation": {
          "minLength": 10,
          "maxLength": 1000,
          "errorMessage": "Please provide more details (at least 10 characters)"
        },
        "placeholder": "Tell us about your project...",
        "rows": 5
      },
      {
        "name": "referral_source",
        "type": "select",
        "label": "How did you hear about us?",
        "required": false,
        "options": [
          { "value": "", "label": "Select one..." },
          { "value": "search", "label": "Search Engine" },
          { "value": "social", "label": "Social Media" },
          { "value": "referral", "label": "Referral" },
          { "value": "blog", "label": "Blog/Article" },
          { "value": "event", "label": "Event/Conference" },
          { "value": "other", "label": "Other" }
        ]
      }
    ],
    "submitButton": {
      "text": "Send Message",
      "loadingText": "Sending..."
    },
    "successMessage": "Thank you for your message! We'll get back to you soon.",
    "errorMessage": "Sorry, there was an error sending your message. Please try again.",
    "redirectOnSuccess": "/contact#thank-you"
  }
}
```

### 3.2 SolutionMap Request Form

```json
{
  "solutionMapForm": {
    "id": "solutionmap-request-form",
    "method": "POST",
    "action": "/api/solutionmap",
    "recaptcha": {
      "version": "v3",
      "siteKey": "RECAPTCHA_SITE_KEY",
      "action": "solutionmap"
    },
    "fields": [
      {
        "name": "full_name",
        "type": "text",
        "label": "Full Name",
        "required": true,
        "validation": {
          "minLength": 2,
          "maxLength": 100,
          "errorMessage": "Please enter your full name"
        },
        "autocomplete": "name"
      },
      {
        "name": "email",
        "type": "email",
        "label": "Email",
        "required": true,
        "validation": {
          "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          "errorMessage": "Please enter a valid email address"
        },
        "autocomplete": "email"
      },
      {
        "name": "phone",
        "type": "tel",
        "label": "Phone",
        "required": true,
        "validation": {
          "pattern": "^[\\d\\s\\-\\(\\)\\+]+$",
          "minLength": 10,
          "errorMessage": "Please enter a valid phone number"
        },
        "autocomplete": "tel"
      },
      {
        "name": "company",
        "type": "text",
        "label": "Company",
        "required": true,
        "validation": {
          "minLength": 2,
          "maxLength": 100,
          "errorMessage": "Please enter your company name"
        },
        "autocomplete": "organization"
      },
      {
        "name": "company_size",
        "type": "select",
        "label": "Company Size",
        "required": false,
        "options": [
          { "value": "", "label": "Select..." },
          { "value": "1-10", "label": "1-10 employees" },
          { "value": "11-50", "label": "11-50 employees" },
          { "value": "51-200", "label": "51-200 employees" },
          { "value": "201-500", "label": "201-500 employees" },
          { "value": "501+", "label": "500+ employees" }
        ]
      },
      {
        "name": "project_type",
        "type": "select",
        "label": "Project Type",
        "required": false,
        "options": [
          { "value": "", "label": "Select..." },
          { "value": "new-product", "label": "New Product Development" },
          { "value": "enhancement", "label": "Existing Product Enhancement" },
          { "value": "modernization", "label": "Legacy System Modernization" },
          { "value": "integration", "label": "System Integration" },
          { "value": "ai-ml", "label": "AI/ML Implementation" },
          { "value": "not-sure", "label": "Not Sure Yet" }
        ]
      },
      {
        "name": "timeline",
        "type": "select",
        "label": "Desired Timeline",
        "required": false,
        "options": [
          { "value": "", "label": "Select..." },
          { "value": "asap", "label": "ASAP" },
          { "value": "1-3-months", "label": "1-3 months" },
          { "value": "3-6-months", "label": "3-6 months" },
          { "value": "6-12-months", "label": "6-12 months" },
          { "value": "12+-months", "label": "12+ months" },
          { "value": "flexible", "label": "Flexible" }
        ]
      },
      {
        "name": "budget_range",
        "type": "select",
        "label": "Budget Range",
        "required": false,
        "options": [
          { "value": "", "label": "Select..." },
          { "value": "under-50k", "label": "Under $50,000" },
          { "value": "50k-100k", "label": "$50,000 - $100,000" },
          { "value": "100k-250k", "label": "$100,000 - $250,000" },
          { "value": "250k-500k", "label": "$250,000 - $500,000" },
          { "value": "500k+", "label": "$500,000+" },
          { "value": "not-determined", "label": "Not yet determined" }
        ]
      },
      {
        "name": "project_description",
        "type": "textarea",
        "label": "Tell us about your project",
        "required": true,
        "validation": {
          "minLength": 20,
          "maxLength": 2000,
          "errorMessage": "Please provide more details about your project (at least 20 characters)"
        },
        "placeholder": "What are you trying to accomplish? What challenges are you facing?",
        "rows": 6
      },
      {
        "name": "goals",
        "type": "textarea",
        "label": "What are your key goals?",
        "required": false,
        "validation": {
          "maxLength": 1000
        },
        "placeholder": "What would success look like for this project?",
        "rows": 4
      },
      {
        "name": "preferred_contact_method",
        "type": "radio",
        "label": "Preferred Contact Method",
        "required": false,
        "options": [
          { "value": "email", "label": "Email" },
          { "value": "phone", "label": "Phone" },
          { "value": "either", "label": "Either" }
        ],
        "defaultValue": "either"
      }
    ],
    "submitButton": {
      "text": "Request SolutionMap Session",
      "loadingText": "Submitting..."
    },
    "successMessage": "Thank you for your interest! We'll review your request and contact you within 24 hours to discuss your SolutionMap session.",
    "errorMessage": "Sorry, there was an error submitting your request. Please try again or contact us directly.",
    "redirectOnSuccess": "/solutionmap#thank-you"
  }
}
```

### 3.3 Form Validation Schema (Zod)

```typescript
// lib/validations/forms.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  full_name: z.string()
    .min(2, 'Please enter your full name')
    .max(100, 'Name is too long'),

  email: z.string()
    .email('Please enter a valid email address'),

  phone: z.string()
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number is too short')
    .optional()
    .or(z.literal('')),

  company: z.string()
    .max(100, 'Company name is too long')
    .optional()
    .or(z.literal('')),

  message: z.string()
    .min(10, 'Please provide more details (at least 10 characters)')
    .max(1000, 'Message is too long'),

  referral_source: z.string().optional(),
});

export const solutionMapFormSchema = z.object({
  full_name: z.string()
    .min(2, 'Please enter your full name')
    .max(100, 'Name is too long'),

  email: z.string()
    .email('Please enter a valid email address'),

  phone: z.string()
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number is too short'),

  company: z.string()
    .min(2, 'Please enter your company name')
    .max(100, 'Company name is too long'),

  company_size: z.string().optional(),

  project_type: z.string().optional(),

  timeline: z.string().optional(),

  budget_range: z.string().optional(),

  project_description: z.string()
    .min(20, 'Please provide more details about your project (at least 20 characters)')
    .max(2000, 'Description is too long'),

  goals: z.string()
    .max(1000, 'Goals description is too long')
    .optional()
    .or(z.literal('')),

  preferred_contact_method: z.enum(['email', 'phone', 'either'])
    .optional()
    .default('either'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type SolutionMapFormData = z.infer<typeof solutionMapFormSchema>;
```

---

## 4. Client Testimonial Data

### 4.1 Complete Testimonials JSON

```json
{
  "testimonials": [
    {
      "id": "young-living",
      "company": "Young Living",
      "companyLogo": "/images/client-logos/YoungLiving@2x.png",
      "quote": "SolutionStream has been a trusted partner and a key driving force behind our Software Development.",
      "author": {
        "name": "Aaron Raymond",
        "title": "VP of Technology",
        "company": "Young Living"
      },
      "featured": true,
      "caseStudy": "/work/young-living",
      "category": "software-development",
      "sortOrder": 1
    },
    {
      "id": "winder-farms",
      "company": "Winder Farms",
      "companyLogo": "/images/client-logos/winder-farms-@2x.png",
      "quote": "From the design through to the development detail, they listened, understood, and carefully tested before release, often pushing our initial ideas to a better outcome.",
      "author": {
        "name": "Melanie Robinson",
        "title": "CEO",
        "company": "Winder Farms"
      },
      "featured": true,
      "category": "software-development",
      "sortOrder": 2
    },
    {
      "id": "real-salt-lake",
      "company": "Real Salt Lake",
      "companyLogo": "/images/client-logos/RealSaltLake@2x.png",
      "quote": "SolutionStream has improved our efficiency and productivity, and the digital boards are functional and reliable.",
      "author": {
        "name": "Carlos Acevedo",
        "title": "Director of Stadium",
        "company": "Real Salt Lake"
      },
      "featured": true,
      "category": "custom-solutions",
      "sortOrder": 3
    },
    {
      "id": "modere",
      "company": "Modere",
      "companyLogo": "/images/client-logos/modere-logo@2x.svg",
      "quote": "They have a history of success on other projects, as well as a deep bench of experts in a variety of technologies.",
      "author": {
        "name": "Henry Wythe",
        "title": "CIO",
        "company": "Modere"
      },
      "featured": true,
      "caseStudy": "/work/modere",
      "category": "technical-staffing",
      "sortOrder": 4
    },
    {
      "id": "nature-sunshine",
      "company": "Nature Sunshine",
      "companyLogo": "/images/client-logos/nauresSunshine@2x.png",
      "quote": "They follow through on their commitments. With them, we had a partner who shared our goals.",
      "author": {
        "name": "Nate Langston",
        "title": "Executive Director",
        "company": "Nature Sunshine"
      },
      "featured": true,
      "category": "software-development",
      "sortOrder": 5
    },
    {
      "id": "zija",
      "company": "Zija",
      "companyLogo": "/images/client-logos/zija@2x.png",
      "quote": "Overall, SolutionStream significantly improved connectivity within our field. Having a go-to business center for our distributors has been hugely beneficial.",
      "author": {
        "name": "Kyle Casteel",
        "title": "VP of Marketing",
        "company": "Zija"
      },
      "featured": true,
      "category": "software-development",
      "sortOrder": 6
    }
  ]
}
```

### 4.2 TypeScript Interface

```typescript
// types/testimonial.ts
export interface Testimonial {
  id: string;
  company: string;
  companyLogo: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
  };
  featured: boolean;
  caseStudy?: string;
  category: 'software-development' | 'technical-staffing' | 'custom-solutions' | 'ai-solutions';
  sortOrder: number;
}
```

---

## 5. Case Study Content Structure

### 5.1 Case Study JSON Schema

```typescript
// types/caseStudy.ts
export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  logo: string;
  thumbnail: string;
  featured: boolean;
  sortOrder: number;

  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };

  hero: {
    title: string;
    subtitle?: string;
    backgroundImage: string;
  };

  overview: {
    challenge: string;
    solution: string;
    results: string[];
  };

  stats?: Array<{
    value: string;
    label: string;
  }>;

  sections: CaseStudySection[];

  technologies: string[];

  services: string[];

  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  gallery?: Array<{
    image: string;
    caption?: string;
    alt: string;
  }>;

  nextCaseStudy?: {
    title: string;
    slug: string;
    thumbnail: string;
  };
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  layout: 'left' | 'right' | 'full';
}
```

### 5.2 Example: Young Living Case Study

```json
{
  "id": "young-living",
  "slug": "young-living",
  "client": "Young Living",
  "logo": "/images/projects/young-living/young-living-logo-white.svg",
  "thumbnail": "/images/projects/young-living/youngliving-thumb.webp",
  "featured": true,
  "sortOrder": 1,

  "metadata": {
    "title": "Young Living Case Study | SolutionStream",
    "description": "How SolutionStream modernized Young Living's legacy system to handle rapid growth and improve distributor experience.",
    "keywords": ["e-commerce", "legacy modernization", "multi-level marketing", "distributor portal"]
  },

  "hero": {
    "title": "Young Living",
    "subtitle": "Modernizing a Legacy System for Exponential Growth",
    "backgroundImage": "/images/projects/young-living/hero.webp"
  },

  "overview": {
    "challenge": "They were growing rapidly, but their decades-old system for product and sales management had become outdated, unable keep up with demand. While functional, their tools were designed without the user's needs in mind, requiring several different logins and interfaces to accomplish even simple tasks. In other words, a clunky system was stifling their progress.",
    "solution": "SolutionStream redesigned Young Living's distributor portal from the ground up, consolidating multiple systems into one unified platform. We focused on user experience, creating intuitive workflows that reduced friction and improved efficiency.",
    "results": [
      "Unified portal replacing 5 separate systems",
      "50% reduction in distributor support tickets",
      "Improved order processing speed by 3x",
      "Mobile-responsive design increased mobile usage by 200%"
    ]
  },

  "stats": [
    {
      "value": "3x",
      "label": "Faster Order Processing"
    },
    {
      "value": "50%",
      "label": "Fewer Support Tickets"
    },
    {
      "value": "200%",
      "label": "Increase in Mobile Usage"
    }
  ],

  "sections": [
    {
      "id": "problem",
      "title": "The Challenge",
      "content": "Young Living Essential Oils had grown from a small startup to a multi-billion dollar enterprise, but their technology hadn't kept pace. Distributors had to juggle multiple logins, navigate confusing interfaces, and deal with slow load times. The system was built piece by piece over decades, resulting in a fragmented, frustrating user experience that was hindering business growth.",
      "layout": "left"
    },
    {
      "id": "discovery",
      "title": "Discovery & Planning",
      "content": "We started with a comprehensive SolutionMap workshop, bringing together stakeholders from across Young Living's organization. Through user interviews with distributors, we identified the top pain points and opportunities for improvement. Our analysis revealed that the most critical need was consolidation—bringing all tools into a single, cohesive platform.",
      "image": "/images/projects/young-living/discovery.webp",
      "imageAlt": "Team working on discovery workshop",
      "layout": "right"
    },
    {
      "id": "solution",
      "title": "The Solution",
      "content": "We built a modern, responsive web application that unified all distributor functions under one roof. The new platform featured:\n\n- Single sign-on access to all tools\n- Intuitive dashboard with key metrics at a glance\n- Streamlined ordering process with smart recommendations\n- Real-time inventory and commission tracking\n- Mobile-first design for on-the-go access\n- Integrated training resources and support",
      "image": "/images/projects/young-living/solution.webp",
      "imageAlt": "Young Living distributor portal interface",
      "layout": "left"
    },
    {
      "id": "technology",
      "title": "Technology Stack",
      "content": "We chose modern, scalable technologies to ensure the platform could grow with Young Living's business:\n\n- React for a fast, responsive front-end\n- Node.js backend for real-time data processing\n- PostgreSQL for reliable data storage\n- AWS infrastructure for global scalability\n- Redis caching for improved performance",
      "layout": "right"
    },
    {
      "id": "results",
      "title": "Impact & Results",
      "content": "The new platform transformed Young Living's distributor experience. Support tickets dropped by 50% as the intuitive interface eliminated confusion. Order processing speed tripled, allowing distributors to serve customers faster. Mobile usage increased by 200% as distributors could now manage their business from anywhere. Most importantly, distributor satisfaction scores increased dramatically, fueling continued business growth.",
      "image": "/images/projects/young-living/results.webp",
      "imageAlt": "Dashboard showing improved metrics",
      "layout": "left"
    }
  ],

  "technologies": [
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Redis"
  ],

  "services": [
    "Software Development",
    "UI/UX Design",
    "System Architecture",
    "Cloud Infrastructure"
  ],

  "testimonial": {
    "quote": "SolutionStream has been a trusted partner and a key driving force behind our Software Development.",
    "author": "Aaron Raymond",
    "role": "VP of Technology, Young Living"
  },

  "gallery": [
    {
      "image": "/images/projects/young-living/gallery-1.webp",
      "caption": "Modern distributor dashboard",
      "alt": "Young Living distributor dashboard interface"
    },
    {
      "image": "/images/projects/young-living/gallery-2.webp",
      "caption": "Mobile-responsive design",
      "alt": "Young Living mobile app screens"
    },
    {
      "image": "/images/projects/young-living/gallery-3.webp",
      "caption": "Streamlined order flow",
      "alt": "Order placement interface"
    }
  ],

  "nextCaseStudy": {
    "title": "SeneGence",
    "slug": "senegence",
    "thumbnail": "/images/projects/senegence/senegence-thumb.webp"
  }
}
```

### 5.3 All Case Studies List

```json
{
  "caseStudies": [
    {
      "id": "young-living",
      "slug": "young-living",
      "client": "Young Living",
      "logo": "/images/projects/young-living/young-living-logo-white.svg",
      "thumbnail": "/images/projects/young-living/youngliving-thumb.webp",
      "preview": "They were growing rapidly, but their decades-old system for product and sales management had become outdated, unable keep up with demand. While functional, their tools were designed without the user's needs in mind, requiring several different logins and interfaces to accomplish even simple tasks. In other words, a clunky system was stifling their progress.",
      "featured": true,
      "sortOrder": 1
    },
    {
      "id": "senegence",
      "slug": "senegence",
      "client": "SeneGence",
      "logo": "/images/projects/senegence/senegence_logo.svg",
      "thumbnail": "/images/projects/senegence/senegence-thumb.webp",
      "preview": "Facing this growth explosion, SeneGence came to SolutionStream looking for help. Their site was slow and made it difficult for distributors to manage their business and sell SeneGence products. On top of this, SeneGence was expanding into new markets, and they needed something that could satisfy users across the globe.",
      "featured": true,
      "sortOrder": 2
    },
    {
      "id": "deluxe-technicolor",
      "slug": "deluxe-technicolor",
      "client": "Deluxe Technicolor",
      "logo": "/images/projects/deluxe/deluxe_technicolor_white.svg",
      "thumbnail": "/images/projects/deluxe/deluxe-thumb.webp",
      "preview": "While Deluxe Technicolor had the budget, they lacked the resources and time to design a solution. And to make matters worse, they were coming off a recent company merger, meaning stakeholders from both sides had conflicting goals for the future.",
      "featured": true,
      "sortOrder": 3
    },
    {
      "id": "wgu",
      "slug": "wgu",
      "client": "WGU",
      "logo": "/images/projects/wgu/WGU-logo.svg",
      "thumbnail": "/images/projects/wgu/wgu-thumbnail.jpg",
      "preview": "Western Governors University needed a scalable solution for their rapidly growing student base.",
      "featured": true,
      "sortOrder": 4
    },
    {
      "id": "modere",
      "slug": "modere",
      "client": "Modere",
      "logo": "/images/projects/modere/modere-logo.svg",
      "thumbnail": "/images/projects/modere/modere-thumb.webp",
      "preview": "Modere required a complete platform overhaul to support their direct sales model.",
      "featured": true,
      "sortOrder": 5
    },
    {
      "id": "extra-space-storage",
      "slug": "extra-space-storage",
      "client": "Extra Space Storage",
      "logo": "/images/projects/extra-space/extra-space-logo.svg",
      "thumbnail": "/images/projects/extra-space/extra-space-thumb.webp",
      "preview": "Extra Space Storage needed modern tools for their facility management system.",
      "featured": true,
      "sortOrder": 6
    },
    {
      "id": "byu-idaho",
      "slug": "byu-idaho",
      "client": "BYU-Idaho",
      "logo": "/images/projects/byu-idaho/byu-idaho-logo.svg",
      "thumbnail": "/images/projects/byu-idaho/byu-idaho-thumb.webp",
      "preview": "BYU-Idaho required custom educational technology solutions.",
      "featured": true,
      "sortOrder": 7
    }
  ]
}
```

---

## 6. Blog Article Structure

### 6.1 Blog Article Schema

```typescript
// types/blog.ts
export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown

  metadata: {
    description: string;
    keywords: string[];
    ogImage: string;
  };

  author: {
    name: string;
    title: string;
    avatar?: string;
    bio?: string;
  };

  publishedDate: string; // ISO 8601
  updatedDate?: string;

  thumbnail: string;
  thumbnailAlt: string;

  category: string;
  tags: string[];

  readTime: number; // minutes

  featured: boolean;

  relatedArticles?: string[]; // Array of article IDs
}

export interface BlogIndex {
  articles: BlogArticle[];
  pagination: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    totalArticles: number;
  };
  categories: string[];
  tags: string[];
}
```

### 6.2 Example Blog Article

```json
{
  "id": "engineers-upgraded-ai-intelligent",
  "slug": "engineers-upgraded-how-solutionstream-turns-great-devs-into-ai-intelligent-engineers",
  "title": "Engineers, Upgraded: How SolutionStream Turns Great Devs into AI-Intelligent Engineers",
  "excerpt": "AI Mastery Is the Differentiator. Plenty of staffing vendors promise 'AI-savvy' developers. But give those devs a real-world challenge—say, integrating AI into a live product...",

  "metadata": {
    "description": "@seo:AI Mastery Is the Differentiator Plenty of staffing vendors promise 'AI-savvy' developers. But give those devs a real-world challenge—say, integrating AI into a live product...",
    "keywords": ["AI development", "technical staffing", "AI engineers", "machine learning", "software development"],
    "ogImage": "/images/blog/ai-engineers-og.avif"
  },

  "author": {
    "name": "SolutionStream Team",
    "title": "Engineering Leadership",
    "bio": "Industry experts in AI-driven development and technical staffing"
  },

  "publishedDate": "2024-12-15T00:00:00Z",

  "thumbnail": "/images/blog/ai-engineers-thumb.webp",
  "thumbnailAlt": "AI-enhanced software development",

  "category": "AI & Development",
  "tags": ["AI", "Machine Learning", "Technical Staffing", "Engineering"],

  "readTime": 5,

  "featured": true,

  "content": "<!-- Full article HTML or Markdown content -->"
}
```

### 6.3 Blog Categories & Tags

```json
{
  "blogTaxonomy": {
    "categories": [
      {
        "id": "ai-development",
        "name": "AI & Development",
        "slug": "ai-development",
        "description": "Articles about AI, machine learning, and modern development practices"
      },
      {
        "id": "software-engineering",
        "name": "Software Engineering",
        "slug": "software-engineering",
        "description": "Best practices, methodologies, and insights from the field"
      },
      {
        "id": "technical-staffing",
        "name": "Technical Staffing",
        "slug": "technical-staffing",
        "description": "Hiring, team building, and talent management"
      },
      {
        "id": "industry-insights",
        "name": "Industry Insights",
        "slug": "industry-insights",
        "description": "Trends, analysis, and thought leadership"
      },
      {
        "id": "project-management",
        "name": "Project Management",
        "slug": "project-management",
        "description": "Agile, processes, and delivery best practices"
      }
    ],

    "tags": [
      "AI",
      "Machine Learning",
      "React",
      "Node.js",
      "Agile",
      "UX Design",
      "Cloud",
      "DevOps",
      "Testing",
      "Security",
      "Performance",
      "Mobile",
      "Web Development",
      "API Design",
      "Microservices"
    ]
  }
}
```

### 6.4 Blog Article List (34 articles)

```json
{
  "blogArticles": [
    {
      "slug": "engineers-upgraded-how-solutionstream-turns-great-devs-into-ai-intelligent-engineers",
      "title": "Engineers, Upgraded: How SolutionStream Turns Great Devs into AI-Intelligent Engineers",
      "category": "AI & Development",
      "featured": true
    },
    {
      "slug": "why-companies-choose-outside-vendors-for-hiring-technical-experts",
      "title": "Why Companies Choose Outside Vendors for Hiring Technical Experts",
      "category": "Technical Staffing"
    },
    {
      "slug": "how-ai-affects-custom-software-development",
      "title": "How AI Affects Custom Software Development",
      "category": "AI & Development"
    },
    {
      "slug": "the-pros-and-cons-of-hiring-contractors-vs-full-time-employees-for-software-development",
      "title": "The Pros and Cons of Hiring Contractors vs Full-Time Employees for Software Development",
      "category": "Technical Staffing"
    },
    {
      "slug": "every-company-a-technology-company",
      "title": "Every Company a Technology Company",
      "category": "Industry Insights"
    },
    {
      "slug": "how-to-effectively-lead-and-manage-remote-teams",
      "title": "How to Effectively Lead and Manage Remote Teams",
      "category": "Project Management"
    },
    {
      "slug": "the-worldwide-pathway-to-success",
      "title": "The Worldwide Pathway to Success",
      "category": "Industry Insights"
    },
    {
      "slug": "toughest-challenges-attributed-to-enterprise-software-and-how-to-beat-them",
      "title": "Toughest Challenges Attributed to Enterprise Software and How to Beat Them",
      "category": "Software Engineering"
    },
    {
      "slug": "what-is-react",
      "title": "What is React?",
      "category": "Software Engineering"
    },
    {
      "slug": "ux-is-a-team-sport",
      "title": "UX Is a Team Sport",
      "category": "Software Engineering"
    },
    {
      "slug": "is-mobile-first-hype-in-2019",
      "title": "Is Mobile First Hype in 2019?",
      "category": "Software Engineering"
    },
    {
      "slug": "what-makes-reinforcement-learning-so-exciting-rl-series-part-1",
      "title": "What Makes Reinforcement Learning So Exciting (RL Series Part 1)",
      "category": "AI & Development"
    },
    {
      "slug": "agile-development-principles-practice-progress",
      "title": "Agile Development: Principles, Practice, Progress",
      "category": "Project Management"
    },
    {
      "slug": "artificial-intelligence-and-machine-learning",
      "title": "Artificial Intelligence and Machine Learning",
      "category": "AI & Development"
    },
    {
      "slug": "benefits-of-custom-built-software",
      "title": "Benefits of Custom-Built Software",
      "category": "Software Engineering"
    },
    {
      "slug": "creating-a-better-product-strategy",
      "title": "Creating a Better Product Strategy",
      "category": "Project Management"
    },
    {
      "slug": "5-benefits-of-using-a-product-design-sprint-in-your-enterprise-business",
      "title": "5 Benefits of Using a Product Design Sprint in Your Enterprise Business",
      "category": "Project Management"
    },
    {
      "slug": "3-things-we-learned-from-front-conference",
      "title": "3 Things We Learned from Front Conference",
      "category": "Industry Insights"
    },
    {
      "slug": "5-tips-for-getting-the-most-out-of-silicon-slopes-tech-summit-2019-2",
      "title": "5 Tips for Getting the Most Out of Silicon Slopes Tech Summit 2019",
      "category": "Industry Insights"
    },
    {
      "slug": "how-do-you-measure-project-success",
      "title": "How Do You Measure Project Success?",
      "category": "Project Management"
    }
  ],
  "note": "Total of 34 blog articles - remaining 14 articles to be catalogued with full metadata"
}
```

---

## 7. Technology Stack Data

### 7.1 Technologies JSON

```json
{
  "technologies": {
    "languages": [
      {
        "name": "JavaScript",
        "logo": null,
        "category": "language",
        "displayOrder": 7
      },
      {
        "name": "Python",
        "logo": null,
        "category": "language",
        "displayOrder": 4
      },
      {
        "name": "Java",
        "logo": null,
        "category": "language",
        "displayOrder": 2
      },
      {
        "name": "C#",
        "logo": null,
        "category": "language",
        "displayOrder": 5
      },
      {
        "name": "Ruby",
        "logo": null,
        "category": "language",
        "displayOrder": 11
      }
    ],

    "frameworks": [
      {
        "name": "Node.js",
        "logo": null,
        "category": "framework",
        "displayOrder": 1
      },
      {
        "name": ".NET",
        "logo": null,
        "category": "framework",
        "displayOrder": 3
      },
      {
        "name": "Rails",
        "logo": null,
        "category": "framework",
        "displayOrder": 6
      },
      {
        "name": "ReactJS",
        "logo": null,
        "category": "framework",
        "displayOrder": 16
      },
      {
        "name": "VueJS",
        "logo": null,
        "category": "framework",
        "displayOrder": 15
      },
      {
        "name": "AngularJS",
        "logo": null,
        "category": "framework",
        "displayOrder": 17
      }
    ],

    "frontend": [
      {
        "name": "HTML",
        "logo": null,
        "category": "frontend",
        "displayOrder": 8
      },
      {
        "name": "CSS",
        "logo": null,
        "category": "frontend",
        "displayOrder": 14
      },
      {
        "name": "SCSS",
        "logo": null,
        "category": "frontend",
        "displayOrder": 19
      },
      {
        "name": "PugJS",
        "logo": null,
        "category": "frontend",
        "displayOrder": 18
      }
    ],

    "databases": [
      {
        "name": "MongoDB",
        "logo": null,
        "category": "database",
        "displayOrder": 15
      },
      {
        "name": "SQL",
        "logo": null,
        "category": "database",
        "displayOrder": 16
      },
      {
        "name": "CouchDB",
        "logo": null,
        "category": "database",
        "displayOrder": 17
      }
    ],

    "marqueeDisplay": {
      "row1": ["Node.js", "Java", ".NET", "Python", "C#", "Rails", "Javascript", "HTML", "Ruby"],
      "row2": ["CSS", "MongoDB", "SQL", "CouchDB", "SCSS", "VueJS", "ReactJS", "AngularJS", "PugJS"],
      "speed": 40000,
      "direction": {
        "row1": "left",
        "row2": "right"
      }
    }
  }
}
```

### 7.2 TypeScript Interface

```typescript
// types/technology.ts
export interface Technology {
  name: string;
  logo: string | null;
  category: 'language' | 'framework' | 'frontend' | 'database' | 'cloud' | 'tool';
  displayOrder: number;
}

export interface TechMarquee {
  row1: string[];
  row2: string[];
  speed: number;
  direction: {
    row1: 'left' | 'right';
    row2: 'left' | 'right';
  };
}
```

---

## 8. SEO Metadata

### 8.1 Site-Wide Metadata

```json
{
  "siteMeta": {
    "siteName": "SolutionStream",
    "defaultTitle": "Custom Software Development | SolutionStream",
    "titleTemplate": "%s | SolutionStream",
    "defaultDescription": "We started SolutionStream with a simple idea—to develop amazing software on time and on budget—and to finish each engagement with a happy, referable customer.",
    "siteUrl": "https://solutionstream.com",
    "defaultOgImage": "/images/og-card.jpg",
    "twitterHandle": "@solutionstream",
    "twitterCardType": "summary_large_image",
    "locale": "en_US",
    "themeColor": "#0066CC",

    "organization": {
      "name": "SolutionStream",
      "legalName": "SolutionStream, LLC",
      "url": "https://solutionstream.com",
      "logo": "https://solutionstream.com/images/logos/solutionstream-logo-horz.svg",
      "foundingDate": "1997",
      "address": {
        "streetAddress": "249 N 1200 E",
        "addressLocality": "Lehi",
        "addressRegion": "UT",
        "postalCode": "84043",
        "addressCountry": "US"
      },
      "contactPoint": {
        "telephone": "+1-800-314-3451",
        "contactType": "customer service",
        "email": "info@solutionstream.com"
      },
      "sameAs": [
        "https://www.linkedin.com/company/solutionstream/",
        "https://twitter.com/solutionstream"
      ]
    }
  }
}
```

### 8.2 Page-Specific Metadata

```json
{
  "pages": {
    "homepage": {
      "title": "Custom Software Development | SolutionStream",
      "description": "We started SolutionStream with a simple idea—to develop amazing software on time and on budget—and to finish each engagement with a happy, referable customer.",
      "keywords": ["custom software development", "AI development", "technical staffing", "software solutions"],
      "ogType": "website",
      "canonical": "/"
    },

    "services": {
      "title": "Services | SolutionStream",
      "description": "AI-Driven Development and Technical Staffing solutions that help your business grow faster and smarter.",
      "keywords": ["software development services", "technical staffing", "AI solutions"],
      "canonical": "/services"
    },

    "softwareDevelopment": {
      "title": "Software Development | SolutionStream",
      "description": "Smarter software. Built faster. We use AI-enhanced development to turn ideas into custom solutions that are efficient, scalable, and ready for what's next.",
      "keywords": ["custom software development", "AI-enhanced development", "scalable software"],
      "canonical": "/services/software-development"
    },

    "technicalStaffing": {
      "title": "Technical Staffing | SolutionStream",
      "description": "Staff confidently with AI-trained engineers. Our elite talent integrates with your team and delivers impact - without the hiring headache.",
      "keywords": ["technical staffing", "AI-trained engineers", "software developers"],
      "canonical": "/services/technical-staffing"
    },

    "aiSolutions": {
      "title": "AI Solutions | SolutionStream",
      "description": "We stay at the forefront of AI to help you navigate change, integrate powerful tools, and build better software.",
      "keywords": ["AI solutions", "machine learning", "AI integration"],
      "canonical": "/services/ai-solutions"
    },

    "solutionMap": {
      "title": "SolutionMap | SolutionStream",
      "description": "We create digital products that accelerate business. With our SolutionMap design sprint, we walk you through every step of defining your ultimate product before we ever write a line of code.",
      "keywords": ["design sprint", "product strategy", "SolutionMap"],
      "canonical": "/solutionmap"
    },

    "work": {
      "title": "Work | SolutionStream",
      "description": "View our portfolio of successful software development projects and case studies from clients like Young Living, SeneGence, WGU, and more.",
      "keywords": ["portfolio", "case studies", "software projects"],
      "canonical": "/work"
    },

    "company": {
      "title": "Company | SolutionStream",
      "description": "For nearly 30 years, SolutionStream has delivered custom software solutions on time and on budget. Learn about our story and culture.",
      "keywords": ["about solutionstream", "software company", "utah software development"],
      "canonical": "/company"
    },

    "blog": {
      "title": "Blog | SolutionStream",
      "description": "Learn about the latest trends in tech from the experts at SolutionStream. Articles on AI, development, and industry insights.",
      "keywords": ["software development blog", "AI articles", "tech insights"],
      "canonical": "/blog"
    },

    "contact": {
      "title": "Contact Us | SolutionStream",
      "description": "Get in touch with SolutionStream. Schedule a call to discuss your software development needs.",
      "keywords": ["contact", "schedule call", "get quote"],
      "canonical": "/contact"
    }
  }
}
```

### 8.3 Structured Data (JSON-LD)

```typescript
// lib/structuredData.ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SolutionStream",
  "url": "https://solutionstream.com",
  "logo": "https://solutionstream.com/images/logos/solutionstream-logo-horz.svg",
  "description": "Custom software development and technical staffing services",
  "foundingDate": "1997",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "249 N 1200 E",
    "addressLocality": "Lehi",
    "addressRegion": "UT",
    "postalCode": "84043",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-314-3451",
    "contactType": "customer service",
    "email": "info@solutionstream.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/solutionstream/",
    "https://twitter.com/solutionstream"
  ]
};

export const blogPostSchema = (article: BlogArticle) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.excerpt,
  "image": article.thumbnail,
  "datePublished": article.publishedDate,
  "dateModified": article.updatedDate || article.publishedDate,
  "author": {
    "@type": "Person",
    "name": article.author.name
  },
  "publisher": {
    "@type": "Organization",
    "name": "SolutionStream",
    "logo": {
      "@type": "ImageObject",
      "url": "https://solutionstream.com/images/logos/solutionstream-logo-horz.svg"
    }
  }
});
```

---

## 9. Content Organization Strategy

### 9.1 Content Management Approach

**Recommendation: Hybrid Approach**

```
┌─────────────────────────────────────────┐
│      Content Management Strategy         │
├─────────────────────────────────────────┤
│                                          │
│  Static TypeScript Files (Phase 1)      │
│  ├─ Services content                    │
│  ├─ Homepage sections                   │
│  ├─ Company info                        │
│  ├─ Client testimonials                 │
│  ├─ Technology stack                    │
│  └─ Navigation/Footer                   │
│                                          │
│  CMS-Ready (Phase 2 Migration)          │
│  ├─ Blog articles                       │
│  ├─ Case studies                        │
│  └─ Team members                        │
│                                          │
│  Hard-Coded (Always)                    │
│  ├─ Form schemas                        │
│  ├─ Site configuration                  │
│  ├─ SEO metadata templates              │
│  └─ Component logic                     │
│                                          │
└─────────────────────────────────────────┘
```

### 9.2 Decision Matrix

| Content Type | Phase 1 (TS Files) | Phase 2 (CMS) | Always Hard-Coded |
|--------------|-------------------|---------------|-------------------|
| Homepage sections | ✅ | Optional | ❌ |
| Services | ✅ | Optional | ❌ |
| Case studies | ✅ | Recommended | ❌ |
| Blog articles | ✅ | Recommended | ❌ |
| Testimonials | ✅ | Optional | ❌ |
| Client logos | ✅ | ❌ | ❌ |
| Tech stack | ✅ | ❌ | ❌ |
| Company info | ✅ | Optional | ❌ |
| Navigation | ❌ | ❌ | ✅ |
| Forms | ❌ | ❌ | ✅ |
| SEO config | ❌ | ❌ | ✅ |
| Site config | ❌ | ❌ | ✅ |

### 9.3 Content Format Recommendations

**For Static Content (TypeScript):**
```typescript
// data/services.ts
export const services = [...];
```

**For Dynamic Content (Markdown + Frontmatter):**
```markdown
---
title: "Blog Post Title"
excerpt: "..."
publishedDate: "2024-01-15"
category: "AI & Development"
---

# Content here in Markdown
```

**For CMS Content (JSON):**
```json
{
  "content": {
    "title": "...",
    "sections": [...]
  }
}
```

### 9.4 CMS vs Static Decision Factors

**Use TypeScript/Static Files When:**
- Content changes infrequently (< once per month)
- Content is technical (code examples, configurations)
- Type safety is important
- No non-technical editors needed
- Examples: Services, company info, tech stack

**Use CMS When:**
- Content changes frequently (weekly or more)
- Non-technical team members need to edit
- Preview/draft functionality needed
- Workflow/approval process required
- Examples: Blog articles, news updates

**Always Hard-Code:**
- Form logic and validation
- SEO templates and logic
- Site configuration
- Component definitions
- API routes

---

## 10. Folder Structure

### 10.1 Complete Content Folder Structure

```
content/
├── pages/
│   ├── homepage.json                  # Homepage content
│   ├── services.json                  # Services overview
│   ├── company.json                   # Company page
│   ├── solutionmap.json              # SolutionMap page
│   └── contact.json                   # Contact page
│
├── services/
│   ├── software-development.json
│   ├── technical-staffing.json
│   └── ai-solutions.json
│
├── case-studies/
│   ├── young-living.json
│   ├── senegence.json
│   ├── deluxe-technicolor.json
│   ├── wgu.json
│   ├── modere.json
│   ├── extra-space-storage.json
│   └── byu-idaho.json
│
├── blog/
│   ├── articles/
│   │   ├── engineers-upgraded.md
│   │   ├── ai-affects-development.md
│   │   └── [... 32 more articles]
│   ├── categories.json
│   └── tags.json
│
├── testimonials/
│   └── testimonials.json
│
├── clients/
│   ├── logos.json                     # Client logo inventory
│   └── testimonials.json              # Redundant, links to main
│
├── technologies/
│   └── stack.json
│
├── forms/
│   ├── contact-schema.json
│   └── solutionmap-schema.json
│
├── seo/
│   ├── metadata.json                  # Page-specific SEO
│   └── structured-data.json           # JSON-LD schemas
│
├── images/
│   ├── inventory.json                 # Complete image catalog
│   └── optimization-config.json       # Size/format requirements
│
└── README.md                          # Content management guide
```

### 10.2 Data Files Structure

```
data/
├── pages/
│   └── homepage.ts
├── services.ts
├── caseStudies.ts
├── blog.ts
├── testimonials.ts
├── clients.ts
├── technologies.ts
├── navigation.ts
└── footer.ts
```

### 10.3 Public Assets Structure

```
public/
├── images/
│   ├── homepage/
│   │   ├── hero.webp
│   │   └── experts.webp
│   ├── services/
│   │   ├── development-1686073128.jpg
│   │   ├── web-dev-arch.jpg
│   │   └── tech.png
│   ├── projects/
│   │   ├── young-living/
│   │   │   ├── young-living-logo-white.svg
│   │   │   ├── youngliving-thumb.webp
│   │   │   └── [additional images]
│   │   ├── senegence/
│   │   ├── deluxe/
│   │   ├── wgu/
│   │   ├── modere/
│   │   ├── extra-space/
│   │   └── byu-idaho/
│   ├── client-logos/
│   │   ├── adobe-1685555063.svg
│   │   ├── fidelity.svg
│   │   └── [... all client logos]
│   ├── blog/
│   │   ├── thumbnails/
│   │   └── featured/
│   └── og/
│       ├── default.jpg
│       └── [dynamic OG images]
│
├── fonts/
│   └── [if self-hosting]
│
└── favicon/
    ├── favicon.ico
    ├── apple-touch-icon.png
    └── og-card.jpg
```

---

## 11. Content Extraction Checklist

### 11.1 Extraction Tasks

```markdown
## Homepage Content
- [ ] Hero title and subtitles
- [ ] CTA button text and links
- [ ] Background image paths
- [ ] Services grid (3 cards)
- [ ] Tech stack marquee (18 technologies)
- [ ] "Why Us" section content
- [ ] Company stats (3 statistics)
- [ ] Client logos (12 logos)
- [ ] Testimonials (6 testimonials)
- [ ] Footer CTA

## Service Pages
- [ ] Software Development page
  - [ ] Page header content
  - [ ] Intro section
  - [ ] 5 section contents (Discovery, Design, Development, PM, QA)
  - [ ] All images
- [ ] Technical Staffing page
  - [ ] Full content extraction
- [ ] AI Solutions page
  - [ ] Full content extraction

## Case Studies (7 total)
- [ ] Young Living
  - [ ] Logo (SVG)
  - [ ] Thumbnail
  - [ ] Full content
  - [ ] Gallery images
  - [ ] Testimonial
- [ ] SeneGence
  - [ ] All content
- [ ] Deluxe Technicolor
  - [ ] All content
- [ ] WGU
  - [ ] All content
- [ ] Modere
  - [ ] All content
- [ ] Extra Space Storage
  - [ ] All content
- [ ] BYU-Idaho
  - [ ] All content

## Blog Articles (34 total)
- [ ] Extract all article metadata
- [ ] Extract featured article
- [ ] Extract article content (HTML to Markdown)
- [ ] Extract thumbnails
- [ ] Categorize by topic
- [ ] Tag assignment
- [ ] Author information

## Forms
- [ ] Contact form fields
- [ ] SolutionMap form fields
- [ ] Validation rules
- [ ] Error messages
- [ ] Success messages

## Images
- [ ] Homepage images (2)
- [ ] Service page images (15+)
- [ ] Case study images (30+)
- [ ] Client logos (12)
- [ ] Testimonial logos (6)
- [ ] Blog thumbnails (34)
- [ ] Branding assets (logos, favicon)

## SEO
- [ ] Page titles (10 pages)
- [ ] Meta descriptions (10 pages)
- [ ] OG images (10 pages)
- [ ] Keywords
- [ ] Canonical URLs
- [ ] Structured data schemas

## Navigation & Footer
- [ ] Main navigation links
- [ ] Mobile navigation
- [ ] Footer content
- [ ] Contact information
- [ ] Social links
- [ ] Legal links
```

### 11.2 Data Quality Checklist

```markdown
## Validation
- [ ] All JSON files valid
- [ ] All image paths correct
- [ ] All links working
- [ ] No missing content
- [ ] Consistent formatting
- [ ] Proper character encoding
- [ ] Alt text for all images
- [ ] No HTML entities in JSON

## TypeScript
- [ ] All interfaces defined
- [ ] Types match data
- [ ] No type errors
- [ ] Enums for constants
- [ ] Proper exports

## Content
- [ ] Grammar checked
- [ ] Brand voice consistent
- [ ] CTAs compelling
- [ ] Dates in ISO 8601
- [ ] Phone/email correct
- [ ] Company info accurate
```

---

## 12. Maintenance Plan

### 12.1 Content Update Workflows

**Blog Articles (Weekly/Biweekly):**
```
1. Create new article:
   - Write content in Markdown
   - Add frontmatter metadata
   - Place in content/blog/articles/
   - Add thumbnail to public/images/blog/

2. Update blog index:
   - Article appears automatically
   - No manual index update needed

3. Deploy:
   - Push to Git
   - Vercel auto-deploys
   - ISR revalidates blog index
```

**Case Studies (Monthly/Quarterly):**
```
1. Create new case study:
   - Fill out case study JSON template
   - Add logo and images
   - Place in data/caseStudies.ts

2. Add images:
   - Logo (SVG)
   - Thumbnail (WebP)
   - Gallery images
   - Place in public/images/projects/[slug]/

3. Deploy:
   - Commit changes
   - Vercel deploys
   - Static pages regenerate
```

**Services/Pages (Rarely):**
```
1. Update content:
   - Edit JSON in data/pages/
   - Or edit TypeScript in data/

2. Review:
   - Test locally
   - Check responsive design
   - Verify links and images

3. Deploy:
   - Commit and push
   - Vercel deploys
```

### 12.2 Version Control Strategy

```
main (production)
  ├── content/              # All content files
  ├── data/                 # TypeScript data files
  └── public/images/        # Image assets

Feature branches for major updates:
  ├── feature/new-case-study
  ├── feature/blog-redesign
  └── feature/service-page-update
```

### 12.3 Content Review Process

```markdown
## Pre-Publish Checklist
- [ ] Content reviewed for accuracy
- [ ] Grammar and spelling checked
- [ ] Images optimized (WebP, correct sizes)
- [ ] Alt text added to all images
- [ ] Links tested
- [ ] SEO metadata complete
- [ ] Mobile responsive
- [ ] Lighthouse score acceptable

## Post-Publish Checklist
- [ ] Verify live deployment
- [ ] Test forms (if applicable)
- [ ] Check analytics tracking
- [ ] Share on social media
- [ ] Update sitemap (automatic)
```

### 12.4 Backup & Recovery

```
Automated Backups:
- Git repository: Full version history
- Vercel: Deployment snapshots
- Database (if used): Daily backups

Recovery Process:
1. Identify issue
2. Revert to previous Git commit
3. Redeploy from Vercel dashboard
4. Or restore from backup
```

### 12.5 Performance Monitoring

```
Weekly:
- Check Lighthouse scores
- Monitor Core Web Vitals
- Review analytics data
- Check error logs

Monthly:
- Audit image sizes
- Review bundle size
- Check broken links
- Update dependencies

Quarterly:
- Content audit
- SEO review
- Accessibility audit
- Security review
```

---

## Next Steps

### Immediate Actions

1. **Review this document** with stakeholders
2. **Prioritize content extraction** based on launch timeline
3. **Set up content folder structure**
4. **Begin extracting high-priority content** (homepage, services)
5. **Validate image assets** and create optimization pipeline

### Content Extraction Order

**Week 1:**
- Homepage content
- Navigation/Footer
- Services overview

**Week 2:**
- Individual service pages
- Contact/SolutionMap forms
- SEO metadata

**Week 3:**
- Case studies (all 7)
- Testimonials
- Client logos

**Week 4:**
- Blog articles (all 34)
- Blog categories/tags
- Remaining images

**Week 5:**
- Content review and validation
- Data quality checks
- Final testing

---

**Document Version:** 1.0
**Total Content Items:** 100+
**Estimated Extraction Time:** 4-5 weeks
**Next Review:** After Phase 1 completion
