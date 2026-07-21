import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArteHtmlEditor from '../../../components/webzine/ArteHtmlEditor';

const textTemplates = [
  {
    id: 'black-underline-mid',
    title: '검은 밑줄 중',
    description: '검은 밑줄 중 레이아웃 템플릿입니다.',
    html: `<div class="posttit mt_50">사실은, 나를 사랑해서</div>`
  },
  {
    id: 'blue-middle-title',
    title: '파란 중제 (동틀/리포트)',
    description: '파란 중제 (동틀/리포트) 레이아웃 템플릿입니다.',
    html: `<div class="posttit mt_50" style="color:#4b4be4">
3. 문화예술교육 지원법 일부개정법률안 제출 (′23.5.18.)</div>`
  },
  {
    id: 'blue-small-text',
    title: '파란색 작은 글씨 (괄호로 많이 씀)',
    description: '파란색 작은 글씨 (괄호로 많이 씀) 레이아웃 템플릿입니다.',
    html: `<span style="display:inline-block;color:#2368c6;font-size:80%">(Empat Mata, 말레이어로 ‘네 개의 눈’이라는 뜻)</span>`
  },
  {
    id: 'bold-text-right-name',
    title: '진한 글씨 + 오른쪽 이름',
    description: '진한 글씨 + 오른쪽 이름 레이아웃 템플릿입니다.',
    html: `<div class="posttext mt_25">
구형승 작가는 예술교육 키트 상품 개발을 위한 사전 조사 차원에서 그동안 공공 지원으로 이루어진 여러 사례를 검토한 적이 있는데, 나름의 의미에도 불구하고 판매용 상품 개발에 참고하기에는 아쉬움이 있었다고 한다. 〈쓰레기 예술 그림책 키트〉개발을 위해 미술치료사 자문을 받으면서 8개월 간 기획개발에 힘을 쏟았다. 무엇보다 정크아트 키트 상품인 만큼 환경에 해를 끼치지 않도록 재생지와 콩기름을 사용하고, 커피 찌꺼기 연필, 색종이 재활용 색연필, 흙 크레파스 등 다양한 소재를 도입했다. 2022년 서울 도봉구 혁신가 지원사업을 통해 개발했고, 모의펀딩대회에서 5,330만 원이라는 거액의 가상 투자금을 유치하기도 했다. 그러나 실제 텀블벅 펀딩으로는 백만 원 남짓 모였으니 ‘모의’와 ‘실제’의 괴리가 너무 컸다. 브랜딩도 열심히 했고 수백 명의 교육 참여자 피드백을 거쳐 만들었기에 자신 있었는데 냉정한 현실에 충격을 받았다. 사회적 가치를 응원하는 것과 실제 구매 사이에 아직 갈 길이 멀다.</div>
<div class="posttext mt_25 f_bold">“솔직히 멘붕 왔죠. 여전히 정답은 모르겠지만 깨지더라도 계속 들이받고 싶어요. 제 목표가 공공 지원에 너무 기대지 않고 자생성을 갖추는 거예요. 영업은 필수죠. 백화점 문화센터, 대기업 출강 건으로 제안서 보내면 몇몇 곳에서 실제 요청도 들어옵니다. 캐릭터 중심으로 예술콘텐츠 팬층을 만들면서 수익구조 다각화 작업도 계속할 겁니다. 흔히들 사회혁신 분야는 2년 넘기기 쉽지 않다고 해요. 돈이 되는 것도 아니고 비전도 잘 안 보이고 설득하기도 힘드니까. 그런데도 5년 동안 제가 이 분야에서 활동하고 있는 건 이 일을 사랑하는 마음, 진심 때문이거든요.”</div>
<div class="posttext ta_r">&#8211; 구형승 작가</div>`
  },
  {
    id: 'light-blue-text',
    title: '연한 파란글씨',
    description: '연한 파란글씨 레이아웃 템플릿입니다.',
    html: `<span style="display:flex;color:#2368c6;font-size:20px;">* 고레에다 히로카즈의 드라마 〈고잉 마이 홈〉중</span>`
  },
  {
    id: 'indent-bullet',
    title: '들여쓰기 (앞에 동그라미 표시)',
    description: '들여쓰기 (앞에 동그라미 표시) 레이아웃 템플릿입니다.',
    html: `<div class="posttext mt_25" style="border-top: 2px solid;border-bottom: 2px solid; padding: .5vw 0;">
<dl class="dlLst">
<dt><strong>좌담 개요</strong></dt>
<dd>
    • <strong>일 시</strong> : 2022년 10월 11일(화) 오후 7시~10시<br />
    • <strong>장 소</strong> : 서울일삼<br />
    • <strong>참석자</strong>
    </dd>
</dl>
<ul class="peo">
<li>김혁진 모든학교 체험학습연구소 연구위원</li>
<li>이선철 감자꽃스튜디오 대표</li>
<li>박지선 프로듀서 그룹 도트 크리에이티브 프로듀서	</li>
<li>임상빈 작가</li>
<li>이선옥 수원문화재단 문화도시센터장</li>
<li>제환정 한국예술종합학교 객원교수</li>
</ul></div>`
  },
  {
    id: 'blue-second-title',
    title: '파란색 두번째 타이틀',
    description: '파란색 두번째 타이틀 레이아웃 템플릿입니다.',
    html: `<div class="posttext f_bold" style="color:#2368c6">
김주희 전주문화재단 예술놀이팀 팀장
</div>`
  },
  {
    id: 'red-middle-subtitle',
    title: '빨간 중제의 소제',
    description: '빨간 중제의 소제 레이아웃 템플릿입니다.',
    html: `<div class="posttext f_bold" style="color:#de0000;">
‘아낌없는’ 힘
</div>`
  },
  {
    id: 'blue-body-text',
    title: '파란색 본문',
    description: '파란색 본문 레이아웃 템플릿입니다.',
    html: `<div class="posttext mt_25" style="color:#2368c6">
팬데믹 이후 예술(교육)계는 새로운 규칙과 변화를 만들어왔고, 먼 미래라 생각했던 디지털 기술과 인공지능(AI)의 활용과 윤리의 문제까지 다양한 논의가 진행되었다. 미묘하게 달라진 규칙과 관계, 급속도의 기술 변화, 기후 위기, 지정학적 갈등과 전쟁 등 끝없는 이슈 속에 예술은 어떤 일렁임을 만들어내고 있을까.</div>`
  },
  {
    id: 'blue-footnote-body',
    title: '파란색 주석 (본문주석)',
    description: '파란색 주석 (본문주석) 레이아웃 템플릿입니다.',
    html: `<span class="footnote_b">(주1)</span>`
  },
  {
    id: 'blue-footnote-desc',
    title: '파란색 주석 (하단주석설명)',
    description: '파란색 주석 (하단주석설명) 레이아웃 템플릿입니다.',
    html: `<div class="footnote_t mt_25">
<p>(주1) 아이를 더 낳으려 하지 않는 이유: 양육비 부담(53.1%), 직장생활과 병행 어려움(21.1), 건강문제(7.8%) 등(육아정책연구소, 2017년)</p>
<p>(주2) '14~22년 사교육비(초등학생 1인당 월평균) 변화: '14년 23.2만원 → '22년 37.2만원, 60.4% 증가(교육부, 통계청)</p>
</div>`
  },
  {
    id: 'span-bold-word',
    title: 'span 굵은 단어',
    description: 'span 굵은 단어 레이아웃 템플릿입니다.',
    html: `<span class="f_bold" style="display:inline-block;">&lt;별이 빛나는 밤</span>`
  },
  {
    id: 'italic-text',
    title: 'italic',
    description: 'italic 레이아웃 템플릿입니다.',
    html: `<div class="posttext mt_25 ta_c te_it pna_txt">“공동체는 서로를 위해 있는 것이다. 서로를 위해, 나는 당신을 위해, 당신은 나를 위해 함께 설 수 있다.”</div>`
  },
  {
    id: 'text-center-align',
    title: 'text center 텍스트 가운데 정렬',
    description: 'text center 텍스트 가운데 정렬 레이아웃 템플릿입니다.',
    html: `<div class="posttext mt_25 ta_c te_it pna_txt">“공동체는 서로를 위해 있는 것이다. 서로를 위해, 나는 당신을 위해, 당신은 나를 위해 함께 설 수 있다.”</div>`
  },
  {
    id: 'qna-txt-indent',
    title: 'qna_txt qna가 아닌데 들여쓰기',
    description: 'qna_txt qna가 아닌데 들여쓰기 레이아웃 템플릿입니다.',
    html: `<div class="posttext mt_25 ta_c te_it pna_txt">“공동체는 서로를 위해 있는 것이다. 서로를 위해, 나는 당신을 위해, 당신은 나를 위해 함께 설 수 있다.”</div>`
  },
  {
    id: 'black-small-subtitle-center',
    title: '검은글씨(작음) 부제 가운데 정렬',
    description: '검은글씨(작음) 부제 가운데 정렬 레이아웃 템플릿입니다.',
    html: `<div class="posttext f_bold mt_5 ta_c">공채린 가야금연주자·예술교육가</div>`
  }
];

const ArteText: React.FC = () => {
  return (
    <div className="space-y-10 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            글씨
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">글씨</span>
          </div>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {textTemplates.map((template) => (
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

export default ArteText;
