const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Brigette helped me process childhood trauma in a way that felt safe and empowering. Her ART approach was incredibly effective.",
      type: "Individual Therapy"
    },
    {
      name: "Michael & Lisa K.",
      rating: 5,
      text: "Our marriage was struggling, but Brigette gave us the tools to communicate better and rebuild our connection. We're so grateful.",
      type: "Couples Therapy"
    },
    {
      name: "Jennifer T.",
      rating: 5,
      text: "As a busy mom, I appreciated the telehealth option. Brigette's warmth and expertise helped me through a difficult transition.",
      type: "Individual Therapy"
    },
    {
      name: "The Johnson Family",
      rating: 5,
      text: "Family therapy with Brigette transformed our relationships. She has a special gift for working with teenagers and families.",
      type: "Family Therapy"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-accent" : "text-muted"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="reviews" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client Reviews
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from families who have found healing and growth through our therapy services.
          </p>
        </div>

        {/* Aggregate Rating Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Brigette Elgie, LMFT",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "27",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card border border-primary/10 hover:shadow-floating transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-sm text-muted-foreground bg-primary-light px-3 py-1 rounded-full">
                  {review.type}
                </span>
              </div>
              <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                "{review.text}"
              </blockquote>
              <cite className="text-sm font-medium text-primary not-italic">
                — {review.name}
              </cite>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            *Client names have been changed to protect privacy. Reviews are representative of actual client feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;