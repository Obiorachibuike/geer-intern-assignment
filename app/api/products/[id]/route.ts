import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data/products'; // Adjust path as needed

// GET /api/products/:id
export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop(); // extract ID from path
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}

// DELETE /api/products/:id
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();
  const index = products.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    return new Response('Product not found', { status: 404 });
  }

  products.splice(index, 1);
  return new Response('Product deleted', { status: 200 });
}