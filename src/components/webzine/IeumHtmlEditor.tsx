import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, RotateCcw, Monitor, Tablet, Smartphone } from 'lucide-react';

interface IeumHtmlEditorProps {
  title?: string;
  description?: string;
  initialHtml?: string;
}

const IeumHtmlEditor: React.FC<IeumHtmlEditorProps> = ({
  title = '이음 HTML 템플릿 에디터',
  description = 'HTML 소스를 편집하고 이음온라인 스타일로 미리보기를 확인할 수 있습니다.',
  initialHtml = '',
}) => {
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [activeTab, setActiveTab] = useState<'preview' | 'html'>('preview');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isCopied, setIsCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // /template/ 경로 앞에 https://ieum.or.kr 자동 치환 처리 함수
  const processImageUrls = (code: string): string => {
    if (!code) return '';
    return code.replace(/(src|href)=["'](\/template\/[^"']+)["']/g, '$1="https://ieum.or.kr$2"');
  };

  const processedHtmlCode = processImageUrls(htmlCode);

  useEffect(() => {
    setHtmlCode(initialHtml);
  }, [initialHtml]);

  // iframe 동적 높이 조절
  useEffect(() => {
    if (activeTab !== 'preview') return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    let resizeObserver: ResizeObserver | null = null;

    const updateIframeHeight = () => {
      try {
        if (iframe.contentDocument && iframe.contentDocument.body) {
          const body = iframe.contentDocument.body;
          const html = iframe.contentDocument.documentElement;

          const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
          );

          if (height > 0) {
            iframe.style.height = `${height + 30}px`;
          }
        }
      } catch (err) {
        console.error('Failed to calculate iframe height:', err);
      }
    };

    const handleLoad = () => {
      updateIframeHeight();

      const iframeDoc = iframe.contentDocument;
      if (iframeDoc && iframeDoc.body) {
        if (window.ResizeObserver) {
          resizeObserver = new ResizeObserver(() => {
            updateIframeHeight();
          });
          resizeObserver.observe(iframeDoc.body);
        }

        const images = iframeDoc.querySelectorAll('img');
        images.forEach((img) => {
          if (img.complete) {
            updateIframeHeight();
          } else {
            img.addEventListener('load', updateIframeHeight);
            img.addEventListener('error', updateIframeHeight);
          }
        });
      }
    };

    iframe.addEventListener('load', handleLoad);

    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      handleLoad();
    }

    const timer1 = setTimeout(updateIframeHeight, 800);
    const timer2 = setTimeout(updateIframeHeight, 2000);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [activeTab, processedHtmlCode, device]);

  // 이음 온라인 baseline CSS 링크
  const ieumCssLinks = `
    <link rel="stylesheet" href="https://ieum.or.kr/template/cms/user/css/notosans.css">
    <link rel="stylesheet" href="https://ieum.or.kr/template/cms/user/css/nanumsquare.css">
    <link rel="stylesheet" href="https://ieum.or.kr/template/cms/user/css/NanumBarunGothic.css">
    <link rel="stylesheet" href="https://ieum.or.kr/template/cms/user/css/BMDOHYEON.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/reset.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/board.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/common.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/comm_respond.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/sub.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/sub_respond.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/animate.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/print.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/slick.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/template/cms/user/css/slick-theme.css">
    <link rel="stylesheet" type="text/css" href="https://ieum.or.kr/inc/user/wnc.css">
    <link rel="stylesheet" href="https://ieum.or.kr/template/cms/user/css/main.css" type="text/css">
    <link rel="stylesheet" href="https://ieum.or.kr/template/cms/user/css/main_respond.css" type="text/css">
    <link rel="stylesheet" href="https://ieum.or.kr/template/cms/user/css/swiper.css">
    <style>
      ul, li { list-style: none; }
      li::marker { display: none; content: ""; }
      body { background: #ffffff; margin: 0; padding: 15px; }
      .contents { max-width: 100%; }
    </style>
  `;

  // 이음.html 본문 부분만 렌더링하는 iframe 생성
  const fullIframeHtml = `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${ieumCssLinks}
      </head>
      <body>
        <div class="contents">
          <article class="sub_right col2 renewal-view">
            <section class="sub_con">
              <div class="container view_container web">
                <div class="sub_each">
                  <div class="editor_view">
                    <div class="cont">
                      <div class="webzine_wrap">
                        <div class="cont">
                          <!-- 컨텐츠 들어가는 부분 시작 -->
                          ${processedHtmlCode}
                          <!-- 컨텐츠 들어가는 부분 끝 -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </body>
    </html>
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(processedHtmlCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleReset = () => {
    if (window.confirm("입력한 코드를 초기값으로 복원하시겠습니까?")) {
      setHtmlCode(initialHtml);
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* 1. Header Toolbar (ArteHtmlEditor와 동일 스타일) */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 p-4 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl dark:border-slate-850">
        {/* Title and Description */}
        <div>
          <h3 className="text-base text-[20px] font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        {/* Right side controls */}
        <div className="flex flex-wrap items-center gap-4 xl:ml-auto justify-end w-full xl:w-auto">
          {/* Toggle Tab Buttons: Preview / HTML Source */}
          <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              미리보기
            </button>
            <button
              onClick={() => setActiveTab('html')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'html' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              HTML 소스
            </button>
          </div>

          {/* Toolbar Controls based on active tab */}
          <div className="flex items-center gap-4 ml-auto">
            {activeTab === 'preview' && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setDevice('desktop')}
                    className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'desktop' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                    title="데스크톱 뷰"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('tablet')}
                    className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'tablet' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                    title="태블릿 뷰"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('mobile')}
                    className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'mobile' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                    title="모바일 뷰"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? '복사됨' : '소소 복사'}</span>
                </button>
              </div>
            )}

            {activeTab === 'html' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>초기화</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? '복사됨' : '소소 복사'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Content View Area */}
      {activeTab === 'preview' ? (
        <div className="flex justify-center w-full bg-slate-100/60 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div
            className={`transition-all duration-300 w-full bg-white rounded-xl shadow-sm overflow-hidden ${
              device === 'mobile' ? 'max-w-[375px]' : device === 'tablet' ? 'max-w-[768px]' : 'w-full'
            }`}
          >
            <iframe
              ref={iframeRef}
              srcDoc={fullIframeHtml}
              title={title}
              className="w-full border-0 block min-h-[300px]"
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            className="w-full h-[500px] p-4 font-mono text-xs bg-[#1A222C] text-slate-200 focus:outline-none resize-y leading-relaxed custom-scrollbar"
            placeholder="HTML 소스를 입력하세요..."
            spellCheck={false}
          />
        </div>
      )}
    </div>
  );
};

export default IeumHtmlEditor;
