'use client';

const brands = [
  "Ariane", "FNS", "Pasabahce", "Ocean", "Superware", "Hawkins", "Clay Craft", "Bharat"
];

const hotels = [
  "Taj Group", "ITC Kohenur", "Hyatt", "Le Meridien", "The Park", "Novotel", "Marriott", "Radisson"
];

export default function Partners() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Column 1: Brand Partners */}
          <div>
            <div className="mb-8">
              <span className="text-accent tracking-widest uppercase text-xs font-bold">Official Distributors</span>
              <h2 className="text-3xl font-bold mt-2">Brand Partners</h2>
              <p className="text-white/70 mt-4 text-sm leading-relaxed">
                We are proud authorized distributors for the world's leading tableware and kitchenware brands, bringing global quality to your doorstep.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {brands.map((brand, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 p-4 text-center rounded-sm border border-white/20 cursor-default hover:-translate-y-1 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="font-medium text-white/90">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Hotel Partners */}
          <div>
            <div className="mb-8">
              <span className="text-accent tracking-widest uppercase text-xs font-bold">Our Clientele</span>
              <h2 className="text-3xl font-bold mt-2">Hotel Partners</h2>
              <p className="text-white/70 mt-4 text-sm leading-relaxed">
                Trusted by the most prestigious names in hospitality. We have equipped the finest kitchens and banquets across the region.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {hotels.map((hotel, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 p-4 text-center rounded-sm border border-white/20 cursor-default hover:-translate-y-1 hover:bg-accent/20 hover:border-accent transition-all duration-300"
                >
                  <span className="font-medium text-white/90">{hotel}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

