'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loader after page loads
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500); // Small delay for smooth transition
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4 animate-pulse">
                <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl">
                    <Image 
                        src="/shivam.jpg" 
                        alt="Shivam Foods" 
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
