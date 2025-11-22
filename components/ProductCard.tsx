// components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <Link href={`/products/${product.id}`}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>{product.name}</h2>
                    <p className="text-gray-700 mb-2">₹ {product.price.toLocaleString()}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
