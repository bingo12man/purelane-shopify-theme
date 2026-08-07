# Known Limitations

## Scope

The assignment prioritizes five sections:

1. Hero
2. Shop / Product Grid
3. Best-Selling Combos
4. Bundles
5. Reviews Rail

Those sections are implemented.

The remaining sections from the supplied static prototype were treated as bonus work and were not fully rebuilt.

## Bundle builder

The bundle pricing tiers and pre-built combo products are represented using real Shopify products and configurable section blocks.

However, this submission does not include a production-grade interactive mix-and-match bundle engine.

The "Build this box" CTA currently routes customers to the product collection flow rather than dynamically constructing a custom bundle in the cart.

With more time, I would implement this using Shopify Bundles, line-item properties, or an appropriate bundle application/API depending on the store requirements.

## Reviews

The review rail is merchant-editable and includes rating, review text, reviewer and product information.

The review content currently comes from section blocks rather than a third-party review provider.

For production, I would integrate a review platform or structured Shopify metaobjects.

## Product ratings

Product cards do not currently display live review-provider ratings.

The reference prototype contains static review counts, but I chose not to represent those as live Shopify review data.

## Hero media

The Hero currently uses the second product media item as its hero artwork when available.

A production implementation would use a dedicated product metafield such as:

`custom.hero_image`

This would avoid relying on media ordering.

## Product artwork

The supplied prototype contained simplified SVG product artwork embedded inside its CSS.

Those assets were extracted and converted for use as Shopify product media.

Production assets would normally be supplied directly by the merchant or design team.

## Bonus sections

The following prototype sections were not fully implemented as custom Shopify sections:

- Ingredients
- Pillars / How it works
- Product proof
- Full product range shelf
- Why bundles beat buying single
- Bundle category cards
- Trust bar
- Newsletter styling
- Custom footer treatment
- Sticky bundle CTA
- Scroll-driven scene/background effects

These would be the next implementation priority after the required sections.

## Visual parity

The five priority sections closely follow the supplied visual direction, but some typography, spacing, animation and imagery may differ slightly from the static prototype.

Further visual-regression testing across more viewport sizes would improve final pixel-level matching.

## Testing

The implementation was manually tested on desktop and at a 375px mobile viewport.

Additional device and browser testing would be appropriate before production deployment.