
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508057198894-247b23fe5ade')] bg-cover bg-center opacity-30"></div>
        <div className="watch-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About JustWatches</h1>
            <p className="text-xl">
              The premier destination for luxury timepieces since 1998.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="watch-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                JustWatches was founded with a singular vision: to provide watch enthusiasts with access to the world's finest timepieces and exceptional service. What began as a small boutique in New York has grown into a global destination for watch collectors and aficionados.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, James Robertson, a third-generation watchmaker, established JustWatches based on values of authenticity, expertise, and passion for horology. These principles continue to guide us today as we curate our collection and serve our customers.
              </p>
              <p className="text-gray-700">
                Over two decades later, we remain committed to offering only the highest quality watches, representing the pinnacle of Swiss and international craftsmanship, along with unparalleled customer service.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1539874754764-5a96559165b0" 
                  alt="Watch workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="watch-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-700">
                We guarantee the authenticity of every timepiece we sell. Our expert authentication process ensures you receive only genuine luxury watches.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-gray-700">
                Our team consists of certified watchmakers and horological experts with decades of experience in the luxury watch industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We deliver an exceptional shopping experience with personalized service and attention to detail at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="watch-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "James Robertson",
                title: "Founder & CEO",
                image: "photo-1560250097-0b93528c311a"
              },
              {
                name: "Emily Parker",
                title: "Head Watchmaker",
                image: "photo-1494790108377-be9c29b29330"
              },
              {
                name: "Michael Chen",
                title: "Director of Acquisitions",
                image: "photo-1500648767791-00dcc994a43e"
              },
              {
                name: "Sophia Williams",
                title: "Customer Experience Director",
                image: "photo-1580489944761-15a19d654956"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={`https://images.unsplash.com/${member.image}`} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="watch-container text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Excellence in Horology</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover our curated collection of luxury timepieces from the world's most prestigious brands.
          </p>
          <Link 
            to="/watches" 
            className="inline-block bg-gold hover:bg-amber-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
