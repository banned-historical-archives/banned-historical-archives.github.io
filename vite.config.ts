import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function txt(regexp: RegExp) {
  return {
    name: 'txt',
    transform(src: string, id: string) {
      if (regexp.test(id)) {
        return {
          code: `export const txt = \`${src.replace(/`/g, '\\`')}\`;`,
          map: null // provide source map if available
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), txt(/\.md$/)]
})
