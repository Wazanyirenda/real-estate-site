'use client';

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0a192f] mb-8">The Calm Mountain Difference</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Calm Mountain is a reputable property developer and real estate agency with branches in Ndola and Kitwe. We pride ourselves on providing top-notch real estate services to individuals and businesses looking to buy, sell, or rent properties within and outside the region.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our main goal is to provide easy access to land for the Zambian people and ensure the proper management of properties in the country. As the sun arcs across the savannah, we stand sentinel, guardians of dreams, stewards of prosperity, making land ownership accessible to every family.
            </p>
            {/* Removed stats badges per request */}
          </div>
          <div className="relative">
            {/* TODO: Add professional photo of Calm Mountain Properties team working together or company office exterior */}
            <img 
              src="/images/company-team.jpg"
              alt="Calm Mountain Properties Team"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}