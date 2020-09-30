module.exports = {
  title: 'IoT Devices',
  description: 'Course for IoT Devices',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://toledo.vives.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [['/', 'Home'], ['/mbed/', 'mbed'], ['/ethernet/', 'Ethernet']], 
    repo: 'https://github.com/pcordemans/iot-devices',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
