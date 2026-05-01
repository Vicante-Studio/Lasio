# Development Log

## Day 1

### High Level System Design

**What I built**  
Defined the foundational system design for the application.

*** Why it matters**  
Understanding the system structure early ensures the application is scalable and logically organized before development begins.

**Problem faced**  
Needed clarity on the main entities and how users would interact with the system.

**Solution**  
Mapped the user journey, identified core domains and entities, and defined relationships between them.

**Next step**  
Set up the project environment and repository.

### Project Scaffolding

**What I built**  
Initialized the project and prepared the development environment.

**Why it matters**  
A proper project setup ensures consistent development and easier collaboration.

**Problem faced**  
Needed a reliable modern development setup.

**Solution**  
Created the repository, bootstrapped the project with Vite, set up the basic file structure, connected the project to GitHub, and created basic test features to verify the setup.

**Next step**  
Define the application's page structure and component planning.

## Day 2

### Site Mapping

**What I built**  
Defined the full page structure of the application.

**Why it matters**  
A clear site map helps organize navigation and ensures all user flows are planned before building UI components.

**Pages defined**  

1. Home Page
2. About Page
3. Listings Page
4. Listing Details Page
5. Contact Page
6. Login Page
7. Sign Up Page
8. Create Listing Page

**Problem faced**  
Needed to ensure both browsing and listing management flows were covered.

**Solution**  
Mapped out all required pages supporting both visitors and authenticated users.

**Next step**  
Establish project conventions and component tracking.

### Project Conventions & Component Inventory

**What I built**  
Created documentation files to enforce consistency across the project.

**Why it matters**  
Maintaining consistent naming, structure, and reusable components improves maintainability as the project grows.

**Problem faced**  
Needed a way to track reusable components and enforce code standards.

**Solution**  
Created two documentation files

* `CONVENTIONS.md` to define coding and project structure standards
* `COMPONENTS.md` to maintain an inventory of all reusable components

**Next step**  
Improve data structure and folder organization.

## Day 3

### Data and Structure Refactoring

**What I built**  
Improved the internal data structure and project organization.

**Why it matters**  
Better structure makes the application easier to scale and maintain.

**Problem faced**  
Listing data and folder structure needed better organization for future development.

**Solution**  
Refactored listing data, reorganized the folder structure, and created a `utils` directory with a helper function to format listing prices.

**Next step**  
Continue building features on the improved structure.

## Day 4

### Development Pause

**What happened**  
Development paused for a break.

**Why it matters**  
Taking breaks helps maintain productivity and avoid burnout.

**Next step**  
Resume development once rested.

## Day 5

### Health Recovery

**What happened**  
Development paused due to illness and stress.

**Why it matters**  
Recovery was necessary before continuing work.

**Next step**  
Gradually return to development workflow.

## Day 6

### Returning to Development

**What I did**  
Resumed work on the project after recovery.

**Why it matters**  
Re-entering development flow helps rebuild momentum and continue progress.

**Next step**  
Continue building UI components and refining the design system.

## Day 7

### UI Styling Preparation

**What I built**  
Created styled components and UI references in Figma.

**Why it matters**  
Defining visual styles early helps maintain design consistency across the application.

**Problem faced**  
Needed a clear visual direction before implementing additional UI components.

**Solution**  
Designed component styles and visual references in Figma.

**Next step**  
Refactor UI components to match the new design.

## Day 8

### Listing Card Refactor

**What I built**  
Refactored the Listing Card component.

**Why it matters**  
Listing cards are a core component used across the platform to display property summaries.

**Problem faced**  
The initial component structure needed improvement for flexibility and styling consistency.

**Solution**  
Reworked the component layout and styling.

**Next step**  
Implement search functionality for listings.

## Day 9

### Search Functionality

**What I built**  
Implemented search functionality for property listings.

**Why it matters**  
Search improves the user experience by allowing users to quickly find relevant listings.

**Problem faced**  
Needed a way to filter listings dynamically based on user input.

**Solution**  
Implemented search logic connected to the listings data.

**Next step**  
Add dynamic routing for listing detail pages.

## Day 10

### Dynamic Routing

**What I built**  
Implemented dynamic routes for individual listing detail pages.

**Why it matters**  
Each listing needs its own dedicated page with detailed information.

**Problem faced**  
Needed a scalable routing solution for dynamically generated listing pages.

**Solution**  
Used React Router to create dynamic routes based on listing IDs.

**Next step**  
Improve search and filtering logic.

