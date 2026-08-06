import React, { useState } from 'react';
import { X, Layers, Plus, Trash2, Copy, Check } from 'lucide-react';

interface Block {
  id: string;
  name: string;
  category: string;
  code: string;
}

const availableBlocks: Block[] = [
  {
    id: 'b-hero',
    name: '웹진 메인 타이틀 블록',
    category: 'Header',
    code: `<header className="py-12 text-center space-y-3 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-900 text-white rounded-3xl p-8">
  <span className="px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold">Arte Issue #42</span>
  <h1 className="text-3xl font-extrabold">디지털 아키텍처의 미래</h1>
  <p className="text-sm text-slate-300 max-w-xl mx-auto">기술과 디자인의 경계를 넘나드는 모던 에디토리얼 모음집</p>
</header>`
  },
  {
    id: 'b-quote',
    name: '감성 인용구 블록',
    category: 'Text',
    code: `<blockquote className="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-2xl italic text-sm text-slate-800 dark:text-slate-200 font-serif my-6">
  "우리가 만드는 UI는 단순한 도구가 아닌, 사용자의 경험을 결정짓는 미학적 결합체입니다."
</blockquote>`
  },
  {
    id: 'b-editor',
    name: '에디터 필진 프로필 블록',
    category: 'Profile',
    code: `<div className="flex items-center gap-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 my-4">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ArteEditor" className="w-12 h-12 rounded-full border-2 border-indigo-500" alt="Editor" />
  <div>
    <h4 className="font-bold text-slate-900 dark:text-white text-sm">이아름 수석 에디터</h4>
    <p className="text-xs text-slate-500">디지털 문화 칼럼니스트 & UX 디자이너</p>
  </div>
</div>`
  },
  {
    id: 'b-video',
    name: '인터랙티브 영상 플레이어 블록',
    category: 'Media',
    code: `<div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 flex items-center justify-center my-6">
  <button className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-xl hover:scale-110 transition-transform">▶</button>
</div>`
  }
];

interface WebzineBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebzineBuilderModal: React.FC<WebzineBuilderModalProps> = ({ isOpen, onClose }) => {
  const [selectedBlocks, setSelectedBlocks] = useState<Block[]>([availableBlocks[0], availableBlocks[1]]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const addBlock = (block: Block) => {
    setSelectedBlocks((prev) => [...prev, { ...block, id: `${block.id}-${Date.now()}` }]);
  };

  const removeBlock = (index: number) => {
    setSelectedBlocks((prev) => prev.filter((_, i) => i !== index));
  };

  const combinedCode = `<div className="space-y-6 max-w-4xl mx-auto p-4">\n` + 
    selectedBlocks.map(b => b.code).join('\n\n') + 
    `\n</div>`;

  const handleCopyCombined = () => {
    navigator.clipboard.writeText(combinedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-xl">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>웹진 요소 조립 빌더 (Webzine Block Builder)</span>
                <span className="px-2 py-0.5 text-[10px] bg-indigo-500/10 text-indigo-500 rounded-full font-mono">Interactive</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                원하는 블록을 추가하여 나만의 웹진 레이아웃 코드를 완성해 내보내세요.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Builder Content Area */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Palette: Available Blocks (4 Cols) */}
          <div className="lg:col-span-4 space-y-3 border-r border-slate-100 dark:border-slate-800 pr-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">추가 가능한 블록 목록</h4>
            {availableBlocks.map((b) => (
              <div
                key={b.id}
                onClick={() => addBlock(b)}
                className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-500 cursor-pointer flex items-center justify-between transition-colors group"
              >
                <div>
                  <span className="text-[10px] font-bold text-indigo-500">{b.category}</span>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-500">{b.name}</h5>
                </div>
                <Plus className="w-4 h-4 text-indigo-500" />
              </div>
            ))}
          </div>

          {/* Right Area: Selected Canvas & Output Code (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                현재 조립된 블록 ({selectedBlocks.length}개)
              </h4>
              <button
                onClick={handleCopyCombined}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>조합 코드 한꺼번에 복사</span>
              </button>
            </div>

            {/* Canvas List */}
            <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
              {selectedBlocks.map((b, idx) => (
                <div key={b.id} className="flex items-center justify-between p-2.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 rounded-xl text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{idx + 1}. {b.name}</span>
                  <button onClick={() => removeBlock(idx)} className="text-rose-500 hover:text-rose-700 p-1">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Generated Combined Code Box */}
            <div className="p-4 bg-slate-900 rounded-2xl font-mono text-xs text-indigo-200 max-h-48 overflow-y-auto">
              <pre className="whitespace-pre-wrap">{combinedCode}</pre>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-500"
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebzineBuilderModal;
