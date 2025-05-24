export default function DataProcessingAgreement() {
    return (
      <div className="min-h-screen  py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
              UBS HQ - Data Processing Agreement (DPA)
            </h1>
  
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">Effective Date: [Insert Date]</p>
  
              {/* Introduction */}
              <p className="text-gray-700 mb-8">
                This Data Processing Agreement ("DPA") forms part of the agreement between UBS HQ Ltd. ("UBS HQ", "we", "us", or "our"), headquartered in London, United Kingdom, and any user or customer ("Controller" or "Customer") of UBS HQ services, where UBS HQ processes personal data on behalf of the Customer under applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR) and EU GDPR where applicable.
              </p>
  
              {/* Section 1: Definitions */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  1. Definitions
                </h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li className="border-l-4 border-blue-200 pl-4">
                    <span className="font-semibold">"Controller":</span> The entity that determines the purposes and means of processing personal data.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <span className="font-semibold">"Processor":</span> UBS HQ, which processes personal data on behalf of the Controller.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <span className="font-semibold">"Personal Data":</span> Any information relating to an identified or identifiable natural person.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <span className="font-semibold">"Sub-processor":</span> A third party engaged by UBS HQ to process personal data on its behalf.
                  </li>
                </ul>
              </section>
  
              {/* Section 2: Roles */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  2. Roles and Responsibilities
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    UBS HQ acts as the <span className="font-semibold">Processor</span> with respect to personal data processed in the provision of its services.
                  </p>
                  <p className="text-gray-700">
                    The Customer remains the <span className="font-semibold">Controller</span> and is responsible for ensuring that data subjects are informed of their rights and the data processing activities.
                  </p>
                </div>
              </section>
  
              {/* Section 3: Subject Matter */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  3. Subject Matter and Duration
                </h2>
                <p className="text-gray-700">
                  This DPA governs the processing of personal data as necessary to provide services to the Customer for the duration of the service agreement.
                </p>
              </section>
  
              {/* Section 4: Nature */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  4. Nature and Purpose of Processing
                </h2>
                <p className="text-gray-700">
                  The processing will involve data hosting, collaboration tools (e.g., email, chat, file sharing), support services, and related functionalities, as described in the primary service agreement.
                </p>
              </section>
  
              {/* Section 5: Categories */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  5. Categories of Data Subjects and Data
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Data Subjects:</h3>
                    <p className="text-gray-700">
                      Employees, customers, contractors, users, and other data subjects as determined by the Customer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Data:</h3>
                    <ul className="list-disc pl-6">
                      <li className="border-l-4 border-blue-200 pl-4">Names</li>
                      <li className="border-l-4 border-blue-200 pl-4">Email addresses</li>
                      <li className="border-l-4 border-blue-200 pl-4">Contact details</li>
                      <li className="border-l-4 border-blue-200 pl-4">File contents</li>
                      <li className="border-l-4 border-blue-200 pl-4">Metadata</li>
                      <li className="border-l-4 border-blue-200 pl-4">Communication logs</li>
                      <li className="border-l-4 border-blue-200 pl-4">Other user-generated content</li>
                    </ul>
                  </div>
                </div>
              </section>
  
              {/* Section 6: Sub-processors */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  6. Sub-processors
                </h2>
                <p className="text-gray-700 mb-4">
                  UBS HQ may engage third-party Sub-processors to provide its services. UBS HQ shall:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="border-l-4 border-blue-200 pl-4">
                    Maintain an up-to-date list of Sub-processors (available upon request)
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    Inform the Controller of any changes to Sub-processors and allow objections within 14 days
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    Ensure each Sub-processor is bound by obligations equivalent to this DPA
                  </li>
                </ol>
              </section>
  
              {/* Continue with remaining sections... */}
  
              {/* Section 7: Security */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  7. Security Measures
                </h2>
                <p className="text-gray-700 mb-4">
                  UBS HQ implements appropriate technical and organizational measures including:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="border-l-4 border-blue-200 pl-4">Encryption of data in transit and at rest</li>
                  <li className="border-l-4 border-blue-200 pl-4">Access control and authentication</li>
                  <li className="border-l-4 border-blue-200 pl-4">Regular security assessments</li>
                  <li className="border-l-4 border-blue-200 pl-4">Backup and disaster recovery plans</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                8. Data Subject Rights 
                </h2>
                <p className="text-gray-700 mb-4">
                UBS HQ shall assist the Controller in responding to requests from data subjects to exercise their rights under applicable laws, including access, rectification, erasure, restriction, portability, and objection.                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                9. Data Breach Notification 
                </h2>
                <p className="text-gray-700 mb-4">
                In the event of a personal data breach, UBS HQ shall notify the Controller without undue delay and provide relevant information for the Controller to meet any reporting or notification obligations.                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                10. Data Transfers
                </h2>
                <p className="text-gray-700 mb-4">
                UBS HQ may transfer personal data outside the UK or EEA in compliance with applicable data protection laws, using appropriate safeguards such as Standard Contractual Clauses (SCCs).                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                11. Audit and Compliance
                </h2>
                <p className="text-gray-700 mb-4">
                UBS HQ shall make available all information necessary to demonstrate compliance with this DPA and allow for audits by the Controller or an authorized third-party auditor, provided reasonable notice is given.                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                12. Return or Deletion of Data
                </h2>
                <p className="text-gray-700 mb-4">
                Upon termination of services, UBS HQ shall, at the Controller’s choice, return all personal data or delete it unless otherwise required by law to retain it.                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                13. Governing Law
                </h2>
                <p className="text-gray-700 mb-4">
                This DPA shall be governed by the laws of England and Wales.                </p>
              </section>
  
              {/* Section 14: Contact */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-100 pb-2 mb-4">
                  14. Contact
                </h2>
                <p className="text-gray-700">
                  UBS HQ Ltd.<br />
                  [Insert Registered Address]<br />
                  London, United Kingdom<br />
                  Email:{" "}
                  <a 
                    href="mailto:[Insert Contact Email]" 
                    className="text-blue-600 hover:underline"
                  >
                    [Insert Contact Email]
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }