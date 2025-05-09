

const Contact = () => {
  return (
    <div className="bg-#FFFFFF">
      <section className="bg-[#FFFFFF] dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-[#F2355F] dark:text-blue-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch with Bike House
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Have questions about our bikes, services, or accessories? Our
                team is here to help you ride better, faster, and safer.
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              {/* Contact Info */}
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Whether you're looking to purchase your first bike or need
                  expert maintenance, Bike House offers the quality, care, and
                  expertise every rider deserves. Drop us a line or stop by our
                  store today!
                </p>
                <ul className="mb-6 md:mb-0">
                  {/* Address */}
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F2355F] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Store
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Bike House, 742 Gear Lane
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Brooklyn, NY 11201
                      </p>
                    </div>
                  </li>

                  {/* Contact */}
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F2355F] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Phone: +1 (800) 555-2453
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Email: support@bikehouse.com
                      </p>
                    </div>
                  </li>

                  {/* Hours */}
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F2355F] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Store Hours
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mon – Fri: 9:00 AM – 6:00 PM
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Sat – Sun: 10:00 AM – 4:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Ready to Ride?
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="sr-only">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        autoComplete="given-name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="sr-only">
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        autoComplete="email"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="textarea" className="sr-only">
                        Your message
                      </label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        rows={5}
                        placeholder="Tell us what you need..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-[#F2355F] text-white px-6 py-3 font-xl rounded-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
