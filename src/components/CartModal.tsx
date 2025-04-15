'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const total = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\s+/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!mounted) return null;

  return createPortal(
    <>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h1 className="text-3xl font-bold">Корзина</h1>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-xl mb-4">Ваша корзина пуста</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      {cart.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-4 p-4 border-b"
                        >
                          <div className="relative w-24 h-24">
                            <Image
                              src={item.img}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-gray-600">{item.price}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                          <Button
                            color="red"
                            size="small"
                            onClick={() => removeFromCart(item.name)}
                          >
                            Удалить
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg h-fit">
                      <h2 className="text-xl font-bold mb-4">Итого</h2>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                          <span>Товары ({totalItems})</span>
                          <span>{total.toLocaleString()} грн</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                          <span>Всего</span>
                          <span>{total.toLocaleString()} грн</span>
                        </div>
                      </div>
                      <Button color="green" size="big" className="w-full">
                        Оформить заказ
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>,
    document.body
  );
} 