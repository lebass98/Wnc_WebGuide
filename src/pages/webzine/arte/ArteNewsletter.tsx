import React from 'react';
import WebzineTemplatePageLayout from '../../../components/webzine/WebzineTemplatePageLayout';

const newsletterTemplates = [
  {
    id: 'newsletter-type-1',
    title: '뉴스레터 타입 1',
    description: '메일링 서비스 신청 안내 디자인 템플릿입니다.',
    html: `<div class="newsletter_subscribe_section mt_25">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
        웹진 독자들의 뉴스레터 구독을 유도하기 위해 본문 하단이나 독립 영역에 부착하는 메일링 신청 폼 템플릿입니다.
    </p>

    <div class="newsletter_card" style="max-width: 650px; margin: 0 auto; border: 2px dashed #E2001A; border-radius: 10px; padding: 30px; text-align: center; background-color: #fbfbfb;">
        <div style="font-size: 32px; margin-bottom: 10px;">✉️</div>
        <h4 style="font-size: 20px; font-weight: bold; color: #111; margin-top: 0; margin-bottom: 8px;">매주 만나는 문화예술교육 트렌드 리포트</h4>
        <p style="font-size: 13.5px; color: #555; line-height: 1.6; margin-bottom: 24px; padding: 0 15px;">
            아르떼365가 엄선한 현장 취재 기사, 학술 트렌드 연구 결과 및 다양한 교육 자료들을 매주 목요일 오전에 메일함으로 바로 배달해 드립니다.
        </p>
        
        <div style="display: flex; gap: 8px; max-width: 450px; margin: 0 auto; justify-content: center; align-items: center;">
            <input type="email" placeholder="이메일 주소를 입력하세요 (ex: user@domain.com)" 
                   style="flex: 1; padding: 12px 14px; border: 1.5px solid #ddd; border-radius: 6px; font-size: 14px; outline: none; transition: border-color 0.2s;" 
                   readonly />
            <button style="background-color: #E2001A; color: #fff; border: none; padding: 12px 20px; border-radius: 6px; font-weight: bold; font-size: 14px; cursor: pointer; white-space: nowrap;">
                구독하기
            </button>
        </div>
        <span style="display: block; font-size: 12px; color: #888; margin-top: 15px;">※ 입력하신 정보는 뉴스레터 발송 목적으로만 사용되며, 언제든 해지하실 수 있습니다.</span>
    </div>
</div>`
  },
  {
    id: 'newsletter-type-2',
    title: '뉴스레터 타입 2',
    description: '추가 뉴스레터 레이아웃 템플릿입니다.',
    html: ``
  },
  {
    id: 'newsletter-type-3',
    title: '뉴스레터 타입 3',
    description: '추가 뉴스레터 레이아웃 템플릿입니다.',
    html: ``
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
