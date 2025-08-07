import React, { memo } from "react";
import { Star, CheckCircle2, ChevronRight, Globe } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    name: "User",
    role: "Community Owner",
    content:
      "Switched to GameHost and never looked back. The performance is incredible, and their support team is always there when we need them.",
    rating: 5,
    location: "United States",
    verified: true,
  },
  {
    name: "User",
    role: "ESports Team Manager",
    content:
      "The reliability and low latency of their servers give us a competitive edge. Best game hosting service we've used.",
    rating: 5,
    location: "Singapore",
    verified: true,
  },
  {
    name: "User",
    role: "Gaming Community",
    content:
      "Their control panel makes server management a breeze. Setting up mods and plugins is incredibly easy.",
    rating: 5,
    location: "Germany",
    verified: true,
  },
];

const BackgroundEffects = memo(() => (
  <div
    className="absolute inset-0 pointer-events-none select-none"
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)]" />
    <div
      className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black, transparent)",
      }}
    />
  </div>
));

const StarRating = memo(({ rating }) => (
  <div
    className="flex items-center gap-1"
    role="img"
    aria-label={`${rating} out of 5 stars`}
  >
    {[...Array(rating)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className="fill-amber-400 text-amber-400"
        aria-hidden="true"
      />
    ))}
  </div>
));

const VerifiedBadge = memo(() => (
  <div
    className="flex items-center gap-1 text-sm text-emerald-400"
    role="status"
    aria-label="Verified customer"
  >
    <CheckCircle2 size={16} aria-hidden="true" />
    <span>Verified</span>
  </div>
));

const TestimonialCard = memo(({ testimonial }) => (
  <div
    className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 
      hover:bg-gray-800 transition-all duration-300 hover:border-gray-600/50"
    role="article"
    aria-labelledby={`testimonial-${testimonial.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`}
  >
    {/* Location & Verification */}
    <div className="flex items-center justify-between mb-6">
      {testimonial.verified && <VerifiedBadge />}
    </div>

    {/* Quote */}
    <div className="relative mb-8">
      <blockquote className="text-gray-300  line-clamp-3 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
    </div>

    {/* Author */}
    <div className="flex items-center justify-between">
      <div>
        <h4
          id={`testimonial-${testimonial.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="font-medium text-white group-hover:text-blue-400 
          transition-colors duration-300"
        >
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
      </div>
      <StarRating rating={testimonial.rating} />
    </div>
  </div>
));

const ReviewsLink = memo(() => (
  <a
    href="https://example.com"
    className="inline-flex items-center gap-2 px-4 py-2 text-blue-400 
      hover:text-blue-300 transition-colors duration-200 rounded-lg
      hover:bg-blue-400/10 focus:outline-none focus:ring-2 
      focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
    aria-label="Read all customer reviews"
  >
    <span>Read All Our Reviews</span>
    <ChevronRight size={16} aria-hidden="true" />
  </a>
));

const TestimonialsSection = () => {
  return (
    <section
      className="py-20 bg-gray-900 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <BackgroundEffects />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2
            id="testimonials-heading"
            className="text-4xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Gaming Communities
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Join thousands of satisfied gaming communities who trust us for
            reliable and high-performance game hosting.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          role="region"
          aria-label="Customer testimonials"
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <ReviewsLink />
        </div>
      </div>
    </section>
  );
};

export default memo(TestimonialsSection);
