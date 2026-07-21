import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, RotateCcw, Eye, Code, FileText } from 'lucide-react';

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
  const [isCopied, setIsCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // /template/ 경로 앞에 https://ieum.or.kr 자동 치환 처리 함수
  const processImageUrls = (code: string): string => {
    if (!code) return '';
    // /template/ 로 시작하는 href 또는 src 상대 경로를 https://ieum.or.kr 도메인 추가
    return code.replace(/(src|href)=["'](\/template\/[^"']+)["']/g, '$1="https://ieum.or.kr$2"');
  };

  // 1. 이미지 URL 자동 치환 적용
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
  }, [activeTab, processedHtmlCode]);

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

  // 이음.html 프레임워크 기반 렌더링 HTML 문서 생성 (컨텐츠 부분만 iframe 렌더링)
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

  // 클립보드 복사
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(processedHtmlCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // 초기화
  const handleResetCode = () => {
    if (window.confirm('편집한 HTML 코드를 초기화하시겠습니까?')) {
      setHtmlCode(initialHtml);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
      {/* Header Info */}
      <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/40">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Editor Control Toolbar */}
      <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            이음온라인 (ieum.or.kr)
          </span>
          <span className="text-xs text-slate-400">
            ※ /template/ 상대경로가 https://ieum.or.kr 로 자동 전환됩니다.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 xl:ml-auto justify-end w-full xl:w-auto">
          {/* Tab Buttons */}
          <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              미리보기 (Preview)
            </button>
            <button
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              HTML 소스
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetCode}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
              title="초기화"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              초기화
            </button>
            <button
              onClick={handleCopyCode}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer border ${
                isCopied
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                  : 'bg-purple-600 hover:bg-purple-700 text-white border-transparent shadow-xs'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  복사완료!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  HTML 복사
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-950/30">
        {activeTab === 'preview' ? (
          <div className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-all duration-300">
            <iframe
              ref={iframeRef}
              srcDoc={fullIframeHtml}
              title={title}
              className="w-full border-0 block min-h-[300px] transition-all duration-300"
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        ) : (
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              placeholder="HTML 소스 코드를 입력하세요..."
              className="w-full h-[450px] p-4 font-mono text-sm bg-slate-900 text-slate-100 dark:bg-slate-950 dark:text-slate-200 focus:outline-none resize-y leading-relaxed custom-scrollbar"
              spellCheck={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IeumHtmlEditor;
