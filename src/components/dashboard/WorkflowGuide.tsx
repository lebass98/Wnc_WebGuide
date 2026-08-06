import React from 'react';
import { Search, Copy, CheckCircle2, Zap } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: '원하는 UI / 웹진 컴포넌트 탐색',
    description: '카테고리별 검색과 실시간 라이브 미리보기를 통해 필요한 컴포넌트나 웹진 레이아웃 블록을 찾습니다.',
    icon: <Search className="w-6 h-6 text-indigo-400" />
  },
  {
    step: '02',
    title: 'React(TSX) 또는 HTML 스니펫 1초 복사',
    description: '탭 스위치로 React 또는 Pure HTML/Tailwind 코드 스니펫을 클릭 한 번으로 클립보드에 바로 복사합니다.',
    icon: <Copy className="w-6 h-6 text-indigo-400" />
  },
  {
    step: '03',
    title: '내 프로젝트에 붙여넣고 바로 활용',
    description: '복잡한 NPM 모듈 설치 없이 내 코드베이스 파일에 붙여넣는 즉시 완전하게 동작합니다.',
    icon: <CheckCircle2 className="w-6 h-6 text-indigo-400" />
  }
];

const WorkflowGuide: React.FC = () => {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white space-y-8 shadow-xl">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>3-Step Quick Start</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          어떻게 사용하나요?
        </h2>
        <p className="text-sm text-slate-400">
          종속성이나 복잡한 환경설정 필요 없이 3단계만으로 바로 UI를 완성할 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((item) => (
          <div
            key={item.step}
            className="relative bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-indigo-500/40 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-3xl font-black text-slate-800 font-mono">
                {item.step}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-base text-white group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowGuide;
