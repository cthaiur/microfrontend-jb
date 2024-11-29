import React from 'react';
import SponsorCard from './SponsorCard'; // Assumindo que o SponsorCard está no mesmo diretório

interface Sponsor {
  name: string;
  description: string;
  logoUrl: string;
}

interface SponsorSliderProps {
  sponsors: Sponsor[];
}

const SponsorSlider: React.FC<SponsorSliderProps> = ({ sponsors }) => {
  return (
    <div className="sponsor-slider p-4">
      <h2 className="text-2xl font-semibold mb-4">Nossos Patrocinadores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default SponsorSlider;
