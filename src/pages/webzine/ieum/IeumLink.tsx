import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

// 이음 링크 템플릿 항목들
const linkTemplates: TemplateItem[] = [
  {
    id: 'ieum-text-temp-19',
    title: '관련 링크 리스트 박스',
    description: '상단 경계선 박스 안에 밑줄 링크 목록을 모아두는 레이아웃입니다.',
    html: `<div class="explain">
<p class="txt f_bold">[관련 링크]</p>

<ul class="lists dot">
	<li><a class="underline" href="https://wde.or.kr/" target="_blank">장애여성공감 홈페이지(링크)</a></li>
	<li><a class="underline" href="https://www.youtube.com/@WDE98/videos" target="_blank">장애여성공감 유튜브 채널(링크)</a></li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-20',
    title: '관련 링크 및 제공 출처 표시',
    description: '좌측에는 관련 링크 정보, 우측에는 사진 제공자나 저작자 출처를 양끝으로 배치한 레이아웃입니다.',
    html: `<div class="row justify_between align_end">
<div class="from_vol">
<p class="from"><span>관련링크.</span> 그라이아이 극단 Graeae<a class="underline" href="https://graeae.org/" target="_blank"> 바로가기(링크)</a><br>
셰이프 아츠 Shape Arts<a class="underline" href="https://www.shapearts.org.uk/" target="_blank"> 바로가기(링크)</a><br>
테이트 모던 Tate<a class="underline" href="https://www.tate.org.uk/" target="_blank"> 바로가기(링크)</a><br>
언리미티드 Unlimited<a class="underline" href="https://weareunlimited.org.uk/" target="_blank"> 바로가기(링크)</a><br>
드레이크 뮤직 Drake Music<a class="underline" href="https://www.drakemusic.org/" target="_blank"> 바로가기(링크)</a><br>
아텐보로우 아트센터 Attenborough Centre for the Creative Arts<a class="underline" href="https://www.attenboroughcentre.com/" target="_blank"> 바로가기(링크)</a><br>
스톱갭무용단 Stopgap Dance Company<a class="underline" href="https://www.stopgapdance.com/" target="_blank"> 바로가기(링크)</a><br>
<span>사진제공.</span> 박성관</p>

<p class="vol_tag">2019년 11월 (10호)</p>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-38',
    title: '추천 콘텐츠 목록 상자',
    description: '추천 타이틀 아래에 여러 추천 콘텐츠 카드가 가로로 나열되는 레이아웃입니다.',
    html: `<div class="recommend-box">
<p class="recommend-tit">[이음새가 추천하는 이음온라인 콘텐츠]</p>

<section class="recommend-wrap">
<article class="recommend-item"><span class="recommend__img"><img alt="" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0603.jpg"> </span>

<p class="recommend__txt"><span>[문화소식]</span> 다양한 문화소식을 접근성 정보와 함께 제공한다. <a class="underline" href="https://www.ieum.or.kr/user/show/list.do">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0604.jpg"> </span>

<p class="recommend__txt"><span>[웹진이음 37호_이슈] </span> [좌담] 배리어프리를 위한 갈등과 충돌을 넘어 <em class="f_bold">낯설지만 더 넓은 세계로의 자상한 초대</em> <a class="underline" href="https://www.ieum.or.kr/user/webzine/view.do?idx=463">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0605.jpg"> </span>

<p class="recommend__txt"><span>[웹진이음 31호_이슈] </span> 더 자유로운 창작의 장 <em class="f_bold">감각의 대체 아닌, 몰입의 기술이 필요하다</em> <a class="underline" href="https://www.ieum.or.kr/user/webzine/view.do?idx=389">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0606.jpg"> </span>

<p class="recommend__txt"><span>[웹진이음 33호_이슈] </span> 협업 프로젝트의 한계와 도전 <em class="f_bold">조심스러움과 조바심 사이에서 나란히 함께 가기</em> <a class="underline" href="https://www.ieum.or.kr/user/webzine/view.do?idx=413">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0607.jpg"> </span>

<p class="recommend__txt"><span>[웹진이음 2호_인터뷰] </span> 백우람 극단 애인 배우 <em class="f_bold">왜? 내 몸을 사랑하니까!</em> <a class="underline" href="https://www.ieum.or.kr/user/webzine/view.do?idx=278">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="이음온라인 현장탐방 예술해볼라GO 창작스튜디오 틈" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0608.jpg"> </span>

<p class="recommend__txt"><span>[웹진이음 32호_인터뷰] </span> 현장탐방: 예술해볼라GO <em class="f_bold">창작스튜디오 틈</em> <a class="underline" href="https://www.ieum.or.kr/user/webzine/view.do?idx=402">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="A의 모든 것" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0609.jpg"> </span>

<p class="recommend__txt"><span>[미디어_오디오] </span> 비장애인의 장애 감수성을 기르는 본격 문학방송 <em class="f_bold">팟캐스트 ‘A(able)의 모든 것’ 시즌3</em> <a class="underline" href="https://www.ieum.or.kr/user/search/result.do?cate=&amp;searchKeyword=A%EC%9D%98+%EB%AA%A8%EB%93%A0+%EA%B2%83">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="새로운 질서 그 후 윤충근, 이지수 인터뷰 이한별" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0610.jpg"> </span>

<p class="recommend__txt"><span>[미디어_영상]</span> 2022 노리미츠인서울 탭톡 세션5 시각예술심포지엄 <em class="f_bold">불완전한 번역을 지속하는 까닭: ‘새로운 질서 그 후…’</em> <a class="underline" href="https://www.ieum.or.kr/user/movie/view.do?idx=1960">* 페이지 링크</a></p>
</article>

<article class="recommend-item"><span class="recommend__img"><img alt="예술이 뭐라GO SEASON2 1화. 나의 창작세계 확장하기" src="/template/cms/user/images/sub/webzine/38/img_blog_20230111_0611.jpg"> </span>

<p class="recommend__txt"><span>[미디어_영상] </span> &lt;예술이 뭐라GO&gt; 시즌2 <em class="f_bold">1화. N잡러 크리에이터 굴러라 구르님, 김지우 | 나의 창작세계 확장하기</em> <a class="underline" href="https://www.ieum.or.kr/user/movie/view.do?idx=1946">* 페이지 링크</a></p>
</article>
</section>
</div>`
  },
];

const IeumLink: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="링크"
      categoryName="웹진"
      brandName="이음"
      subcategoryName="링크"
      editorType="ieum"
      templates={linkTemplates}
    />
  );
};

export default IeumLink;
