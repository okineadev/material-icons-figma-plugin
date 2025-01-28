# Project Architecture

This document describes the architecture of the Material Icons Figma Plugin source code.

## 📁 Directory Structure

The `/src` directory is organized into two main parts:

- [`code/`](./code) - Contains the Figma plugin backend code
- [`ui/`](./ui) - Contains the Vue.js frontend interface

### 🔧 Backend ([`code/`](./code))

- [`index.ts`](./code/index.ts) - Main plugin entry point that:
  - Initializes the UI
  - Handles SVG drop events
  - Manages Figma node creation

### 🎨 Frontend ([`ui/`](./ui))

- [`ui.html`](./ui/ui.html) - Entry HTML that mounts the Vue app
- [`main.js`](./ui/main.js) - Vue app initialization
- [`App.vue`](./ui/App.vue) - Root Vue component
- [`types.d.ts`](./ui/types.d.ts) - TypeScript type definitions

#### Components

Located in [`ui/components/`](./ui/components):

- [`Icons.vue`](./ui/components/Icons.vue) - Displays the grid of available icons
- [`Input.vue`](./ui/components/Input.vue) - Search input component for filtering icons

#### Styles

Located in [`ui/scss/`](./ui/scss):

- [`styles.scss`](./ui/scss/styles.scss) - Global styles and theme variables

## 🔄 Data Flow

1. Icons are pre-bundled into `icons.json` during build
2. User interfaces with the UI to search/filter icons
3. When an icon is dragged, creates an SVG file
4. Plugin backend receives the SVG and creates Figma nodes

## 🎯 Key Features

- Icon search and filtering
- Drag and drop support
