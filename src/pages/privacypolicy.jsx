// import React from 'react';
// import styled from 'styled-components';
// import Footer from '../components/common/Footer';

// const PrivacyPolicy = () => {
//   return (
//     <>
//       <Container>
//         <ContentWrapper>
//           <TitleWrapper className="text-center">
//             <PolicyWrapper className="privacy">
//               <Section className="text-left">
//                 <h1 style={{ fontSize: '2.5rem' }}>Privacy Policy</h1>
//                 <Paragraph>Effective Date: [Insert Date]</Paragraph>
//                 <Paragraph>
//                   At Seccouncil, your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in relation to our training programs, job placement services, and consultancy.

//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>1. Information We Collect</Heading2>
//                 <Paragraph>
//                   We may collect the following types of information from you:
//                 </Paragraph>
//                 <Paragraph>
//                   Personal Identification Information: Name, contact details (email, phone number), address, educational qualifications, and employment history.
//                   Professional Information: Skills, certifications, work experience, and other details relevant to job placements.
//                   Payment Information: Credit/debit card details, billing information.
//                   Technical Information: IP address, browser type, device information, and website usage data.

//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>2. How We Use Your Information
//                 </Heading2>
//                 <Paragraph>
//                   We collect and use your personal information for the following purposes:
//                 </Paragraph>
//                 <Paragraph>
//                   Training Programs: To enroll you in training courses and track your progress.
//                   Job Placement Services: To assist in identifying job opportunities, sharing your information with potential employers, and providing career guidance.
//                   Consultancy Services: To offer personalized consultancy, including cybersecurity or IT-related advice.
//                   Customer Support: To respond to inquiries, provide assistance, and improve our services.
//                   Marketing and Communication: To send you updates, newsletters, and information about new programs and offers (you can opt out at any time).
//                   Payment Processing: To facilitate payment for our services.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>3. How We Share Your Information
//                 </Heading2>
//                 <Paragraph>We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following cases:
//                 </Paragraph>
//                 <Paragraph>Job Placements: With your consent, we share relevant information with prospective employers and recruitment agencies.
//                   Service Providers: We may share information with third-party service providers (e.g., payment processors, IT support) to help us operate our services.
//                   Legal Compliance: If required by law, we may disclose your information to comply with legal obligations or respond to lawful requests from government authorities.
//                 </Paragraph>

//               </Section>
//               <Section className="text-left">
//                 <Heading2>4. Data Security
//                 </Heading2>
//                 <Paragraph>
//                   We take appropriate measures to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction. This includes using encryption, secure servers, and regular security audits. However, no data transmission over the internet is 100% secure, so we cannot guarantee absolute security.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>5. Your Rights
//                 </Heading2>
//                 <Paragraph>
//                   You have the right to:
//                 </Paragraph>
//                 <Paragraph>
//                   Access, correct, or delete your personal information.
//                   Withdraw your consent for us to process your data (note: this may affect our ability to provide services to you).
//                   Opt-out of receiving marketing communications.
//                   To exercise these rights, please contact us at [Insert Contact Email].
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>6. Data Retention
//                 </Heading2>
//                 <Paragraph>
//                 We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>7. Cookies and Tracking
//                 </Heading2>
//                 <Paragraph>
//                 Our website uses cookies to enhance your browsing experience, gather usage data, and improve our services. You can manage or disable cookies in your browser settings, but this may affect certain functionalities of our website.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>8. Changes to This Privacy Policy
//                 </Heading2>
//                 <Paragraph>
//                 We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>9. Contact Us
//                 </Heading2>
//                 <Paragraph>
//                 If you have any questions or concerns about this Privacy Policy, please contact us at:
//                 </Paragraph>
//                 <Paragraph>Seccouncil</Paragraph>
//                 <Paragraph>[Insert Company Address]
//                 </Paragraph>
//                 <Paragraph>Email: [Insert Contact Email]
//                 </Paragraph>
//                 <Paragraph>Phone: [Insert Contact Number]</Paragraph>
//               </Section>
//             </PolicyWrapper>
//           </TitleWrapper>
//         </ContentWrapper>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// const Container = styled.div`
//   padding: 0;
//   margin: 0 auto;
//   max-width: 90vw;
//   display: flex;
//   justify-content: center;
// `;

