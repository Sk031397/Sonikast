'use client';

export const DistrictCard = ({ title, description, image }:{title:string, description:string,image:string }) => (
    <div className="group relative overflow-hidden rounded-xl">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: 'scale(1.0)',
          transition: 'transform 0.5s ease-in-out'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      
      {/* Content */}
      <div className="relative p-6 h-64 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-10px]">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
      </div>
    </div>
  );
  