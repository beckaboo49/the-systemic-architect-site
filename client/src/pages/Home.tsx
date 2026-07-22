import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Mail, ShoppingBag } from "lucide-react";
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
      // API-ready form structure for Sender integration
      // This will be connected to Sender's API endpoint
      const formData = {
        email: email,
        timestamp: new Date().toISOString(),
      };

      // Placeholder for Sender API call
      // Replace with actual Sender API endpoint and key
      console.log("Newsletter signup:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSubmitted(true);
      setEmail("");

      // Reset after 5 seconds
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
        <div className="container py-6 md:py-8">
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="The Systemic Architect" className="h-12 w-auto" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-warm-ivory py-16 md:py-24 lg:py-32">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-ink leading-tight" style={{ fontFamily: '"Merriweather", serif' }}>
              AI Compliance Handled. Get On With Business.
            </h1>
            <p className="text-lg md:text-xl text-dark-denim leading-relaxed">
              Plain-language AI governance guidance for small businesses and solopreneurs, so you can adopt AI with confidence, not confusion.
            </p>
          </div>
        </div>
      </section>

      {/* Value Points Section */}
      <section className="bg-light-neutral py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 pt-1">
                <CheckCircle2 className="h-6 w-6 text-honey-brown" />
              </div>
              <div>
                <p className="text-base md:text-lg text-navy-ink leading-relaxed">
                  Ready-to-use AI compliance and governance tools for small businesses, including policy kits, governance frameworks, and implementation resources
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 pt-1">
                <CheckCircle2 className="h-6 w-6 text-honey-brown" />
              </div>
              <div>
                <p className="text-base md:text-lg text-navy-ink leading-relaxed">
                  Written in plain English, no legal background needed
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 pt-1">
                <CheckCircle2 className="h-6 w-6 text-honey-brown" />
              </div>
              <div>
                <p className="text-base md:text-lg text-navy-ink leading-relaxed">
                  Built for small teams and solopreneurs, not enterprise compliance departments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up Section */}
      <section className="bg-warm-ivory py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center space-y-3"> 
              <div className="flex justify-center mb-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-honey-brown">
                  <Mail className="h-6 w-6 text-warm-ivory" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-navy-ink" style={{ fontFamily: '"Merriweather", serif' }}>
                Get Compliance Clarity in Your Inbox
              </h2>
              <p className="text-lg text-dark-denim">
                Clear, useful updates on AI compliance, written for people running a business, not lawyers.
              </p>
            </div>

            {submitted ? (
              <div className="bg-light-neutral rounded-lg p-8 text-center space-y-3">
                <CheckCircle2 className="h-8 w-8 text-honey-brown mx-auto" />
                <p className="text-lg text-navy-ink font-medium">
                  Good to have you here.
                </p>
                <p className="text-sm text-dark-denim">
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
                    className="flex-1 bg-light-neutral border border-dark-denim text-navy-ink placeholder:text-dark-denim rounded-[6px] px-4 py-3"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-honey-brown text-warm-ivory hover:bg-navy-ink rounded-[6px] px-6 py-3 font-medium transition-colors duration-200 whitespace-nowrap"
                  >
                    {isLoading ? "Subscribing..." : "Get The Systemic Shift"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Payhip Products Section */}
      <section className="bg-light-neutral py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center mb-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-honey-brown">
                  <ShoppingBag className="h-6 w-6 text-warm-ivory" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-ink" style={{ fontFamily: '"Merriweather", serif' }}>
                Compliance Tools You Can Use Today
              </h2>
              <p className="text-lg text-dark-denim leading-relaxed">
                Ready-to-use policy kits, governance frameworks, and implementation resources built for small businesses adopting AI.
              </p>
            </div>

            <div>
              <a href="#payhip-link-tbd">
                <Button className="bg-honey-brown text-warm-ivory hover:bg-navy-ink rounded-[6px] px-8 py-3 font-medium transition-colors duration-200">
                  Browse the Shop
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-ink text-warm-ivory">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Info */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-warm-ivory" style={{ fontFamily: '"Merriweather", serif' }}>
                The Systemic Architect
              </h3>
              <p className="text-sm text-warm-ivory/80">
                AI compliance handled. Get on with business.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-warm-ivory uppercase tracking-wide" style={{ fontFamily: '"Merriweather", serif' }}>
                Contact
              </h4>
              <a
                href="mailto:hello@thesystemicarchitect.com"
                className="text-sm text-warm-ivory/80 hover:text-warm-ivory transition-colors"
              >
                hello@thesystemicarchitect.com
              </a>
            </div>

            {/* Social & Legal */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-warm-ivory uppercase tracking-wide" style={{ fontFamily: '"Merriweather", serif' }}>
                  Follow
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/rebecca-corcovelos-496847400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/thesystemicarchitect?igsh=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61574353970810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-warm-ivory uppercase tracking-wide" style={{ fontFamily: '"Merriweather", serif' }}>
                  Legal
                </h4>
                <a
                  href="#privacy-policy"
                  className="text-sm text-warm-ivory/80 hover:text-warm-ivory transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-warm-ivory/20 mt-12 pt-8">
            <p className="text-xs text-warm-ivory/60 text-center">
              © {new Date().getFullYear()} The Systemic Architect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
