import * as React from "react";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">
      {children}
    </h3>
  );
}

function LinkItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-muted-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded"
      >
        {children}
      </a>
    </li>
  );
}

const Footer = () => {
  const year = new Date().getFullYear();
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.elgietherapy.com';

  return (
    <footer className="relative mt-16 border-t border-border bg-background text-foreground">
      {/* Top CTA bar */}
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-4 rounded-2xl bg-accent/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-medium">Ready to feel better, faster?</p>
            <p className="text-sm text-muted-foreground">Book a free 15-minute consult to see if we're a fit.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+19496487004"
              className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label="Call the practice"
            >
              Call (949) 648-7004
            </a>
            <a
              href="https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              Book consult
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 pb-10 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              {/* Inline SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M10 80 L40 30 L60 60 L75 40 L90 80 Z"
                />
              </svg>
              <span className="text-lg font-semibold leading-tight">Brigette Elgie, MFT, PLLC</span>
            </a>
            <p className="mt-2 text-sm font-medium">By appointment (Mon–Sat, MT)</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Individual, couples, and family therapy delivered with warmth, clarity, and evidence-based care—online and in Park City.
            </p>
            <div className="mt-4">
              <h5 className="font-medium mb-2 text-sm">Licensed In</h5>
              <p className="text-xs text-muted-foreground mb-4">
                Utah, California, Washington, New Hampshire
              </p>
            </div>
            <ul className="mt-4 flex items-center gap-3" aria-label="Contact links">
              <li>
                <a
                  href="https://www.google.com/maps?q=3080+Pinebrook+Road,+Suite+1100,+Park+City,+UT+84098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  aria-label="Open map"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"/></svg>
                </a>
              </li>
              <li>
                <button
                  data-contact-cta="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  aria-label="Contact for questions"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-1.4 4.25-6.6 4.12L5.4 8.25 4 9.23l8 5 8-5-1.4-.98Z"/></svg>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <SectionHeading>Contact & Location</SectionHeading>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="block text-muted-foreground">Phone</span>
                <a href="tel:+19496487004" className="font-medium hover:underline">(949) 648-7004</a>
              </li>
              <li>
                <span className="block text-muted-foreground">Email</span>
                <button
                  data-contact-cta="true"
                  className="font-medium hover:underline"
                >
                  Contact for Questions
                </button>
              </li>
              <li>
                <span className="block text-muted-foreground">Office</span>
                <address className="not-italic">
                  3080 Pinebrook Road, Suite 1100<br />
                  Park City, UT 84098
                </address>
                <a
                  href="https://www.google.com/maps?q=3080+Pinebrook+Road,+Suite+1100,+Park+City,+UT+84098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-muted-foreground hover:text-primary underline"
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <SectionHeading>Services</SectionHeading>
            <ul className="mt-4 space-y-2">
              <LinkItem href="/child-therapist-park-city">Child Therapy</LinkItem>
              <LinkItem href="/teen-therapist-park-city">Teen Therapy</LinkItem>
              <LinkItem href="/emdr-therapist-park-city">EMDR & ART</LinkItem>
              <LinkItem href="/anxiety-therapy-park-city">Anxiety & Depression</LinkItem>
              <LinkItem href="/supervision-consulting">Clinical Supervision</LinkItem>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <SectionHeading>For Clients</SectionHeading>
            <ul className="mt-4 space-y-2">
              <LinkItem href="https://login.headway.co/u/login/">Client Portal</LinkItem>
              <LinkItem href="/insurance-fees">Rates and Insurance</LinkItem>
            </ul>
          </div>
        </div>

        {/* Crisis note */}
        <div className="mt-10 rounded-xl bg-destructive/10 p-4 text-sm leading-6 text-destructive-foreground border border-destructive/20">
          <p>
            If you are experiencing a mental health emergency, call 911 or the Suicide & Crisis Lifeline at <a href="tel:988" className="underline font-semibold">988</a>. Our practice is not a 24/7 crisis service.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground">
              © {year} Brigette Elgie, MFT, PLLC • All rights reserved
            </p>
            <p className="text-xs text-muted-foreground">
              Licensed Marriage and Family Therapist • Serving Park City & Utah
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brigette Elgie, MFT, PLLC",
            "telephone": "+1-949-648-7004",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3080 Pinebrook Rd Suite 1100",
              "addressLocality": "Park City",
              "addressRegion": "UT",
              "postalCode": "84098",
              "addressCountry": "US"
            },
            "url": siteUrl
          })
        }}
      />
    </footer>
  );
};

export default Footer;
