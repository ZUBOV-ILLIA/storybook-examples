'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AvailabilityBadge from '@/components/ui/AvailabilityBadge';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import Link from 'next/link';
import { use } from 'react';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const { slug } = use(params);
  
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Товар не найден</h1>
          <p className="text-xl text-gray-600 mb-8">
            К сожалению, запрашиваемый вами товар не существует или был удален.
          </p>
          <Link href="/">
            <Button color="blue" size="big">
              Вернуться в магазин
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: product.price,
      img: product.img,
    });
  };

  return (
    <div className="flex-grow container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold">{product.price}</span>
            <AvailabilityBadge inStock={product.inStock} />
          </div>
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-semibold">Экран</h3>
              <p>{product.screen} ({product.screen_type})</p>
            </div>
            <div>
              <h3 className="font-semibold">Процессор</h3>
              <p>{product.processor}</p>
            </div>
            <div>
              <h3 className="font-semibold">Оперативная память</h3>
              <p>{product.ram}</p>
            </div>
            <div>
              <h3 className="font-semibold">Накопитель</h3>
              <p>{product.storage}</p>
            </div>
            <div>
              <h3 className="font-semibold">Видеокарта</h3>
              <p>{product.video_adapter}</p>
            </div>
            <div>
              <h3 className="font-semibold">Операционная система</h3>
              <p>{product.os}</p>
            </div>
            <div>
              <h3 className="font-semibold">Вес</h3>
              <p>{product.weight}</p>
            </div>
          </div>
          <Button
            color="green"
            size="big"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
          </Button>
        </div>
      </div>
    </div>
  );
} 