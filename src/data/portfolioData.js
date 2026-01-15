export const projects = [
  {
    id: 'buildabite',
    title: 'BuildaBite',
    problem:
      'Learners and small food-service prototypes needed a simple way to assemble burritos/bowls, calculate totals, and generate receipts without a full POS.',
    solution:
      'Built a Java CLI with clear OO models (Burrito, BurritoBowl, Side, Drink, Order, Receipt) and DRY pricing helpers; receipts export to disk for auditability.',
    impact: [
      'Removed duplicate pricing code across entrees, cutting logic maintenance risk and improving correctness.',
      'Verified core flows with JUnit tests (burrito/bowl pricing, sides, orders, receipts) to prevent regressions.',
      'Added receipt export with formatted breakdowns so every order run leaves an auditable file trace.'
    ],
    techStack: ['Java', 'JUnit', 'CLI', 'File I/O'],
    myRole: [
      'Designed the OO model and refactored pricing to shared helpers in `Entree`.',
      'Implemented receipt breakdown/exports and validation for ingredient selections.',
      'Wrote unit tests for pricing, orders, and receipts to lock in behavior.'
    ],
    links: {
      github: 'https://github.com/ErmiyasHailemichael/BuildaBite',
      diagram: '#',
      demo: '#'
    },
    category: 'backend',
    featured: true,
    status: 'Completed',
    completionDate: '2025-02-15'
  },
  {
    id: 'ecommerce-api',
    title: 'E‑Commerce API (Clothing Store)',
    problem:
      'Needed a secure, stateless backend for a clothing store with persistent carts, admin product management, and protected customer data.',
    solution:
      'Built a Java 17 Spring Boot REST API with JWT auth (Spring Security + BCrypt), MySQL-backed DAOs for products/categories/carts, and stateless role-based endpoints. Shopping carts persist per user via MySQL and userId from the JWT.',
    impact: [
      'Delivered persistent carts that survive logout/restarts by binding cart rows to authenticated user IDs.',
      'Secured admin CRUD for categories/products behind JWT/role checks; password hashing via BCrypt.',
      'Enabled product search/filter (category, price range, color) through MySQL DAO queries.'
    ],
    techStack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'MySQL', 'Maven', 'JUnit'],
    myRole: [
      'Designed DAO-backed domain for products, categories, carts, and user profiles with MySQL implementations.',
      'Implemented JWT auth, BCrypt hashing, and role-based guards for admin routes.',
      'Built cart persistence logic keyed to JWT-derived userId; fixed search/query bugs and added tests.'
    ],
    links: {
      github: '#',
      diagram: '#',
      demo: '#'
    },
    category: 'backend',
    featured: true,
    status: 'Completed',
    completionDate: '2025-01-20'
  }
];

export const otherProjects = [];

export const posts = [
  {
    id: 'buildabite-architecture',
    title: 'BuildaBite: structuring a Java CLI for composable orders',
    projectId: 'buildabite',
    category: 'architecture',
    createdAt: '2025-02-20T10:00:00.000Z',
    tags: ['Java', 'CLI', 'Testing', 'Design'],
    overview:
      'How I structured BuildaBite as an OO CLI with DRY pricing, receipt exports, and tests to keep changes safe.',
    problem:
      'Avoiding duplicated pricing logic and ensuring every order/receipt stays correct as options grow.',
    architecture:
      'Core domain types (Burrito, BurritoBowl, Side, Drink, Order, Receipt) with shared helpers in abstract Entree; a simple Program/UserInterface drives input and writes receipts to disk.',
    decisions:
      'Used composition for orders and protected helpers for pricing; kept file I/O simple (text receipts) to avoid DB overhead; leaned on JUnit for fast feedback.',
    challenges:
      'Refactoring duplicated pricing while keeping behavior identical; validating inputs in the CLI; ensuring receipt formatting stayed aligned after changes.',
    learnings:
      'Centralizing pricing rules reduced defects; small, focused tests made refactors low-risk; even a CLI benefits from clear contracts.',
    nextSteps:
      'Add config-driven pricing, plug in a lightweight store (SQLite) for historical orders, and expose the core as a service API.',
    excerpt:
      'Notes on keeping pricing DRY, receipts auditable, and tests front-and-center for a Java CLI order builder.'
  },
  {
    id: 'ecommerce-api-architecture',
    title: 'E‑Commerce API: Spring Boot + JWT + MySQL for a clothing store',
    projectId: 'ecommerce-api',
    category: 'architecture',
    createdAt: '2025-02-22T10:00:00.000Z',
    tags: ['Spring Boot', 'JWT', 'MySQL', 'DAO', 'Security'],
    overview:
      'How I built a stateless Spring Boot backend for a clothing store with persistent carts, admin product/category management, and JWT-secured access.',
    problem:
      'Provide a secure, role-aware API with carts that persist per user and survive restarts, without trusting client-provided user IDs.',
    architecture:
      'Spring Boot 3 + Spring Security with JWT; DAO pattern over MySQL for products, categories, carts, and users; BCrypt hashing; stateless controllers with role-based guards.',
    decisions:
      'Chose JWT + stateless controllers to keep horizontal scaling simple; used DAOs for clear separation and testability; bound cart state to JWT-derived userId to avoid spoofing.',
    challenges:
      'Ensuring cart operations always used the authenticated userId (not client input); ironing out MySQL queries for search/filter; tightening CORS and auth filters.',
    learnings:
      'JWT-derived identity simplifies cart correctness; DAO separation made debugging SQL issues faster; small JUnit slices catch regression in search and cart math.',
    nextSteps:
      'Add checkout/payment integration stubs, paging/caching for product listings, and richer audit logs.',
    excerpt:
      'Building a secure, persistent-cart e‑commerce API with Spring Security, JWT, and MySQL DAOs.'
  }
];

