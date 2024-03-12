# Wunderkind.co Website Documentation

Welcome to the documentation for the Wunderkind.co website. This documentation provides an overview of the website's architecture, technologies used, deployment process, and instructions for setting up the project locally.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Local Setup](#local-setup)

## Overview

The Wunderkind.co website is built to showcase our company's brand and provide information about our services.

## Technologies Used

- **Gatsby**: A React-based static site generator that helps build fast and optimized websites.
- **SCSS**: A popular CSS preprocessor that adds features like variables, nesting, and mixins to traditional CSS.
- **GraphQL**: A query language for APIs, used to efficiently retrieve data from various sources.
- **WordPress**: A content management system used to manage and create dynamic content.
- **Netlify**: A platform for continuous deployment and hosting of web projects.

## Deployment

The Wunderkind.co website is deployed using Netlify's continuous deployment process. Whenever changes are pushed to the master branch of the Git repository, Netlify automatically builds and deploys the updated site.

Deployment URL: `https://www.wunderkind.co`

## Local Setup

To set up the project locally, follow these steps:

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can use nvm or download it from [nodejs.org](https://nodejs.org/).
- Node version 14.16.1

### Clone the Repository

1. Open your terminal.
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository:

   ```
   git clone https://gitlab.bouncex.net/frontend/wunderkind-website/wunderkind-gatsby.git
   ```

### Environment Variables

Before running the project locally, you'll need to set up environment variables. Create a `.env.development` file in the project's root directory and add the following variables:

```env
# Node Path
NODE_PATH=src/

# WordPress API URL
WP_GQL_API=https://wkd.wpengine.com/graphql

# WordPress Staging URL
WP_GQL_API_STAGING=https://wkdstaging.wpengine.com/graphql

# Site Staging URL
SITE_URL=https://wdk-synced-staging.netlify.app/

```

### Install Dependencies

1. Navigate to the project directory:

   ```
   cd wunderkind-gatsby
   ```

2. Install project dependencies:

   ```
   npm install
   ```

### Run the Project

1. Start the development server:

   ```
   npm start
   ```

2. Open your web browser and visit `http://localhost:8000` to see the website running locally.

## Conclusion

If you have any questions, please refer to this documentation or reach out to Abdullah Odeh (Web Developer) or Ana Vega (Senior Manager, Growth Marketing).

For more information about Gatsby, SCSS, GraphQL, and Netlify, please refer to their official documentation.
