import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const initialHtml = `<!-- 컨텐츠 시작 -->
<div class="notice_event_section mt_25">
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
</div>
<!-- 컨텐츠 끝 -->`;

const ArteNotice: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            공지사항 이벤트
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">공지사항 이벤트</span>
          </div>
        </div>
      </div>

      {/* Reusable Editor & Preview Component */}
      <ArteHtmlEditor 
        title="아르떼 이벤트 공지사항 에디터" 
        description="아르떼 독자 참여 이벤트 및 주요 공지용 디자인 배너 블록 HTML 코드를 복사/붙여넣기하고 실시간 렌더링 스타일을 시뮬레이션합니다." 
        initialHtml={initialHtml} 
      />
    </div>
  );
};

export default ArteNotice;
