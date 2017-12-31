new Vue({
  el: '#app',

  data () {
    return {
      myRepos: [
        {
          title: 'line-deco-converter',
          description: 'converts text to LINE deco and vice versa',
        },
        {
          title: 'che-tsumi',
          description: 'cherry-pick + chatsumi(茶摘み)',
        },
        {
          title: 'e2e-boilerplate',
          description: 'A boilerplate for E2E(End-To-End) tests with Selenium docker containers',
        },
        {
          title: 'run-snippets',
          description: 'Chrome and Firefox extension to run arbitrarily snippets',
        },
        {
          title: 'vue-webpack-boilerplate',
          description: 'A webpack boilerplate with vue-loader,axios and vue-router',
          url: 'https://re-fort.net/vue-webpack-boilerplate/#/',
        },
        {
          title: 'darkroom-tesseract',
          description: 'DarkroomJS + Tesseract.js',
          url: 'https://re-fort.net/darkroom-tesseract/',
        },
        {
          title: 'NgzkBlogArchive',
          description: '乃木坂46卒業メンバーのブログを保管します。◢',
          url: 'https://re-fort.net/NgzkBlogArchive/#/',
        },
        {
          title: 'TV-kko',
          description: 'Search TV programs by the casts',
        },
        {
          title: 'amazon-dash-ton-tsu',
          description: 'Send a message using Line Notify when pressing amazon dash buttons',
        },
        {
          title: 'M20',
          description: 'Sakamoto Maaya The 20th Discography',
          url: 'https://re-fort.net/M20/',
        },
        {
          title: 'iLis',
          description: 'iTunes Listening',
          url: 'https://re-fort.net/iLis/',
        },
      ],
      contributionRepos: [
        {
          author: 'vuejs',
          title: 'vuejs.org',
          description: '📃 The official documentation site for Vue.js',
          url: 'https://vuejs.org',
        },
        {
          author: 'vuejs',
          title: 'vue-test-utils',
          description: 'Utilities for testing Vue components',
          url: 'https://vue-test-utils.vuejs.org',
        },
        {
          author: 'SimulatedGREG',
          title: 'electron-vue',
          description: 'An Electron & Vue.js quick start boilerplate with vue-cli scaffolding, common Vue plugins, electron-packager/electron-builder, unit/e2e testing, vue-devtools, and webpack',
          url: 'https://simulatedgreg.gitbooks.io/electron-vue/content/',
        },
        {
          author: 'webpack',
          title: 'webpack.js.org',
          description: 'New repository for webpack documentation and more!',
          url: 'https://webpack.js.org/',
        },
        {
          author: 'vuejs',
          title: 'jp.vuejs.org',
          description: '🇯🇵 Japanese translation for vuejs.org',
          url: 'https://jp.vuejs.org/',
        },
      ],
      isActive: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    },

    getGithubUrl(title, author = 're-fort') {
      return `https://github.com/${author}/${title}`
    }
  },
})
