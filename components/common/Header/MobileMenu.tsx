import React from "react";

function MobileMenu() {
  return (
    <div className="absolute top-8 right-0">
      <ul className="flex w-56 origin-center flex-col gap-2 rounded-lg border border-gray-100 bg-white p-4 shadow-xl">
        <li className="header-link-mobile pointer-events-auto">
          <div>
            <a data-sveltekit-preload-data="" href="/pricing">
              Pricing
            </a>
          </div>
        </li>
        <li className="pointer-events-auto mt-2">
          <span className="text-primary text-sm font-medium">Features</span>
        </li>
        <ul className="flex flex-col gap-2">
          <li className="header-link-mobile pointer-events-auto">
            <div>
              <a data-sveltekit-preload-data="" href="/collect-testimonials">
                Collect testimonials
              </a>
            </div>
          </li>
          <li className="header-link-mobile pointer-events-auto">
            <div>
              <a data-sveltekit-preload-data="" href="/manage-testimonials">
                Manage testimonials
              </a>
            </div>
          </li>
          <li className="header-link-mobile pointer-events-auto">
            <div>
              <a data-sveltekit-preload-data="" href="/share-testimonials">
                Share testimonials
              </a>
            </div>
          </li>
        </ul>
        <li className="header-link-mobile pointer-events-auto">
          <div>
            <a data-sveltekit-preload-data="" href="/blog">
              Blog
            </a>
          </div>
        </li>
        <li className="header-link-mobile pointer-events-auto">
          <div>
            <a data-sveltekit-preload-data="" href="/testimonial-widgets">
              Widgets
            </a>
          </div>
        </li>
        <li className="header-link-mobile pointer-events-auto">
          <div>
            <a>Wall of Love</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
