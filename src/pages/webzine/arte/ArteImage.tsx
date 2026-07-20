import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const initialHtml = `<!-- 컨텐츠 시작 -->
<div class="postbox mt_25" style="align-items: center;">
    <div class="postboimg ta_c" style="margin:0 auto">
        <ul class="ul_floatkyh6">
            <li class="n3 m_m_10" style="margin-left: 0; float: none"><a
                    href="/wp-content/uploads/2023/06/ssak_20230626_01.png" target="_blank"
                    rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full"
                        src="/wp-content/uploads/2023/06/ssak_20230626_01.png" alt=""></a>
            </li>
        </ul>
    </div>
    <div class="posttext mt_25 posticon">
        <div class="posttit">소집 이용안내</div>
        <dl class="dlLst">
            <dt><img src="/wp-content/uploads/2023/05/icon_lo.png" alt="장소"></dt>
            <dd>강원도 강릉시 공항길 30번길 5</dd>
            <dt><img src="/wp-content/uploads/2023/05/icon_ti.png" alt="시간"></dt>
            <dd>개방시간 | 수,목 12:00~19:00, 금~일 12:00~18:00 <br /><span
                    style="display: inline-block; font-size: 15px; line-height: 2em;">(전시 준비로 임시
                    휴관일 수 있으므로,
                    방문 전 꼭
                    운영 여부를 확인 바랍니다.)</span></dd>
            <dt><img src="/wp-content/uploads/2023/05/icon_ph.png" alt="번호"></dt>
            <dd>0507-1345-1018 | 이메일 <a href="mailto:storysozip@naver.com">storysozip@naver.com</a></dd>
            <dt><img src="/wp-content/uploads/2023/05/icon_pa.png" alt="링크"></dt>
            <dd>블로그 <a href="https://blog.naver.com/storysozip" target="_blank"
                    rel="noopener noreferrer">blog.naver.com/storysozip</a> <br />
                페이스북 <a href="https://www.facebook.com/storysozip" target="_blank"
                    rel="noopener noreferrer">@storysozip</a> <br />
                인스타그램 <a href="https://www.instagram.com/storysozip/" target="_blank"
                    rel="noopener noreferrer">@storysozip</a>
            </dd>
        </dl>
    </div>
</div>
<!-- 컨텐츠 끝 -->`;

const ArteImage: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            이미지
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">이미지</span>
          </div>
        </div>
      </div>

      {/* Reusable Editor & Preview Component */}
      <ArteHtmlEditor 
        title="아르떼 이미지 포스트 에디터" 
        description="아르떼 이미지 포스트에 반영할 HTML 코드를 복사/붙여넣기하고 실시간 렌더링 스타일을 시뮬레이션합니다." 
        initialHtml={initialHtml} 
      />
    </div>
  );
};

export default ArteImage;
