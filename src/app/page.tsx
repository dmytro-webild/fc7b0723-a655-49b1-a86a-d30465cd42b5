"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Invest", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Capital Trade Investment"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "gradient-bars" }}
      title="Double Your Wealth with Capital Trade"
      description="We turn your investment into 200% returns with our expert-managed financial strategies."
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-mature-businessman-with-laptop-desk-restaurant_23-2147956344.jpg", alt: "Investor 1" },
        { src: "http://img.b2bpic.net/free-photo/business-woman-with-laptop-looking-away_23-2148317298.jpg", alt: "Investor 2" },
        { src: "http://img.b2bpic.net/free-photo/elderly-businessman-looking-through-window_23-2148116300.jpg", alt: "Investor 3" },
        { src: "http://img.b2bpic.net/free-photo/beautiful-woman-white-shirt-outside-street_1303-23135.jpg", alt: "Investor 4" },
        { src: "http://img.b2bpic.net/free-photo/businesswoman-standing-outdoors-city-office-building_1157-36108.jpg", alt: "Investor 5" },
      ]}
      buttons={[{ text: "Start Investing", href: "#pricing" }]}
      marqueeItems={[
        { type: "text", text: "200% Annualized ROI" },
        { type: "text", text: "Trusted by 50,000+ Investors" },
        { type: "text", text: "SEC Registered Firm" },
        { type: "text", text: "Instant Withdrawals" },
        { type: "text", text: "Secure Cold Storage" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Capital Trade"
      description={[
        "We are a leading investment firm specializing in diversified asset management, delivering consistent 200% returns for our global investors.",        "Our team combines cutting-edge financial algorithms with seasoned human oversight to identify high-growth opportunities while minimizing exposure."]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Performance Snapshot"
      tag="Trusted by Thousands"
      metrics={[
        { id: "m1", value: "200%", description: "Guaranteed Return Rate" },
        { id: "m2", value: "50k+", description: "Active Investors" },
        { id: "m3", value: "12yrs", description: "Market Experience" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "1",          title: "Starter Plan",          price: "$100",          period: "Fixed",          features: ["200% Profit", "Instant Withdrawal", "24/7 Support"],
          button: { text: "Invest Now" },
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-shows-analytics-data-meeting_482257-120318.jpg",          imageAlt: "professional investment advisor"
        },
        {
          id: "2",          title: "Advanced Plan",          price: "$500",          period: "Fixed",          features: ["200% Profit", "Portfolio Management", "Priority Support"],
          button: { text: "Invest Now" },
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-data-interface_23-2152011741.jpg?_wi=1",          imageAlt: "professional investment advisor"
        },
        {
          id: "3",          title: "Pro Plan",          price: "$1000",          period: "Fixed",          features: ["200% Profit", "Account Manager", "VIP Access"],
          button: { text: "Invest Now" },
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-mature-businessman-with-laptop-desk-restaurant_23-2147956344.jpg",          imageAlt: "professional investment advisor"
        },
      ]}
      title="Investment Plans"
      description="Choose your package to get started today."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Secure Trading",          description: "Your funds are protected with top-tier security standards.",          icon: Shield,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-data-interface_23-2152011741.jpg?_wi=2", imageAlt: "Security" },
            { imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904316.jpg", imageAlt: "Security" },
          ],
        },
        {
          title: "Fast Payouts",          description: "We ensure your returns reach you in record time.",          icon: Zap,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-laptop-running-data-insights-empty-dark-office-late-night_482257-130090.jpg", imageAlt: "Payouts" },
            { imageSrc: "http://img.b2bpic.net/free-photo/empty-business-workspace-with-device-showing-data-analytics-infographics_482257-116612.jpg", imageAlt: "Payouts" },
          ],
        },
        {
          title: "Expert Advice",          description: "Get professional consultation from our finance experts.",          icon: Award,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/coin-wooden-table-blurred-nature_1150-17703.jpg", imageAlt: "Advice" },
            { imageSrc: "http://img.b2bpic.net/free-photo/business-concept-with-graphic-holography_23-2149160932.jpg", imageAlt: "Advice" },
          ],
        },
      ]}
      title="Why Choose Us?"
      description="Secure, reliable, and profitable investment strategies for your future."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Investing with Capital Trade was the best decision for my financial future. Guaranteed 200% ROI is a game changer!"
      rating={5}
      author="Sarah Miller"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/closeup-happy-business-man-standing-outside_1262-3488.jpg", alt: "Sarah" },
        { src: "http://img.b2bpic.net/free-photo/happy-intern-starting-her-career_1262-17047.jpg", alt: "Jane" },
        { src: "http://img.b2bpic.net/free-photo/african-business-lady-standing-grey-background_171337-16083.jpg", alt: "John" },
        { src: "http://img.b2bpic.net/free-photo/elegant-businesswoman-making-phone-call_23-2147989699.jpg", alt: "David" },
        { src: "http://img.b2bpic.net/free-photo/businesswoman-standing-outdoors-city-office-building_1157-36108.jpg", alt: "Mike" },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "How does the 200% return work?", content: "Our expert team reinvests your capital into profitable assets to ensure you get your promised 200% return." },
        { id: "q2", title: "Is my investment safe?", content: "Yes, we use industry-standard encryption to protect your funds at all times." },
        { id: "q3", title: "Can I withdraw anytime?", content: "Yes, withdrawal processes are instant and handled securely via your dashboard." },
      ]}
      title="Frequently Asked"
      description="Get answers to your questions about our investment process."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/modern-workspace-with-analytical-data-dashboards-displayed-devices_482257-126633.jpg"
      imageAlt="Modern workspace analytics"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      text="Ready to Start Your Journey?"
      buttons={[{ text: "Contact Support", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Capital Trade Investment"
      copyrightText="© 2025 Capital Trade Investment. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
