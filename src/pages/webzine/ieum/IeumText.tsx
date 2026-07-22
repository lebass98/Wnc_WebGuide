import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

// 이음 텍스트 템플릿 항목들 (필요시 계속 추가 가능)
const ieumTextTemplates: TemplateItem[] = [
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
    id: 'ieum-gray-box1',
    title: '연한 박스 텍스트',
    description: '연한 배경색이 있는 박스 형태의 단락입니다.',
    html: `<p class="txt odd-box">뇌병변장애는 몸에 떨림이 있어 무게감 있는 소품을 선호하는데, 극장에 들어가서야 확인한 소품은 종이 재질이었다. 손 떨림이 있는데도 낭독공연 할 때 대본을 손으로 들고 해야 하는 경우도 있었다. 역할에 잘 어울리는 의상, 공연과 잘 맞는 ‘예쁜’ 의상은 장애가 있는 몸을 움직이는 데 불편했다.</p>`
  },
  {
    id: 'ieum-gray-box2',
    title: '회색 상자 (질의응답)',
    description: '회색 박스 안에 질문과 답변을 포함한 대화형 본문입니다.',
    html: `<div class="gray_box">
<p class="txt">박지영: ‘마음을 먹는다’ 제 기준으로 그 문장의 한국어를 이해했을 때, 쉬운 결정이 아니라 어려운 결정으로 느껴지는데. 집은 자기가 원하면 바로 되는 게 아니라 어떤 결심과 어떤 과정이 필요한 걸까요? 그게 맞다면, 왜 어려운 결정이 필요한가요?<br>
<br>
장영: 여기서는 ‘마음을 먹는다’가 ‘크게, 굳게 마음을 먹는다’ 같은 식으로 쓰였다기보다는, 내가 ‘마음’으로 어떤 의도를 가지면 → 그것이 이루어졌다는 것을 강조하려고 쓴 말이었어요. 즉 ‘내가 마음으로 의도하면, 이루어졌어!’라고 ‘의도’를 강조하려는 것입니다. 집이 원하면 바로 (실행)됩니다. 다만 그 과정에서 마음을 먹는 ‘의도’가 더 중요하다는 걸 강조하려 했습니다.</p>
</div>`
  },
  {
    id: 'ieum-comment-box-1',
    title: '작성자 코멘트 카드',
    description: '직책/이름과 핵심 요약글을 배치하는 코멘트 박스입니다.',
    html: `<div class="comment-box" id="item1">
<p class="sub-tit">이승규 장애인문화예술극회 휠 단장</p>
<p class="tit">“나는 <span class="impo">모두가 똑같은 움직임을 요구받지 않을 것</span>을 요구합니다!”</p>
</div>`
  },
  {
    id: 'ieum-icon-text-1',
    title: '아이콘 문단 및 영상 링크',
    description: '본문 시작 부분에 아이콘 이미지와 비디오 이동 링크를 조합한 단락입니다.',
    html: `<p class="txt"><span class="icon"><img src="/template/cms/user/images/sub/webzine/img_issue_icon-02.png"></span>2024년 1월, 장애인 오케스트라인 <span class="f_bold">핫빛오케스트라</span>가 창단되었어요. 제주특별자치도교육청에서 직접 운영하는 핫빛오케스트라는 ‘사랑을 바탕으로 마음(Heart)을 울리는(Beat) 따뜻한 선율’이라는 의미를 담고 있어요. 4월에 창단 연주회 <a class="underline" href="https://www.ieum.or.kr/user/show/view.do?idx=1314">〈첫 울림, 가슴에 들어온 하모니〉</a>를 진행한 뒤 최근 장애이해교육 전문강사로서 본격적인 활동도 시작했답니다. 그럼 핫빛오케스트라의 설레고 떨리는 창단 연주회 준비 과정부터 멋진 무대까지, 영상으로 만나볼까요?<br>
└영상 보러가기: JIBS 엔터테인먼트, <a class="underline" href="https://www.ieum.or.kr/user/movie/view.do?idx=2850">제주 핫빛오케스트라 창단 연주회 현장</a></p>`
  },
  {
    id: 'ieum-icon-text-2',
    title: '리뷰 및 대댓글 카드',
    description: '리뷰 작성자 프로필, 공연 정보, 별점/휠체어 마크, 본문 및 대댓글 레이아웃입니다.',
    html: `<article class="reviewClub-communicate" id="item5">
<div class="comu-writer">
<p class="comu-writer__profile"><span class="comu-writer__img"><img alt="지혜연" src="/template/cms/user/images/sub/webzine/img_profile_jihyeyoun.jpg"> </span> <span class="comu-writer__name">지혜연</span></p>
<article class="reviewClub-item">
<div class="reviewClub-item__info"><a class="item-info__tit" href="https://www.gugak.go.kr/site/program/performance/detail?menuid=001001001001&amp;performance_id=34041" target="_blank">[국악] 2025 토요국악동화 〈덩덕쿵별쿵 어린 왕자〉</a>
<ul class="el-lists el-lists--bar">
	<li>국립국악원(극단 로.기.나래) | 2025.10.4, 11, 18, 25. | 국립국악원 풍류사랑방</li>
</ul>
<p class="row reviewClub-item__bf"><span class="show-view__icon"><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></span></p>
</div>
</article>
<p class="comu-writer__txt">생텍쥐페리의 『어린 왕자』에 ‘K’를 넣어 새롭게 태어난 작품이다. 인형극, 그림자극, 국악 등 좋은 재료들로 비벼진 비빔밥이다! 한국 사람도 어렵게 생각하는 ‘국악’이라는 장르를 두 가지의 장단으로 쉽게 접근시킨다. 반복 접근으로 잊을 수가 없다.</p>
<div class="comu-reply comu-reply">
<div class="reply-item reply-item--dep01">
<div class="reply-item__txt">
<p class="reply-item__name">김보라</p>
<span class="reply-item__cont">우와! 너무 궁금한 공연이네요! 판소리를 좋아하는 벨기에 친구가 놀러 오는데, 시간이 맞는다면 데려가 봐야겠어요<img src="/template/cms/user/images/sub/webzine/img-emoticon--hand-heart.png"></span></div>
</div>
</div>
</article>`
  },
  {
    id: 'ieum-gray-box3',
    title: '회색 상자 (시/문학)',
    description: '회색 박스 안에 여러 줄의 시 구절과 우측 정렬된 정보가 들어간 구조입니다.',
    html: `<div class="gray_box">
<p class="txt">눈을 뜨고는 알 수 없는 말<br>
단연코 들을 수 없는 말<br>
(중략)<br>
비어 있어서 명백히<br>
비어 있지 않다는 드넓은 소리<br>
밤하늘에 빛나는 시공의 소리</p>

<p class="txt ta_r">– 「빈칸」 부분</p>
</div>`
  },
  {
    id: 'ieum-gray-box4',
    title: '회색 상자 (중앙 정렬 시)',
    description: '가운데 정렬된 시 제목 및 구절과 우측 정렬된 작성자명이 있는 회색 박스입니다.',
    html: `<div class="gray_box">
		<p class="txt ta_c f_bold"><strong>나는 괴물</strong><br>
		</p><p class="txt ta_r f_bold">정진호</p> 
		<p class="txt ta_c">
		나는 괴물<br>
		재미와 행복에 미친 괴물<br>
		영화와 게임 신화를 좋아하는 괴물이다<br>
		그림에 미치고<br>
		환수나 알아<br>
		천사에 미쳤다<br>
		그런 괴기한 것을 사랑하는 나 역시<br>
		괴물<br>
		그러나 그렇기에 나는 행복해<br>
		행복하기에 재미를 보고<br>
		재미를 보기에 희망을 가진다<br>
		인간이란<br>
		특이한 괴물</p>
	</div>`
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
    id: 'ieum-text-temp-15',
    title: '회의 및 행사 개요 카드',
    description: '개요 타이틀, 일시/장소 리스트 및 참석자 정보(dl)를 카드 형태로 배치합니다.',
    html: `<div class="meeting_info row">
<p class="info1 f_bold">개요</p>

<ul class="info2">
	<li>
	<p><span class="f_bold">일시</span>2023년 1월 31일(화) 오전 10:30</p>
	</li>
	<li>
	<p><span class="f_bold">장소</span>서울 용산역 회의실(itx 1)</p>
	</li>
</ul>

<div class="info3"><span class="f_bold">참석자</span>

<dl class="row">
	<dt>좌장.</dt>
	<dd>최선영 유구리최실장, 이음온라인 기획위원</dd>
	<dt>패널.</dt>
	<dd>송보민 강남장애인복지관 가족문화팀장<br>
	양민정 실로암시각장애인복지관 음악점역팀장<br>
	이경도 소화누리 팀장</dd>
</dl>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-16',
    title: '조사 개요 정보 상자',
    description: '설문조사 등의 조사기간, 대상, 응답자수, 방법을 일목요연하게 표 형태로 정리한 영역입니다.',
    html: `<div class="meeting_info row meeting_info--tit">
<p class="info1 f_bold">[온라인 설문] 장애 예술, 역량을 말하다</p>

<ul class="info2">
	<li>
	<p><span class="f_bold">조사기간</span>2018.10.25.(목) ~ 11.5.(월) (11일간)</p>
	</li>
	<li>
	<p><span class="f_bold">조사대상</span>웹진 이음 독자, 이음센터 페이스북 이용자 등</p>
	</li>
</ul>

<ul class="info3">
	<li>
	<p><span class="f_bold">응답자수</span>118명</p>
	</li>
	<li>
	<p><span class="f_bold">조사방법</span>온라인 설문조사</p>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-17',
    title: '행사 개요 및 참석자 표',
    description: '행사 개요와 여러 참석자 명단을 분할하여 정리한 표 구조의 카드입니다.',
    html: `<div class="meeting_info row">
	<p class="info1 f_bold">개요</p>
	
	<ul class="info2">
		<li>
		<p><span class="f_bold">일시</span>2022년 1월 13일(목) 오후 2시</p>
		</li>
		<li>
		<p><span class="f_bold">장소</span>이음센터 커뮤니티룸2</p>
		</li>
	</ul>
	
	<ul class="info3">
		<li>
		<p><span class="f_bold">참석자</span>
		이음온라인 2기 기획위원<br>
		문영민 장애예술 연구자<br>
		박지선 크리에이티브 프로듀서<br>
		이진희 장애여성공감 대표<br>
		최선영 유구리 최실장</p>

		<dl class="row">
			<dt>사회.</dt> 
			<dd>오세형 한국장애인문화예술원 전략기획부장</dd>
		</dl>
		
		</li>
		
	</ul>
	</div>`
  },
  {
    id: 'ieum-text-temp-18',
    title: '조사 개요 설명 박스',
    description: '상단 경계선 박스 안에 조사명과 세부 리스트(기간, 대상, 방법)를 배열하는 형태입니다.',
    html: `<div class="explain">
<p class="txt f_bold">이음온라인 이용자 설문조사</p>

<ul class="lists dot">
	<li>조사기간 : 2021.11.24.(수)~12.9.(목) (16일간)</li>
	<li>조사대상 : 이음온라인 이용자, 한국장애인문화예술원 SNS 이용자 등</li>
	<li>응답자수 : 1,303명</li>
	<li>조사방법 : 온라인 설문조사</li>
</ul>

<p class="txt f_bold">전문가 패널조사</p>

<ul class="lists dot">
	<li>조사기간 : 2021.11.17.(수)~11.30.(화) (14일간)</li>
	<li>조사대상 : 한국장애인문화예술원 이음온라인 기획위원 및 지원사업 평가위원</li>
	<li>응답자수 : 29명</li>
	<li>조사방법 : 이메일 조사</li>
</ul>
</div>`
  },
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
    id: 'ieum-text-temp-21',
    title: '가로형 카드 (이미지 좌/정보 우)',
    description: '좌측에 대표 이미지, 우측에 카테고리 태그 및 상세 설명을 배치하는 현장리뷰용 카드입니다.',
    html: `<div class="poster row">
<div class="img_wrap"><img alt=" 현장리뷰  한국·캐나다 수교 60주년 기념전 《모두의 어떤 차이》 ‘차이’와 ‘모두’를 함께 생각하는 장애예술" src="/template/cms/user/images/sub/webzine/45/img_review_20230823_0605.jpg"></div>
<div class="info">
<p class="tit">한국·캐나다 수교 60주년 기념전 《모두의 어떤 차이》</p>

<p class="custom">한국국제교류재단 ｜ 2023.6.19. ~ 8.12. ｜ KF갤러리(서울 중구)</p>

<p class="cont">한국·캐나다 수교 60주년을 기념하는 전시로 캐나다에서 가장 오랜 역사와 최대 규모를 자랑하는 장애인 예술단체인 국립장애인문화예술센터(National access Arts Centre) 협력, 알버타주정부 한국사무소 후원으로 기획되었다. 전시에는 故 이원형, 픽셀 킴 등 양국 장애예술가 20팀이 참여해 드로잉, 회화, 조각, 영상, 음악 등 작품 70여 점을 선보였다.</p>

<p class="cont">▸ [문화소식] <a href="https://www.ieum.or.kr/user/show/view.do?idx=981"><u>전시정보 바로가기</u></a><br>
<a class="underline" href="https://youtu.be/14tQwYOxqmo">▸ 전시 스케치 및 개막식 하이라이트(한국국제교류재단 유튜브 채널) </a></p>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-22',
    title: '가로형 카드 (프리뷰)',
    description: '좌측 이미지와 우측의 상세 기사 설명/태그가 결합된 가로 카드 레이아웃입니다.',
    html: `<div class="poster row">
