export interface ComponentItem {
  id: string;
  title: string;
  category: 'buttons' | 'forms' | 'modals' | 'tables' | 'webzine' | 'charts';
  description: string;
  badge?: 'NEW' | 'HOT' | 'POPULAR';
  reactCode: string;
  htmlCode: string;
  route: string;
}

export interface TemplateItem {
  id: string;
  title: string;
  category: 'webzine' | 'application';
  description: string;
  tag: string;
  imageBg: string;
  route: string;
  itemCount: number;
}

export interface MetricItem {
  label: string;
  value: string;
  change: string;
  description: string;
}

export interface UpdateLog {
  date: string;
  version: string;
  title: string;
  description: string;
  tag: 'Feature' | 'Webzine' | 'UI Component' | 'Improvement';
}

// 1. Hero Live Playground Code Snippets
export const heroLiveSnippet = {
  react: `<button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer">
  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
  <span>시작하기 (Get Started)</span>
</button>`,
  html: `<button class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all inline-flex items-center gap-2 cursor-pointer">
  <svg class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
  <span>시작하기 (Get Started)</span>
</button>`
};

// 2. Featured UI Components (6 components per category = 36 total)
export const featuredComponents: ComponentItem[] = [
  // --- Category: Buttons & Badges (6) ---
  {
    id: 'btn-gradient',
    title: '그라데이션 샤인 버튼',
    category: 'buttons',
    description: '빛나는 그라데이션 인터랙티브 호버 애니메이션 버튼',
    badge: 'HOT',
    reactCode: `<button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-md hover:shadow-lg transition-all">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 rounded-[10px] group-hover:bg-opacity-0">
    샤인 버튼
  </span>
</button>`,
    htmlCode: `<button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 text-white">
  <span class="relative px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-opacity-0 transition-all">샤인 버튼</span>
</button>`,
    route: '/ui/buttons-badges#btn-gradient'
  },
  {
    id: 'btn-glow',
    title: '네온 글로우 펄스 버튼',
    category: 'buttons',
    description: '은은한 글로우 효과와 호버 시 퍼지는 네온 아웃라인 버튼',
    badge: 'NEW',
    reactCode: `<button className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
  <span>네온 글로우</span>
</button>`,
    htmlCode: `<button class="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/50 transition-all">네온 글로우</button>`,
    route: '/ui/buttons-badges#btn-glow'
  },
  {
    id: 'btn-icon-group',
    title: '소셜 아웃라인 버튼 그룹',
    category: 'buttons',
    description: '소셜 공유 및 액션을 위한 아이콘 결합형 경량 버튼 모음',
    badge: 'POPULAR',
    reactCode: `<div className="inline-flex rounded-xl shadow-xs" role="group">
  <button className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-l-xl hover:bg-slate-50">Left</button>
  <button className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border-t border-b border-slate-200 hover:bg-slate-50">Mid</button>
  <button className="px-4 py-2 text-xs font-medium text-indigo-600 bg-white border border-slate-200 rounded-r-xl hover:bg-slate-50">Right</button>
</div>`,
    htmlCode: `<div class="inline-flex rounded-xl shadow-xs">
  <button class="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-l-xl">Left</button>
  <button class="px-4 py-2 text-xs font-medium text-slate-700 bg-white border-t border-b border-slate-200">Mid</button>
  <button class="px-4 py-2 text-xs font-medium text-indigo-600 bg-white border border-slate-200 rounded-r-xl">Right</button>
</div>`,
    route: '/ui/buttons-badges#btn-icon-group'
  },
  {
    id: 'badge-status',
    title: '실시간 상태 도트 뱃지',
    category: 'buttons',
    description: '온라인, 작업중, 비활성 상태를 보여주는 에니메이팅 도트 뱃지',
    badge: 'POPULAR',
    reactCode: `<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
  <span>실시간 서버 정상</span>
</span>`,
    htmlCode: `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-600">
  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
  <span>실시간 서버 정상</span>
</span>`,
    route: '/ui/buttons-badges#badge-status'
  },
  {
    id: 'btn-loading',
    title: '로딩 스피너 액션 버튼',
    category: 'buttons',
    description: '클릭 시 스피너 애니메이션으로 전환되는 인터랙티브 버튼',
    badge: 'NEW',
    reactCode: `<button disabled className="px-5 py-2.5 bg-indigo-500/80 text-white font-medium rounded-xl flex items-center gap-2 cursor-not-allowed opacity-90">
  <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg>
  <span>처리 중...</span>
</button>`,
    htmlCode: `<button disabled class="px-5 py-2.5 bg-indigo-500 text-white font-medium rounded-xl inline-flex items-center gap-2">
  <span>처리 중...</span>
</button>`,
    route: '/ui/buttons-badges#btn-loading'
  },
  {
    id: 'badge-gradient',
    title: '글래스모피즘 라벨 뱃지',
    category: 'buttons',
    description: '은은한 네온 배경과 반투명 디자인이 조합된 뱃지',
    badge: 'HOT',
    reactCode: `<span className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-600 dark:text-violet-300 border border-violet-500/30 rounded-xl text-xs font-bold shadow-xs">
  Premium Pro
</span>`,
    htmlCode: `<span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-xl text-xs font-bold">Premium Pro</span>`,
    route: '/ui/buttons-badges#badge-gradient'
  },

  // --- Category: Forms & Inputs (6) ---
  {
    id: 'input-floating',
    title: '플로팅 라벨 인풋',
    category: 'forms',
    description: '입력 시 상단으로 부드럽게 이동하는 모던 인풋',
    badge: 'POPULAR',
    reactCode: `<div className="relative">
  <input type="text" id="floating_input" className="block px-4 pb-2.5 pt-4 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 peer" placeholder=" " />
  <label htmlFor="floating_input" className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-indigo-600">이메일 주소</label>
</div>`,
    htmlCode: `<div class="relative">
  <input type="text" id="floating" class="block px-4 pb-2.5 pt-4 w-full text-sm bg-slate-50 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 peer" placeholder=" " />
  <label for="floating" class="absolute text-sm text-slate-500 duration-300 transform -translate-y-3 scale-75 top-4 left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-indigo-600">이메일 주소</label>
</div>`,
    route: '/components/input#input-floating'
  },
  {
    id: 'input-search-shortcut',
    title: '키보드 단축키 뱃지 인풋',
    category: 'forms',
    description: '우측에 ⌘K 또는 Ctrl+K 뱃지가 포함된 퀵 검색 폼',
    badge: 'HOT',
    reactCode: `<div className="relative flex items-center w-full">
  <input type="text" placeholder="빠른 검색... (⌘K)" className="w-full pl-10 pr-16 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
  <kbd className="absolute right-3 px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded">⌘K</kbd>
</div>`,
    htmlCode: `<div class="relative flex items-center w-full">
  <input type="text" placeholder="빠른 검색..." class="w-full pl-4 pr-16 py-2.5 text-xs bg-slate-100 border rounded-xl" />
  <kbd class="absolute right-3 px-2 py-0.5 text-[10px] bg-white border rounded">⌘K</kbd>
</div>`,
    route: '/components/input#input-search-shortcut'
  },
  {
    id: 'input-toggle-switch',
    title: 'iOS 스타일 토글 스위치',
    category: 'forms',
    description: '부드러운 슬라이딩 효과가 적용된 스위치 컨트롤',
    badge: 'NEW',
    reactCode: `<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" defaultChecked />
  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
  <span className="ml-3 text-xs font-semibold text-slate-700 dark:text-slate-300">알림 설정</span>
</label>`,
    htmlCode: `<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" checked />
  <div class="w-11 h-6 bg-slate-300 rounded-full peer peer-checked:bg-indigo-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
  <span class="ml-3 text-xs font-semibold">알림 설정</span>
</label>`,
    route: '/forms/elements#input-toggle-switch'
  },
  {
    id: 'input-checkbox-card',
    title: '아웃라인 체크박스 카드',
    category: 'forms',
    description: '선택 시 보더 색상이 변경되는 카드형 체크박스 스니펫',
    badge: 'POPULAR',
    reactCode: `<label className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border-2 border-indigo-500 rounded-xl cursor-pointer shadow-xs">
  <div className="flex items-center gap-3">
    <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" />
    <span className="text-xs font-bold text-slate-900 dark:text-white">기본 플랜 ($9/mo)</span>
  </div>
  <span className="text-[11px] font-semibold text-indigo-500">선택됨</span>
</label>`,
    htmlCode: `<label class="flex items-center justify-between p-3 bg-white border-2 border-indigo-500 rounded-xl cursor-pointer">
  <input type="checkbox" checked class="w-4 h-4 text-indigo-600 rounded" />
  <span class="text-xs font-bold">기본 플랜 ($9/mo)</span>
</label>`,
    route: '/forms/elements#input-checkbox-card'
  },
  {
    id: 'input-otp-pin',
    title: '4자리 OTP 핀코드 폼',
    category: 'forms',
    description: '인증 번호 입력용 독립 포커스 박스 폼',
    badge: 'NEW',
    reactCode: `<div className="flex gap-2">
  {[1, 2, 3, 4].map((i) => (
    <input key={i} type="text" maxLength={1} defaultValue={i === 1 ? '7' : ''} className="w-10 h-10 text-center font-bold text-base bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white" />
  ))}
</div>`,
    htmlCode: `<div class="flex gap-2">
  <input type="text" maxlength="1" class="w-10 h-10 text-center font-bold bg-slate-100 border rounded-xl" />
  <input type="text" maxlength="1" class="w-10 h-10 text-center font-bold bg-slate-100 border rounded-xl" />
</div>`,
    route: '/forms/elements#input-otp-pin'
  },
  {
    id: 'input-select-custom',
    title: '모던 드롭다운 셀렉트',
    category: 'forms',
    description: '커스텀 화살표와 둥근 모서리가 적용된 셀렉트 박스',
    badge: 'HOT',
    reactCode: `<select className="w-full px-3.5 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
  <option>카테고리 선택 (전체)</option>
  <option>React Component</option>
  <option>HTML Snippet</option>
</select>`,
    htmlCode: `<select class="w-full px-3.5 py-2 text-xs font-medium bg-slate-100 border border-slate-200 rounded-xl">
  <option>카테고리 선택 (전체)</option>
</select>`,
    route: '/forms/elements#input-select-custom'
  },

  // --- Category: Modals & Alerts (6) ---
  {
    id: 'modal-glass',
    title: '글래스모피즘 알림 모달',
    category: 'modals',
    description: '반투명 블러 백드롭 스타일의 고급스러운 모달 카드',
    badge: 'NEW',
    reactCode: `<div className="p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl text-white max-w-sm">
  <h3 className="text-lg font-bold text-indigo-400">성공적으로 완료되었습니다</h3>
  <p className="mt-2 text-sm text-slate-300">변경사항이 저장되었습니다. 즉시 확인해보세요.</p>
  <button className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">확인</button>
</div>`,
    htmlCode: `<div class="p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white max-w-sm">
  <h3 class="text-lg font-bold text-indigo-400">성공적으로 완료되었습니다</h3>
  <p class="mt-2 text-sm text-slate-300">변경사항이 저장되었습니다.</p>
  <button class="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg">확인</button>
</div>`,
    route: '/ui/alerts-modals#modal-glass'
  },
  {
    id: 'toast-success',
    title: '성공 알림 플로팅 토스트',
    category: 'modals',
    description: '체크 아이콘과 그림자가 포함된 모던 성공 토스트',
    badge: 'HOT',
    reactCode: `<div className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800 border border-emerald-500/30 rounded-2xl shadow-lg text-xs">
  <div className="p-1.5 bg-emerald-500/10 text-emerald-500 rounded-lg font-bold">✓</div>
  <div>
    <h5 className="font-bold text-slate-900 dark:text-white">클립보드 복사 성공</h5>
    <p className="text-[11px] text-slate-500 dark:text-slate-400">코드가 클립보드에 복사되었습니다.</p>
  </div>
</div>`,
    htmlCode: `<div class="flex items-center gap-3 p-3.5 bg-white border border-emerald-500/30 rounded-2xl shadow-lg text-xs">
  <span class="text-emerald-500 font-bold">✓</span>
  <div>
    <h5 class="font-bold">클립보드 복사 성공</h5>
  </div>
</div>`,
    route: '/ui/alerts-modals#toast-success'
  },
  {
    id: 'alert-banner',
    title: '상단 그래디언트 안내 배너',
    category: 'modals',
    description: '공지사항 및 업데이트 알림용 상단 배너 스니펫',
    badge: 'POPULAR',
    reactCode: `<div className="p-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl flex items-center justify-between text-xs font-semibold shadow-md">
  <span>🚀 Wnc WebGuide 2.4버전 신규 컴포넌트 14종이 출시되었습니다!</span>
  <button className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded-lg">확인</button>
</div>`,
    htmlCode: `<div class="p-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl flex items-center justify-between text-xs font-semibold">
  <span>🚀 신규 컴포넌트 14종 출시</span>
</div>`,
    route: '/ui/alerts-modals#alert-banner'
  },
  {
    id: 'modal-confirm',
    title: '확인 & 경고 액션 모달',
    category: 'modals',
    description: '중요 데이터 삭제 전 의사를 확인하는 경고 모달',
    badge: 'NEW',
    reactCode: `<div className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl max-w-xs text-xs space-y-3">
  <h4 className="font-bold text-rose-500 text-sm">정말 삭제하시겠습니까?</h4>
  <p className="text-slate-500 dark:text-slate-400">이 작업은 복구할 수 없습니다.</p>
  <div className="flex gap-2 pt-1">
    <button className="flex-1 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-bold">취소</button>
    <button className="flex-1 py-1.5 bg-rose-600 text-white rounded-lg font-bold">삭제</button>
  </div>
</div>`,
    htmlCode: `<div class="p-5 bg-white border rounded-2xl max-w-xs text-xs">
  <h4 class="font-bold text-rose-500">정말 삭제하시겠습니까?</h4>
</div>`,
    route: '/ui/alerts-modals#modal-confirm'
  },
  {
    id: 'alert-toast-interactive',
    title: '인터랙티브 액션 포함 알림 토스트',
    category: 'modals',
    description: '실행 취소(Undo) 버튼이 탑재된 고급 토스트',
    badge: 'HOT',
    reactCode: `<div className="flex items-center justify-between p-3.5 bg-slate-900 text-white rounded-xl shadow-xl text-xs">
  <span>항목이 이동되었습니다.</span>
  <button className="ml-4 font-bold text-indigo-400 hover:underline">실행 취소</button>
</div>`,
    htmlCode: `<div class="flex items-center justify-between p-3.5 bg-slate-900 text-white rounded-xl text-xs">
  <span>항목이 이동되었습니다.</span>
  <button class="font-bold text-indigo-400">실행 취소</button>
</div>`,
    route: '/ui/alerts-modals#alert-toast-interactive'
  },
  {
    id: 'modal-slide-over',
    title: '사이드 슬라이드 알림 패널',
    category: 'modals',
    description: '우측에서 부드럽게 등장하는 패널 모달 스니펫',
    badge: 'POPULAR',
    reactCode: `<div className="p-4 bg-white dark:bg-slate-800 border-l-4 border-indigo-500 shadow-md text-xs space-y-1">
  <span className="font-bold text-indigo-600 dark:text-indigo-400">시스템 업데이트 안내</span>
  <p className="text-slate-600 dark:text-slate-300">오늘 밤 12시부터 서버 점검이 시작됩니다.</p>
</div>`,
    htmlCode: `<div class="p-4 bg-white border-l-4 border-indigo-500 text-xs">
  <span class="font-bold text-indigo-600">시스템 업데이트 안내</span>
</div>`,
    route: '/ui/alerts-modals#modal-slide-over'
  },

  // --- Category: Tables (6) ---
  {
    id: 'table-hover',
    title: '인터랙티브 데이터 데이터 테이블',
    category: 'tables',
    description: '상태 뱃지, 프로필 아바타, 정렬 호버 효과가 포함된 테이블 스니펫',
    badge: 'POPULAR',
    reactCode: `<table className="w-full text-sm text-left text-slate-600 dark:text-slate-300">
  <thead className="text-xs uppercase bg-slate-100 dark:bg-slate-800 text-slate-500">
    <tr><th className="px-4 py-3">사용자</th><th className="px-4 py-3">상태</th></tr>
  </thead>
  <tbody>
    <tr className="border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">김철수</td>
      <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full">활성</span></td>
    </tr>
  </tbody>
</table>`,
    htmlCode: `<table class="w-full text-sm text-left text-slate-600">
  <thead class="text-xs uppercase bg-slate-100">
    <tr><th class="px-4 py-3">사용자</th><th class="px-4 py-3">상태</th></tr>
  </thead>
  <tbody>
    <tr class="border-b hover:bg-slate-50">
      <td class="px-4 py-3 font-medium">김철수</td>
      <td class="px-4 py-3"><span class="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs rounded-full">활성</span></td>
    </tr>
  </tbody>
</table>`,
    route: '/tables/basic#table-hover'
  },
  {
    id: 'table-striped',
    title: '교차 스트라이프 데이터 테이블',
    category: 'tables',
    description: '행마다 교차 가독성 색상이 반영된 테이블 레이아웃',
    badge: 'NEW',
    reactCode: `<table className="w-full text-xs text-left text-slate-700 dark:text-slate-300">
  <thead className="bg-indigo-600 text-white font-bold">
    <tr><th className="p-2.5">프로젝트</th><th className="p-2.5">진행률</th></tr>
  </thead>
  <tbody>
    <tr className="bg-slate-50 dark:bg-slate-800/60"><td className="p-2.5 font-semibold">WebGuide v2.4</td><td className="p-2.5 text-indigo-600 font-bold">95%</td></tr>
    <tr className="bg-white dark:bg-slate-800/20"><td className="p-2.5 font-semibold">React Dashboard</td><td className="p-2.5 text-indigo-600 font-bold">80%</td></tr>
  </tbody>
</table>`,
    htmlCode: `<table class="w-full text-xs text-left">
  <thead class="bg-indigo-600 text-white">
    <tr><th class="p-2">프로젝트</th><th class="p-2">진행률</th></tr>
  </thead>
</table>`,
    route: '/tables/basic#table-striped'
  },
  {
    id: 'table-compact',
    title: '지표 중심 콤팩트 통계 테이블',
    category: 'tables',
    description: '많은 양의 수치 및 통계를 정돈하여 보여주는 표 스니펫',
    badge: 'HOT',
    reactCode: `<div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
  <table className="w-full text-[11px] text-left text-slate-600 dark:text-slate-300">
    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">
      <tr><th className="p-2">날짜</th><th className="p-2">방문자</th><th className="p-2">전환율</th></tr>
    </thead>
    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
      <tr><td className="p-2 font-mono">2026-08-06</td><td className="p-2 font-bold">12,450</td><td className="p-2 text-emerald-500 font-bold">+4.2%</td></tr>
    </tbody>
  </table>
</div>`,
    htmlCode: `<table class="w-full text-xs text-left">
  <thead class="bg-slate-100">
    <tr><th class="p-2">날짜</th><th class="p-2">방문자</th></tr>
  </thead>
</table>`,
    route: '/tables/basic#table-compact'
  },
  {
    id: 'table-action',
    title: '드롭다운 액션 포함 테이블',
    category: 'tables',
    description: '오른쪽에 수정/삭제 더보기 점 3개 메뉴가 탑재된 테이블',
    badge: 'POPULAR',
    reactCode: `<tr className="border-b dark:border-slate-800 flex items-center justify-between p-2">
  <span className="text-xs font-bold text-slate-900 dark:text-white">결제 내역 #8492</span>
  <button className="px-2 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-xs rounded-lg font-bold">액션 ⋯</button>
</tr>`,
    htmlCode: `<tr class="border-b flex items-center justify-between p-2">
  <span class="text-xs font-bold">결제 내역 #8492</span>
</tr>`,
    route: '/tables/basic#table-action'
  },
  {
    id: 'table-timeline',
    title: '최근 활동 로그 타임라인 테이블',
    category: 'tables',
    description: '시간대별 작업 이력을 세로선으로 연결한 테이블',
    badge: 'NEW',
    reactCode: `<div className="space-y-2 text-xs">
  <div className="flex items-center gap-3">
    <span className="w-2 h-2 rounded-full bg-indigo-500" />
    <span className="font-bold text-slate-900 dark:text-white">새 커밋 푸시</span>
    <span className="text-[10px] text-slate-400 font-mono">10분 전</span>
  </div>
</div>`,
    htmlCode: `<div class="flex items-center gap-3 text-xs">
  <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
  <span>새 커밋 푸시</span>
</div>`,
    route: '/tables/basic#table-timeline'
  },
  {
    id: 'table-expandable',
    title: '상세 펼치기 행 지원 테이블',
    category: 'tables',
    description: '클릭 시 하단에 상세 정보가 슬라이드로 펼쳐지는 테이블',
    badge: 'HOT',
    reactCode: `<div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs">
  <div className="flex justify-between font-bold"><span>주문번호 #2026</span><span>▼ 상세</span></div>
</div>`,
    htmlCode: `<div class="p-3 bg-white border rounded-xl text-xs">
  <div class="flex justify-between font-bold"><span>주문번호 #2026</span></div>
</div>`,
    route: '/tables/basic#table-expandable'
  },

  // --- Category: Webzine Snippets (6) ---
  {
    id: 'webzine-card',
    title: '웹진 아르떼 카드 스니펫',
    category: 'webzine',
    description: '이미지 호버 줌과 에디터 프로필이 결합된 아티클 카드 스니펫',
    badge: 'HOT',
    reactCode: `<div className="group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
  <div className="relative overflow-hidden aspect-video">
    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Cover" />
  </div>
  <div className="p-5">
    <span className="text-xs font-semibold text-indigo-500 uppercase">Arte Webzine</span>
    <h4 className="mt-1 text-base font-bold text-slate-900 dark:text-white">디지털 아트의 새로운 패러다임</h4>
  </div>
</div>`,
    htmlCode: `<div class="group overflow-hidden rounded-2xl bg-white border shadow-md">
  <div class="aspect-video overflow-hidden">
    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
  </div>
  <div class="p-5">
    <span class="text-xs font-semibold text-indigo-500 uppercase">Arte Webzine</span>
    <h4 class="mt-1 text-base font-bold text-slate-900">디지털 아트의 새로운 패러다임</h4>
  </div>
</div>`,
    route: '/webzine/arte/image#webzine-card'
  },
  {
    id: 'webzine-quote',
    title: '이음 감성 캘리그라피 인용구 박스',
    category: 'webzine',
    description: '좌측 인용 기호와 그라데이션 배경이 들어간 웹진 강조 인용구',
    badge: 'NEW',
    reactCode: `<blockquote className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl italic text-xs text-slate-700 dark:text-slate-300 font-serif">
  "기술과 디자인이 만나 일상의 가치를 바꿉니다."
</blockquote>`,
    htmlCode: `<blockquote class="p-4 bg-amber-50 border-l-4 border-amber-500 italic text-xs">
  "기술과 디자인이 만나 일상의 가치를 바꿉니다."
</blockquote>`,
    route: '/webzine/eeum/text#webzine-quote'
  },
  {
    id: 'webzine-profile',
    title: '에디터 필진 프로필 카드',
    category: 'webzine',
    description: '아바타 이미지, 에디터 이름, 소개글 및 소셜 링크 스니펫',
    badge: 'POPULAR',
    reactCode: `<div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xs">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ArteEditor" className="w-10 h-10 rounded-full border border-indigo-500" alt="Editor" />
  <div>
    <h5 className="text-xs font-bold text-slate-900 dark:text-white">이아름 에디터</h5>
    <p className="text-[10px] text-slate-500">디지털 문화 기획자</p>
  </div>
</div>`,
    htmlCode: `<div class="flex items-center gap-3 p-3 bg-white border rounded-2xl">
  <h5 class="text-xs font-bold">이아름 에디터</h5>
</div>`,
    route: '/webzine/arte/profile#webzine-profile'
  },
  {
    id: 'webzine-video',
    title: '인터랙티브 비디오 플레이어 스니펫',
    category: 'webzine',
    description: '중앙 재생 버튼과 커버 오버레이가 포함된 웹진 영상 카드',
    badge: 'HOT',
    reactCode: `<div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 flex items-center justify-center">
  <button className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform">▶</button>
</div>`,
    htmlCode: `<div class="relative rounded-2xl aspect-video bg-slate-900 flex items-center justify-center">
  <button class="w-12 h-12 rounded-full bg-indigo-600 text-white">▶</button>
</div>`,
    route: '/webzine/arte/video#webzine-video'
  },
  {
    id: 'webzine-image-grid',
    title: '2x2 비주얼 미디어 갤러리',
    category: 'webzine',
    description: '4장의 감성 이미지를 모자이크 형태로 배치한 웹진 그리드',
    badge: 'NEW',
    reactCode: `<div className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden aspect-video">
  <div className="bg-slate-300 dark:bg-slate-700" />
  <div className="bg-slate-400 dark:bg-slate-600" />
</div>`,
    htmlCode: `<div class="grid grid-cols-2 gap-1 rounded-xl aspect-video">
  <div class="bg-slate-300"></div>
</div>`,
    route: '/webzine/arte/image#webzine-image-grid'
  },
  {
    id: 'webzine-notice',
    title: '아르떼 엠블럼 공지사항 카드',
    category: 'webzine',
    description: '웹진 이슈 구독 안내 및 최신 공지 아코디언 카드',
    badge: 'POPULAR',
    reactCode: `<div className="p-4 bg-indigo-600 text-white rounded-2xl flex items-center justify-between text-xs">
  <span className="font-bold">📢 아르떼 8월호 정기 구독 서비스 오픈</span>
  <button className="px-3 py-1 bg-white text-indigo-600 font-bold rounded-lg">구독하기</button>
</div>`,
    htmlCode: `<div class="p-4 bg-indigo-600 text-white rounded-2xl flex items-center justify-between text-xs">
  <span class="font-bold">📢 아르떼 8월호 구독</span>
</div>`,
    route: '/webzine/arte/notice#webzine-notice'
  },

  // --- Category: Charts (6) ---
  {
    id: 'chart-sparkline',
    title: '스파크라인 라인 차트',
    category: 'charts',
    description: '트렌드를 한눈에 보여주는 경량 비주얼 라인 차트 카드',
    badge: 'NEW',
    reactCode: `<div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white flex items-center justify-between">
  <div>
    <p className="text-xs text-slate-400">주간 트래픽</p>
    <p className="text-xl font-bold text-emerald-400">+28.4%</p>
  </div>
  <div className="w-24 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-xs text-emerald-400 font-mono">
    ▲ TRENDING
  </div>
</div>`,
    htmlCode: `<div class="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white flex items-center justify-between">
  <div>
    <p class="text-xs text-slate-400">주간 트래픽</p>
    <p class="text-xl font-bold text-emerald-400">+28.4%</p>
  </div>
  <div class="w-24 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-xs text-emerald-400">
    ▲ TRENDING
  </div>
</div>`,
    route: '/charts/line#chart-sparkline'
  },
  {
    id: 'chart-bar-progress',
    title: '카테고리 프로그레스 바',
    category: 'charts',
    description: '달성 비율을 컬러 라인 프로그레스로 직관 표출하는 컴포넌트',
    badge: 'HOT',
    reactCode: `<div className="space-y-2 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
  <div className="flex justify-between font-bold"><span>목표 달성율</span><span className="text-indigo-600">82%</span></div>
  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '82%' }} />
  </div>
</div>`,
    htmlCode: `<div class="space-y-2 p-3 bg-white rounded-xl border text-xs">
  <div class="flex justify-between font-bold"><span>목표 달성율</span><span>82%</span></div>
  <div class="w-full h-2 bg-slate-200 rounded-full"><div class="h-full bg-indigo-600 rounded-full" style="width:82%"></div></div>
</div>`,
    route: '/charts/line#chart-bar-progress'
  },
  {
    id: 'chart-kpi-donut',
    title: '미니 도넛 비율 표시기',
    category: 'charts',
    description: '원형 SVG 라인으로 퍼센티지 데이터를 심플하게 표현하는 링 차트',
    badge: 'POPULAR',
    reactCode: `<div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
  <div className="w-10 h-10 rounded-full border-4 border-indigo-500 border-t-slate-300 flex items-center justify-center font-bold">75%</div>
  <div><h5 className="font-bold text-slate-900 dark:text-white">용량 점유율</h5><p className="text-[10px] text-slate-400">750GB / 1TB</p></div>
</div>`,
    htmlCode: `<div class="flex items-center gap-3 p-3 bg-white border rounded-xl text-xs">
  <div class="font-bold">75%</div>
</div>`,
    route: '/charts/line#chart-kpi-donut'
  },
  {
    id: 'chart-stat-card',
    title: '트렌드 뱃지 KPI 메트릭 카드',
    category: 'charts',
    description: '상승/하락 변동폭 아이콘이 결합된 대시보드 통계 카드',
    badge: 'NEW',
    reactCode: `<div className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xs text-xs space-y-1">
  <span className="text-slate-400">월간 구독 수익</span>
  <div className="flex items-baseline justify-between">
    <span className="text-xl font-bold text-slate-900 dark:text-white">₩ 8,450,000</span>
    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 font-bold rounded">+12.8%</span>
  </div>
</div>`,
    htmlCode: `<div class="p-4 bg-white border rounded-2xl text-xs">
  <span class="text-xl font-bold">₩ 8,450,000</span>
</div>`,
    route: '/charts/line#chart-stat-card'
  },
  {
    id: 'chart-mini-line',
    title: '방문자 미니 리플 라인 차트',
    category: 'charts',
    description: '주간 활성 유저 트렌드를 선형 라인과 영역 색상으로 나타낸 차트',
    badge: 'HOT',
    reactCode: `<div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
  <div><p className="text-[10px] text-slate-400">오늘의 방문자</p><p className="font-bold text-sm text-indigo-400">3,892명</p></div>
  <span className="text-emerald-400 font-mono font-bold">▲ LIVE</span>
</div>`,
    htmlCode: `<div class="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
  <span>3,892명</span>
</div>`,
    route: '/charts/line#chart-mini-line'
  },
  {
    id: 'chart-step-indicator',
    title: '4단계 진행 스텝 인디케이터',
    category: 'charts',
    description: '단계별 완료 상태를 연결선과 체크로 표현하는 프로세스 바',
    badge: 'POPULAR',
    reactCode: `<div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold">
  <span className="text-indigo-600">Step 1 ✓</span>
  <span className="text-indigo-600">Step 2 ✓</span>
  <span className="text-slate-400">Step 3</span>
</div>`,
    htmlCode: `<div class="flex justify-between p-3 bg-white border text-xs font-bold">
  <span class="text-indigo-600">Step 1 ✓</span>
</div>`,
    route: '/charts/line#chart-step-indicator'
  }
];

