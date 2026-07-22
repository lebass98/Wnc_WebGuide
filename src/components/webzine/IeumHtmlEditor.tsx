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
  const [iframeHeight, setIframeHeight] = useState('495px');
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

  // iframe 동적 높이 정확 산출 함수
  const updateIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const doc = iframe.contentDocument;
      // 외부 레이아웃 요소들의 영향을 피하기 위해 실제 웹진 감싸는 .webzine_wrap 타겟팅
      const container = (doc.querySelector('.webzine_wrap') || doc.querySelector('.contents')) as HTMLElement;

      if (container) {
        const rect = container.getBoundingClientRect();
        const height = Math.max(rect.height, container.offsetHeight, container.scrollHeight);
        // 불필요한 하단 여백 제거를 위해 보정치를 100px -> 24px로 조절
        const finalHeight = Math.max(height + 24, 150);
        setIframeHeight(`${finalHeight}px`);
      } else {
        const body = doc.body;
        const html = doc.documentElement;
        if (body && html) {
          const height = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight);
          const finalHeight = Math.max(height + 24, 150);
          setIframeHeight(`${finalHeight}px`);
        }
      }
    }
  };

  // iframe 로딩 및 리사이즈 모니터링
  useEffect(() => {
    if (activeTab !== 'preview') return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    let resizeObserver: any = null;

    const handleLoad = () => {
      updateIframeHeight();

      const iframeWindow = iframe.contentWindow as any;
      const iframeDoc = iframe.contentDocument;

      if (iframeDoc && iframeDoc.body && iframeWindow) {
        try {
          if (iframeWindow.ResizeObserver) {
            resizeObserver = new iframeWindow.ResizeObserver(() => {
              updateIframeHeight();
            });
            // iframeDoc.documentElement 전체 대신, 내부 문서 높이에만 영향받는 .webzine_wrap 엘리먼트를 감시하여 무한 루프 차단
            const targetContainer = iframeDoc.querySelector('.webzine_wrap');
            if (targetContainer) {
              resizeObserver.observe(targetContainer);
            } else {
              resizeObserver.observe(iframeDoc.body);
            }
          }
        } catch (e) {
          console.warn('ResizeObserver error in iframe: ', e);
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

    const timer1 = setTimeout(updateIframeHeight, 500);
    const timer2 = setTimeout(updateIframeHeight, 1500);

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
      /* 외부 레이아웃의 고정 높이 및 여백 영향 제거 */
      body, .contents, .sub_right, .sub_con, .view_container, .sub_each, .editor_view, .webzine_wrap, .webzine_wrap > .cont {
        min-height: 0 !important;
        height: auto !important;
        float: none !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
      }
      body { background: #ffffff; margin: 0; padding: 16px !important; }
      .contents { max-width: 100%; }
    </style>
  `;

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
                          <!-- 컨텐츠 시작 -->
                          ${processedHtmlCode}
                          <!-- 컨텐츠 끝 -->
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
    if (window.confirm('입력한 코드를 초기값으로 복원하시겠습니까?')) {
      setHtmlCode(initialHtml);
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full font-sans">
      {/* 1. Header Toolbar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 p-4 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl dark:border-slate-850">
        <div>
          <h3 className="text-base text-[20px] font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 xl:ml-auto justify-end w-full xl:w-auto">
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
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">복사 완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>복사하기</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {activeTab === 'html' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">복사 완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>복사하기</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span>초기화</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Content Pane Area */}
      <div
        className={`overflow-hidden rounded-2xl bg-white dark:bg-[#1A222C] dark:border-slate-800 transition-[max-width,background-color] duration-200 shadow-[0_20px_27px_0_rgba(0,0,0,0.02)] ${activeTab === 'preview'
            ? 'h-auto min-h-0'
            : 'h-[calc(100vh-280px)] min-h-[500px]'
          } ${activeTab === 'preview' && device === 'mobile'
            ? 'max-w-[375px] mx-auto w-full'
            : activeTab === 'preview' && device === 'tablet'
              ? 'max-w-[768px] mx-auto w-full'
              : 'w-full'
          }`}
        style={activeTab === 'preview' ? { height: `calc(${iframeHeight} + 16px)` } : undefined}
      >
        {activeTab === 'preview' ? (
          <div className="w-full h-auto bg-slate-50 dark:bg-slate-950 p-4">
            <iframe
              ref={iframeRef}
              onLoad={updateIframeHeight}
              srcDoc={fullIframeHtml}
              title={title}
              className="w-full rounded-xl dark:border-slate-800 block"
              style={{ height: iframeHeight, overflow: 'hidden' }}
              scrolling="no"
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        ) : (
          <div className="w-full h-full p-4 bg-slate-900">
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              className="w-full h-full bg-transparent text-slate-300 font-mono text-xs leading-relaxed outline-none resize-none custom-scrollbar"
              placeholder="이곳에 HTML 소스코드를 입력하세요..."
              spellCheck={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IeumHtmlEditor;