## Day 11

### Search and Filter Optimization

**What I built**  
Improved the search and filtering logic.

**Why it matters**  
Combining search and filtering simplifies the logic and improves maintainability.

**Problem faced**  
Search and filter features were handled separately, causing redundant logic.

**Solution**  
Merged both features into a unified logic system and enforced mandatory listing types.

**Next step**  
Prepare the production deployment environment.

### Production Deployment Fixes

**What I built**  
Improved the production deployment configuration.

**Why it matters**  
Production builds revealed bugs that did not appear in development.

**Problem faced**  
Deployment errors and unexpected behavior in production.

**Solution**  
Resolved production issues and added analytics tracking through Vercel.

**Next step**  
Improve navigation handling.

## Day 12

### Navigation Improvements

**What I built**  
Improved navigation behavior within the application.

**Why it matters**  
Navigation controls must behave consistently to ensure good user experience.

**Problem faced**  
Return navigation required cleaner routing logic.

**Solution**  
Used React Router navigation for the return button and removed unnecessary link imports.

**Next step**  
Expand the application with a dedicated listings page.

## Day 13

### Listings Page Expansion

**What I built**  
Created a dedicated listings page.

**Why it matters**  
Separating listings into their own page improves structure and user navigation.

**Problem faced**  
Needed clear navigation patterns between different parts of the application.

**Solution**  
Implemented two types of navigation links

* Navbar navigation links
* In-page navigation links

**Next step**  
Refine visual styling.

## Day 14

### UI Theme Adjustments

**What I built**  
Refined styling and visual themes.

**Why it matters**  
Consistent styling improves overall usability and visual appeal.

**Problem faced**  
Design elements needed better alignment with the intended project theme.

**Solution**  
Adjusted color themes, spacing, and layout styles.

**Next step**  
Improve global state management.

## Day 15

### State Management Planning

**What I learned**  
Studied Redux to improve state management architecture.

**Why it matters**  
As the application grows, managing global state with React Context becomes harder.

**Problem faced**  
Context-based state management was becoming less scalable.

**Solution**  
Researched Redux as a more structured global state solution.

**Next step**  
Install and configure Redux.

## Day 16

### Redux Installation

**What I built**
Installed Redux and prepared the project for state management refactoring.

**Why it matters**
Redux enables predictable and centralized state updates.

**Problem faced**
Needed to integrate Redux into an existing project structure.

**Solution**
Installed Redux dependencies and began setting up the store.

**Next step**
Migrate state management from Context to Redux.

## Day 17

### Redux State Refactor

**What I built**  
Replaced React Context with Redux for managing listings state.

**Why it matters**  
Redux provides more scalable state management as the application grows.

**Problem faced**  
Existing context logic needed to be migrated without breaking functionality.

**Solution**  
Implemented Redux reducers for

* creating listings
* updating listings
* deleting listings

**Next step**  
Continue refining state architecture and expanding features.

## Day 18 (09/03/2026)

### Installed and implemented shadcn-ui

**What I did**  
I installed shadcn-ui and implemented it in the project

**Why it matters**  
It was stressfull creating custom components, especially when I had to think of the various use cases for it

**Problems faced**  
Custom ui components conflicted with shadcn's components.

**Solution**  
I solved it by

* Removing all custom components
* Fixing import paths to match shadcn's ui components

**Next step**  
Use shadcn field component to create CreateListingForm component

## Day 19 (10/03/2026)

### Debugged shadcn form

**What I did**  
I learnt how shadcn field component works and implemented it correctly

**Why it matters**  
I had to learn it in order to debug it and add custom features in the future if needed

**Problems faced**  
The new Field component didn't support label props, this caused none of the form fields to have labels

**Solution**  
I solved it by

* Importing the FormLabel and FormError component
* Adding it to every FormField component and removing the error and label props

### Fixed production bug

**What I did**  
I converted listing image files to URLs

**Why it matters**  
The src attribute for images only accepts strings, not file objects.

**Problems faced**  
I had a little trouble with specifying the image type. I initially set it to "File[] | string[]", but that kept conflicting with the src attribute as it specifically only takes strings.

**Solution**  
I solved it by

* Converting the file objects to strings before passing them to the new listingObj.
* Explicitly setting the image type on listingObj to "string[]" to ensure it always accepts images as strings before using it anywhere.

### Finished core MVP

**What I did**  
Final tweaks I made for core MVP:

* Added feature for creating new listings
* Moved all filter logic to Redux
* Fixed Image memory leak

