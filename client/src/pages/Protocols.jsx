const Protocols = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 px-4 pb-20">
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Acts & Protocols</h1>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            aasara AI strictly adheres to international and national child welfare regulations. Below are the primary legal frameworks our AI compliance engine uses to flag fraud, protect identities, and ensure ethical operations.
          </p>
          
          <div className="space-y-8">
            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">1</span>
                Central Adoption Resource Authority (CARA) Guidelines
              </h3>
              
              <div className="space-y-6 text-slate-700 dark:text-slate-300">
                <p className="font-medium text-lg border-b border-indigo-200 dark:border-indigo-800 pb-2">
                  1. Fundamental Principles of Adoption
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The child's best interests shall be the paramount consideration in all adoption placements.</li>
                  <li>Preference shall be given to placing the child in adoption with Indian citizens and with due regard to the principle of placement of the child in his own socio-cultural environment, as far as possible.</li>
                  <li>All adoptions shall be registered on the Child Adoption Resource Information and Guidance System (CARINGS) and the confidentiality of the same shall be maintained by the Authority.</li>
                </ul>

                <p className="font-medium text-lg border-b border-indigo-200 dark:border-indigo-800 pb-2 pt-4">
                  2. Eligibility Criteria for Prospective Adoptive Parents (PAPs)
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>PAPs must be physically, mentally, emotionally, and financially capable.</li>
                  <li>They must not have any life-threatening medical conditions.</li>
                  <li>A married couple must have at least two years of stable marital relationship.</li>
                  <li>The age difference between the child and the PAP(s) shall not be less than 25 years.</li>
                  <li>A single female can adopt a child of any gender, but a single male is not eligible to adopt a girl child.</li>
                </ul>

                <p className="font-medium text-lg border-b border-indigo-200 dark:border-indigo-800 pb-2 pt-4">
                  3. Procedure relating to Orphan, Abandoned, and Surrendered (OAS) Children
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>An abandoned child found by any person or agency must be produced before the Child Welfare Committee (CWC) within 24 hours.</li>
                  <li>The Specialized Adoption Agency (SAA) must submit a report to the CWC and lodge an FIR in the local police station.</li>
                  <li>A surrendered child shall be produced before the CWC by the parent/guardian who wishes to surrender the child. A deed of surrender must be executed.</li>
                  <li>Two months' reconsideration time is given to the surrendering parents, after which the CWC can declare the child legally free for adoption.</li>
                </ul>

                <p className="font-medium text-lg border-b border-indigo-200 dark:border-indigo-800 pb-2 pt-4">
                  4. Registration and Home Study Report (HSR)
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Indian PAPs living in India must register online on CARINGS.</li>
                  <li>A Specialized Adoption Agency (SAA) will conduct the Home Study Report (HSR) within 30 days of submission of required documents.</li>
                  <li>The HSR remains valid for three years and is the basis for determining the suitability of the parents.</li>
                </ul>

                <p className="font-medium text-lg border-b border-indigo-200 dark:border-indigo-800 pb-2 pt-4">
                  5. Matching and Pre-adoption Foster Care
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Children are matched with PAPs strictly according to seniority in the CARINGS database.</li>
                  <li>PAPs are given 48 hours to accept or reject the child profile shared with them.</li>
                  <li>Upon acceptance, the PAPs take the child into pre-adoption foster care after signing an undertaking, pending the final adoption order from the court.</li>
                </ul>

                <p className="font-medium text-lg border-b border-indigo-200 dark:border-indigo-800 pb-2 pt-4">
                  6. Follow-up of Adoptive Families
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The SAA must prepare and submit post-adoption follow-up reports online on CARINGS.</li>
                  <li>Reports are required six-monthly for a period of two years from the date of pre-adoption foster care.</li>
                  <li>In cases of inter-country adoption, the Authorized Foreign Adoption Agency (AFAA) or Central Authority conducts the follow-ups.</li>
                </ul>
              </div>
            </div>
            
            <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">2</span>
                Juvenile Justice (Care and Protection of Children) Act, 2015
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                The JJ Act governs the general framework for the protection of children. It dictates that the identity of the child must remain confidential at all times. Section 74 explicitly prohibits the disclosure of identity of children in any form of media. Our platform enforces this by heavily blurring child imagery and redacting names to random identifiers prior to any legal matches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocols;
