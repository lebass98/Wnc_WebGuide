import React from 'react';
import WebzineTemplatePageLayout from '../../../components/webzine/WebzineTemplatePageLayout';

const imageTemplates = [
  {
    id: 'single-no-caption',
    title: '1개 (캡션 없음)',
    description: '가장 기본적인 단일 이미지 레이아웃입니다.',
    html: `<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/01/ssak_20230130_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2026/07/interview1_20260720_01.jpg" alt=""></a>
</li>
</ul>
</div>`
  },
  {
    id: 'single-with-caption',
    title: '1개 (캡션 있음)',
    description: '단일 이미지 아래에 설명(캡션)이 포함된 레이아웃입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2023/01/ssak_20230130_06.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/ssak_20230130_06.jpg" alt=""></a>
</li>
<div class="txts ta_r">&lt;태국 나콘파놈2&gt;(2023)</div>
</ul>
</div>`
  },
  {
    id: 'single-right-caption',
    title: '1개 (우측 캡션)',
    description: '1개 (우측 캡션) 레이아웃 템플릿입니다.',
    html: `<style>
.postboimg__capR{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: flex;}
div.postall_w .postboimg__capR div.txts{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -moz-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: start; -moz-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; -webkit-box-pack: center; -moz-box-justify-content: center; -ms-flex-pack: center; justify-content: center; width: calc(50% - 5px); margin-top: 0; margin-left: 5px;}
@media screen and (max-width: 1024px){
.post-content .postboimg__capR ul li{ padding-top: 0;}
}
@media screen and (max-width: 640px){
.postboimg__capR{ -webkit-box-orient: vertical; -moz-flex-direction: column; -ms-flex-direction: column; flex-direction: column;}
div.postall_w .postboimg__capR div.txts{ width: 100%; margin-left: 0; margin-top: 5px;}
}
</style>

<div class="postboimg postboimg__capR ta_c mt_25" style="margin:0 auto;">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2024/07/hyeon_20240722_04.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2024/07/hyeon_20240722_04.jpg" alt=""></a>
</li>
</ul>
<div class="txts ta_l">
<strong>수상한 연구소 (2020)</strong><strong>- 분해와 조립 그리고 상상을 통해 쓸모없는 것의 쓸모를 찾아가기</strong>장난감, 더 이상 쓸모없어진 가전제품들, 매일 보던 사물들을 분해하고 내부의 프로세스를 관찰해 각각 부품들을 연결하여 새로운 이야기를 만들어 내는 활동
</div>`
  },
  {
    id: 'double-full-caption',
    title: '2개 (전체 캡션)',
    description: '2개 (전체 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/01/ssak_20230130_01.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/ssak_20230130_01.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/01/ssak_20230130_02.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/ssak_20230130_02.jpg" alt=""></a>
</li>
<div class="txts ta_r">(왼쪽) &lt;태국 나콘파놈1&gt;(2023)</div>
</ul>
</div>`
  },
  {
    id: 'double-individual-caption',
    title: '2개 (개별 캡션)',
    description: '2개 (개별 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto;">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/04/kkum_20230424_04.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-4566 size-full" src="/wp-content/uploads/2023/04/kkum_20230424_04.jpg" alt="" /></a>
<div class="txts ta_r">&lt;소리나는 무언가&gt;(2022, 퓨처랩)</div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/04/kkum_20230424_05.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/04/kkum_20230424_05.jpg" alt="" /></a>
<div class="txts ta_r">&lt;비트스텝&gt;(2021, 백남준아트센터)</div>
</li>
</ul>
</div>`
  },
  {
    id: 'double-no-caption',
    title: '2개 (캡션 없음)',
    description: '2개 (캡션 없음) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2023/01/ssak_20230130_03.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/ssak_20230130_03.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2023/01/ssak_20230130_04.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/01/ssak_20230130_04.jpg" alt=""></a>
</li>
</ul>
</div>`
  },
  {
    id: 'double-vertical-full-caption',
    title: '2개 (위1개 아래1개 + 전체 캡션)',
    description: '2개 (위1개 아래1개 + 전체 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/04/ssak_20230417_01.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/04/ssak_20230417_01.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0;float: none;padding-top: 4px;"><a title="새창 이미지 열기" href="/wp-content/uploads/2023/04/ssak_20230417_02.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/04/ssak_20230417_02.jpg" alt=""></a>
</li>
<div class="txts ta_r">(아래)ⓒurbanplay</div>
</ul>
</div>`
  },
  {
    id: 'triple-full-caption',
    title: '3개 (전체 캡션)',
    description: '3개 (전체 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/06/ssak_20230612_04.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/ssak_20230612_04.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/06/ssak_20230612_05.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/ssak_20230612_05.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none">
<a href="/wp-content/uploads/2023/06/ssak_20230612_06.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/ssak_20230612_06.jpg" alt=""></a>
</li>
<div class="txts ta_r">〈땅의 별〉(2022, 먹고 남겨진 후 말려진 배추, 사과 껍질, 파뿌리)</div>
</ul>
</div>`
  },
  {
    id: 'triple-two-images-one-caption',
    title: '3개 (이미지 2개 1개 캡션)',
    description: '3개 (이미지 2개 1개 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_5" style="margin:0 auto">
<ul class="ul_floatkyh6 flex-img">
<li>
<ul class="txt-box">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2023/06/ssak_20230605_03_.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><br />
<img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/ssak_20230605_03_.jpg" alt=""></a></p>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2023/06/ssak_20230605_04_.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><br />
<img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/ssak_20230605_04_.jpg" alt=""></a></p>
</li>
<div class="txts ta_r">〈애니멀리아〉</div>
</ul>
</li>
<li class="n3 m_m_10 one-img" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2023/06/ssak_20230605_05_.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><br />
<img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/ssak_20230605_05_.jpg" alt=""></a></p>
<div class="txts ta_r">〈공존사전〉어린이 워크숍</div>
</li>
</ul>
</div>`
  },
  {
    id: 'triple-individual-two-lines-caption',
    title: '3개 (개별 캡션 및 캡션 2줄 처리)',
    description: '3개 (개별 캡션 및 캡션 2줄 처리) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_5" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/02/ssak_20220221_01.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><br />
<img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/02/ssak_20220221_01.jpg" alt=""></a></p>
<div class="txts ta_r">『애린왕자』<br />
(앙투안 드 생텍쥐페리, 최현애<br />옮긴이, 이팝, 2021)</div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/02/ssak_20220221_02.png" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><br />
<img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/02/ssak_20220221_02.png" alt=""></a></p>
<div class="txts ta_r">『에린왕자』<br />
(앙투안 드 생텍쥐페리, 심재홍<br />옮긴이, 이팝, 2021)</div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/02/ssak_20220221_03.png" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><br />
<img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/02/ssak_20220221_03.png" alt=""></a></p>
<div class="txts ta_r">『말끝이 당신이다』<br />
(김진해, 한겨레출판, 2021)<br /><span>&nbsp;</span></div>
</li>
</ul>
</div>`
  },
  {
    id: 'triple-discussion-full-caption',
    title: '3개 (좌담 3명 전체 캡션)',
    description: '3개 (좌담 3명 전체 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10 box3" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/11/bee_20221107_02.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/11/bee_20221107_02.jpg" alt=""></a>
</li>
<li class="n3 m_m_10 box3" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/11/bee_20221107_03.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/11/bee_20221107_03.jpg" alt=""></a>
</li>
<li class="n3 m_m_10 box3" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/11/bee_20221107_04.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/11/bee_20221107_04.jpg" alt=""></a>
</li>
</ul>
<div class="txts ta_r">
(왼쪽부터) 이선옥, 임상빈, 김혁진
</div>
</div>`
  },
  {
    id: 'triple-two-top-one-bottom-full-caption',
    title: '3개 (위2개 아래1개 전체 캡션)',
    description: '3개 (위2개 아래1개 전체 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="display: flex; flex-direction: row; margin-left: 0; margin-bottom: 5px; float: none"><a href="/wp-content/uploads/2024/01/report_20240108_01.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2024/01/report_20240108_01.jpg" alt=""></a><br />
<a href="/wp-content/uploads/2024/01/report_20240108_02.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2024/01/report_20240108_02.jpg" alt=""></a>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2024/01/report_20240108_03.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2024/01/report_20240108_03.jpg" alt=""></a>
</li>
</ul>
<div class="txts ta_r">2022년 서울 전문가회의</div>
</div>`
  },
  {
    id: 'quad-discussion-full-caption',
    title: '4개 (좌담 전체 캡션)',
    description: '4개 (좌담 전체 캡션) 레이아웃 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10 box4" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/01/bee_20220103_02.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/01/bee_20220103_02.jpg" alt=""></a>
		</li>
<li class="n3 m_m_10 box4" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/01/bee_20220103_04.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/01/bee_20220103_04.jpg" alt=""></a>
		</li>
<li class="n3 m_m_10 box4" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/01/bee_20220103_03.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/01/bee_20220103_03.jpg" alt=""></a>
		</li>
<li class="n3 m_m_10 box4" style="margin-left: 0; float: none;"><a style="width:100%" href="/wp-content/uploads/2022/01/bee_20220103_05.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2022/01/bee_20220103_05.jpg" alt=""></a>
		</li>
</ul>
<div class="txts ta_r">
(왼쪽부터) 고영직, 조은아, 최보연, 정원철
</div>
</div>`
  },
  {
    id: 'caption-no-br',
    title: '이미지 캡션 br 처리 없앤 캡션',
    description: '이미지 캡션 br 처리 없앤 캡션 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin: 0 auto;">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/06/ssak_20230619_01.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-4566 size-full" src="/wp-content/uploads/2023/06/ssak_20230619_01.jpg" alt=""></a>
<div class="txts ta_r">유용하게 사용할 일이 있을 것이라 믿고 모아둔 못과 나사<br><span>&nbsp;</span><br><span>&nbsp;</span></div>
</li>
<li class="n3 m_m_10" style="margin-left: 0; float: none;"><a style="width: 100%;" title="새창 이미지 열기" href="/wp-content/uploads/2023/06/ssak_20230619_02.jpg" target="_blank" rel="noopener noreferrer"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2023/06/ssak_20230619_02.jpg" alt=""></a>
<div class="txts ta_r txt_wi" style="width: 498px;">도시재생과 재개발로 변해가는 을지로에서 철공소와 공구상가의 사라짐에 대해 질문하고자 만들었던 청계천 도시어부 카드게임 〈피쉬시티 FishCity〉(2017)</div>
</li>
</ul>
</div>`
  },
  {
    id: 'caption-width-based-on-image-size-1',
    title: '이미지 크기에 따른 캡션 넓이',
    description: '이미지 크기에 따른 캡션 넓이 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none; ">
		<a href="http://arte365.kr/wp-content/uploads/2021/09/ssak_20210927_01.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="http://arte365.kr/wp-content/uploads/2021/09/ssak_20210927_01.jpg" alt=""></a></p>
<div class="txts ta_r" style="">『문화와 예술, 마을을 만나다』<br />(공유성북원탁회의, 민들레, 2020)</div>
</li>
</ul>
</div>`
  },
  {
    id: 'vertical-each-image-caption',
    title: '위 아래 각각 이미지 하나 캡션',
    description: '위 아래 각각 이미지 하나 캡션 템플릿입니다.',
    html: `<div class="postboimg ta_c mt_25" style="margin:0 auto">
<ul class="ul_floatkyh6">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2025/09/interview_20250908_01.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2025/09/interview_20250908_01.jpg" alt=""></a>
</li>
</ul>
<ul class="ul_floatkyh6 mt_10">
<li class="n3 m_m_10" style="margin-left: 0; float: none"><a href="/wp-content/uploads/2025/09/interview_20250908_02.jpg" target="_blank" rel="noopener noreferrer" title="새창 이미지 열기"><img class="alignnone wp-image-40366 size-full" src="/wp-content/uploads/2025/09/interview_20250908_02.jpg" alt=""></a>
</li>
</ul>
<div class="txts ta_r">&lt;3학년 2학기&gt; [출처] <a style="font-size: 16px; text-decoration: underline;" title="새창 이미지 열기" target="_blank" rel="noopener noreferrer" href="https://siff.kr/films/3%ED%95%99%EB%85%84-2%ED%95%99%EA%B8%B0/">제51회 서울독립영화제</a></div>
</div>`
  }
];

const ArteImage: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="이미지"
      subcategoryName="이미지"
      templates={imageTemplates}
    />
  );
};

export default ArteImage;
