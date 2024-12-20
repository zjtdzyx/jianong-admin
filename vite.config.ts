import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import dayjs from 'dayjs'
import { defineConfig, loadEnv } from 'vite'
import checker from 'vite-plugin-checker'
import pkg from './package.json'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())

  // 全局 scss 资源
  const scssResources: string[] = []
  fs.readdirSync('src/assets/styles/resources').forEach((dirname) => {
    if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
      scssResources.push(
        `@use "/src/assets/styles/resources/${dirname}" as *;`,
      )
    }
  })

  return {
    // 开发服务器选项 https://cn.vitejs.dev/config/server-options
    'server': {
      open: true,
      port: 9000,
      proxy: {
        '/proxy': {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
          rewrite: path => path.replace(/\/proxy/, ''),
        },
      },
    },
    'base': mode === 'production' ? '/admin-vue3/' : '/',
    'plugins': [
      createVitePlugins(mode, command === 'build'),
      checker({ typescript: false }), // 添加这行来忽略 TypeScript 类型检查
    ],
    'esbuild': {
      loader: 'ts',
      logLevel: 'silent', // 禁止报错信息
    },
    'define': {
      __BUILD_INFO__: JSON.stringify({
        pkg: {
          name: pkg.name,
          version: pkg.version,
        },
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }),
    },
    'resolve': {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'src/types'),
      },
    },
    'css': {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: scssResources.join(''),
        },
      },
    },
    'simple-git-hooks': {
      'pre-commit': 'npm run lint',
      'pre-push': 'npm run test',
    },
  }
})
