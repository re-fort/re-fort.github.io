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
      blogs: [
        {
          id: 'e42cbb67d0a5c892e289',
          date: '2018-09-20',
          title: 'React Profilerを試してみる',
          body: '<h2 id="-">要旨</h2><p>React v16.5から入った<a href="https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html">React Profiler</a>をちょろっと試してみました。</p><h2 id="-">ざっくりとした説明</h2><ul><li>React DevToolsにProfilerタブが追加された</li><li>プロファイリングを開始すると、コンポーネントがレンダリングされるたびに情報を収集する</li><li>プロファイリングを停止すると、コミットごとにレンダリング時間、props、stateを表示してくれる</li><li>interactionとコミットを紐付けて可視化することもできる</li></ul><h2 id="-">前提条件</h2><ul><li>React v16.5.0+</li><li>React Developer Tools v3.3.2+</li></ul><h2 id="-">動作</h2><p><a href="https://k9983k7mz5.codesandbox.io/">デモ</a></p><ul><li>同期カウンター</li><li>非同期カウンター</li><li>レンダリング速度が遅くなるとき</li></ul><p>の3つの例を確認できるデモを作ってみました。</p><h2 id="-">同期カウンター/非同期カウンター</h2><p>プロファイリングしながら、同期カウンター/非同期カウンターをそれぞれ押してみます。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/13598b10-f040-3902-ca38-da35695ea188.png" alt="Screen_Shot_2018-09-20_at_18_36_25.png"><img src="https://qiita-image-store.s3.amazonaws.com/0/98379/02c4cacb-4b5b-fb82-e7c1-53eb4e05235a.png" alt="Screen_Shot_2018-09-20_at_18_36_38.png"></p><p>2つのコミットが記録されてますね！</p><p>interactionを確認してみると、<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/3a898302-02d1-30a7-f36a-3f75939cec11.png" alt="Screen_Shot_2018-09-20_at_18_37_15.png">同期と非同期のボタンを押した時にそれぞれ記録されています！非同期のほうは2秒タイムアウトを入れてるので、そのぶんバーが伸びています。また、■をクリックすると、interactionに紐づいているコミットに飛ぶことができます。</p><h2 id="-">レンダリング速度が遅くなるとき</h2><p>プロファイリングしながら、テキストボックスの値をだんだんと増やしてみます。最初のコミットではあまり時間がかかっていませんが、<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/c3842b12-3376-09cf-c2ea-2d1bbce666db.png" alt="Screen Shot 2018-09-20 at 18.38.33.png">値が増えると遅くなることがわかります。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/74441795-6e15-e865-b52c-536e51d1c84b.png" alt="Screen Shot 2018-09-20 at 18.38.49.png"><img src="https://qiita-image-store.s3.amazonaws.com/0/98379/126e764d-b4fb-6bca-4f81-bd88de2a53f8.png" alt="Screen Shot 2018-09-20 at 18.39.19.png">閾値を設定して時間のかかってるコミットだけを表示することもできます。</p><h2 id="-">思ったこと</h2><ul><li>interactionをactionに仕込むのは有用そう<ul><li>production環境だとinteractionは表示されないらしい</li><li>redux-loggerとか使ってるとあまり魅力に感じないかも</li><li>interaction周りは後にブログに書かれるみたいです</li><li>現状、unstableなのでAPI周りは大いに変わりうる</li></ul></li><li>Elementsで選択した親コンポーネントに紐づく子要素だけを表示してくれて便利</li><li>かかってる秒数で絞り込んでボトルネックを探していけて便利</li></ul><h2 id="-">まとめ</h2><p>interactionは自分で仕込まないといけないけど、プロファイリングだけならReactのversionあげればいいだけなので、お手軽。</p><h2 id="-doc">関連Doc</h2><ul><li><a href="https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html">公式Doc</a></li><li><a href="https://gist.github.com/bvaughn/8de925562903afd2e7a12554adcdda16">trackingの説明</a></li><li><a href="https://github.com/facebook/react/tree/master/packages/schedule">tracking周りのAPI(ソース)</a></li></ul>'
        },
        {
          id: '0e244c5f6d7c350e53ea',
          date: '2017-12-26',
          title: 'LINEのデコ文字に変換するやつを作りました',
          body: '<h3 id="-point_up-">:point_up: はじめに</h3><p>LINEのデコ文字、使ってますか。<img width="295" alt="Screen Shot 2017-12-26 at 1.11.18.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/ee71ec96-c33c-fbd5-28eb-8b3013dbd601.png"></p><p>文章にゆるさを足せますが、文章が長くなるにつれて打つのがだるくなりますよね。そんなわけで、テキストからデコ文字に変換できるライブラリを作りました。変換された文字列をLINEのテキスト欄に貼り付けるとデコ文字として表示されます。(iOSだと送信しないと表示されないかも)</p><h3 id="-eyes-line-">:eyes: LINEのデコ文字の構造</h3><p><img src="https://qiita-image-store.s3.amazonaws.com/0/98379/6312f71f-30bd-b07e-e17a-d8e9dad26546.jpeg" alt="a.jpeg">という文字を出す場合を例にします。</p><p>文字列的には<code>􂘁􀄛あ􏿿</code>という文字になります。</p><p>バイナリを解析してみると、</p><img width="604" alt="line.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/42a62fdc-93ca-d925-8859-5f35580d49f0.png"><p>こんな感じの構造になっているみたいでした。なるほど、という感じですね。</p><p>補助文字(先程の例でいうと、<code>あ</code>の部分)はなくてもデコ文字が表示可能だったため、ライブラリでデコ文字を生成する際には取り除いています。</p><h3 id="-sparkling_heart-">:sparkling_heart: デモ</h3><p>実際の動作は下記サイトで確認できます。<a href="https://re-fort.net/line-deco-converter/">https://re-fort.net/line-deco-converter/</a></p><p><a href="https://github.com/re-fort/line-deco-converter">GitHub</a></p><img width="211" alt="Screen Shot 2017-12-26 at 1.34.53.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/68c7d212-5bed-ea2c-5670-a39a561085b1.png">'
        },
        {
          id: 'e4c9651ad22542a61a58',
          date: '2017-12-20',
          title: 'Vue.js日本語サイトを支える仕組み',
          body: '<p>このエントリは<a href="https://qiita.com/advent-calendar/2017/vue4">Vue.js #4 Advent Calendar 2017</a>の20日目です。</p><h3 id="-point_up-">:point_up: はじめに</h3><p>Vue.js の良いところを聞くと、日本語サイト:flag_jp:が充実しているといった点がよく挙げられます。私も2017年2月から<a href="https://jp.vuejs.org/">Vue.js 日本語サイト</a>のメンテナに加わり<a href="%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81JTF%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%A8%99%E6%BA%96%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89%E3%82%92%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99">^1</a>、継続的にドキュメントの翻訳\bなどをしてきたので、嬉しく感じます:blush:</p><p>今エントリでは自分がメンテナになってから、フロー改善について取り組んできたことを紹介していきます:sparkles:</p><h3 id="-bulb-">:bulb: 気付き</h3><ul><li>lintのエラーがちらほらあるな？</li><li>これ本当に人間がやらなきゃいけない更新？</li></ul><h3 id="-eyes-lint-">:eyes: lintのエラーがちらほらあるな？</h3><p><code>npm run lint</code>することで、lintエラー<a href="%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81JTF%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%A8%99%E6%BA%96%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89%E3%82%92%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99">^1</a>に引っかからないか確認できるのですが、それが強制されておらず、ユーザー任せとなってしまっていたので、mergeのタイミングでlintエラーに気付くということがありました。</p><p>そのため、</p><ul><li><code>precommit</code>でlintを強制</li><li>pull request作成時にtopicブランチでもCircle CIでlintを行う</li></ul><p>ように改善しました。</p><h3 id="-eyes-">:eyes: これ本当に人間がやらなきゃいけない更新？</h3><p>本家の更新を見ていると、CSSのスタイル変更など翻訳とは関係ない更新も多くあることに気付きました。こういった更新はcherry-pickして取り込んでいたのですが、このへんを自動化できないかな？と思うようになりました。</p><p>そこで、作ったのがche-tsumiです。<a href="cherry-pick%E3%81%A8%E8%8C%B6%E6%91%98%E3%81%BF%E3%82%92%E3%81%8B%E3%81%91%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99">^2</a><a href="https://github.com/re-fort/che-tsumi">https://github.com/re-fort/che-tsumi</a></p><p>che-tsumiでは、<img width="600" alt="vue-translation.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/855b2da5-77f2-2a8b-ee73-24a4ad690632.png"></p><ol><li>本家ドキュメントの更新を検知</li><li>日本語サイトのGitHub repoにissueをたてる</li><li>cherry-pickしてみて、conflictが発生しないかチェック</li><li>conflictが発生しなければ、pushしてpull requestを作成する</li></ol><p>といったようなことをやってくれます。実際に投げられているissue/pull requestはこんな感じです。</p><img width="782" alt="Screen Shot 0029-12-19 at 2.02.32 PM.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/a6a7e58c-fbe9-9ef8-5d75-5f4b86a3afc3.png"><img width="772" alt="Screen Shot 0029-12-19 at 1.52.35 PM.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/1c5927d3-5a72-63b3-7336-db7a77325422.png"><p>che-tsumiを導入したことにより、conflictが発生しない更新は、pull requestをマージするだけでよくなり、人間の負荷が軽減しました。</p><p>また、翻訳文をみていると、このドキュメントはどこまで最新の内容が反映されているんだろう？と思うことがありますが、本家との差分はissueで確認できる<a href="%E3%81%93%E3%81%AE%E9%81%8B%E7%94%A8%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%AFVue.js%E3%81%AE%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%81%A0%E3%81%91%E3%81%A7%E3%81%82%E3%82%8A%E3%80%81vue-router%E3%81%AA%E3%81%A9%E3%81%AE%E5%91%A8%E8%BE%BA%E3%83%84%E3%83%BC%E3%83%AB%E3%81%AF%E7%8F%BE%E7%8A%B6%E3%81%82%E3%81%A6%E3%81%AF%E3%81%BE%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93">^3</a>ため、より見る方にとって親切になったと思いますし、より貢献しやすくなったかなーと思います！</p><h3 id="-img-width-25-src-https-qiita-image-store-s3-amazonaws-com-0-98379-f61ee904-afdd-a32e-24e3-7ce74cfce6b7-png-"><img width="25" src="https://qiita-image-store.s3.amazonaws.com/0/98379/f61ee904-afdd-a32e-24e3-7ce74cfce6b7.png"> 所感</h3><p>今年は<a href="https://ssr.vuejs.org/ja/">Vue.js サーバサイドレンダリングガイド</a>や<a href="https://simulatedgreg.gitbooks.io/electron-vue/content/ja/">electron-vue</a><a href="%E3%81%B2%E3%81%A8%E3%82%8A%E3%81%A7%E3%82%84%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%A7%E3%82%81%E3%81%A1%E3%82%83%E5%A4%A7%E5%A4%89%E3%81%A0%E3%81%A3%E3%81%9F">^4</a>などの翻訳などもやっていたりしました。しかし、翻訳がない状態から翻訳するのと、差分を定期的にメンテしていくのは、また別の熱意が必要だなーというのを強く感じました。</p><p>以上です:yum:</p>'
        },
        {
          id: '7875d317d406e66072e7',
          date: '2017-12-10',
          title: 'E2Eテストのboilerplateを書きました(SeleniumとZalenium)',
          body: '<p>このエントリは<a href="https://qiita.com/advent-calendar/2017/vue4">Vue.js #4 Advent Calendar 2017</a>の20日目です。</p><h3 id="-point_up-">:point_up: はじめに</h3><p>社内でE2Eテストを導入する流れになったので、他プロジェクトでも汎用的に使えるようにboilerplateを書いてみました。いちおう社内で使ってるやつですが、運用し始めてからそんなに経っていないので、ベストプラクティスかどうかはあやしいところ。また巷で話題の<a href="https://github.com/zalando/zalenium">Zalenium</a>も試しています。</p><h3 id="-star-">:star: リポジトリ</h3><p><a href="https://github.com/re-fort/e2e-boilerplate">https://github.com/re-fort/e2e-boilerplate</a></p><h3 id="-eyes-">:eyes: 技術選定</h3><ul><li>Selenium</li><li>WebdriverIO</li><li>mocha</li><li>power-assert</li></ul><p>ブラウザだけだったら、TestCafeなんかもよさそうでしたが、アプリ周りのことを考えるとSeleniumにしといたほうが良いのではとなりました。Seleniumは準備が大変そうなイメージがありましたが、公式でdockerイメージを配布してくれていたので環境構築が一瞬だったのも大きかったです。</p><p>他の3つに関しては、私がNode.jsに慣れているという理由です。</p><h3 id="-whale-docker-compose-yml">:whale: docker-compose.yml</h3><p>今回、公式のSelenium以外にもZaleniumを利用してテスト出来るようにdocker-compose.ymlを2つ用意しています。</p><h3 id="-question-zalenium-">:question: Zaleniumとは</h3><p><a href="https://github.com/zalando/zalenium">公式</a>に書いてあったことをまとめると、</p><ul><li>ZaleniumはSelenium Gridの拡張</li><li>公式のdocker-seleniumではなく、カスタマイズされたdocker-seleniumイメージを使用している</li><li>カスタマイズされたdocker-seleniumイメージはChrome&amp;FireFoxを内蔵しており、テストのビデオ録画機能などを提供している</li><li>テストのリクエストを受けるとdocker-seleniumイメージを使ってノードを作り、テストが終わると破棄される</li><li>docker-seleniumが捌けないリクエストはSauceLabsとかに投げることが出来る</li></ul><p>ということみたいです。</p><h3 id="-dark_sunglasses-">:dark_sunglasses: どんな感じなの</h3><p>テスト実行前<img width="537" alt="Screen Shot 2017-12-10 at 6.00.00.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/a2354a6c-0af7-c24b-9ab3-c2bcc721b5ee.png"></p><p>テスト実行中(ノードが増えてる)<img width="540" alt="Screen Shot 2017-12-10 at 6.00.21.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/298affc1-458c-4c23-94b7-e378e27123f2.png"></p><p>テスト実行中(VNCでテストの様子を見ることが出来る)<img width="532" alt="Screen Shot 2017-12-10 at 5.44.59.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/f6174368-d438-7277-67bb-9261107a8dd1.png"></p><p>テスト実行後(ノードが消えてる)<img width="535" alt="Screen Shot 2017-12-10 at 6.14.47.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/e520068a-a669-6e21-979e-4dbbe8d6e0fd.png"></p><p>テスト実行後(実行結果のビデオ&amp;ログを残しておいてくれてる)<img width="570" alt="Screen Shot 2017-12-10 at 6.01.25.png" src="https://qiita-image-store.s3.amazonaws.com/0/98379/d64afafd-8b35-9120-aee9-69be6561a5e8.png"></p><p>めっちゃ便利ですね:sparkles:</p><h3 id="-skull-">:skull: ハマったポイント</h3><h4 id="-scream-">:scream: たまにブラウザを開こうとして固まる</h4><p>原因の切り分けができてないけど、テストケースごとにブラウザを開こうとしていたので、テストケースを収集して1個の大きなテストとして実行するように変えました。確実に良くないので、なんとかしたい...。</p><h4 id="-scream-chromeoptions-">:scream: chromeOptionsが渡されない</h4><p>ChromeDriver 2.3.2から<code>goog:chromeOptions</code>という名前に変わったみたいです。真っ先にChromeDriverのページをみて、結果的にはちゃんと書いてあったんですけど、W3Cの新仕様にあわせたくらいしか書いてなくて、見逃してしまいました。Seleniumの通信ログをみてたら、なんか新しいやつある〜となって気付きました。W3Cの新仕様といっているのは<a href="https://w3c.github.io/webdriver/webdriver-spec.html#dfn-extension-capability">ここ</a>だと思います。</p><p>以上となります。このあとには、Zaleniumをk8sで動かしてみる話もあるみたいです。楽しみですね:blush:</p>'
        },
        {
          id: 'daead662ad8db9b1c9f5',
          date: '2017-12-03',
          title: 'xlsx-populateを使ってクライアントサイドでExcelを編集する',
          body: '<p>このエントリは<a href="http://qiita.com/advent-calendar/2017/nijibox">NIJIBOX Advent Calendar 2017</a>の3日目です。</p><h3 id="-point_up-">:point_up: はじめに</h3><p>IE、Edge、Excelから逃れられない人生を送っている皆様こんにちは:smiling_imp:</p><h3 id="-whale-">:whale: 今回の要件</h3><ul><li>Excelをダウンロードしたい</li><li>Excelテンプレートがすでにあるので、そこに値を埋め込めればいい</li><li>ある一定の時期のみ負荷がめっちゃかかる</li></ul><p>最後の要件があったので、サーバ負荷をかけないように、クライアントサイドでExcelを出力するのもありでは？と思い調べてみました。</p><h3 id="-dark_sunglasses-">:dark_sunglasses: ライブラリ選定</h3><h4 id="js-xlsx"><a href="https://github.com/SheetJS/js-xlsx">js-xlsx</a></h4><p>一番starが多そう。単純に読み込み、出力をしたもののテンプレートのスタイル情報が失われてしまった。<a href="https://github.com/SheetJS/js-xlsx/issues/121#issuecomment-272371902">issue</a>を読んでいると、このような用途であれば、別ライブラリがいいよと書いてあったので、それを試してみることに。</p><h4 id="xlsx-template"><a href="https://github.com/optilude/xlsx-template">xlsx-template</a></h4><p>試してみたものの値が置き換わらなかった...。</p><h4 id="xlsx-populate"><a href="https://github.com/dtjohnson/xlsx-populate">xlsx-populate</a></h4><p>望んでいた結果が得られました。</p><p>どれもNode.jsでもブラウザでも動くよといった感じでした。</p><h3 id="-bar_chart-xlsx-populate-">:bar_chart: xlsx-populateについて</h3><p>リポジトリにも書いてありますが、このライブラリでは従来のライブラリのように、<code>XMLをdeserialize → モデル化 → 編集 → XMLにserialize</code>というフローではなく、直接XMLを操作するみたいです。</p><p>そのため、スタイル情報などが保持されたままであると。今回はこの恩恵に大いにあずかった感じです:heart_eyes:</p><p>:warning: 今あるXMLの構造体を操作して修正していくので、例えばワークシートのコピーなどは、このライブラリはサポートしていないです。(シートのコピーを何個か作っておいて、不要なものを消したりといったことが必要)</p><p>詳しくは<a href="https://github.com/dtjohnson/xlsx-populate#how-xlsx-populate-works">ここ</a>を読んで下さい。</p><h3 id="-eyes-">:eyes: 確認</h3><h4 id="-globe_with_meridians-">:globe_with_meridians: ブラウザ互換性</h4><p>IE11, Edge14, FF57(Mac), Chrome62(Mac)では問題なさそうでした。</p><h4 id="-desktop-">:desktop: 性能</h4><p>10000セルへの書き込みをして1秒かからないくらいでした。intel core i5のmemory 16GBマシンでの検証なので、数値は参考程度で。</p><h3 id="-cupid-">:cupid: デモ</h3><p><a href="https://re-fort.net/xlsx-populate-demo/">デモ</a></p><ul><li>テンプレートに値を入れ込む</li><li>10000セルに書き込む</li><li>zip化する</li></ul><p>の3パターンが試せるデモをあげました。確認してみてください:blush:</p>'
        },
        {
          id: '63bef6778bf3d3939815',
          date: '2017-10-02',
          title: 'vue-test-utilsを使用してテストを書いてみた(Vue.js)',
          body: '<h3 id="-pencil-">:pencil: この記事について</h3><p><del>vue-test-utilsのbetaがそろそろnpmに出るかも<a href="https://github.com/vuejs/vue-test-utils/issues/4#issuecomment-330023319">^1</a>というステータスだったので、</del>EDIT: betaが公開されました。公開している<a href="https://github.com/re-fort/vue-webpack-boilerplate">boilerplate</a>でvue-test-utilsを使用してユニットテストを書いてみました。vue-router、vuex周りのテストの話やavoriazから乗り換える際の変更点を紹介します。</p><h3 id="-wrench-vue-test-utils-">:wrench: vue-test-utilsとは</h3><p>Vue.js のテストをサポートするライブラリです。<a href="https://github.com/vuejs/vue-test-utils">リポジトリ</a><a href="https://github.com/vuejs/vue-test-utils/tree/dev/docs/en">ドキュメント</a></p><p>背景としては、</p><ol><li>avoriaz爆誕</li><li>Vue.js公式でもテストをサポートするやつを出した方が良いのでは</li><li>avoriazの作者が中心となってvue-test-utilsを作成開始</li></ol><p>といった流れになっています。</p><p>avoriazの作者が中心となっているので、APIは多少違うものの似通っています。そのため、APIについては以下の記事が参考になると思います。<a href="http://qiita.com/hypermkt/items/850bf20a8ad43c13fd05">Vue.js用テストライブラリ「avoriaz」入門</a></p><h3 id="-notebook_with_decorative_cover-">:notebook_with_decorative_cover: ライブラリ</h3><p>以下のライブラリを使用しています。</p><table><thead><tr><th align="center">ライブラリ</th><th align="center">バージョン</th></tr></thead><tbody><tr><td align="center">vue-test-utils</td><td align="center">fe111d7(執筆時点での最新コミットハッシュ)</td></tr><tr><td align="center">karma</td><td align="center">1.7.1</td></tr><tr><td align="center">mocha</td><td align="center">3.5.3</td></tr><tr><td align="center">power-assert</td><td align="center">1.4.4</td></tr><tr><td align="center">sinon</td><td align="center">3.3.0</td></tr></tbody></table><h3 id="-bookmark_tabs-">:bookmark_tabs: 変更点</h3><p>実際に自分が乗り換えた際の変更点は、この<a href="https://github.com/re-fort/vue-webpack-boilerplate/pull/17/commits/037408b2e4cf07c4ca972e29b6b83eb2c0a4e87a">コミット</a>を参考にしてください。もちろんライブラリ全体としてはまだまだ差異はあると思いますが、見ている感じだと置換でなんとかなりそうなレベルだなーという印象です。</p><p>今すぐテストを書かなきゃいけなくのであれば、もう使い始めてもいい段階だと思います。</p><h3 id="-key2-">:key2: テスト</h3><p>ここからはvue-test-utils、avoriazに共通するテスト自体の話です。</p><h4 id="-bulb-mounted-">:bulb: mountedフックでこける</h4><p>テストは基本的に</p><ol><li>mount</li><li>めんどくさいメソッドをスタブ化</li><li>テスト</li></ol><p>といった流れになっています。そのため、mountした時点でスタブ化するヒマなく、Vueのmountedフックが走ります。APIと通信して初期レンダリングしてるようなやつは、そこでテストがこけてしまいます。なので、</p><pre><code class="language-js">import MyPage from \'src/components/MyPage\'\n' +
          '\n' +
          'describe(\'MyPage\', function () {\n' +
          '  //mountedフックを削除\n' +
          '  delete MyPage.mounted\n' +
          '\n' +
          '  describe(\'fetchFollowers()\', function () {\n' +
          '    it(\'renders followers when succeed\', function () {\n' +
          '      ...省略\n' +
          '    })\n' +
          '})</code></pre><p>こんな感じで消しちゃいましょう。※mountedフックで呼び出しているメソッドのテストは別途行う前提です。</p><p><a href="https://github.com/re-fort/vue-webpack-boilerplate/blob/vue-test-utils/tests/unit/specs/components/myPage.spec.js#L24">参考リンク</a></p><h4 id="-bulb-vue-router-">:bulb: vue-routerのテスト</h4><p>vue-router自体をスタブ化するのであれば、<code>$router</code>というオブジェクトに必要なファンクションをスタブ化した状態で作成し、インジェクションしてあげれば良いです。</p><pre><code class="language-js">import { mount } from \'vue-test-utils\'\n' +
          'import assert from \'assert\'\n' +
          'import sinon from \'sinon\'\n' +
          '\n' +
          'import Top from \'src/components/Top\'\n' +
          '\n' +
          'describe(\'Top\', function () {\n' +
          '  // スタブ化\n' +
          '  const $router = { push: () => { return sinon.stub() } }\n' +
          '\n' +
          '  ...省略\n' +
          '})</code></pre><p><a href="https://github.com/re-fort/vue-webpack-boilerplate/blob/vue-test-utils/tests/unit/specs/components/top.spec.js#L8">参考リンク</a></p><p>ルートコンポーネントでは、<code>router-view</code>、<code>router-link</code>のコンポーネントを登録する必要があります。※vue-test-utils(avoriaz)の<code>shallow</code>はすでに登録されている子コポンネートをスタブ化してくれるだけで、登録は別途必要となります。</p><p>こんなのを用意してあげると、</p><pre><code class="language-js">exports.stubComponent = {\n' +
          '  create: (name) => { return { name, render: h => h(\'div\') } },\n' +
          '}</code></pre><p>こんな感じで書けます</p><pre><code class="language-js">import { mount } from \'vue-test-utils\'\n' +
          'import assert from \'assert\'\n' +
          '\n' +
          'import App from \'src/App\'\n' +
          'import { stubComponent } from \'tests/unit/stubs/component\'\n' +
          '\n' +
          'describe(\'App\', function () {\n' +
          '  const routerView = stubComponent.create(\'router-view\')\n' +
          '  const routerLink = stubComponent.create(\'router-link\')\n' +
          '\n' +
          '  // コンポーネントを登録\n' +
          '  Vue.component(routerView.name, routerView)\n' +
          '  Vue.component(routerLink.name, routerLink)\n' +
          '\n' +
          '  ...省略\n' +
          '})</code></pre><p><a href="https://github.com/re-fort/vue-webpack-boilerplate/blob/vue-test-utils/tests/unit/specs/app.spec.js">参考リンク</a></p><h4 id="-bulb-vuex-">:bulb: Vuexのテスト</h4><p>Vuexを利用したテストを書くときも流れは変わりません。スタブ化した後に<code>new Vuex.Store</code>してインジェクションという流れです。Vuex自体のテストを省く場合は、<code>vue-router</code>と同様、<code>$store</code>オブジェクトをインジェクションすれば良いです。</p><p>(以下のテストでは<code>vue-router</code>の<code>beforeRouteEnter</code>が絡むテストになっているので、ややわかりにくいかもしれません...)</p><pre><code class="language-js">import { mount } from \'vue-test-utils\'\n' +
          'import assert from \'assert\'\n' +
          'import sinon from \'sinon\'\n' +
          'import Vuex from \'vuex\'\n' +
          '\n' +
          'import Auth from \'src/components/Auth\'\n' +
          'import AuthModule from \'src/store/modules/Auth\'\n' +
          '\n' +
          'Vue.use(Vuex)\n' +
          '\n' +
          'describe(\'Auth\', function () {\n' +
          '  let wrapper = {}\n' +
          '  let isAuthorized = false\n' +
          '  // スタブ化\n' +
          '  AuthModule.actions.verifyToken = () => { return sinon.stub().resolves(isAuthorized)() }\n' +
          '  const $router = { push: () => { return sinon.stub() } }\n' +
          '  const store = new Vuex.Store({ state: { authUrl: \'\' }, modules: { Auth: AuthModule } })\n' +
          '\n' +
          '  // vue-routerのnextをスタブ化\n' +
          '  function next(cb) {\n' +
          '    if (!cb) return false\n' +
          '    cb(wrapper.vm)\n' +
          '  }\n' +
          '\n' +
          '  describe(\'beforeRouteEnter()\', function () {\n' +
          '    it(\'stores token when the url contains hash\', async function () {\n' +
          '      wrapper = mount(Auth, { store, intercept: { $router } })\n' +
          '      const token = await wrapper.vm.$options.beforeRouteEnter({ hash: \'#test\' }, \'\', next)\n' +
          '      assert(token === \'test\')\n' +
          '      assert(wrapper.vm.$store.state.Auth.token === \'test\')\n' +
          '    })\n' +
          '  })\n' +
          '})</code></pre><p><a href="https://github.com/re-fort/vue-webpack-boilerplate/blob/vue-test-utils/tests/unit/specs/app.spec.js">参考リンク:Vuex自体をスタブ化する場合</a><a href="https://github.com/re-fort/vue-webpack-boilerplate/blob/vue-test-utils/tests/unit/specs/components/auth.spec.js">参考リンク:Vuexのアクションなどをスタブ化する場合</a></p><p>以上となります、参考になれば幸いです:relaxed:</p><h3 id="-speaking_head-">:speaking_head:余談</h3><p>vue-test-utilsのリポジトリが作成された時はコンテンツは一切なく、<a href="https://github.com/vuejs/vue-test-utils/issues/1">Design / Roadmap</a>というissueが1つポツンとあるだけでした。ここにEvan You(Vue.js 作者)が人々を招集して、「さあどういう方針で作ろうか、みんなの知恵を貸してくれ」と話し始めたのはなかなかロックな体験でした。このライブラリがどういう思想で出来たのかを&quot;使う側&quot;がissueを見て知ることができるのって貴重だと思うんですよねー。</p>'
        },
        {
          id: 'd1e2812b114af1dc86bc',
          date: '2017-08-15',
          title: 'Insomniaでリクエストチェーンを使う',
          body: '<h3 id="-sleeping-insomnia-">:sleeping: Insomniaとは</h3><p><img src="https://qiita-image-store.s3.amazonaws.com/0/98379/a939f87f-401e-f8bc-5b8d-2573ef1d5e21.png" alt="insomnia.png">RESTクライアントです。2017/05にオープンソース化しました。<a href="https://insomnia.rest/">Insomnia</a></p><h3 id="-chains-">:chains:リクエストチェーン</h3><p>今回は、Insomniaの便利機能の一つであるリクエストチェーンの紹介です。その名の通り、リクエストをチェーンできる機能なのですが、注意点が何個かあります。</p><p>:warning: 現在は<strong>試験的な機能(experimental feature)</strong>となっています。:warning: 現状は、過去に投げたレスポンスの値を参照する機能しか持っていません。つまり、<strong>リクエストを実行する前に別のリクエストを実行するわけではありません</strong>。(将来的に実装予定ではあるとのこと)</p><p>最も想定されるユースケースが、認証を要求されるエンドポイントに認証時のレスポンスで返ってきた<code>token</code>を入れたい！というケースだと思うので、その例を記載します。</p><h3 id="-star2-">:star2: 前提</h3><p>以下のエンドポイントがある例を想定した設定方法となります。</p><ol><li><a href="https://api.example.com/v1/auth">https://api.example.com/v1/auth</a> (<code>POST</code>:認証エンドポイント)</li><li><a href="https://api.example.com/v1/settings">https://api.example.com/v1/settings</a> (<code>GET</code>:設定情報取得エンドポイント ※要認証)</li></ol><h3 id="-gear-">:gear: 設定</h3><ol><li>認証エンドポイントはこれまで通り認証情報を<code>POST</code>するよう設定します。</li><li>設定情報取得エンドポイントの<code>Auth</code>タブから<code>Bearer Token</code>を選択します。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/b45e9193-7d45-8530-cb70-3e73d0f7887a.png" alt="setting1.png"></li><li><code>Response=&gt; Header</code>を選択します。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/9a2700e4-e6ba-0ef8-8df0-a21fab271161.png" alt="setting1.png"></li><li><code>Request</code>に認証のエンドポイントへのリクエストを指定し、<code>Header Name</code>に<code>Authorization</code>を指定します。<code>Live Preview</code>に<code>Bearer Token</code>が表示されていれば、成功です。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/f0ce49a1-4e64-1db8-6abe-8066b2b39188.png" alt="setting1.png"></li><li>あとはリクエストを送るだけです。</li></ol><p>:warning: 注意で書いている通り、現状はトークンが切れるたびに認証エンドポイントへのリクエストを送り、トークンを更新する必要があります。それすらめんどくさい方は、認証エンドポイントへのリクエストを定期実行(<code>Send</code>を右クリックし、<code>Repeat on Interval</code>を選択)させてあげるといいでしょう。</p><h3 id="-bookmark-">:bookmark: 所感</h3><p>今まではトークンが有効期限切れになるたびに、再認証して、環境変数に設定したトークンを書き換えて、ということをやっていましたが、これでやや簡便にレスポンスの確認ができるようになりました:heart_eyes:ちょっとまだ気持ち悪さが残るので、本来の意味でのリクエストチェーンが実装されるのが待ち遠しいですが...:confounded:Insomniaにはプラグイン機構もあり、そちらでも対応できるのかもしれません。現状、公式でドキュメント化されていないので、され次第、紹介しようと思います:relaxed:</p><p><a href="https://insomnia.rest/documentation/request-chaining/">公式ドキュメント</a></p>'
        },
        {
          id: 'c1418b1d307e68cc55a8',
          date: '2017-04-28',
          title: '任意のスニペットを実行するChrome Extensionを作りました',
          body: '<h1 id="run-snippets"><a href="https://github.com/re-fort/run-snippets">run-snippets</a></h1><p>任意のスニペットを実行するChrome Extensionです。v0.3.0からContent Scriptsによる自動実行も対応しています。ただし、実行するスニペットは自身の手で書き、ビルド、パッケージを読み込む必要があります。即座に使える拡張機能ではなく、スニペットをまとめるのに役立つboilerplateという感じです。Firefoxでも同様に使用可能です。</p><h2 id="-">デモ</h2><p><img src="https://user-images.githubusercontent.com/3705391/31721937-aef4056e-b455-11e7-892e-23726725dc14.gif" alt="screenshot"></p><p><a href="https://github.com/re-fort/run-snippets">run-snippets</a></p><h2 id="-">作ったきっかけ</h2><ul><li>ブックマークレットを作成&amp;修正するのはだるい</li><li>Chromeのスニペット機能を使おうにも<code>jQuery</code>とかを呼べるようにするのはだるい</li><li>簡単に<code>npm packages</code>を利用したい</li></ul><h2 id="-">利点</h2><ul><li><code>npm packages</code>が利用できる</li><li>スニペットをコード管理できる</li><li>スニペットを実行可能なドメインを指定できる(<code>github.com</code>以外では実行不可など)</li><li>チームでスニペットを共有する使い方もできそう(-&gt;実際にチームで利用し始めた)</li></ul><h2 id="-">更新履歴</h2><p>使っていて不便なところは機能追加していってます。詳しくは<a href="https://github.com/re-fort/run-snippets/releases">ここ</a>を参照してください。</p><h2 id="-">感想</h2><ul><li><code>chrome.tab.executeScript</code>は最後に評価された式の結果を返すため、<code>Promise</code>の結果を評価することはできない。そのため、<code>chrome.runtime.sendMessage</code>を使うように:blush:</li><li>Chrome Extensionは初作成だったんですが、Firefoxでもほぼコード変更なしで使えたので便利!!</li><li>Firefoxは<code>xpi</code>ファイルを署名しないと拡張機能として使えないですが、署名してない状態で読み込もうとすると、この拡張は壊れていますとしか言わなくて凶悪:imp:</li><li>最近、<code>Vue.js</code>と<code>bulma</code>の組み合わせを選ぶことが多いなー（´-`）.｡oO</li></ul>'
        },
        {
          id: '972d9a6cdc5c00864a6e',
          date: '2017-04-06',
          title: 'webpackのProvidePluginでES Modulesを読み込む',
          body: '<h3 id="-">はじめに</h3><p>webpackにはProvidePluginという(グローバル領域を汚染せずに)自動的にモジュールを読み込むプラグインがあります。</p><pre><code class="language-webpack.cofig.js">new webpack.ProvidePlugin({\n' +
          '  $: \'jquery\'\n' +
          '})</code></pre><pre><code class="language-app.js">// $にjqueryが注入されている\n' +
          '$(\'#app\');</code></pre><p>これを使用すると、複数のスクリプトで<code>import $ from &#39;jquery&#39;</code>などと書く必要がなくなり便利です。</p><h3 id="es-modules">ES Modules</h3><p>例えば<code>Vue.js</code>のES Modules版で同様のことをやろうとした場合、</p><pre><code class="language-webpack.cofig.js">new webpack.ProvidePlugin({\n' +
          '  Vue: \'vue/dist/vue.esm.js\' //ES Modulesを指定 \n' +
          '})</code></pre><pre><code class="language-app.js">new Vue.default({\n' +
          '  data: \'hello\'\n' +
          '})</code></pre><p>といった感じで書く必要があり、微妙...と思っていました。</p><h3 id="-">あれ、読み込むプロパティを指定できるようになってる...!!!</h3><p>素晴らしい<a href="https://github.com/webpack/webpack/pull/3597">PR</a>が取り込まれてるので、</p><pre><code class="language-webpack.cofig.js">new webpack.ProvidePlugin({\n' +
          '  Vue: [\'vue/dist/vue.esm.js\', \'default\'] //ES Modulesを指定 \n' +
          '})</code></pre><pre><code class="language-app.js">new Vue({\n' +
          '  data: \'hello\'\n' +
          '})</code></pre><p>ぬおー、人間らしく書けるようになりましたね:relaxed:</p><h3 id="-">履歴</h3><ul><li>webpackの<a href="https://webpack.js.org/plugins/provide-plugin/">ドキュメント</a>を更新しました</li></ul>'
        },
        {
          id: '7dff0ff10aa95db2517b',
          date: '2017-03-05',
          title: 'DarkroomJSとTesseract.jsを組み合わせてOCRする',
          body: '<h3 id="-">概要</h3><p><a href="https://github.com/MattKetmo/darkroomjs">DarkroomJS</a>と<a href="https://github.com/naptha/tesseract.js">Tesseract.js</a>を組み合わせてWeb上でOCRできるやつを作ってみました:blush:</p><p><a href="http://re-fort.net/darkroom-tesseract/">Darkroom-Tesseract</a>(言語データをダウンロードするので、通信量を気にしなくていい環境での閲覧をオススメします)</p><h3 id="-">デモ</h3><p><img src="https://raw.githubusercontent.com/re-fort/darkroom-tesseract/gh-pages/image/demo.gif" alt="screenshot"></p><h3 id="-">所感</h3><p>デモがそんな感じの内容なんですが、これをやろうと思ったのは、画像の一部分だけOCRしたいときってあるんじゃないかなーって思ったからです。例えば、電話番号だけ抜き取りたいとか。</p><p>画像編集の機能としては、</p><ul><li>戻る/進む</li><li>回転</li><li>トリミング</li><li>明るさ調整</li><li>リセット</li><li>リサイズ</li><li>ズームイン/アウト</li><li>OCR</li></ul><p>があります。基本的にDarkroomJSのを使わせてもらってますが、一部自分で実装しました。</p><h3 id="-">その他</h3><ul><li>言語データはそのまま使ってるので、精度は高くありません。チューニングが別途必要です。</li></ul>'
        },
        {
          id: 'da82c8f03eb49a6bb8e4',
          date: '2016-12-11',
          title: 'AmazonDashButtonとLineNotifyで気持ちを伝える',
          body: '<p>このエントリは<a href="http://qiita.com/advent-calendar/2016/nijibox">NIJIBOX Advent Calendar 2016</a>の11日目です。</p><h4 id="-">はじめに</h4><p>AmazonDashButtonを使用して、LineNotifyにメッセージを投稿してみようと思います。しかし、AmazonDashButtonひとつでは気持ちを伝えることは難しいです。そこで、モールス信号を使うことを思いつきました:zap:モールス信号ならば、ドット、ダッシュ、スペースの3種類で50音が表現可能です。</p><h4 id="-">用意するもの</h4><ul><li>AmazonDashButton×3 :innocent:</li></ul><h4 id="-">セットアップ</h4><p><a href="https://github.com/re-fort/amazon-dash-ton-tsu">リポジトリ</a>を参照してください。</p><h4 id="-">デモ</h4><p><code>npm start</code>でlistenした後、3つのAmazonDashButtonを駆使して、メッセージを作成していきます。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/ec2deeb2-fb2b-7e73-6672-18411a559425.png" alt="Screen Shot 2016-12-11 at 00.44.19.png"></p><p>作成したメッセージがLine Notifyに通知されます。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/bada74a1-9a04-3bb8-db17-b818270fb6fb.png" alt="Screenshot_2016-12-11-00-42-37~01.png"></p><h4 id="-">余談</h4><p>このままではボタンを押すたびに通知が来てしまうので、設定から通知を切ることをオススメします。<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/34327000-41be-174f-59c2-34ff7bf2c490.png" alt="Screenshot_2016-12-10-15-35-33_01.png"></p>'
        },
        {
          id: '9c315894d96ee2b664c3',
          date: '2016-12-06',
          title: 'Electronと秘匿化・難読化・整合性チェック',
          body: '<p>このエントリは<a href="http://qiita.com/advent-calendar/2016/electron">Electron Advent Calendar 2016 - Qiita</a>の6日目です。</p><h3 id="-">はじめに</h3><p>Electronでアプリケーションを作成する場合、コードを見せたくないといったことがあると思います。そこで、どのようなアプローチがあるのか調べてみました。(間違っている点、足りない点はフォローいただけると助かります。)</p><h3 id="-">秘匿化</h3><p>Electronのissueでは下記で話題に挙がっています。</p><ul><li><a href="https://github.com/electron/electron/issues/3041">Source Code Protection</a></li><li><a href="https://github.com/electron/electron/issues/2570">Is the source really protected with building apps with Electron?</a></li></ul><p>なんとなくまとめると、</p><ul><li>Electron公式ではソースコードの秘匿化をする機能はない。<br>今のところやるつもりもない。<br>(提供されている<code>asar</code>はパフォーマンス向上のためのツール)</li><li>ソースコードの秘匿化がしたいなら、<a href="https://nwjs.io/">NW.js</a>に移行したほうがいいかも。</li><li><a href="http://enclosejs.com/">EncloseJS</a>も同じことが出来るけど、商用ソフトに使う場合は料金が発生する。</li></ul><h3 id="-">難読化</h3><p>次に難読化を考えてみます。ここから先は、Electronというよりは、JavaScriptコードの難読化の話となります。</p><p><a href="https://github.com/SimulatedGREG/electron-vue">electron-vue</a>を題材に難読化を試していきます。</p><h4 id="webpack">webpack</h4><p>まずは<code>webpack</code>から。基本の<code>uglify</code>を行います。</p><pre><code class="language-javascript:webpack.config.babel.js">const webpack = require(\'webpack\')\n' +
          '\n' +
          'let config = {\n' +
          '  entry: {\n' +
          '    build: path.join(__dirname, \'app/src/main.js\')\n' +
          '  }\n' +
          '}\n' +
          '\n' +
          'if (process.env.NODE_ENV === \'production\') {\n' +
          '  config.plugins.push(\n' +
          '    new webpack.DefinePlugin({\n' +
          '      \'process.env.NODE_ENV\': \'"production"\'\n' +
          '    }),\n' +
          '    new webpack.optimize.OccurenceOrderPlugin(),\n' +
          '    new webpack.optimize.UglifyJsPlugin({\n' +
          '      compress: {\n' +
          '        warnings: false\n' +
          '      }\n' +
          '    })\n' +
          '  )\n' +
          '}</code></pre><p>これでビルドをすると、<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/b99c6312-c450-a5c9-1847-e11417ddf185.png" alt="Screen Shot 2016-12-05 at 02.30.05.png" title="Screen Shot 2016-12-05 at 02.30.05.png">こんな感じのファイルが出力され、アプリも問題なく起動します。</p><p><img src="https://qiita-image-store.s3.amazonaws.com/0/98379/74e28a62-eb14-cac4-96d1-37360452aee2.png" alt="Screen Shot 2016-12-05 at 02.21.39.png" title="Screen Shot 2016-12-05 at 02.21.39.png"></p><h4 id="webpack-obfuscator">webpack-obfuscator</h4><p>まだまだ心許ないので、もう少し難読化をしてみましょう。<code>webpack</code>プラグインの<code>webpack-obfuscator</code>を使用します。</p><pre><code class="language-javascript:webpack.config.babel.js">const webpack = require(\'webpack\')\n' +
          'const WebpackObfuscator = require(\'webpack-obfuscator\')\n' +
          '\n' +
          'let config = {\n' +
          '  entry: {\n' +
          '    build: path.join(__dirname, \'app/src/main.js\')\n' +
          '  }\n' +
          '}\n' +
          '\n' +
          'if (process.env.NODE_ENV === \'production\') {\n' +
          '  config.plugins.push(\n' +
          '    new webpack.DefinePlugin({\n' +
          '      \'process.env.NODE_ENV\': \'"production"\'\n' +
          '    }),\n' +
          '    new webpack.optimize.OccurenceOrderPlugin(),\n' +
          '    new webpack.optimize.UglifyJsPlugin({\n' +
          '      compress: {\n' +
          '        warnings: false\n' +
          '      }\n' +
          '    }),\n' +
          '    new WebpackObfuscator ({\n' +
          '      rotateUnicodeArray: true,\n' +
          '    })\n' +
          '  )\n' +
          '}</code></pre><p>これでビルドをすると、<img src="https://qiita-image-store.s3.amazonaws.com/0/98379/461d9d45-1a36-2b1d-003d-8e902608949b.png" alt="Screen Shot 2016-12-05 at 02.38.08.png" title="Screen Shot 2016-12-05 at 02.38.08.png"></p><p>こんな感じのファイルが出力され、アプリもこれまた問題なく起動します:blush: </p><p><img src="https://qiita-image-store.s3.amazonaws.com/0/98379/1d471be5-ffc5-8895-6a7b-8b70da4e77dc.png" alt="Screen Shot 2016-12-05 at 02.37.50.png" title="Screen Shot 2016-12-05 at 02.37.50.png"></p><p>今回はベンダーJSもまとめて難読化しちゃってますが、ビルド・実行速度の観点からもベンダーJSはエントリーを分けて、アプリケーションJSのみ難読化することをオススメします。</p><pre><code class="language-javascript:webpack.config.babel.js">new WebpackObfuscator ({\n' +
          '  rotateUnicodeArray: true,\n' +
          '}, [\'vendor.js\'])</code></pre><p>こんな感じで<code>vendor.js</code>のみ<code>webpack-obfuscator</code>の難読化対象から外すことができます。</p><p>詳細なドキュメントは、</p><ul><li><a href="https://github.com/javascript-obfuscator/webpack-obfuscator">webpack-obfuscator</a></li><li><a href="https://github.com/javascript-obfuscator/javascript-obfuscator">javascript-obfuscator</a></li></ul><p>あたりを参照してください。</p><p><a href="https://github.com/javascript-obfuscator/gulp-javascript-obfuscator">Gulp版</a>もあるみたいなので、Gulpを使ってる人はそちらをお試しください。</p><h3 id="-">整合性チェック</h3><p>MacOS限定ですが、<code>electron-builder</code>の作者によって、こんな<a href="https://github.com/electron/electron/pull/9648">PR</a>が出てました。まだマージはされていません。[^1]</p><p>[^1]: 2017/08/17 現在</p>'
        },
        {
          id: 'd7d71e0a4eb9f6bb129b',
          date: '2016-11-12',
          title: 'Githubのリリースページからダウンロードをさせたいとき、Nutsを使うと便利',
          body: '<h3 id="-">概要</h3><p>Githubのリリースページからソフトウェアやソースをダウンロードさせたいといったことがあると思います。そういうときにNutsを利用すると便利です。</p><h3 id="-">なにができるか</h3><p><a href="https://github.com/GitbookIO/nuts">Nuts</a>を使用するとGithubのリリースページから指定した条件のファイルをダウンロードするといったことが簡単にできます。</p><p>例えば、nutsをherokuでホストした場合、<code>https://your-app.herokuapp.com/download/osx</code>というURLにアクセスすると、OSX用の最新版のdmg/zipのダウンロードウィンドウが開きます。OSは指定しなくても自動で判断してくれます。</p><h3 id="-">ユースケース</h3><p>特に有用なケースだと思われるのが、Electronアプリのダウンロード/アップデートをする場合です。Electronのauto-updaterのマニュアルにもNutsの名前が出てきます。<a href="https://github.com/electron/electron/blob/master/docs/api/auto-updater.md">auto-updater</a></p><p>アップデートの場合は、<code>https://your-app.herokuapp.com/update/osx/1.0.0</code>といった形でURLを指定します。</p><h3 id="-">デプロイ</h3><p>最もお手軽なherokuにデプロイする場合の方法です。</p><ol><li>Githubに<code>Deploy to heroku</code>ボタンがあるのでクリック。</li><li>設定を行っていきます。注意点のみ列挙します。 <ul><li><code>GITHUB_REPO</code>にはURLではなく<code>ユーザ名/リポジトリ名</code>といった形で記載。</li><li><code>API_USERNAME</code>、<code>API_PASSWORD</code>は適当に入れておく。<br>(開発者向けのAPIにアクセスする場合に使用する。)</li></ul></li><li>デプロイする。</li></ol><p>簡単だ〜〜〜:relaxed:</p><h3 id="-">ドキュメント</h3><p><a href="https://nuts.gitbook.com">Nuts Documentation</a>ここを参照してください。</p><h3 id="-">その他</h3><ul><li>現状、バックエンドはGithubしか対応していないけど、S3とかも可能<br>(プルリクは送られているが取り込まれていない)</li></ul>'
        },
        {
          id: '0f0695fd30c80fc0a4b1',
          date: '2016-07-11',
          title: 'Vue.jsのboilerplateを書きました(webpack, vue-router, vuex, axios)',
          body: '<h1 id="vue-webpack-boilerplate">vue-webpack-boilerplate</h1><p>Vue.js(2.x.x)でvue-routerとvuexとaxiosを使用したboilerplateを書いてみました。</p><p><a href="https://github.com/re-fort/vue-webpack-boilerplate">vue-webpack-boilerplate</a></p><h2 id="-">利用想定</h2><p>APIと通信を行い、画面描画を行うシンプルなSPAを想定しています。が、割りと実用的な機能(認証周り・ページネーション・通知・GAトラッキング・ローディングスピナーなど)をビルトインで備えています。管理画面を早く作りたいなどの場合に最適です。</p><h2 id="-">パッケージ</h2><h3 id="-">開発</h3><ul><li>Vue</li><li>webpack </li><li><a href="https://router.vuejs.org/ja/index.html">vue-router</a></li><li><a href="https://vuex.vuejs.org/ja/">vuex</a></li><li>axios</li><li><a href="http://bulma.io">Bulma</a></li><li>Font Awesome</li></ul><h3 id="-">テスト</h3><ul><li>vue-test-utils</li><li>Mocha</li><li>Karma</li><li>power-assert</li></ul><h2 id="-">構成</h2><pre><code>dist                                 ... npm run buildで自動生成される\n' +
          '  js\n' +
          '    - app.js                         ... アプリ固有のビルド済みjs\n' +
          '    - vendor.js                      ... 外部ライブラリのビルド済みjs(Vue, vue-router, vuex, axios)\n' +
          '  static                             ... 静的リソースファイル\n' +
          '  stylesheets\n' +
          '    - app.css                        ... アプリ固有のビルド済みcss\n' +
          '    - vendor.css                     ... 外部ライブラリのビルド済みcss(Font Awesome)\n' +
          'src\n' +
          '  components                         ... ページコンポーネント\n' +
          '  lib                                ... ライブラリ\n' +
          '  mixins                             ... ミックスイン\n' +
          '  router                             ... vue-router\n' +
          '  static                             ... 静的リソースファイル\n' +
          '  store                              ... Vuex\n' +
          '  stylesheets\n' +
          '  App.vue                            ... メインコンポーネント\n' +
          '  filter.js                          ... カスタムフィルタ\n' +
          '  main.js                            ... エントリポイント\n' +
          '  setting.js                         ... プロジェクト固有の設定\n' +
          'tests\n' +
          '  unit                               ... ユニットテスト関連\n' +
          '    specs                            ... スペックファイル\n' +
          '    stubs                            ... スタブ\n' +
          '    .eslintrc.json                   ... ユニットテスト用のeslint設定ファイル\n' +
          '    index.js                         ... ユニットテストのエントリポイント\n' +
          '    karma.conf.js                    ... Karmaの設定ファイル\n' +
          '.babelrc                             ... babelの設定ファイル\n' +
          '.editorconfig\n' +
          '.eslintrc.json\n' +
          'index.html\n' +
          'package.json\n' +
          'webpack.config.babel.js              ... Webpackの設定ファイル</code></pre><h2 id="-">デモ</h2><p>boilerplateでは、GitHub APIを叩き、ユーザー・リポジトリを検索・表示するSPAをサンプル実装しています。</p><p><a href="https://re-fort.net/vue-webpack-boilerplate/#/">https://re-fort.net/vue-webpack-boilerplate/#/</a></p><p>セットアップなどはリポジトリの<a href="https://github.com/re-fort/vue-webpack-boilerplate/blob/gh-pages/README.md">README</a>を参照してください。改善点などありましたら、PRいただけるとありがたいです:blush: </p><h2 id="-">履歴</h2><ul><li>Vue.jsを1.x.x=&gt; 2.x.xに更新しました。</li><li>webpackを1.x.x=&gt; 2.x.xに更新しました。</li><li>vue-routerからaxiosに変更しました。</li><li>webpackを2.x.x=&gt; 3.x.xに更新しました。</li><li>Vuexを導入し、認証用のtokenを管理する例を追加しました。</li><li>avoriaz + Mocha + Karmaでユニットテストを追加しました。</li><li>avoriazからvue-test-utilsに変更しました。</li><li>通知コンポーネント・GAトラッキング・ローディングスピナーを追加しました。</li></ul>'
        },
        {
          id: '6a75a8a27afa544f22fa',
          date: '2016-03-21',
          title: '【Electron】タレントの出演番組を一括検索できるデスクトップアプリを作りました',
          body: '<h3 id="-">作ったもの</h3><p><a href="https://github.com/re-fort/TV-kko">TV-kko</a>TV-kkoは登録したタレントから出演番組を一括検索できるデスクトップアプリです。</p><p>詳細リンクを押すとCHAN-TORUの番組詳細ページに飛ぶので、番組を録画することも可能です。</p><h3 id="-">機能</h3><h3 id="-">デモ</h3><p><img src="https://raw.githubusercontent.com/re-fort/TV-kko/master/demo/TV-kko.gif" alt="screenshot"></p><h3 id="-">パッケージ</h3><p>使っているパッケージです。</p><ul><li>vue</li><li>cheerio-httpcli</li></ul><p>開発当初は、『Electron + Vue.js + babel + webpack + Stylus + Jade』みたいな流行りの構成でやろうとしてたんですが、cheerio-httpcliをwebpackする方法が分からず、、、、</p><p>最終的に、『Electron + Vue.js』の最小構成っぽくなりました。</p><p><a href="http://jp.vuejs.org/">Vue.js</a>は初めて使ってみましたが、すごく使いやすいですね。公式読めば大体分かるし。これで私もinnerHTMLっ子から卒業ですね。</p><p><a href="https://www.npmjs.com/package/cheerio-httpcli">cheerio-httpcli</a>も大変便利でした。画像や番組情報のfetchやらに使わせてもらってます。jQueryのセレクタと似てるので、直感的にシュババッと出来ます。</p><h3 id="-">その他</h3><ul><li>OSXからelectron-packagerでのパッケージングは、Win向けにWineだけ入れとけばOKでした。アイコンも特に問題なく設定できてた。(v5.2.1)</li><li>API Docの翻訳版あるの気づかなかったので、開発前に<a href="https://github.com/atom/electron/tree/master/docs-translations/jp/api">コレ</a>一通り見とくといいかも。特にapp,ipc-main,ipc-renderer,menu,remoteあたり。</li></ul>'
        },
      ],
      isActive: false,
      selectedBlogId: null,
    }
  },

  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    },

    getGithubUrl(title, author = 're-fort') {
      return `https://github.com/${author}/${title}`
    },

    setSelectedBlogId(id) {
      this.selectedBlogId = this.selectedBlogId === id ? null : id;
      location.hash = this.selectedBlogId ? this.selectedBlogId : '';
    }
  },
})
