import { cn } from '@/lib/utils';

interface AvailabilityBadgeProps {
  inStock: boolean;
  className?: string;
}

const AvailabilityBadge = ({ inStock, className }: AvailabilityBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-block px-2 py-1 text-sm font-medium border rounded-md',
        {
          'text-green-600 border-green-600': inStock,
          'text-red-600 border-red-600': !inStock,
        },
        className
      )}
    >
      {inStock ? 'In stock' : 'Available on request'}
    </span>
  );
};

export default AvailabilityBadge; 