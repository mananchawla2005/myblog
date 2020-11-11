module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Dev Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Get notified about latest dev updates and projects!',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' }
    ],
    sidebar: [
      '/blog/1_Vuepress'
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'social-share',
    {
       networks: ['twitter', 'facebook', 'reddit', 'telegram']
    },
    'vuepress-plugin-smooth-scroll'
  ],
  dest: 'public'
}
