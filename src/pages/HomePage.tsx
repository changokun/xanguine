import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ScaleSection from '../components/ScaleSection';
import ContactSection from '../components/ContactSection';
import { LINKEDIN_URL, schemaPrototype } from '../lib/constants.json';
const site = schemaPrototype['@graph'][0]
const org = schemaPrototype['@graph'][1]

const schema = {
	"@context": schemaPrototype['@context'],
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${site.url}/#website`,
			"url": site.url,
			"name": "Xanguine",
			"inLanguage": ["en", "pt-PT", "es-ES"],
			"publisher": { "@id": `${site.url}/#organization` }
		},
		{
			"@type": ["Organization", "ProfessionalService"],
			"@id": `${org.url}/#organization`,
			"name": org.name,
			"url": org.url,
			"logo": `${org.url}assets/images/xanguineLogoRedBlackHoriz.png`,
			"image": `${org.url}assets/images/socialShare.jpg`,
			"description": "Xanguine designs and builds websites, online shops and booking systems for small businesses, from a solo stylist to multi-location hotels and restaurants. Based in Portugal, serving Portugal, Spain and clients worldwide.",
			"slogan": "Agency quality, without the agency price.",
			"foundingLocation": { "@type": "Country", "name": "Portugal" },
			"areaServed": [
				{ "@type": "Country", "name": "Portugal" },
				{ "@type": "Country", "name": "Spain" }
			],
			"knowsAbout": ["Web design", "Web development", "E-commerce", "Shopify", "Online booking systems"],
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Xanguine services",
				"itemListElement": [
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Small business websites with online booking" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online shops and Shopify stores" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-property booking and rate management" } }
				]
			},
			"sameAs": [LINKEDIN_URL]
		}
	]
}
const meta = [
  { name: "description", content: "Xanguine designs and builds websites, online shops and booking systems for small businesses in Portugal and Spain. We're hiring salespeople." },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: schemaPrototype['@graph'][0].name },
  { property: "og:title", content: "Xanguine | Websites Built by a Small Team, Directly" },
  { property: "og:description", content: "Agency quality without the agency price. Websites, online shops and booking systems for small businesses across Portugal and Spain." },
  { property: "og:url", content: schemaPrototype['@graph'][0].url },
  { property: "og:image", content: schemaPrototype['@graph'][1].image },
  { property: "og:image:width", content: "1536" },
  { property: "og:image:height", content: "640" },
  { property: "og:image:alt", content: "Xanguine: powerful websites for small businesses" },
  { property: "og:locale", content: "en_GB" },
  { property: "og:locale:alternate", content: "pt_PT" },
  { property: "og:locale:alternate", content: "es_ES" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Xanguine | Small Business Websites in Portugal & Spain" },
  { name: "twitter:description", content: "Websites, online shops and booking systems built by a small team, directly. Now hiring salespeople." },
  { name: "twitter:image", content: schemaPrototype['@graph'][1].image }
];


export default function HomePage() {
  return (
    <>
			<Helmet>
				<title>Xanguine — Small but Powerful Websites</title>

				{meta.map((tag, index) => (
					<meta
						key={index}
						{...(tag.name && { name: tag.name })}
						{...(tag.property && { property: tag.property })}
						content={tag.content}
					/>
				))}

				<script type="application/ld+json">
					{JSON.stringify(schema)}
				</script>
			</Helmet>
      <Header />
      <main>
        <HeroSection />
        <ScaleSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
