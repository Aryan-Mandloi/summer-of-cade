const FAQ = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {[
            { q: "How does the AI Counselor work?", a: "The AI Counselor uses Google Gemini 1.5 Flash to provide personalized, legally compliant guidance on the adoption process based on your unique profile." },
            { q: "Is child data secure?", a: "Yes. All child data is encrypted. Photos and identifying details are blurred and restricted to verified administrators and agencies only." },
            { q: "How do I become an approved sponsor?", a: "Register as a Sponsor/Donor. You will be directed to the Donor Dashboard where you can review impact reports and set up transparent contribution streams." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
