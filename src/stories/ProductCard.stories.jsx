import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';

export default {
  title: 'Example/ProductCard',
  component: ProductCard,
};
  
const Template = (args) => <ProductCard {...args} />;
  
export const RenderCard = Template.bind({});
RenderCard.args = {
  image: 'https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_10.jpg.rendition.480.480.jpg',
  name: 'name test', 
  description: 'description test', 
  price: 17.99
};