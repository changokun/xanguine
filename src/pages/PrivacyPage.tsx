import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Sales Representative – Small Business Websites",
  "description": "<p><strong>Company Description</strong> Xanguine is a small, customer-focused business dedicated to supporting the internet and technology needs of other small businesses.</p><p><strong>Role Description</strong> This is a super flexible remote Salesperson role focused on selling internet and technology services to small business clients. The position needs to define itself. If you have the skills to sell, let's talk and make something work. We'd like to focus on Portugal initially so we are looking for a sales partner with fluent Portuguese as well as decent English.</p><p><strong>Qualifications</strong></p><ul><li>Fluent Portuguese and decent English.</li><li>Organizational skills to manage multiple prospects, prioritize follow-ups, and maintain accurate documentation of sales activities.</li><li>Customer service mindset, with a focus on building long-term relationships and understanding individual client needs.</li><li>Ability to work independently, and stay motivated in a remote, results-driven setting.</li><li>Previous sales experience in technology, internet services, or related fields is preferred but not required.</li></ul></span></div></div>",
  "datePosted": "2026-11-26",
  "validThrough": "[2027-12-31T23:59]",
  "employmentType": "CONTRACTOR",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Xanguine",
    "sameAs": "https://xanguine.com/",
    "logo": "https://xanguine.com/assets/images/logo-512.png"
  },
  "applicantLocationRequirements": [
    { "@type": "Country", "name": "Portugal" },
    { "@type": "Country", "name": "Spain" }
  ],
  "jobLocationType": "TELECOMMUTE"
}

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Xanguine</title>
        <meta name="description" content="Xanguine Privacy Policy" />
				<script type="application/ld+json">
					{JSON.stringify(schema)}
				</script>
      </Helmet>
      
      <Header />
      <main className="pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
          <h1 className="text-4xl font-display font-semibold text-foreground mb-8">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with our website.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                There are no cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Personal Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless you fill in a form, we don't collect anything about you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                How We Use Your Personal Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you filled in a form, we will use your provided contact information to contact you. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Sharing Your Personal Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not share your Personal Information with anybody. Yuck.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
								If you filled in a form, we log the information for a year or so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Changes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
            </section>

            {/* <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us at hello@xanguine.com.
              </p>
            </section> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
