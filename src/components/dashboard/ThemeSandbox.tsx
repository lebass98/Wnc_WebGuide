import React, { useState } from 'react';
import { Palette, Check, Sparkles, Bell, ShieldCheck, Code } from 'lucide-react';

interface ThemeColorOption {
  name: string;
  id: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  gradientClass: string;
  ringClass: string;
  hex: string;
}

const themeColors: ThemeColorOption[] = [
  {
    name: 'Mirage',
    id: 'mirage',
    bgClass: 'bg-[#16232A]',
    borderClass: 'border-[#16232A]',
    textClass: 'text-[#16232A] dark:text-[#E4EEF0]',
    gradientClass: 'from-[#16232A] to-[#075056]',
    ringClass: 'ring-[#16232A]/40 dark:ring-[#E4EEF0]/40',
    hex: '#16232A'
  },
  {
    name: 'Blaze Orange',
    id: 'blaze-orange',
    bgClass: 'bg-[#FF5B04]',
    borderClass: 'border-[#FF5B04]',
    textClass: 'text-[#FF5B04]',
    gradientClass: 'from-[#FF5B04] to-amber-500',
    ringClass: 'ring-[#FF5B04]/40',
    hex: '#FF5B04'
  },
  {
    name: 'Deep Sea Green',
    id: 'deep-sea-green',
    bgClass: 'bg-[#075056]',
    borderClass: 'border-[#075056]',
    textClass: 'text-[#075056] dark:text-emerald-400',
    gradientClass: 'from-[#075056] to-teal-700',
    ringClass: 'ring-[#075056]/40',
    hex: '#075056'
  },
  {
    name: 'Wild Sand',
    id: 'wild-sand',
    bgClass: 'bg-[#E4EEF0]',
    borderClass: 'border-slate-300',
    textClass: 'text-[#16232A] dark:text-[#E4EEF0]',
    gradientClass: 'from-[#E4EEF0] to-slate-200',
    ringClass: 'ring-slate-300/60',
    hex: '#E4EEF0'
  },
  {
    name: 'Amber',
    id: 'amber',
    bgClass: 'bg-amber-600',
    borderClass: 'border-amber-500',
    textClass: 'text-amber-600 dark:text-amber-400',
    gradientClass: 'from-amber-600 to-orange-600',
    ringClass: 'ring-amber-500/40',
    hex: '#f59e0b'
  }
];

const ThemeSandbox: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ThemeColorOption>(themeColors[0]);
  const [selectedRadius, setSelectedRadius] = useState<'rounded-lg' | 'rounded-2xl' | 'rounded-full'>('rounded-2xl');
  const [copiedCss, setCopiedCss] = useState(false);

  const handleCopyThemeCss = () => {
    const cssVars = `:root {\n  --color-primary: ${selectedColor.hex};\n  --color-primary-gradient: ${selectedColor.gradientClass};\n  --border-radius: ${selectedRadius === 'rounded-lg' ? '0.5rem' : selectedRadius === 'rounded-2xl' ? '1rem' : '9999px'};\n}`;
    navigator.clipboard.writeText(cssVars);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
  };

  return (
    <section className="bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-[#16232A] dark:text-[#FF5B04] text-xs font-semibold uppercase tracking-wider">
            <Palette className="w-4 h-4" />
            <span>Interactive Customizer & Export</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            디자인 시스템 샌드박스 (Design System Sandbox)
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            원하는 테마 컬러와 라운드 스타일을 클릭하여 실시간 변경하고 CSS 변수를 추출하세요.
          </p>
        </div>

        {/* Controls & CSS Export Button */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
            {/* Color Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-1">Color:</span>
              {themeColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full ${color.bgClass} flex items-center justify-center transition-transform cursor-pointer ${
                    selectedColor.id === color.id ? 'scale-125 ring-2 ring-[#16232A] dark:ring-[#FF5B04] ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : 'hover:scale-110 opacity-75 hover:opacity-100'
                  }`}
                  title={color.name}
                >
                  {selectedColor.id === color.id && <Check className="w-3 h-3 text-white" />}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            {/* Radius Selector */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-medium mr-1">Radius:</span>
              <button
                onClick={() => setSelectedRadius('rounded-lg')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedRadius === 'rounded-lg' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-2xs' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Medium
              </button>
              <button
                onClick={() => setSelectedRadius('rounded-2xl')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedRadius === 'rounded-2xl' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-2xs' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                XLarge
              </button>
              <button
                onClick={() => setSelectedRadius('rounded-full')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedRadius === 'rounded-full' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-2xs' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Pill
              </button>
            </div>
          </div>

          {/* Export CSS Button */}
          <button
            onClick={handleCopyThemeCss}
            className="px-4 py-3 bg-[#16232A] hover:bg-[#23343e] dark:bg-[#FF5B04] dark:hover:bg-[#e04f00] text-white rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            {copiedCss ? <Check className="w-4 h-4 text-emerald-300" /> : <Code className="w-4 h-4" />}
            <span>{copiedCss ? 'CSS 변수 복사됨!' : 'CSS 변수 Export'}</span>
          </button>
        </div>
      </div>

      {/* Live Sample Components Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sample 1 */}
        <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">01. Button & Badge</span>
            <span className={`px-2.5 py-0.5 text-xs font-semibold text-white ${selectedColor.bgClass} ${selectedRadius}`}>
              Active Badge
            </span>
          </div>

          <div className="py-3 flex flex-col gap-3">
            <button
              className={`w-full py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r ${selectedColor.gradientClass} ${selectedRadius} shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>{selectedColor.name} Theme Action</span>
            </button>
          </div>
        </div>

        {/* Sample 2 */}
        <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">02. Form Control</span>
            <ShieldCheck className={`w-4 h-4 ${selectedColor.textClass}`} />
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">프로젝트 라벨</label>
            <input
              type="text"
              readOnly
              value={`Wnc WebGuide (${selectedColor.name} Theme)`}
              className={`w-full px-3.5 py-2.5 text-xs text-slate-900 dark:text-white bg-white dark:bg-slate-800 border ${selectedColor.borderClass}/50 ${selectedRadius} focus:outline-none ring-2 ${selectedColor.ringClass}`}
            />
          </div>
        </div>

        {/* Sample 3 */}
        <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">03. Alert Notification</span>
            <Bell className={`w-4 h-4 ${selectedColor.textClass}`} />
          </div>

          <div className={`p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ${selectedRadius} flex items-start gap-3 shadow-2xs`}>
            <div className={`p-2 ${selectedColor.bgClass}/10 ${selectedColor.textClass} ${selectedRadius}`}>
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">동적 테마 변경 성공</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {selectedColor.name} 테마 변수가 생성되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSandbox;
