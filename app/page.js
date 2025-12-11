"use client";

import { 
  Phone, 
  Star, 
  CheckCircle, 
  Activity, 
  User, 
  MapPin,
  Clock,
  HeartPulse,
  Brain,
  Bone
} from "lucide-react";
import { cn } from "./utils";
import { Button } from "./components/Button";
import { BodyMap } from "./components/BodyMap";

// --- Components ---

const Section = ({ id, className, children }) => (
  <section id={id} className={cn("py-16 md:py-24 px-4 md:px-8", className)}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const Card = ({ title, description, icon: Icon, className }) => (
  <div className={cn("bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow", className)}>
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-2xl text-blue-600 flex items-center gap-2">
            <Activity className="text-blue-600" />
            Mercer Physio
          </div>
          <Button variant="primary" className="hidden md:flex text-sm py-2 px-4 min-h-[36px]" onClick={() => document.getElementById('body-map').scrollIntoView({ behavior: 'smooth' })}>
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-70"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
              <CheckCircle size={14} />
              Verified Home Visit Specialist
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Expert Physiotherapy in the <span className="text-blue-600">Comfort of Your Home</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Why travel when you're in pain? Dr. Mercer brings 15 years of clinical expertise directly to your living room. Stop searching, start recovering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => document.getElementById('body-map').scrollIntoView({ behavior: 'smooth' })} className="text-lg px-8">
                I'm in Pain - Help Me
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}>
                See Success Stories
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium pt-4 justify-center md:justify-start">
              <span className="flex items-center gap-1"><Star size={16} className="text-yellow-400 fill-yellow-400" /> 4.9/5 Rating</span>
              <span className="flex items-center gap-1"><User size={16} /> 486+ Patients</span>
            </div>
          </div>
          <div className="flex-1 relative">
             {/* Abstract Medical Visual */}
             <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">S</div>
                    <div>
                      <div className="font-bold text-slate-900">Dr. Alex Mercer</div>
                      <div className="text-sm text-slate-500">DPT, OCS</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle size={16} /></div>
                      <span>Certified Manual Therapist</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Clock size={16} /></div>
                      <span>Available 7 Days a Week</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><MapPin size={16} /></div>
                      <span>New York, NY</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">15+ Years</div>
            <div className="text-sm text-slate-500 font-medium">Clinical Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">486+</div>
            <div className="text-sm text-slate-500 font-medium">Happy Patients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
            <div className="text-sm text-slate-500 font-medium">Home Visits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">4.9/5</div>
            <div className="text-sm text-slate-500 font-medium">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section id="services" className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Specialized Care for Every Need</h2>
          <p className="text-lg text-slate-600">Complex medical terms explained simply. We treat the root cause, not just the symptoms.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            title="Geriatric Care" 
            description="Specialized mobility and strength training for seniors to maintain independence and prevent falls."
            icon={User}
          />
          <Card 
            title="Post-Surgery Rehab" 
            description="Expert recovery plans for knee replacements, hip surgeries, and fractures to get you moving again."
            icon={Bone}
          />
          <Card 
            title="Neurological Rehab" 
            description="Dedicated support for stroke recovery, Parkinson's, and other neurological conditions."
            icon={Brain}
          />
          <Card 
            title="Chronic Pain" 
            description="Long-term relief strategies for persistent back, neck, and joint pain using modern techniques."
            icon={HeartPulse}
          />
        </div>
      </Section>

      {/* Interactive Body Map Section */}
      <Section id="body-map" className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 mb-4">
            <Activity size={14} />
            Interactive Diagnosis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Where Does It Hurt?</h2>
          <p className="text-lg text-slate-600">Point to your pain on the model below, and we'll help you start your recovery journey.</p>
        </div>
        <BodyMap />
      </Section>

      {/* Reviews Section */}
      <Section id="reviews" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Wall of Love</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "Dr. Mercer fixed my frozen shoulder in just 3 weeks. I can finally lift my grandkids again!",
              author: "Margaret T.",
              role: "Retired Teacher"
            },
            {
              text: "After my knee surgery, I was scared to walk. His patience and expertise helped me walk confidently.",
              author: "James R.",
              role: "Post-Surgery Patient"
            },
            {
              text: "Best investment for my back pain. No more driving to clinics in traffic. Highly recommended!",
              author: "David L.",
              role: "Software Engineer"
            }
          ].map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
              <div>
                <div className="font-bold text-slate-900">{review.author}</div>
                <div className="text-sm text-slate-500">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <Activity className="text-blue-500" />
              Mercer Physio
            </div>
            <p className="max-w-xs text-slate-400">
              Professional physiotherapy delivered to your doorstep. Recover faster, better, and more comfortably.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Geriatric Care</li>
              <li>Post-Surgery Rehab</li>
              <li>Neurological Rehab</li>
              <li>Chronic Pain Management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={16} /> +{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Manhattan, NY</li>
              <li className="flex items-center gap-2"><Clock size={16} /> Mon-Sun: 8am - 8pm</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Mercer Physio. All rights reserved.</p>
          <p className="mt-2">
            <a 
              href={`mailto:${process.env.NEXT_PUBLIC_DEVELOPER_EMAIL}?subject=Inquiry: Website Development&body=Hi,%0D%0A%0D%0AI saw the PhysioFlow website template and I'm interested in building a similar website.%0D%0APlease let me know your availability and pricing.%0D%0A%0D%0AThanks`}
              className="hover:text-blue-400 transition-colors"
            >
              Want a website like this? Contact Developer
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
