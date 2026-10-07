// dsh-free-search 是预编译第三方插件（无 src/，只有 lib/*.js），
// 无需走本仓库的 TS 源码构建链。此配置让 tsdown 以已有产物为入口、
// 输出到一个一次性目录（不入库、不进产物），从而无副作用地通过
// workspace 扫描，避免根配置因找不到 lib/types/{index,startup}.js 而报错。
// 真正的入口始终是 lib/index.js（由 package.json 的 main/exports 声明）。
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['lib/index.js'],
  outDir: '.tsdown-nop',
  format: ['esm'],
  platform: 'node',
  target: 'es2024',
  dts: false,
  clean: true,
})
