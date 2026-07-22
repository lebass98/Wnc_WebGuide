import React from 'react';
import WebzineTemplatePageLayout, { type TemplateItem } from '../../../components/webzine/WebzineTemplatePageLayout';

// 이음 표 템플릿 항목들
const tableTemplates: TemplateItem[] = [
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
    id: 'ieum-table-img-top-table-bottom',
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
    id: 'ieum-table-top-caption',
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
];

const IeumTable: React.FC = () => {
  return (
    <WebzineTemplatePageLayout
      title="표"
      categoryName="웹진"
      brandName="이음"
      subcategoryName="표"
      editorType="ieum"
      templates={tableTemplates}
    />
  );
};

export default IeumTable;
