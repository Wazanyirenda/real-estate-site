'use client';

interface Filters {
  location: string;
  priceRange: string;
  plotSize: string;
  paymentPlan: string;
}

interface FiltersProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function ListingsFilter({ filters, setFilters }: FiltersProps) {
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev: Filters) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      priceRange: '',
      plotSize: '',
      paymentPlan: ''
    });
  };

  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#0a192f] mb-6">Filter Properties</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="relative">
                <button 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left cursor-pointer hover:border-[#f7b733] transition-colors pr-8"
                  onClick={() => {
                    const dropdown = document.getElementById('location-dropdown');
                    dropdown?.classList.toggle('hidden');
                  }}
                >
                  {filters.location || 'Select Location'}
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                </button>
                <div id="location-dropdown" className="hidden absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                  <div className="py-2">
                    {['', 'Kabwe', 'Kitwe', 'Ndola'].map(location => (
                      <div 
                        key={location}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          handleFilterChange('location', location);
                          document.getElementById('location-dropdown')?.classList.add('hidden');
                        }}
                      >
                        {location || 'All Locations'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="relative">
                <button 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left cursor-pointer hover:border-[#f7b733] transition-colors pr-8"
                  onClick={() => {
                    const dropdown = document.getElementById('price-dropdown');
                    dropdown?.classList.toggle('hidden');
                  }}
                >
                  {filters.priceRange || 'Select Price Range'}
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                </button>
                <div id="price-dropdown" className="hidden absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                  <div className="py-2">
                    {['', 'Under K30,000', 'K30,000 - K50,000', 'K50,000 - K70,000', 'Above K70,000'].map(price => (
                      <div 
                        key={price}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          handleFilterChange('priceRange', price);
                          document.getElementById('price-dropdown')?.classList.add('hidden');
                        }}
                      >
                        {price || 'All Prices'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Plot Size</label>
              <div className="relative">
                <button 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left cursor-pointer hover:border-[#f7b733] transition-colors pr-8"
                  onClick={() => {
                    const dropdown = document.getElementById('size-dropdown');
                    dropdown?.classList.toggle('hidden');
                  }}
                >
                  {filters.plotSize || 'Select Plot Size'}
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                </button>
                <div id="size-dropdown" className="hidden absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                  <div className="py-2">
                    {['', '30x20', '32x25', '40x20', '40x30'].map(size => (
                      <div 
                        key={size}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          handleFilterChange('plotSize', size);
                          document.getElementById('size-dropdown')?.classList.add('hidden');
                        }}
                      >
                        {size || 'All Sizes'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Plan</label>
              <div className="relative">
                <button 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left cursor-pointer hover:border-[#f7b733] transition-colors pr-8"
                  onClick={() => {
                    const dropdown = document.getElementById('payment-dropdown');
                    dropdown?.classList.toggle('hidden');
                  }}
                >
                  {filters.paymentPlan || 'Select Payment Plan'}
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                </button>
                <div id="payment-dropdown" className="hidden absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                  <div className="py-2">
                    {['', 'Cash', '6 Months', '12 Months', '24 Months'].map(plan => (
                      <div 
                        key={plan}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          handleFilterChange('paymentPlan', plan);
                          document.getElementById('payment-dropdown')?.classList.add('hidden');
                        }}
                      >
                        {plan || 'All Plans'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button 
              onClick={clearFilters}
              className="text-[#f7b733] hover:text-[#e6a82d] transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
            <div className="text-sm text-gray-600">
              Showing results for your selected filters
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}