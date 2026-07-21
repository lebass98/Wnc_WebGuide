import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

const newTemplates: TemplateItem[] = [
  {
    id: 'guide-small-text-center-img',
    title: '이용안내 (작은 글씨 추가 / 이미지 가운데)',
    description: '이용안내 상단 설명, 가운데 정렬 이미지, 하단 작은 부연 글씨 템플릿입니다.',
    html: `<div class="guide_box mt_25" style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 25px;">
  <div class="guide_title" style="font-size: 18px; font-weight: bold; color: #212529; margin-bottom: 12px;">
    웹진 아르떼365 이용안내
  </div>
  <p style="font-size: 14px; line-height: 1.7; color: #495057; margin-bottom: 20px;">
    본 콘텐츠는 문화예술교육 현장의 생생한 소식과 정보를 전해드립니다. 웹진 기사 및 관련 자료는 아래 가이드라인을 참조하여 이용해 주시기 바랍니다.
  </p>
  <div class="img_center" style="text-align: center; margin: 20px 0;">
    <img src="/wp-content/uploads/2023/04/guide_center_sample.jpg" alt="이용안내 대표 이미지" style="max-width: 100%; height: auto; border-radius: 6px; display: inline-block;" />
  </div>
  <div class="small_txt" style="text-align: center; font-size: 12px; color: #868e96; margin-top: 10px;">
    ※ 본 웹진에 수록된 글과 사진은 한국문화예술교육진흥원의 승인 없이 무단 전재 및 재배포를 금합니다.
  </div>
</div>`
  },
  {
    id: 'guide-default',
    title: '이용안내 (기본)',
    description: '기본적인 웹진 이용안내 박스 템플릿입니다.',
    html: `<div class="guide_default_box mt_25" style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 0 8px 8px 0;">
  <h4 style="font-size: 16px; font-weight: bold; color: #1e293b; margin-top: 0; margin-bottom: 10px;">
    [이용 안내] 아르떼365 콘텐츠 활용 수칙
  </h4>
  <ul style="font-size: 14px; color: #334155; line-height: 1.8; margin: 0; padding-left: 20px;">
    <li>아르떼365의 기사 및 이미지 저작권은 원작자와 한국문화예술교육진흥원에 있습니다.</li>
    <li>비영리 목적으로 인용 시 출처(아르떼365, 발행일)를 명확히 밝혀주시기 바랍니다.</li>
    <li>기사 제보 및 문의: arte365@arte.or.kr</li>
  </ul>
</div>`
  },
  {
    id: 'quote-area',
    title: '따옴표 영역',
    description: '큰 따옴표 디자인과 함께 인용구를 강조하는 템플릿입니다.',
    html: `<div class="quote_section mt_25" style="position: relative; background-color: #fafafa; border-top: 2px solid #222; border-bottom: 2px solid #222; padding: 35px 30px; text-align: center; margin: 30px 0;">
  <span style="font-family: Georgia, serif; font-size: 50px; color: #999; line-height: 1; display: block; margin-bottom: 5px;">“</span>
  <p style="font-size: 18px; font-weight: 600; color: #111; line-height: 1.7; margin: 0 0 15px 0;">
    예술은 삶을 견디게 만드는 힘이자, 새로운 질문을 던지는 가장 아름다운 도구이다.
  </p>
  <span style="font-size: 14px; color: #666; font-style: italic;">- 문화예술교육 기획자 좌담 중 -</span>
</div>`
  },
  {
    id: 'qna-area',
    title: 'qna 영역',
    description: 'Q&A 질문과 답변을 명확하게 구분해주는 인터뷰/질의응답 템플릿입니다.',
    html: `<div class="qna_container mt_25" style="space-y: 20px;">
  <div class="qna_item" style="margin-bottom: 25px;">
    <div class="q_title" style="display: flex; align-items: flex-start; font-size: 16px; font-weight: bold; color: #2563eb; margin-bottom: 10px;">
      <span style="font-size: 20px; line-height: 1; margin-right: 8px;">Q.</span>
      <span>이번 지역 문화예술교육 프로젝트를 기획하시게 된 계기는 무엇인가요?</span>
    </div>
    <div class="a_desc" style="display: flex; align-items: flex-start; font-size: 15px; line-height: 1.8; color: #334155; padding-left: 28px;">
      <span style="font-size: 18px; font-weight: bold; color: #475569; line-height: 1; margin-right: 8px;">A.</span>
      <span>지역 주민들이 일상 속에서 자연스럽게 예술을 접하고, 스스로 창작의 주체가 될 수 있는 장을 마련하고자 기획했습니다. 주민들의 자발적인 참여가 프로젝트의 핵심 구동력입니다.</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'caption-two-each',
    title: '이미지 아래 캡션 각각 두개',
    description: '2개의 나란한 이미지 아래에 개별 캡션이 각각 적용된 템플릿입니다.',
    html: `<div class="img_two_caption mt_25" style="display: flex; gap: 20px; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <img src="/wp-content/uploads/2023/04/sample_img1.jpg" alt="워크숍 현장 A" style="width: 100%; height: auto; border-radius: 6px;" />
    <p style="font-size: 13px; color: #64748b; margin-top: 8px; text-align: center;">[사진 1] 워크숍 오프닝 세션 참가자 현장</p>
  </div>
  <div style="flex: 1; min-width: 250px;">
    <img src="/wp-content/uploads/2023/04/sample_img2.jpg" alt="워크숍 현장 B" style="width: 100%; height: auto; border-radius: 6px;" />
    <p style="font-size: 13px; color: #64748b; margin-top: 8px; text-align: center;">[사진 2] 조별 실습 및 소그룹 토론 진행</p>
  </div>
</div>`
  },
  {
    id: 'caption-full-and-individual-two',
    title: '이미지 아래 전체 캡션 개별 캡션 2개',
    description: '상단에 전체를 묶는 공통 캡션이 있고, 각 이미지 아래 개별 캡션이 2개 존재하는 템플릿입니다.',
    html: `<div class="img_group_caption mt_25">
  <div style="font-size: 14px; font-weight: bold; color: #1e293b; margin-bottom: 12px; padding-bottom: 6px; border-b: 1px solid #e2e8f0;">
    전체 현장 기록: 2026 문화예술교육 종합 페스티벌
  </div>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;">
    <div style="flex: 1; min-width: 250px;">
      <img src="/wp-content/uploads/2023/04/fest_1.jpg" alt="메인 무대" style="width: 100%; height: auto; border-radius: 6px;" />
      <p style="font-size: 12px; color: #64748b; margin-top: 6px;">- 개막식 메인 무대 공연 장면</p>
    </div>
    <div style="flex: 1; min-width: 250px;">
      <img src="/wp-content/uploads/2023/04/fest_2.jpg" alt="체험 부스" style="width: 100%; height: auto; border-radius: 6px;" />
      <p style="font-size: 12px; color: #64748b; margin-top: 6px;">- 야외 체험 부스 방문객 참여 모습</p>
    </div>
  </div>
</div>`
  },
  {
    id: 'profile-one-img-three-names',
    title: '프로필 - 이미지 1개 이름 3개',
    description: '1개의 공동 프로필 사진 또는 단체 대표 이미지와 3명의 필자/참여자 이름 및 직함 템플릿입니다.',
    html: `<div class="profile_three_names mt_25" style="display: flex; align-items: center; gap: 20px; background: #f8fafc; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
  <div style="width: 90px; height: 90px; flex-shrink: 0; overflow: hidden; border-radius: 8px;">
    <img src="/wp-content/uploads/2023/04/group_profile.jpg" alt="공동 필진 사진" style="width: 100%; height: 100%; object-fit: cover;" />
  </div>
  <div style="flex: 1;">
    <div style="font-size: 14px; font-weight: bold; color: #0f172a; margin-bottom: 8px;">[공동 기획 및 글]</div>
    <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; color: #475569; space-y: 4px;">
      <li>• <strong>김아르</strong> (문화예술교육 연구소 연구원)</li>
      <li>• <strong>이문화</strong> (독립 큐레이터 및 에세이스트)</li>
      <li>• <strong>박예술</strong> (아르떼365 객원기자)</li>
    </ul>
  </div>
</div>`
  },
  {
    id: 'discussion-img-profile-below-name',
    title: '좌담 - 이미지 프로필 (이름 아래 이미지)',
    description: '좌담/토론 참석자 이름과 직함 아래에 프로필 사진이 상하 배치된 템플릿입니다.',
    html: `<div class="discussion_profile_list mt_25" style="display: flex; gap: 25px; justify-content: space-around; flex-wrap: wrap;">
  <div style="text-align: center; max-width: 150px;">
    <div style="font-size: 15px; font-weight: bold; color: #1e293b;">홍길동</div>
    <div style="font-size: 12px; color: #64748b; margin-bottom: 8px;">예술감독</div>
    <img src="/wp-content/uploads/2023/04/speaker1.jpg" alt="홍길동" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin: 0 auto; border: 2px solid #cbd5e1;" />
  </div>
  <div style="text-align: center; max-width: 150px;">
    <div style="font-size: 15px; font-weight: bold; color: #1e293b;">성춘향</div>
    <div style="font-size: 12px; color: #64748b; margin-bottom: 8px;">교육학 박사</div>
    <img src="/wp-content/uploads/2023/04/speaker2.jpg" alt="성춘향" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin: 0 auto; border: 2px solid #cbd5e1;" />
  </div>
</div>`
  },
  {
    id: 'webtoon-toon',
    title: '만화',
    description: '웹툰/웹진 만화 컷 및 컷설명 구성 템플릿입니다.',
    html: `<div class="webtoon_container mt_25" style="text-align: center;">
  <div class="toon_cut" style="margin-bottom: 15px;">
    <img src="/wp-content/uploads/2023/04/webtoon_cut1.jpg" alt="만화 컷 1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;" />
  </div>
  <div class="toon_caption" style="font-size: 14px; color: #333; line-height: 1.6; max-width: 550px; margin: 0 auto;">
    <strong>[에피소드 #01]</strong> "일상 속에 스며든 예술 한 조각, 오늘도 우리는 새로운 질문을 찾아 떠난다!"
  </div>
</div>`
  },
  {
    id: 'newsletter-link-in-link',
    title: '뉴스레터 링크안에 링크',
    description: '뉴스레터 주요 링크 상자 안에 세부 외부/관련 기사 링크가 중첩 구성된 템플릿입니다.',
    html: `<div class="newsletter_nested_link mt_25" style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 20px;">
  <div style="font-size: 16px; font-weight: bold; color: #1e40af; margin-bottom: 10px;">
    📧 아르떼365 이번 주 추천 뉴스레터
  </div>
  <p style="font-size: 14px; color: #1e3a8a; line-height: 1.6;">
    이번 주의 인턴기자 특별 인터뷰 기사를 만나보세요. 
    <a href="http://www.arte365.kr/main_article" target="_blank" style="color: #2563eb; text-decoration: underline; font-weight: bold;">[메인 기사 바로가기 &rarr;]</a>
  </p>
  <div style="margin-top: 15px; padding-top: 12px; border-top: 1px dashed #93c5fd; font-size: 13px; color: #3b82f6;">
    └ 연관 참고 기사: <a href="http://www.arte365.kr/sub_article" target="_blank" style="color: #1d4ed8; text-decoration: underline;">지역 문화예술 공간 우수 사례 보기</a>
  </div>
</div>`
  },
  {
    id: 'circle-profile-photo',
    title: '동그라미 프로필 사진',
    description: '원형(Circle) 아이콘 형태 프로필 이미지와 소개 템플릿입니다.',
    html: `<div class="circle_profile_card mt_25" style="display: flex; align-items: center; gap: 15px;">
  <img src="/wp-content/uploads/2023/04/circle_author.jpg" alt="필자 프로필" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid #e2e8f0;" />
  <div>
    <div style="font-size: 16px; font-weight: bold; color: #0f172a;">이아르 (웹진 필자)</div>
    <div style="font-size: 13px; color: #64748b; margin-top: 2px;">arte365_writer@arte.or.kr</div>
  </div>
</div>`
  },
  {
    id: 'bold-text-quote-no-graybox',
    title: '회색박스없이 굵은 글씨 (따옴표)',
    description: '배경 회색 박스 없이 굵은 폰트와 따옴표 기호로 시원하게 구성된 강조 문구 템플릿입니다.',
    html: `<div class="bold_quote_nobox mt_25" style="padding: 20px 0; border-left: 5px solid #111; padding-left: 20px; margin: 25px 0;">
  <p style="font-size: 20px; font-weight: 800; color: #111; line-height: 1.6; letter-spacing: -0.5px; margin: 0;">
    “교육이란 그릇을 채우는 것이 아니라, 불을 지피는 것이다.”
  </p>
  <span style="font-size: 14px; color: #666; font-weight: 500; display: block; margin-top: 8px;">
    - 아르떼365 기획칼럼 헤드라인
  </span>
</div>`
  }
];

const ArteNew: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="새소식"
      subcategoryName="새소식"
      templates={newTemplates}
    />
  );
};

export default ArteNew;
