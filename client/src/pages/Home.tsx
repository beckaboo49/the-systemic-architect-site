import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
/**
 * The Systemic Architect - Single Page Website
 * 
 * Design Philosophy: Boutique consulting firm aesthetic
 * - Generous whitespace and breathing room
 * - Refined typography hierarchy
 * - Intentional color usage (premium, not overwhelming)
 * - Professional understated elegance
 * - High-quality visual balance
 * 
 * Brand Colors:
 * - Navy Ink #1E2540 (primary text)
 * - Dark Denim #474E60 (secondary text)
 * - Silver Sage #8FA89B (accent)
 * - Honey Brown #B37D65 (CTA/accent)
 * - Warm Ivory #FDF9F0 (background)
 * - Light Neutral #F1EEE7 (secondary background)
 * 
 * Primary Conversion Goals:
 * 1. Newsletter sign-up (Sender integration)
 * 2. Payhip shop link
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = {
        email: email,
        timestamp: new Date().toISOString(),
      };

      console.log("Newsletter signup:", formData);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Newsletter signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-ivory text-navy-ink" style={{ fontFamily: '"Open Sans", sans-serif' }}>
      {/* Header */}
      <header className="bg-warm-ivory border-b border-light-neutral">
        <div className="container py-4 md:py-6">
          <div className="flex items-center justify-center">
            <img src="/logo.png?v=2" alt="The Systemic Architect" className="h-24 w-auto" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-warm-ivory pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <svg width="220" height="130" viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="20" width="180" height="180" rx="4" fill="none" stroke="#474E60" strokeWidth="1.5" opacity="0.5" />
                <rect x="100" y="70" width="180" height="180" rx="4" fill="none" stroke="#8FA89B" strokeWidth="1.5" opacity="0.75" />
                <rect x="70" y="45" width="180" height="180" rx="4" fill="none" stroke="#B37D65" strokeWidth="2" />
                <circle cx="70" cy="45" r="4" fill="#B37D65" />
                <circle cx="250" cy="45" r="4" fill="#B37D65" />
                <circle cx="70" cy="225" r="4" fill="#B37D65" />
                <circle cx="250" cy="225" r="4" fill="#B37D65" />
                <line x1="160" y1="45" x2="160" y2="225" stroke="#B37D65" strokeWidth="1" opacity="0.4" />
                <line x1="70" y1="135" x2="250" y2="135" stroke="#B37D65" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-ink leading-tight" style={{ fontFamily: '"Merriweather", serif' }}>
              AI Compliance Handled. Get On With Business.
            </h1>
            <p className="text-base md:text-lg text-dark-denim leading-relaxed">
              Plain-language AI governance guidance for small businesses and solopreneurs, so you can adopt AI with confidence, not confusion.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-3">
        <svg width="120" height="20" viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="10" x2="110" y2="10" stroke="#B37D65" strokeWidth="1" opacity="0.5" />
          <circle cx="10" cy="10" r="3" fill="#B37D65" />
          <circle cx="60" cy="10" r="3" fill="#8FA89B" />
          <circle cx="110" cy="10" r="3" fill="#B37D65" />
        </svg>
      </div>

      {/* Value Points Section */}
      <section className="bg-silver-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="flex gap-4 md:gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-3">
              <div className="flex-shrink-0 pt-1 lg:pt-0">
                <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8 text-honey-brown" />
              </div>
              <div>
                <p className="text-sm md:text-base text-navy-ink leading-relaxed">
                  Ready-to-use AI compliance and governance tools for small businesses, including policy kits, governance frameworks, and implementation resources
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-3 lg:mt-8">
              <div className="flex-shrink-0 pt-1 lg:pt-0">
                <CheckCircle32 className="h-7 w-7 md:h-8 md:w-8 text-honey-brown" />
              </div>
              <div>
                <p className="text-sm md:text-base text-navy-ink leading-relaxed">
                  Written in plain English, no legal background needed
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-3 lg:mt-16">
              <div className="flex-shrink-0 pt-1 lg:pt-0">
                <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8 text-honey-brown" />
              </div>
              <div>
                <p className="text-sm md:text-base text-navy-ink leading-relaxed">
                  Built for small teams and solopreneurs, not enterprise compliance departments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-3">
        <svg width="120" height="20" viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="10" x2="110" y2="10" stroke="#B37D65" strokeWidth="1" opacity="0.5" />
          <circle cx="10" cy="10" r="3" fill="#B37D65" />
          <circle cx="60" cy="10" r="3" fill="#8FA89B" />
          <circle cx="110" cy="10" r="3" fill="#B37D65" />
        </svg>
      </div>

      {/* Newsletter Sign-up Section */}
      <section className="bg-navy-ink py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center space-y-3"> 
              <div className="flex justify-center mb-2">
                <svg width="64" height="64" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="22" width="55" height="38" rx="2" fill="none" stroke="#FDF9F0" strokeWidth="1.2" opacity="0.35" />
                  <path d="M8 22 L35.5 42 L63 22" fill="none" stroke="#FDF9F0" strokeWidth="1.2" opacity="0.35" />
                  <rect x="22" y="38" width="55" height="38" rx="2" fill="none" stroke="#8FA89B" strokeWidth="1.2" opacity="0.75" />
                  <path d="M22 38 L49.5 58 L77 38" fill="none" stroke="#8FA89B" strokeWidth="1.2" opacity="0.75" />
                  <rect x="15" y="30" width="55" height="38" rx="2" fill="none" stroke="#B37D65" strokeWidth="1.8" />
                  <path d="M15 30 L42.5 50 L70 30" fill="none" stroke="#B37D65" strokeWidth="1.8" />
                  <circle cx="15" cy="30" r="2.5" fill="#B37D65" />
                  <circle cx="70" cy="30" r="2.5" fill="#B37D65" />
                  <circle cx="15" cy="68" r="2.5" fill="#B37D65" />
                  <circle cx="70" cy="68" r="2.5" fill="#B37D65" />
                </svg>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-warm-ivory" style={{ fontFamily: '"Merriweather", serif' }}>
                Get Compliance Clarity in Your Inbox
              </h2>
              <p className="text-base md:text-lg text-silver-sage">
                Clear, useful updates on AI compliance, written for people running a business, not lawyers.
              </p>
            </div>

            {submitted ? (
              <div className="bg-dark-denim rounded-lg p-8 text-center space-y-3">
                <CheckCircle2 className="h-9 w-9 text-honey-brown mx-auto" />
                <p className="text-xl text-warm-ivory font-medium">
                  Good to have you here.
                </p>
                <p className="text-base text-silver-sage">
                  Watch your inbox for The Systemic Shift newsletter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-dark-denim border border-silver-sage text-warm-ivory placeholder:text-silver-sage rounded-[6px] px-4 py-3 text-lg"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-honey-brown text-warm-ivory hover:bg-silver-sage hover:text-navy-ink rounded-[6px] px-6 py-3 text-lg font-medium transition-colors duration-200 whitespace-nowrap"
                  >
                    {isLoading ? "Subscribing..." : "Get The Systemic Shift"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="flex justify-center py-3">
        <svg width="120" height="20" viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="10" x2="110" y2="10" stroke="#B37D65" strokeWidth="1" opacity="0.5" />
          <circle cx="10" cy="10" r="3" fill="#B37D65" />
          <circle cx="60" cy="10" r="3" fill="#8FA89B" />
          <circle cx="110" cy="10" r="3" fill="#B37D65" />
        </svg>
      </div>

      {/* Payhip Products Section */}
      <section className="bg-light-neutral py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="flex justify-center mb-2">
                <svg width="64" height="64" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="11" y="34" width="55" height="40" rx="2" fill="none" stroke="#474E60" strokeWidth="1.2" opacity="0.5" />
                  <path d="M26 34 Q26 18 38.5 18 Q51 18 51 34" fill="none" stroke="#474E60" strokeWidth="1.2" opacity="0.5" />
                  <rect x="25" y="50" width="55" height="40" rx="2" fill="none" stroke="#8FA89B" strokeWidth="1.2" opacity="0.75" />
                  <path d="M40 50 Q40 34 52.5 34 Q65 34 65 50" fill="none" stroke="#8FA89B" strokeWidth="1.2" opacity="0.75" />
                  <rect x="18" y="42" width="55" height="40" rx="2" fill="none" stroke="#B37D65" strokeWidth="1.8" />
                  <path d="M33 42 Q33 26 45.5 26 Q58 26 58 42" fill="none" stroke="#B37D65" strokeWidth="1.8" />
                  <circle cx="18" cy="42" r="2.5" fill="#B37D65" />
                  <circle cx="73" cy="42" r="2.5" fill="#B37D65" />
                  <circle cx="18" cy="82" r="2.5" fill="#B37D65" />
                  <circle cx="73" cy="82" r="2.5" fill="#B37D65" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-ink" style={{ fontFamily: '"Merriweather", serif' }}>
                Compliance Tools You Can Use Today
              </h2>
              <p className="text-base md:text-lg text-dark-denim leading-relaxed">
                Ready-to-use policy kits, governance frameworks, and implementation resources built for small businesses adopting AI.
              </p>
            </div>

            <div>
              <a href="https://payhip.com/TheSystemicArchitect" target="_blank" rel="noopener noreferrer">
                <Button className="bg-honey-brown text-warm-ivory hover:bg-navy-ink rounded-[6px] px-8 py-3 text-lg font-medium transition-colors duration-200">
                  Browse the Shop
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-3">
        <svg width="120" height="20" viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="10" x2="110" y2="10" stroke="#B37D65" strokeWidth="1" opacity="0.5" />
          <circle cx="10" cy="10" r="3" fill="#B37D65" />
          <circle cx="60" cy="10" r="3" fill="#8FA89B" />
          <circle cx="110" cy="10" r="3" fill="#B37D65" />
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-navy-ink text-warm-ivory">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Info */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-warm-ivory" style={{ fontFamily: '"Merriweather", serif' }}>
                The Systemic Architect
              </h3>
              <p className="text-base text-warm-ivory/80">
                AI compliance handled. Get on with business.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="text-base font-bold text-warm-ivory uppercase tracking-wide" style={{ fontFamily: '"Merriweather", serif' }}>
                Contact
              </h4>
              
                <a href="mailto:hello@thesystemicarchitect.com"
                className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
              >
                hello@thesystemicarchitect.com
              </a>
            </div>

            {/* Social & Legal */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-base font-bold text-warm-ivory uppercase tracking-wide" style={{ fontFamily: '"Merriweather", serif' }}>
                  Follow
                </h4>
                <div className="flex flex-wrap gap-4">
                  
                    <a href="https://www.linkedin.com/in/rebecca-corcovelos-496847400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    LinkedIn
                  </a>
                  
                    <a href="https://www.instagram.com/thesystemicarchitect?igsh=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    Instagram
                  </a>
                  
                    <a href="https://www.facebook.com/profile.php?id=61574353970810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    Facebook
                  </a>
                  
                    <a href="https://systemicshift.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    Substack
                  </a>
                  
                    <a href="https://www.pinterest.com/thesystemicarchitect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    Pinterest
                  </a>
                  
                    <a href="https://payhip.com/TheSystemicArchitect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    Payhip
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-warm-ivory uppercase tracking-wide" style={{ fontFamily: '"Merriweather", serif' }}>
                  Legal
                </h4>
                
                  <a href="#privacy-policy"
                  className="text-base text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-warm-ivory/20 mt-12 pt-8">
            <p className="text-sm text-warm-ivory/60 text-center">
              © {new Date().getFullYear()} The Systemic Architect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 

 