<div class="img_wrap"><img alt=" 현장리뷰 [무장애예술주간 프리뷰] 댄스필름 &lt;원&gt; &lt;옛날옛적에&gt; 보는 춤에서 듣는 춤으로, 예술 향유의 새 지평" src="/template/cms/user/images/sub/webzine/23/img_review_210825_0504.jpg"></div>
<div class="info">
<p class="tit">[2021 무장애예술주간 프리뷰] 음성해설 댄스필름 &lt;원&gt; &lt;옛날옛적에&gt;</p>

<p class="custom">2021.8.2.~8.5. 온라인</p>

<p class="cont">전 세계를 무대로 활동하고 있는 현대무용단 고블린파티의 작품 &lt;옛날옛적에&gt;와 &lt;원&gt;에 음성해설이 도입된 댄스필름이다. &lt;원&gt;은 변방에서 시작하여 중심으로 나아가 보자는 마음으로 원(Circle)에 집중한다. 휠체어 바퀴를 잡고 앞뒤로 움직이는 움직임 자체를 해체하여 손 모양, 상체의 움직임을 살펴 가며 춤으로 만들었다. &lt;옛날옛적에&gt;는 전통소품, 전통악기, 전통춤, 전통소리와 현대무용을 하는 창작자들의 움직임이 만나 우리의 전통을 자유롭게 해체하고 재창조하는 과정이 담겨있다. ‘아티스트 토크’에서는 고블린파티의 댄스필름 제작과정과 음성해설 도입에 관한 이야기를 들을 수 있다.</p>

<ul class="lists dot">
	<li>&lt;원&gt; 음성해설 영상 <a class="underline" href="http://www.ieum.or.kr/user/movie/view.do?idx=610" title="새창열림">바로가기</a></li>
	<li>&lt;옛날옛적에&gt; 음성해설 영상 <a class="underline" href="http://www.ieum.or.kr/user/movie/view.do?idx=613" title="새창열림">바로가기</a></li>
	<li>댄스필름-아티스트 토크 영상 <a class="underline" href="http://www.ieum.or.kr/user/movie/view.do?idx=614" title="새창열림">바로가기</a></li>
</ul>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-23',
    title: '가로형 카드 (회색 배경)',
    description: '회색 배경에 좌측 이미지와 우측 텍스트 정보가 배치된 카드 구조입니다.',
    html: `<div class="poster row gray-poster">
<div class="img_wrap"><img alt="모두기획 2022년 우리가 주목한 ‘공연‧프로젝트’보편성과 고유성 사이를 탐색하기" src="/template/cms/user/images/sub/webzine/38/img_issue_20221228_0202.jpg"></div>
<div class="info">
<p class="tit">제4의 벽</p>
<p class="custom">극단 애인 | 2022.10.19.~10.23. | 성북마을극장</p>

<p class="cont">“무대에서 장애는 미학적인가?” 니콜라이 예브레이노프의 원작에서 ‘파우스트’를 진짜로 보여주기 위해 사실주의, 자연주의에 입각하여 관객과 무대 사이에 벽을 세우고 “있는 그대로의 예술이 진짜 예술인가”라는 질문을 던졌다면, 극단 애인의 &lt;제4의 벽&gt;은 ‘장애미학주의’라는 새로운 양식으로 바꾸어 묻는다. 장애예술에서 무엇을 바라보는가, 장애가 미학적인 이유는 무엇인가를 질문한다.</p>

<p class="cont">[이미지출처] <a class="underline" href="https://www.facebook.com/rmreksdodls" target="_blank" title="새창열림">극단 애인 페이스북(링크)</a></p>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-24',
    title: '투명한 회색 배경 상자',
    description: '배경색이 반투명하게 들어간 텍스트 강조용 회색 박스 영역입니다.',
    html: `<div class="gray_box gray_box-transparent">
<p class="txt">2022년 장애예술계는 여러 분야에서 눈에 띄는 변화와 발전을 포착하였고, 긍정적인 기대와 희망을 품은 한해였다. 창작과 발표가 이뤄지는 예술현장에서, 예술현장에 직·간접적인 영향을 미치는 정책·제도에서, 그리고 다양한 미디어와 연결된 사회 전반에서 장애예술에 대한 관심과 인식을 새롭게 하고 더 나은 방향으로 의미 있는 한 걸음을 내디뎠다. 이음온라인 기획위원, 한국장애인문화예술원 지원사업 평가위원 등 여러 전문가가 올해 주목했던 작품과 활동, 단체와 공간 등을 살펴본다.</p>

<div class="row">
<p class="txt f_bold">① 공연·프로젝트</p>

<p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p>

<p class="txt underline"><a href="https://www.ieum.or.kr/user/webzine/view.do?idx=475">② 시각·축제·공간</a></p>
</div>
</div>
<div class="gray_box">
<p class="txt f_bold">참여하신 분들</p>

<p class="txt">고주영 공연예술 독립프로듀서, 김동현 성결대 예술대학 음악학부 교수, 김윤선 음악평론가, 김이경 무용수지원센터 사무국장, 김일송 공연 칼럼니스트, 김지수 극단 애인 대표, 김지연 d/p 디렉터, 김최은영 미술평론가, 문영민 장애학 연구자, 박지선 프로듀서그룹 도트 크리에이티브 프로듀서, 김인경 밝은방 공동대표, 성무량 공연예술 프로듀서, 송현민 음악평론가, 신희흥 태이움직임교육연구소 대표, 안경모 연극연출가, 안현정 성균관대학교 박물관 큐레이터, 유장영 (전)전남도립국악단 예술감독, 윤종연 안산국제거리극축제 예술감독, 이나리메 음악평론가, 이양구 극작가, 이진희 장애여성공감 공동대표, 정일주 퍼블릭아트 편집장, 정종은 상지대학교 교수, 최선영 유구리최실장, 최혜자 문화디자인자리 대표, 허명진 무용평론가, 홍은지 신촌문화발전소 소장</p>
</div>`
  },
  {
    id: 'ieum-text-temp-25',
    title: '회색 상자 (개념 설명)',
    description: '회색 박스 내부에 요약 본문과 일시/대상 등의 목록을 표시하는 구조입니다.',
    html: `<div class="gray_box">
