# Dummy Data for Amazon Clone

## Product Images

- https://m.media-amazon.com/images/P/1537713949.01._SCLZZZZZZZ_SX500_.jpg

## Files
- **products.ts**: A list of products having:
  - id
  - title
  - image
  - avgRating
  - ratings
  - price
  - oldPrice (optional)
- **product.ts**: Product details
  - id
  - title
  - *description*
  - image
  - *images* (array of images)
  - *options* (array if possible variation/options)
  - avgRating
  - ratings
  - price
  - oldPrice (optional)
- **cart.ts**: Items in the cart
  - id
  - item
  - quantity
  - option (selected option)