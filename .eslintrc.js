module.exports = {
  // env 是 js 运行时环境，将 node 和 browser 设置为 true，表示可以使用 node 和浏览器全局变量
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  // extends 继承规则，eslint:recommended 是 eslint 内置的推荐规则，我们继承使用这个规则
  // extends: 'eslint:recommended',
  // 继承 standard 规则，standard 是一个流行的 js 规范，我们继承使用这个规则
  extends: ['standard'],
  // rules 是具体的规则设置，规则的配置为 规则名：警告等级
  rules: {
    'no-var': 'error',
  },
  // globals 是全局变量，设置为 true 表示可以被重写，设置为 false 表示不可以被重写
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // parserOptions 是解析器选项
  parserOptions: {
    // ecmaVersion 是 es 的版本，这里设置为 11，也就是 es11
    ecmaVersion: 11,
    sourceType: 'module',
  },
}
