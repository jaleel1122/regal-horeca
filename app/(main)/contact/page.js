/**
 * Contact Page
 * 
 * Contact information and enquiry form link
 */

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Locations from '@/components/about/Locations';
import { WhatsAppIcon } from '@/components/Icons';
import { getWhatsAppBusinessLink } from '@/lib/utils/whatsapp';

export default function ContactPage() {
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to get in touch with Regal HoReCa.');
    const whatsappUrl = getWhatsAppBusinessLink(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-black/70 max-w-2xl mx-auto text-lg">
            We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Actions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Enquiry Form Link */}
            <Link
              href="/enquiry"
              className="group bg-white border-2 border-black hover:border-accent p-8 rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-black group-hover:bg-accent rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Submit Enquiry</h3>
                <p className="text-black/70 text-sm">
                  Fill out our enquiry form with your product requirements
                </p>
              </div>
            </Link>

            {/* WhatsApp Contact */}
            <button
              onClick={handleWhatsAppClick}
              className="group bg-white border-2 border-black hover:border-green-500 p-8 rounded-lg transition-all duration-300 hover:shadow-xl text-left"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 group-hover:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <WhatsAppIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-black/70 text-sm">
                  Message us directly on WhatsApp for instant support
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <Locations />
    </div>
  );
}

