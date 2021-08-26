(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7039],{7039:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var n=t(7875),l={class:"varlet-site-doc"},e=(0,n.uE)('<h1>Countdown 倒计时</h1><div class="card"><h3>介绍</h3><p>用于实时展示倒计时数值，支持毫秒精度。</p></div><div class="card"><h3>引入</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Countdown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Countdown)\n\n         </code>\n       </pre></div><div class="card"><h3>基本使用</h3><p><code>time</code> 属性表示倒计时总时长，单位为毫秒。</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n             <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> /&gt;</span>\n\n         </code>\n       </pre><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> time = ref(<span class="hljs-number">30</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>)\n\n      <span class="hljs-keyword">return</span> {\n        time\n      }\n    }\n  }\n\n         </code>\n       </pre></div><div class="card"><h3>自定义格式</h3><p>通过 <code>format</code> 属性设置倒计时文本的内容。</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;DD 天 HH 时 mm 分 ss 秒&quot;</span> /&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>显示毫秒</h3><p>通过 <code>S</code> 文本显示毫秒。</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;HH:mm:ss:SS&quot;</span> /&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>自定义样式</h3><p>通过插槽自定义倒计时的样式，<code>timeData</code> 对象格式见下方表格。</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;timeData&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-down</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>手动控制</h3><p>通过 ref 获取到组件实例后，可以调用 <code>start</code>、<code>pause</code>、<code>reset</code> 方法。</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n             <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span>\n    <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;3000&quot;</span>\n    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;countdown&quot;</span>\n    <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;ss : SSS&quot;</span>\n    @<span class="hljs-attr">end</span>=<span class="hljs-string">&quot;end&quot;</span>\n    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn-container&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.countdown.start()&quot;</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.countdown.pause()&quot;</span>&gt;</span>pause<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.countdown.reset()&quot;</span>&gt;</span>reset<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n         </code>\n       </pre><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> countdown = ref(<span class="hljs-literal">null</span>)\n\n      <span class="hljs-keyword">const</span> end = <span class="hljs-function">() =&gt;</span> {\n        Snackbar.info(<span class="hljs-string">&#39;end!&#39;</span>)\n      }\n\n      <span class="hljs-keyword">const</span> change = <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>)\n      }\n\n      <span class="hljs-keyword">return</span> {\n        countdown,\n        end,\n        change\n      }\n    }\n  }\n\n         </code>\n       </pre><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n             <span class="hljs-selector-class">.btn-container</span> {\n    <span class="hljs-attribute">display</span>: flex;\n    <span class="hljs-attribute">align-items</span>: center;\n    <span class="hljs-attribute">justify-content</span>: space-between;\n    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;\n  }\n\n         </code>\n       </pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>time</code></td><td>倒计时时长(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>时间格式</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>是否自动开始倒计时</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>format 格式</h3><table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒数</td></tr><tr><td><code>S</code></td><td>毫秒（1位）</td></tr><tr><td><code>SS</code></td><td>毫秒（2位）</td></tr><tr><td><code>SSS</code></td><td>毫秒（3位）</td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>end</code></td><td>倒计时结束时触发</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>倒计时变化时触发</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义内容</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>TimeData 格式</h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>days</code></td><td>剩余天数</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>剩余小时</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>剩余分钟</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>剩余秒数</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>剩余毫秒</td><td><code>number</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><p>通过 ref 可以获取到 CountDown 实例并调用实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>start</code></td><td>开始倒计时</td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>暂停倒计时</td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>重设倒计时，若 <code>auto-start</code> 为 <code>true</code>，重设后会自动开始倒计时</td><td><code>-</code></td></tr></tbody></table></div>',15);var c={render:function(s,a){return(0,n.wg)(),(0,n.j4)("div",l,[e])}}}}]);