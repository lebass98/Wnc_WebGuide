import React from 'react';
import HeroSection from '../components/dashboard/HeroSection';
import ThemeSandbox from '../components/dashboard/ThemeSandbox';
import FeaturedComponents from '../components/dashboard/FeaturedComponents';
import TemplatesShowcase from '../components/dashboard/TemplatesShowcase';
import WorkflowGuide from '../components/dashboard/WorkflowGuide';
import LibraryMetrics from '../components/dashboard/LibraryMetrics';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* 1. Landmark Hero Section with Live Playground */}
      <HeroSection />

      {/* 2. Interactive Design System Theme Sandbox */}
      <ThemeSandbox />

      {/* 3. Featured UI Components Gallery */}
      <FeaturedComponents />

      {/* 4. Webzine & Page Templates Showcase */}
      <TemplatesShowcase />

      {/* 5. 3-Step How It Works Guide */}
      <WorkflowGuide />

      {/* 6. Library Metrics & Recent Changelog */}
      <LibraryMetrics />
    </div>
  );
};

export default Dashboard;
