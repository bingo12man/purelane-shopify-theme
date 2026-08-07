# Purelane Shopify Theme Assignment

## Overview

This project rebuilds the supplied Purelane homepage prototype as a Shopify theme using Dawn as the base.

The implementation focuses on the five priority sections requested in the assignment:

1. Hero
2. Shop / Product Grid
3. Best-Selling Combos
4. Bundles
5. Reviews Rail

The theme uses real Shopify products, collections, pricing, inventory, product availability, and cart functionality rather than hardcoded storefront data.

---

## Live Development Store

Store:

`kiran-purelane-assignment.myshopify.com`

Development store admin:

`https://admin.shopify.com/store/kiran-purelane-assignment`

The storefront is password protected as part of the Shopify development-store setup.

---

## GitHub Repository

`https://github.com/bingo12man/purelane-shopify-theme`

---

## Tech Stack

- Shopify
- Liquid
- Dawn
- HTML
- CSS
- JavaScript
- Shopify CLI
- Git / GitHub

---

## Implemented Sections

### Purelane Hero

Features:

- Merchant-editable heading and description
- Primary and secondary CTA
- Product promise badges
- Shopify product selectors
- 1 / 2 / 3 product rotating presentation
- Manual slide controls
- Reduced-motion support
- Responsive mobile layout

Files:

- `sections/purelane-hero.liquid`
- `snippets/purelane-hero-product.liquid`
- `assets/purelane-hero.css`
- `assets/purelane-hero.js`

### Customer Reviews

Features:

- Merchant-editable review blocks
- Review rating
- Review heading and content
- Customer and product information
- Verified-buyer state
- Horizontal mobile rail
- Previous / next controls
- Auto-scroll
- Pause on interaction
- Reduced-motion support

Files:

- `sections/purelane-reviews.liquid`
- `snippets/purelane-review-card.liquid`
- `assets/purelane-reviews.css`
- `assets/purelane-reviews.js`

### Best-Selling Combos

Features:

- Real Shopify bundle products
- Merchant-configurable included products
- Savings calculated from Shopify price data
- Product benefits
- Featured bundle state
- Swipeable mobile rail

Files:

- `sections/purelane-combos.liquid`
- `snippets/purelane-combo-card.liquid`
- `assets/purelane-combos.css`

### Bundle Pricing Tiers

Features:

- Starter / Most Popular / Whole Home tiers
- Merchant-editable pricing
- Product selectors
- Feature lists
- Featured-tier styling
- Responsive vertical mobile layout

Files:

- `sections/purelane-bundles.liquid`
- `snippets/purelane-bundle-tier.liquid`
- `assets/purelane-bundles.css`

### Product Grid

Features:

- Shopify collection selector
- Real prices and compare-at prices
- Product badges
- Functional Add to Cart
- Sold-out handling
- Missing-image fallback
- Long-title handling
- Two-column mobile layout

Files:

- `sections/purelane-product-grid.liquid`
- `snippets/purelane-product-card.liquid`
- `assets/purelane-product-grid.css`

---

## Product Test Cases

The development store includes deliberate edge cases:

- Sold-out product
- Product with no image
- Product with a long title
- Products with compare-at prices
- Bundle products
- Products across Kitchen, Bathroom, Laundry and Hard Water collections

These were used to verify the resilience of the theme components.

---

## Collections

Configured Shopify collections include:

- Bestsellers
- Kitchen
- Bathroom
- Laundry
- Hard Water
- Full Range
- Best Selling Combos

---

## Local Development

Requirements:

- Node.js
- Shopify CLI
- Git
- Shopify development store access

Clone:

```bash
git clone https://github.com/bingo12man/purelane-shopify-theme.git
cd purelane-shopify-theme