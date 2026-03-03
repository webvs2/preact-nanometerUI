import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'preact-nanometerUI',
  description: '基于 Preact.js 的轻量化 UI 框架，为嵌入式界面和小型网站设计',
  head: [
    ['meta', { name: 'theme-color', content: '#9333EA' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/components/'
      },
      {
        text: '文档',
        link: '/docs/'
      }
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button 按钮',
              link: '/components/button'
            },
            {
              text: 'Input 输入框',
              link: '/components/input'
            },
            {
              text: 'Select 选择器',
              link: '/components/select'
            },
            {
              text: 'Radio 单选框',
              link: '/components/radio'
            },
            {
              text: 'Card 卡片',
              link: '/components/card'
            },
            {
              text: 'Badge 徽章',
              link: '/components/badge'
            }
          ]
        }
      ],
      '/docs/': [
        {
          text: '使用指南',
          items: [
            {
              text: '快速开始',
              link: '/docs/quick-start'
            },
            {
              text: '安装',
              link: '/docs/installation'
            },
            {
              text: '主题定制',
              link: '/docs/theme'
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/'
      }
    ]
  }
})