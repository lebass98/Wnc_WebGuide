import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const profileTemplates = [
  {
    id: 'gungri-profile-photo',
    title: '궁리 프로필 사진',
    description: '궁리 프로필 사진 레이아웃 템플릿입니다.',
    html: `<div class="postphotoin mt_45">
<div class="le"><img src="/wp-content/uploads/2019/08/profile_umyoon.png" alt="프로젝트 궁리"></div>
<dl>
<dt style="padding-left:0;">정리_프로젝트 궁리</dt>
</dl>
</div>`
  },
  {
    id: 'no-profile-photo',
    title: '프로필 사진 없음',
    description: '프로필 사진 없음 레이아웃 템플릿입니다.',
    html: `<div class="postphotoin mt_45">
<div class="le"><img src="/wp-content/themes/dailynews/img/post/photo_20150402_no_profile.gif" alt=""></div>
<dl>
<dt style="padding-left:0;">기획 및 원문가공_연구국제팀</dt>
<dt style="padding-left:0;">정리_프로젝트 궁리</dt>
</dl>
</div>`
  },
  {
    id: 'email-profile',
    title: '이메일 - 프로필',
    description: '이메일 - 프로필 레이아웃 템플릿입니다.',
    html: `<div class="postphotoin mt_25">
<div class="le"><img src="/wp-content/uploads/2023/06/profile_NaHyeyeong.jpg" alt="나혜영"></div>
<dl>
<dt>나혜영</dt>
<dd>한국문화예술위원회 책임연구원. 한국의 Rio+20 대응, EPI(Environmental Performance Index) 개선방안 등의 연구 경험을 기반으로 2021 ARKO 정책 혁신소위원회 ‘기후위기-예술정책’ 워킹그룹에 참여했다. 문화정책에서 환경, 포용성, 참여 등 지속가능성 어젠다가 갖는 의미와 적용을 고민하고 있다.<br /><a href="mailto:nhy3877@arko.or.kr">nhy3877@arko.or.kr</a></dd>
</dl>
</div>`
  },
  {
    id: 'facebook-blog-link',
    title: '페이스북, 블로그 링크',
    description: '페이스북, 블로그 링크 레이아웃 템플릿입니다.',
    html: `<br />
<span>페이스북 <a href="https://www.facebook.com/youthautonomy" target="_blank" rel="noopener noreferrer">@youthautonomy</a></span><br />
<span>블로그 <a href="https://babogh.tistory.com/" target="_blank" rel="noopener noreferrer">@babogh</a></span>`
  },
  {
    id: 'photo-credit-name-only',
    title: '사진 제공 (이름만)',
    description: '사진 제공 (이름만) 레이아웃 템플릿입니다.',
    html: `<dd style="padding: 0;" class="mt_25">사진 제공_필자 <br />책 이미지 제공_미디어창비, arte </dd>`
  },
  {
    id: 'photo-credit-insta-link',
    title: '사진 제공 (인스타 링크)',
    description: '사진 제공 (인스타 링크) 레이아웃 템플릿입니다.',
    html: `<br /><span class="mt_25" style="display: block">사진 제공_구형승 <a href="https://www.instagram.com/trash_hero_art/" target="_blank" rel="noopener noreferrer">@trash_hero_art</a></span>`
  },
  {
    id: 'photo-credit-email',
    title: '사진 제공 (이메일)',
    description: '사진 제공 (이메일) 레이아웃 템플릿입니다.',
    html: `<dd style="padding: 0;" class="mt_25"> 영상_박영균 미술작가 <a href="mailto:infebruary14@naver.com">infebruary14@naver.com</a><br />사진 제공_세손가락 협동조합 페이스북 <a href="https://www.facebook.com/3songarak" target="_blank" rel="noopener noreferrer">@3songarak</a></dd>`
  },
  {
    id: 'multi-profile-gray',
    title: '여러명 프로필 (회색)',
    description: '여러명 프로필 (회색) 레이아웃 템플릿입니다.',
    html: `<div class="postprofilein mt_25">
<div class="profile" style="width: 119px; height: 119px;"><img class="alignnone size-full wp-image-40381" style="width: 119px; height: 119px;" src="/wp-content/uploads/2023/04/profile_JungJihyeon_.jpg" alt="정지현"></div>
<div class="txts v3">
<em class="f_bold">정지현</em></p>
<div class="mt_10">세상의 많은 사물부터 조각의 기능과 움직임을 배운다. 개인전 《가우지》(인천아트 플랫폼, 2022), 《다목적 헨리》(아뜰리에 에르메스, 2019), 광주비엔날레(2016), 퀸즈뮤지엄(2015) 등에서 공연 및 전시를 이어오고 있다. 현재 한국예술종합학교 미술원 전문사에서 [독립연구] 수업을 맡고 있다. <br /><a href="mailto:astradiog@gmail.com">astradiog@gmail.com</a> <br />인스타그램 <a href="https://www.instagram.com/jihyun_ball/" target="_blank" rel="noopener noreferrer">@jihyun_ball</a></div>
</div>
</div>`
  },
  {
    id: 'gungri-image-email',
    title: '궁리 이미지 및 이메일',
    description: '궁리 이미지 및 이메일 레이아웃 템플릿입니다.',
    html: `<div class="postphotoin mt_25">
<div class="le"><img src="/wp-content/uploads/2019/08/profile_umyoon.png" alt="프로젝트 궁리"></div>
<dl>
<dt style="padding:0">
녹취‧정리_프로젝트 궁리
</dt>
<div class="posttext mt_10" style="padding-left:0">
<dt style="padding:0">
사진_박영균 미술작가 <a href="mailto:infebruary14@naver.com">infebruary14@naver.com</a><br>프로그램 사진 제공_똥자루 무용단, 문밖세상
</dt>
</div>
</dl>
</div>`
  }
];

const ArteProfile: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            프로필
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">프로필</span>
          </div>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {profileTemplates.map((template) => (
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

export default ArteProfile;
