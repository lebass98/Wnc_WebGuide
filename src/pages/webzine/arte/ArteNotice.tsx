import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

const noticeTemplates: TemplateItem[] = [
  {
    id: 'table-mobile-scroll',
    title: '표 모바일 스크롤',
    description: '모바일 환경에서 가로 스크롤을 통해 넓은 표 데이터를 쉽게 확인할 수 있는 공지 테이블 템플릿입니다.',
    html: `<div class="posttext mt_25">
<p class="ta_r font_size13 color_gray" style="font-size: 13px; color: #666; text-align: right; margin-bottom: 6px;">※ 아래 표는 옆으로 스크롤(좌우 이동)하여 보실 수 있습니다.</p>
<div class="tbl_scroll tableMo_scroll" style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
<table class="tbl_type_notice" style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: center;">
  <caption class="blind">공지사항 모바일 스크롤 표</caption>
  <thead>
    <tr style="background: #f1f5f9; border-top: 2px solid #0f172a; border-bottom: 1px solid #cbd5e1; font-size: 14px; color: #1e293b;">
      <th style="padding: 10px; width: 15%;">구분</th>
      <th style="padding: 10px; width: 35%;">행사 및 이벤트명</th>
      <th style="padding: 10px; width: 25%;">응모/참여 기간</th>
      <th style="padding: 10px; width: 25%;">당첨자 발표일</th>
    </tr>
  </thead>
  <tbody style="font-size: 14px; color: #334155;">
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 10px; font-weight: bold; color: #2563eb;">독자이벤트</td>
      <td style="padding: 10px; text-align: left;">[아르떼365] 7월호 읽기 만족도 설문조사</td>
      <td style="padding: 10px;">2026.07.01 ~ 07.20</td>
      <td style="padding: 10px;">2026.07.25</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 10px; font-weight: bold; color: #2563eb;">공모전</td>
      <td style="padding: 10px; text-align: left;">2026 문화예술교육 현장 우수 사례 수기 공모</td>
      <td style="padding: 10px;">2026.06.15 ~ 07.15</td>
      <td style="padding: 10px;">2026.07.30</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'table-no-1-100-kakao',
    title: '표 NO.1~100 (카카오)',
    description: '카카오 닉네임/아이디 기반 당첨자 100인 목록 명단 표 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="ta_c f_bold" style="font-size: 17px; font-weight: bold; margin-bottom: 12px; color: #111;">
  [이벤트 당첨자 발표] 카카오 닉네임 당첨자 (NO. 1 ~ NO. 100)
</div>
<div class="tbl_scroll tableMo_scroll" style="overflow-x: auto; max-height: 400px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px;">
  <thead>
    <tr style="background: #fee500; color: #191919; position: sticky; top: 0; font-weight: bold;">
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">NO</th>
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">카카오 닉네임</th>
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">NO</th>
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">카카오 닉네임</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">1</td><td>아르떼짱(*)</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">51</td><td>문화사랑(*)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">2</td><td>예술가희(*)</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">52</td><td>햇살가득(*)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">3</td><td>파란하늘(*)</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">53</td><td>푸른숲(*)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">...</td><td>...</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">...</td><td>...</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">50</td><td>행복한하루(*)</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">100</td><td>희망찬내일(*)</td>
    </tr>
  </tbody>
</table>
</div>
<p style="font-size: 12px; color: #888; margin-top: 8px;">* 개인정보 보호를 위해 닉네임 일부가 마스킹 처리되었습니다.</p>
</div>`
  },
  {
    id: 'table-no-1-50-kakao',
    title: '표 NO.1~50 (카카오)',
    description: '카카오 닉네임/아이디 기반 당첨자 50인 명단 표 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="ta_c f_bold" style="font-size: 16px; font-weight: bold; margin-bottom: 10px; color: #111;">
  [이벤트 당첨자 발표] 카카오 닉네임 당첨자 명단 (NO. 1 ~ NO. 50)
</div>
<div class="tbl_scroll tableMo_scroll" style="overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px;">
  <thead>
    <tr style="background: #fee500; color: #191919; font-weight: bold;">
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">NO</th>
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">카카오 닉네임</th>
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">NO</th>
      <th style="padding: 8px; border-bottom: 1px solid #e0c800;">카카오 닉네임</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">1</td><td>별빛달빛(*)</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">26</td><td>바람소리(*)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">2</td><td>꿈꾸는나무(*)</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">27</td><td>소소한일상(*)</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">...</td><td>...</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">...</td><td>...</td>
    </tr>
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">25</td><td>초록정원(*)</td>
      <td style="padding: 7px; background: #fafafa; font-weight: bold;">50</td><td>즐거운마음(*)</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'table-no-1-30-contact',
    title: '표 NO.1~30 (연락처)',
    description: '성함 및 마스킹 처리된 휴대폰 연락처 기반 당첨자 30인 명단 표 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="ta_c f_bold" style="font-size: 16px; font-weight: bold; margin-bottom: 10px; color: #111;">
  [이벤트 당첨자 명단] 성함 및 연락처 뒷자리 (NO. 1 ~ NO. 30)
</div>
<div class="tbl_scroll tableMo_scroll" style="overflow-x: auto; border: 1px solid #cbd5e1; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px;">
  <thead>
    <tr style="background: #475569; color: #ffffff; font-weight: bold;">
      <th style="padding: 8px;">NO</th>
      <th style="padding: 8px;">성함</th>
      <th style="padding: 8px;">휴대폰 번호</th>
      <th style="padding: 8px;">NO</th>
      <th style="padding: 8px;">성함</th>
      <th style="padding: 8px;">휴대폰 번호</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">1</td><td>김*진</td><td>010-****-1234</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">16</td><td>이*우</td><td>010-****-5678</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">2</td><td>박*영</td><td>010-****-2345</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">17</td><td>최*호</td><td>010-****-6789</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">...</td><td>...</td><td>...</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">...</td><td>...</td><td>...</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">15</td><td>정*아</td><td>010-****-3456</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">30</td><td>한*희</td><td>010-****-7890</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'table-no-1-50-contact',
    title: '표 NO.1~50 (연락처)',
    description: '성함 및 마스킹 처리된 연락처 기반 당첨자 50인 명단 표 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="ta_c f_bold" style="font-size: 16px; font-weight: bold; margin-bottom: 10px; color: #111;">
  [이벤트 당첨자 명단] 성함 및 연락처 (NO. 1 ~ NO. 50)
</div>
<div class="tbl_scroll tableMo_scroll" style="overflow-x: auto; max-height: 350px; overflow-y: auto; border: 1px solid #cbd5e1; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px;">
  <thead>
    <tr style="background: #334155; color: #ffffff; font-weight: bold; position: sticky; top: 0;">
      <th style="padding: 8px;">NO</th>
      <th style="padding: 8px;">성함</th>
      <th style="padding: 8px;">연락처</th>
      <th style="padding: 8px;">NO</th>
      <th style="padding: 8px;">성함</th>
      <th style="padding: 8px;">연락처</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">1</td><td>강*민</td><td>010-****-1111</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">26</td><td>윤*서</td><td>010-****-6666</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">2</td><td>조*성</td><td>010-****-2222</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">27</td><td>장*원</td><td>010-****-7777</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">...</td><td>...</td><td>...</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">...</td><td>...</td><td>...</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">25</td><td>임*혁</td><td>010-****-5555</td>
      <td style="padding: 7px; background: #f8fafc; font-weight: bold;">50</td><td>황*지</td><td>010-****-9999</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'table-no-1-100-contact',
    title: '표 NO.1~100 (연락처)',
    description: '성함 및 마스킹 처리된 연락처 기반 당첨자 100인 대규모 명단 표 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="ta_c f_bold" style="font-size: 16px; font-weight: bold; margin-bottom: 10px; color: #111;">
  [이벤트 당첨자 명단] 성함 및 연락처 (NO. 1 ~ NO. 100)
</div>
<div class="tbl_scroll tableMo_scroll" style="overflow-x: auto; max-height: 420px; overflow-y: auto; border: 1px solid #94a3b8; border-radius: 8px;">
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13px;">
  <thead>
    <tr style="background: #1e293b; color: #ffffff; font-weight: bold; position: sticky; top: 0;">
      <th style="padding: 8px;">NO</th>
      <th style="padding: 8px;">성함</th>
      <th style="padding: 8px;">연락처</th>
      <th style="padding: 8px;">NO</th>
      <th style="padding: 8px;">성함</th>
      <th style="padding: 8px;">연락처</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">1</td><td>권*현</td><td>010-****-1001</td>
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">51</td><td>송*주</td><td>010-****-1051</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">2</td><td>신*철</td><td>010-****-1002</td>
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">52</td><td>유*나</td><td>010-****-1052</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">...</td><td>...</td><td>...</td>
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">...</td><td>...</td><td>...</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">50</td><td>안*준</td><td>010-****-1050</td>
      <td style="padding: 6px; background: #f1f5f9; font-weight: bold;">100</td><td>홍*범</td><td>010-****-1100</td>
    </tr>
  </tbody>
</table>
</div>
</div>`
  },
  {
    id: 'images-3-horizontal-link',
    title: '이미지 3개 링크 연결 (가로)',
    description: '3개의 배너 이미지가 가로로 배치되고 각 이미지에 하이퍼링크가 연결된 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto;">
<ul class="ul_floatkyh6" style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; list-style: none; padding: 0;">
  <li style="flex: 1; min-width: 180px; max-width: 280px; margin: 0;">
    <a href="https://arte365.kr/event1" target="_blank" rel="noopener noreferrer" title="이벤트 1 바로가기">
      <img src="/wp-content/uploads/2023/05/banner_horiz_01.jpg" alt="이벤트 1 배너" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #eee;" />
    </a>
    <div style="font-size: 13px; color: #333; margin-top: 6px; font-weight: bold;">[이벤트 1] 만족도 조사 참여하기</div>
  </li>
  <li style="flex: 1; min-width: 180px; max-width: 280px; margin: 0;">
    <a href="https://arte365.kr/event2" target="_blank" rel="noopener noreferrer" title="이벤트 2 바로가기">
      <img src="/wp-content/uploads/2023/05/banner_horiz_02.jpg" alt="이벤트 2 배너" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #eee;" />
    </a>
    <div style="font-size: 13px; color: #333; margin-top: 6px; font-weight: bold;">[이벤트 2] 한 줄 평 작성하고 선물받기</div>
  </li>
  <li style="flex: 1; min-width: 180px; max-width: 280px; margin: 0;">
    <a href="https://arte365.kr/event3" target="_blank" rel="noopener noreferrer" title="이벤트 3 바로가기">
      <img src="/wp-content/uploads/2023/05/banner_horiz_03.jpg" alt="이벤트 3 배너" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #eee;" />
    </a>
    <div style="font-size: 13px; color: #333; margin-top: 6px; font-weight: bold;">[이벤트 3] 친구 추천 소문내기</div>
  </li>
</ul>
</div>`
  },
  {
    id: 'images-3-vertical-link',
    title: '이미지 3개 링크 연결 (세로)',
    description: '3개의 배너 이미지가 세로 방향으로 순차 배치되며 링크가 연결된 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto; max-width: 600px;">
<div style="display: flex; flex-direction: column; gap: 20px;">
  <div style="text-align: center;">
    <a href="https://arte365.kr/notice1" target="_blank" rel="noopener noreferrer" title="공지 1 상세 보기">
      <img src="/wp-content/uploads/2023/05/banner_vert_01.jpg" alt="공지 1 배너" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0;" />
    </a>
    <p style="font-size: 14px; color: #334155; margin-top: 8px; font-weight: bold;">① 2026 문화예술교육 정책 포럼 사전등록 안내</p>
  </div>
  <div style="text-align: center;">
    <a href="https://arte365.kr/notice2" target="_blank" rel="noopener noreferrer" title="공지 2 상세 보기">
      <img src="/wp-content/uploads/2023/05/banner_vert_02.jpg" alt="공지 2 배너" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0;" />
    </a>
    <p style="font-size: 14px; color: #334155; margin-top: 8px; font-weight: bold;">② 아르떼365 아카이브북 무료 배포 신청</p>
  </div>
  <div style="text-align: center;">
    <a href="https://arte365.kr/notice3" target="_blank" rel="noopener noreferrer" title="공지 3 상세 보기">
      <img src="/wp-content/uploads/2023/05/banner_vert_03.jpg" alt="공지 3 배너" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0;" />
    </a>
    <p style="font-size: 14px; color: #334155; margin-top: 8px; font-weight: bold;">③ 2026년 하반기 문화예술교육 지원사업 공모</p>
  </div>
</div>
</div>`
  },
  {
    id: 'must-check-red-text',
    title: '꼭 확인해주세요! 빨간 글씨',
    description: '유의사항 및 경고 문구를 붉은색 강렬한 폰트와 경고 박스로 강조한 템플릿입니다.',
    html: `<div class="posttext mt_25" style="background-color: #fef2f2; border: 1px solid #fecaca; border-left: 5px solid #dc2626; padding: 20px; border-radius: 6px;">
<div style="font-size: 17px; font-weight: bold; color: #dc2626; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
  <span>⚠️ [꼭 확인해주세요!]</span>
</div>
<ul style="font-size: 14px; color: #991b1b; line-height: 1.8; margin: 0; padding-left: 20px;">
  <li><strong>당첨자 분들께서는 2026년 7월 31일(금)까지</strong> 개인정보 수집 동의 및 배송지 정보를 입력해주셔야 경품이 발송됩니다.</li>
  <li>기한 내 미입력 시 당첨이 자동으로 취소될 수 있으니 유의하시기 바랍니다.</li>
  <li>잘못된 연락처 입력으로 인한 경품 오발송은 재발송이 불가능합니다.</li>
</ul>
</div>`
  },
  {
    id: 'publication-hiatus-notice',
    title: '휴간안내',
    description: '아르떼365 정기 휴간 및 발행 일정 조율 공식 안내 박스 템플릿입니다.',
    html: `<div class="posttext mt_25" style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-top: 3px solid #0f172a; padding: 25px; border-radius: 8px; text-align: center;">
<div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-bottom: 12px;">
  📢 [웹진 아르떼365 정기 휴간 안내]
</div>
<p style="font-size: 14.5px; color: #334155; line-height: 1.8; max-width: 600px; margin: 0 auto 15px auto;">
  안녕하세요, 웹진 아르떼365 편집국입니다.<br />
  여름철 콘텐츠 재정비 및 시스템 점검을 위해 <strong>2026년 8월 첫째 주(8월 3일 ~ 8월 7일)</strong> 동안 정기 휴간을 가지게 되었습니다.
</p>
<p style="font-size: 13.5px; color: #64748b; margin: 0;">
  휴간 기간 동안 기사 발행 및 독자 이벤트 문의 응대가 일시 중단되며,<br />
  <strong>8월 10일(월)</strong>부터 더욱 풍성하고 유익한 콘텐츠로 다시 찾아뵙겠습니다. 감사합니다.
</p>
</div>`
  }
];

const ArteNotice: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="공지사항 이벤트"
      subcategoryName="공지사항 이벤트"
      templates={noticeTemplates}
    />
  );
};

export default ArteNotice;
