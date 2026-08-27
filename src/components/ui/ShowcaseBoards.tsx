import React, { useState } from 'react';
import { 
  ChevronRight, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Pin, 
  Paperclip, 
  Eye, 
  Search, 
  PenLine, 
  MessageCircle, 
  ThumbsUp, 
  CheckCircle
} from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/BoardsSnippets.json';

const ShowcaseBoards: React.FC = () => {
  // Notice Category State
  const [activeNoticeCategory, setActiveNoticeCategory] = useState('전체');
  const noticeCategories = ['전체', '인사', '복지', '시스템', '공통'];

  const reports = [
    {
      client: '한국메세나협회',
      title: '2026 문화기업업무추진비 지원사업 시스템 구축',
      status: '진행중',
      progress: '78%',
      dept: '퍼블리싱팀',
      author: '김민우 파트너',
      prevWeek: '관리자 권한별 통계 대시보드 및 엑셀 다운로드 UI/API 연동 완료',
      thisWeek: '사용자 / 관리자 반응형 페이지 전체 퍼블리싱 및 크로스 브라우징 QA',
    },
    {
      client: '한국건강가정진흥원',
      title: '사후역량점검 및 가족상담 지원 포털 고도화',
      status: '검수중',
      progress: '92%',
      dept: '개발팀',
      author: '이지은 책임',
      prevWeek: '사후역량점검 테이블 스키마 최적화 및 인덱스 튜닝 완료',
      thisWeek: '분기별 보고서 자동 생성 배치 로직 추가 및 보안 취약점 점검',
    },
  ];

  const notices = [
    {
      id: 1,
      pinned: true,
      category: '인사',
      title: '2026년 하반기 전사 조직개편 및 직무 순환 신청 안내',
      summary: '조직 효율성 강화와 부서간 협업 극대화를 위한 2026년 하반기 조직개편안 및 사내 희망 직무 이동 신청 절차를 공지합니다.',
      author: '경영지원본부',
      date: '2026.08.26',
      views: 1240,
      hasFile: true,
    },
    {
      id: 2,
      pinned: false,
      category: '시스템',
      title: '클라우드 인프라 정기 보안 점검 및 서버 무중단 패치 작업',
      summary: '안정적인 서비스 운영을 위한 DB 튜닝 및 SSL 인증서 갱신 작업이 진행됩니다.',
      author: '인프라보안팀',
      date: '2026.08.25',
      views: 890,
      hasFile: false,
    },
    {
      id: 3,
      pinned: false,
      category: '복지',
      title: '하계 휴가 기간 복지포인트 조기 지급 및 특별 제휴 리조트 안내',
      summary: '임직원 여러분의 편안한 휴식을 지원하기 위해 복지포인트 특별 충전이 완료되었습니다.',
      author: '피플앤컬처팀',
      date: '2026.08.20',
      views: 1560,
      hasFile: true,
    },
  ];

  const filteredNotices =
    activeNoticeCategory === '전체'
      ? notices
      : notices.filter(n => n.category === activeNoticeCategory);

  const posts = [
    {
      id: '공지',
      category: '공지',
      title: '개인정보 처리방침 개정 및 사내 보안 지침 준수 안내',
      comments: 12,
      isNotice: true,
      author: '정보보안팀',
      date: '2026.08.27',
      views: 2410,
    },
    {
      id: '24',
      category: '기획',
      title: '2026 UI/UX 컴포넌트 라이브러리 가이드북 배포의 건',
      comments: 5,
      isNotice: false,
      author: '김민우',
      date: '2026.08.26',
      views: 450,
    },
    {
      id: '23',
      category: '개발',
      title: 'Vite 7 및 React 19 번들러 최적화 벤치마크 공유',
      comments: 8,
      isNotice: false,
      author: '이재광',
      date: '2026.08.25',
      views: 680,
    },
    {
      id: '22',
      category: '디자인',
      title: '디자인 시스템 컬러 팔레트 다크모드 명도 대비 가이드',
      comments: 3,
      isNotice: false,
      author: '최서연',
      date: '2026.08.24',
      views: 320,
    },
  ];

  const questions = [
    {
      id: 1,
      isResolved: true,
      title: 'Tailwind CSS v4 마이그레이션 시 @theme 커스텀 컬러 선언 팁이 궁금합니다',
      preview: '기존 tailwind.config.js에서 @theme CSS 블록으로 이전하는 중 다크모드 색상 변수 바인딩 문제가 발생했습니다.',
      author: '정다혜',
      tags: ['Tailwind', 'React', '스타일링'],
      likes: 18,
      answers: 4,
      time: '3시간 전',
    },
    {
      id: 2,
      isResolved: false,
      title: '다크모드 토글 시 iframe 내부 실시간 테마 클래스 동기화 방안',
      preview: '부모 창의 .dark 클래스 변화를 감지하여 iframe 내부 body에 자동으로 동기화시키는 MutationObserver 패턴을 검토 중입니다.',
      author: '박준형',
      tags: ['Iframe', 'DOM', '다크모드'],
      likes: 9,
      answers: 2,
      time: '6시간 전',
    },
  ];

  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            게시판
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">게시판</span>
          </div>
        </div>
      </div>

      {/* 2-Column Grid container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Board 1: Work Report Board */}
        <ShowcaseWrapper
          title="주간 업무보고 현황 게시판"
          description="팀별·프로젝트별 전주 실적과 금주 계획을 2열 분할로 직관적으로 전달하는 업무보고 컴포넌트입니다."
          snippet={codeSnippets.workReportBoard}
        >
          <div className="space-y-4 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <FileText className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-white">주간 업무보고 현황</h3>
                  <p className="text-xs text-slate-400">팀별 프로젝트별 실적 및 계획을 실시간 공유합니다.</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-bold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full">
                금주 2건 보고됨
              </span>
            </div>

            <div className="space-y-3">
              {reports.map((report, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A222C] border border-slate-100 dark:border-slate-800 shadow-xs hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {report.client}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[240px] sm:max-w-md">
                        {report.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-400">{report.dept} · {report.author}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-500/20">
                        {report.status} ({report.progress})
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <span className="font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                        전주 실적
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{report.prevWeek}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border-l-2 border-l-indigo-500 border border-indigo-100/50 dark:border-indigo-900/30">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        금주 계획
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{report.thisWeek}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseWrapper>

        {/* Board 2: Notice Feed Board */}
        <ShowcaseWrapper
          title="공지사항 피드 게시판"
          description="카테고리 탭 필터링 및 중요 공지 핀(PIN) 고정 기능이 포함된 카드 피드형 공지 게시판입니다."
          snippet={codeSnippets.noticeFeedBoard}
        >
          <div className="space-y-4 font-sans">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {noticeCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveNoticeCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeNoticeCategory === cat
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredNotices.map(item => (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border group ${
                    item.pinned
                      ? 'bg-amber-500/5 border-amber-300/60 dark:border-amber-500/30 hover:border-amber-400'
                      : 'bg-white dark:bg-[#1A222C] border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-slate-700 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {item.pinned && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-500 text-white">
                            <Pin className="w-3 h-3" />
                            중요
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-slate-400">{item.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 transition-all shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-400">
                    <span className="font-medium text-slate-600 dark:text-slate-300">{item.author}</span>
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {item.views}</span>
                    {item.hasFile && (
                      <span className="flex items-center gap-1 text-indigo-500 font-semibold">
                        <Paperclip className="w-3 h-3" /> 첨부파일
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseWrapper>

        {/* Board 3: Standard Table Board */}
        <ShowcaseWrapper
          title="테이블형 표준 게시판"
          description="검색 필터, 공지 강조행, 댓글 수 뱃지, 첨부파일 표시가 완비된 표준 데이터 테이블 게시판입니다."
          snippet={codeSnippets.standardTableBoard}
        >
          <div className="space-y-4 font-sans">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="게시글 제목, 작성자 검색..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
              <button className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer">
                <PenLine className="w-3.5 h-3.5" />
                <span>글쓰기</span>
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-3.5 font-bold text-center w-14">번호</th>
                    <th className="py-3 px-3 font-bold w-20">구분</th>
                    <th className="py-3 px-4 font-bold">제목</th>
                    <th className="py-3 px-3 font-bold w-24">작성자</th>
                    <th className="py-3 px-3 font-bold w-24 text-center">등록일</th>
                    <th className="py-3 px-3.5 font-bold w-16 text-center">조회</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-[#1A222C]">
                  {posts.map(post => (
                    <tr
                      key={post.id}
                      className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${
                        post.isNotice ? 'bg-amber-500/[0.03] dark:bg-amber-500/[0.05]' : ''
                      }`}
                    >
                      <td className="py-3 px-3.5 text-center font-bold">
                        {post.isNotice ? (
                          <span className="px-2 py-0.5 rounded bg-amber-500 text-white text-[10px]">공지</span>
                        ) : (
                          <span className="text-slate-400">{post.id}</span>
                        )}
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {post.title}
                          </span>
                          {post.comments > 0 && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                              +{post.comments}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-3 font-medium text-slate-600 dark:text-slate-300">{post.author}</td>
                      <td className="py-3 px-3 text-center text-slate-400">{post.date}</td>
                      <td className="py-3 px-3.5 text-center text-slate-400">{post.views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ShowcaseWrapper>

        {/* Board 4: QA Community Board */}
        <ShowcaseWrapper
          title="Q&A 커뮤니티 토론 게시판"
          description="해결 여부 뱃지, 해시태그 분류, 추천 및 댓글 인터랙션 카운터를 갖춘 사내 지식 공유 게시판입니다."
          snippet={codeSnippets.qaCommunityBoard}
        >
          <div className="space-y-3 font-sans">
            {questions.map(q => (
              <div
                key={q.id}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A222C] border border-slate-100 dark:border-slate-800 shadow-xs hover:border-indigo-200 dark:hover:border-slate-700 transition-all cursor-pointer space-y-3 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {q.isResolved ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200/50">
                          <CheckCircle className="w-3 h-3" /> 해결됨
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                          답변 대기
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400">{q.author} · {q.time}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {q.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {q.preview}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                  <div className="flex gap-1.5 flex-wrap">
                    {q.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1 hover:text-indigo-600 transition-colors"><ThumbsUp className="w-3.5 h-3.5" /> {q.likes}</span>
                    <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold"><MessageCircle className="w-3.5 h-3.5" /> {q.answers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBoards;
