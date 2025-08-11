import React from "react";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  features,
}) => {
  return (
    <div className="group relative w-full h-full flex flex-col">
      {/* Border wrapper */}
      <div className="relative h-full flex flex-col rounded-2xl overflow-hidden hover:drop-shadow-[0_0_20px_#194EFF] transition-shadow duration-300">
        {/* Rotating animated border */}
        <div className="absolute inset-0 z-0 bg-[conic-gradient(#194EFF_20deg,transparent_120deg)] opacity-0 group-hover:opacity-100 group-hover:animate-rotate transition-opacity duration-500 rounded-2xl" />

        {/* Padded border spacing */}
        <div className="relative z-10 p-[1px] h-full flex flex-col">
          {/* Card content */}
          <div className="flex flex-col h-full rounded-2xl bg-blue border border-white/10 p-6 text-white transition-all duration-300">
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={512}
                height={300}
                className="rounded-xl object-cover w-full"
              />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-3">{title}</h4>
            <p className="text-base text-white/80 mb-4 leading-relaxed flex-grow">
              {description}
            </p>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Image
                    src="/images/check.svg"
                    alt="Check Icon"
                    width={16}
                    height={16}
                  />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
