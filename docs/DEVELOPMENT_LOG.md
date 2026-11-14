# Development Log

This document records significant milestones, implementation decisions, and progress during the development of the CrizDan personal portfolio.

## Milestone 1: Project Initialisation

- Created the portfolio repository.
- Initialised a React application using Vite.
- Configured the development environment.
- Established the initial project structure.

## Milestone 2: Design Foundation

- Established global CSS design tokens.
- Defined dark theme colour variables.
- Added typography, spacing, and responsive layout foundations.
- Implemented shared styling conventions.

## Milestone 3: Navigation

- Developed a reusable navigation component.
- Implemented responsive desktop and mobile navigation.
- Added mobile menu state management.
- Included accessibility attributes for navigation controls.

## Milestone 4: Hero Section

- Created the personal introduction section.
- Established CrizDan as the primary personal brand.
- Added responsive profile photograph support.
- Implemented a React-based typewriter animation.
- Added reduced-motion support.

## Milestone 5: About Section

- Created a separate About component.
- Added personal background and development journey.
- Introduced focus areas using data-driven React rendering.
- Implemented responsive layouts.

## Milestone 6: Skills Section

- Created a responsive Skills section with six categories.
- Implemented data-driven rendering using React `map()`.
- Added descriptions for individual skills.
- Applied responsive CSS Grid layouts.
- Maintained consistency with the global design system.
- Tested desktop and mobile layouts.

## Milestone 7: Projects Section

- Added a responsive Featured Projects section.
- Presented Radiography Student Toolkit and OfflineNaira.
- Documented project problems, contributions, and key features.
- Added technology tags and project status information.
- Distinguished individual work from collaborative development.
- Tested desktop and mobile layouts.

## Milestone 8: Experience, Languages, Contact and Footer

- Created dedicated Experience and Languages components.
- Added a Contact section with professional contact links.
- Developed a reusable Footer component.
- Integrated the new sections into the main application.
- Applied responsive styling and consistent visual design.

## Milestone 9: Theme Switching

- Implemented dark and light theme switching.
- Centralised theme state management in the main App component.
- Passed theme state and toggle functionality to the Navbar.
- Added theme persistence using browser localStorage.
- Implemented early theme restoration in the HTML document to reduce theme flickering.
- Updated the global design tokens to support both themes.

## Milestone 10: CrizDan Branding Integration

- Integrated custom CrizDan monogram icons into the Navbar.
- Added theme-specific logo assets for dark and light modes.
- Integrated the full CrizDan logo into the Footer.
- Added custom favicon assets in multiple sizes.
- Created and integrated a social sharing preview image.

## Milestone 11: Metadata and Deployment

- Updated the document title, description, and author metadata.
- Added Open Graph metadata for social sharing.
- Added Twitter card metadata.
- Updated the production website URL in the metadata.
- Verified the production build using `npm run build`.
- Deployed the portfolio through the GitHub-connected Vercel workflow.
- Verified the production deployment on Vercel.
- Tested the live website on a mobile device.

## Deployment

- Hosting: Vercel
- Repository: [Repository](https://github.com/Crizdan/personal-portfolio.git)
- Live Website: [Live Website](https://crizdan-portfolio.vercel.app)

## Current Status

The first complete version of the CrizDan personal portfolio is deployed and accessible publicly.

Future improvements may include performance optimisation, accessibility refinements, content updates, and additional features as the portfolio evolves.
