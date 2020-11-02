module.exports = {
  title: '后台框架模板',

  /**
   * @type {boolean} true | false
   * @description 是否展示设置按钮
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description 是否展示tagsView格式
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
