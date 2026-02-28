import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Map() {
  const [selectedProperty, setSelectedProperty] = useState(1);
  const [activeFilter, setActiveFilter] = useState('Price');

  const properties = [
    {
      id: 1,
      name: "Green Villa PG",
      price: "8k",
      fullPrice: "₹8,000",
      location: "Okhla Head",
      distance: "200m",
      rating: "4.2",
      type: "Boys",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWLy8gguEy-kGxpiIrEL_oq0H7ecyKDCSxMY5Cp_fSaouSl-6pxlEHyCFXbxa9JX7zKdXD-aj9vl1T6samzYfVn7vLiuICfJo_Uoc5fp9oacoAGlj6h_lT4XyCENW-jSjI6CxF8-UF2vOtL-_fR3eU6wVoktGRCsRIQ4g9RiX36IcGVTbyS74FaWI39CdUCHMOUKOJCgACIH1qK3ivs17xE4SbKEYtJzvb0alEBLt73CqTdj5A0uibJv6WvptdG9XsqVtbIh9sy90",
      top: "50%",
      left: "50%",
      amenities: ["WiFi", "Power Backup"]
    },
    {
      id: 2,
      name: "Sunrise Student Home",
      price: "6.5k",
      fullPrice: "₹6,500",
      location: "Batla House",
      distance: "500m",
      rating: "4.5",
      type: "Girls",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHFRsFH9zV_Ex62dyBhErXztosHdh3Fm-GEQCQea9J7zAxmOnOwkaiQh2ruyQtkuz0oZ_77sr99SBPq3y6U67Az9t7_N76P7cesX6EYd09v1A1R5guur-L6WufAS5PrqM0N95GkY9RwcxJDjDbsgAvN63oz8uHXZBvEWHgy-5Eb2Rc9sVzuQzA2MMlNY28lc8rEWbwdohxn5XX1MKrnRljFPRO_JTCcJaN10ftKaqHz9et4HuXGK58oSSULWiMH7KweZb6k54M3yI",
      top: "32%",
      left: "22%",
      amenities: ["AC", "Mess"]
    },
    {
      id: 3,
      name: "Jamia Residency",
      price: "10k",
      fullPrice: "₹10,000",
      location: "Zakir Nagar",
      distance: "800m",
      rating: "4.0",
      type: "Boys",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw5FMm80JOn6rQPQCt5uqrH9M4DMpp6b5QnCw8fgz9F8d49NcFKTMWrU_dFTbq6cFwTZCmGZxq9M19PhL2d9rniujHUqkUo3CgypI0qaBbT-a7b1qqsy3_-44ayhWHvJfheceavOBYIHeH2aEf9FNsc7brZ7-LP9VhQWgEyWZV_iJaENAhd55CJFwQnGzK5OaxuRhJJzdN-Vuqju4p79Oj9PJi9P_XR-T3PbvjmMoyxxvbnpXY3q0riNCGEHvPQB3-SwkqHvR9gDY",
      top: "42%",
      left: "72%", // Adjusted right to left
      amenities: ["Gym", "WiFi"]
    },
    {
      id: 4,
      name: "Okhla Vihar Heights",
      price: "7.2k",
      fullPrice: "₹7,200",
      location: "Okhla Vihar",
      distance: "1.2km",
      rating: "3.8",
      type: "Girls",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCXtY0gsFD1TtOGJH-kgctYroT_JgJ2oVP7prGJB9WT2xYgr8hi-mlhEJeufx06shUcrRn-WG1ZXeJKI3TJx4eatvZNFv3okaiifOLm6FxWpjajqxRx7vPrmpDfWoYGqxKqJaCjejSr6JMn6-l83dK_2CK8uOrAFiv-wrvfMuy6uGNWRLT1X97HllLGV1Ox_n8FF5euHqOaLP3N8TlL8EmXzRm8wX-aJC-uuqgl1R7MfjgvqelUdt7tQaNK1uQIEvtlTXUE2PKYvU",
      top: "55%",
      left: "32%",
      amenities: ["Laundry", "Security"]
    },
    {
      id: 5,
      name: "River View PG",
      price: "12k",
      fullPrice: "₹12,000",
      location: "Kalindi Kunj",
      distance: "2.5km",
      rating: "4.8",
      type: "Unisex",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9wAlsizmbyci8p6Ps-W30li7hFORDItFa-X5uC-amba7zG3jpW2Z4OtWyDqePcqk30LRDBag-pvLeEZzsgA9n1yYPar1dLyrvV5rK97l_wE3iCCuPAB8Ehce-tRBAdqIFEr_T3IpaFcrMTgruMeHIW_s4e09_hCzpzsDzglD286qk67LZSeORi_6kGZbt2fvaVdKd1gUNcmBOIc_JrLg8IPVphdK1BjgFDyAAyxHBVXJ-gyr3tLev77wbowhzWsgldvZDi0GjWOA",
      top: "28%",
      left: "82%", // Adjusted right to left
      amenities: ["AC", "Gym", "Food"]
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased overflow-hidden h-screen w-full flex flex-col text-text-main dark:text-white">
      <div className="relative flex-1 w-full h-full overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="Map of Jamia Millia Islamia area" data-location="New Delhi" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6gmcPWYp31LoAdZW7eQUHrZTGAP0fB8fW-C_9kmIxeZsh_XtNRA5euwMaqJWT10x0tOjEaaLywp1_TPyLFVIlRHgVk0rXa3AoEKeqyx2okLKdIot699xmAhs_ZKME3OaHn8xVyrL2d-FmBbd1lxRiT81-d6Pws_vR0Yy-dWUM4ZUvMHjdXXDHNReJW0pUCOuN3JXw1rtApPwXZWd1XelY4IoTWmM63R1BQcdqDEi68tZav7NJ_EcaLJYdL5RKY1BjRBPcrlUCxrI")'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"></div>
          
          {/* Map Markers */}
          {properties.map((prop) => (
            <div 
              key={prop.id}
              className={`absolute flex flex-col items-center z-20 hover:z-30 transition-all duration-300 cursor-pointer ${selectedProperty === prop.id ? 'z-40 scale-110' : 'opacity-90 hover:scale-110'}`}
              style={{ top: prop.top, left: prop.left }}
              onClick={() => setSelectedProperty(prop.id)}
            >
              <div className={`${selectedProperty === prop.id ? 'bg-primary text-white border-white dark:border-surface-dark' : 'bg-white dark:bg-surface-dark text-text-main dark:text-white border-gray-100 dark:border-gray-700'} font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border-2 transform transition-colors relative`}>
                ₹{prop.price}
                <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r-2 border-b-2 ${selectedProperty === prop.id ? 'bg-primary border-white dark:border-surface-dark' : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-700'}`}></div>
              </div>
              {selectedProperty === prop.id && (
                <div className="mt-2 w-2 h-2 bg-black/20 rounded-full blur-[2px]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Top Search Bar */}
        <div className="absolute top-0 left-0 right-0 z-40 flex flex-col gap-3 p-4 pt-14 bg-gradient-to-b from-background-light/90 via-background-light/50 to-transparent dark:from-background-dark/90 dark:via-background-dark/50">
          <div className="flex w-full items-center gap-3">
            <div className="relative flex-1 shadow-float rounded-full bg-white dark:bg-surface-dark transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/50">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-muted dark:text-text-secondary-dark">search</span>
              </div>
              <input className="block w-full pl-11 pr-4 py-3.5 bg-transparent border-none text-sm text-text-main dark:text-white placeholder-text-muted dark:placeholder-text-secondary-dark focus:ring-0 rounded-full" placeholder="Search areas, PGs or landmarks..." type="text"/>
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button className="p-2 hover:bg-background-light dark:hover:bg-background-dark rounded-full text-text-muted dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined filled text-[20px]">mic</span>
                </button>
              </div>
            </div>
            <Link to="/filters" className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-surface-dark shadow-float text-text-main dark:text-white border border-gray-100 dark:border-gray-800">
              <span className="material-symbols-outlined">tune</span>
            </Link>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 px-1 -mx-1">
            {['Price', 'Boys', 'Girls', 'AC', 'Mess Included'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full px-4 shadow-sm border active:scale-95 transition-transform ${activeFilter === filter ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-surface-dark text-slate-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
              >
                {filter === 'Price' && <span className="material-symbols-outlined text-lg">currency_rupee</span>}
                {filter === 'Boys' && <span className="material-symbols-outlined text-lg filled">male</span>}
                {filter === 'Girls' && <span className="material-symbols-outlined text-lg filled">female</span>}
                <p className="text-xs font-semibold">{filter}</p>
                {activeFilter === filter && <span className="material-symbols-outlined text-lg">close</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
          <button className="flex size-11 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-float text-text-main dark:text-white border border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">my_location</span>
          </button>
          <button className="flex size-11 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-float text-text-main dark:text-white border border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">layers</span>
          </button>
        </div>

        {/* Bottom Cards */}
        <div className="absolute bottom-20 left-0 right-0 z-40 flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 pt-2 no-scrollbar">
          {properties.map((prop) => (
            <div key={prop.id} className={`snap-center shrink-0 w-[90%] max-w-[340px] transition-all duration-300 ${selectedProperty === prop.id ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`} onClick={() => setSelectedProperty(prop.id)}>
              <Link to={`/property/${prop.id}`} className={`flex flex-col bg-white dark:bg-surface-dark rounded-3xl shadow-float overflow-hidden border ${selectedProperty === prop.id ? 'border-primary ring-2 ring-primary/20' : 'border-white/50 dark:border-gray-700'}`}>
                <div className="relative h-32 w-full bg-gray-200">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("${prop.image}")`}}></div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 rounded-lg bg-white/90 dark:bg-black/60 backdrop-blur-sm text-[10px] font-bold text-text-main dark:text-white border border-white/20">
                      {prop.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight">{prop.name}</h3>
                      <p className="text-text-muted dark:text-text-secondary-dark text-xs mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {prop.location} • {prop.distance}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-green-500 text-white px-1.5 py-0.5 rounded-md text-xs font-bold shadow-sm">
                      {prop.rating} <span className="material-symbols-outlined text-[10px] filled">star</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {prop.amenities.map((amenity, index) => (
                      <span key={index} className="text-[10px] px-2 py-1 rounded bg-background-light dark:bg-background-dark text-text-muted dark:text-text-secondary-dark font-medium border border-gray-100 dark:border-gray-800">{amenity}</span>
                    ))}
                    <span className="text-[10px] px-2 py-1 rounded bg-background-light dark:bg-background-dark text-text-muted dark:text-text-secondary-dark font-medium border border-gray-100 dark:border-gray-800">+More</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-text-muted dark:text-text-secondary-dark font-medium">Monthly Rent</span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-primary-600 dark:text-primary font-bold text-xl">{prop.fullPrice}</span>
                        <span className="text-xs text-text-muted dark:text-text-secondary-dark">/mo</span>
                      </div>
                    </div>
                    <div className="h-9 px-4 rounded-full bg-text-main dark:bg-white text-white dark:text-surface-dark font-semibold text-sm flex items-center justify-center gap-1 shadow-lg active:scale-95 transition-transform">
                      View Details
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <BottomNav />
      </div>
    </div>
  );
}
