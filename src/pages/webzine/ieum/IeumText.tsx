import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

// 이음 텍스트 템플릿 항목들 (필요시 계속 추가 가능)
const ieumTextTemplates: TemplateItem[] = [
  {
    id: 'ieum-emoji-video',
    title: '이모지 처음 삽입 및 영상 바로가기 링크삽입',
    description: '이모지가 처음 도입된 기사 및 영상 바로가기 링크가 삽입된 템플릿입니다.',
    html: `<p class="txt"><span class="icon"><img src="/template/cms/user/images/sub/webzine/53/img_trend_icon-06.svg"></span> 지난 4월 20일 장애인의 날, <span class="f_bold">국내 첫 청각장애인 아이돌 ‘빅오션’</span>이 데뷔했어요. 1세대 아이돌 ‘H.O.T’의 대표곡인 〈빛〉을 리메이크한 데뷔곡을 수어 안무와 함께 선보이며 큰 화제를 모았어요. 데뷔하던 날의, 긴장과 설렘 가득한 빅오션 멤버들의 모습을 보며 빅오션에게 ‘입덕’하게 될지도 몰라요<br>
└영상 보러가기: <a class="underline" href="https://www.ieum.or.kr/user/movie/view.do?idx=2823&amp;cate=31">청각장애인 아이돌 ‘빅오션’이 데뷔하던 날(Kpop Idol BIG OCEAN)</a></p>`
  },
  {
    id: 'ieum-quote-spacing',
    title: '인용문 삽입 및 줄 간격 조절',
    description: '인용문 삽입 및 줄 간격 조절을 한 템플릿입니다.',
    html: `<p class="txt in-txt no-italic">“우리의 공간에 초대된 것이 그(비장애인 관객-인용자 주)에게는 분명히 불편한 경험이었을 것이다. 접근성에 따라 나뉜 세계의 이편에, 지금까지 누린 접근성 없이 서 보는 것 그리고 장애인들이 날개를 펼치고 날아오르는 장면을 보는 것 말이다. (중략) 이 세계에서 자신들에게 개방되지 않은 몇 안 되는 공간을 발견했을 때 그들이 터뜨리는 분노가 외려 이런 공간들의 필요성을 정확히 강조한다.”</p>
    <p class="txt in-txt">‘장애의 감각’이라는 건 뭘까?<br>
그것을 작품이 말하는 세계로 확장할 수 있을까?</p>`
  },
  {
    id: 'ieum-quote-reference',
    title: '참고 문헌, 출처 삽입',
    description: '참고 문헌, 출처 삽입을 한 템플릿입니다.',
    html: `<p class="txt underline">▸담포포노이에 아트센터 하나(アートセンターHANA)</p>`
  },
  {
    id: 'ieum-quote-spacing',
    title: '참고 문헌, 출처 삽입',
    description: '참고 문헌, 출처 삽입을 한 템플릿입니다.',
    html: `<ul class="lists num">
	<li>공연장: 대형공간으로서의 공연장은 단일공간 혹은 단발성 이벤트로만 계획되는 공간이 아닌, 실사용자인 공연자·창작자·관람객·연출가 등이 소통하고 공유하며 새로운 기획 콘텐츠를 활성화할 수 있는 확장성을 고려했다.</li>
	<li>지원 및 특화시설: 조정실이나 분장실, 백스테이지 등은 창작자·운영자·감독·공연자들이 고립되는 공간이 아닌, 수축하고 팽창하는 것처럼 공간을 유연하게 활용할 수 있도록 계획했다.</li>
	<li>공용공간: 외부환경과 공연장을 이어주는 라운지 공간, 내외부에서 공연장의 아이덴티티를 창출해 주는 직통 계단, 공간과 공간, 프로그램과 프로그램을 안전하게 연계해 주는 리빙룸 공간으로 계획했다.</li>
</ul>`
  },
  {
    id: 'ieum-quote-spacing',
    title: '참고 문헌, 출처 삽입',
    description: '참고 문헌, 출처 삽입을 한 템플릿입니다.',
    html: `<p class="txt">· 한국수어가 제1 언어이며 농문화와 농사회에 속해 있는 사람<br>
· 다양한 농인을 만나고 있는 사람<br>
· 한국수어 번역 경험이 있는 사람<br>
· 예술, 공연 경험이 있는 사람<br>
· 다양한 수어 표현과 스타일에 대한 아이디어를 낼 수 있는 사람<br>
· 예술 작품 안에 농문화와 농인 감수성을 자연스럽게 녹여낼 수 있는 사람</p>`
  }
];

const IeumText: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="텍스트"
      categoryName="웹진"
      brandName="이음"
      subcategoryName="텍스트"
      editorType="ieum"
      templates={ieumTextTemplates}
    />
  );
};

export default IeumText;
