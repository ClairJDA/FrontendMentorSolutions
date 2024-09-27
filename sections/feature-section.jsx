import React from "react";

import FeatureItem from "@/components/feature-item";
import featureData from "@/data/feature-data";

function FeatureSection() {
  return (
    <section id="features" className="w-full p-6" style={{ backgroundColor: "var(--light-grayish-blue)" }}>
      <h2 className="text-center text-2xl text-heading">Why choose Easybank?</h2>
      <p className="text-center text-sm text-paragraph mb-6 md:w-3/5 md:mb-6">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="md:flex md:flex-wrap article-wrap justify-between">
        {featureData.map((feature) => (
          <FeatureItem key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
