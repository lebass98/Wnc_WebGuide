import React, { useState, useRef } from 'react';
import { Copy, RotateCcw, Check } from 'lucide-react';

interface ArteHtmlEditorProps {
  initialHtml: string;
}

const ArteHtmlEditor: React.FC<ArteHtmlEditorProps> = ({ initialHtml }) => {
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

  // Function to build full HTML document inside Iframe
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
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-[calc(100vh-280px)] min-h-[500px]">
      {/* Left Column: HTML Text Editor */}
      <div className="flex flex-col bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        {/* Editor Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2">HTML Source Editor</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
              title="코드 복사하기"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
              title="초기값으로 리셋"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Text Area */}
        <div className="flex-1 p-4 bg-slate-900">
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            className="w-full h-full bg-transparent text-slate-300 font-mono text-sm leading-relaxed outline-none resize-none custom-scrollbar"
            placeholder="이곳에 워드프레스에서 복사한 HTML 소스코드를 붙여넣으세요..."
          />
        </div>
      </div>

      {/* Right Column: Live Iframe Preview */}
      <div className="flex flex-col bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        {/* Preview Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Live Preview (Arte Style)</span>
          </div>
          <div className="text-[11px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            격리 모드 (Iframe)
          </div>
        </div>

        {/* Iframe View */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2">
          <iframe
            ref={iframeRef}
            srcDoc={generateSrcDoc()}
            className="w-full h-full bg-white rounded-lg shadow-inner border border-slate-200 dark:border-slate-800"
            title="Arte Preview Sandbox"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default ArteHtmlEditor;
