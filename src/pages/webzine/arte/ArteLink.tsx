import React from 'react';
import { ChevronRight, LayoutList, Grid2X2 } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';
import { useArteLayout } from '../../../hooks/useArteLayout';

const linkTemplates = [
  {
    id: 'image-link',
    title: '이미지 링크',
    description: '이미지에 적용하는 링크 레이아웃 템플릿입니다.',
    html: `<a style="font-size: 16px; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://gongu.copyright.or.kr/gongu/bbs/B0000018/list.do?menuNo=200195&#038;pageIndex=1&#038;searchCnd=1&#038;searchWrd=%EC%B9%A0%EA%B3%A1">공유마당</a>`
  }, {
    id: 'article-body-link',
    title: '기사 본문 링크',
    description: '기사 본문에 삽입되는 링크 레이아웃 템플릿입니다.',
    html: `<a href="https://sotong.arko.or.kr/communication/contents/notice.do?mode=view&#038;idx=0c06e3963dd24f6a85d5bfeb91d4488d&#038;currentPage=2&#038;searchValue=" target="_blank" style="text-decoration:underline; font-size:17px;" rel="noopener noreferrer">입장문</a>`
  }, {
    id: 'small-related-link-box',
    title: '(작은) 관련 링크 박스 - 움틀',
    description: '(작은) 관련 링크 박스 - 움틀 레이아웃 템플릿입니다.',
    html: `<div class="posttextinin mt_25">
<dl>
<dt style="font-size: 16px;">[관련링크]</dt>
<dd>· <a href="https://lib.arte.or.kr/educationdata/board/ArchiveData_BoardView.do?board_id=BRD_ID0058988 " target="_blank" rel="noopener noreferrer" style="text-decoration:underline; font-weight: 400; font-size: 16px;">2022 사회를 마주하는 N개의 문화예술교육 &#8211; ‘비닐스런 과자 팩토리’ 아카이빙북</a></dd>
</dl>
</div>`
  }, {
    id: 'large-related-link-article',
    title: '(큰) 관련 링크 및 기사 - 동틀',
    description: '(큰) 관련 링크 및 기사 - 동틀 레이아웃 템플릿입니다.',
    html: `<div class="posttextinin mt_25">
<dl>
<dt>[관련기사]</dt>
<dd>· <a href="https://arte365.kr/?p=98294" target="_blank" rel="noopener noreferrer" style="display: inline; text-decoration:underline; font-weight: 400;">미래사회 문화예술교육 가치 확산으로 새롭게 발돋움한다 | 박은실 한국문화예술교육진흥원 원장 (인터뷰)(2023.02.27.)</a> </dd>
<dd>· <a href="https://arte365.kr/?p=96082" target="_blank" rel="noopener noreferrer" style="display: inline; text-decoration:underline; font-weight: 400;">함께 만들어가는 우리의 지향점 | 제2차 문화예술교육 종합계획 수립을 위한 의견수렴 결과(2022.09.30.)</a> </dd>
</dl>
<dl class="mt_25">
<dt>[관련링크]</dt>
<dd>· <a href="http://www.mcst.go.kr/kor/s_policy/dept/deptView.jsp?pSeq=1703&#038;pDataCD=0417000000" target="_blank" rel="noopener noreferrer" style="text-decoration:underline; font-weight: 400;">제2차 문화예술교육 종합계획(PDF)</a></dd>
</dl>
</div>`
  }, {
    id: 'press-release-guide-link',
    title: '동틀 보도자료 및 안내 링크',
    description: '동틀 보도자료 및 안내 링크 레이아웃 템플릿입니다.',
    html: `<div class="posttext mt_25">
▶ <a href="https://www.arko.or.kr/board/view/4057?page=&#038;cid=1806263" target="_blank" rel="noopener noreferrer" style="font-size:17px">한국문화예술위원회 보도자료</a> <br />
▶ <a href="https://www.arko.or.kr/board/view/4013?bid=463&#038;page=&#038;cid=1806248&#038;sf_icon_category=cw00000019" target="_blank" rel="noopener noreferrer" style="font-size:17px">예술-기술 매칭 사업 공모 안내</a>
</div>`
  }, {
    id: 'download-link',
    title: '다운로드',
    description: '첨부파일 다운로드 형태의 링크 레이아웃 템플릿입니다.',
    html: `<a href="http://www.arteweek.kr/assets/download/2021international_art_education_week_programbook_Kor_Final.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;    font-size: 16px;    font-weight: 400; display:inline;">[PDF 다운로드]</a>`
  }, {
    id: 'discussion-tab-5',
    title: '좌담 탭 5개',
    description: '5개 버튼으로 구성된 좌담 탭 레이아웃 템플릿입니다.',
    html: `<div class="tabLink row swiper-container">
<div class="swiper-wrapper num5 num6">
<div class="swiper-slide">
<a href="#A" class="selected">공모사업 심사, 무엇을 보나</a>
</div>
<div class="swiper-slide">
<a href="#B" class="">예술가의 질문과 고유함을 찾아</a>
</div>
<div class="swiper-slide">
<a href="#C" class="">경청하고 소통하는 태도</a>
</div>
<div class="swiper-slide">
<a href="#C" class="">경청하고 소통하는 태도</a>
</div>
<div class="swiper-slide">
<a href="#D" class="">필승전략은 없다</a>
</div>
</div>
<div class="swiper-scrollbar"></div>
</div>`
  }, {
    id: 'discussion-tab-4',
    title: '좌담 탭 4개',
    description: '4개 버튼으로 구성된 좌담 탭 레이아웃 템플릿입니다.',
    html: `<div class="tabLink row swiper-container">
<div class="swiper-wrapper num5 num4">
<div class="swiper-slide">
<a href="#A" class="selected">공모사업 심사, 무엇을 보나</a>
</div>
<div class="swiper-slide">
<a href="#B" class="">예술가의 질문과 고유함을 찾아</a>
</div>
<div class="swiper-slide">
<a href="#C" class="">경청하고 소통하는 태도</a>
</div>
<div class="swiper-slide">
<a href="#D" class="">필승전략은 없다</a>
</div>
</div>
<div class="swiper-scrollbar"></div>
</div>`
  }, {
    id: 'blue-small-link',
    title: '본문 파란색 작은 링크',
    description: '본문 내 파란색으로 스타일링된 작은 링크 템플릿입니다.',
    html: `<a style="display: inline; color:#2368c6;font-size:100% !important; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://unesdoc.unesco.org/ark:/48223/pf0000381212">「함께 그려보는 우리의 미래 – 교육을 위한 새로운 사회계약」</a>`
  }, {
    id: 'discussion-tab-2',
    title: '좌담 탭 2개',
    description: '2개 버튼으로 구성된 좌담 탭 레이아웃 템플릿입니다.',
    html: `<div class="tabLink row swiper-container">
<div class="swiper-wrapper num2">
<div class="swiper-slide">
<a href="#A">새로운 감각이 열린 순간들</a>
</div>
<div class="swiper-slide">
<a href="#B">예술의 상상력이 가진 힘</a>
</div>
</div>
</div>`
  }
];

const ArteLink: React.FC = () => {
  const [layoutColumns, setLayoutColumns] = useArteLayout(1);

  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header with Bottom Border */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
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

        {/* 카드 정렬 토글 버튼 */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl w-fit self-end sm:self-auto">
          <button
            onClick={() => setLayoutColumns(1)}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              layoutColumns === 1
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
            title="1행 보기"
          >
            <LayoutList className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLayoutColumns(2)}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              layoutColumns === 2
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
            title="2행 보기"
          >
            <Grid2X2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className={`grid gap-8 ${layoutColumns === 1 ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-2'}`}>
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
