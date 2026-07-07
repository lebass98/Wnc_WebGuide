export interface CodeSnippet {
  react: string;
  html: string;
  css: string;
  js: string;
  fullHtml: string;
}

export const codeSnippets = {
  defaultInputs: {
    react: `import React, { useState } from 'react';
import { Eye, CreditCard } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-355">입력란</label>
        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</label>
        <input type="text" placeholder="info@gmail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</label>
        <div className="relative">
          <input type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
          <Eye 
            className={\`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer hover:text-indigo-500 transition-colors \${showPassword ? 'text-indigo-500' : 'text-slate-400'}\`} 
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>

      <div className="space-y-2 relative z-50">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">날짜 선택 입력란</label>
        <CustomDatePicker placeholder="mm/dd/yyyy" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">시간 선택 입력란</label>
        <div className="relative">
          <input type="time" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">결제 입력란</label>
        <div className="relative">
          <input type="text" placeholder="카드 번호" className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
        </div>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">입력란</label>
    <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</label>
    <input type="text" placeholder="info@gmail.com" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</label>
    <div class="relative">
      <input type="password" id="pw-input" placeholder="비밀번호를 입력하세요" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
      <span class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-indigo-500" id="pw-toggle">
        <i data-lucide="eye" class="w-4 h-4"></i>
      </span>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">날짜 선택 입력란</label>
    <div class="relative">
      <input type="date" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">시간 선택 입력란</label>
    <div class="relative">
      <input type="time" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">결제 입력란</label>
    <div class="relative">
      <input type="text" placeholder="카드 번호" class="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
      <i data-lucide="credit-card" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500"></i>
    </div>
  </div>
</div>`,
    css: `/* Tailwind CSS를 사용한 스타일 적용 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const pwInput = document.getElementById('pw-input');
  const pwToggle = document.getElementById('pw-toggle');
  if (pwToggle && pwInput) {
    pwToggle.addEventListener('click', () => {
      const type = pwInput.getAttribute('type') === 'password' ? 'text' : 'password';
      pwInput.setAttribute('type', type);
      const icon = pwToggle.querySelector('i');
      if (icon) {
        if (type === 'text') {
          icon.setAttribute('data-lucide', 'eye-off');
        } else {
          icon.setAttribute('data-lucide', 'eye');
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>기본 입력란 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[500px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">입력란</label>
        <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</label>
        <input type="text" placeholder="info@gmail.com" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</label>
        <div class="relative">
          <input type="password" id="pw-input" placeholder="비밀번호를 입력하세요" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
          <span class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-indigo-500" id="pw-toggle">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">날짜 선택 입력란</label>
        <div class="relative">
          <input type="date" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">시간 선택 입력란</label>
        <div class="relative">
          <input type="time" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">결제 입력란</label>
        <div class="relative">
          <input type="text" placeholder="카드 번호" class="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
          <i data-lucide="credit-card" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500"></i>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const pwInput = document.getElementById('pw-input');
      const pwToggle = document.getElementById('pw-toggle');
      if (pwToggle && pwInput) {
        pwToggle.addEventListener('click', () => {
          const type = pwInput.getAttribute('type') === 'password' ? 'text' : 'password';
          pwInput.setAttribute('type', type);
          const icon = pwToggle.querySelector('i');
          if (icon) {
            if (type === 'text') {
              icon.setAttribute('data-lucide', 'eye-off');
            } else {
              icon.setAttribute('data-lucide', 'eye');
            }
            lucide.createIcons();
          }
        });
      }
    });
  </script>
</body>
</html>`
  },
  selectInputs: {
    react: `import React, { useState } from 'react';
import { ChevronDown, X, Check } from 'lucide-react';

function SelectInputs() {
  const [multiSelectOpen, setMultiSelectOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(['옵션 1', '옵션 3']);
  const availableOptions = ['옵션 1', '옵션 2', '옵션 3', '옵션 4'];

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const removeOption = (e, option) => {
    e.stopPropagation();
    setSelectedOptions(selectedOptions.filter(item => item !== option));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</label>
        <div className="relative">
          <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white cursor-pointer">
            <option>옵션 선택</option>
            <option>옵션 1</option>
            <option>옵션 2</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</label>
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
            <ChevronDown className={\`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform \${multiSelectOpen ? 'rotate-180' : ''}\`} />
          </div>
          
          {multiSelectOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto custom-scrollbar">
              {availableOptions.map(option => (
                <div 
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={\`px-4 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors \${selectedOptions.includes(option) ? 'bg-indigo-50/50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium' : 'text-slate-600 dark:text-slate-355'}\`}
                >
                  <div className={\`w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors \${selectedOptions.includes(option) ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}\`}>
                    {selectedOptions.includes(option) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </div>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</label>
    <div class="relative">
      <select class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white cursor-pointer">
        <option>옵션 선택</option>
        <option>옵션 1</option>
        <option>옵션 2</option>
      </select>
      <i data-lucide="chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"></i>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</label>
    <div class="relative">
      <div id="multi-select-trigger" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 items-center bg-white dark:bg-slate-800 cursor-pointer min-h-[50px] transition-all relative z-10">
        <div id="multi-select-badges" class="flex flex-wrap gap-2 items-center"></div>
        <span id="multi-select-placeholder" class="text-slate-400">옵션을 선택하세요...</span>
        <i data-lucide="chevron-down" id="multi-select-arrow" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform"></i>
      </div>
      
      <div id="multi-select-dropdown" class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto hidden">
        <div class="multi-select-option px-4 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 1">
          <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
            <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
          </div>
          옵션 1
        </div>
        <div class="multi-select-option px-4 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 2">
          <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
            <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
          </div>
          옵션 2
        </div>
        <div class="multi-select-option px-4 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 3">
          <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
            <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
          </div>
          옵션 3
        </div>
        <div class="multi-select-option px-4 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 4">
          <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
            <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
          </div>
          옵션 4
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('multi-select-trigger');
  const dropdown = document.getElementById('multi-select-dropdown');
  const placeholder = document.getElementById('multi-select-placeholder');
  const badgesContainer = document.getElementById('multi-select-badges');
  const arrow = document.getElementById('multi-select-arrow');
  const options = document.querySelectorAll('.multi-select-option');

  let selected = ['옵션 1', '옵션 3'];

  function updateUI() {
    badgesContainer.innerHTML = '';
    if (selected.length === 0) {
      placeholder.style.display = 'block';
    } else {
      placeholder.style.display = 'none';
      selected.forEach(val => {
        const badge = document.createElement('span');
        badge.className = 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1';
        badge.innerHTML = \`\${val} <i data-lucide="x" class="w-3 h-3 text-slate-400 hover:text-red-500 cursor-pointer remove-badge" data-val="\${val}"></i>\`;
        badgesContainer.appendChild(badge);
      });
    }

    options.forEach(opt => {
      const val = opt.getAttribute('data-value');
      const box = opt.querySelector('.opt-checkbox');
      const icon = box.querySelector('i');
      if (selected.includes(val)) {
        opt.className = 'multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors bg-indigo-50/50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 font-semibold';
        box.className = 'opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-blue-500 bg-blue-500';
        icon.classList.remove('hidden');
      } else {
        opt.className = 'multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors text-slate-700 dark:text-slate-300';
        box.className = 'opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300 bg-white dark:bg-slate-800';
        icon.classList.add('hidden');
      }
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    document.querySelectorAll('.remove-badge').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = btn.getAttribute('data-val');
        selected = selected.filter(v => v !== val);
        updateUI();
      });
    });
  }

  if (trigger && dropdown) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = !dropdown.classList.contains('hidden');
      if (open) {
        dropdown.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
      } else {
        dropdown.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
      }
    });

    document.addEventListener('click', () => {
      dropdown.classList.add('hidden');
      arrow.style.transform = 'rotate(0deg)';
    });

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const val = opt.getAttribute('data-value');
        if (selected.includes(val)) {
          selected = selected.filter(v => v !== val);
        } else {
          selected.push(val);
        }
        updateUI();
      });
    });

    updateUI();
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>선택 입력란 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[350px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</label>
        <div class="relative">
          <select class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white cursor-pointer">
            <option>옵션 선택</option>
            <option>옵션 1</option>
            <option>옵션 2</option>
          </select>
          <i data-lucide="chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"></i>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</label>
        <div class="relative">
          <div id="multi-select-trigger" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 items-center bg-white dark:bg-slate-800 cursor-pointer min-h-[50px] transition-all relative z-10 select-none">
            <div id="multi-select-badges" class="flex flex-wrap gap-2 items-center"></div>
            <span id="multi-select-placeholder" class="text-slate-400 text-sm">옵션을 선택하세요...</span>
            <i data-lucide="chevron-down" id="multi-select-arrow" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-all duration-300"></i>
          </div>
          
          <div id="multi-select-dropdown" class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto hidden">
            <div class="multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 1">
              <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
                <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
              </div>
              옵션 1
            </div>
            <div class="multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 2">
              <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
                <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
              </div>
              옵션 2
            </div>
            <div class="multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 3">
              <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
                <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
              </div>
              옵션 3
            </div>
            <div class="multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors" data-value="옵션 4">
              <div class="opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300">
                <i data-lucide="check" class="w-3 h-3 text-white hidden" stroke-width="3"></i>
              </div>
              옵션 4
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const trigger = document.getElementById('multi-select-trigger');
      const dropdown = document.getElementById('multi-select-dropdown');
      const placeholder = document.getElementById('multi-select-placeholder');
      const badgesContainer = document.getElementById('multi-select-badges');
      const arrow = document.getElementById('multi-select-arrow');
      const options = document.querySelectorAll('.multi-select-option');

      let selected = ['옵션 1', '옵션 3'];

      function updateUI() {
        badgesContainer.innerHTML = '';
        if (selected.length === 0) {
          placeholder.style.display = 'block';
        } else {
          placeholder.style.display = 'none';
          selected.forEach(val => {
            const badge = document.createElement('span');
            badge.className = 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1';
            badge.innerHTML = \`\${val} <i data-lucide="x" class="w-3 h-3 text-slate-400 hover:text-red-500 cursor-pointer remove-badge" data-val="\${val}"></i>\`;
            badgesContainer.appendChild(badge);
          });
        }

        options.forEach(opt => {
          const val = opt.getAttribute('data-value');
          const box = opt.querySelector('.opt-checkbox');
          const icon = box.querySelector('i');
          if (selected.includes(val)) {
            opt.className = 'multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors bg-indigo-50/50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 font-semibold';
            box.className = 'opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-blue-500 bg-blue-500';
            icon.classList.remove('hidden');
          } else {
            opt.className = 'multi-select-option px-4 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors text-slate-700 dark:text-slate-300';
            box.className = 'opt-checkbox w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors border-slate-300 bg-white dark:bg-slate-800';
            icon.classList.add('hidden');
          }
        });

        lucide.createIcons();
        
        document.querySelectorAll('.remove-badge').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = btn.getAttribute('data-val');
            selected = selected.filter(v => v !== val);
            updateUI();
          });
        });
      }

      if (trigger && dropdown) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const open = !dropdown.classList.contains('hidden');
          if (open) {
            dropdown.classList.add('hidden');
            arrow.style.transform = 'rotate(0deg)';
          } else {
            dropdown.classList.remove('hidden');
            arrow.style.transform = 'rotate(180deg)';
          }
        });

        document.addEventListener('click', () => {
          dropdown.classList.add('hidden');
          arrow.style.transform = 'rotate(0deg)';
        });

        options.forEach(opt => {
          opt.addEventListener('click', () => {
            const val = opt.getAttribute('data-value');
            if (selected.includes(val)) {
              selected = selected.filter(v => v !== val);
            } else {
              selected.push(val);
            }
            updateUI();
          });
        });

        updateUI();
      }
    });
  </script>
</body>
</html>`
  },
  textarea: {
    react: `import React from 'react';

function TextareaInput() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">설명</label>
        <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"></textarea>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">설명 (비활성화)</label>
        <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500" disabled></textarea>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">설명</label>
    <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"></textarea>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">설명 (비활성화)</label>
    <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500" disabled></textarea>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `// JS 스크립트 없음`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>텍스트 영역 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[300px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">설명</label>
        <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"></textarea>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">설명 (비활성화)</label>
        <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500" disabled></textarea>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  inputGroup: {
    react: `import React, { useState } from 'react';
import { Mail, Copy } from 'lucide-react';

function InputGroup() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("www.tailadmin.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="w-5 h-5 text-slate-400" />
          </div>
          <input type="text" placeholder="info@gmail.com" className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</label>
        <div className="flex">
          <input type="text" value="www.tailadmin.com" readOnly className="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-650 dark:text-slate-400 dark:text-slate-300" />
          <button 
            onClick={handleCopy}
            className="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-indigo-505 dark:text-indigo-400 font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
          >
            {copied ? <span className="text-emerald-500 text-sm">복사됨!</span> : <><Copy className="w-4 h-4" /> 복사</>}
          </button>
        </div>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</label>
    <div class="relative group">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <i data-lucide="mail" class="w-5 h-5 text-slate-400"></i>
      </div>
      <input type="text" placeholder="info@gmail.com" class="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</label>
    <div class="flex">
      <input type="text" value="www.tailadmin.com" readonly class="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-650 dark:text-slate-400 dark:text-slate-300" id="website-url" />
      <button id="copy-btn" class="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-indigo-500 dark:text-indigo-400 font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
        <i data-lucide="copy" class="w-4 h-4"></i> 복사
      </button>
    </div>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-btn');
  const websiteUrl = document.getElementById('website-url');
  if (copyBtn && websiteUrl) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(websiteUrl.value).then(() => {
        copyBtn.innerHTML = '<span class="text-emerald-500 text-sm">복사됨!</span>';
        setTimeout(() => {
          copyBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> 복사';
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2000);
      });
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>입력 그룹 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[300px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</label>
        <div class="relative group">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i data-lucide="mail" class="w-5 h-5 text-slate-400"></i>
          </div>
          <input type="text" placeholder="info@gmail.com" class="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</label>
        <div class="flex">
          <input type="text" value="www.tailadmin.com" readonly class="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-655 dark:text-slate-400 dark:text-slate-300" id="website-url" />
          <button id="copy-btn" class="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-indigo-500 dark:text-indigo-400 font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
            <i data-lucide="copy" class="w-4 h-4"></i> 복사
          </button>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const copyBtn = document.getElementById('copy-btn');
      const websiteUrl = document.getElementById('website-url');
      if (copyBtn && websiteUrl) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(websiteUrl.value).then(() => {
            copyBtn.innerHTML = '<span class="text-emerald-500 text-sm">복사됨!</span>';
            setTimeout(() => {
              copyBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> 복사';
              lucide.createIcons();
            }, 2000);
          });
        });
      }
    });
  </script>
</body>
</html>`
  },
  fileInput: {
    react: `import React, { useState } from 'react';

function FileInput() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</label>
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
  );
}`,
    html: `<div class="flex flex-col gap-2">
  <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</label>
  <div class="relative">
    <input type="file" class="hidden" id="file-upload-html" />
    <label for="file-upload-html" class="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-all overflow-hidden whitespace-nowrap">
      <span class="bg-slate-100 dark:bg-slate-700 text-slate-650 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-semibold mr-4 shrink-0">파일 선택</span>
      <span class="text-slate-400 text-sm truncate" id="file-name-display">선택된 파일 없음</span>
    </label>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const fileUpload = document.getElementById('file-upload-html');
  const fileNameDisplay = document.getElementById('file-name-display');
  if (fileUpload && fileNameDisplay) {
    fileUpload.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        fileNameDisplay.innerText = e.target.files[0].name;
      }
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>파일 입력 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[250px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</label>
      <div class="relative">
        <input type="file" class="hidden" id="file-upload-html" />
        <label for="file-upload-html" class="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-all overflow-hidden whitespace-nowrap">
          <span class="bg-slate-100 dark:bg-slate-700 text-slate-650 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-semibold mr-4 shrink-0">파일 선택</span>
          <span class="text-slate-400 text-sm truncate" id="file-name-display">선택된 파일 없음</span>
        </label>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const fileUpload = document.getElementById('file-upload-html');
      const fileNameDisplay = document.getElementById('file-name-display');
      if (fileUpload && fileNameDisplay) {
        fileUpload.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            fileNameDisplay.innerText = e.target.files[0].name;
          }
        });
      }
    });
  </script>
</body>
</html>`
  },
  checkboxes: {
    react: `import React, { useState } from 'react';
import { Check } from 'lucide-react';

function CheckboxesInput() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);

  return (
    <div className="flex flex-wrap gap-8 items-center pt-2">
      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" className="hidden" checked={checkbox1} onChange={(e) => setCheckbox1(e.target.checked)} />
        <div className={\`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all \${checkbox1 ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600'}\`}>
          {checkbox1 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </div>
        <span className={\`text-sm font-medium \${checkbox1 ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}\`}>기본</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" className="hidden" checked={checkbox2} onChange={(e) => setCheckbox2(e.target.checked)} />
        <div className={\`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all \${checkbox2 ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600'}\`}>
          {checkbox2 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </div>
        <span className={\`text-sm font-medium \${checkbox2 ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}\`}>선택됨</span>
      </label>
    </div>
  );
}`,
    html: `<div class="flex flex-wrap gap-8 items-center pt-2">
  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="checkbox" class="hidden checkbox-input" id="chk-1" />
    <div class="w-5 h-5 rounded-[0.25rem] border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all checkbox-box">
      <i data-lucide="check" class="w-3.5 h-3.5 text-white hidden check-icon" stroke-width="3"></i>
    </div>
    <span class="text-sm font-medium text-slate-600 dark:text-slate-400 checkbox-text select-none">기본</span>
  </label>

  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="checkbox" class="hidden checkbox-input" id="chk-2" checked />
    <div class="w-5 h-5 rounded-[0.25rem] border border-blue-500 bg-blue-500 flex items-center justify-center transition-all checkbox-box">
      <i data-lucide="check" class="w-3.5 h-3.5 text-white check-icon" stroke-width="3"></i>
    </div>
    <span class="text-sm font-medium text-slate-800 dark:text-white checkbox-text select-none">선택됨</span>
  </label>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.checkbox-input');
  checkboxes.forEach(ch => {
    ch.addEventListener('change', () => {
      const box = ch.nextElementSibling;
      const icon = box.querySelector('.check-icon');
      const text = ch.parentElement.querySelector('.checkbox-text');
      if (ch.checked) {
        box.className = 'w-5 h-5 rounded-[0.25rem] border border-blue-500 bg-blue-500 flex items-center justify-center transition-all checkbox-box';
        if (icon) icon.classList.remove('hidden');
        text.className = 'text-sm font-medium text-slate-800 dark:text-white checkbox-text select-none';
      } else {
        box.className = 'w-5 h-5 rounded-[0.25rem] border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all checkbox-box';
        if (icon) icon.classList.add('hidden');
        text.className = 'text-sm font-medium text-slate-600 dark:text-slate-400 checkbox-text select-none';
      }
    });
  });
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>체크박스 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[250px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="flex flex-wrap gap-8 items-center pt-2">
      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" class="hidden checkbox-input" id="chk-1" />
        <div class="w-5 h-5 rounded-[0.25rem] border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all checkbox-box">
          <i data-lucide="check" class="w-3.5 h-3.5 text-white hidden check-icon" stroke-width="3"></i>
        </div>
        <span class="text-sm font-medium text-slate-600 dark:text-slate-400 checkbox-text select-none">기본</span>
      </label>

      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" class="hidden checkbox-input" id="chk-2" checked />
        <div class="w-5 h-5 rounded-[0.25rem] border border-blue-500 bg-blue-500 flex items-center justify-center transition-all checkbox-box">
          <i data-lucide="check" class="w-3.5 h-3.5 text-white check-icon" stroke-width="3"></i>
        </div>
        <span class="text-sm font-medium text-slate-800 dark:text-white checkbox-text select-none">선택됨</span>
      </label>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const checkboxes = document.querySelectorAll('.checkbox-input');
      checkboxes.forEach(ch => {
        ch.addEventListener('change', () => {
          const box = ch.nextElementSibling;
          const icon = box.querySelector('.check-icon');
          const text = ch.parentElement.querySelector('.checkbox-text');
          if (ch.checked) {
            box.className = 'w-5 h-5 rounded-[0.25rem] border border-blue-500 bg-blue-500 flex items-center justify-center transition-all checkbox-box';
            if (icon) icon.classList.remove('hidden');
            text.className = 'text-sm font-medium text-slate-800 dark:text-white checkbox-text select-none';
          } else {
            box.className = 'w-5 h-5 rounded-[0.25rem] border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all checkbox-box';
            if (icon) icon.classList.add('hidden');
            text.className = 'text-sm font-medium text-slate-600 dark:text-slate-400 checkbox-text select-none';
          }
        });
      });
    });
  </script>
</body>
</html>`
  },
  radioButtons: {
    react: `import React, { useState } from 'react';

function RadioButtonsInput() {
  const [radioValue, setRadioValue] = useState('secondary');
  return (
    <div className="flex flex-wrap gap-8 items-center pt-2">
      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="radio" name="radio-test" value="default" checked={radioValue === 'default'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
        <div className={\`w-5 h-5 rounded-full border flex items-center justify-center transition-all \${radioValue === 'default' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 group-hover:border-indigo-500 dark:border-slate-600'}\`}>
           {radioValue === 'default' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
        </div>
        <span className={\`text-sm font-medium \${radioValue === 'default' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}\`}>기본</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="radio" name="radio-test" value="secondary" checked={radioValue === 'secondary'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
        <div className={\`w-5 h-5 rounded-full border flex items-center justify-center transition-all \${radioValue === 'secondary' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300'}\`}>
          {radioValue === 'secondary' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
        </div>
        <span className={\`text-sm font-medium \${radioValue === 'secondary' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}\`}>보조</span>
      </label>
    </div>
  );
}`,
    html: `<div class="flex flex-wrap gap-8 items-center pt-2">
  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="radio" name="radio-html" value="default" class="hidden radio-input" id="rad-1" />
    <div class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all radio-box">
      <div class="w-1.5 h-1.5 rounded-full bg-white hidden radio-dot"></div>
    </div>
    <span class="text-sm font-medium text-slate-600 dark:text-slate-400 radio-text select-none">기본</span>
  </label>

  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="radio" name="radio-html" value="secondary" class="hidden radio-input" id="rad-2" checked />
    <div class="w-5 h-5 rounded-full border border-indigo-500 bg-indigo-500 flex items-center justify-center transition-all radio-box">
      <div class="w-1.5 h-1.5 rounded-full bg-white radio-dot"></div>
    </div>
    <span class="text-sm font-medium text-slate-800 dark:text-white radio-text select-none">보조</span>
  </label>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('.radio-input');
  radios.forEach(rad => {
    rad.addEventListener('change', () => {
      radios.forEach(r => {
        const box = r.nextElementSibling;
        const dot = box.querySelector('.radio-dot');
        const text = r.parentElement.querySelector('.radio-text');
        if (r.checked) {
          box.className = 'w-5 h-5 rounded-full border border-indigo-500 bg-indigo-500 flex items-center justify-center transition-all radio-box';
          if (dot) dot.classList.remove('hidden');
          text.className = 'text-sm font-medium text-slate-800 dark:text-white radio-text select-none';
        } else {
          box.className = 'w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all radio-box';
          if (dot) dot.classList.add('hidden');
          text.className = 'text-sm font-medium text-slate-600 dark:text-slate-400 radio-text select-none';
        }
      });
    });
  });
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>라디오 버튼 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[250px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="flex flex-wrap gap-8 items-center pt-2">
      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="radio" name="radio-html" value="default" class="hidden radio-input" id="rad-1" />
        <div class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all radio-box">
          <div class="w-1.5 h-1.5 rounded-full bg-white hidden radio-dot"></div>
        </div>
        <span class="text-sm font-medium text-slate-600 dark:text-slate-400 radio-text select-none">기본</span>
      </label>

      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="radio" name="radio-html" value="secondary" class="hidden radio-input" id="rad-2" checked />
        <div class="w-5 h-5 rounded-full border border-indigo-500 bg-indigo-500 flex items-center justify-center transition-all radio-box">
          <div class="w-1.5 h-1.5 rounded-full bg-white radio-dot"></div>
        </div>
        <span class="text-sm font-medium text-slate-800 dark:text-white radio-text select-none">보조</span>
      </label>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const radios = document.querySelectorAll('.radio-input');
      radios.forEach(rad => {
        rad.addEventListener('change', () => {
          radios.forEach(r => {
            const box = r.nextElementSibling;
            const dot = box.querySelector('.radio-dot');
            const text = r.parentElement.querySelector('.radio-text');
            if (r.checked) {
              box.className = 'w-5 h-5 rounded-full border border-indigo-500 bg-indigo-500 flex items-center justify-center transition-all radio-box';
              if (dot) dot.classList.remove('hidden');
              text.className = 'text-sm font-medium text-slate-800 dark:text-white radio-text select-none';
            } else {
              box.className = 'w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all radio-box';
              if (dot) dot.classList.add('hidden');
              text.className = 'text-sm font-medium text-slate-600 dark:text-slate-400 radio-text select-none';
            }
          });
        });
      });
    });
  </script>
</body>
</html>`
  },
  toggleSwitch: {
    react: `import React, { useState } from 'react';

function ToggleSwitchInput() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex gap-8 items-center">
        <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle1(!toggle1)}>
          <div className={\`relative w-11 h-6 rounded-full transition-colors \${toggle1 ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-600 group-hover:bg-slate-300'}\`}>
            <div className={\`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 \${toggle1 ? 'left-[calc(100%-1.25rem)]' : 'left-1'}\`}></div>
          </div>
          <span className="text-sm font-medium">기본</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle2(!toggle2)}>
          <div className={\`relative w-11 h-6 rounded-full transition-colors \${toggle2 ? 'bg-indigo-500' : 'bg-slate-200'}\`}>
            <div className={\`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 \${toggle2 ? 'translate-x-6' : 'translate-x-1'}\`}></div>
          </div>
          <span className="text-sm font-medium">선택됨</span>
        </label>
      </div>

      <div className="flex gap-8 items-center">
        <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle3(!toggle3)}>
          <div className={\`relative w-12 h-6 border-2 rounded-full transition-colors flex items-center px-1 \${toggle3 ? 'border-slate-800 dark:border-white' : 'border-slate-200 group-hover:border-slate-300'}\`}>
            <div className={\`w-2.5 h-2.5 rounded-full transition-all duration-300 \${toggle3 ? 'bg-slate-800 dark:bg-white translate-x-6' : 'bg-slate-200 translate-x-0'}\`}></div>
          </div>
          <span className="text-sm font-medium">기본</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle4(!toggle4)}>
           <div className={\`relative w-12 h-6 border-2 rounded-full transition-colors flex items-center px-1 \${toggle4 ? 'border-slate-800 dark:border-white' : 'border-slate-200'}\`}>
            <div className={\`w-2.5 h-2.5 rounded-full transition-all duration-300 \${toggle4 ? 'bg-slate-800 dark:bg-white translate-x-6' : 'bg-slate-200 translate-x-0'}\`}></div>
          </div>
          <span className="text-sm font-medium">선택됨</span>
        </label>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4 pt-2">
  <div class="flex gap-8 items-center">
    <label class="flex items-center gap-3 cursor-pointer group toggle-label" id="t-lbl-1">
      <div class="relative w-11 h-6 rounded-full bg-slate-200 dark:bg-slate-600 transition-colors toggle-bg">
        <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 toggle-circle"></div>
      </div>
      <span class="text-sm font-medium text-slate-650 dark:text-slate-400 toggle-text">기본</span>
    </label>

    <label class="flex items-center gap-3 cursor-pointer group toggle-label active" id="t-lbl-2">
      <div class="relative w-11 h-6 rounded-full bg-indigo-500 transition-colors toggle-bg">
        <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 translate-x-6 toggle-circle"></div>
      </div>
      <span class="text-sm font-medium text-indigo-650 dark:text-indigo-400 font-bold toggle-text">선택됨</span>
    </label>
  </div>

  <div class="flex gap-8 items-center">
    <label class="flex items-center gap-3 cursor-pointer group toggle-label2" id="t-lbl-3">
      <div class="relative w-12 h-6 border-2 border-slate-200 dark:border-slate-600 rounded-full transition-colors flex items-center px-1 toggle-bg">
        <div class="w-2.5 h-2.5 rounded-full bg-slate-200 transition-all duration-300 toggle-circle"></div>
      </div>
      <span class="text-sm font-medium text-slate-650 dark:text-slate-400 toggle-text">기본</span>
    </label>

    <label class="flex items-center gap-3 cursor-pointer group toggle-label2 active" id="t-lbl-4">
      <div class="relative w-12 h-6 border-2 border-slate-800 dark:border-white rounded-full transition-colors flex items-center px-1 toggle-bg">
        <div class="w-2.5 h-2.5 rounded-full bg-slate-800 dark:bg-white translate-x-6 transition-all duration-300 toggle-circle"></div>
      </div>
      <span class="text-sm font-medium text-slate-800 dark:text-white font-bold toggle-text">선택됨</span>
    </label>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-label');
  toggles.forEach(t => {
    t.addEventListener('click', () => {
      const bg = t.querySelector('.toggle-bg');
      const circle = t.querySelector('.toggle-circle');
      const text = t.querySelector('.toggle-text');
      const isActive = t.classList.contains('active');
      if (isActive) {
        t.classList.remove('active');
        bg.className = 'relative w-11 h-6 rounded-full bg-slate-200 dark:bg-slate-600 transition-colors toggle-bg';
        circle.className = 'absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 toggle-circle';
        text.className = 'text-sm font-medium text-slate-650 dark:text-slate-400 toggle-text';
      } else {
        t.classList.add('active');
        bg.className = 'relative w-11 h-6 rounded-full bg-indigo-500 transition-colors toggle-bg';
        circle.className = 'absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 translate-x-6 toggle-circle';
        text.className = 'text-sm font-medium text-indigo-650 dark:text-indigo-400 font-bold toggle-text';
      }
    });
  });

  const toggles2 = document.querySelectorAll('.toggle-label2');
  toggles2.forEach(t => {
    t.addEventListener('click', () => {
      const bg = t.querySelector('.toggle-bg');
      const circle = t.querySelector('.toggle-circle');
      const text = t.querySelector('.toggle-text');
      const isActive = t.classList.contains('active');
      if (isActive) {
        t.classList.remove('active');
        bg.className = 'relative w-12 h-6 border-2 border-slate-200 dark:border-slate-600 rounded-full transition-colors flex items-center px-1 toggle-bg';
        circle.className = 'w-2.5 h-2.5 rounded-full bg-slate-200 transition-all duration-300 toggle-circle';
        text.className = 'text-sm font-medium text-slate-650 dark:text-slate-400 toggle-text';
      } else {
        t.classList.add('active');
        bg.className = 'relative w-12 h-6 border-2 border-slate-800 dark:border-white rounded-full transition-colors flex items-center px-1 toggle-bg';
        circle.className = 'w-2.5 h-2.5 rounded-full bg-slate-800 dark:bg-white translate-x-6 transition-all duration-300 toggle-circle';
        text.className = 'text-sm font-medium text-slate-800 dark:text-white font-bold toggle-text';
      }
    });
  });
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>토글 스위치 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[300px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="space-y-4 pt-2">
      <div class="flex gap-8 items-center">
        <label class="flex items-center gap-3 cursor-pointer group toggle-label" id="t-lbl-1">
          <div class="relative w-11 h-6 rounded-full bg-slate-200 dark:bg-slate-600 transition-colors toggle-bg">
            <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 toggle-circle"></div>
          </div>
          <span class="text-sm font-medium text-slate-655 dark:text-slate-400 toggle-text">기본</span>
        </label>

        <label class="flex items-center gap-3 cursor-pointer group toggle-label active" id="t-lbl-2">
          <div class="relative w-11 h-6 rounded-full bg-indigo-500 transition-colors toggle-bg">
            <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 translate-x-6 toggle-circle"></div>
          </div>
          <span class="text-sm font-medium text-indigo-650 dark:text-indigo-400 font-bold toggle-text">선택됨</span>
        </label>
      </div>

      <div class="flex gap-8 items-center">
        <label class="flex items-center gap-3 cursor-pointer group toggle-label2" id="t-lbl-3">
          <div class="relative w-12 h-6 border-2 border-slate-200 dark:border-slate-600 rounded-full transition-colors flex items-center px-1 toggle-bg">
            <div class="w-2.5 h-2.5 rounded-full bg-slate-200 transition-all duration-300 toggle-circle"></div>
          </div>
          <span class="text-sm font-medium text-slate-650 dark:text-slate-400 toggle-text">기본</span>
        </label>

        <label class="flex items-center gap-3 cursor-pointer group toggle-label2 active" id="t-lbl-4">
          <div class="relative w-12 h-6 border-2 border-slate-800 dark:border-white rounded-full transition-colors flex items-center px-1 toggle-bg">
            <div class="w-2.5 h-2.5 rounded-full bg-slate-800 dark:bg-white translate-x-6 transition-all duration-300 toggle-circle"></div>
          </div>
          <span class="text-sm font-medium text-slate-800 dark:text-white font-bold toggle-text">선택됨</span>
        </label>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const toggles1 = document.querySelectorAll('.toggle-label');
      toggles1.forEach(t => {
        t.addEventListener('click', () => {
          const bg = t.querySelector('.toggle-bg');
          const circle = t.querySelector('.toggle-circle');
          const text = t.querySelector('.toggle-text');
          const isActive = t.classList.contains('active');
          if (isActive) {
            t.classList.remove('active');
            bg.className = 'relative w-11 h-6 rounded-full bg-slate-200 dark:bg-slate-600 transition-colors toggle-bg';
            circle.className = 'absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 toggle-circle';
            text.className = 'text-sm font-medium text-slate-650 dark:text-slate-400 toggle-text';
          } else {
            t.classList.add('active');
            bg.className = 'relative w-11 h-6 rounded-full bg-indigo-500 transition-colors toggle-bg';
            circle.className = 'absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 translate-x-6 toggle-circle';
            text.className = 'text-sm font-medium text-indigo-650 dark:text-indigo-400 font-bold toggle-text';
          }
        });
      });

      const toggles2 = document.querySelectorAll('.toggle-label2');
      toggles2.forEach(t => {
        t.addEventListener('click', () => {
          const bg = t.querySelector('.toggle-bg');
          const circle = t.querySelector('.toggle-circle');
          const text = t.querySelector('.toggle-text');
          const isActive = t.classList.contains('active');
          if (isActive) {
            t.classList.remove('active');
            bg.className = 'relative w-12 h-6 border-2 border-slate-200 dark:border-slate-600 rounded-full transition-colors flex items-center px-1 toggle-bg';
            circle.className = 'w-2.5 h-2.5 rounded-full bg-slate-200 transition-all duration-300 toggle-circle';
            text.className = 'text-sm font-medium text-slate-650 dark:text-slate-400 toggle-text';
          } else {
            t.classList.add('active');
            bg.className = 'relative w-12 h-6 border-2 border-slate-800 dark:border-white rounded-full transition-colors flex items-center px-1 toggle-bg';
            circle.className = 'w-2.5 h-2.5 rounded-full bg-slate-800 dark:bg-white translate-x-6 transition-all duration-300 toggle-circle';
            text.className = 'text-sm font-medium text-slate-800 dark:text-white font-bold toggle-text';
          }
        });
      });
    });
  </script>
</body>
</html>`
  },
  dropzone: {
    react: `import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

function DropzoneInput() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const dropzoneRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
      <div 
        className={\`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all \${dragActive ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 scale-[1.02]' : 'border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300'}\`}
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
        <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-slate-100 dark:bg-slate-800">
          <Upload className={\`w-6 h-6 \${dragActive ? 'text-indigo-600 animate-bounce' : 'text-indigo-500'}\`} />
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
  );
}`,
    html: `<div class="p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
  <div class="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500" id="dropzone-html">
    <input type="file" class="hidden" id="drop-file-input" multiple />
    <div class="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800" id="upload-icon-wrapper">
      <i data-lucide="upload" class="w-6 h-6 text-indigo-500" id="upload-icon"></i>
    </div>
    
    <div id="dropzone-content-default">
      <p class="text-lg font-bold text-slate-800 dark:text-white">여기로 파일을 드래그 앤 드롭하세요</p>
      <p class="text-sm text-slate-505 dark:text-slate-400 mt-1">PNG, JPG, WEBP, SVG 이미지를 지원합니다</p>
    </div>

    <div id="dropzone-file-list" class="space-y-2 w-full max-w-sm hidden">
      <p class="text-lg font-bold text-indigo-600" id="file-count-text">0개 파일 선택됨</p>
      <ul class="text-sm text-slate-500 max-h-24 overflow-y-auto custom-scrollbar text-left bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700" id="file-list-ul"></ul>
    </div>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone-html');
  const fileInput = document.getElementById('drop-file-input');
  const defaultContent = document.getElementById('dropzone-content-default');
  const fileListWrapper = document.getElementById('dropzone-file-list');
  const fileCountText = document.getElementById('file-count-text');
  const fileListUl = document.getElementById('file-list-ul');
  const uploadIcon = document.getElementById('upload-icon');

  function handleFiles(files) {
    if (files.length > 0) {
      defaultContent.classList.add('hidden');
      fileListWrapper.classList.remove('hidden');
      fileCountText.innerText = files.length + "개 파일 선택됨";
      fileListUl.innerHTML = '';
      Array.from(files).forEach(file => {
        const li = document.createElement('li');
        li.className = 'truncate';
        li.innerText = '• ' + file.name;
        fileListUl.appendChild(li);
      });
    }
  }

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', (e) => {
      if (e.target.files) handleFiles(e.target.files);
    });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.className = 'border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 scale-[1.02]';
      uploadIcon.className = 'w-6 h-6 text-indigo-600 animate-bounce';
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.className = 'border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300';
      uploadIcon.className = 'w-6 h-6 text-indigo-505';
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.className = 'border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300';
      uploadIcon.className = 'w-6 h-6 text-indigo-505';
      if (e.dataTransfer.files.length) {
        handleFiles(e.dataTransfer.files);
      }
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>드롭존 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex justify-center items-center min-h-[350px]">
  <div class="w-full max-h-full bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
    <div class="p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
      <div class="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500" id="dropzone-html">
        <input type="file" class="hidden" id="drop-file-input" multiple />
        <div class="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800" id="upload-icon-wrapper">
          <i data-lucide="upload" class="w-6 h-6 text-indigo-505 animate-none transition-colors" id="upload-icon"></i>
        </div>
        
        <div id="dropzone-content-default">
          <p class="text-lg font-bold text-slate-800 dark:text-white">여기로 파일을 드래그 앤 드롭하세요</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">PNG, JPG, WEBP, SVG 이미지를 지원합니다</p>
        </div>

        <div id="dropzone-file-list" class="space-y-2 w-full max-w-sm hidden">
          <p class="text-lg font-bold text-indigo-600" id="file-count-text">0개 파일 선택됨</p>
          <ul class="text-sm text-slate-500 max-h-24 overflow-y-auto custom-scrollbar text-left bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700" id="file-list-ul"></ul>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const dropzone = document.getElementById('dropzone-html');
      const fileInput = document.getElementById('drop-file-input');
      const defaultContent = document.getElementById('dropzone-content-default');
      const fileListWrapper = document.getElementById('dropzone-file-list');
      const fileCountText = document.getElementById('file-count-text');
      const fileListUl = document.getElementById('file-list-ul');
      const uploadIcon = document.getElementById('upload-icon');

      function handleFiles(files) {
        if (files.length > 0) {
          defaultContent.classList.add('hidden');
          fileListWrapper.classList.remove('hidden');
          fileCountText.innerText = files.length + "개 파일 선택됨";
          fileListUl.innerHTML = '';
          Array.from(files).forEach(file => {
            const li = document.createElement('li');
            li.className = 'truncate';
            li.innerText = '• ' + file.name;
            fileListUl.appendChild(li);
          });
        }
      }

      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        
        fileInput.addEventListener('change', (e) => {
          if (e.target.files) handleFiles(e.target.files);
        });

        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.className = 'border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 scale-[1.02]';
          uploadIcon.className = 'w-6 h-6 text-indigo-600 animate-bounce';
        });

        dropzone.addEventListener('dragleave', () => {
          dropzone.className = 'border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300';
          uploadIcon.className = 'w-6 h-6 text-indigo-500 animate-none';
        });

        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.className = 'border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300';
          uploadIcon.className = 'w-6 h-6 text-indigo-500 animate-none';
          if (e.dataTransfer.files.length) {
            handleFiles(e.dataTransfer.files);
          }
        });
      }
    });
  </script>
</body>
</html>`
  }
};
