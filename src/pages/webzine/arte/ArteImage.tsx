import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const imageTemplates = [
  {
    id: 'single-no-caption',
    title: '1개 (캡션 없음)',
    description: '가장 기본적인 단일 이미지 레이아웃입니다.',
    html: `<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt=""></a>
</li>
</ul>
</div>`
  },
  {
    id: 'single-with-caption',
    title: '1개 (캡션 있음)',
    description: '단일 이미지 아래에 설명(캡션)이 포함된 레이아웃입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2026/07/review_20260223_01.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/review_20260223_01.jpg" alt=""></a>
</li>
<div class="txts ta_r">캡션입력란</div>
</ul>
</div>`
  },
  {
    id: 'single-right-caption',
    title: '1개 (우측 캡션)',
    description: '1개 (우측 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'double-full-caption',
    title: '2개 (전체 캡션)',
    description: '2개 (전체 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'double-individual-caption',
    title: '2개 (개별 캡션)',
    description: '2개 (개별 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'double-no-caption',
    title: '2개 (캡션 없음)',
    description: '2개 (캡션 없음) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'double-vertical-full-caption',
    title: '2개 (위1개 아래1개 + 전체 캡션)',
    description: '2개 (위1개 아래1개 + 전체 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'triple-full-caption',
    title: '3개 (전체 캡션)',
    description: '3개 (전체 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'triple-two-images-one-caption',
    title: '3개 (이미지 2개 1개 캡션)',
    description: '3개 (이미지 2개 1개 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'triple-individual-two-lines-caption',
    title: '3개 (개별 캡션 및 캡션 2줄 처리)',
    description: '3개 (개별 캡션 및 캡션 2줄 처리) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'triple-discussion-full-caption',
    title: '3개 (좌담 3명 전체 캡션)',
    description: '3개 (좌담 3명 전체 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'triple-two-top-one-bottom-full-caption',
    title: '3개 (위2개 아래1개 전체 캡션)',
    description: '3개 (위2개 아래1개 전체 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'quad-discussion-full-caption',
    title: '4개 (좌담 전체 캡션)',
    description: '4개 (좌담 전체 캡션) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'caption-no-br',
    title: '이미지 캡션 br 처리 없앤 캡션',
    description: '이미지 캡션 br 처리 없앤 캡션 템플릿입니다.',
    html: ''
  },
  {
    id: 'caption-width-based-on-image-size-1',
    title: '이미지 크기에 따른 캡션 넓이',
    description: '이미지 크기에 따른 캡션 넓이 템플릿입니다.',
    html: ''
  },
  {
    id: 'caption-width-based-on-image-size-2',
    title: '이미지 크기에 따른 캡션 넓이',
    description: '이미지 크기에 따른 캡션 넓이 템플릿입니다.',
    html: ''
  },
  {
    id: 'vertical-each-image-caption',
    title: '위 아래 각각 이미지 하나 캡션',
    description: '위 아래 각각 이미지 하나 캡션 템플릿입니다.',
    html: ''
  }
];

const ArteImage: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            이미지
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">이미지</span>
          </div>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {imageTemplates.map((template) => (
          <div key={template.id} className="bg-slate-50/30 dark:bg-slate-900/10 p-2 rounded-2xl border border-slate-100 dark:border-slate-900">
            <ArteHtmlEditor 
              title={template.title} 
              description={template.description} 
              initialHtml={template.html} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArteImage;
