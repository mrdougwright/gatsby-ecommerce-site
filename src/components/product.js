import React from 'react'
import { Box, Button, Grid, Image } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

function Product({ product }) {
  const { name, image, currency, description, price, tags } = product
  const { addItem } = useShoppingCart()

  return (
    <Box sx={{ maxWidth: '768px', margin: '0 auto' }}>
      <Grid sx={{ color: 'primary', fontWeight: 'heading' }} columns={[1, 2]}>
        <Box>
          <Image alt={`${name}`} src={image} />
        </Box>
        <Box
          as="section"
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box as="p">{description}</Box>
          <Box as="p">{formatCurrencyString({ value: price, currency })}</Box>
        </Box>
        <Button aria-label={`Add ${name} to cart`} onClick={() => addItem(product)}>
          Add to Cart
        </Button>
      </Grid>
    </Box>
  )
}

export default Product