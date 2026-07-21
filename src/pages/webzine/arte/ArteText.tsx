import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const textTemplates = [
  {
    id: 'text-type-1',
    title: '글씨 타입 1',
    description: '본문 텍스트 단락, 소제목 및 인용구 레이아웃 양식입니다.',
    html: `<div class="post_text_section">
    <h3 class="title_type1" style="font-size: 22px; font-weight: bold; color: #111; border-left: 4px solid #E2001A; padding-left: 12px; margin-bottom: 18px; line-height: 1.4;">
        예술로 빚어내는 삶의 이야기
    </h3>
    <p class="desc_type1" style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
        문화예술교육의 지향점은 기량의 연마에 있지 않습니다. 예술을 매개로 타인과 공감하고, 내면의 생각들을 시각적, 청각적 언어로 표현해내는 즐거움을 찾는 데에 그 목적이 있습니다. 이 글은 전국의 다양한 교육 현장에서 교사들과 학습자들이 쌓아 올린 따뜻한 성장의 단면들을 소개합니다.
    </p>

    <blockquote class="quote_type1" style="margin: 30px 0; padding: 20px; border-top: 1px solid #e1e1e1; border-bottom: 1px solid #e1e1e1; background-color: #fafafa; font-style: italic; color: #555; text-align: center; font-size: 17px; line-height: 1.6;">
        "모든 어린이는 예술가다. 문제는 어떻게 하면 나이가 들어서도 예술가로 남아있을 수 있느냐 하는 것이다."<br />
        <span style="display: block; font-size: 14px; color: #888; margin-top: 8px; font-style: normal;">- 파블로 피카소 -</span>
    </blockquote>

    <h4 class="title_type2" style="font-size: 18px; font-weight: bold; color: #111; margin-top: 30px; margin-bottom: 12px;">
        1. 관계의 시작과 소통의 통로
    </h4>
    <p class="desc_type2" style="font-size: 15px; line-height: 1.7; color: #555; margin-bottom: 20px;">
        참가자들은 둥글게 모여 서로의 눈빛을 맞추는 것으로 시작합니다. 연극 놀이와 신체 훈련은 닫혀 있던 마음의 문을 여는 열쇠가 되며, 서로의 다른 목소리가 하나의 하모니를 만들어내는 합창 연습은 나와 다름을 포용하는 공동체적 경험을 선사합니다.
    </p>
</div>`
  },
  {
    id: 'text-type-2',
    title: '글씨 타입 2',
    description: '추가 본문 글씨 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'text-type-3',
    title: '글씨 타입 3',
    description: '추가 본문 글씨 레이아웃 템플릿입니다.',
    html: ''
  }
];

const ArteText: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            글씨
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">글씨</span>
          </div>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {textTemplates.map((template) => (
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

export default ArteText;
