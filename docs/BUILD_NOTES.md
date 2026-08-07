# Build Notes

## Overview

I rebuilt the supplied Purelane prototype as reusable Shopify sections on top of a clean Dawn theme.

The five required sections implemented are:

1. Hero
2. Shop / Product Grid
3. Best-Selling Combos
4. Bundles
5. Reviews Rail

The store uses real Shopify products, collections, pricing, inventory and product availability rather than hardcoded product data.

## What I flagged in the original prototype

The supplied HTML works well as a visual prototype, but it is not structured for production Shopify use.

Main issues I identified:

- Product titles, pricing, review content and bundle content were hardcoded directly in HTML.
- Product artwork was embedded as base64 SVG data inside the stylesheet.
- CSS and JavaScript for the entire homepage lived inside one file.
- Product buttons were presentation-only rather than connected to Shopify cart functionality.
- Repeated product/card structures were duplicated instead of being reusable components.
- Content could not be edited safely by a merchant through the Shopify Theme Editor.
- Animation logic needed additional handling for section reloads, keyboard interaction and reduced-motion preferences.
- The implementation needed explicit handling for sold-out products, products without images and long product titles.

## What I changed and why

### Shopify data

I created real Shopify products and collections and connected the sections to Shopify data.

The implementation supports:

- Real Shopify prices and compare-at prices
- Inventory and sold-out states
- Product URLs
- Functional Add to Cart
- Product images
- Missing-image fallback
- Long product titles

### Reusable Liquid

Shared UI was extracted into reusable snippets including:

- Product card
- Hero product
- Combo card
- Bundle tier
- Review card

This avoids duplicating markup and keeps related sections consistent.

### Merchant-editable sections

The five required sections use Shopify section settings and blocks so content can be updated without editing Liquid.

Merchants can change or reorder:

- Hero products and messaging
- Product collections
- Combo products
- Bundle tiers
- Reviews
- CTA labels and links
- Pricing presentation
- Product benefits and descriptions

### Responsive behaviour

I tested the homepage from 375px upward.

Mobile behaviour includes:

- Two-column product grid
- Horizontal swipe rails for reviews and combos
- Vertically stacked bundle tiers
- Responsive hero layout
- Wrapped long product titles
- Mobile-safe product buttons

### Accessibility

I added:

- Semantic section/card markup
- Accessible labels
- Visible focus states
- Keyboard-operable carousel controls
- Reduced-motion handling
- Disabled behaviour for sold-out products
- Image alt text and product-image fallbacks

### Performance

I kept JavaScript section-specific and lightweight.

Images use Shopify image URLs and responsive image widths rather than shipping large fixed assets to every viewport.

The original embedded product artwork was extracted from the prototype and converted into reusable product media rather than leaving large base64 assets duplicated through the rendered page.

## QA completed

Tested:

- Desktop layout
- 375px mobile layout
- Hero rotation
- Reviews navigation and auto-scroll
- Combo horizontal scrolling
- Bundle responsive stacking
- Two-column mobile product grid
- Add to Cart
- Sold-out state
- Missing product image
- Long product title
- Theme Editor section/block editing and reordering

## What I would improve with more time

- Complete the remaining bonus sections from the supplied prototype.
- Fine-tune visual spacing and typography against the reference at additional viewport sizes.
- Add Shopify metaobjects/metafields for richer structured review and bundle metadata.
- Implement a full interactive mix-and-match bundle builder rather than linking bundle tiers to product/collection flows.
- Run a final Lighthouse/Core Web Vitals pass and optimize any remaining render-blocking assets.
- Add automated visual regression tests for key desktop and mobile breakpoints.