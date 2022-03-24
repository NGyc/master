module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ecmaFeatures: {
    // lambda表达式
    arrowFunctions: true,
    // 解构赋值
    destructuring: true,
    // class
    classes: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: [
    "vue",
  ],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "accessor-pairs": 2,
    "no-console": "off",
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
  },
}
