import React, { useState, useRef } from 'react';
import { Copy, RotateCcw, Check, Monitor, Tablet, Smartphone } from 'lucide-react';

interface ArteHtmlEditorProps {
  initialHtml: string;
}

const ArteHtmlEditor: React.FC<ArteHtmlEditorProps> = ({ initialHtml }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'html'>('preview');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [isCopied, setIsCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // CSS and Scripts baseline from test.html
  const cssLinks = `
    <link rel="stylesheet" href="https://arte365.kr/wp-content/themes/arte365_v2019/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://arte365.kr/wp-content/themes/arte365_v2019/css/reset.css">
    <link rel="stylesheet" href="https://arte365.kr/wp-content/themes/arte365_v2019/css/animate.css">
    <link rel="stylesheet" href="https://arte365.kr/wp-content/themes/arte365_v2019/css/swiper.min.css">
    <link rel="stylesheet" href="https://arte365.kr/wp-content/themes/arte365_v2019/css/common.css">
    <link rel="stylesheet" href="https://arte365.kr/wp-content/themes/arte365_v2019/css/n-style.css?asdfi20200716">
    <link rel="stylesheet" href="https://arte365.kr/wp-content/themes/arte365_v2019/css/print.css" type="text/css" media="print">
    <link rel='stylesheet' id='cptr-css-css' href='https://arte365.kr/wp-content/plugins/custom-post-types-relationships-cptr/css/cptr.css?ver=2.5.1' type='text/css' media='all' />
    <link rel='stylesheet' id='wp-block-library-css' href='https://arte365.kr/wp-includes/css/dist/block-library/style.min.css?ver=5.2.1' type='text/css' media='all' />
    <link rel='stylesheet' id='kadence-blocks-style-css-css' href='https://arte365.kr/wp-content/plugins/kadence-blocks/dist/blocks.style.build.css?ver=1.5.8' type='text/css' media='all' />
    <link rel='stylesheet' id='contact-form-7-css' href='https://arte365.kr/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.1.3' type='text/css' media='all' />
    <link rel='stylesheet' id='wordpress-popular-posts-css-css' href='https://arte365.kr/wp-content/plugins/wordpress-popular-posts/public/css/wpp.css?ver=4.2.2' type='text/css' media='all' />
    <link rel='stylesheet' id='c4wp-public-css' href='https://arte365.kr/wp-content/plugins/wp-captcha//assets/css/c4wp-public.css?ver=5.2.1' type='text/css' media='all' />
    <link rel='stylesheet' id='ivory-search-styles-css' href='https://arte365.kr/wp-content/plugins/add-search-to-menu/public/css/ivory-search.min.css?ver=4.6.4' type='text/css' media='all' />
    <link rel='stylesheet' id='style-arte365-style-css' href='https://arte365.kr/wp-content/themes/arte365_v2019/css/desktop.css?ver=5.2.1' type='text/css' media='all' />
    <link rel='stylesheet' id='style-slick-css' href='https://arte365.kr/wp-content/themes/arte365_v2019/lib/slick/slick.css?ver=5.2.1' type='text/css' media='all' />
    <link rel='stylesheet' id='style-slick-theme-css' href='https://arte365.kr/wp-content/themes/arte365_v2019/lib/slick/slick-theme.css?ver=5.2.1' type='text/css' media='all' />
    <link rel='stylesheet' id='kboard-comments-skin-default-css' href='https://arte365.kr/wp-content/plugins/kboard-comments/skin/default/style.css?ver=5.2' type='text/css' media='all' />
    <link rel='stylesheet' id='kboard-editor-media-css' href='https://arte365.kr/wp-content/plugins/kboard/template/css/editor_media.css?ver=6.0' type='text/css' media='all' />
    <link rel='stylesheet' id='kboard-skin-reader_suggestion-css' href='https://arte365.kr/wp-content/plugins/kboard/skin/reader_suggestion/style.css?ver=6.0' type='text/css' media='all' />
    <style>
        div.postall_w {
            max-width: 100%;
            padding: 20px;
        }
        body {
            background: #fff;
            margin: 0;
            padding: 0;
        }
    </style>
  `;

  const scriptCode = `
    <script>
      document.addEventListener("DOMContentLoaded", function () {
          var images = document.querySelectorAll('img[src^="/wp-content/uploads"]');
          images.forEach(function (img) {
              var currentSrc = img.getAttribute('src');
              img.src = 'https://arte365.kr' + currentSrc;
          });
          var links = document.querySelectorAll('a[href^="/wp-content/uploads"]');
          links.forEach(function (link) {
              var currentHref = link.getAttribute('href');
              link.href = 'https://arte365.kr' + currentHref;
          });
      });
    </script>
  `;

  const generateSrcDoc = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinks}
      </head>
      <body>
        <div class="postall_w">
          ${htmlCode}
        </div>
        ${scriptCode}
      </body>
      </html>
    `;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode).then(() => {
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
      {/* 1. Header Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-850 shadow-sm">
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
          {/* Device Simulators (Only in Preview Tab) */}
          {activeTab === 'preview' && (
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
          )}

          {/* Action buttons (Only in HTML Tab) */}
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

      {/* 2. Content Pane Area */}
      <div
        className={`overflow-hidden rounded-2xl bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 shadow-sm h-[calc(100vh-280px)] min-h-[500px] transition-all duration-300 ${activeTab === 'preview' && device === 'mobile' ? 'max-w-[375px] mx-auto w-full' : activeTab === 'preview' && device === 'tablet' ? 'max-w-[768px] mx-auto w-full' : 'w-full'}`}
      >
        {activeTab === 'preview' ? (
          /* iframe Sandbox Preview Mode */
          <div className="w-full h-full bg-slate-50 dark:bg-slate-950 p-2">
            <iframe
              ref={iframeRef}
              srcDoc={generateSrcDoc()}
              title="Arte Preview Content"
              className="w-full h-full bg-white rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 block"
              sandbox="allow-scripts"
            />
          </div>
        ) : (
          /* Raw HTML Source Code Editor Mode */
          <div className="w-full h-full p-4 bg-slate-900">
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              className="w-full h-full bg-transparent text-slate-300 font-mono text-sm leading-relaxed outline-none resize-none custom-scrollbar"
              placeholder="이곳에 워드프레스에서 복사한 HTML 소스코드를 붙여넣으세요..."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArteHtmlEditor;
