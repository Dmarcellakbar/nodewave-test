import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const Navbar = dynamic(() => import('@/components/Layout/Navbar'), {
  suspense: true,
});
const Footer = dynamic(() => import('@/components/Layout/Footer'), {
  suspense: true,
});
const WebsiteComponent = dynamic(
  () => import('@/components/Content/WebsiteComponent'),
  {
    suspense: true,
  }
);

export default function Website() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar
          link1="Website"
          link1To="/website"
          link2="Mobile Apps"
          link2To="/mobile-apps"
          link3="Portfolio"
          link3To="/portfolio"
          link4={'Build App'}
          link4To={'/build-app'}
          setShowModal={() => setShowModal(true)}
        />
        <WebsiteComponent />
        <Footer />
        {showModal ? (
          <>
            <div className="fixed w-full justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Contact Me
                    </h3>
                    <form className="space-y-6" action="#">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Type your name here"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Whatsapp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Example: 628123456789"
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="countries"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Product
                        </label>
                        <select
                          placeholder="Choose the desired product"
                          id="product"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="website">Website</option>
                          <option value="mobile">Mobile Apps</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Concept
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          defaultValue={''}
                        />
                      </div>

                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Suspense>
    </div>
  );
}
