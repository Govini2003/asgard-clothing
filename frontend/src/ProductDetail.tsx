import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const productData = [
  {
    id: '1',
    name: 'Product Name 1',
    price: 'LKR 5,000',
    image: '/assets/1.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    color: 'BLACK/WHITE',
    description: 'This is a sample description for Product 1.'
  },
  {
    id: '2',
    name: 'Product Name 2',
    price: 'LKR 6,000',
    image: '/assets/2.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    color: 'BLACK/WHITE',
    description: 'This is a sample description for Product 2.'
  },
  {
    id: '3',
    name: 'Product Name 3',
    price: 'LKR 4,500',
    image: '/assets/3.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    color: 'BLACK/WHITE',
    description: 'This is a sample description for Product 3.'
  },
  {
    id: '4',
    name: 'Product Name 4',
    price: 'LKR 5,500',
    image: '/assets/4.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    color: 'BLACK/WHITE',
    description: 'This is a sample description for Product 4.'
  },
  {
    id: '5',
    name: 'Product Name 5',
    price: 'LKR 4,800',
    image: '/assets/5.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    color: 'BLACK/WHITE',
    description: 'This is a sample description for Product 5.'
  },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="mb-6 text-sm text-gray-500 hover:underline">&larr; Back</button>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex justify-center items-center">
          <img src={product.image} alt={product.name} className="rounded-xl aspect-square w-full max-w-md object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-xl font-semibold mb-4">{product.price}</div>
          <div className="mb-2">AVAILABLE COLOR : {product.color}</div>
          <div className="mb-4">
            <div className="mb-1">AVAILABLE SIZE :</div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button key={size} className="px-3 py-1 border rounded-full hover:bg-black hover:text-white transition-colors">{size}</button>
              ))}
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-xl font-semibold mt-4 hover:bg-gray-800 transition-colors">ADD TO CART</button>
          <div className="mt-8 text-gray-700">
            <h2 className="font-semibold mb-2">Product Details</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 