'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';
import AvailabilityBadge from './ui/AvailabilityBadge';
import { useCart } from '@/context/CartContext';

interface Product {
  name: string;
  price: string;
  img: string;
  inStock?: boolean;
  slug: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      name: product.name,
      price: product.price,
      img: product.img,
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-48">
          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </Link>
      <div className="pt-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">{product.price}</span>
          <AvailabilityBadge inStock={product.inStock ?? true} />
        </div>
        <Button 
          color="green" 
          size="normal" 
          className="w-full"
          onClick={handleBuyClick}
        >
          BUY
        </Button>
      </div>
    </div>
  );
};

export default ProductCard; 