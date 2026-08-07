# Metafields

## Current implementation

This implementation does not require custom Shopify metafields for the five core assignment sections.

The theme currently uses native Shopify data for:

- Product title
- Product images
- Price
- Compare-at price
- Availability
- Inventory
- Vendor
- Product type
- Tags
- Product URL
- Selected/default variant

Additional homepage content is managed through Shopify section settings and blocks.

## Why metafields were not required

For this assignment, section settings were sufficient for merchant-editable content such as:

- Product benefits
- Combo descriptions
- Bundle labels
- Bundle pricing presentation
- Review text
- Review author
- Review product name
- CTA labels and links

This keeps setup simple for the development store while still making the homepage configurable through the Theme Editor.

## Metafields I would add for production

For a production implementation, I would move some repeated structured content into Shopify metafields or metaobjects.

### Product benefit

Namespace/key:

`custom.short_benefit`

Type:

Single line text

Example:

`Cuts grease instantly`

Used for:

- Combo cards
- Product cards
- Bundle product summaries

### Product badge

Namespace/key:

`custom.badge`

Type:

Single line text

Examples:

- Best seller
- Top rated
- New

Currently these states are handled with product tags.

### Review rating

Namespace/key:

`reviews.rating`

Type:

Decimal number

Example:

`4.8`

### Review count

Namespace/key:

`reviews.count`

Type:

Integer

Example:

`237`

This would replace demo/static rating presentation if a real review provider was not being used.

### Hero image

Namespace/key:

`custom.hero_image`

Type:

File reference

Currently the Hero uses the second product image when available.

A dedicated hero-image metafield would be more explicit and safer for production because image ordering would no longer control the Hero presentation.

### Product benefit list

Namespace/key:

`custom.benefits`

Type:

List of single line text

Possible values:

- Plant powered
- Safe for kids and pets
- Zero harsh chemicals

## Metaobjects for future improvement

For a larger production implementation, I would consider Shopify Metaobjects for:

### Review

Fields:

- Customer name
- Rating
- Review heading
- Review body
- Product
- Verified status

### Bundle definition

Fields:

- Bundle title
- Included products
- Bundle price
- Compare-at price
- Badge
- Product benefits
- Featured state

This would allow the same structured content to be reused across multiple templates and sections rather than storing everything directly inside the homepage section configuration.