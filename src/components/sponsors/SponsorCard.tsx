import React from 'react';

interface Sponsor {
  name: string;
  description: string;
  logoUrl: string;
}

interface SponsorCardProps {
  sponsor: Sponsor;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
  return (
    <div className="sponsor-card p-4 border rounded-lg text-center">
      <img
        src={sponsor.logoUrl}
        alt={sponsor.name}
        className="w-32 h-32 object-contain mb-4 mx-auto rounded-lg"
      />
      <h4 className="text-xl text-gray-100 font-semibold">{sponsor.name}</h4>
      <p className="text-sm text-gray-100">{sponsor.description}</p>
    </div>
  );
};

export default SponsorCard;
