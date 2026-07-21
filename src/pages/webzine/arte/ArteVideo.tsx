import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const videoTemplates = [
  {
    id: 'video-700-400',
    title: '1개 (700*400 ) 주로 사용',
    description: '가장 주로 사용되는 700*400 크기의 단일 영상 레이아웃입니다.',
    html: `<div class="post_video_section mt_25">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 20px;">
        문화예술교육 현장의 역동적인 순간들을 담은 스케치 영상입니다. 유튜브 등 외부 동영상 링크 임베드를 아르떼 스타일 프레임으로 렌더링합니다.
    </p>

    <div class="video_container_w" style="max-width: 800px; margin: 0 auto;">
        <div class="video_wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        </div>
        <div class="video_caption mt_15 ta_c" style="font-size: 14px; color: #666; font-weight: 500;">
            [아르떼365 현장 스케치] 일상의 쉼표, 예술을 나누다
        </div>
    </div>
</div>`
  },
  {
    id: 'video-800-500',
    title: '1개 (800*500)',
    description: '800*500 크기의 단일 영상 레이아웃입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto;">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><iframe src="https://www.youtube.com/embed/a4wH7JUqurQ" width="800" height="500" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<div class="txts ta_r" style="margin-top: -5px;">서대문 예술교육 활성화를 위한 지역 자원 조사 및 연구 ‘다음을 위한 닿음’ &lt;의자 프로젝트&gt;<br />
[출처] <a href="https://www.youtube.com/channel/UC1ju37f30JacRoC3b84-lrg/featured" target="_blank" rel="noopener noreferrer">무소속연구소</a></div>
</li>
</ul>
</div>`
  },
  {
    id: 'video-image-498-340',
    title: '1개 (영상1, 이미지1 / 498*340)',
    description: '영상 1개와 이미지 1개로 구성된 498*340 크기 레이아웃입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto;">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/06/kkum_20230619_06_.png" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-4566 size-full" src="/wp-content/uploads/2023/06/kkum_20230619_06_.png" alt="" /></a>
<div class="txts ta_r">생태미술프로젝트〈무당벌레 꽃이 되다〉(2005)<br /><span>&nbsp;</span></div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><iframe width="498" height="340" src="https://www.youtube.com/embed/bQv2kaVxM9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="txts ta_r">《씨앗의 희망》(2021) <br />[출처] <a style="font-size: 16px; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=bQv2kaVxM9g">Artist강술생</a></div>
</li>
</ul>
</div>`
  },
  {
    id: 'video-double-498-340',
    title: '2개 (498*340)',
    description: '498*340 크기의 영상 2개 가로 정렬 레이아웃입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<iframe width="498" height="340" src="https://www.youtube.com/embed/EIlS6rCmJrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>
<div class="txts ta_r">서울아까워센타–유기사물구조대 2020 로드무비 <br />
[출처] <a href="https://www.youtube.com/watch?v=EIlS6rCmJrA" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기">피스오브피스 유튜브</a></a>
</div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<iframe width="498" height="340" src="https://www.youtube.com/embed/M7UGG41GujY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>
<div class="txts ta_r">서울아까워캠프 Ep.01 아까워서 도저히 못 참겠는 사람들 <br />
[출처] <a href="https://youtu.be/M7UGG41GujY" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기">피스오브피스 유튜브</a></div>
</p>
</li>
</ul>
</div>`
  }
];

const ArteVideo: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            영상
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">영상</span>
          </div>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {videoTemplates.map((template) => (
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

export default ArteVideo;
