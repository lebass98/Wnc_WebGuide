import ShowcaseWrapper from '../../components/ui/ShowcaseWrapper';
import React, { useState } from 'react';
import {
  ChevronDown,
  Plus,
  Minus,
  Info,
  ChevronRight } from 'lucide-react';
import codeSnippets from '../../data/FAQSnippets.json';



const FAQ: React.FC = () => {
  const [openFaq1, setOpenFaq1] = useState<number | null>(0);
  const [openFaq2, setOpenFaq2] = useState<number | null>(0);

  const faqData1 = [
    {
      question: "무료 업데이트가 지원되나요?",
      answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다."
    },
    {
      question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?",
      answer: "네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경하거나 구성을 추가할 수 있습니다."
    },
    {
      question: "\"무제한 프로젝트\"는 무슨 뜻인가요?",
      answer: "무제한 프로젝트란 본 서비스를 활용하여 진행할 수 있는 웹, 앱 등의 프로젝트 생성 개수에 어떠한 제한도 두지 않는다는 것을 의미합니다. 하나의 라이선스로 원하는 만큼 프로젝트를 구축할 수 있습니다."
    }
  ];

  const faqData2 = [
    {
      question: "무료 업데이트가 지원되나요?",
      answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다."
    },
    {
      question: "어떤 라이선스가 제게 적합한가요?",
      answer: "스타트업이나 소규모 팀인 경우 스탠다드 라이선스가 적합하며, 다수의 프로젝트와 여러 명의 협업 개발자가 있는 대규모 에이전시나 엔터프라이즈의 경우 팀 혹은 엔터프라이즈 라이선스를 권장합니다."
    },
    {
      question: "가격 정책에 언급된 \"시트(Seats)\"는 무엇인가요?",
      answer: "시트(Seats)는 대시보드 관리자 페이지에 접근하거나 프로젝트 개발에 직접 참여하는 개발자 혹은 관리자 계정의 수를 의미합니다."
    },
    {
      question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?",
      answer: "네, 완전히 가능합니다. 제공되는 코드를 바탕으로 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다."
    },
    {
      question: "\"무제한 프로젝트\"는 무슨 뜻인가요?",
      answer: "프로젝트 진행 개수에 한도를 두지 않는다는 의미입니다. 단일 라이선스로 다수의 서비스 애플리케이션에 적용하실 수 있습니다."
    },
    {
      question: "더 상위 요금제로 업그레이드할 수 있나요?",
      answer: "언제든지 고객 지원 버튼을 통해 요금제 업그레이드를 신청하실 수 있으며, 결제 금액은 사용한 날짜를 제외하고 일할 계산되어 청구됩니다."
    },
    {
      question: "다크 모드와 라이트 모드를 지원하나요?",
      answer: "예, 제공되는 컴포넌트는 기본적으로 다크/라이트 테마에 완벽하게 대응하도록 설계되었으며, 시스템 설정에 따라 적절한 테마가 자동으로 적용됩니다."
    }
  ];

  const faqData3 = [
    {
      question: "무료 업데이트가 지원되나요?",
      answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 기능 개선 사항을 주기적으로 고객님께 안내해 드립니다."
    },
    {
      question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?",
      answer: "네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경할 수 있습니다."
    },
    {
      question: "어떤 라이선스가 제게 적합한가요?",
      answer: "개인 개발자라면 기본 라이선스를, 기업 고객이라면 확장 라이선스를 추천해 드립니다. 자세한 비교 내용은 결제 페이지에서 확인하세요."
    },
    {
      question: "\"무제한 프로젝트\"는 무슨 뜻인가요?",
      answer: "무제한 프로젝트란 본 플랫폼 내에서 생성하거나 운영할 워크스페이스나 애플리케이션 프로젝트 개수에 상한제가 없음을 의미합니다. 자유롭게 다양한 서비스 모델을 개발하고 런칭할 수 있습니다."
    },
    {
      question: "가격 정책에 언급된 \"시트(Seats)\"는 무엇인가요?",
      answer: "시트(Seats)는 서비스를 구독하여 이용할 수 있는 인증된 활성 사용자 혹은 팀원의 최대 허용 인원을 뜻합니다."
    }
  ];

  // Code snippets data map
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            자주 묻는 질문 (FAQ)
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>페이지</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">자주 묻는 질문</span>
          </div>
        </div>
      </div>

      {/* FAQ Sections Grid */}
      <div className="grid grid-cols-1 gap-6">

        {/* FAQ Variation 1 */}
        <ShowcaseWrapper
          title="FAQ 유형 1"
          description="기본형 보더 아코디언 스타일 레이아웃입니다."
          snippet={codeSnippets.faq1}
        >
          <div className="space-y-4 w-full max-h-full mx-auto p-6">
            {faqData1.map((item, idx) => (
              <div key={idx} className="border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq1(openFaq1 === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300 ${openFaq1 === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq1 === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-slate-50 dark:border-slate-800">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseWrapper>

        {/* FAQ Variation 2 */}
        <ShowcaseWrapper
          title="FAQ 유형 2"
          description="배경색이 반전 스위칭되는 미려한 아코디언 스타일입니다."
          snippet={codeSnippets.faq2}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full max-h-full mx-auto">
            <div className="space-y-4">
              {faqData2.slice(0, 3).map((item, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq2(openFaq2 === idx ? null : idx)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openFaq2 === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}`}
                  >
                    <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                    {openFaq2 === idx ? (
                      <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    )}
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaq2 === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className={`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${openFaq2 === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {faqData2.slice(3).map((item, idx) => {
                const realIdx = idx + 3;
                return (
                  <div key={realIdx} className="rounded-lg overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq2(openFaq2 === realIdx ? null : realIdx)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openFaq2 === realIdx ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}`}
                    >
                      <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                      {openFaq2 === realIdx ? (
                        <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      )}
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFaq2 === realIdx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className={`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${openFaq2 === realIdx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}`}>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ShowcaseWrapper>

        {/* FAQ Variation 3 */}
        <ShowcaseWrapper
          title="FAQ 유형 3"
          description="아이콘을 결합하여 가벼운 정보 전달력을 높인 플랫 리스트입니다."
          snippet={codeSnippets.faq3}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full max-h-full mx-auto">
            {faqData3.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 dark:text-white leading-tight">{item.question}</h4>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.answer}
                  </p>
                  {idx < 2 && (
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      추가적인 안내사항이 있다면 고객 지원 문서나 이용약관의 관련 섹션을 통해 상세히 확인해보실 것을 권장합니다.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ShowcaseWrapper>

      </div>{/* end grid */}
    </div>
  );
};

export default FAQ;
