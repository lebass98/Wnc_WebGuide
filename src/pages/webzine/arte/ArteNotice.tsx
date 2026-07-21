import React from 'react';
import WebzineTemplatePageLayout, { TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

const noticeTemplates = [
  {
    id: 'notice-type-1',
    title: '공지사항 타입 1',
    description: '공지사항 및 독자 이벤트 안내 배너 양식입니다.',
    html: `<div class="notice_event_section mt_25">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
        웹진 독자 대상 이벤트 안내 및 주요 공식 공지사항 알림 블록을 배치하기 위한 템플릿입니다.
    </p>

    <div class="event_banner_w" style="max-width: 750px; margin: 0 auto; background-color: #2b2b2b; color: #fff; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; md:flex-row; box-shadow: 0 5px 15px rgba(0,0,0,0.15);">
        <div class="banner_content" style="padding: 30px; flex: 1;">
            <span style="font-size: 12px; background-color: #E2001A; color: #fff; padding: 4px 10px; border-radius: 4px; font-weight: bold; text-transform: uppercase;">NOTICE EVENT</span>
            <h4 style="font-size: 21px; font-weight: bold; margin-top: 15px; margin-bottom: 10px; color: #fff;">[이벤트] 독자 한 줄 평 및 기대평 모집</h4>
            <p style="font-size: 13.5px; color: #ccc; line-height: 1.6; margin-bottom: 20px;">
                이번 달 아르떼365에서 발행한 메인 에세이를 정독하시고, 하단 한 줄 코멘트 영역에 진솔한 소감을 남겨주세요. 우수 코멘트를 기재해주신 30분을 추첨하여 친환경 다이어리를 증정합니다.
            </p>
            <div style="font-size: 12.5px; color: #aaa;">
                <p style="margin: 3px 0;"><strong>이벤트 기간:</strong> 2026.07.20 - 2026.08.15</p>
                <p style="margin: 3px 0;"><strong>당첨자 발표:</strong> 2026.08.22 (아르떼 공지사항 게시판)</p>
            </div>
        </div>
    </div>
</div>`
  },
  {
    id: 'notice-type-2',
    title: '공지사항 타입 2',
    description: '추가 공지사항 레이아웃 템플릿입니다.',
    html: ``
  },
  {
    id: 'notice-type-3',
    title: '공지사항 타입 3',
    description: '추가 공지사항 레이아웃 템플릿입니다.',
    html: ``
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

export default ArteNotice;
