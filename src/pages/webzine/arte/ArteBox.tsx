import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const boxTemplates = [
  {
    id: 'box-type-1',
    title: '박스 타입 1',
    description: '안내문 및 팁 표시용 하이라이트 박스 양식입니다.',
    html: `<div class="post_box_section mt_25">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
        안내문, 공지, 주의사항 및 참고 팁 등을 본문에 돋보이게 처리하는 하이라이트 박스 영역 템플릿입니다.
    </p>

    <div class="arte_info_box" style="border: 1px solid #E2001A; background-color: #FFF8F8; padding: 22px; border-radius: 8px; max-width: 800px; margin: 0 auto;">
        <h4 style="font-size: 16px; font-weight: bold; color: #E2001A; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px;">📢</span> 주요 안내 사항 및 참고사항
        </h4>
        <ul style="list-style-type: none; padding-left: 0; margin: 0; font-size: 14.5px; line-height: 1.8; color: #444;">
            <li style="position: relative; padding-left: 15px; margin-bottom: 8px;">
                <span style="position: absolute; left: 0; color: #E2001A;">▪</span>
                포토 에세이 공모 참여 신청은 하단 링크 구역의 폼을 통해 접수할 수 있습니다.
            </li>
            <li style="position: relative; padding-left: 15px; margin-bottom: 8px;">
                <span style="position: absolute; left: 0; color: #E2001A;">▪</span>
                파일 첨부 용량 한도는 개별 20MB이며, 대용량 파일은 외부 링크로 기재 바랍니다.
            </li>
            <li style="position: relative; padding-left: 15px; margin-bottom: 0;">
                <span style="position: absolute; left: 0; color: #E2001A;">▪</span>
                관련 문의는 운영 대행 사무국(02-1234-5678)으로 문의 바랍니다.
            </li>
        </ul>
    </div>
</div>`
  },
  {
    id: 'box-type-2',
    title: '박스 타입 2',
    description: '추가 박스 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'box-type-3',
    title: '박스 타입 3',
    description: '추가 박스 레이아웃 템플릿입니다.',
    html: ''
  }
];

const ArteBox: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            박스 양식
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">박스 양식</span>
          </div>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {boxTemplates.map((template) => (
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

export default ArteBox;
