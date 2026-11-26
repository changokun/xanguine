import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenRoleSection from '../components/OpenRoleSection';
import ApplicationSection from '../components/ApplicationSection';
import { schemaPrototype } from '../lib/constants.json';
const site = schemaPrototype['@graph'][0]
const org = schemaPrototype['@graph'][1]

const schema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Sales Representative – Small Business Websites",
  "description": "<p>[FULL ROLE DESCRIPTION: responsibilities, requirements, languages (PT/ES/EN), commission or salary structure]</p>",
  "datePosted": "2026-11-26",
  "validThrough": "2027-12-31T23:59",
  "employmentType": "CONTRACTOR",
  "hiringOrganization": { "@id": org['@id'] },
  "applicantLocationRequirements": [
    { "@type": "Country", "name": "Portugal" },
    { "@type": "Country", "name": "Spain" }
  ],
  "jobLocationType": "TELECOMMUTE"
}

const meta = [
  { name: "description", content: "Xanguine is hiring salespeople to grow its small-business web team across Portugal and Spain. See the role and apply." },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: site.name },
  { property: "og:title", content: "We’re hiring salespeople | Xanguine" },
  { property: "og:description", content: "Join a small team building websites for businesses across Portugal and Spain. See the role and apply." },
  { property: "og:url", content: `${site.url}/careers` },
  { property: "og:image", content: org.image },
  { property: "og:image:width", content: "1536" },
  { property: "og:image:height", content: "640" },
  { property: "og:locale", content: "en_GB" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Xanguine | Small Business Websites in Portugal & Spain" },
  { name: "twitter:description", content: "Websites, online shops and booking systems built by a small team, directly. Now hiring salespeople." },
  { name: "twitter:image", content: org.image },
];


export default function OpenRolePage() {
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
      <main className="pt-16 md:pt-20">
        <OpenRoleSection />
        <ApplicationSection />
      </main>
      <Footer />
    </>
  );
}
