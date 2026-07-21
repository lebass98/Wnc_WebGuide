import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const profileTemplates = [
  {
    id: 'gungri-profile-photo',
    title: '궁리 프로필 사진',
    description: '궁리 프로필 사진 레이아웃 템플릿입니다.',
    html: `<div class="profile_section mt_25">
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
        아르떼365 필진 및 예술 강사 등 필자들의 정보를 가독성 있게 노출하는 프로필 카드 템플릿입니다.
    </p>

    <div class="profile_card_w" style="display: flex; gap: 24px; align-items: flex-start; padding: 25px; background-color: #fcfcfc; border: 1px solid #ededed; border-radius: 8px; max-width: 700px; margin: 0 auto;">
        <div class="profile_avatar_w" style="flex-shrink: 0; width: 90px; height: 90px; border-radius: 50%; overflow: hidden; border: 3px solid #E2001A;">
            <img src="https://arte365.kr/wp-content/themes/arte365_v2019/images/common/logo.png" alt="필진 사진" style="width: 100%; height: 100%; object-fit: contain; padding: 10px; background-color: #fff;">
        </div>
        <div class="profile_details">
            <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
                <h4 class="profile_name" style="font-size: 18px; font-weight: bold; color: #111; margin: 0;">김미진 작가</h4>
                <span class="profile_tag" style="font-size: 12px; color: #E2001A; font-weight: 600;">문화기획 칼럼니스트</span>
            </div>
            <p style="font-size: 13px; color: #777; margin-bottom: 12px; font-weight: 500;">이메일: mj_kim@example.com</p>
            <p class="profile_bio" style="font-size: 14px; line-height: 1.6; color: #555; margin: 0;">
                대학에서 예술 경영을 전공하고, 다양한 자치구 문화재단에서 생활 문화 활성화 사업을 총괄해 왔습니다. 예술이 지역 사회의 갈등을 완화하고 이웃들 간의 연대를 강화하는 무형의 힘에 큰 관심을 갖고 이를 기록하고 있습니다.
            </p>
        </div>
    </div>
</div>`
  },
  {
    id: 'no-profile-photo',
    title: '프로필 사진 없음',
    description: '프로필 사진 없음 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'email-profile',
    title: '이메일 - 프로필',
    description: '이메일 - 프로필 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'facebook-blog-link',
    title: '페이스북, 블로그 링크',
    description: '페이스북, 블로그 링크 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'photo-credit-name-only',
    title: '사진 제공 (이름만)',
    description: '사진 제공 (이름만) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'photo-credit-insta-link',
    title: '사진 제공 (인스타 링크)',
    description: '사진 제공 (인스타 링크) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'photo-credit-email',
    title: '사진 제공 (이메일)',
    description: '사진 제공 (이메일) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'multi-profile-gray',
    title: '여러명 프로필 (회색)',
    description: '여러명 프로필 (회색) 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'gungri-image-email',
    title: '궁리 이미지 및 이메일',
    description: '궁리 이미지 및 이메일 레이아웃 템플릿입니다.',
    html: ''
  },
  {
    id: 'no-bottom-author-profile',
    title: '하단 필자 프로필 없음',
    description: '하단 필자 프로필 없음 레이아웃 템플릿입니다.',
    html: ''
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
