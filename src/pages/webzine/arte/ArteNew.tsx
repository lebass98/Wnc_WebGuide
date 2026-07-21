import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const newTemplates = [
  {
    id: 'new-type-1',
    title: '새소식 카드 타입 1',
    description: '가장 기본적인 새소식 공고물 카드 양식입니다.',
    html: `<div class="new_badge_section mt_25">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
        신규 발간 웹진이나 새로 올라온 공고물 카드 등 주목해야 할 신규 이벤트를 위한 카드 형태 템플릿입니다.
    </p>

    <div class="new_event_card" style="position: relative; max-width: 600px; margin: 0 auto; border: 1px solid #e2e2e2; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.06); transition: transform 0.2s ease;">
        <span class="badge_arte_new" style="position: absolute; top: 15px; left: 15px; background-color: #E2001A; color: #fff; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">NEW</span>
        
        <div class="card_image_placeholder" style="height: 220px; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #aaa; font-weight: bold;">
            [웹진 표지 이미지 또는 대표 일러스트 영역]
        </div>

        <div class="card_details" style="padding: 24px; background-color: #fff;">
            <h4 style="font-size: 19px; font-weight: bold; color: #111; margin-top: 0; margin-bottom: 8px;">아르떼365 웹진 2026년 7월호 발간</h4>
            <p style="font-size: 14px; line-height: 1.6; color: #666; margin-bottom: 20px;">
                이번 달 커버스토리는 '기술 혁신이 불러온 미적 경험의 지평선'입니다. 인공지능과 가상현실 기술이 결합되어 학교 문화예술교육을 어떻게 변화시키고 있는지 진단합니다.
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0f0f0; padding-top: 15px;">
                <span style="font-size: 12px; color: #999;">발행일: 2026.07.20</span>
                <span style="font-size: 13px; color: #E2001A; font-weight: bold;">전체 읽기 &rarr;</span>
            </div>
        </div>
    </div>
</div>`
  },
  {
    id: 'new-type-2',
    title: '새소식 카드 타입 2',
    description: '추가 새소식 레이아웃 템플릿입니다.',
    html: ``
  },
  {
    id: 'new-type-3',
    title: '새소식 카드 타입 3',
    description: '추가 새소식 레이아웃 템플릿입니다.',
    html: ``
  }
];

const ArteNew: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            New
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">New</span>
          </div>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {newTemplates.map((template) => (
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

export default ArteNew;
