import ShowcaseWrapper from './ShowcaseWrapper';
import React, { useState } from 'react';
import { 
  Mail, 
  User, 
  Lock, 
  Send, 
  ChevronDown, 
  Check, 
  ChevronRight } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';
import codeSnippets from './FormLayoutSnippets.json';



/* --- 1. Basic Form Preview Component --- */
const BasicFormPreview: React.FC = () => {
  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <input 
            type="text" 
            placeholder="이름" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <input 
          type="password" 
          placeholder="비밀번호" 
          className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
        <input 
          type="password" 
          placeholder="비밀번호 확인" 
          className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
        <button 
          type="button" 
          className="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center text-xs sm:text-sm"
        >
          제출
        </button>
      </div>
    </div>
  );
};

/* --- 2. Message Form Preview Component --- */
const MessageFormPreview: React.FC = () => {
  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
            <input 
              type="text" 
              placeholder="이름 입력" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
            />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
            <input 
              type="text" 
              placeholder="성 입력" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
            />
          </div>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이메일</label>
          <input 
            type="email" 
            placeholder="이메일 주소 입력" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">주제 선택</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
              <option>옵션 1</option>
              <option>옵션 2</option>
              <option>옵션 3</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">메시지</label>
          <textarea 
            rows={4} 
            placeholder="메시지 입력" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm"
          />
        </div>
        <button 
          type="button" 
          className="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 text-xs sm:text-sm"
        >
          메시지 전송 <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

/* --- 3. Icon Form Preview Component --- */
const IconFormPreview: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6 text-left">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <User className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="사용자 이름" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호 확인" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <input 
              type="checkbox" 
              className="hidden" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${rememberMe ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
              {rememberMe && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">로그인 유지</span>
          </label>
          <button 
            type="button" 
            className="w-full sm:w-auto py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
          >
            계정 생성
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- 4. Personal Info Form Preview Component --- */
const PersonalInfoFormPreview: React.FC = () => {
  const [membership, setMembership] = useState('free');

  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-6 sm:space-y-8 text-left">
        
        {/* Personal Info section */}
        <div className="space-y-4 sm:space-y-6">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">개인 정보</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
              <input type="text" placeholder="이름 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
              <input type="text" placeholder="성 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성별</label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                <option>남성</option>
                <option>여성</option>
                <option>기타</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 sm:space-y-2 relative z-50">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">생년월일</label>
            <CustomDatePicker placeholder="날짜 선택" />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">카테고리</label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                <option>카테고리 1</option>
                <option>카테고리 2</option>
                <option>카테고리 3</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Address section */}
        <div className="space-y-4 sm:space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">주소</h4>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">도로명</label>
            <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/구/군</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/도</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">우편번호</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-555 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">국가</label>
              <div className="relative">
                <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-555 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                  <option>--국가 선택--</option>
                  <option>미국</option>
                  <option>영국</option>
                  <option>대한민국</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">멤버십:</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="membership" value="free" checked={membership === 'free'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'free' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                   {membership === 'free' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-xs sm:text-sm font-bold ${membership === 'free' ? 'text-slate-800 dark:text-white' : 'text-slate-500'}`}>무료</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="membership" value="paid" checked={membership === 'paid'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'paid' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                  {membership === 'paid' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-xs sm:text-sm font-bold ${membership === 'paid' ? 'text-slate-800 dark:text-white' : 'text-slate-500'}`}>유료</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button type="button" className="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm">
              변경사항 저장
            </button>
            <button type="button" className="py-2.5 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold rounded-lg transition-colors text-xs sm:text-sm">
              취소
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const FormLayout: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            폼 레이아웃
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>폼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">폼 레이아웃</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pb-20">
        {/* Left Column */}
        <div className="space-y-8">
          <ShowcaseWrapper
            title="기본 폼"
            description="다양한 크기의 뷰포트에 유기적으로 대응하는 다단 격자형 로그인 및 가입용 기본 입력 폼 레이아웃입니다."
            snippet={codeSnippets.form1}
          >
            <BasicFormPreview />
          </ShowcaseWrapper>

          <ShowcaseWrapper
            title="예제 폼"
            description="이름, 주제, 텍스트 메시지를 포함하여 간편하게 메시지를 발송할 수 있는 문의 접수 목적의 폼입니다."
            snippet={codeSnippets.form2}
          >
            <MessageFormPreview />
          </ShowcaseWrapper>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <ShowcaseWrapper
            title="아이콘이 있는 예제 폼"
            description="인풋 왼쪽에 메일, 비밀번호 등 직관적인 필드 아이콘이 내장되어 시각적 정보 파악이 원활한 로그인 폼입니다."
            snippet={codeSnippets.form3}
          >
            <IconFormPreview />
          </ShowcaseWrapper>

          <ShowcaseWrapper
            title="상세 개인정보 & 주소 폼"
            description="개인 정보, 생년월일, 다단계 주소 필드와 라디오 멤버십 선택지가 복합적으로 정렬된 마스터 설정 폼 레이아웃입니다."
            snippet={codeSnippets.form4}
          >
            <PersonalInfoFormPreview />
          </ShowcaseWrapper>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