// 3. Webzine & Page Templates Showcase
export const templatesShowcase: TemplateItem[] = [
  {
    id: 'tmpl-eeum',
    title: '이음(Eeum) 웹진 메인 & 섹션',
    category: 'webzine',
    description: '텍스트, 박스, 이미지, 영상, 프로필, 테이블 컴포넌트 조합형 모던 웹진 템플릿',
    tag: 'Webzine Layout',
    imageBg: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    route: '/webzine/eeum',
    itemCount: 7
  },
  {
    id: 'tmpl-arte',
    title: '아르떼(Arte) 아티클 & 갤러리',
    category: 'webzine',
    description: '예술, 디자인, 감성 아티클 블록과 미디어 중심의 비주얼 그리드 레이아웃 템플릿',
    tag: 'Editorial & Gallery',
    imageBg: 'from-violet-500/20 via-purple-500/20 to-indigo-500/20',
    route: '/webzine/arte',
    itemCount: 8
  },
  {
    id: 'tmpl-dashboard',
    title: '어드민 서비스 대시보드',
    category: 'application',
    description: 'KPI 카드, 차트, 데이터 테이블, 타겟 프로그레스가 통합된 모던 어드민 UI',
    tag: 'Admin App',
    imageBg: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    route: '/pages/dashboard',
    itemCount: 5
  },
  {
    id: 'tmpl-kanban',
    title: '인터랙티브 칸반 보드',
    category: 'application',
    description: '드래그 앤 드롭 지원 상태별 태스크 및 프로젝트 관리 보드 레이아웃',
    tag: 'Task Management',
    imageBg: 'from-emerald-500/20 via-green-500/20 to-lime-500/20',
    route: '/tasks/kanban',
    itemCount: 4
  }
];

