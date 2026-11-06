
# Project Decisions

This document records important architectural and technical decisions made during the development of the CrizDan portfolio.

## 1. React and Vite

**Decision:** Use React with Vite.

**Reason:**

React supports a component-based architecture, allowing the portfolio to be organised into independent and maintainable UI components.

Vite provides a lightweight development environment and production build process.

## 2. Component-Based Architecture

**Decision:** Separate major interface sections into individual components.

**Reason:**

Components such as Navbar, Hero and About have distinct responsibilities.

Separating them improves code organisation, maintainability and future development.

## 3. CSS Organisation

**Decision:** Use separate CSS files for individual components, alongside a global stylesheet.

**Reason:**

Component-specific styles remain organised, while global design tokens provide consistent colours, spacing and typography.

## 4. CSS Custom Properties

**Decision:** Use CSS variables for shared design values.

**Reason:**

Centralising design values makes it easier to maintain consistency and implement light and dark themes.

## 5. Responsive Design

**Decision:** Use CSS Grid, Flexbox and media queries.

**Reason:**

The portfolio should provide a usable experience across desktop, tablet and mobile devices.

## 6. React State and Effects

**Decision:** Implement the Hero typewriter animation using React state and effects rather than an external animation library.

**Reason:**

The animation has relatively simple behaviour and does not require an additional dependency.

This also keeps the application lightweight.