**Next step**  
Create admin listings dashboard

## Day 20 (11/03/2026)

### Created full admin features

**What I did**
I created an AdminListings Dashboard which showcases all listings with CRUD operations

**Why it matters**
This is to allow admins to handle CRUD operations like editing and deleting listings.

**Problems faced**
I needed to figure out a way to handle the routing and state and CRUD operations while still using the same listing component. That way, both user and admin based features could work with one component, rather than building a separate component for each.

---

## Day 21 (12/03/2026)

### Improved UX loading states

**What I did**
I added additional messages to guide the user through different loading states across the app.

**Why it matters**
This is to ensure users don't become confused about what's happening or what the next step is — especially on slower connections where blank screens can feel like something broke.

---

## Day 22 (13/03/2026)

### Learnt how to use Express

**What I did**
I spent the day going through Express fundamentals — setting up a basic server, understanding middleware, and how routing works on the backend.

**Why it matters**
The project is going to need a proper backend, so getting comfortable with Express now means I can start building out the API layer with confidence rather than figuring it out as I go.

---

## Day 23 (14/03/2026)

### Experimented by building some APIs

**What I did**
I built a few simple API endpoints to test what I'd learned — mostly GET and POST routes to see how data flows between the frontend and backend.

**Why it matters**
Hands-on experimentation is the fastest way for me to solidify new concepts. Building throwaway APIs helped me understand things like request/response cycles and how to structure routes cleanly before writing production code.

---

## Day 24 (15/03/2026)

### Took a break

**What I did**
I stepped away from the project entirely and didn't write any code today.

**Why it matters**
I'd covered a lot of new ground over the past few days and felt the mental fatigue building up. Taking a deliberate break helped me come back the next day with a clearer head and fresher perspective.

---

## Day 25 (16/03/2026)

### Created backend foundation

**What I did**
I set up the core backend structure — initialising the Express server, organising the folder structure, and connecting the basic pieces needed to start building real features on top of.

**Why it matters**
Having a clean, well-organised foundation makes everything that comes after easier. It's much harder to untangle a messy backend later than it is to set it up properly from the start.

---

## Day 26 (18/03/2026)

### Created listing database schema

**What I did**
I designed and wrote the database schema for listings — defining the fields, data types, and relationships the listings table will need.

**Why it matters**
The schema is the backbone of the listings feature. Getting this right early means the API endpoints and frontend can be built around a solid, predictable data structure rather than having to refactor the database down the line.

## Day 27 (19/03/2026)

### Deployed backend on Render

**What I did**
I deployed the backend server to Render and debugged the errors that came up in production.

**Why it matters**
Getting the backend live is a big step, it means the server is no longer just running on my laptop but is actually accessible on the internet. Debugging in production is also a different skill from local debugging; reading deploy logs and understanding the difference between build failures and runtime crashes is something you only really learn by doing it.

### Fixed production bugs

**What I did**
The deploy kept crashing at startup because Render had no idea what my environment variables were. Locally I use a `.env` file, but that file never gets pushed to GitHub, so Render was starting the server with no Supabase credentials at all. I added `SUPABASE_URL` and `SUPABASE_ANON_KEY` directly in Render's environment settings and redeployed.

**Why it matters**
This is one of those things that will come up on every project that touches a real database or external service. The rule is simple: secrets live in the environment, not in the codebase. Each platform — Render, Vercel, AWS, whatever — needs to be told its own secrets separately.

## Day 28 (20/03/2026)

### Hooked up Create Listing to the Backend

**What I did**
I connected the existing create listing form to the backend, getting data to actually flow from the frontend into the database. Debugged a 500 error along the way that came down to missing error handling on the POST route and an RLS policy blocking inserts.

**Why it matters**
The form existed before but was just sitting there doing nothing. Now it's live, a user fills it out, hits submit, and the listing lands in the database. Tracing the error also taught me how to debug across layers, from reading server logs to understanding how Supabase's RLS can silently block operations without an obvious reason.

**Next Steps — Authentication**
The next major piece is auth. Right now anyone can create a listing with no concept of ownership, and RLS is wide open as a temporary measure. Adding auth will mean:

* Users can sign up and log in
* Each listing gets tied to the user who created it
* Only the owner can edit or delete their listing
* RLS policies can be properly locked down

## Day 29 (13/04/2026)

### Fixing Production Deployment Bugs