// 4. Library Overview Metric KPIs
export const libraryMetrics: MetricItem[] = [
  {
    label: 'UI Components',
    value: '120+',
    change: '+14 이번 달',
    description: '버튼, 폼, 모달, 테이블, 차트, 카드 스니펫'
  },
  {
    label: 'Webzine & Templates',
    value: '15+',
    change: '이음 & 아르떼 포함',
    description: '즉시 활용 가능한 페이지 전체 스니펫'
  },
  {
    label: 'Code Copy Speed',
    value: '1-Click',
    change: 'React & HTML',
    description: '종속성 없이 내 코드베이스에 붙여넣기'
  },
  {
    label: 'Theme & Custom',
    value: '100%',
    change: 'Tailwind v4 & CSS',
    description: '원하는 디자인 시스템으로 쉽게 변형 가능'
  }
];

// 5. Changelog / Recent Updates
export const recentUpdates: UpdateLog[] = [
  {
    date: '2026-08-06',
    version: 'v2.4.0',
    title: '웹진 아르떼(Arte) 신규 공지사항 & 이미지 그리드 추가',
    description: '아르떼 웹진 전용 ArteNotice 및 ArteNew 최신 레이아웃 스니펫이 업데이트되었습니다.',
    tag: 'Webzine'
  },
  {
    date: '2026-08-01',
    version: 'v2.3.0',
    title: 'Tailwind CSS v4 지원 및 반응형 UI 프리뷰 개선',
    description: '최신 Tailwind v4 패키지 호환성 및 모바일 프리뷰 토글을 지원합니다.',
    tag: 'UI Component'
  },
  {
    date: '2026-07-25',
    version: 'v2.2.0',
    title: '이음(Eeum) 비디오 & 프로필 레이아웃 릴리즈',
    description: '유튜브/비디오 엠베드 카드 및 인물 프로필 스니펫이 라이브러리에 추가되었습니다.',
    tag: 'Feature'
  }
];
