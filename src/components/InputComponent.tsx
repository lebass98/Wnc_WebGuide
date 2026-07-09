import ShowcaseWrapper from './ShowcaseWrapper';
import React, { useRef } from 'react';
import { 
  ChevronRight } from 'lucide-react';
import codeSnippets from './InputComponentSnippets.json';



// React component representation of the input states card
const InputStatePreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    container.dataset.isDown = 'true';
    container.dataset.startX = String(e.pageX - container.offsetLeft);
    container.dataset.scrollLeft = String(container.scrollLeft);
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  };

  const handleMouseLeaveOrUp = () => {
    const container = containerRef.current;
    if (!container) return;
    container.dataset.isDown = 'false';
    container.style.cursor = 'grab';
    container.style.removeProperty('user-select');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || container.dataset.isDown !== 'true') return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const startX = Number(container.dataset.startX);
    const scrollLeft = Number(container.dataset.scrollLeft);
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-10 flex flex-col gap-8 items-start justify-start w-full transition-colors duration-300">
      <div className="flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative">
        <div className="text-[#111111] dark:text-white text-left font-bold text-xl leading-[1.5] relative">
          State
        </div>
        <div className="text-[#767676] dark:text-slate-400 text-left text-sm leading-[1.5] font-medium relative">
          Default : 인풋창의 기본 상태
          <br />
          Focused : 인풋창이 선택된 상태
          <br />
          Completed : 인풋창 입력 중 상태
          <br />
          Error : 입력 내용에 오류가 있을 시, 인풋창아래 hint 메세지 제공
          <br />
          Disabled : 인풋 비활성화 상태, 입력 불가능
          <br />
          View : 이미 입력된 내용을 확인만 할 수 있는 상태, 입력 불가능
        </div>
      </div>
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className="rounded-2xl border border-solid border-[#dadada] dark:border-slate-700 p-6 flex flex-col xl:flex-row gap-10 items-start justify-start w-full overflow-x-auto cursor-grab active:cursor-grabbing"
      >
        
        {/* Default */}
        <label className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative cursor-pointer">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Default
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <span className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative text-[#464648] dark:text-slate-350 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal">
              Label
            </span>
            <input 
              type="text" 
              placeholder="내용을 입력하세요" 
              className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] shrink-0 w-[240px] h-[56px] bg-white dark:bg-slate-800 text-[#111111] dark:text-white placeholder-[#767676] dark:placeholder-slate-400 text-[17px] leading-[1.6] tracking-[-0.025em] font-normal outline-none focus:border-[#256ef4] transition-all"
            />
            <span className="pt-[8px] pr-[0px] pb-[0px] pl-[0px] flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative text-[#256ef4] dark:text-indigo-400 text-left text-[15px] leading-[1.6] tracking-[-0.025em] font-normal">
              * 필수 입력 항목입니다.
            </span>
          </div>
        </label>

        {/* Focused */}
        <label className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative cursor-pointer">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Focused
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <span className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative text-[#464648] dark:text-slate-300 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal">
              Label
            </span>
            <input 
              type="text" 
              placeholder="내용을 입력하세요" 
              className="rounded-md border border-solid border-[#256ef4] py-[6px] px-[24px] shrink-0 w-[240px] h-[56px] bg-white dark:bg-slate-800 text-[#111111] dark:text-white placeholder-[#767676] dark:placeholder-slate-400 text-[17px] leading-[1.6] tracking-[-0.025em] font-normal outline-none ring-2 ring-blue-100 dark:ring-blue-900/30 transition-all"
            />
          </div>
        </label>

        {/* Completed */}
        <label className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative cursor-pointer">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Completed
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <span className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative text-[#464648] dark:text-slate-300 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal">
              Label
            </span>
            <input 
              type="text" 
              defaultValue="내용을 입력하세요" 
              className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] shrink-0 w-[240px] h-[56px] bg-white dark:bg-slate-800 text-[#111111] dark:text-white text-[17px] leading-[1.6] tracking-[-0.025em] font-normal outline-none focus:border-[#256ef4] transition-all"
            />
          </div>
        </label>

        {/* Error */}
        <label className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative cursor-pointer">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Error
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <span className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative text-[#464648] dark:text-slate-300 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal">
              Label
            </span>
            <input 
              type="text" 
              placeholder="내용을 입력하세요" 
              className="rounded-md border border-solid border-[#c7332a] py-[6px] px-[24px] shrink-0 w-[240px] h-[56px] bg-white dark:bg-slate-800 text-[#111111] dark:text-white placeholder-[#767676] dark:placeholder-slate-400 text-[17px] leading-[1.6] tracking-[-0.025em] font-normal outline-none focus:border-[#c7332a] transition-all"
            />
            <div className="pt-[8px] pr-[0px] pb-[0px] pl-[0px] flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative">
              <svg className="flex-shrink-0 w-5 h-5 text-[#c7332a]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.64973 9.03711C6.98407 5.01211 8.15124 3 10 3C11.848 3 13.0159 5.01211 15.3503 9.03711L15.6415 9.538C17.5814 12.8824 18.5518 14.5547 17.675 15.7773C16.7982 17 14.6287 17 10.2912 17H9.70881C5.37131 17 3.20176 17 2.32498 15.7773C1.44821 14.5547 2.41858 12.8824 4.35854 9.538L4.64973 9.03711ZM10 6.30556C10.1591 6.30556 10.3117 6.36701 10.4243 6.47641C10.5368 6.58581 10.6 6.73418 10.6 6.88889V10.7778C10.6 10.9325 10.5368 11.0809 10.4243 11.1903C10.3117 11.2997 10.1591 11.3611 10 11.3611C9.84087 11.3611 9.68827 11.2997 9.57575 11.1903C9.46323 11.0809 9.40001 10.9325 9.40001 10.7778V6.88889C9.40001 6.73418 9.46323 6.58581 9.57575 6.47641C9.68827 6.36701 9.84087 6.30556 10 6.30556ZM10 13.8889C10.2122 13.8889 10.4156 13.8069 10.5657 13.6611C10.7157 13.5152 10.8 13.3174 10.8 13.1111C10.8 12.9048 10.7157 12.707 10.5657 12.5611C10.4156 12.4153 10.2122 12.3333 10 12.3333C9.78783 12.3333 9.58435 12.4153 9.43433 12.5611C9.2843 12.707 9.20002 12.9048 9.20002 13.1111C9.20002 13.3174 9.2843 13.5152 9.43433 13.6611C9.58435 13.8069 9.78783 13.8889 10 13.8889Z" fill="#C7332A" />
              </svg>
              <div className="text-[#c7332a] text-left text-[15px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                필수 입력 항목입니다.
              </div>
            </div>
          </div>
        </label>

        {/* Disabled */}
        <label className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative opacity-60 cursor-not-allowed">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Disabled
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <span className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative text-[#464648] dark:text-slate-350 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal">
              Label
            </span>
            <input 
              type="text" 
              placeholder="내용을 입력하세요" 
              disabled
              className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] shrink-0 w-[240px] h-[56px] bg-[#f5f5f5] dark:bg-slate-800/50 text-[#999999] dark:text-slate-500 placeholder-[#999999] dark:placeholder-slate-500 text-[17px] leading-[1.6] tracking-[-0.025em] font-normal outline-none cursor-not-allowed"
            />
          </div>
        </label>

        {/* View */}
        <label className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative cursor-pointer">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            View (내용만 확인)
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <span className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative text-[#464648] dark:text-slate-350 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal">
              Label
            </span>
            <input 
              type="text" 
              defaultValue="내용을 입력하세요" 
              readOnly
              className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] shrink-0 w-[240px] h-[56px] bg-[#f5f5f5] dark:bg-slate-800/50 text-[#111111] dark:text-white text-[17px] leading-[1.6] tracking-[-0.025em] font-normal outline-none"
            />
          </div>
        </label>

      </div>
    </div>
  );
};

const InputComponent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            인풋 컴포넌트
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>컴포넌트</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">인풋</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 pb-20">
        <ShowcaseWrapper
          title="Input State"
          description="인풋의 상태를 나타내주는 폼입니다."
          snippet={codeSnippets.inputStates}
        >
          <InputStatePreview />
        </ShowcaseWrapper>
      </div>
    </div>
  );
};

export default InputComponent;
