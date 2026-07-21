import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

const newTemplates: TemplateItem[] = [
  {
    id: 'guide-small-text-center-img',
    title: '이용안내 (작은 글씨 추가 / 이미지 가운데)',
    description: '이용안내 상단 설명, 가운데 정렬 이미지, 하단 작은 부연 글씨 템플릿입니다.',
    html: `<div class="postbox mt_25" style="align-items: center;">
<div class="postboimg ta_c" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a 
href="/wp-content/uploads/2023/06/ssak_20230626_01.png" target="_blank" rel="noopener noreferrer"
title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full"
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
<dd>개방시간 | 수,목 12:00~19:00, 금~일 12:00~18:00 <br /><span style="display: inline-block; font-size: 15px; line-height: 2em;">(전시 준비로 임시 휴관일 수 있으므로, 방문 전 꼭 운영 여부를 확인 바랍니다.)</span></dd>
<dt><img src="/wp-content/uploads/2023/05/icon_ph.png" alt="번호"></dt>
<dd>0507-1345-1018 | 이메일 <a href="mailto:storysozip@naver.com">storysozip@naver.com</a></dd>
<dt><img src="/wp-content/uploads/2023/05/icon_pa.png" alt="링크"></dt>
<dd>블로그 <a href="https://blog.naver.com/storysozip" target="_blank" rel="noopener noreferrer">blog.naver.com/storysozip</a> <br />
페이스북 <a href="https://www.facebook.com/storysozip" target="_blank" rel="noopener noreferrer">@storysozip</a> <br />
인스타그램 <a href="https://www.instagram.com/storysozip/" target="_blank" rel="noopener noreferrer">@storysozip</a>
</dd>
</dl>
</div>
</div>`
  },
  {
    id: 'guide-default',
    title: '이용안내 (기본)',
    description: '기본적인 웹진 이용안내 박스 템플릿입니다.',
    html: `<div class="postboimg ta_c" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a 
href="/wp-content/uploads/2023/05/ssak_20230526_01.jpg" target="_blank" rel="noopener noreferrer"
title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full"
src="/wp-content/uploads/2023/05/ssak_20230526_01.jpg" alt=""></a>
</li>
</ul>
</div>
<div class="posttext mt_25 posticon">
<div class="posttit">달그락달그락 이용안내</div>
<dl class="dlLst">
<dt><img src="/wp-content/uploads/2023/05/icon_lo.png" alt="장소"></dt>
<dd>전북 군산시 월명로 475-1 세한빌딩 3층</dd>
<dt><img src="/wp-content/uploads/2023/05/icon_ti.png" alt="시간"></dt>
<dd>개방시간 | 화~토 9:00~21:00, 일 14:00~19:00</dd>
<dt><img src="/wp-content/uploads/2023/05/icon_ph.png" alt="번호"></dt>
<dd> 063-465-8871 | 이메일 <a href="mailto:jbyar@daum.net">jbyar@daum.net</a></dd>
<dt><img src="/wp-content/uploads/2023/05/icon_pa.png" alt="링크"></dt>
<dd>홈페이지 <a href="http://www.youthauto.net/" target="_blank" rel="noopener noreferrer">www.youthauto.net</a> <br />
페이스북 <a href="https://www.facebook.com/youthautonomy" target="_blank" rel="noopener noreferrer">@youthautonomy</a> <br />
블로그 <a href="https://blog.naver.com/dalgrak_dalgrak" target="_blank" rel="noopener noreferrer">@dalgrak_dalgrak</a>
</dd>
</dl>
</div>
</div>`
  },
  {
    id: 'quote-area',
    title: '따옴표 영역(필자 따옴표 밖)',
    description: '큰 따옴표 디자인과 함께 인용구를 강조하는 템플릿입니다.',
    html: `<div class="posttext mt_25 f_bold__box">
인간의 쓸모가 사라지는 이야기를 하고 싶었는데, 사회가 버리는 쓰레기가 그걸 전달하기에 매력적인 오브제라는 생각이 들어서 정크아트를 시작하게 되었어요. 쓰레기로 조형작업을 하는 것만이 아니라, 인간의 쓸모에 대해 이야기하는 것 자체가 정크아트라 생각합니다. 사람이 버려지는 사회에 관해 얘기하고 싶고, 가능하다면 비즈니스를 통해 변화도 만들고 싶어요.</div>
<div class="posttext ta_r">- 구형승 작가</div>`
  },
  {
    id: 'quote-area',
    title: '따옴표 영역(필자 따옴표 안에)',
    description: '큰 따옴표 디자인과 함께 인용구를 강조하는 템플릿입니다.',
    html: `<div class="posttext mt_25 f_bold__box">
존중이란 개별자로서 그 사람을 대우하고 승인한다는 의미다. 잘 쓰인 소설일수록 우리는 그 주인공을 현실 속의 인물보다 더 쉽게 하나의 인격으로 인정할 수 있다. 도스토옙스키의 소설 속 주인공들은 극도로 지질하지만, 작가의 천재성과 치열한 노력이 빚어낸 현실감 넘치는 배경과 생생한 심리 묘사는 우리가 그들을 구체적이고 개별적인, 생동감 넘치는 존재로 인식하게 한다. 우리는 그들을 한 사람의 실존적 인물처럼 여기며 존중한다.<span class="posttext ta_r"> &#8211; 『실격당한 자들을 위한 변론』 p.14.</span></div>`
  },
  {
    id: 'qna-area',
    title: 'qna 영역',
    description: 'Q&A 질문과 답변을 명확하게 구분해주는 인터뷰/질의응답 템플릿입니다.',
    html: `<div class="posttext mt_25 qna_q">
<div class="qna_q__box">
<span class="qna_tit">Q.</span>
</div>
<p class="qna_q__txt">
교육현장에서 예술가는 학습자에게 다른 시각의 질문을 던지고 문제를 발견할 수 있도록 도울 수 있다. 프롬 브론즈를 통해 그러한 역할을 훌륭하게 수행한 것 같다. 예술가로서 어떤 생각과 배경이 작용했는지 궁금하다.</p>
</div>
<div class="posttext mt_25 qna_a">
<div class="qna_a__box">
<span class="qna_tit">A.</span><br />
<span class="l_line"></span>
</div>
<p class="qna_a__txt">
나는 어렸을 때부터 질문이 많은 아이였다. 운이 좋아서 질문을 많이 해도 혼이 나지 않았고 똑똑하다는 지지를 받으면서 컸다. 그래서인지 질문을 하고 스스로 생각하고 내가 납득되는 게 너무 즐거웠다. 그런데 입시교육에서는 정답이 정해져 있는 문제를 풀고 똑같이 욕망하는 바를 이루기 위해 경쟁할 수 밖에 없다. 그러다보니 자기한테 집중하지 못하고 자신을 모른다는 문제의식이 많았다. 그래서 이번 프로젝트(프롬 브론즈)에 참여하는 초등 6학년 학생들이 아름다움에 대해 주어진 기준을 무조건 받아들이는 것이 아니라 의심해볼 만하고 그 기준을 내가 만들 수 있다는 경험을 해볼 수 있기를 바랐다.
</p>
</div>`
  },
  {
    id: 'caption-two-each',
    title: '이미지 아래 캡션 각각 두개',
    description: '2개의 나란한 이미지 아래에 개별 캡션이 각각 적용된 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto;">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/06/dong_20230619_01.png" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-4566 size-full" src="/wp-content/uploads/2023/06/dong_20230619_01.png" alt="" /></a>
<div class="txts ta_c">NEB의 가치와 원칙 <br />
3대 가치: 지속가능성, 아름다움, 포용 <br />
3대 원칙: 과정에의 참여, 다양한 수준의 참여, 융합적 접근</div>
<div class="txts ta_r">[출처] <a style="font-size: 16px; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://new-european-bauhaus.europa.eu/system/files/2023-01/NEB_Compass_V_4.pdf">「New European Bauhaus Compass」</a></div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/06/dong_20230619_02.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/dong_20230619_02.jpg" alt="" /></a>
<div class="txts ta_c">NEB의 접근방식 <br />
과학·기술의 세계와 예술·문화의 세계를 연결하는 플랫폼으로,<br />공동창작을 통해 복잡한 사회문제에 대한 혁신적 해결책을 모색</div>
<div class="txts ta_r">[출처] <a style="font-size: 16px; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://recheck.io/blog/blockchain-technology/new-european-bauhaus-initiative/">ReCheck</a></div>
</li>
</ul>
</div>`
  },
  {
    id: 'caption-full-and-individual-two',
    title: '이미지 아래 전체 캡션 개별 캡션 2개',
    description: '상단에 전체를 묶는 공통 캡션이 있고, 각 이미지 아래 개별 캡션이 2개 존재하는 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/06/dong_20230619_03.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/dong_20230619_03.jpg" alt=""></a></p>
<div class="txts ta_c">1단계: 디자인 단계(~21년 여름) <br />아이디어 및 사례 수집</div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/06/dong_20230619_04.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/dong_20230619_04.jpg" alt=""></a></p>
<div class="txts ta_c">2단계: 전달 단계(21.9~22년) <br />네트워크 및 지식 공유</div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/06/dong_20230619_05.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/dong_20230619_05.jpg" alt=""></a></p>
<div class="txts ta_c">3단계: 전파·확산단계(23.1월~) <br />아이디어 수정 및 확산 지원</div>
</li>
<div class="txts ta_r">NEB의 단계별 추진 전략<br />[출처] <a style="font-size: 16px; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://eufundingoverview.be/funding/the-new-european-bauhaus">eufundingoverview.be</a></div>
</ul>
</div>`
  },
  {
    id: 'profile-one-img-three-names',
    title: '프로필 - 이미지 1개 이름 3개',
    description: '1개의 공동 프로필 사진 또는 단체 대표 이미지와 3명의 필자/참여자 이름 및 직함 템플릿입니다.',
    html: `<div class="posttextinin mt_25">
<dl>
<dt style="font-size: 16px;">[관련링크]</dt>
<dd>· <a href="https://lib.arte.or.kr/educationdata/board/ArchiveData_BoardView.do?board_id=BRD_ID0058988 " target="_blank" rel="noopener noreferrer" style="text-decoration:underline; font-weight: 400; font-size: 16px;">2022 사회를 마주하는 N개의 문화예술교육 &#8211; ‘비닐스런 과자 팩토리’ 아카이빙북</a></dd>
</dl>
</div>
<div class="postphotoin mt_25">
<div class="le"><img src="/wp-content/uploads/2023/06/profile_BiNilSeuLeon.jpg" alt="비닐스런 프로젝트"></div>
<dl>
<dt>비닐스런 프로젝트 (<a style="color: #fff;" href="https://www.instagram.com/vinyl_s_run_project/" target="_blank" rel="noopener noreferrer">@vinyl_s_run_project</a>)</dt>
<dd style="margin-bottom: 15px;"><span style="font-size: 15px; font-weight: 600;">방영경</span> 버려진 비닐을 주우며 비닐로 그림 그리고 있다. 집 앞의 쓰레기 배출 문제를 개선하고자 기획했던 &lt;분리분리 프로젝트&gt;를 기점으로 생활 속에서 실천할 수 있는 쓰레기 문제 개선 방법에 대해 고민하며 동네 활동과 창작 활동을 이어가고 있다.<br />
인스타그램 <a href="https://www.instagram.com/vinylbebag/" target="_blank" rel="noopener noreferrer">@vinylbebag</a></dd>
<dd style="margin-bottom: 15px;"><span style="font-size: 15px; font-weight: 600;">신현진</span> 커뮤니티 아트, 공동체 예술이라는 협업 구조, 실천 중심의 활동을 통해 ‘함께하기’를 발현하는 행위, 환경, 의식체계에 관심을 두고 이를 기반한 작업을 한다. 시각예술 기반의 협업체 ‘라이스브루잉시스터즈클럽’ 안에서 ‘사회적 발효’라는 키워드로 따로 또 같이 여러 실험을 시도하고 있다.<br />
인스타그램 <a href="https://www.instagram.com/ai3htela/" target="_blank" rel="noopener noreferrer">@ai3htela</a></dd>
<dd style="margin-bottom: 15px;"><span style="font-size: 15px; font-weight: 600;">엄선</span> 디자이너로 시작해 지금은 예술기획과 책을 기반으로 이미지와 텍스트, 물성을 함께 다루는 작업을 하고 있다. 독립서점x대안공간 ‘터무니책방’을 운영한다. 주변적인 사물과 이야기가 의미의 중심으로 오는 예술을 좋아한다.<br />
인스타그램 <a href="https://www.instagram.com/uhm_seon/" target="_blank" rel="noopener noreferrer">@uhm_seon</a></dd>
</dl>
<div class="posttext mt_5">사진제공_비닐스런 프로젝트</div>
</div>`
  },
  {
    id: 'discussion-img-profile-below-name',
    title: '좌담 - 이미지 프로필 (이름 아래 이미지)',
    description: '좌담/토론 참석자 이름과 직함 아래에 프로필 사진이 상하 배치된 템플릿입니다.',
    html: `<div class="posttext mt_25 profile-flex">
<div class="profile-box">
<strong>전민주</strong><span class="profile-img"><img src="/wp-content/uploads/2023/05/profile_JeonMinju.jpg" alt="전민주"></span>
</div>
<p class="profile-txt">안녕하세요. 브라질 상파울루에 있는 Graded the American School of São Paulo 9학년 전민주입니다. 평소에 예술 활동에 많이 참여하지는 않지만, 가끔 미술관이나 전시회에 가곤 합니다. 사실 학교 안에서 참여하는 예술 활동이 더 많다고 할 수 있습니다. 학교 안에서 이루어지는 다양한 공연(연극, 무용, 밴드, 오케스트라 등)과 음악 시간을 통해 예술을 접하고 있습니다.</p>
</div>`
  },
  {
    id: 'webtoon-toon',
    title: '만화',
    description: '웹툰/웹진 만화 컷 및 컷설명 구성 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto;">
<ul class="ul_floatkyh6 ul_flex">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_01_.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_01_.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_02_.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_02_.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_03_.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_03_.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_04_.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_04_.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_05_.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_05_.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_06__.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_06__.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_07__.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_07__.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_08__.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_08__.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_09__.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_09__.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_10__.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_10__.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_11__.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_11__.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/01/bee_20230130_12__.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/bee_20230130_12__.jpg" alt=""></a>
</li>
</ul>
</div>`
  },
  {
    id: 'circle-profile-photo',
    title: '동그라미 프로필 사진',
    description: '원형(Circle) 아이콘 형태 프로필 이미지와 소개 템플릿입니다.',
    html: `<div class="posttext mt_25 profile-flex">
<div class="profile-box">
<strong>제환정</strong><span class="profile-img"><img src="/wp-content/uploads/2023/11/profile_Jehwanjeong.jpg" alt="제환정"></span>
</div>
<p class="profile-txt">상대방이 동의하지 않았더라도, 액션과 리액션이 오갔다는 것 자체로 의미가 발생하고 있다고 생각합니다. 파킨슨병 환자와 무용하는 프로그램을 운영하는 예술가는 항상 참여자들에게 많은 활동을 하지 못하더라도 그냥 이곳에 있는 것만으로도 충분하다고 이야기합니다. 질문자님이 3년 동안 계속 실천하고 계셨다고 하는 것에는 이런 의미가 있는 것 같습니다.</p>
</div>
<div class="posttext mt_25 profile-flex">
<div class="profile-box">
<strong>제환정</strong><span class="profile-img"><img src="/wp-content/uploads/2023/11/profile_Jehwanjeong.jpg" alt="제환정"></span>
</div>
<p class="profile-txt">상대방이 동의하지 않았더라도, 액션과 리액션이 오갔다는 것 자체로 의미가 발생하고 있다고 생각합니다. 파킨슨병 환자와 무용하는 프로그램을 운영하는 예술가는 항상 참여자들에게 많은 활동을 하지 못하더라도 그냥 이곳에 있는 것만으로도 충분하다고 이야기합니다. 질문자님이 3년 동안 계속 실천하고 계셨다고 하는 것에는 이런 의미가 있는 것 같습니다.</p>
</div>`
  },
  {
    id: 'bold-text-quote-no-graybox',
    title: '회색박스없이 굵은 글씨 (따옴표)',
    description: '배경 회색 박스 없이 굵은 폰트와 따옴표 기호로 시원하게 구성된 강조 문구 템플릿입니다.',
    html: `<div class="posttext mt_25 f_bold">
“사실 제일 어려운 건 학교에서 한 클래스로 만나는 학생들이에요. 학교 쪽에서 저희에게 제시한 시간과 목표가 있고, 그 안에서 또 저희가 이루고자 하는 게 있어서 조율해야 하니까요. 협력 수업을 할 수 있는 교사가 있으면 요청해요. 영화 수업 시간 외에 학생들이 일상의 이야기를 서로 떠들 수 있게, 교실 안에 주기적으로 자기 경험을 공통의 경험으로 아카이빙하는 시간을 만들어 주십사 하죠. 그것을 실마리로 영화를 만드는데, 기존의 관계랑은 다른 관계들이 탄생해요. 평소에는 발언권이 높은 친구들, 활동적이고 나서서 말하고 주장하는 친구들이 주로 주목을 받잖아요. 영화 촬영할 때는 완전히 바뀌어요. 그런 친구들보다는 오히려 진중하고 말없이 해야 할 일을 천천히 해내는 친구들이 후반부로 갈수록 소중해지죠. 물론 매 순간 그렇지는 않지만, 동일인의 행동에서 다른 가치들이 발견되면서 클래스의 안에서 관계의 전복이 일어나는 거예요.”</div>`
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
