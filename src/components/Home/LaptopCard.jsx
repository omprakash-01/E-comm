import Image from "next/image";
import {DollarSign,  ShoppingCart, Cpu, HardDrive, Monitor } from "lucide-react";

export default function LaptopCard({ laptop }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group h-[580px]">
      <div className="relative w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100  ">
        <Image
          src={laptop.image}
          alt={laptop.laptopName}
          fill
          className="object-contain p-3"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
              {laptop.laptopName}
            </h3>
            <p className="text-lg capitalize text-gray-500 font-medium">
              {laptop.brand}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold flex items-center justify-end space-x-1">
              <DollarSign className="text-green-600" size={20} />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {laptop.price}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center p-2 bg-blue-50 rounded-lg">
            <Cpu className="w-4 h-4 text-blue-600 mr-2" />
            <div>
              <div className="text-xs text-gray-500">RAM</div>
              <div className="text-sm font-semibold text-gray-900">
                {laptop.ram} GB
              </div>
            </div>
          </div>
          <div className="flex items-center p-2 bg-purple-50 rounded-lg">
            <HardDrive className="w-4 h-4 text-purple-600 mr-2" />
            <div>
              <div className="text-xs text-gray-500">Storage</div>
              <div className="text-sm font-semibold text-gray-900">
                {laptop.ssd} GB
              </div>
            </div>
          </div>
          <div className="flex items-center p-2 bg-green-50 rounded-lg">
            <Monitor className="w-4 h-4 text-green-600 mr-2" />
            <div>
              <div className="text-xs text-gray-500">OS</div>
              <div className="text-sm font-semibold text-gray-900">
                {laptop.os}
              </div>
            </div>
          </div>
          <div className="flex items-center p-2 bg-orange-50 rounded-lg">
            <Cpu className="w-4 h-4 text-orange-600 mr-2" />
            <div>
              <div className="text-xs text-gray-500">GPU</div>
              <div className="text-sm font-semibold text-gray-900">
                {laptop.gpu} RTX
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
