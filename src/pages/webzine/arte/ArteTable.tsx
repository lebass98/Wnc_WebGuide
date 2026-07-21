import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

const tableTemplates: TemplateItem[] = [
  {
    id: 'no-scroll-table',
    title: '스크롤 없는 표',
    description: '가로 스크롤 없이 깔끔하게 화면 폭에 맞춤 노출되는 표 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="post_tbl">
<table class="tbl_type1" style="width:100%; border-collapse:collapse; text-align:center;">
  <caption class="blind">스크롤 없는 표</caption>
  <colgroup>
    <col style="width:20%">
    <col style="width:40%">
    <col style="width:40%">
  </colgroup>
  <thead>
    <tr style="background:#f4f4f4; border-top:2px solid #222; border-bottom:1px solid #ddd;">
      <th scope="col" style="padding:12px; font-weight:bold; color:#111;">구분</th>
      <th scope="col" style="padding:12px; font-weight:bold; color:#111;">주요 내용</th>
      <th scope="col" style="padding:12px; font-weight:bold; color:#111;">비고 및 장소</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:12px; font-weight:bold; background:#fafafa;">기획 세션</td>
      <td style="padding:12px; text-align:left;">지역 문화예술 기반 커뮤니티 프로그램 설계</td>
      <td style="padding:12px;">온라인 / Zoom 회의실</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:12px; font-weight:bold; background:#fafafa;">현장 실습</td>
      <td style="padding:12px; text-align:left;">주민 참여형 예술 창작 및 워크숍 운영</td>
      <td style="padding:12px;">아르떼 365 창작 공간</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:12px; font-weight:bold; background:#fafafa;">성과 공유</td>
      <td style="padding:12px; text-align:left;">결과 아카이빙북 출판 및 프로젝트 발표회</td>
      <td style="padding:12px;">본원 대강당</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'scroll-gray-table',
    title: '스크롤 있는 표 (무채색)',
    description: '데이터 항목이 많을 때 모바일에서 가로 스크롤을 제공하는 차분한 무채색 디자인 표 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="tbl_scroll" style="overflow-x:auto; -webkit-overflow-scrolling:touch;">
<table class="tbl_type_gray" style="width:100%; min-width:650px; border-collapse:collapse; text-align:center;">
  <caption class="blind">스크롤 있는 표 (무채색)</caption>
  <thead>
    <tr style="background:#e2e8f0; border-top:2px solid #475569; color:#1e293b;">
      <th style="padding:12px 16px; border:1px solid #cbd5e1;">프로그램명</th>
      <th style="padding:12px 16px; border:1px solid #cbd5e1;">대상</th>
      <th style="padding:12px 16px; border:1px solid #cbd5e1;">운영 기간</th>
      <th style="padding:12px 16px; border:1px solid #cbd5e1;">참가 인원</th>
      <th style="padding:12px 16px; border:1px solid #cbd5e1;">상태</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#ffffff; border-bottom:1px solid #e2e8f0;">
      <td style="padding:12px 16px; border:1px solid #e2e8f0; font-weight:600;">꿈의 오케스트라</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">아동·청소년</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">2026.03 ~ 2026.11</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">45명</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0; color:#2563eb; font-weight:bold;">진행중</td>
    </tr>
    <tr style="background:#f8fafc; border-bottom:1px solid #e2e8f0;">
      <td style="padding:12px 16px; border:1px solid #e2e8f0; font-weight:600;">유아 문화예술교육</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">만 3~5세 유아</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">2026.04 ~ 2026.07</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">120명</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0; color:#2563eb; font-weight:bold;">진행중</td>
    </tr>
    <tr style="background:#ffffff; border-bottom:1px solid #e2e8f0;">
      <td style="padding:12px 16px; border:1px solid #e2e8f0; font-weight:600;">노인 문화예술인류학</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">65세 이상 어르신</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">2026.05 ~ 2026.09</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0;">30명</td>
      <td style="padding:12px 16px; border:1px solid #e2e8f0; color:#475569;">접수마감</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'table-title-unit',
    title: '표 상단(제목 + 단위표시)',
    description: '표 상단 왼쪽에는 제목, 오른쪽에는 단위 표기가 구성된 리포트형 테이블 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="tbl_top" style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:8px;">
  <div class="tbl_title" style="font-size:16px; font-weight:bold; color:#0f172a;">
    [표 1] 2026년도 지역별 사업예산 배분 현황
  </div>
  <div class="tbl_unit" style="font-size:13px; color:#64748b;">
    (단위: 천원, %)
  </div>
</div>
<div class="post_tbl">
<table style="width:100%; border-collapse:collapse; text-align:center; border-top:2px solid #0f172a;">
  <thead>
    <tr style="background:#f1f5f9; border-bottom:1px solid #cbd5e1; font-size:14px;">
      <th style="padding:10px; color:#334155;">지역구분</th>
      <th style="padding:10px; color:#334155;">지원 건수</th>
      <th style="padding:10px; color:#334155;">총 예산액</th>
      <th style="padding:10px; color:#334155;">비율</th>
    </tr>
  </thead>
  <tbody style="font-size:14px; color:#334155;">
    <tr style="border-bottom:1px solid #e2e8f0;">
      <td style="padding:10px; font-weight:bold;">수도권</td>
      <td style="padding:10px;">124건</td>
      <td style="padding:10px; text-align:right;">450,000</td>
      <td style="padding:10px;">37.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;">
      <td style="padding:10px; font-weight:bold;">충청·강원권</td>
      <td style="padding:10px;">86건</td>
      <td style="padding:10px; text-align:right;">320,000</td>
      <td style="padding:10px;">26.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;">
      <td style="padding:10px; font-weight:bold;">영남·호남권</td>
      <td style="padding:10px;">110건</td>
      <td style="padding:10px; text-align:right;">430,000</td>
      <td style="padding:10px;">35.8%</td>
    </tr>
    <tr style="background:#f8fafc; font-weight:bold; border-top:2px solid #cbd5e1;">
      <td style="padding:10px;">합계</td>
      <td style="padding:10px;">320건</td>
      <td style="padding:10px; text-align:right;">1,200,000</td>
      <td style="padding:10px;">100.0%</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'step-process-table',
    title: '단계 테이블',
    description: '사업 공모 및 사업 추진 프로세스를 1단계~N단계 순서대로 시각화한 단계형 테이블 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="step_table_box">
<table class="tbl_step" style="width:100%; border-collapse:collapse; text-align:left;">
  <caption class="blind">단계 테이블</caption>
  <thead>
    <tr style="background:#1e293b; color:#ffffff; font-size:15px;">
      <th style="padding:14px; text-align:center; width:20%;">단계</th>
      <th style="padding:14px; width:35%;">추진 내용</th>
      <th style="padding:14px; width:25%;">세부 세션</th>
      <th style="padding:14px; text-align:center; width:20%;">일정</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #e2e8f0;">
      <td style="padding:14px; text-align:center; background:#f1f5f9; font-weight:bold; color:#2563eb;">1단계: 공모 및 선정</td>
      <td style="padding:14px; font-weight:600;">참여 단체 공모 접수 및 서류/면접 심사</td>
      <td style="padding:14px; color:#64748b;">지원서 검토, 현장 심사</td>
      <td style="padding:14px; text-align:center; color:#475569;">3월 1일 ~ 3월 20일</td>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;">
      <td style="padding:14px; text-align:center; background:#f1f5f9; font-weight:bold; color:#2563eb;">2단계: 사전 워크숍</td>
      <td style="padding:14px; font-weight:600;">기획자 및 예술가 역량강화 멘토링</td>
      <td style="padding:14px; color:#64748b;">전문가 특강, 컨설팅</td>
      <td style="padding:14px; text-align:center; color:#475569;">4월 5일 ~ 4월 15일</td>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;">
      <td style="padding:14px; text-align:center; background:#f1f5f9; font-weight:bold; color:#2563eb;">3단계: 프로젝트 실행</td>
      <td style="padding:14px; font-weight:600;">지역 현장 중심 문화예술교육 프로그램 운영</td>
      <td style="padding:14px; color:#64748b;">주민 참여 수업 10회차</td>
      <td style="padding:14px; text-align:center; color:#475569;">5월 ~ 10월</td>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;">
      <td style="padding:14px; text-align:center; background:#f1f5f9; font-weight:bold; color:#2563eb;">4단계: 성과공유회</td>
      <td style="padding:14px; font-weight:600;">결과물 전시, 우수 사례 시상 및 평가회</td>
      <td style="padding:14px; color:#64748b;">아카이빙북 발간</td>
      <td style="padding:14px; text-align:center; color:#475569;">11월 중순</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  }
];

const ArteTable: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="표"
      subcategoryName="표"
      templates={tableTemplates}
    />
  );
};

export default ArteTable;