**What I did**
Returned from a 2-week break and spent the session getting back up to speed with the codebase before diving into the backlog of production deployment issues. Traced through a series of Vercel build failures that had been blocking deployment before the break.

Bugs fixed today:

*-* Resolved a missing `SignUpPage` import in `main.tsx` that was causing the initial build to fail

*-* Fixed `@supabase/supabase-js` not resolving in production — it had been installed from GitHub under the wrong package alias (`@supabase-js/source`) instead of from npm

*-* Corrected a TypeScript deprecation warning around `baseUrl` in `tsconfig.json`

*-* Fixed an ESLint `parserOptions.project` mismatch where `vite.config.ts` wasn't included in `tsconfig.app.json` — resolved by adding a separate ESLint config block pointing `vite.config.ts` at `tsconfig.node.json`

**Why it matters**
None of these were feature bugs — they were infrastructure bugs, the kind that silently block everything else. A broken build means nothing ships, so clearing this backlog was the right first move before touching any new features. Also good practice in reading build logs and tracing errors across layers (Rollup, TypeScript, ESLint, Vercel).

**What I relearned coming back**
*-* The project structure has the client living in `app/client/`, which affects how Vercel resolves dependencies

*-* Supabase auth is the next major feature — RLS is currently wide open as a temporary measure

*-* The create listing form is wired up and writing to the database, but has no concept of ownership yet

**Next Steps — Authentication**
Back to where things were headed before the break:
*-* Implement sign up and log in
*-* Tie listings to the authenticated user who created them
*-* Lock down RLS policies so only owners can edit or delete their listings

## Day 31 (17/04/2026)

### Solved Authentication Latency Issues

**What I did**
Got back to dealing with auth and realized logins were taking way too long. Spent the day tracking down where the slowdowns were happening.

**Why it matters**
Users notice slow logins right away — it's one of those things that immediately makes them think something's broken. Plus every request after that depends on auth being fast, so fixing this early saves headaches later.

**Problems faced**
The auth flow was hitting the database multiple times for the same user and doing redundant work checking tokens. Every login felt sluggish and it was obvious something needed to be optimized.

**Solution**
I figured out I was fetching the user profile way more than I needed to. Cleaned up the auth middleware to not do duplicate lookups and started being smarter about what data I actually needed to check. Also realized I was verifying the token every single time even when I could have cached it.

**Next step**
The code was getting messy with everything in the routes. Time to actually organize it properly with controllers and services.

---

## Day 32 (18/04/2026)

### Restructured Server Folder Architecture

**What I did**
Took a day to completely reorganize how the backend was laid out. Everything was living in route handlers and it was becoming impossible to follow. Split things into controllers, services, repositories, middleware — the whole nine yards.

**Why it matters**
When your backend code is all in one place, you can't test anything individually and it becomes a mess to add new features. Having separate layers means I can test business logic without worrying about HTTP stuff, and I can reuse services across different routes.

**Problems faced**
The existing code had route handlers that were doing literally everything — fetching from the database, running business logic, formatting responses, error handling. It was all tangled together and hard to understand what was happening where.

**Solution**
I reorganized the folder structure so everything has a home. Routes just define paths, controllers handle the HTTP request/response cycle, services contain the actual logic, and repositories talk to the database. Makes way more sense to read now.

**Next step**
Actually start moving the endpoint logic into controllers instead of leaving it in the routes.

---

## Day 33 (19/04/2026)

### Built Listing Controllers

**What I did**
Moved all the listing endpoint logic into proper controller functions. Created controllers for getting all listings, getting a single listing, creating, updating, and deleting.

**Why it matters**
Controllers are the entry point for HTTP requests. Instead of having all the logic in the route handler, the controller takes the request, figures out what data it needs, calls the appropriate service, and sends back the response. Makes it way easier to understand what each endpoint does at a glance.

**Problems faced**
I had to extract logic from existing route handlers without breaking anything. Some of the endpoints had error handling scattered all over the place and it wasn't clear what was actually being checked.

**Solution**
I wrote clean controller functions that handle the HTTP part of things — pulling data from the request, validating it, calling services, and sending back the response. Kept them focused on just the HTTP layer, nothing else.

**Next step**
Wire these controllers into the routes so they actually get used.

---

## Day 34 (20/04/2026)

### Connected Controllers to Routers

**What I did**
Went through each route and made sure it's calling the right controller function. Also set up the middleware chains so each route has exactly the middleware it needs — no more, no less.

**Why it matters**
Without this, the controllers are just floating functions that don't get called. This is what actually hooks everything together so requests flow through the system properly.

