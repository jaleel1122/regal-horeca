/**
 * FAQ Page
 * 
 * Displays frequently asked questions
 */

import FAQs from '@/components/FAQs';

export const metadata = {
  title: 'FAQ - Regal HoReCa',
  description: 'Frequently asked questions about our products and services',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-black/70 max-w-2xl mx-auto">
            Find answers to common questions about our products and services.
          </p>
        </div>
        <FAQs />
      </div>
    </div>
  );
}

