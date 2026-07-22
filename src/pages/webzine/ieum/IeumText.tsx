import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

// 이음 텍스트 템플릿 항목들
const textTemplates: TemplateItem[] = [
  {
    id: 'ieum-emoji-video',
    title: '아이콘 및 영상 링크 단락',
    description: '아이콘 이미지와 관련 영상 바로가기 링크가 포함된 본문 단락입니다.',
    html: `<p class="txt"><span class="icon"><img src="/template/cms/user/images/sub/webzine/53/img_trend_icon-06.svg"></span> 지난 4월 20일 장애인의 날, <span class="f_bold">국내 첫 청각장애인 아이돌 ‘빅오션’</span>이 데뷔했어요. 1세대 아이돌 ‘H.O.T’의 대표곡인 〈빛〉을 리메이크한 데뷔곡을 수어 안무와 함께 선보이며 큰 화제를 모았어요. 데뷔하던 날의, 긴장과 설렘 가득한 빅오션 멤버들의 모습을 보며 빅오션에게 ‘입덕’하게 될지도 몰라요<br>
└영상 보러가기: <a class="underline" href="https://www.ieum.or.kr/user/movie/view.do?idx=2823&amp;cate=31">청각장애인 아이돌 ‘빅오션’이 데뷔하던 날(Kpop Idol BIG OCEAN)</a></p>`
  },
  {
    id: 'ieum-quote-spacing',
    title: '들여쓰기 인용문',
    description: '양옆에 여백이 들어간 이중 인용구 및 본문 구성입니다.',
    html: `<p class="txt in-txt no-italic">“우리의 공간에 초대된 것이 그(비장애인 관객-인용자 주)에게는 분명히 불편한 경험이었을 것이다. 접근성에 따라 나뉜 세계의 이편에, 지금까지 누린 접근성 없이 서 보는 것 그리고 장애인들이 날개를 펼치고 날아오르는 장면을 보는 것 말이다. (중략) 이 세계에서 자신들에게 개방되지 않은 몇 안 되는 공간을 발견했을 때 그들이 터뜨리는 분노가 외려 이런 공간들의 필요성을 정확히 강조한다.”</p>
    <p class="txt in-txt">‘장애의 감각’이라는 건 뭘까?<br>
그것을 작품이 말하는 세계로 확장할 수 있을까?</p>`
  },
  {
    id: 'ieum-text-underline',
    title: '밑줄 강조 텍스트',
    description: '하단에 밑줄이 표시되는 강조형 단락입니다.',
    html: `<p class="txt underline">▸담포포노이에 아트센터 하나(アートセンターHANA)</p>`
  },
  {
    id: 'ieum-number-list',
    title: '번호순 리스트',
    description: '숫자로 시작하는 순서형 목록 구조입니다.',
    html: `<ul class="lists num">
	<li>공연장: 대형공간으로서의 공연장은 단일공간 혹은 단발성 이벤트로만 계획되는 공간이 아닌, 실사용자인 공연자·창작자·관람객·연출가 등이 소통하고 공유하며 새로운 기획 콘텐츠를 활성화할 수 있는 확장성을 고려했다.</li>
	<li>지원 및 특화시설: 조정실이나 분장실, 백스테이지 등은 창작자·운영자·감독·공연자들이 고립되는 공간이 아닌, 수축하고 팽창하는 것처럼 공간을 유연하게 활용할 수 있도록 계획했다.</li>
	<li>공용공간: 외부환경과 공연장을 이어주는 라운지 공간, 내외부에서 공연장의 아이덴티티를 창출해 주는 직통 계단, 공간과 공간, 프로그램과 프로그램을 안전하게 연계해 주는 리빙룸 공간으로 계획했다.</li>
</ul>`
  },
  {
    id: 'ieum-quote-spacing',
    title: '가운데점 리스트',
    description: '가운데점 기호(·)로 항목을 구분하는 리스트 단락입니다.',
    html: `<p class="txt">· 한국수어가 제1 언어이며 농문화와 농사회에 속해 있는 사람<br>
· 다양한 농인을 만나고 있는 사람<br>
· 한국수어 번역 경험이 있는 사람<br>
· 예술, 공연 경험이 있는 사람<br>
· 다양한 수어 표현과 스타일에 대한 아이디어를 낼 수 있는 사람<br>
· 예술 작품 안에 농문화와 농인 감수성을 자연스럽게 녹여낼 수 있는 사람</p>`
  },
  {
    id: 'ieum-quote-bold',
    title: '굵은 강조 인용문',
    description: '굵은 서체의 본문 인용구와 하단 출처 표기 구조입니다.',
    html: `<p class="txt f_bold">“탈시설해서 야학에 오는 사람들이 사회 구성원으로 자리 잡기를 바라면서 교육을 하기도 하지만, 교육이라는 것 자체가 어려운 분들도 많고 그래서 어떤 할 일과 갈 곳이 되는 활동을 만들어가고자 하죠. 복지관에 가도 사람들이 많기 때문에 계속 대기해야 하고, 거기서는 사회복지서비스의 대상자로 지내는 거니까. 사람들이 야학 와서 다르게 느끼는 것이 그런 것 같아요. 자연스러운 것. 보다 자연스러운 인간관계도 경험하고, 커뮤니티도 경험하고, 여기서 연애도 하고, 다양한 관계도 맺고, 다양한 활동도 해보고.”
    </p>
    <p class="txt mt_0">- 노들장애인야학 활동가(연구보고서 104쪽)</p>`
  },
  {
    id: 'ieum-quoten-reference',
    title: '하이픈 출처 단락',
    description: '하이픈(-) 기호로 시작하는 단순 출처 표시 단락입니다.',
    html: `<p class="txt mt_0">- 노들장애인야학 활동가(연구보고서 104쪽)</p>`
  },
  {
    id: 'ieum-icon-text-1',
    title: '아이콘 문단 및 영상 링크',
    description: '본문 시작 부분에 아이콘 이미지와 비디오 이동 링크를 조합한 단락입니다.',
    html: `<p class="txt"><span class="icon"><img src="/template/cms/user/images/sub/webzine/img_issue_icon-02.png"></span>2024년 1월, 장애인 오케스트라인 <span class="f_bold">핫빛오케스트라</span>가 창단되었어요. 제주특별자치도교육청에서 직접 운영하는 핫빛오케스트라는 ‘사랑을 바탕으로 마음(Heart)을 울리는(Beat) 따뜻한 선율’이라는 의미를 담고 있어요. 4월에 창단 연주회 <a class="underline" href="https://www.ieum.or.kr/user/show/view.do?idx=1314">〈첫 울림, 가슴에 들어온 하모니〉</a>를 진행한 뒤 최근 장애이해교육 전문강사로서 본격적인 활동도 시작했답니다. 그럼 핫빛오케스트라의 설레고 떨리는 창단 연주회 준비 과정부터 멋진 무대까지, 영상으로 만나볼까요?<br>
└영상 보러가기: JIBS 엔터테인먼트, <a class="underline" href="https://www.ieum.or.kr/user/movie/view.do?idx=2850">제주 핫빛오케스트라 창단 연주회 현장</a></p>`
  },
  {
    id: 'ieum-quote-insert',
    title: '따옴표 인용구 단락',
    description: '큰따옴표로 묶인 본문 인용구와 특정 텍스트 굵게 강조 구조입니다.',
    html: `<p class="txt">“극단 애인의 <span class="f_bold">&lt;제4의 벽&gt;</span>은 장애예술을 쉽게 말하거나 비장애 예술과 선을 긋고 말하기를 좋아하는 평자들에 대한 앙심과 반격이다. 장애예술인이 요구받는 ‘장애미학’의 실체가 대체 무엇인지 묻고, 현장의 장애예술인들에게 이것이 장애와 비장애를 가르는 또 하나의 편견, 선 긋기라는 사실을 말하는 작품이었다. 장애인에 의한 작품을 활발하게 발표해온 극단 애인이기에 앞장서 얘기할 수 있는 작업이었다고 본다. 비장애인으로서 찔리기도 하고, 장애예술인과 협업하고 공존하고자 하는 예술인으로서 통쾌하기도 했다.“</p>`
  },
  {
    id: 'ieum-text-temp-7',
    title: '번호형 강조 본문',
    description: '기울임 굵은 폰트 번호가 시작되는 본문 문단입니다.',
    html: `<p class="comu-writer__txt"><em class="f_bold">1. 제3의 생명체:</em> 우리는 살아있는 것을 동물 아니면 식물로 생각하는 경우가 많은데요. 오늘은 그 둘 중 어디에도 속하지 않는 미지의 생명체 ‘곰팡이’를 주제로 하는 전시에 다녀왔어요. 경복궁역 인근에 있는 예술공간 팩토리2에서 이지연 시각예술작가의 기획으로 마련된 자리였어요. 팩토리2는 이지연 작가를 중심으로 뭉친 곰팡이 써클 구성원들이 지난 수개월 동안 산기슭, 물가, 도심 등 이곳저곳을 탐방하며 곰팡이를 찾는 여행의 베이스캠프이자 곰팡이의 세계로 관람객을 안내하는 ‘공간으로 된 티켓’ 같은 곳이었어요. 오래전에 사촌 형이 공간으로 된 잡지를 만든 적이 있는데, ‘공간으로 된 티켓’이라는 말에 그때 기억도 나더라고요.</p>`
  },
  {
    id: 'ieum-text-temp-8',
    title: '보라색 소제목 및 색상 설명문',
    description: '보라색 굵은 소제목, 본문, 그리고 하단에 초록색 설명문이 추가된 구조입니다.',
    html: `<p class="txt f_bold purple-txt">1. 자기소개</p>
    <p class="txt">거의 매일 와요. 서강대학교에서 일 끝나고 출발하면 30분에서 1시간 정도 걸려요. 이곳에 오면 3시간, 4시간 정도 있는 것 같아요. 모던양파에서 그림 그리고, 선샤인아놀드훌라 모임도 하고, 요즘엔 캠씨 영상을 자주 봐요.</p>
    <p class="txt green-txt mt_0">(도움말 : 캠씨는 작년에 사부작 청년들과 뉴미디어 아티스트팀 노드 트리가 협업해 진행한 모임이다. &lt;오리마을 대모험&gt;이라는 미디어 오페라 공연을 했는데, 냐옹이는 요즘 캠씨 모임과 공연 영상을 보고 또 보고 있다.)</p>`
  },
  {
    id: 'ieum-text-temp-9',
    title: '밑줄 대제목 및 보라색 소제목',
    description: '밑줄 강조형 대제목 아래에 보라색으로 도서나 논문 제목 등을 배치하는 구조입니다.',
    html: `<p class="tit f_bold underline">한국: 접근성을 제도화하는 과정</p>
    <p class="txt purple-txt mt_0">‘성장을 넘어서 성숙으로, 한국 장애예술 정책의 역사적 궤적과 시대적 사명’ (정종은 부산대학교 예술문화영상학과 부교수)</p>`
  },
  {
    id: 'ieum-text-temp-10',
    title: '파란색 강조 인용문',
    description: '굵고 파란색 글씨로 구성된 큰따옴표 형태의 짧은 인용구입니다.',
    html: `<p class="txt blue-txt f_bold">
			“여기 상월곡동에 사는 주민들, 외국인, 어르신, 아이들과 뭔가 해보고 싶었다. 사람들이 편안하고 자유롭게 드나들 수 있는 공간, 여기에 와서 영화도 보고 노래도 듣고, 책도 볼 수 있는 곳이
			되었으면 했다. 원래는 책이 엄청 많았는데, 요즘 연습실로 쓰다 보니 지금은 별로 없다.”
		</p>`
  },
  {
    id: 'ieum-text-temp-11',
    title: '굵은 2행 제목',
    description: '두 개의 줄이 모두 굵게 강조된 2행 형태의 대제목 구조입니다.',
    html: `<p class="tit"><span class="f_bold">아무도 소외되지 않게, 모두가 조화롭게</span><br>
<span class="f_bold">김지수 연극연출가</span></p>`
  },
  {
    id: 'ieum-text-temp-12',
    title: '번호 태그형 밑줄 제목',
    description: '# 일련번호와 두 줄 제목이 들어간 밑줄형 타이틀 영역입니다.',
    html: `<p class="tit underline f_bold len"><span class="f_bold">#1. 장애인·비장애인 협업의 구색</span><br>
<span class="f_bold">필요한 건 ‘배우 김OO’이 아니라 그냥 ‘장애인’?</span></p>`
  },
  {
    id: 'ieum-text-temp-13',
    title: '중앙 정렬 밑줄 제목',
    description: '가운데 정렬된 굵은 밑줄 제목 스타일입니다.',
    html: `<p class="tit f_bold underline ta_c">정책과 제도, 접근성의 시대</p>`
  },
  {
    id: 'ieum-text-temp-14',
    title: '화자 표시 대화 단락',
    description: '앞단에 화자 이름이 굵게 강조되는 대화 또는 인터뷰 본문 단락입니다.',
    html: `<p class="txt"><strong>김상미</strong> 화영 님이 다운될 때가 많아서 삐지면 말을 안 하고 표정이 달라져요. (조화영 배우가 울그락불그락한 얼굴을 해 보인다) 이렇게.</p>`
  },
  {
    id: 'ieum-text-temp-52',
    title: '중앙 정렬 감상 텍스트',
    description: '가운데 정렬 속성이 적용된 여러 행의 수필 또는 시 감상 본문 단락입니다.',
    html: `<p class="txt center-item">몸. 조금 뚱뚱한 모습 보이는 거 같아요.<br>
열심히 살 빼고 있어요.<br>
달리고 운동하고 있어요.<br>
운동 살 빼기 위해서 동네 두 바퀴 돌아요.<br>
두 바퀴 돌고 나면 마음 편하고 개운해요.<br>
느낌 마음 편하게 밖에 구경하고 모습 좋아요.<br>
운동하고 공감 점심 산책하고 구경하고 있어요.<br>
계단 올라가요. 4층 숨 진짜요.<br>
숨 손 다리 가슴 떨려요. 땀 많이요.<br>
동료하고 같이 건강 운동 하고 싶어요.<br>
동료한테 달리기하는 모습 보여주고 싶어요.<br>
내가 얼만큼 살이 빠지고 있는지 동료들이 말해주면 좋겠어요.</p>`
  },
];

const IeumText: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="텍스트"
      categoryName="웹진"
      brandName="이음"
      subcategoryName="텍스트"
      editorType="ieum"
      templates={textTemplates}
    />
  );
};

export default IeumText;
