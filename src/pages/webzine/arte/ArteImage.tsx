import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const initialHtml = `<!-- 컨텐츠 시작 -->
<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" alt=""></a>
</li>
</ul>
</div>
<!-- 컨텐츠 끝 -->`;

const ArteImage: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
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

      {/* Reusable Editor & Preview Component */}
      <ArteHtmlEditor 
        title="1개 (캡션 없음)" 
        description="아르떼 이미지 포스트에 반영할 HTML 코드를 복사/붙여넣기하고 실시간 렌더링 스타일을 시뮬레이션합니다." 
        initialHtml={initialHtml} 
      />
    </div>
  );
};

export default ArteImage;