<p class="txt">취향은 ‘하고 싶은 마음이 생기는 방향’을 뜻하며 한 인간이 가지고 있는 특정한 기호의 집합이다. 관심 가는 것에 호감을 느끼고, 그 대상을 배우고 즐기고 반복하면서 취향을 만들고, 그렇게 자신의 정체성이 된다. 창작의 세계에서 감각을 벼리고 마음의 안테나를 높이 세우는 예술가들에게 취향과 영감의 원천은 무엇일까? 취향을 만들기 위해 필요한 것, 어렵게 만드는 요소는 무엇일까? 예술가들에게 물었다.</p>

<ul class="lists dot">
	<li>조사기간 : 2024.6.3.~6.9.(7일간)</li>
	<li>조사대상 : 웹진이음, 이음온라인 기획 콘텐츠에 참여했던 예술인 중 50명</li>
	<li>조사방법 : 온라인 설문조사</li>
	<li>응답자수 : 25명(50%)</li>
</ul>

<div class="row">
<p class="txt f_bold">취향의 발견① 당신의 취향은 무엇입니까?</p>

<p>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p>

<p class="txt underline"><a href="https://www.ieum.or.kr/user/webzine/view.do?idx=644">취향의 발견② 취향을 담은 장소&amp;맛집</a></p>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-26',
    title: '테두리 점선 리뷰 안내 상자',
    description: '테두리가 점선으로 된 카드 내부에 리뷰 제목과 바로가기 링크들을 스크롤 가능하게 배치합니다.',
    html: `<article class="reviewClub-box reviewClub-box--dashed">
<p class="reviewClub-box__txt scroll-move">1월의 리뷰▶ <a class="move-txt" href="#item1">축제 ‘서울융합예술페스티벌 언폴드엑스’</a>&nbsp;|&nbsp; <a class="move-txt" href="#item2">연극 〈아들에게(부제: 미옥, 앨리스 현)〉</a>&nbsp;|&nbsp; <a class="move-txt" href="#item3">연극 〈극장 지평좌표계에 귀신을 고정시키는 방법〉</a>&nbsp;|&nbsp; <a class="move-txt" href="#item4">뮤지컬 〈2024 뮤지컬 노트르담 드 파리 – 한국어버전〉</a>&nbsp;|&nbsp; <a class="move-txt" href="#item5">전시 《무수히 안녕》 《보통 사람들의 찬란한 역사》</a>&nbsp;|&nbsp; <a class="move-txt" href="#item6">전시 《구본창의 항해》</a>&nbsp;|&nbsp;</p>
</article>`
  },
  {
    id: 'ieum-text-temp-27',
    title: '회색 상자 (순위 목록)',
    description: '회색 박스 안에 세로 막대 기호(|)로 항목을 나열하는 순위형 리스트 구조입니다.',
    html: `<div class="gray_box">
<p class="txt f_bold">전문가 응답 1위~10위</p>

<ul class="lists bar">
	<li>1위 (58.6%) 국립극단, 아르코·대학로예술극장 등 국공립예술기관 배리어프리 공연 제작지원</li>
	<li>2위 (55.2%) 문화체육관광부, 「장애 예술인 지원법」 시행에 따른 ‘제1기 장애 예술인 문화예술 활동 지원위원회’ 출범</li>
	<li>3위 (51.7%) 서울시립 북서울미술관 발달장애·정신장애 창작자 22인전 《길은 너무나 길고 종이는 조그맣기 때문에》 전시 개최(2021.6.29.~9.22.)</li>
	<li>3위 (51.7%) 국립극단 작품 개발사업 ‘창작공감’에서 ‘장애와 예술’을 주제로 창작극 개발</li>
	<li>5위 (31.0%) 경기문화재단, 세계 최초 시각장애인용 입체촉지도 제작·설치(경기도청 북부청사 평화광장)</li>
	<li>6위 (27.6%) 장애학생 문화예술 중점학교 대구 예아람학교 개교</li>
	<li>7위 (20.7%) 서울문화재단 연극 웹진 [연극in] 200호 배리어프리 특집, 음성낭독·수어통역 서비스</li>
	<li>7위 (20.7%) 최의택 문학작가 &lt;슈뢰딩거의 아이들&gt;로 제1회 문윤성 SF문학상 수상</li>
	<li>9위 (13.8%) 극단 다빈나오, 국립극장 기획·초청 무장애 공연 &lt;소리극 옥이&gt;(10.5.~10.10.)</li>
	<li>9위 (13.8%) 광주지적발달장애인복지협회 광산구지부 ‘제1회 2021 발달장애인 영화제’ 개최(11.10.-11.11.)</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-28',
    title: '회색 상자 (사례 Q&A)',
    description: '회색 박스 내부에 사례 시나리오 본문과 질의응답 형식을 함께 배치한 구조입니다.',
    html: `<div class="gray_box">
<p class="txt f_bold">[사례] 서커스 공연예술가인 맥스(Max)의 시나리오 – 수어통역사의 지원</p>

<p class="txt">맥스는 공인 교육기관에서 서커스 예술을 공부하고 있으며 연말 쇼케이스를 위해 리허설을 하고 있다. 그는 청각장애인이며 수어통역사가 필요하다. 리허설 중 통역사의 서비스는 정당한 편의 지원으로 서커스 학교에서 지원한다. 그러나 리허설 전후에는 통역사가 없어 그는 종종 수업 이외의 시간에 소외된 느낌이 든다. 그는 모든 사람이 리허설을 준비하고 워밍업 할 때 참여할 수 없다. 그는 과거에 학우들의 대화에 따라가지 못해 공연 기회에 대한 정보를 놓친 적이 있다.</p>

<ul class="lists bar">
	<li>초기 목표 : 학우들과 우정을 쌓고 전문 네트워크를 구축한다.</li>
	<li>장기적 목표 : 서커스 회사에 고용된다.</li>
</ul>

<p class="txt">1) 맥스는 NDIS 계획을 통해 리허설, 수업 전후에 수어통역을 받는 비용을 지원받을 수 있나요?</p>

<ul class="lists bar">
	<li>네, NDIS 계획에서 수어통역에 대한 자금을 사용할 수 있습니다. 수어통역을 사용하는 예술가들을 위한 계획에는 유연하게 사용할 수 있는 수어통역 자금제공이 포함됩니다. 참가자에게 필요한 의사소통 지원(예: 수어통역, 점자, 원격자막)이 프로그램에서 전달되지 않는 경우 합리적이고 필요한 지원으로 간주될 수 있습니다.</li>
</ul>

<p class="txt">2) 어떤 규칙이 적용되나요?</p>

<ul class="lists bar">
	<li>2013년 국가장애보험제도법 34항, NDIS 운영지침이 적용됩니다.</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-29',
    title: '회색 상자 (추천 정보)',
    description: '회색 박스 안에 핀 아이콘이 붙은 굵은 소제목과 설명 텍스트를 배치한 카드입니다.',
    html: `<div class="gray_box">
<p class="txt f_bold">[알아두면 좋은 정보]</p>

<p class="txt"><span class="f_bold">해운대해수욕장</span>은 경사로, 촉지음성안내판, 장애인 전용 주차장과 휠체어 이동을 위한 넓은 보행통로, 장애인 화장실을 갖추고 있다. 관광안내소에서 휠체어를 대여할 수 있다.</p>

<ul class="lists dot">
	<li><a class="underline" href="https://www.haeundae.go.kr/tour/index.do" target="_blank">해운대구청 홈페이지 해운대 문화관광 정보</a></li>
</ul>
&nbsp;

<p class="txt"><span class="f_bold">해운대 해변열차와 스카이캡슐</span>은 전동휠체어 진입은 안 되고 수동휠체어만 가능하다. 해변열차는 줄 설 때 안내원에게 말하면 수동휠체어 접근을 위한 이동형 경사로를 설치해 준다. 스카이캡슐은 엘리베이터가 있어 수동휠체어로 대기실까지 올라갈 수 있지만, 캡슐 몸체가 좁아 휠체어는 접어두고 좌석에 앉아야 한다.</p>

<ul class="lists dot">
	<li><a class="underline" href="https://www.bluelinepark.com/" target="_blank">해운대 블루라인파크</a></li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-30',
    title: '회색 상자 (무장애 장소 정보)',
    description: '회색 박스 안에 공원이나 명소 등의 무장애 여행지 상세 설명을 정리하는 구조입니다.',
    html: `<div class="gray_box">
<p class="txt f_bold">[알아두면 좋은 정보]</p>

<p class="txt f_bold">아차산 무장애숲길</p>

<p class="txt">아차산은 해발 295.7m의 야트막한 산으로 산세가 험하지 않고 등산로가 잘 갖춰져 있다. 평강교에서 출발하여 영화사와 기원정사 뒷길을 지나 휴게데크까지 이어지는 0.8km 구간이 무장애숲길로, 대체로 평탄하지만 완만한 경사가 있다. 노면은 목재 데크가 깔려 있어 휠체어나 유아차 사용자의 활동이 가능하다. 시각장애인을 위한 점자안내판도 마련되어 있다. 아차산 입구 공영주차장에 장애인 주차장이 마련되어 있고, 장애인 화장실은 생태공원 입구 쪽과 무장애숲길에 설치되어 있다.</p>

