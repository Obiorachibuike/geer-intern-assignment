import { products } from '../../../data/products';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return new Response('Product not found', { status: 404 });
  }

  products.splice(index, 1);
  return new Response('Product deleted', { status: 200 });
}