**Problems faced**
Had to think carefully about middleware order. Some routes need auth to be checked first, then role-based access, then ownership. But some routes don't need any of that. I had to map out which middleware applies where.

**Solution**
Structured the routes so public endpoints have no middleware, endpoints that just need auth have just authMiddleware, and endpoints that need ownership checks have the full chain. Made it explicit and easy to read.

**Next step**
Build out the middleware that actually does the auth and role checking.

---

## Day 35 (21/04/2026)

### Built Authentication Middleware

**What I did**
Created the actual authMiddleware that checks if a request has a valid token and pulls the user's data so downstream code can access it.

**Why it matters**
This middleware is like the bouncer at the door. Every protected endpoint depends on this being solid. If auth middleware is broken, everything else falls apart.

**Problems faced**
Had to figure out how to work with Supabase's auth system. I can't just verify JWTs manually — I have to call Supabase to check if the token is valid. Also had to make sure TypeScript knew about the user data I was attaching to the request.

**Solution**
Wrote middleware that pulls the token from the authorization header, asks Supabase if it's valid, fetches the user's profile to get their role, and attaches all that to the request object. Also had to extend the Express Request type in TypeScript so TypeScript would stop complaining that req.user doesn't exist.

**Next step**
Build role-based access control so we can gate endpoints based on whether someone is an admin or agent.

---

## Day 36 (22/04/2026)

### Built Role-Based Access Control Middleware

**What I did**
Created requireRole middleware that checks if the authenticated user has the right role to access an endpoint.

**Why it matters**
Even if someone is logged in, not everyone should be able to do everything. You need roles to say "only agents and admins can create listings" or "only admins can see all users."

**Problems faced**
Wanted to make this flexible so different routes could require different role combinations. Also had to make sure the difference between "not authenticated" (401) and "authenticated but wrong role" (403) was clear.

**Solution**
Made it work like a filter that accepts multiple roles and checks if the user's role is in that list. If not, they get a 403. Clean and simple, and routes can use it however they need.

**Next step**
Need one more middleware to check if someone owns the listing they're trying to edit or delete.

---

## Day 37 (23/04/2026)

### Built Listing Ownership Middleware

**What I did**
Created middleware that verifies you actually own the listing before you can edit or delete it. Admins get a free pass though.

**Why it matters**
This is the final security check. You don't want agents being able to mess with other agents' listings. This middleware makes sure that's not possible.

**Problems faced**
Needs to fetch the listing from the database to check who owns it. Also had to handle the admin case — admins should be able to touch any listing without owning it.

**Solution**
Made the middleware fetch the listing, return 404 if it doesn't exist, then check if you're an admin (in which case you're good), or if you're an agent, check if your ID matches the listing's agent ID. Simple logic but it works.

**Next step**
Time to actually test all this stuff. Need to set up Jest and write some tests.

---

## Day 38 (24/04/2026)

### Set Up Jest and Testing Infrastructure

**What I did**
Installed Jest and Supertest, configured TypeScript to work with Jest, and created the folder structure for tests.

**Why it matters**
Can't ship confident code without tests. Jest lets me test individual functions and services, and Supertest lets me test the actual HTTP endpoints without spinning up a real server. This is how I'll catch bugs before they hit production.

**Problems faced**
Jest doesn't work out of the box with TypeScript and Express. Had to configure it properly so it understands TypeScript and knows how to test a Node.js app.

**Solution**
Installed the necessary packages and set up the Jest config in package.json so it uses ts-jest and knows to look for test files in the tests folder.

**Next step**
Actually write some tests for the services and make sure the business logic works correctly.

---

## Day 39 (25/04/2026)

### Unit Testing for Services

**What I did**
Wrote tests for the listing services to make sure create, read, update, and delete all work correctly when you call them directly.

**Why it matters**
Service tests are where you catch logic bugs. If the test passes, you know the business logic is correct. If it fails, you know the problem is in the service, not in the routing or middleware or HTTP stuff.

**Problems faced**
Services depend on Supabase, which I need to fake out in tests. Also had to think about what different scenarios to test — not just the happy path where everything works, but what happens when things go wrong too.

**Solution**
Mocked Supabase so tests don't actually hit the database, then wrote tests for the happy path and for error cases. Each test follows the same pattern — set up what you need, do the thing you're testing, check that you got what you expected.

**Next step**
Write integration tests that actually test the HTTP endpoints end-to-end.
new step
