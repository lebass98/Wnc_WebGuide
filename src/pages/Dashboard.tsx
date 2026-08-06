import React, { useState } from 'react';
import HeroSection from '../components/dashboard/HeroSection';
import ThemeSandbox from '../components/dashboard/ThemeSandbox';
import FeaturedComponents from '../components/dashboard/FeaturedComponents';
import TemplatesShowcase from '../components/dashboard/TemplatesShowcase';
import WorkflowGuide from '../components/dashboard/WorkflowGuide';
import LibraryMetrics from '../components/dashboard/LibraryMetrics';
import RecentlyViewedBar from '../components/dashboard/RecentlyViewedBar';
import WebzineBuilderModal from '../components/dashboard/WebzineBuilderModal';
import { useComponentStorage } from '../hooks/useComponentStorage';
import { Layers } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { recentlyViewed } = useComponentStorage();
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  return (
    <div className="space-y-12 pb-12">
      {/* 1. Landmark Hero Section with Live Playground & Search */}
      <HeroSection />

      {/* Recently Viewed History Bar */}
      <RecentlyViewedBar recentIds={recentlyViewed} />

      {/* 2. Interactive Design System Theme Sandbox with CSS Exporter */}
      <ThemeSandbox />

      {/* Quick Launch Webzine Builder Banner with Brand Indigo Palette */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-indigo-500/30">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Webzine Builder</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold">나만의 웹진 블록 조합해서 코드 내보내기</h3>
          <p className="text-xs sm:text-sm text-indigo-100">
            인용구, 프로필, 영상 플레이어, 아티클 카드를 내 마음대로 순서 배치하고 1초 만에 전체 코드를 다운로드해보세요.
          </p>
        </div>

        <button
          onClick={() => setIsBuilderOpen(true)}
          className="px-6 py-3 bg-white hover:bg-slate-100 text-indigo-700 font-bold text-xs rounded-2xl shadow-lg transition-transform hover:scale-105 shrink-0 cursor-pointer"
        >
          웹진 조립 빌더 열기
        </button>
      </div>

      {/* 3. Featured UI Components Gallery (36 Items, Favorites, Viewport Resizer, Compare, A11y) */}
      <FeaturedComponents />

      {/* 4. Webzine & Page Templates Showcase */}
      <TemplatesShowcase />

      {/* 5. 3-Step How It Works Guide */}
      <WorkflowGuide />

      {/* 6. Library Metrics & Recent Changelog */}
      <LibraryMetrics />

      {/* Webzine Builder Modal */}
      <WebzineBuilderModal
        isOpen={isBuilderOpen}
        onClose={() => setIsBuilderOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
