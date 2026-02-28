import { Link } from 'react-router-dom';

export default function PropertyDetails() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 min-h-screen flex flex-col relative pb-32">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-primary/10 px-4 py-3 flex items-center justify-between">
          <Link to="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold font-display">Property Details</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">share</span>
          </button>
        </header>
        {/* Main Content */}
        <main className="flex-1">
          {/* Image Gallery */}
          <div className="px-4 py-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-200" data-alt="Modern spacious PG room with minimal furniture" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm text-amber-500 !fill-1">star</span>
                4.8 (120)
              </div>
            </div>
          </div>
          {/* Price & Basic Details */}
          <section className="px-4 pb-6 border-b border-primary/5">
            <div className="flex items-baseline justify-between mb-1">
              <h2 className="text-3xl font-bold text-primary font-display">₹8,000<span className="text-sm font-normal text-slate-500 dark:text-slate-400"> / month</span></h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Double Sharing</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Security Deposit: <span className="text-slate-900 dark:text-slate-100">₹8,000</span></p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 text-sm bg-background-light dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                Okhla Head, Jamia Nagar
              </span>
              <span className="flex items-center gap-1 text-sm bg-background-light dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-lg">male</span>
                Boys Only
              </span>
            </div>
          </section>
          {/* Facilities Checklist */}
          <section className="px-4 py-6">
            <h3 className="text-base font-bold mb-4 font-display">Facilities</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">wifi</span>
                </div>
                <span className="text-sm font-medium">High-speed Wi-Fi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">local_laundry_service</span>
                </div>
                <span className="text-sm font-medium">Laundry Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <span className="text-sm font-medium">3 Meals Provided</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">cleaning_services</span>
                </div>
                <span className="text-sm font-medium">Daily Cleaning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">ac_unit</span>
                </div>
                <span className="text-sm font-medium">Air Conditioning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <span className="text-sm font-medium">24/7 Security</span>
              </div>
            </div>
          </section>
          {/* Trust Section: Verified by Students */}
          <section className="mx-4 mb-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
              <h3 className="text-base font-bold font-display">Verified by Students</h3>
            </div>
            <div className="space-y-4">
              {/* Safety Rating */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Safety &amp; Security</span>
                  <span className="text-sm font-bold text-primary">4.9/5</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%] rounded-full"></div>
                </div>
              </div>
              {/* Cleanliness Rating */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cleanliness</span>
                  <span className="text-sm font-bold text-primary">4.6/5</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[92%] rounded-full"></div>
                </div>
              </div>
              {/* Food Quality Rating */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Food Quality</span>
                  <span className="text-sm font-bold text-primary">4.4/5</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-200" data-alt="Student profile 1" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80")', backgroundSize: 'cover'}}></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-200" data-alt="Student profile 2" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80")', backgroundSize: 'cover'}}></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-200" data-alt="Student profile 3" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80")', backgroundSize: 'cover'}}></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">+15</div>
              <span className="ml-4 text-xs text-slate-500 dark:text-slate-400 self-center">students stayed here recently</span>
            </div>
          </section>
        </main>
        {/* Fixed Bottom Call to Action */}
        <div className="fixed bottom-[72px] left-0 right-0 max-w-md mx-auto px-4 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-primary/5 z-40">
          <Link to="/verify" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">event_available</span>
            Book Visit
          </Link>
        </div>
        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto flex border-t border-primary/5 bg-white dark:bg-slate-900 px-4 pb-3 pt-2 z-50">
          <Link to="/" className="flex flex-1 flex-col items-center justify-end gap-1 text-primary">
            <span className="material-symbols-outlined !fill-1">explore</span>
            <p className="text-[10px] font-bold leading-normal uppercase tracking-wider">Explore</p>
          </Link>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="#">
            <span className="material-symbols-outlined">favorite</span>
            <p className="text-[10px] font-medium leading-normal uppercase tracking-wider">Saved</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="#">
            <span className="material-symbols-outlined">calendar_month</span>
            <p className="text-[10px] font-medium leading-normal uppercase tracking-wider">Visits</p>
          </a>
          <Link to="/profile" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-medium leading-normal uppercase tracking-wider">Profile</p>
          </Link>
        </nav>
      </div>
    </div>
  );
}
