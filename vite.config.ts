import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import purgecss from 'vite-plugin-purgecss'

// https://vite.dev/config/
export default defineConfig({
  base: '/react_dashboard_01/',
  plugins: [
    react(),
    tailwindcss(),
    (purgecss({
      content: [
        './index.html',
        './src/**/*.html',
        './src/**/*.tsx',
        './src/**/*.ts'
      ],
      safelist: {
        standard: ['html', 'body', 'dark'],
        deep: [/dark$/] // 다크모드 대응 스타일 클래스 탈락 예방
      }
    }) as any)
  ],
})
