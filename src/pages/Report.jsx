// import React from 'react';
// import styled from 'styled-components';
// import Footer from '../components/common/Footer';

// const Report = () => {
//   return (
//     <>
//       <Container>
//         <ContentWrapper>
//           <TitleWrapper className="text-center">
//             <PolicyWrapper className="privacy">
//               <Section className="text-left">
//                 <h1 style={{ fontSize: '2.5rem' }}>Report a Vulnerability</h1>
//                 <Paragraph>
//                   At Seccouncil, we take security seriously and are committed to ensuring the safety and privacy of our users and systems. If you have identified a security vulnerability in any of our services, we encourage you to report it to us so we can address it as quickly as possible.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>1. How to Report a Vulnerability</Heading2>
//                 <Paragraph>
//                   If you believe you've found a security vulnerability in any Seccouncil service, please follow these steps:
//                 </Paragraph>
//                 <Paragraph>
//                   Email Us: Send a detailed description of the vulnerability to [Insert Contact Email].
//                   Include the Following Information:
//                   A detailed summary of the vulnerability.
//                   Steps to reproduce the issue.
//                   Potential impact and the services affected.
//                   Any screenshots or video evidence, if applicable.
//                   Your contact details for follow-up.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>2. What Happens Next?</Heading2>
//                 <Paragraph>
//                   Once we receive your report:
//                 </Paragraph>
//                 <Paragraph>
//                   We will acknowledge receipt of your report and begin investigating the issue.
//                   Our team will assess the impact of the vulnerability and develop a solution.
//                   We may contact you for further details if necessary.
//                   Once the issue is resolved, we will notify you and, where applicable, provide updates on how the vulnerability was addressed.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>3. Responsible Disclosure</Heading2>
//                 <Paragraph>We ask that you:
//                 </Paragraph>
//                 <Paragraph>Do not exploit any identified vulnerabilities for any reason.
//                   Do not share details of the vulnerability with anyone else until we have had the opportunity to address it.
//                   Act in good faith by respecting user privacy and data protection.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Heading2>4. Recognition</Heading2>
//                 <Paragraph>
//                   While we currently do not offer a bug bounty program, we will acknowledge your efforts in keeping our systems secure and may offer recognition for responsible disclosure, if applicable.
//                 </Paragraph>
//               </Section>
//               <Section className="text-left">
//                 <Paragraph>
//                   Thank you for helping us maintain a secure environment at Seccouncil.
//                 </Paragraph>
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
//             padding: 0;
//             margin: 0 auto;
//             max-width: 90vw;
//             display: flex;
//             justify-content: center;
//             `;

// const ContentWrapper = styled.div`
//             margin: 2.5rem 0;
//             width: 100%;
//             display: flex;
//             justify-content: center;
//             `;

// const TitleWrapper = styled.div`
//             text-align: center;
//             width: 100%;
//             `;

// const PolicyWrapper = styled.div`
//             padding: 1.25rem;
//             max-width: 800px;
//             margin: 0 auto;
//             color: white;
//             line-height: 1.6;
//             `;

// const Section = styled.section`
//             margin: 1.25rem 0;
//             `;

// const Heading2 = styled.h2`
//             font-size: 1.5rem;
//             margin-top: 1.25rem;
//             `;

// const Paragraph = styled.p`
//             margin: 0.625rem 0;
//             `;

// const List = styled.ul`
//             list-style-type: disc;
//             margin-left: 1.25rem;
//             `;

// const ListItem = styled.li`
//             margin: 0.625rem 0;
//             `;

// export default Report;






import React from 'react';
import Footer from '../components/common/Footer';

const Report = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-center  text-white">
        <div className="w-full my-10 flex justify-center">
          <div className="text-center w-full">
            <div className="p-5 max-w-3xl mx-auto text-left">
              <section className="mb-5">
                <h1 className="text-4xl mb-4">Report a Vulnerability</h1>
                <p className="mb-2">
                  At Seccouncil, we take security seriously and are committed to ensuring the safety and privacy of our users and systems. If you have identified a security vulnerability in any of our services, we encourage you to report it to us so we can address it as quickly as possible.
                </p>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">1. How to Report a Vulnerability</h2>
                <p>
                  If you believe you've found a security vulnerability in any Seccouncil service, please follow these steps:
                </p>
                <p>
                  Email Us: Send a detailed description of the vulnerability to [Insert Contact Email].
                </p>
                <p>
                  Include the Following Information:
                </p>
                <ul className="list-disc ml-5 mb-4">
                  <li>A detailed summary of the vulnerability.</li>
                  <li>Steps to reproduce the issue.</li>
                  <li>Potential impact and the services affected.</li>
                  <li>Any screenshots or video evidence, if applicable.</li>
                  <li>Your contact details for follow-up.</li>
                </ul>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">2. What Happens Next?</h2>
                <p>
                  Once we receive your report:
                </p>
                <ul className="list-disc ml-5 mb-4">
                  <li>We will acknowledge receipt of your report and begin investigating the issue.</li>
                  <li>Our team will assess the impact of the vulnerability and develop a solution.</li>
                  <li>We may contact you for further details if necessary.</li>
                  <li>Once the issue is resolved, we will notify you and, where applicable, provide updates on how the vulnerability was addressed.</li>
                </ul>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">3. Responsible Disclosure</h2>
                <p>We ask that you:</p>
                <ul className="list-disc ml-5 mb-4">
                  <li>Do not exploit any identified vulnerabilities for any reason.</li>
                  <li>Do not share details of the vulnerability with anyone else until we have had the opportunity to address it.</li>
                  <li>Act in good faith by respecting user privacy and data protection.</li>
                </ul>
              </section>
              <section className="mb-5">
                <h2 className="text-2xl mt-5 mb-2">4. Recognition</h2>
                <p>
                  While we currently do not offer a bug bounty program, we will acknowledge your efforts in keeping our systems secure and may offer recognition for responsible disclosure, if applicable.
                </p>
              </section>
              <section className="mb-5">
                <p>
                  Thank you for helping us maintain a secure environment at Seccouncil.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Report;