<ul class="lists dot">
	<li>주소 : 서울시 광진구 영화사로 135 (아차산 등산로 입구)</li>
	<li><a class="underline" href="https://www.seouldanurim.net/attractions/D/TOURINFOTYPE2/33793" target="_blank">서울관광재단 다누림관광 ‘아차산무장애숲길’</a></li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-31',
    title: '회색 상자 (날짜별 한 문장)',
    description: '회색 박스 내부에 연월일 날짜와 해당 문장을 세로로 나열하는 아카이브 레이아웃입니다.',
    html: `<div class="gray_box date">
		<ul class="lists">
		<li><strong>2021. 1. 9.</strong> 법화경님, 제가 당신께 모든 고통들과 모든 재미없음을 드려요!</li> 
		<li><strong>2021. 1.17.</strong> 성녀 딤프나시여, 제가 바보가 아니게 해주세요!</li> 
		<li><strong>2006. 5.28.</strong> 하느님, 제가 다른 우주를 보고 있는 느낌이게 해주세요!</li> 
		<li><strong>2007. 7. 8.</strong> 가장 아름다운 존재의 눈이시여, 가장 아름다운 기도문의 소원들이 다 이루어지게 해주세요! </li>
		</ul>
	</div>`
  },
  {
    id: 'ieum-text-temp-32',
    title: '작품/공연 상세 후기 카드',
    description: '좌측 포스터 이미지와 우측 장르, 단체명, 일시/장소 정보 및 배리어프리 마크로 구성된 리뷰 카드입니다.',
    html: `<div class="review_box-item">
<div class="info">
<div class="info-tit-box">
<p class="tit">[무용]<br>
〈21° 11′〉</p>

<p class="custom">아트엘 | 2023.10.13. ~ 10.14.</p>
</div>

<p class="txt f_bold">불균형은 균형이 가질 수 없는 운동성을 나타내고, 불안정은 안정이 가질 수 없는 다변성을 가진다.</p>

<p class="txt mt_0">뇌병변장애로 인해 기울어진 몸의 중심축을 가리키는 21° 11′. 3명의 뇌병변장애인 무용수와 3명의 비장애인 무용수가 함께 움직이며 서고, 뛰고, 몸을 기울이거나 팔을 뻗기 위해 21도 11분만큼 기울어진 몸의 중심과 타협을 하는 모습을 보여주는 몸의 실험이자 형식의 실험인 작품이다. 노경애 안무가는 이러한 장애의 움직임에서 기존의 무용 테크닉이 구현할 수 없었던 새로운 움직임 언어를 발견한다.</p>

<div>
<ul class="img_list row">
	<li><img alt="세 사람이 몸을 맞대어 기울이고 있다. " src="/template/cms/user/images/sub/webzine/46/img_review_20230920_0801.jpg"></li>
	<li><img alt="두 사람이 몸을 기울이고 있고 한 사람이 두 사람 사이에 손을 뻗고 있다." src="/template/cms/user/images/sub/webzine/46/img_review_20230920_0802.jpg"></li>
</ul>
</div>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-33',
    title: '회색 상자 (표가 포함된 Q&A)',
    description: '회색 박스 내부에 요약 리스트와 구분 표(Table)를 함께 구성하는 FAQ 구조입니다.',
    html: `<div class="gray_box">
			<p class="txt f_bold"><img src="/template/cms/user/images/sub/icon-pin.png" alt="pin"> 한눈에 보는 우선구매 대상 창작물</p>
			<p class="txt f_bold">공동 창작물은 아래 조건 중 하나를 충족해야 합니다.</p>
			<ul class="lists dot">
				<li>창작자 본인이 장애예술인일 것</li>
				<li>공동창작자 또는 초대작가의 50% 이상이 장애예술인일 것</li>
				<li>단체·법인의 대표자가 장애예술인일 것</li>
				<li>연출, 감독, 작가, 기획자 등 주요 제작자가 장애예술인일 것</li>
				<li>공연 실연 또는 기술지원 인력의 30% 이상이 장애예술인일 것</li>
				<li>지휘자 등 비슷한 수준의 예술적 참여 실적이 있을 것</li>
			</ul>
			<p class="txt">⚠ 단순 복제물, 공산품, 기념품 등 예술 목적이 아닌 물품은 제외됩니다.</p>
			<div>
				<ul class="img_list column img_list--table top-caption-personList">
					<li>
							<div class="table_wrap webzine-table">
								<table class="table_basic">
									<caption>한눈에 보는 우선구매 대상 창작물 테이블</caption>
									<colgroup>
										<col style="width:33%">
										<col style="width:auto">
										<col style="width:33%">
									</colgroup>
									<thead>
										<tr>
											<th scope="col"><p class="f_bold">미술품</p></th>
											<th scope="col"><p class="f_bold">공예품</p>
											(「공예진흥법」 제2조 2호)</th>
											<th scope="col"><p class="f_bold">공연</p>
											(「공연법」 제2조 1호)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>회화, 조각, 공예, 사진, 서예, 벽화, 미디어아트 등</td>
											<td>공예의 결과물로서 실용적·예술적 가치가 있는 물품</td>
											<td>예술적 관람물을 실연하여 공중에게 관람하도록 하는 행위</td>
										</tr>
									</tbody>
								</table>
							</div>
					</li>
				</ul>
			</div>
		</div>`
  },
  {
    id: 'ieum-text-temp-34',
    title: '회색 상자 (시/한 줄 필사)',
    description: '회색 박스 안에 가운데 정렬된 짧은 글귀와 하단 출처 표기 영역입니다.',
    html: `<div class="gray_box">
	<p class="txt ta_c f_bold">버스를 기다리다가<br>
	‘병신인가 베’하며 쳐다보는 눈길이<br>
	부담스러운 날은<br>
	길 위에 돌부리가<br>
	무던히도 많이 솟아났다</p>
	
	<p class="txt ta_c f_bold">– 최명숙, 「희망」 부분</p>
	</div>`
  },
  {
    id: 'ieum-text-temp-35',
    title: '프로필 이미지 및 대화 단락',
    description: '좌측에 둥근 모서리의 이미지, 우측에 화자 이름 및 인터뷰 본문을 배치한 형태입니다.',
    html: `<div class="img_wrap mix"><img alt="" src="/template/cms/user/images/sub/webzine/16/img_issue_210715_0102.jpg">
	<p class="txt"><strong>윤석정</strong> 장애 예술과 창작역량이라는 주제로 문학 분야 선생님들을 모시고 좌담회를 갖게 되었다. 장애 문학에 관한 넓은 이야기보다는 어떻게 하면 장애 문학인들이 창작역량을 펼치고 강화할 수 있을지에 초점을 맞춰, 선생님들의 경험과 현장에서 느끼는 이야기를 많이 해주시길 바란다. 저는 시를 쓰고, 문학 관련 콘텐츠를 연출, 기획, 제작하고 있다. 먼저 자기소개를 부탁한다.</p>
	</div>
  <div class="img_wrap mix"><img alt="" src="/template/cms/user/images/sub/webzine/16/img_issue_210715_0104.jpg">
	<p class="txt"><strong>손병걸</strong> 저는 시를 쓰고, 중도 시각장애가 있다. 한국작가회의 회원이자 인천작가회의 지회장을 맡고 있다. 서른 살에 시각장애가 왔기 때문에 어떤 장애인 단체에도 속해 본 적이 없었다. 장애를 갖기 전부터 글을 썼고 천리안 문단에서 활동하다가 어느 순간 시력을 잃게 되고 사회에서 격리되다 보니 시에 전념하게 되었다. 그전에는 글쓰기가 놀이였는데 주변에서 등단을 권유해 신춘문예에 도전해서 등단하게 되었다.</p>
	</div>`
  },
  {
    id: 'ieum-text-temp-36',
    title: '프로필 이미지 및 인터뷰 답변',
    description: '인터뷰이 사진과 대화 문단을 좌우 분할하여 연출하는 구조입니다.',
    html: `<div class="interview-txt">
<div class="img_wrap"><img alt="" src="/template/cms/user/images/sub/webzine/39/img_issue_20230201_0107.jpg"></div>

<p class="txt f_bold purple-txt">1. 처음으로 예술가라고 느낀 때</p>

<p class="txt mt_0">어머니가 잠시 템플스테이를 가시고 혼자 있으면서 &lt;삶 1&gt;이라는 시를 썼을 때예요. 시가 시라는 형식에만 갇히지 않고, 제 마음을 잘 드러내는 마음의 창문 같은 느낌이 들었어요. 어머니를 잃은 갈매기처럼 마음에 심한 상처를 입어 혼자서 할 수 있는 것이 별로 없었던 시기였는데요. 그 당시의 제 마음을 잘 살려낸 시 같아 아직도 그 여운이 잊히지 않습니다.</p>

<p class="txt f_bold purple-txt">2. 본캐와 부캐</p>

<p class="txt mt_0">저의 본캐는 주민센터 행정 도우미에요. 주민센터의 업무를 원활히 하는 데 일조한다 생각하고 있습니다. 부캐는 감격과 슬픔 그리고 환희와 실망 등을 거듭하며 다양한 고비를 만나지만 끝내 이루고 마는 사람, 일명 시인입니다.</p>
</div>`
  },
  {
    id: 'ieum-text-temp-37',
    title: '인터뷰이 프로필 및 문단 조합',
    description: '사각 프로필 사진과 인터뷰 텍스트를 나란히 배치한 대화 단락입니다.',
    html: `<div class="interview-txt">
	<div class="img_wrap">
		<img alt="" src="/template/cms/user/images/sub/webzine/1/201811_issue1_01.jpg">
	</div>

	<p class="txt">장애인 문화예술의 발전을 위해 재단법인 한국장애인문화예술원과 이음센터가 설립된 지 어느덧 3년이라는 시간이 지났습니다.</p>

	<p class="txt">주마가편(走馬加鞭)의 마음가짐으로 장애인 문화예술의 발전을 위해 앞만 보고 달려온 결과, 지난 3년간 지원내용과 범위는 훨씬 다양해지고 규모는 증대되었습니다.</p>

	<p class="txt">이제 한국장애인문화예술원은 새로운 도약을 준비하고 있습니다. 장애 예술인 여러분의 생생한 모습과 현장의 땀, 목소리를 전달할 웹진 [이음]을 창간합니다.</p>

	<p class="txt">웹진 [이음]은 단순히 정보만을 전달하는 수단이 되기보다는 장애인과 비장애인, 예술인과 대중을 이어준다는 이음센터의 의미처럼 서로를 잇는 또 하나의 소통창구를 꿈꾸고 있습니다. 장애 예술의 과거를 돌아보며 현재와 미래를 고민하고 함께 걸어가는 동반자이기를 희망합니다.</p>

	<p class="txt">웹진 [이음]의 창간을 필두로 더 많은 장애 예술인의 예술작품을 세계에 선보이기를 기원합니다. 한국장애인문화예술원과 웹진 [이음]은 그 디딤돌이 되겠습니다.</p>

	<p class="txt">웹진 [이음]이 장애 예술이라는 망망대해를 개척하는데 장애 예술인 여러분에게 등대가 되기를 바라며, 앞으로도 많은 관심과 격려를 부탁드립니다.</p>

	<p class="txt">감사합니다.</p>

	<p class="txt ta_r">신종호<br>
	(재)한국장애인문화예술원 이사장</p>

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
  {
    id: 'ieum-text-temp-39',
    title: '좌측 이미지 및 시 감상문',
    description: '좌측에 그림이나 세로형 사진, 우측에 감상글 또는 시 구절을 배치하는 레이아웃입니다.',
    html: `<div>
<ul class="img_list row img_list--poem">
	<li class="imgArea"><img src="/template/cms/user/images/sub/webzine/12/img_interview_20210923_0201.jpg"></li>
	<li>
	<div>
	<p class="txt f_bold">김근태 미술작가</p>

	<p class="txt purple-txt">“새로운 작업실에서 더 깊은 작품으로</p>

	<p class="txt purple-txt">“2020년 5·18 40주년 기획 전시를 통해<br>
	전 국민 치유와 화합의 메시지가 전달되기를</p>

	<p class="txt purple-txt">“북한 전시의 길이 열리길, 예술을 통한<br>
	한반도의 평화와 화합이 시작되길</p>

	<p class="txt underline"><a href="http://ieumzine.kr/archives/75992">김근태 미술작가 인터뷰</a></p>
	</div>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-40',
    title: '인물 프로필 및 시적 인용구',
    description: '인물 이미지 옆에 연출자 정보와 보라색 굵은 인용 대사를 세트로 배치한 구성입니다.',
    html: `<div>
<ul class="img_list row img_list--poem">
	<li>
	<div>
	<p class="txt f_bold">극단 다빈나오 김지원 연출</p>

	<p class="txt purple-txt">“책 100권 이상 읽기</p>

	<p class="txt purple-txt">“프라하 한 달 살기 고고!!</p>

	<p class="txt purple-txt">“나를 위한 시간이 많아지길 바라요.</p>

	<p class="txt underline"><a href="http://ieumzine.kr/archives/75279">극단 다빈나오 김지원 연출, 전인옥 배우 인터뷰</a></p>
	</div>
	</li>
	<li class="imgArea"><img src="/template/cms/user/images/sub/webzine/12/img_interview_20210923_0202.jpg"></li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-41',
    title: '단일 프로필 카드',
    description: '둥근 프로필 사진과 성명, 약력 등의 개인 소개 글을 배치하는 구조입니다.',
    html: `<div class="profile row">
    <div class="img_wrap"><img alt="" src="/template/cms/user/images/sub/webzine/img_profile_Kimeunseol.jpg"></div>
    
    <div class="info">
    <p class="name">김은설</p>
    
    <p class="cont">보청기를 사용하고 있지만 귀로 듣는 것보다 자신의 시각과 다른 감각으로 세상을 관찰하면서 소통한다. 보편적이면서 보편적이지 않아, 미묘하게 엇갈리는 일상에서 생긴 아주 작고 개인적인 감각과 감정, 기억을 세밀히 탐구하고 있다. 듣는다는 게 무엇이며 자기 존재의 의미와 본질에 의문을 던지면서 드로잉, 설치, 영상매체를 아우르며 작업하고 있다.<br>
    <a class="underline" href="mailto:odd_dreamer@naver.com">odd_dreamer@naver.com</a></p>
    
    <p class="name">김지영(백구)</p>
    
    <p class="cont">연결되는 만큼 거리 둘 수 있는, 지치지 않고 함께 하는 방식에 대해 고민하는 미술작가이자 노동자이다. 중심보다 주변부를 좋아하고 미끄러짐으로써 넓어지려 노력한다.<br>
    <a class="underline" href="mailto:whitenightkim@gmail.com">whitenightkim@gmail.com</a><br>
    <a class="underline" href="https://www.instagram.com/m_b_p__/" target="_blank">므브프 인스타그램 바로가기(링크)</a></p>
    </div>
    </div>`
  },
  {
    id: 'ieum-text-temp-42',
    title: '듀얼 프로필 카드',
    description: '두 개의 둥근 프로필 사진을 나란히 배치하고 하단에 각각의 정보를 넣는 구조입니다.',
    html: `<div class="profile row">
<div class="img_wrap"><img alt="송지은" src="/template/cms/user/images/sub/webzine/img_profile_songjien.jpg"> <img alt="라움콘" src="/template/cms/user/images/sub/webzine/img_profile_laumkon_curator.jpg"></div>

<div class="info">
<p class="name">라움콘</p>

<p class="cont">라움콘은 Q레이터가 베르니케 실어증 상태에서 사용한 착어이자 비언어로, 원래는 ‘양치질’을 의도하여 사용한 단어다. 2018년 10월 7일 갑작스런 뇌출혈로 장애를 갖게 된 문화예술 기획자 Q레이터와 시각예술작가 송지은으로 구성된 아티스트 듀오 라움콘은 마비된 신체 기능을 재활하는 과정에서 예전과 다른 몸으로 경험하는 일상을 관찰하고 기록하여 다양한 창작물을 생산한다. 개인전 《한 손 그릇》 《울림만 있다면》 《□□□ □□□□ □□ □□□□》 《다시걷는 노-하우》, 기획 그룹전 《여기 닿은 노래》 《기울기 기울이기》 등이 있다. ‘라이징 멜버른’의 여정 아카이브 《what a perfect journey》 작업을 했다.<br>
<a class="underline" href="mailto:laumkon@gmail.com">laumkon@gmail.com</a><br>
· 인스타그램 <a class="underline" href="https://www.instagram.com/laumkon" target="_blank">@laumkon</a><br>
· 홈페이지 <a class="underline" href="https://www.laumkon.com/" target="_blank">laumkon.com</a></p>
</div>
</div>`
  },
  {
    id: 'ieum-text-temp-43',
    title: '웹툰 이미지 영역',
    description: '가로 전체 폭에 이미지를 맞추어 웹툰 컷을 삽입하는 레이아웃입니다.',
    html: `<div class="webtoon-box"><img alt="〈긔북이 스토리〉 3화 시험 긔북이 작가 | 0점이 쓰인 시험지를 든 토끼 앞에 긔북이가 삐질삐질 땀을 흘리고 있다." src="/template/cms/user/images/sub/webzine/50/img_blog_20240214_1101.png"></div>`
  },
  {
    id: 'ieum-text-temp-44',
    title: '캐릭터 대화 말풍선',
    description: '캐릭터 아이콘과 함께 말풍선 형태로 대화를 표현하는 대화형 구조입니다.',
    html: `<figure class="solar-dorae">
			<div class="speaker">
				<img class="speaker-img" src="/template/cms/user/images/sub/icon-solar.png" alt="솔라">
				<figcaption class="speaker-name">솔라</figcaption>
			</div>
			<p class="speaker-txt">
				우선구매제도가 작품을 '파는' 통로를 넓히는 거라면, 공연이나 전시를 '선보이는' 기회를 보장하는 제도도 있어. 국가기관이나 지방자치단체가 설치한 공연장·미술관이 장애예술인의 공연과 전시를 정기적으로 실시하도록 하는 <span class="f_bold">의무 공연·전시 제도</span>야.
			</p>
		</figure>
    <figure class="solar-dorae">
			<div class="speaker">
				<img class="speaker-img" src="/template/cms/user/images/sub/icon-dorae.png" alt="도레">
				<figcaption class="speaker-name">도레</figcaption>
			</div>
			<p class="speaker-txt">
				얼마나 자주 해야 하는 거야?
			</p>
		</figure>`
  },
  {
    id: 'ieum-text-temp-45',
    title: '회색 상자 (관련 자료 링크)',
    description: '회색 박스 안에 '관련 자료 보러 가기' 타이틀과 목록형 이동 링크들을 정리한 카드입니다.',
    html: `<div class="gray_box">
			<ul class="lists dot">
				<li><span class="f_bold">관련 자료 보러 가기</span><br>
					└ <a href="https://www.ieum.or.kr/user/movie/view.do?idx=2151">[문서] 장애예술인 창작품 유통 활성화 방안 연구</a>

				</li>
			</ul>

			<p class="txt">장애예술인 창작물 우선구매제도와 정기적 의무 공연·전시 제도에 대한 더 자세한 내용은 <a href="https://kdac.or.kr/contents/view?contentsNo=27&amp;level=2&amp;menuNo=72" target="_blank">한국장애인문화예술원</a> 홈페이지에서 확인할 수 있습니다.
</p>
		</div>`
  },
  {
    id: 'ieum-text-temp-46',
    title: '리뷰 및 대화 목록 (2개 세트)',
    description: '각각 작성자 정보와 작품 설명, 대화 내용이 담긴 리뷰 2개가 연속으로 이어지는 영역입니다.',
    html: `<section class="reviewClub-wrap reviewClub-wrap-noVersion">
    <article class="reviewClub-communicate" id="item6">
<div class="comu-writer">
<p class="comu-writer__profile"><span class="comu-writer__img"><img alt="" src="/template/cms/user/images/sub/webzine/img_reviewClub_profile--sujoohun.png"> </span> <span class="comu-writer__name">서주현</span></p>

<article class="reviewClub-item">
<div class="reviewClub-item__info reviewClub-item__info--two"><a class="item-info__tit" href="https://www.ieum.or.kr/user/show/view.do?idx=1567">[전시] 몸의 미학: 현존하는 몸, 살아있는 아름다움 </a>

<ul class="el-lists el-lists--bar">
	<li>장애인문화예술판 | 2024.11.28.~11.30 | 이음갤러리</li>
</ul>

<p class="row reviewClub-item__bf"><span class="show-view__icon"><img alt="음성해설" src="/template/cms/user/images/common/square/ico_barrier_free_big1_red.jpg"> </span> <span class="show-view__icon"><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></span> <span class="show-view__icon"><img alt="편안한 공연" src="/template/cms/user/images/common/square/ico_barrier_free_big10_red.jpg"></span></p>
</div>
</article>

<article class="reviewClub-item">
<div class="reviewClub-item__info reviewClub-item__info--two"><a class="item-info__tit" href="https://www.ieum.or.kr/user/show/view.do?idx=1566">[음악극] 도와줘요, 엔피씨! </a>

<ul class="el-lists el-lists--bar">
	<li>장애인문화예술판 | 2024.11.28.~11.30 | 이음아트홀</li>
</ul>

<p class="row reviewClub-item__bf"><span class="show-view__icon"><img alt="음성해설" src="/template/cms/user/images/common/square/ico_barrier_free_big1_red.jpg"> </span> <span class="show-view__icon"><img alt="자막" src="/template/cms/user/images/common/square/ico_barrier_free_big4_red.jpg"></span> <span class="show-view__icon"><img alt="쉬운내용" src="/template/cms/user/images/common/square/ico_barrier_free_big5_red.jpg"></span> <span class="show-view__icon"><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></span></p>
</div>
</article>
</div>
</article>
</section>`
  },
  {
    id: 'ieum-text-temp-47',
    title: '전체 폭 이미지 및 하단 캡션',
    description: '테두리 선이 적용된 전체 폭 이미지와 하단 중앙에 배치되는 설명글 세트입니다.',
    html: `<div>
<ul class="img_list img_list--full row">
	<li><img alt="은은한 아이보리색 비단 바탕 위에 좌측의 청룡과 우측의 백호, 그리고 그 사이에 펼쳐진 거대한 산수 풍경을 정교하게 수놓은 대형 8폭 자수 병풍. 두 신수 사이로는 첩첩이 이어진 푸른 산봉우리들과 시원하게 쏟아지는 폭포, 거칠게 치는 파도가 하나의 거대한 화면으로 연결되어 있다." src="/template/cms/user/images/sub/webzine/76/img_ja_20260624_0304.jpg">
	<p class="caption ta_c">이정희, 〈청룡백호도〉 병풍, 60×108cm, 8폭, 표구 크기 496×185cm, 실크천, 명주실, 꼰사, 2003년</p>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-48',
    title: '단일 이미지 및 캡션',
    description: '가운데 정렬된 대표 이미지와 하단 설명 문단 구조입니다.',
    html: `<div>
    <ul class="img_list row">
        <li><img alt="김진주 작가와 창파 아트디렉터가 초록이 우거진 공원에서 서로 등을 기대고 앉아 있다." src="/template/cms/user/images/sub/webzine/45/img_issue_20230823_0101.jpg">
        </li>
    </ul>
    <p class="caption ta_c">왼쪽부터 김진주 작가, 창파 아트디렉터 
    </p>
    </div>`
  },
  {
    id: 'ieum-text-temp-49',
    title: '가로 배열 이미지 (2개)',
    description: '작은 사이즈의 이미지 2개를 가로로 나란히 배치하고 하단에 각각의 캡션을 넣은 구조입니다.',
    html: `<div>
<ul class="img_list row img-small">
	<li><img alt="깊고 선명한 파란색 바탕의 책표지 사진. 상단에는 사각형 손가락에 연기가 피어오르는 담배를 끼고 있는 흑백사진이 있고, 하단에는 “어느 누구에게도 다정함을 은폐하기로” “옥지구”라고 쓰여 있다." src="/template/cms/user/images/sub/webzine/76/img_ms_20260624_0701.jpg">
	<p class="caption ta_c">옥지구, 『어느 누구에게도 다정함을 은폐하기로』<br>
	(출판사 핌, 2024)</p>
	</li>
	<li><img alt="양쪽으로 펼쳐진 책의 오른쪽 면에 시가 적혀 있다. 오디즘(Audism) 난 절망한 당신들의 눈빛을 관찰하고 싶어 // 약오르게 울고 나서야 오, 오디즘 / 난 그대들이 원하는 일원으로 진실하지 못해 / 굴복하는 연기를 하기 직전에 난 나를 미운 듯이 // 오, 오디즘 (이하 생략) " src="/template/cms/user/images/sub/webzine/76/img_ms_20260624_0702.jpg">
	<p class="caption ta_c">옥지구 시 「오디즘(Audism)」 첫 장. 『어느 누구에게도 다정함을 은폐하기로』 수록.</p>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-50',
    title: '격자형 이미지 목록 (4개)',
    description: '4개의 이미지를 그리드 형식으로 바둑판식 배열하고 개별 설명글을 적용한 레이아웃입니다.',
    html: `<div>
<ul class="img_list row">
	<li><img alt="앙상한 뼈대 모양의 두 사람 청동 조각이 앞뒤로 서 있다. 앞사람은 왼팔만, 뒷사람은 오른팔만 있다." src="/template/cms/user/images/sub/webzine/45/img_review_20230823_0601.jpg">
	<p class="caption ta_c">이원형, &lt;차이와 반복 #1&gt;, 2007, 청동, 115x60x18cm</p>
	</li>
	<li><img alt="노란색 바탕 위에 붓자국처럼 두 개의 커다란 면이 분할되어 있다. 그림 전면에 깨알처럼 쓴 수학기호가 흩뿌려져 써 있다.  " src="/template/cms/user/images/sub/webzine/45/img_review_20230823_0602.jpg">
	<p class="caption ta_c">픽셀 킴, &lt;캐나다 오로라 수학드로잉&gt;, 2023, 캔버스에 혼합재료, 45.5x53cm.</p>
	</li>
</ul>

<ul class="img_list row">
	<li><img alt="검정색 말이 왼쪽을 향해 서 있다. 바탕에는 알록달록한 색들이 경계가 모호하게 채워져 있어 몽환적인 느낌을 준다." src="/template/cms/user/images/sub/webzine/45/img_review_20230823_0603.jpg">
	<p class="caption ta_c">캐롤 해리스, &lt;검은 종마&gt;, 2022, 종이에 혼합재료, 55x75.5x4.5cm.</p>
	</li>
	<li><img alt="유럽의 왕국처럼 뾰족뾰족한 지붕이 있는 고성이 있다. 배경에는 왼쪽에 커다란 빌딩이 있다. 작게 분할된 면들은 다양한 색으로 채워져 경쾌한 느낌이다. " src="/template/cms/user/images/sub/webzine/45/img_review_20230823_0604.jpg">
	<p class="caption ta_c">미셸 베니, &lt;나의 인생책 속 마법에 걸린 왕국&gt;, 종이에 마커, 51.4x66.7cm</p>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-51',
    title: '가로 배열 (이미지 + 동영상)',
    description: '좌측에는 소개 이미지, 우측에는 동영상 플레이어 영역을 가로로 결합한 레이아웃입니다.',
    html: `<div>
<ul class="img_list row double-video">
	<li><img alt="소소하고 평범한 일상을 그리며 삶과 죽음을 돌아보는 연극. 푸르스름한 새벽녘 같은 무대에서 교복을 입은 현영과 민규, 그리고 배경으로 동네 사람들이 하늘을 보고 손을 흔든다." src="/template/cms/user/images/sub/webzine/44/img_interview_20230726_0506.jpg">
	<p class="caption ta_c">국립극장 &lt;우리 읍내&gt; 공연 장면<br>
	사진 제공. 국립극장</p>
	</li>
	<li style="width: 100%;"><object data="https://www.youtube.com/embed/AX4daVKMhBw" type=""></object>
	<p class="caption ta_c">뮤지컬 &lt;영웅&gt; 넘버 ‘누가 죄인인가’ 커버 뮤직비디오<br>
	영상 출처. 핸드스피크 유튜브 채널 <a class="underline" href="https://youtu.be/AX4daVKMhBw" target="_blank">Handspeak Korea</a></p>
	</li>
</ul>
</div>`
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
  {
    id: 'ieum-text-temp-53',
    title: '가로형 인물 리스트 (5인)',
    description: '원형 프로필 이미지와 하단 이름표가 가로로 조밀하게 배열되는 단체 소개 영역입니다.',
    html: `<div>
<ul class="img_list row person-list">
	<li><img alt="" src="/template/cms/user/images/sub/webzine/53/img_issue_20240529_0101.jpg">
	<p class="caption ta_c"><span class="f_bold underline">A(40대 남성)</span><br>
	시각장애가 있고, 연극 등 공연 분야에서 활동한다. 경기도에 산다.</p>
	</li>
	<li><img alt="" src="/template/cms/user/images/sub/webzine/53/img_issue_20240529_0102.jpg">
	<p class="caption ta_c"><span class="f_bold underline">B(40대 여성)</span><br>
	서울에 살고, 청각장애가 있다. 시각예술 분야에서 활동 중이다.</p>
	</li>
	<li><img alt="" src="/template/cms/user/images/sub/webzine/53/img_issue_20240529_0103.jpg">
	<p class="caption ta_c"><span class="f_bold underline">C(30대 남성)</span><br>
	클래식 음악가로 발달장애가 있다. 경기도에 산다.</p>
	</li>
	<li><img alt="" src="/template/cms/user/images/sub/webzine/53/img_issue_20240529_0104.jpg">
	<p class="caption ta_c"><span class="f_bold underline">D(40대 여성)</span><br>
	서울에 살고, 발달장애가 있다. 다양한 장르의 예술활동을 한다.</p>
	</li>
	<li><img alt="" src="/template/cms/user/images/sub/webzine/53/img_issue_20240529_0105.jpg">
	<p class="caption ta_c"><span class="f_bold underline">E(40대 남성)</span><br>
	인천에서 미술작가로 활동 중이다. 지체장애가 있다.</p>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-54',
    title: '무장애 장소 목록 (회색 배경)',
    description: '회색 배경에 상호명과 배리어프리 아이콘 리스트가 포함된 다중 행 레이아웃입니다.',
    html: `<ul class="place-list gray">
	<li>
	<div class="info">
	<p class="tit">순대실록</p>

	<ul class="barrier_lists">
		<li><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></li>
	</ul>
	</div>

	<p class="cont"><span>추천메뉴: 순대곱창볶음, 시래기순대국</span> <span>서울 종로구 동숭길 127, 우성빌딩 2층</span> <span>0507-1407-5338</span></p>
	</li>
	<li>
	<div class="info">
	<p class="tit">그라운드제로</p>

	<ul class="barrier_lists">
		<li><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></li>
	</ul>
	</div>

	<p class="cont"><span>추천메뉴: 맥앤치즈치킨텐더, 노루궁뎅이버섯강정, 와인</span> <span>서울 종로구 대학로8가길 80, 1층</span> <span>02-766-2311</span></p>
	</li>
	<li>
	<div class="info">
	<p class="tit">의성집 대학로점</p>

	<ul class="barrier_lists">
		<li><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></li>
	</ul>
	</div>

	<p class="cont"><span>추천메뉴: 목살삼겹, 낙지순두부찌개</span> <span>서울시 종로구 대학로8가길 52, 1층</span> <span>0507-1376-6809</span> <span>*낮은 계단이 있지만 휠체어 밀어서 출입 가능</span></p>
	</li>
	<li>
	<div class="info">
	<p class="tit">림스치킨 혜화점</p>

	<ul class="barrier_lists">
		<li><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></li>
	</ul>
	</div>

	<p class="cont"><span>추천메뉴: 오리지날 치킨, 간장마늘치킨</span> <span>서울시 종로구 대학로143, 1층</span> <span>02-745-3950</span></p>
	</li>
</ul>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '가로 배열 (이미지 2개 + 동영상 1개)',
    description: '2개의 서브 이미지와 1개의 동영상 재생 영역을 수평으로 나란히 배치한 구성입니다.',
    html: `<div>
<ul class="img_list row">
	<li><img alt="" src="http://www.ieum.or.kr/template/cms/user/images/sub/webzine/20/img_trend_210601_0102.jpg">
	<p class="caption ta_c">두바이 국제공항에서의 전시 《Connections》</p>
	</li>
	<li><img alt="" src="http://www.ieum.or.kr/template/cms/user/images/sub/webzine/20/img_trend_210601_0103.jpg">
	<p class="caption ta_c">모모 무브먼트 &lt;마음의 궁전(Mind Palace)&gt;</p>
	</li>
</ul>

<ul class="img_list row solo-video">
	<li style="width: 100%;"><object allowfullscreen="" data="https://www.youtube.com/embed/kNGB7qdji18" type="text/html"></object></li>
</ul>

<p class="caption ta_c">내셔널 액세스 아트센터<br>
[영상출처] <a href="https://www.youtube.com/watch?v=kNGB7qdji18" target="_blank" title="새창열림">National accessArts Centre 유튜브</a></p>
</div>`
  },
  {
    id: 'ieum-text-temp-56',
    title: '단일 동영상 (상단 캡션)',
    description: '설명 문구가 비디오 위쪽에 중앙 정렬되어 위치하고 아래에 동영상을 배치하는 레이아웃입니다.',
    html: `<div>
			<p class="caption ta_c caption-top">솔라&amp;도레가 기사 속 모두예술상점 현장을 직접 다녀왔습니다.</p>
			<ul class="img_list row solo-video">
				<li style="width: 100%;"><object data="https://www.youtube.com/embed/TUT060yVe1Q?si=Cd46NPqXshS1doJN" type=""></object>
				</li>
			</ul>
		</div>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '가로 레이아웃 (이미지 좌/본문 우)',
    description: '좌측에 이미지, 우측에 텍스트 본문 단락을 배치하여 가독성을 높인 레이아웃입니다.',
    html: `<ul class="img_list line-one row">
        <li style="
    display: flex;
    flex-direction: row;
    gap: 0;
">
        <div class="line-one-con">
            <img alt="비 오는 저녁 주택가 골목길에 두 사람이 2인용 우산을 함께 쓰고 걷는다." src="https://ieum.or.kr/template/cms/user/images/sub/webzine/44/img_issue_20230726_0301.jpg">
        </div>
        <div class="line-one-con">
            <p class="caption-title">&lt;비 오는 날&gt;</p>
        
            <p class="caption">비 오는 날은 좋아하는 사람과 우산을 같이 쓰고 싶어요. 2인용 우산이 있었으면 좋겠어요.</p>
        </div>
        </li>
    </ul>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '세로 레이아웃 (이미지 상/표 하)',
    description: '상단에는 데이터 그래프/이미지를 배치하고 하단에는 상세 수치 표(Table)를 제공하는 복합 구성입니다.',
    html: `<div>
<ul class="img_list column img_list--table">
	<li><img alt="장애유형별 정보 시스템(예술활동증명) 등록 여부 | 지체장애) 등록:43.6%, 미등록:56.4% | 시각장애) 등록:21.7%, 미등록:78.3% | 청각/언어장애) 등록:55.9%, 미등록:44.1% | 지적장애) 등록:1.78%, 미등록:98.3% | 자폐성장애) 등록:6.6%, 미등록:93.4% | 뇌병변장애) 등록:20.3%, 미등록:79.7% | 기타) 등록:72.3%, 미등록:27.7%" src="/template/cms/user/images/sub/webzine/30/img_trend_20220509_0802.jpg"></li>
	<li>
	<div class="table_wrap webzine-table">
	<table class="table_basic">
		<caption>장애 유형별 작품활동 횟수 및 전용공간 보유 여부 테이블</caption>
		<colgroup>
			<col style="width:33%">
			<col style="width:auto">
			<col style="width:33%">
		</colgroup>
		<thead>
			<tr>
				<th colspan="3" scope="col">장애 유형별 작품활동 횟수 및 전용공간 보유 여부</th>
			</tr>
			<tr>
				<th scope="col">구분</th>
				<th scope="col">작품 발표 또는 참여횟수 (평균)</th>
				<th scope="col">전용공간 보유 여부-없음</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>지체장애</td>
				<td>12.9회</td>
				<td>45.2%</td>
			</tr>
			<tr>
				<td>시각장애</td>
				<td>7.6회</td>
				<td>26.5%</td>
			</tr>
			<tr>
				<td>청각/언어장애</td>
				<td>16.5회</td>
				<td>31.1%</td>
			</tr>
			<tr>
				<td>지적장애</td>
				<td>11.0회</td>
				<td>36.1%</td>
			</tr>
			<tr>
				<td class="f_bold">자폐성장애</td>
				<td class="f_bold">16.8회</td>
				<td class="f_bold">66.6%</td>
			</tr>
			<tr>
				<td>뇌병변장애</td>
				<td>7.6회</td>
				<td>40.1%</td>
			</tr>
			<tr>
				<td>기타</td>
				<td>9.8회</td>
				<td>64.1%</td>
			</tr>
		</tbody>
	</table>
	</div>
	</li>
</ul>

<p class="caption ta_c">출처. 보고서 281쪽 표 4-5-3, 301쪽 표 4-5-9, 309쪽 표 4-5-13</p>
</div>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '상단 캡션 표',
    description: '표의 주제나 단위 정보가 표 상단에 중앙 정렬되어 표시되는 깔끔한 테이블 스타일입니다.',
    html: `<div>
<ul class="img_list column img_list--table top-caption-personList">
	<li>
	<p class="caption ta_c">[표] 접근성 유사 개념의 비교 고찰(주1)</p>

	<div class="table_wrap webzine-table">
	<table class="table_basic">
		<caption>접근성 유사 개념의 비교 고찰 테이블</caption>
		<colgroup>
			<col style="width:33%">
			<col style="width:auto">
			<col style="width:33%">
		</colgroup>
		<thead>
			<tr>
				<th scope="col">구분</th>
				<th scope="col">배리어프리<br>
				(Barrier-free)</th>
				<th scope="col">유니버설 디자인<br>
				(Universal Design)</th>
				<th scope="col">인클루시브 디자인<br>
				(Inclusive Design)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>대상</th>
				<td>장애인</td>
				<td>장애인에서 출발. 고령자, 어린이 등 신체 기능적 약자 포함</td>
				<td>장애인, 고령자에서 출발. 현재는 다양한 사회구성원 포괄</td>
			</tr>
			<tr>
				<th>용어의 태동</th>
				<td>1960년대 미국, 1968년 건축장벽 제거법 명시. 1974년 UN 「장벽 없는 건축설계」 보고서</td>
				<td>1985년, 로널드 L. 메이스</td>
				<td>1994년, 로저 콜맨</td>
			</tr>
			<tr>
				<th>주요 지역</th>
				<td>미국, UN</td>
				<td>미국</td>
				<td>영국</td>
			</tr>
			<tr>
				<th>추구 가치</th>
				<td>공평한 접근가능성 향상</td>
				<td>보편성, 접근가능성 향상</td>
				<td>문화다양성, 사회통합, 평등</td>
			</tr>
			<tr>
				<th>목표</th>
				<td>건축, 주거 등 생활환경 포함, 문화자원에서의 접근가능성 향상</td>
				<td>건축, 생활환경 및 제품, 서비스에서의 접근가능성 향상</td>
				<td>건축, 생활환경, 제품 및 공공 서비스 접근가능성 및 접근성 향상</td>
			</tr>
			<tr>
				<th>접근성의<br> 적용 범위</th>
				<td>물리적 접근성<br>
				서비스 접근성</td>
				<td>물리적(감각적) 접근성<br>
				서비스(콘텐츠) 접근성</td>
				<td>물리적(감각적) 접근성<br>
				서비스(콘텐츠) 접근성<br>
				사회적·문화적 접근성</td>
			</tr>
			<tr>
				<th>특징</th>
				<td>장애인의 접근가능성 향상</td>
				<td>장애인, 고령자, 어린이를 포함한 접근성 향상</td>
				<td>장애인을 포함, 사회구성원으로서 다양한 집단에 소속된 개인의 개별적 다양성에 중점을 둔 접근</td>
			</tr>
			<tr>
				<th>예술 현장에서의 재성찰적 논의</th>
				<td>배리어컨셔스, 가시적·비가시적 장벽에 대한 인식 및 지속적 관심</td>
				<td>보편성에 대한 근원적인 재성찰</td>
				<td>과정적 관점에서의 포용, 사회구조적 배제에 대한 포괄적 관점과 태도 요청</td>
			</tr>
		</tbody>
	</table>
	</div>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '가로 배열 (상단 캡션 이미지 3개)',
    description: '각 컬럼마다 상단에 요약 캡션글이 있고 아래에 이미지를 배열한 3열 레이아웃입니다.',
    html: `<div>
<ul class="img_list row top-caption-personList">
	<li>
	<p class="caption ta_c">1위: 인간관계</p>
	<img alt="" src="/template/cms/user/images/sub/webzine/54/img_issue_20240626_0103.jpg"></li>
	<li>
	<p class="caption ta_c">2위: 문화생활</p>
	<img alt="" src="/template/cms/user/images/sub/webzine/54/img_issue_20240626_0104.jpg"></li>
	<li>
	<p class="caption ta_c">3위: 새로운 장소</p>
	<img alt="" src="/template/cms/user/images/sub/webzine/54/img_issue_20240626_0105.jpg"></li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '가로형 포스터 그리드 (4개)',
    description: '세로형 포스터 또는 홍보 이미지 4개를 가로 한 행에 나열한 레이아웃입니다.',
    html: `<div>
<ul class="img_list row">
	<li><img alt="그로토프스키 트레이닝" src="/template/cms/user/images/sub/webzine/49/img_issue_20231227_0201.jpg">
	<p class="caption title"><a class="underline" href="https://www.ieum.or.kr/user/show/view.do?idx=1063">그로토프스키 트레이닝</a> 여기는 당연히, 극장<br>
	<span class="year">2023.8.26.~9.3.</span> <span class="place">아르코예술극장 소극장</span></p>
	</li>
	<li><img alt="생활의 비용" src="/template/cms/user/images/sub/webzine/49/img_issue_20231227_0202.jpg">
	<p class="caption title"><a class="underline" href="https://www.ieum.or.kr/user/show/view.do?idx=1087">생활의 비용</a> 극단 청년단<br>
	<span class="year">2023.9.6.~9.10.</span> <span class="place">미아리고개예술극장</span></p>
	</li>
	<li><img alt="곡비" src="/template/cms/user/images/sub/webzine/49/img_issue_20231227_0203.jpg">
	<p class="caption title"><a class="underline" href="https://www.ieum.or.kr/user/show/view.do?idx=1149">곡비</a> 여기는 당연히, 극장<br>
	<span class="year">2023.10.24.~11.5.</span> <span class="place">미아리고개예술극장</span></p>
	</li>
	<li><img alt="백투백시어터 〈사냥꾼의 먹이가 된 그림자〉" src="/template/cms/user/images/sub/webzine/49/img_issue_20231227_0204.jpg">
	<p class="caption title"><a class="underline" href="https://www.ieum.or.kr/user/show/view.do?idx=1137">백투백시어터 〈사냥꾼의 먹이가 된 그림자〉</a> 한국장애인문화예술원<br>
	<span class="year">2023.10.19.~10.22.</span> <span class="place">모두예술극장</span></p>
	</li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '회색 상자 (장소 상세 소개)',
    description: '회색 박스 안에 기관명과 위치, 사이트, 이용 문의처 아이콘을 적용해 세부 정보를 나타내는 카드입니다.',
    html: `<div class="gray_box">
<p class="txt f_bold">사단법인 누구나</p>

<ul class="lists icon">
	<li><span class="first place"><img alt="위치" src="/template/cms/user/images/sub/icon_caption-place.png"></span>제주특별자치도 서귀포시 동홍로303번길 23, 101-102</li>
	<li><span class="first call"><img alt="문의" src="/template/cms/user/images/sub/icon_caption-call.png"></span>064-762-5939<i>|</i><a href="mailto:everybody.jeju@gmail.com" target="_blank">everybody.jeju@gmail.com</a></li>
	<li><span class="first home"><img alt="홈페이지" src="/template/cms/user/images/sub/icon_caption-home.png"></span><a href="https://www.everybodyfund.org/" target="_blank">https://www.everybodyfund.org/</a><i>|</i><span><img alt="페이스북" src="/template/cms/user/images/sub/icon_caption-facebook.png"></span><a href="https://www.facebook.com/everybody0" target="_blank">@everybody0</a><i>|</i><span><img alt="인스타그램" src="/template/cms/user/images/sub/icon_caption-insta.svg"></span><a href="https://www.instagram.com/everybody_jeju" target="_blank">@everybody_jejueverybody_jeju</a></li>
</ul>
</div>`
  },
  {
    id: 'ieum-text-temp-55',
    title: '대화 피드형 리뷰 카드',
    description: '사용자 프로필 이미지와 대화 거품(말풍선) 형식으로 상호 코멘트를 작성하는 레이아웃입니다.',
    html: `<article class="reviewClub-communicate" id="item3">
<div class="comu-writer">
<p class="comu-writer__profile"><span class="comu-writer__img"><img alt="양병철" src="/template/cms/user/images/sub/webzine/img_profile_yangboungcheol.jpg"> </span> <span class="comu-writer__name">양병철</span></p>

<article class="reviewClub-item">
<div class="reviewClub-item__info"><a class="item-info__tit" href="https://www.ieum.or.kr/user/show/view.do?idx=2022">[행사] 2025년 장애예술인 융복합 문화예술 창작 지원 사업 성과공유회</a>

<ul class="el-lists el-lists--bar">
	<li>한국장애인문화예술원 | 2025.12.17.~12.20. | 모두미술공간</li>
</ul>

<p class="row reviewClub-item__bf"><!-- <span class="show-view__icon"><img alt="음성해설"
                                        src="/template/cms/user/images/common/square/ico_barrier_free_big1_red.jpg"></span>
                                        <span class="show-view__icon"><img alt="수어해설" src="/template/cms/user/images/common/square/ico_barrier_free_big2_red.jpg"></span>
                                        <span class="show-view__icon"><img alt="문자통역" src="/template/cms/user/images/common/square/ico_barrier_free_big8_red.jpg"></span>
                                        <span class="show-view__icon"><img alt="음성해설"
                                        src="/template/cms/user/images/common/square/ico_barrier_free_big1_red.jpg"></span>
                                <span class="show-view__icon"><img alt="자막"
                                        src="/template/cms/user/images/common/square/ico_barrier_free_big4_red.jpg"></span>
                                        <span class="show-view__icon"><img alt="점자"
                                        src="/template/cms/user/images/common/square/ico_barrier_free_big9_red.jpg"></span>
                                --><span class="show-view__icon"><img alt="휠체어접근" src="/template/cms/user/images/common/square/ico_barrier_free_big7_red.jpg"></span> <span class="show-view__icon"><img alt="편안한 공연" src="/template/cms/user/images/common/square/ico_barrier_free_big10_red.jpg"></span></p>
</div>
</article>

<div class="comu-writer__txt"><strong>희원:</strong><span>AI 써본 적 있어?</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>아니, 안 써봤어. AI는 티브이에서 봤어. 얼굴도 목소리도 똑같이 나온대.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>아, 그래. 한 사람의 정보를 넣으면 AI가 그 사람을 공부한대. 오늘 여기 전시회에서 VR 써보니까 어때?</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>잘 보여. 그림은 앞에서만 보이고 VR은 앞, 옆, 위가 다 보여. 재밌어. QR도 했어.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>작품 옆에 있었지.</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>QR로 접속하니까 핸드폰에 나와. 하트 누르면 얼음이 깨져.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>신현채 작가님 작품 속 캐릭터가 게임처럼 나왔었어. 전시 보고 공연 봤잖아. 에이블라인드의 〈지연된 언어〉.</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>이런 공연 처음 봐.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>나도야.</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>시각장애인 안 만나봤어. 발달장애인이랑 몸이 불편한 사람만 만났어.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>그렇구나. 공연은 어땠어?</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>두 명이 그림 그리고 한 명은 걸어서 왔다 갔다 해. 근데 어려워. 잘 몰라.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>그래, 하나로 뭐라고 말하기에는 좀 어렵다. 나는 하얀 도화지가 화면에 까맣게 나오고, 까만 목탄을 하얗게 보여준 게, 뭔가 보이는 사람과 안 보이는 사람이 서로 바뀐 것 같아서 재밌었어.</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>QR은 쉬운데.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>아까 우리 만족도 조사하고 뭔가 받지 않았나? 어? 여기도 QR 있다!</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>아. 이거. (QR이 영상으로 이어짐) 오, 커진다.</span></div>

<div class="comu-writer__txt"><strong>희원:</strong><span>씨앗이구나. 집에 가서 심자.</span></div>

<div class="comu-writer__txt"><strong>병철:</strong><span>그래. 잘 가. </span>또 봐.</div>

<div class="comu-reply comu-reply">
<div class="reply-item reply-item--dep01">
<div class="reply-item__txt">
<p class="reply-item__name">김보라</p>
<span class="reply-item__cont">같은 공간에서 병철 님, 희원 님을 만나고 같은 씨앗을 받았는데, 피트펠렛의 용도를 몰랐어요! 알려주셔서 감사해요. ㅎ</span></div>
</div>
</div>

<div class="comu-reply comu-reply">
<div class="reply-item reply-item--dep01">
<div class="reply-item__txt">
<p class="reply-item__name">지혜원</p>
<span class="reply-item__cont">전시 보러 못 갔는데, 병철 님 덕분에 눈 호강합니다.^^</span></div>
</div>
</div>

<ul class="commu-writer__pics pics-list img-small">
	<li class="pics-item"><img alt="병철이 스마트폰으로 전시장 한쪽 벽에 걸린 신현채 작가의 회화 작품을 촬영하고 있다. 옆 벽면에는 소형 모니터가 디지털 액자처럼 걸려 있다." src="/template/cms/user/images/sub/webzine/71/img_blog_20260121_1205.jpg"></li>
	<li class="pics-item"><img alt="병철이  VR 고글과 컨트롤러를 착용한 채 최석원 작가의 동물을 그린 회화 작품 중 체험형 전시를 즐기고 있다." src="/template/cms/user/images/sub/webzine/71/img_blog_20260121_1206.jpg"></li>
</ul>
</div>
</article>`
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
