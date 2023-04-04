import basicConfig, { name, file } from './rollup.config'
export default {
  ...basicConfig,
  output: {
    name: 'bricksComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue', // 设置vue的全局变量名称为Vue
      'lodash-es': '_', // 设置lodash-es的全局变量名称为_
    },
    exports: 'named', // umd生成的全局变量名称是bricksComponents
  }
}