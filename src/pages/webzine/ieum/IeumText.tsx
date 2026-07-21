import React from 'react';
import IeumHtmlEditor from '../../../components/webzine/IeumHtmlEditor';

export interface IeumTemplateItem {
  id: string;
  title: string;
  description: string;
  html: string;
}

// 이음 텍스트 템플릿 배열 (원하는 템플릿을 자유롭게 추가 가능)
const ieumTextTemplates: IeumTemplateItem[] = [
  {
    id: 'ieum-text-basic',
    title: '이음 텍스트 기본 기사',
    description: '이음온라인 표준 기사 본문 패러그래프 및 인용문 템플릿입니다.',
    html: `<div class="sub_view_txt">
  <p class="txt_lead" style="font-size: 18px; font-weight: bold; color: #111; line-height: 1.7; margin-bottom: 20px;">
    예술이란 누군가의 삶을 가만히 들여다보고, 그 속에서 서로의 존재를 긍정하는 따뜻한 시선이다.
  </p>
  <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 15px;">
    한국장애인문화예술원 이음온라인은 장애예술인들의 창작 활동과 문화예술 현장의 다채로운 소식을 깊이 있게 담아냅니다. 배리어프리 예술 환경 조성을 향한 우리 모두의 질문과 실천을 응원합니다.
  </p>
  <blockquote style="background: #f8fafc; border-left: 4px solid #7c3aed; padding: 16px 20px; margin: 20px 0; font-size: 15px; color: #475569;">
    "경계 없는 창작의 장에서 누구나 자기만의 언어로 세상을 표현할 수 있어야 합니다."
  </blockquote>
</div>`
  },
  {
    id: 'ieum-text-interview',
    title: '이음 인터뷰 텍스트',
    description: '질문과 답변이 돋보이는 이음온라인 인터뷰 기사 서식 템플릿입니다.',
    html: `<div class="sub_view_interview">
  <div style="margin-bottom: 25px;">
    <h4 style="font-size: 17px; font-weight: bold; color: #6d28d9; margin-bottom: 8px;">
      Q. 이번 이음온라인 기획 기사에서 가장 강조하고 싶었던 가치는 무엇인가요?
    </h4>
    <p style="font-size: 15.5px; line-height: 1.8; color: #334155; padding-left: 12px;">
      A. 무엇보다 '접근성(Accessibility)'이 단지 물리적 장벽의 제거에 그치지 않고, 창작의 형태이자 미학적 원동력이 될 수 있음을 보여주고 싶었습니다.
    </p>
  </div>
</div>`
  }
];

const IeumText: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
          이음 - 텍스트
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          홈 &gt; 웹진 &gt; 이음 &gt; 텍스트
        </p>
      </div>

      {/* Editor List */}
      <div className="space-y-8">
        {ieumTextTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-slate-50/30 dark:bg-slate-900/10 p-2 rounded-2xl border border-slate-100 dark:border-slate-900"
          >
            <IeumHtmlEditor
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

export default IeumText;
