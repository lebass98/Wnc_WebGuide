import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

const newsletterTemplates: TemplateItem[] = [
  {
    id: 'hangawi-newsletter',
    title: '한가위 뉴스레터',
    description: '풍성한 한가위 추석 명절 인사 및 추천 기사가 담긴 특별 뉴스레터 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="newsletter_box" style="background: #fdfbf7; border: 1px solid #f3ebd8; border-radius: 12px; padding: 30px; max-width: 680px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
  <!-- 뉴스레터 헤더 -->
  <div style="text-align: center; border-bottom: 2px solid #b45309; padding-bottom: 20px; margin-bottom: 25px;">
    <span style="font-size: 13px; font-weight: bold; color: #b45309; letter-spacing: 2px; text-transform: uppercase;">Arte365 Special Letter</span>
    <h3 style="font-size: 24px; font-weight: 800; color: #78350f; margin: 10px 0 6px 0;">🌕 풍성하고 마음 따뜻한 한가위 보내세요</h3>
    <p style="font-size: 14px; color: #92400e; margin: 0;">올 한 해도 아르떼365와 함께해 주신 독자 여러분께 감사드립니다.</p>
  </div>

  <!-- 인사말 본문 -->
  <div style="font-size: 14.5px; line-height: 1.8; color: #451a03; margin-bottom: 25px;">
    안녕하세요, 웹진 아르떼365 독자 여러분.<br />
    어느덧 오곡백과가 익어가는 결실의 계절, 한가위가 찾아왔습니다. 사랑하는 가족, 친지들과 함께 따뜻한 정을 나누며 편안한 휴식과 예술적 영감이 함께하는 풍요로운 한가위 명절이 되시기를 아르떼365 편집국 임직원 일동이 진심으로 기원합니다.
  </div>

  <!-- 한가위 추천 기사 -->
  <div style="background: #ffffff; border: 1px solid #fed7aa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <div style="font-size: 16px; font-weight: bold; color: #9a3412; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
      <span>🌾 [한가위 읽을거리] 명절에 읽기 좋은 문화예술 이야기</span>
    </div>
    <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; color: #431407;">
      <li style="margin-bottom: 10px; border-bottom: 1px dashed #ffedd5; padding-bottom: 8px;">
        <a href="https://arte365.kr/article1" target="_blank" style="color: #c2410c; text-decoration: none; font-weight: bold;">• [커버스토리] 전통 공동체 놀이와 현대 예술교육의 만남 &rarr;</a>
        <div style="font-size: 13px; color: #7c2d12; margin-top: 3px; padding-left: 12px;">마을 축제와 세시풍속 속 예술적 경험이 주는 가치 재조명</div>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="https://arte365.kr/article2" target="_blank" style="color: #c2410c; text-decoration: none; font-weight: bold;">• [현장 취재] 고향 마을 미술관에서 만난 작은 행복들 &rarr;</a>
        <div style="font-size: 13px; color: #7c2d12; margin-top: 3px; padding-left: 12px;">지역 특화 문화공간 아카이브 현장 방문 리포트</div>
      </li>
    </ul>
  </div>

  <!-- 푸터 -->
  <div style="text-align: center; font-size: 12px; color: #a16207; padding-top: 15px; border-top: 1px solid #fef3c7;">
    발행처: 한국문화예술교육진흥원 웹진 아르떼365 | 문의: arte365@arte.or.kr
  </div>
</div>
</div>`
  },
  {
    id: 'newyear-article-event-newsletter',
    title: '신정 & 기사 & 이벤트 뉴스레터',
    description: '신년 새해 인사, 이달의 메인 헤드라인 기사, 독자 참여 신년 이벤트가 통합된 종합 뉴스레터 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="newsletter_box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; max-width: 680px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
  <!-- 헤더 -->
  <div style="text-align: center; background: #0f172a; color: #ffffff; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
    <span style="font-size: 12px; background: #2563eb; color: #fff; padding: 4px 10px; border-radius: 20px; font-weight: bold; text-transform: uppercase;">HAPPY NEW YEAR</span>
    <h3 style="font-size: 23px; font-weight: bold; margin: 12px 0 6px 0; color: #ffffff;">☀️ 2026 희망찬 새해, 아르떼365와 출발하세요</h3>
    <p style="font-size: 13.5px; color: #94a3b8; margin: 0;">새해 첫 기사와 풍성한 독자 신년 이벤트 소식을 전합니다.</p>
  </div>

  <!-- 신정 인사말 -->
  <div style="font-size: 14.5px; line-height: 1.8; color: #334155; margin-bottom: 25px; padding: 0 5px;">
    새로운 희망으로 밝아온 2026년 신정(新正)입니다.<br />
    지난 한 해 동안 보내주신 성원에 깊이 감사드리며, 올 한 해 여러분의 삶에 예술의 온기와 배움의 기쁨이 넘치기를 기원합니다. 아르떼365는 올해도 더욱 깊이 있는 문화예술교육 현장 이야기로 찾아뵙겠습니다.
  </div>

  <!-- 이달의 기사 3선 -->
  <div style="margin-bottom: 25px;">
    <div style="font-size: 16px; font-weight: bold; color: #0f172a; margin-bottom: 12px; border-left: 4px solid #2563eb; padding-left: 10px;">
      📰 1월 추천 주요 기사
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; display: flex; gap: 15px; align-items: center;">
        <div style="width: 70px; height: 70px; background: #e2e8f0; border-radius: 6px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px;">🎨</div>
        <div style="flex: 1;">
          <a href="https://arte365.kr/news1" target="_blank" style="font-size: 14.5px; font-weight: bold; color: #1e40af; text-decoration: none;">[인터뷰] 2026 문화예술교육 미래 비전과 청사진 &rarr;</a>
          <p style="font-size: 13px; color: #64748b; margin: 4px 0 0 0; line-height: 1.5;">디지털 인공지능 시대의 예술교육 가치와 나아갈 방향 탐구</p>
        </div>
      </div>
      <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; display: flex; gap: 15px; align-items: center;">
        <div style="width: 70px; height: 70px; background: #e2e8f0; border-radius: 6px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px;">🎭</div>
        <div style="flex: 1;">
          <a href="https://arte365.kr/news2" target="_blank" style="font-size: 14.5px; font-weight: bold; color: #1e40af; text-decoration: none;">[기획] 지역 문화거점 중심의 주민 자치 예술 &rarr;</a>
          <p style="font-size: 13px; color: #64748b; margin: 4px 0 0 0; line-height: 1.5;">일상과 만나는 거점 문화예술 프로젝트 10선 소개</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 신년 독자 이벤트 -->
  <div style="background: #eff6ff; border: 1.5px dashed #3b82f6; border-radius: 10px; padding: 20px; text-align: center;">
    <div style="font-size: 16px; font-weight: bold; color: #1d4ed8; margin-bottom: 8px;">
      🎁 [신년 독자 이벤트] 2026년 나의 소망 & 아르떼365 응원 한마디
    </div>
    <p style="font-size: 13.5px; color: #1e3a8a; margin-bottom: 14px; line-height: 1.6;">
      신년을 맞아 아르떼365에 바라는 응원 메시지를 남겨주세요.<br />
      추첨을 통해 50분께 아르떼 2026 한정판 캘린더와 친환경 다이어리 세트를 드립니다!
    </p>
    <a href="https://arte365.kr/event_newyear" target="_blank" style="display: inline-block; background: #2563eb; color: #ffffff; font-weight: bold; font-size: 13.5px; padding: 10px 22px; border-radius: 6px; text-decoration: none;">이벤트 참여하기 &rarr;</a>
  </div>
</div>
</div>`
  },
  {
    id: 'lunar-newyear-newsletter',
    title: '구정 뉴스레터',
    description: '설날/구정 명절 새해 인사 및 연휴 기간 읽기 좋은 웹진 모음 뉴스레터 템플릿입니다.',
    html: `<div class="posttext mt_25">
<div class="newsletter_box" style="background: #fffdfa; border: 1px solid #fef3c7; border-radius: 12px; padding: 30px; max-width: 680px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
  <!-- 헤더 -->
  <div style="text-align: center; border-bottom: 2px solid #dc2626; padding-bottom: 20px; margin-bottom: 25px;">
    <span style="font-size: 13px; font-weight: bold; color: #dc2626; letter-spacing: 2px;">ARTE365 LUNAR NEW YEAR LETTER</span>
    <h3 style="font-size: 24px; font-weight: 800; color: #991b1b; margin: 10px 0 6px 0;">🧧 복(福) 가득한 설날 명절 되세요</h3>
    <p style="font-size: 14px; color: #b91c1c; margin: 0;">2026년 구정(舊正) 설 연휴 아르떼365 추천 뉴스레터</p>
  </div>

  <!-- 인사말 -->
  <div style="font-size: 14.5px; line-height: 1.8; color: #450a0a; margin-bottom: 25px;">
    독자 여러분, 민족 대명절 설날입니다.<br />
    희망찬 새해를 맞이하여 가정마다 행복과 평안이 가득하시기를 온 마음으로 기원합니다. 설 연휴 동안 바쁜 일상에서 벗어나 정겨운 사람들과 웃음꽃 피우는 따뜻하고 유익한 시간 보내시길 바랍니다.
  </div>

  <!-- 구정 연휴 읽을거리 -->
  <div style="background: #ffffff; border: 1px solid #fca5a5; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
    <div style="font-size: 16px; font-weight: bold; color: #b91c1c; margin-bottom: 12px;">
      💌 [설 연휴 특집] 온 가족이 함께 나누는 문화예술 스토리
    </div>
    <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; color: #7f1d1d;">
      <li style="margin-bottom: 10px; border-bottom: 1px dashed #fecaca; padding-bottom: 8px;">
        <a href="https://arte365.kr/lunar1" target="_blank" style="color: #dc2626; text-decoration: none; font-weight: bold;">• 3대가 함께 즐기는 어르신-어린이 문화예술 공간 5선 &rarr;</a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="https://arte365.kr/lunar2" target="_blank" style="color: #dc2626; text-decoration: none; font-weight: bold;">• [에세이] 마음의 고향을 다시 그리는 그림 수업 이야기 &rarr;</a>
      </li>
    </ul>
  </div>

  <!-- 안내 푸터 -->
  <div style="text-align: center; font-size: 12px; color: #991b1b; padding-top: 15px; border-top: 1px solid #fecaca;">
    설 연휴 정기 휴무 기간: 2026.02.16 ~ 02.18 | 발행 문의: arte365@arte.or.kr
  </div>
</div>
</div>`
  }
];

const ArteNewsletter: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="뉴스레터"
      subcategoryName="뉴스레터"
      templates={newsletterTemplates}
    />
  );
};

export default ArteNewsletter;
