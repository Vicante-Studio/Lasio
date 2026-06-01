├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.js
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── cards
│   │   │   │   │   │   ├── AdminListingCard.tsx
│   │   │   │   │   │   └── ListingCard.tsx
│   │   │   │   │   ├── listingFeatures
│   │   │   │   │   │   ├── CreateListingForm.tsx
│   │   │   │   │   │   ├── DeleteListingsModal.tsx
│   │   │   │   │   │   └── EditListing.tsx
│   │   │   │   │   ├── priceFilter.tsx
│   │   │   │   │   ├── profile
│   │   │   │   │   │   └── ProfileMenu.tsx
│   │   │   │   │   └── SearchPanel.tsx
│   │   │   │   └── ui
│   │   │   │       ├── alert-dialog.tsx
│   │   │   │       ├── avatar.tsx
│   │   │   │       ├── Buttons
│   │   │   │       │   ├── button.tsx
│   │   │   │       │   └── ReturnButton.tsx
│   │   │   │       ├── Divider.tsx
│   │   │   │       ├── dropdown-menu.tsx
│   │   │   │       ├── forms
│   │   │   │       │   ├── checkbox.tsx
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   ├── select.tsx
│   │   │   │       │   └── textarea.tsx
│   │   │   │       ├── IconSet.tsx
│   │   │   │       ├── links
│   │   │   │       │   ├── NavLink.tsx
│   │   │   │       │   └── PageLink.tsx
│   │   │   │       ├── LoadingStates
│   │   │   │       │   └── ListingLoadingState.tsx
│   │   │   │       └── separator.tsx
│   │   │   ├── config
│   │   │   │   └── supabase.ts
│   │   │   ├── data
│   │   │   │   ├── AgentData.ts
│   │   │   │   └── ListingData.ts
│   │   │   ├── hooks
│   │   │   │   └── useLocalStorage.tsx
│   │   │   ├── index.css
│   │   │   ├── layouts
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   └── Navbar.tsx
│   │   │   ├── lib
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   ├── pages
│   │   │   │   ├── 404 Page
│   │   │   │   │   └── NotFound.tsx
│   │   │   │   ├── admin
│   │   │   │   │   └── AdminListingsPage.tsx
│   │   │   │   ├── auth
│   │   │   │   │   ├── LoginPage.tsx
│   │   │   │   │   └── signUpPage.tsx
│   │   │   │   ├── listings
│   │   │   │   │   ├── CreateListingPage.tsx
│   │   │   │   │   └── ListingDetails.tsx
│   │   │   │   └── mainPages
│   │   │   │       ├── AboutPage.tsx
│   │   │   │       ├── HomePage.tsx
│   │   │   │       └── ListingsPage.tsx
│   │   │   ├── sections
│   │   │   │   ├── Stats.tsx
│   │   │   │   └── TopLocations.tsx
│   │   │   ├── selectors
│   │   │   │   └── authSelectors.ts
│   │   │   ├── state
│   │   │   │   ├── slices
│   │   │   │   │   ├── auth
│   │   │   │   │   │   └── authSlice.ts
│   │   │   │   │   └── filters
│   │   │   │   │       └── filterSlice.ts
│   │   │   │   └── store.ts
│   │   │   ├── types
│   │   │   │   ├── filter.ts
│   │   │   │   ├── Listing.js
│   │   │   │   ├── Listing.ts
│   │   │   │   └── UiTypes.ts
│   │   │   └── utils
│   │   │       ├── formatPrice.ts
│   │   │       ├── getInitials.ts
│   │   │       └── priceMatch.ts
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   ├── vercel.json
│   │   └── vite.config.ts
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   ├── supabase.ts
│       │   │   └── supabaseAdmin.ts
│       │   ├── controllers
│       │   │   ├── auth.controller.ts
│       │   │   └── listing.controller.ts
│       │   ├── middleware
│       │   │   ├── auth.middleware.ts
│       │   │   ├── error.middleware.ts
│       │   │   ├── listingOwner.middleware.ts
│       │   │   └── role.middleware.ts
│       │   ├── routes
│       │   │   ├── auth.route.ts
│       │   │   └── listing.routes.ts
│       │   ├── services
│       │   │   ├── auth.service.ts
│       │   │   └── listing.service.ts
│       │   ├── types
│       │   │   ├── auth.type.ts
│       │   │   ├── express.d.ts
│       │   │   └── listing.types.ts
│       │   ├── utils
│       │   │   └── parsePriceFilter.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   └── listing.controller.test.ts
│       │       └── services
│       │           └── listing.service.test.ts
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── architecture.md
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   └── development-log.md
├── package-lock.json
├── package.json
└── README.md
