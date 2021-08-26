(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7389],{7389:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var n=t(7875),e={class:"varlet-site-doc"},l=(0,n.uE)('<h1>Steps 步骤条</h1><div class="card"><h3>介绍</h3><p>引导用户按照流程完成任务的导航条。</p></div><div class="card"><h3>引入</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Steps, Step } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Steps).use(Step)\n\n         </code>\n       </pre></div><div class="card"><h3>基本使用</h3><p>通过 <code>active</code> 属性控制当前步骤条的进度，值为当前 <code>step</code> 的索引，从 <code>0</code> 起计。</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤1<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤2<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤3<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤4<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-steps</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;next&quot;</span>&gt;</span>下一步<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n         </code>\n       </pre><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-number">0</span>)\n\n    <span class="hljs-keyword">const</span> next = <span class="hljs-function">() =&gt;</span> {\n      active.value = (active.value + <span class="hljs-number">1</span>) % <span class="hljs-number">4</span>\n    }\n    \n    <span class="hljs-keyword">return</span> {\n      active,\n      next\n    }\n  }\n}\n\n         </code>\n       </pre></div><div class="card"><h3>自定义样式</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n            <span class="hljs-tag">&lt;<span class="hljs-name">var-steps</span> \n  <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>  \n  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#f44336&quot;</span> \n  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#e99eb4&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>\n    步骤1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>\n    步骤2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>\n    步骤3\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>\n    步骤4\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-steps</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>垂直模式</h3><p>通过 <code>direction</code> 属性改变步骤条的显示方向。</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-steps</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤1<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤2<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤3<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>步骤4<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-steps</span>&gt;</span>\n\n         </code>\n       </pre></div><h2>API</h2><div class="card"><h3>属性</h3></div><div class="card"><h3>Steps 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>active</code></td><td>当前步骤</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>显示方向，可选值为 <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>active-color</code></td><td>激活状态颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>未激活状态颜色</td><td><em>string</em></td><td><code>#9e9e9e</code></td></tr></tbody></table></div><div class="card"><h3>Step 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>active-icon</code></td><td>激活状态图标</td><td><em>string</em></td><td><code>check</code></td></tr><tr><td><code>current-icon</code></td><td>当前步骤时的图标</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-icon</code></td><td>未激活状态图标</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3></div><div class="card"><h3>Steps 事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click-step</code></td><td>点击步骤的标题或图标时触发</td><td><code>index: number</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3></div><div class="card"><h3>Step 插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>step的内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider 组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--step-tag-size</code></td><td><code>20px</code></td></tr><tr><td><code>--step-tag-background</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--step-tag-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-tag-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--step-tag-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--step-tag-margin</code></td><td><code>4px 0</code></td></tr><tr><td><code>--step-tag-icon-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--step-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-content-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--step-content-active-color</code></td><td><code>#000</code></td></tr><tr><td><code>--step-line-background</code></td><td><code>#000</code></td></tr><tr><td><code>--step-vertical-min-height</code></td><td><code>30px</code></td></tr><tr><td><code>--step-vertical-tag-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--step-vertical-line-height</code></td><td><code>calc(100% - 30px)</code></td></tr><tr><td><code>--step-vertical-line-min-height</code></td><td><code>20px</code></td></tr></tbody></table></div>',15);var c={render:function(s,a){return(0,n.wg)(),(0,n.j4)("div",e,[l])}}}}]);