import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const initialHtml = `<!-- 컨텐츠 시작 -->
<div class="post_link_section" style="padding: 10px 0;">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 20px;">
        문화예술교육 아르떼365 웹진에서 다루는 다채로운 정보와 지원 사업 공고를 아래 링크들을 통해 상세히 확인하실 수 있습니다.
    </p>
    
    <div class="link_list_w" style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
        <div style="padding: 15px; border: 1px solid #eaeaea; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <strong style="display: block; font-size: 15px; color: #111;">[공고] 2026년 문화예술교육 지원사업 통합 공모</strong>
                <span style="font-size: 13px; color: #888;">접수 기간: ~ 2026.08.31</span>
            </div>
            <a href="https://arte365.kr" target="_blank" rel="noopener noreferrer" 
               style="display: inline-block; padding: 8px 16px; background-color: #E2001A; color: #fff; border-radius: 4px; font-weight: bold; text-decoration: none; font-size: 13px;">
                자세히 보기
            </a>
        </div>

        <div style="padding: 15px; border: 1px solid #eaeaea; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <strong style="display: block; font-size: 15px; color: #111;">[자료실] 문화예술교육 트렌드 리포트 다운로드</strong>
                <span style="font-size: 13px; color: #888;">포맷: PDF (12.4 MB)</span>
            </div>
            <a href="/wp-content/uploads/2023/06/trend_report_2026.pdf" target="_blank" rel="noopener noreferrer" 
               style="display: inline-block; padding: 8px 16px; background-color: #333; color: #fff; border-radius: 4px; font-weight: bold; text-decoration: none; font-size: 13px;">
                파일 다운로드
            </a>
        </div>
    </div>
</div>
<!-- 컨텐츠 끝 -->`;

const ArteLink: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            링크 (a 태그)
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">링크 (a 태그)</span>
          </div>
        </div>
      </div>

      {/* Reusable Editor & Preview Component */}
      <ArteHtmlEditor 
        title="아르떼 링크 포스트 에디터" 
        description="아르떼 본문 링크(a 태그) 및 버튼 양식 HTML 코드를 복사/붙여넣기하고 실시간 렌더링 스타일을 시뮬레이션합니다." 
        initialHtml={initialHtml} 
      />
    </div>
  );
};

export default ArteLink;