// const ContentWrapper = styled.div`
//   margin: 2.5rem 0;
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// const TitleWrapper = styled.div`
//   text-align: center;
//   width: 100%;
// `;

// const PolicyWrapper = styled.div`
//   padding: 1.25rem;
//   max-width: 800px;
//   margin: 0 auto;
//   color: white;
//   line-height: 1.6;
// `;

// const Section = styled.section`
//   margin: 1.25rem 0;
// `;

// const Heading2 = styled.h2`
//   font-size: 1.5rem;
//   margin-top: 1.25rem;
// `;

// const Paragraph = styled.p`
//   margin: 0.625rem 0;
// `;

// const List = styled.ul`
//   list-style-type: disc;
//   margin-left: 1.25rem;
// `;

// const ListItem = styled.li`
//   margin: 0.625rem 0;
// `;

// export default PrivacyPolicy;









import React from 'react';
import Footer from '../components/common/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-center text-white">
        <div className="w-full my-10 flex justify-center">
          <div className="text-center w-full">
            <div className="p-5 max-w-3xl mx-auto text-left">
              <section className="mb-5">
                <h1 className="text-4xl mb-4">Privacy Policy</h1>
                <p className="mb-2">Effective Date: [Insert Date]</p>
                <p>
                  At Seccouncil, your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in relation to our training programs, job placement services, and consultancy.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">1. Information We Collect</h2>
                <p>
                  We may collect the following types of information from you:
                </p>
                <p>
                  Personal Identification Information: Name, contact details (email, phone number), address, educational qualifications, and employment history.
                  Professional Information: Skills, certifications, work experience, and other details relevant to job placements.
                  Payment Information: Credit/debit card details, billing information.
                  Technical Information: IP address, browser type, device information, and website usage data.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">2. How We Use Your Information</h2>
                <p>
                  We collect and use your personal information for the following purposes:
                </p>
                <p>
                  Training Programs: To enroll you in training courses and track your progress.
                  Job Placement Services: To assist in identifying job opportunities, sharing your information with potential employers, and providing career guidance.
                  Consultancy Services: To offer personalized consultancy, including cybersecurity or IT-related advice.
                  Customer Support: To respond to inquiries, provide assistance, and improve our services.
                  Marketing and Communication: To send you updates, newsletters, and information about new programs and offers (you can opt out at any time).
                  Payment Processing: To facilitate payment for our services.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">3. How We Share Your Information</h2>
                <p>
                  We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following cases:
                </p>
                <p>
                  Job Placements: With your consent, we share relevant information with prospective employers and recruitment agencies.
                  Service Providers: We may share information with third-party service providers (e.g., payment processors, IT support) to help us operate our services.
                  Legal Compliance: If required by law, we may disclose your information to comply with legal obligations or respond to lawful requests from government authorities.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">4. Data Security</h2>
                <p>
                  We take appropriate measures to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction. This includes using encryption, secure servers, and regular security audits. However, no data transmission over the internet is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">5. Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc ml-5">
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Withdraw your consent for us to process your data (note: this may affect our ability to provide services to you).</li>
                  <li>Opt-out of receiving marketing communications.</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at [Insert Contact Email].
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">6. Data Retention</h2>
                <p>
                  We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">7. Cookies and Tracking</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience, gather usage data, and improve our services. You can manage or disable cookies in your browser settings, but this may affect certain functionalities of our website.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">9. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p>Seccouncil</p>
                <p>[Insert Company Address]</p>
                <p>Email: [Insert Contact Email]</p>
                <p>Phone: [Insert Contact Number]</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
