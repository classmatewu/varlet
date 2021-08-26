(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[9147],{9147:(s,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>c});var t=l(7875),n={class:"varlet-site-doc"},e=(0,t.uE)('<h1>水波指令</h1><div class="card"><h3>介绍</h3><p>使元素点击时生成一个水波扩散的效果。</p></div><div class="card"><h3>引入</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Ripple } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Ripple)\n\n         </code>\n       </pre></div><div class="card"><h3>基本使用</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>&gt;</span>点击<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>修改颜色</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>=<span class="hljs-string">&quot;{ color: &#39;#2979ff&#39; }&quot;</span>&gt;</span>点击<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>禁用水波</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>=<span class="hljs-string">&quot;{ disabled: true }&quot;</span>&gt;</span>点击<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n         </code>\n       </pre></div><h2>API</h2><div class="card"><h3>选项</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>水波纹的颜色</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>disabled</code></td><td>禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div>',8);var c={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",n,[e])}}}}]);