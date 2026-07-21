import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const imageTemplates = [
  {
    id: 'single-no-caption',
    title: '1개 (캡션 없음)',
    description: '가장 기본적인 단일 이미지 레이아웃입니다.',
    html: `<!-- 컨텐츠 시작 -->
<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt=""></a>
</li>
</ul>
</div>
<!-- 컨텐츠 끝 -->`
  },
  {
    id: 'single-with-caption',
    title: '1개 (캡션 있음)',
    description: '단일 이미지 아래에 설명(캡션)이 포함된 레이아웃입니다.',
    html: `<!-- 컨텐츠 시작 -->
<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt=""></a>
<p class="img_txt" style="text-align: center; margin-top: 8px; color: #666; font-size: 14px;">[사진] 이미지 캡션 텍스트를 이곳에 입력하세요.</p>
</li>
</ul>
</div>
<!-- 컨텐츠 끝 -->`
  },
  {
    id: 'double-horizontal',
    title: '2개 가로 배열 (캡션 없음)',
    description: '두 개의 이미지가 가로로 배치되는 레이아웃입니다.',
    html: `<!-- 컨텐츠 시작 -->
<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
<li class="n3 m_m_10" style="margin-left: 0; float: none; flex: 1; max-width: 48%;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt="" style="width: 100%;"></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none; flex: 1; max-width: 48%;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt="" style="width: 100%;"></a>
</li>
</ul>
</div>
<!-- 컨텐츠 끝 -->`
  },
  {
    id: 'double-horizontal-caption',
    title: '2개 가로 배열 (캡션 있음)',
    description: '두 개의 이미지가 가로로 배치되며 각각의 캡션이 포함된 레이아웃입니다.',
    html: `<!-- 컨텐츠 시작 -->
<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
<li class="n3 m_m_10" style="margin-left: 0; float: none; flex: 1; max-width: 48%;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt="" style="width: 100%;"></a>
<p class="img_txt" style="text-align: center; margin-top: 8px; color: #666; font-size: 14px;">왼쪽 이미지 캡션</p>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none; flex: 1; max-width: 48%;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt="" style="width: 100%;"></a>
<p class="img_txt" style="text-align: center; margin-top: 8px; color: #666; font-size: 14px;">오른쪽 이미지 캡션</p>
</li>
</ul>
</div>
<!-- 컨텐츠 끝 -->`
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
      <div className="space-y-12">
        {imageTemplates.map((template) => (
          <div key={template.id} className="border-t border-slate-200 dark:border-slate-800 pt-8 first:border-0 first:pt-0">
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
