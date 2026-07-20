import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const initialHtml = `<!-- 컨텐츠 시작 -->
<div class="post_table_section mt_25">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
        교육 일정, 커리큘럼, 선정 현황 발표 등 복합 구조의 원 데이터를 일목요연하게 표시하는 표 양식 템플릿입니다.
    </p>

    <div class="table_container" style="overflow-x: auto; max-width: 800px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14.5px;">
            <thead>
                <tr style="background-color: #f7f7f7; border-bottom: 2px solid #E2001A;">
                    <th style="padding: 14px 16px; font-weight: bold; color: #333;">세션 명</th>
                    <th style="padding: 14px 16px; font-weight: bold; color: #333;">교육 세부 주제</th>
                    <th style="padding: 14px 16px; font-weight: bold; color: #333;">소요 시간</th>
                    <th style="padding: 14px 16px; font-weight: bold; color: #333;">학습 형태</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 14px 16px; font-weight: bold; color: #E2001A;">오리엔테이션</td>
                    <td style="padding: 14px 16px; color: #555;">문화예술교육 패러다임 변화와 지원사업 가치 이해</td>
                    <td style="padding: 14px 16px; color: #555;">2시간</td>
                    <td style="padding: 14px 16px; color: #555;">비대면 실시간 (Zoom)</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 14px 16px; font-weight: bold; color: #E2001A;">워크숍 1</td>
                    <td style="padding: 14px 16px; color: #555;">지역 아카이브 구축과 스토리텔링 연계 교육 기획</td>
                    <td style="padding: 14px 16px; color: #555;">4시간</td>
                    <td style="padding: 14px 16px; color: #555;">대면 실습 워크숍</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 14px 16px; font-weight: bold; color: #E2001A;">워크숍 2</td>
                    <td style="padding: 14px 16px; color: #555;">디지털 매체(태블릿, AR)를 활용한 놀이 콘텐츠 실습</td>
                    <td style="padding: 14px 16px; color: #555;">4시간</td>
                    <td style="padding: 14px 16px; color: #555;">대면 실습 워크숍</td>
                </tr>
                <tr style="border-bottom: none;">
                    <td style="padding: 14px 16px; font-weight: bold; color: #E2001A;">성과 발표회</td>
                    <td style="padding: 14px 16px; color: #555;">조별 기획안 발표 및 전문가 크리틱, 상호 네트워킹</td>
                    <td style="padding: 14px 16px; color: #555;">3시간</td>
                    <td style="padding: 14px 16px; color: #555;">하이브리드 운영</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<!-- 컨텐츠 끝 -->`;

const ArteTable: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            표
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">표</span>
          </div>
        </div>
      </div>

      {/* Reusable Editor & Preview Component */}
      <ArteHtmlEditor 
        title="아르떼 데이터 표 에디터" 
        description="아르떼 본문 테이블(표 양식) HTML 코드를 복사/붙여넣기하고 실시간 렌더링 스타일을 시뮬레이션합니다." 
        initialHtml={initialHtml} 
      />
    </div>
  );
};

export default ArteTable;
