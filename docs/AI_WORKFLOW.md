# AI Workflow

## How AI was used

AI was used as a development assistant during the rebuild of the Purelane prototype into a Shopify Dawn theme.

I used AI for:

- Breaking the assignment into implementation modules
- Translating the supplied static HTML into Shopify Liquid sections
- Creating reusable Liquid snippets
- Drafting CSS for the Purelane visual system
- Writing lightweight JavaScript for hero rotation and review scrolling
- Planning Shopify product and collection structure
- Identifying edge cases to test
- Debugging Git, Shopify CLI and local environment issues
- Reviewing responsive screenshots and suggesting targeted fixes
- Drafting documentation

## Where AI helped most

### 1. Converting static HTML into reusable Shopify architecture

The supplied page was a single visual prototype with hardcoded content.

AI helped map repeated interface patterns into reusable Shopify components such as:

- `purelane-product-card.liquid`
- `purelane-hero-product.liquid`
- `purelane-combo-card.liquid`
- `purelane-bundle-tier.liquid`
- `purelane-review-card.liquid`

This accelerated the transition from static markup to merchant-editable Shopify sections.

### 2. Shopify section schemas

AI helped structure section settings and blocks so a merchant can configure:

- Collections
- Products
- Hero messaging
- Combo contents
- Bundle tiers
- Reviews
- CTA labels and links

I reviewed and tested these through the Shopify Theme Editor.

### 3. Responsive QA

AI was useful for creating a systematic mobile QA checklist.

I tested the site at 375px and verified:

- Hero layout
- Review scrolling
- Combo scrolling
- Bundle stacking
- Two-column product cards
- Missing-image fallback
- Sold-out state
- Long product titles
- Add to Cart behaviour

## AI mistakes and corrections

AI output was not accepted blindly.

### Product image conversion

An early suggestion used macOS Quick Look (`qlmanage`) to convert the embedded SVG product assets to PNG.

That produced incorrectly rendered/cropped images.

I identified the visual issue in the browser and replaced that workflow with proper SVG conversion using CairoSVG and the Cairo native dependency.

### Product media selection

During testing, incorrect images were temporarily uploaded as hero media.

I verified the source assets manually and corrected the media order so:

- Featured product media is used by product cards
- The second product image is used for the Hero
- The Hero falls back to the featured image when a second image is unavailable

### Shopify template placement

The custom Purelane sections were initially added inside the Header section group rather than the Home page template.

I caught this in Theme Editor and moved the sections into the correct Template group.

### Mobile product grid

An early mobile rule collapsed product cards to one column below 420px.

After comparing with the reference prototype, I removed that rule and preserved the intended two-column mobile layout.

### Currency formatting

The development store initially displayed USD/Rs formatting.

I changed the store currency to INR and adjusted product-card output to match the supplied ₹ price presentation.

## Validation approach

For AI-generated code, I validated the output through:

1. Local Shopify CLI preview
2. Shopify Theme Editor
3. Desktop visual review
4. 375px responsive testing
5. Functional cart testing
6. Sold-out product testing
7. Missing-image testing
8. Long-title testing
9. Git status and incremental commits

## General approach

AI was used to speed up implementation and debugging, not as a replacement for verification.

Every important implementation decision was tested against:

- The supplied Purelane HTML reference
- Actual Shopify product data
- Theme Editor behaviour
- Responsive browser output
- Real storefront interactions