import products, { Product } from '../../data/products';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  return Response.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, price, imageUrl, category }: Partial<Product> = body;

  if (!name || !price || !imageUrl || !category) {
    return new Response('Missing fields', { status: 400 });
  }

  const newProduct: Product = {
    id: uuidv4(),
    name,
    price,
    imageUrl,
    category,
  };

  products.push(newProduct);
  return Response.json(newProduct);
}
