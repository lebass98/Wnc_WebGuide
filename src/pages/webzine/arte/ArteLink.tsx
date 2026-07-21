import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const linkTemplates = [
  {
    id: 'image-link',
    title: '이미지 링크',
    description: '이미지에 적용하는 링크 레이아웃 템플릿입니다.',
    html: `<a style="font-size: 16px; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://gongu.copyright.or.kr/gongu/bbs/B0000018/list.do?menuNo=200195&#038;pageIndex=1&#038;searchCnd=1&#038;searchWrd=%EC%B9%A0%EA%B3%A1">공유마당</a>`
  },
  {
    id: 'article-body-link',
    title: '기사 본문 링크',
    description: '기사 본문에 삽입되는 링크 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'small-related-link-box',
    title: '(작은) 관련 링크 박스 - 움틀',
    description: '(작은) 관련 링크 박스 - 움틀 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'large-related-link-article',
    title: '(큰) 관련 링크 및 기사 - 동틀',
    description: '(큰) 관련 링크 및 기사 - 동틀 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'press-release-guide-link',
    title: '동틀 보도자료 및 안내 링크',
    description: '동틀 보도자료 및 안내 링크 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'download-link',
    title: '다운로드',
    description: '첨부파일 다운로드 형태의 링크 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'discussion-tab-5',
    title: '좌담 탭 5개',
    description: '5개 버튼으로 구성된 좌담 탭 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'discussion-tab-4',
    title: '좌담 탭 4개',
    description: '4개 버튼으로 구성된 좌담 탭 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'blue-small-link',
    title: '본문 파란색 작은 링크',
    description: '본문 내 파란색으로 스타일링된 작은 링크 템플릿입니다.',
    html: ''
  },
  {
    id: 'discussion-tab-2',
    title: '좌담 탭 2개',
    description: '2개 버튼으로 구성된 좌담 탭 레이아웃 템플릿입니다.',
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
