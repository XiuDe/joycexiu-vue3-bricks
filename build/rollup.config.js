import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2' // 0.29.0 
import nodeResolve from 'rollup-plugin-node-resolve' // 处理第三方node_modules模块

import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`

const overrides = { // 覆盖tsconfig.json中的相应属性
    compilerOptions: {
        declaration: true, // 生成.d.ts文件，插件使用者有提示
    },
    exclude: [
        "node_modules",
        "src/App.vue",
        "src/main.ts"
    ]
}

export { name, file }
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' }),
  ],
  external: ['vue', 'lodash-es'] // 数组写法
//   external: (id) => {
//       return /^vue/.test(id) // 函数写法 true要省略的打包的第三方库
//   }
}