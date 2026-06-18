import { Building2, Heart, Search, MapPin } from 'lucide-react';
import { useState } from 'react';

const Directory = () => {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const ngos = [
    { id: 'n1', name: "Hope Foundation India", focus: "Education & Healthcare", location: "New Delhi", established: "1998", verified: true, phone: "+91 9876543210", email: "contact@hopefoundation.in", desc: "Providing holistic healthcare and quality education to marginalized children across Northern India." },
    { id: 'n2', name: "Save The Children", focus: "Emergency Relief", location: "Mumbai", established: "2002", verified: true, phone: "+91 9876543211", email: "info@savethechildren.in", desc: "Global leaders in child rights, focusing on immediate disaster relief and long-term rehabilitation." },
    { id: 'n3', name: "Smile Foundation", focus: "Child Welfare", location: "Bangalore", established: "2005", verified: true, phone: "+91 9876543212", email: "smile@smilefoundation.in", desc: "Empowering children through education, healthcare, and livelihood programs." },
    { id: 'n4', name: "Pratham Education", focus: "Rural Education", location: "Pune", established: "1995", verified: true, phone: "+91 9876543213", email: "info@pratham.org", desc: "Dedicated to improving the quality of education in rural and urban slums." },
    { id: 'n5', name: "CRY India", focus: "Child Rights", location: "Chennai", established: "1979", verified: true, phone: "+91 9876543214", email: "cryinfo@cry.org", desc: "Advocating for fundamental child rights and eradicating child labor." },
    { id: 'n6', name: "Akshaya Patra", focus: "Nutrition", location: "Hyderabad", established: "2000", verified: true, phone: "+91 9876543215", email: "contact@akshayapatra.org", desc: "Operating the world's largest NGO-run mid-day meal program." },
    { id: 'n7', name: "Bachpan Bachao Andolan", focus: "Anti-Trafficking", location: "Delhi", established: "1980", verified: true, phone: "+91 9876543216", email: "info@bba.org", desc: "Rescuing and rehabilitating children from trafficking and forced labor." },
    { id: 'n8', name: "Make-A-Wish India", focus: "Medical Support", location: "Mumbai", established: "1996", verified: true, phone: "+91 9876543217", email: "wish@makeawishindia.org", desc: "Granting wishes to children with critical, life-threatening illnesses." },
    { id: 'n9', name: "Goonj", focus: "Basic Amenities", location: "Delhi", established: "1999", verified: true, phone: "+91 9876543218", email: "mail@goonj.org", desc: "Addressing basic needs like clothing and sanitary pads for rural children." },
    { id: 'n10', name: "Uday Foundation", focus: "Health & Dignity", location: "New Delhi", established: "2007", verified: true, phone: "+91 9876543219", email: "info@udayfoundation.org", desc: "Providing medical support and disaster relief to vulnerable children." }
  ];

  const agencies = [
    { id: 'a1', name: "Central Adoption Agency Delhi", regId: "CAA-DL-001", type: "Govt Recognized", location: "New Delhi", verified: true, phone: "+91 11 2345 6789", email: "admin@caadelhi.gov.in", desc: "Primary government hub for adoptions in the NCR region, fully CARA compliant.", established: "1990" },
    { id: 'a2', name: "Vatsalya Adoption Center", regId: "VAC-MH-023", type: "NGO Partnered", location: "Mumbai", verified: true, phone: "+91 22 8765 4321", email: "contact@vatsalya.org", desc: "Specializes in domestic adoptions and pre-adoption counseling.", established: "1995" },
    { id: 'a3', name: "Kiran Child Welfare", regId: "KCW-KA-011", type: "Special Needs", location: "Bangalore", verified: true, phone: "+91 80 1234 5678", email: "kiran@childwelfare.in", desc: "Focused on finding loving homes for children with special medical needs.", established: "2001" },
    { id: 'a4', name: "Aashraya Foundation", regId: "ASH-UP-005", type: "Govt Recognized", location: "Lucknow", verified: true, phone: "+91 522 9876 5432", email: "help@aashraya.org", desc: "State-recognized facility ensuring rapid and safe placement of abandoned infants.", established: "1988" },
    { id: 'a5', name: "Sunrise Adoption Hub", regId: "SAH-RJ-019", type: "NGO Partnered", location: "Jaipur", verified: true, phone: "+91 141 2345 6789", email: "info@sunrisehub.in", desc: "Extensive network matching prospective parents with orphaned toddlers.", established: "2005" },
    { id: 'a6', name: "Harmony Child Care", regId: "HCC-WB-008", type: "Special Needs", location: "Kolkata", verified: true, phone: "+91 33 8765 4321", email: "harmony@care.org", desc: "Providing therapeutic care and adoption services for traumatized children.", established: "2010" },
    { id: 'a7', name: "Neev Adoption Agency", regId: "NAA-GJ-042", type: "Govt Recognized", location: "Ahmedabad", verified: true, phone: "+91 79 1234 5678", email: "neev@adoption.guj", desc: "Government-backed agency focusing on transparent, digitized matching.", established: "2012" },
    { id: 'a8', name: "Sparsh Child Services", regId: "SCS-TN-033", type: "NGO Partnered", location: "Chennai", verified: true, phone: "+91 44 9876 5432", email: "contact@sparsh.org", desc: "Holistic child welfare and inter-country adoption facilitation.", established: "1998" },
    { id: 'a9', name: "Oasis Care Center", regId: "OCC-KL-091", type: "Govt Recognized", location: "Kochi", verified: true, phone: "+91 484 2345 6789", email: "oasis@kerala.gov.in", desc: "Dedicated facility for the care and placement of surrendered children.", established: "2003" },
    { id: 'a10', name: "Little Steps Adoption", regId: "LSA-PB-077", type: "NGO Partnered", location: "Chandigarh", verified: true, phone: "+91 172 8765 4321", email: "info@littlesteps.in", desc: "Award-winning agency specializing in sibling placements.", established: "2008" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 px-4 pb-20">
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Verified Partner Directory</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Browse our network of CARA-compliant Adoption Agencies and verified Non-Governmental Organizations working towards child welfare.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-slate-800 p-1 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 inline-flex">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              All Partners
            </button>
            <button 
              onClick={() => setFilter('agencies')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === 'agencies' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              Adoption Agencies
            </button>
            <button 
              onClick={() => setFilter('ngos')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === 'ngos' ? 'bg-rose-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              NGOs
            </button>
          </div>
        </div>

        <div className="space-y-12">
          {/* Agencies Section */}
          {(filter === 'all' || filter === 'agencies') && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Registered Adoption Agencies</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agencies.map((agency) => (
                  <div 
                    key={agency.id} 
                    onClick={() => setExpandedId(expandedId === agency.id ? null : agency.id)}
                    className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{agency.name}</h3>
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs">{agency.regId}</span>
                        <span className="text-indigo-600 font-medium">{agency.type}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <MapPin className="w-4 h-4" /> {agency.location}
                      </div>
                    </div>
                    {expandedId === agency.id && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-sm">
                        <p><strong className="text-slate-900 dark:text-white">Phone:</strong> {agency.phone}</p>
                        <p><strong className="text-slate-900 dark:text-white">Email:</strong> {agency.email}</p>
                        <p><strong className="text-slate-900 dark:text-white">Est:</strong> {agency.established}</p>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">{agency.desc}</p>
                        <div className="mt-3 flex gap-2">
                          <button className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200 transition-colors">Contact</button>
                          <button className="bg-slate-100 text-slate-700 px-3 py-1 rounded hover:bg-slate-200 transition-colors">View Profile</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NGOs Section */}
          {(filter === 'all' || filter === 'ngos') && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/50 rounded-xl flex items-center justify-center text-rose-600">
                  <Heart className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Verified Child Welfare NGOs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ngos.map((ngo) => (
                  <div 
                    key={ngo.id} 
                    onClick={() => setExpandedId(expandedId === ngo.id ? null : ngo.id)}
                    className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{ngo.name}</h3>
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 px-2 py-1 rounded text-xs font-medium mb-2">
                        {ngo.focus}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {ngo.location}
                      </div>
                      <div className="text-slate-500">
                        Established: {ngo.established}
                      </div>
                    </div>
                    {expandedId === ngo.id && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-sm">
                        <p><strong className="text-slate-900 dark:text-white">Phone:</strong> {ngo.phone}</p>
                        <p><strong className="text-slate-900 dark:text-white">Email:</strong> {ngo.email}</p>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">{ngo.desc}</p>
                        <div className="mt-3 flex gap-2">
                          <button className="bg-rose-100 text-rose-700 px-3 py-1 rounded hover:bg-rose-200 transition-colors">Donate</button>
                          <button className="bg-slate-100 text-slate-700 px-3 py-1 rounded hover:bg-slate-200 transition-colors">Volunteer</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Directory;
