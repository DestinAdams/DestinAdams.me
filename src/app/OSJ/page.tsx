export default function OSJPage() {
    return (
      <div className="pt-32">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
          {/* Banner Image */}
          <div className="w-full flex justify-center mb-12">
  <img
    src="/thumbnails/OSJ_LOGO.avif"
    alt="Watch Week Aspen Banner"
    className="object-contain w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
  />
</div>
  
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white">Oliver Smith Jeweler</h1>
            <p className="mt-4 text-xl text-white">
              Website redesign, systems integration & product leadership
            </p>
            <p className="mt-2 text-lg text-white">
              Serving <span className="font-semibold text-green-500">400,000+ users annually</span>
            </p>
          </div>
  
          {/* Overview */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Project Overview</h2>
            <p className="text-lg leading-relaxed text-white">
              At Oliver Smith Jeweler, I took full ownership of the company’s website and
              digital presence during my internship, acting as the de facto product team lead.
              When I joined, the website was a static Squarespace build with limited functionality. 
              Over the course of my role, I rebuilt it into a fully integrated Shopify-based platform, 
              redesigned the inventory intake process, and provided company-wide training to ensure 
              adoption and long-term success.
            </p>
          </div>
  
          {/* Contributions */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">My Contributions</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed text-white">
              <li>
                <strong>Product Ownership & Leadership:</strong> Served as the primary lead for 
                the website project, overseeing technical execution, business alignment, and 
                stakeholder communication across the organization.
              </li>
              <li>
                <strong>Custom Shopify Website Development:</strong> Led the creation of a bespoke 
                Shopify website tailored to Oliver Smith Jeweler’s brand aesthetics using HTML and CSS, 
                enhancing online presence and customer engagement.
              </li>
              <li>
                <strong>Inventory System Redesign:</strong> Rebuilt the inventory intake process, 
                creating clear documentation and training materials for staff to ensure accurate, 
                efficient product management without disrupting the live site.
              </li>
              <li>
                <strong>Database Integration:</strong> Analyzed and adapted the company’s MySQL 
                inventory system, understanding its schema and making modifications to support 
                new business requirements set by ownership.
              </li>
              <li>
                <strong>Integration and Customization:</strong> Installed and customized an integration 
                between Edge and Shopify, enabling seamless product updates through an online service, 
                improving operational efficiency and customer experience.
              </li>
              <li>
                <strong>Staff Training & Rollout:</strong> Conducted full staff meetings to present the 
                redesigned website, train employees on new workflows, and demonstrate how the technology 
                would improve their daily operations.
              </li>
              <li>
                <strong>Customer Service Optimization:</strong> Optimized user interfaces and implemented 
                user-friendly features for a smoother shopping experience, boosting customer satisfaction 
                across hundreds of daily users.
              </li>
              <li>
                <strong>IT Security and Collaboration:</strong> Worked with IT partners to manage website 
                security and email firewall services, ensuring protection of digital assets.
              </li>
              <li>
                <strong>Partnership Development:</strong> Established and maintained partnerships with 
                high-end watch companies, building dedicated website sections to expand product offerings 
                and strengthen industry relationships.
              </li>
              <li>
                <strong>Bug Discovery and Recognition:</strong> Identified a previously unknown bug 
                within Shopify, submitted an official ticket, and received direct acknowledgment 
                and thanks from Shopify for my contribution.
              </li>
            </ul>
          </div>
  
          {/* Screenshots */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="thumbnails/OMEGA_SEAMASTER_LIVE_VIEW.jpg"
                alt="Homepage screenshot"
                className="rounded-xl shadow-lg"
              />
              <img
                src="thumbnails/OSJ_LIVE_INVENTORY.jpg"
                alt="Gallery screenshot"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
  
          {/* Tech Stack */}
          <div className="max-w-4xl mb-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
            <p className="text-lg ">
              Shopify • HTML • CSS • MySQL • JavaScript • Liquid • Edge
            </p>
          </div>
  
          {/* Reflection */}
          <div className="max-w-4xl mb-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Reflection</h2>
            <p className="text-lg leading-relaxed">
              My role at Oliver Smith Jeweler went far beyond coding — I learned how to own a 
              mission-critical digital product from end to end. From understanding and reshaping 
              database structures, to creating staff-friendly documentation, to presenting new 
              workflows in front of the entire team, this experience sharpened my ability to 
              think like both a developer and a product leader. Most importantly, I delivered a 
              platform that scaled to <strong>over 400,000 annual users</strong> while improving 
              daily operations for the staff.
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
  