import vue from '@vitejs/plugin-vue2'
import { defineConfig, loadEnv } from 'vite'
import * as path from 'path'
export default ({ mode }) => {
  const { VITE_PORT, VITE_OUTPUT_DIR } = loadEnv(mode, process.cwd())
  return defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/projectTemplate' : './',
    // 需要用到的插件数组
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: VITE_PORT,
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true
    },
    build: {
      outDir: VITE_OUTPUT_DIR,
      brotliSize: false, // 关闭 brotli 压缩大小报告，可提升构建速度
      chunkSizeWarningLimit: 2000 // chunk 大小警告的限制（以 kbs 为单位）
    }
  })
}
