import { Products } from './constrants';

function stripProduct(product: Products) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
  };
}

async function fetchJson(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`request failed: ${response.status}`);
  }
  const product = await response.json();
}

export async function getProduct(id: string) {
  const response = await fetch(`http://localhost:1337/products/${id}`);
  if (!response.ok) {
    throw new Error(`request failed: ${response.status}`);
  }
  const product = await response.json();
  return stripProduct(product);
}

export async function getProducts() {
  const response = await fetch('http://localhost:1337/products');
  const products = await response.json();
  return products.map(stripProduct);
}
