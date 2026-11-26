import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';
import { Helmet } from 'react-helmet';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Xanguine</title>
        <meta name="description" content="Xanguine Privacy Policy" />
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
