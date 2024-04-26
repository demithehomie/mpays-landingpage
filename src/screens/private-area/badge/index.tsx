import React from 'react';

interface BadgeProps {
  image: string;
  status: 'online' | 'offline';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ image, status, className }) => {
  const statusColor = status === 'online' ? 'green' : 'gray';

  return (
    <div className={`badge ${className}`}>
      <img src={image} alt="Imagem de perfil" className="badge-image" />
      <span className={`badge-status dot dot-${statusColor}`}></span>
    </div>
  );
};

export default Badge;
