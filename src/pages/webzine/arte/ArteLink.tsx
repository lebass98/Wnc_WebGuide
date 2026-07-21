import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const linkTemplates = [
  {
    id: 'link-type-1',
    title: '링크 타입 1',
    description: '공고문 및 자료 다운로드 형태의 링크 리스트 양식입니다.',
    html: `<div class="post_link_section" style="padding: 10px 0;">
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
</div>`
  },
  {
    id: 'link-type-2',
    title: '링크 타입 2',
    description: '추가 링크 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'link-type-3',
    title: '링크 타입 3',
    description: '추가 링크 레이아웃 템플릿입니다.',
    html: ''
  }
];

const ArteLink: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
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

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {linkTemplates.map((template) => (
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

export default ArteLink;
