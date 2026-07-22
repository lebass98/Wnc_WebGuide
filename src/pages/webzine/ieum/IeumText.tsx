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
    id: 'ieum-text-underline',
    title: '텍스트 언더라인',
    description: '텍스트 언더라인을 삽입한 템플릿입니다.',
    html: `<p class="txt underline">▸담포포노이에 아트센터 하나(アートセンターHANA)</p>`
  },
  {
    id: 'ieum-number-list',
    title: '번호 리스트',
    description: '번호 리스트를 삽입한 템플릿입니다.',
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
  },
  {
    id: 'ieum-quote-bold',
    title: '볼드 인용문 삽입',
    description: '볼드 인용문 삽입을 한 템플릿입니다.',
    html: `<p class="txt f_bold">“탈시설해서 야학에 오는 사람들이 사회 구성원으로 자리 잡기를 바라면서 교육을 하기도 하지만, 교육이라는 것 자체가 어려운 분들도 많고 그래서 어떤 할 일과 갈 곳이 되는 활동을 만들어가고자 하죠. 복지관에 가도 사람들이 많기 때문에 계속 대기해야 하고, 거기서는 사회복지서비스의 대상자로 지내는 거니까. 사람들이 야학 와서 다르게 느끼는 것이 그런 것 같아요. 자연스러운 것. 보다 자연스러운 인간관계도 경험하고, 커뮤니티도 경험하고, 여기서 연애도 하고, 다양한 관계도 맺고, 다양한 활동도 해보고.”
    </p>
    <p class="txt mt_0">- 노들장애인야학 활동가(연구보고서 104쪽)</p>`
  },
  {
    id: 'ieum-quoten-reference',
    title: '인용문 삽입',
    description: '인용문 삽입을 한 템플릿입니다.',
    html: `<p class="txt mt_0">- 노들장애인야학 활동가(연구보고서 104쪽)</p>`
  },
  {
    id: 'ieum-gray-box1',
    title: '그레이 박스1',
    description: '그레이 박스1 삽입을 한 템플릿입니다.',
    html: `<p class="txt odd-box">뇌병변장애는 몸에 떨림이 있어 무게감 있는 소품을 선호하는데, 극장에 들어가서야 확인한 소품은 종이 재질이었다. 손 떨림이 있는데도 낭독공연 할 때 대본을 손으로 들고 해야 하는 경우도 있었다. 역할에 잘 어울리는 의상, 공연과 잘 맞는 ‘예쁜’ 의상은 장애가 있는 몸을 움직이는 데 불편했다.</p>`
  },
  {
    id: 'ieum-gray-box2',
    title: '그레이 박스2',
    description: '그레이 박스2 삽입을 한 템플릿입니다.',
    html: `<div class="gray_box">
<p class="txt">박지영: ‘마음을 먹는다’ 제 기준으로 그 문장의 한국어를 이해했을 때, 쉬운 결정이 아니라 어려운 결정으로 느껴지는데. 집은 자기가 원하면 바로 되는 게 아니라 어떤 결심과 어떤 과정이 필요한 걸까요? 그게 맞다면, 왜 어려운 결정이 필요한가요?<br>
<br>
장영: 여기서는 ‘마음을 먹는다’가 ‘크게, 굳게 마음을 먹는다’ 같은 식으로 쓰였다기보다는, 내가 ‘마음’으로 어떤 의도를 가지면 → 그것이 이루어졌다는 것을 강조하려고 쓴 말이었어요. 즉 ‘내가 마음으로 의도하면, 이루어졌어!’라고 ‘의도’를 강조하려는 것입니다. 집이 원하면 바로 (실행)됩니다. 다만 그 과정에서 마음을 먹는 ‘의도’가 더 중요하다는 걸 강조하려 했습니다.</p>
</div>`
  },
  {
    id: 'ieum-text-temp-1',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-2',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-3',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-4',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-5',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-6',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-7',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-8',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-9',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-10',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-11',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-12',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-13',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-14',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-15',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-16',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-17',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-18',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-19',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-20',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-21',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-22',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-23',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-24',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-25',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-26',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-27',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-28',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-29',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-30',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-31',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-32',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-33',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-34',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-35',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-36',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-37',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-38',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-39',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-40',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-41',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-42',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-43',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-44',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-45',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-46',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-47',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-48',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-49',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-50',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-51',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-52',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-53',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-54',
    title: '',
    description: '',
    html: ``
  },
  {
    id: 'ieum-text-temp-55',
    title: '',
    description: '',
    html: ``
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
