import ShowcaseWrapper from '../../components/ui/ShowcaseWrapper';
import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Copy, 
  Upload, 
  ChevronDown, 
  CreditCard, 
  Eye, 
  X, 
  Check, 
  ChevronRight } from 'lucide-react';
import CustomDatePicker from '../../components/ui/CustomDatePicker';
import codeSnippets from '../../data/FormElementsSnippets.json';



const FormElements: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // Multiple Select State
  const [multiSelectOpen, setMultiSelectOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['옵션 1', '옵션 3']);
  const availableOptions = ['옵션 1', '옵션 2', '옵션 3', '옵션 4'];

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const removeOption = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    setSelectedOptions(selectedOptions.filter(item => item !== option));
  };

  // Dropzone State
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const dropzoneRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("www.tailadmin.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Checkboxes & Radios State
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radioValue, setRadioValue] = useState('secondary');

  // Toggle Switches State
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(true);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            폼 요소
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>폼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">폼 요소</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Default Inputs */}
          <ShowcaseWrapper
            title="기본 입력란"
            description="가장 널리 활용되는 텍스트 및 비밀번호 입력 필드 형태입니다."
            snippet={codeSnippets.defaultInputs}
          >
            <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-355">입력란</span>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
              </label>

              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</span>
                <input type="text" placeholder="info@gmail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </label>

              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</span>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
                  <Eye 
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer hover:text-indigo-500 transition-colors ${showPassword ? 'text-indigo-500' : 'text-slate-400'}`} 
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </label>

              <label className="block space-y-2 relative z-50">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">날짜 선택 입력란</span>
                <CustomDatePicker placeholder="mm/dd/yyyy" />
              </label>

              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">시간 선택 입력란</span>
                <div className="relative">
                  <input type="time" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
              </label>

              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">결제 입력란</span>
                <div className="relative">
                  <input type="text" placeholder="카드 번호" className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
                </div>
              </label>
            </div>
          </ShowcaseWrapper>

          {/* Select Inputs */}
          <ShowcaseWrapper
            title="선택 입력란 (Select)"
            description="다양한 선택 옵션을 보여주거나 여러 옵션을 멀티 셀렉트 형태로 선택할 수 있습니다."
            snippet={codeSnippets.selectInputs}
          >
            <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</span>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                    <option>옵션 선택</option>
                    <option>옵션 1</option>
                    <option>옵션 2</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </label>

              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</span>
                <div className="relative">
                  <div 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 items-center bg-white dark:bg-slate-800 cursor-pointer min-h-[50px] transition-all relative z-10"
                    onClick={() => setMultiSelectOpen(!multiSelectOpen)}
                  >
                    {selectedOptions.length === 0 && <span className="text-slate-400">옵션을 선택하세요...</span>}
                    {selectedOptions.map(option => (
                      <span key={option} className="bg-slate-100 dark:bg-slate-700 text-slate-650 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1">
                        {option} 
                        <X 
                          className="w-3 h-3 hover:text-red-500 transition-colors" 
                          onClick={(e) => removeOption(e, option)}
                        />
                      </span>
                    ))}
                    <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform ${multiSelectOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Dropdown Menu */}
                  {multiSelectOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto custom-scrollbar">
                      {availableOptions.map(option => (
                        <div 
                          key={option}
                          onClick={() => toggleOption(option)}
                          className={`px-4 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors ${selectedOptions.includes(option) ? 'bg-indigo-50/50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium' : 'text-slate-600 dark:text-slate-400 dark:text-slate-300'}`}
                        >
                          <div className={`w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors ${selectedOptions.includes(option) ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}`}>
                            {selectedOptions.includes(option) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                          </div>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </label>
            </div>
          </ShowcaseWrapper>

          {/* Textarea input field */}
          <ShowcaseWrapper
            title="텍스트 영역 (Textarea)"
            description="긴 안내글이나 설명 입력을 지원하는 다크모드 대응 텍스트 영역입니다."
            snippet={codeSnippets.textarea}
          >
            <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">설명</span>
                <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"></textarea>
              </label>

              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">설명 (비활성화)</span>
                <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500" disabled></textarea>
              </label>
            </div>
          </ShowcaseWrapper>

        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Input Group */}
          <ShowcaseWrapper
            title="입력 그룹"
            description="메일 및 URL 등 복사 기능이 통합된 복합 입력 필드 그룹입니다."
            snippet={codeSnippets.inputGroup}
          >
            <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</span>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <input type="text" placeholder="info@gmail.com" className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
                </div>
              </label>

              <label className="block space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</span>
                <div className="flex">
                  <input type="text" value="www.tailadmin.com" readOnly className="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-650 dark:text-slate-400 dark:text-slate-300" />
                  <button 
                    onClick={handleCopy}
                    className="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-indigo-500 dark:text-indigo-400 font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    {copied ? <span className="text-emerald-500 text-sm">복사됨!</span> : <><Copy className="w-4 h-4" /> 복사</>}
                  </button>
                </div>
              </label>
            </div>
          </ShowcaseWrapper>

          {/* File Input */}
          <ShowcaseWrapper
            title="파일 입력"
            description="버튼 디자인과 연결된 실시간 업로드 파일 표시 입력 필드입니다."
            snippet={codeSnippets.fileInput}
          >
            <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
              <div className="space-y-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</span>
                <div className="relative">
                  <input type="file" className="hidden" id="file-upload" onChange={handleFileChange} />
                  <label htmlFor="file-upload" className="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-all overflow-hidden whitespace-nowrap">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-655 px-3 py-1 rounded-md text-sm font-semibold mr-4 shrink-0">파일 선택</span>
                    <span className="text-slate-400 text-sm truncate">
                      {selectedFiles.length > 0 ? selectedFiles[0].name : "선택된 파일 없음"}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </ShowcaseWrapper>

          {/* Checkboxes */}
          <ShowcaseWrapper
            title="체크박스"
            description="다양한 상태를 가지는 다크모드 지원 맞춤형 체크박스 컴포넌트입니다."
            snippet={codeSnippets.checkboxes}
          >
            <div className="p-4 dark:bg-slate-900 rounded-xl flex flex-wrap gap-8 items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="hidden" checked={checkbox1} onChange={(e) => setCheckbox1(e.target.checked)} />
                <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${checkbox1 ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600'}`}>
                  {checkbox1 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
                <span className={`text-sm font-medium ${checkbox1 ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="hidden" checked={checkbox2} onChange={(e) => setCheckbox2(e.target.checked)} />
                <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${checkbox2 ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600'}`}>
                  {checkbox2 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
                <span className={`text-sm font-medium ${checkbox2 ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>선택됨</span>
              </label>
            </div>
          </ShowcaseWrapper>

          {/* Radio Buttons */}
          <ShowcaseWrapper
            title="라디오 버튼"
            description="상호 배타적인 두 가지 옵션을 나타내기 위한 라디오 버튼 인터페이스입니다."
            snippet={codeSnippets.radioButtons}
          >
            <div className="p-4 dark:bg-slate-900 rounded-xl flex flex-wrap gap-8 items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="radio-test" value="default" checked={radioValue === 'default'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${radioValue === 'default' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 group-hover:border-indigo-500 dark:border-slate-600'}`}>
                   {radioValue === 'default' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-sm font-medium ${radioValue === 'default' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="radio-test" value="secondary" checked={radioValue === 'secondary'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${radioValue === 'secondary' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 group-hover:border-indigo-500 dark:border-slate-600'}`}>
                  {radioValue === 'secondary' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-sm font-medium ${radioValue === 'secondary' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>보조</span>
              </label>
            </div>
          </ShowcaseWrapper>

          {/* Toggle switch input */}
          <ShowcaseWrapper
            title="토글 스위치 설정"
            description="상태 On/Off를 한 번의 클릭으로 신속하게 변경하는 토글 스위치 형태입니다."
            snippet={codeSnippets.toggleSwitch}
          >
            <div className="p-4 dark:bg-slate-900 rounded-xl space-y-4 pt-2">
              <div className="flex gap-8 items-center">
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle1(!toggle1)}>
                  <div className={`relative w-11 h-6 rounded-full transition-colors ${toggle1 ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-600 group-hover:bg-slate-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${toggle1 ? 'left-[calc(100%-1.25rem)]' : 'left-1'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle2(!toggle2)}>
                  <div className={`relative w-11 h-6 rounded-full transition-colors ${toggle2 ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-600 group-hover:bg-slate-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${toggle2 ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle2 ? 'text-indigo-650 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>선택됨</span>
                </label>
              </div>

              <div className="flex gap-8 items-center">
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle3(!toggle3)}>
                  <div className={`relative w-12 h-6 border-2 rounded-full transition-colors flex items-center px-1 ${toggle3 ? 'border-slate-800 dark:border-white' : 'border-slate-200 group-hover:border-slate-300'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${toggle3 ? 'bg-slate-800 dark:bg-white translate-x-6' : 'bg-slate-200 translate-x-0'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle3 ? 'text-slate-800 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle4(!toggle4)}>
                   <div className={`relative w-12 h-6 border-2 rounded-full transition-colors flex items-center px-1 ${toggle4 ? 'border-slate-800 dark:border-white' : 'border-slate-200 group-hover:border-slate-300'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${toggle4 ? 'bg-slate-800 dark:bg-white translate-x-6' : 'bg-slate-200 translate-x-0'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle4 ? 'text-slate-800 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}>선택됨</span>
                </label>
              </div>
            </div>
          </ShowcaseWrapper>

          {/* Dropzone */}
          <ShowcaseWrapper
            title="드롭존 (파일 끌어다 놓기)"
            description="컴퓨터 내부 파일을 브라우저 영역에 직접 끌어다 올리는 드롭존 형태입니다."
            snippet={codeSnippets.dropzone}
          >
            <div className="p-4 dark:bg-slate-900 rounded-xl">
              <div 
                className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all ${dragActive ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 scale-[1.02]' : 'border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => dropzoneRef.current?.click()}
              >
                <input 
                  ref={dropzoneRef}
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                  multiple
                />
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-slate-100 dark:bg-slate-800`}>
                  <Upload className={`w-6 h-6 ${dragActive ? 'text-indigo-600 animate-bounce' : 'text-indigo-500'}`} />
                </div>
                
                {selectedFiles.length > 0 ? (
                  <div className="space-y-2 w-full max-w-sm">
                    <p className="text-lg font-bold text-indigo-600">{selectedFiles.length}개 파일 선택됨</p>
                    <ul className="text-sm text-slate-500 max-h-24 overflow-y-auto custom-scrollbar text-left bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                      {selectedFiles.map((file, i) => (
                        <li key={i} className="truncate">• {file.name}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">여기로 파일을 드래그 앤 드롭하세요</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">PNG, JPG, WEBP, SVG 이미지를 지원합니다</p>
                  </div>
                )}
              </div>
            </div>
          </ShowcaseWrapper>

        </div>

      </div>
    </div>
  );
};

export default FormElements;
