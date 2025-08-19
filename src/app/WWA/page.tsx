export default function WatchWeekPage() {
    return (
      <div className="pt-32">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
          {/* Banner Image */}
          <div className="w-full flex justify-center mb-12">
  <img
    src="/thumbnails/WWA_LOGO.png"
    alt="Watch Week Aspen Banner"
    className="object-contain w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
  />
</div>

  
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold">Watch Week Aspen</h1>
            <p className="mt-4 text-xl">
              Event website development, custom scripting & brand collaboration
            </p>
            <p className="mt-2 text-lg ">
              Partnering with <span className="font-semibold text-green-500">luxury watch brands</span> for a premier showcase
            </p>
          </div>
  
          {/* Overview */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
            <p className="text-lg leading-relaxed">
              For Watch Week Aspen, I took on full ownership of the website build and digital 
              execution for this premier luxury event. While Squarespace provided the 
              foundation, my role extended far beyond basic setup. I developed custom 
              scripts, collaborated directly with luxury watch brands, optimized SEO and 
              ad performance, and acted as the product lead to ensure the event’s digital 
              presence matched its prestige.
            </p>
          </div>
  
          {/* Contributions */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold mb-4">My Contributions</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
              <li>
                <strong>Squarespace Development & Ownership:</strong> Led the end-to-end 
                creation and management of the Watch Week Aspen website, ensuring it met 
                the high standards of luxury brand partners while handling large volumes of event traffic.
              </li>
              <li>
                <strong>Custom Scripting:</strong> Built JavaScript-based filtering and UI 
                enhancements beyond Squarespace’s default capabilities to deliver a smooth, 
                modern experience.
              </li>
              <li>
                <strong>Brand Collaboration:</strong> Acted as the central point of contact 
                for multiple high-end watch brands, gathering requirements and ensuring their 
                products, events, and stories were showcased properly.
              </li>
              <li>
                <strong>SEO & Marketing Optimization:</strong> Structured the website with 
                technical SEO best practices, ensuring both paid ads and organic reach were 
                maximized during the critical event rollout.
              </li>
              <li>
                <strong>Cross-Team Training:</strong> Coordinated with internal staff and 
                event teams, providing documentation and guidance to ensure the site was 
                maintained effectively before and during the event.
              </li>
              <li>
                <strong>Product Leadership:</strong> Operated as the de facto product team 
                lead, taking responsibility for aligning business, marketing, and technical 
                needs into a single, functioning platform.
              </li>
            </ul>
          </div>
  
          {/* Screenshots */}
<div className="max-w-4xl mb-12">
  <h2 className="text-3xl font-semibold mb-4">Screenshots</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <img
      src="thumbnails/WWA_HOMEPAGE.jpg"
      alt="Watch Week homepage screenshot"
      className="rounded-xl shadow-lg"
    />
    <img
      src="thumbnails/WWA_FILTER.jpg"
      alt="Custom filter functionality screenshot"
      className="rounded-xl shadow-lg"
    />
  </div>

  {/* Centered bottom image */}
  <div className="mt-6 flex justify-center">
    <img
      src="thumbnails/WWA_MAP.jpg"
      alt="Custom map screenshot"
      className="rounded-xl shadow-lg"
    />
    
  </div>
  <p className="text-center text-gray-400 p-4">(Map created by the Watch Week Aspen marketing team. Included here to show the scale of the events)</p>
</div>

  
          {/* Tech Stack */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
            <p className="text-lg ">
              Squarespace • JavaScript • SEO Optimization • Client Collaboration
            </p>
          </div>
  
          {/* Reflection */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold mb-4">Reflection</h2>
            <p className="text-lg leading-relaxed">
              Watch Week Aspen was a fast-paced, event-driven project that required balancing 
              the limitations of a hosted platform with the expectations of luxury watchmakers. 
              By taking full ownership of the digital experience, I learned how to deliver 
              solutions that were technically robust, brand-aligned, and scalable for an 
              event audience. This project strengthened my ability to lead cross-functional 
              collaboration, extend templated systems with custom development, and ensure 
              that digital execution aligned seamlessly with marketing strategy.
            </p>
          </div>
  
          {/* Back Button */}
          <a
            href="/"
           className="px-8 py-3 border border-green-400 text-green-700 rounded-full hover:bg-green-100 hover:scale-105 transition-transform duration-300 font-medium"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    );
  }
  