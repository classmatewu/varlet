(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[6357],{6357:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>c});var t=n(7875),l={class:"varlet-site-doc"},p=(0,t.uE)('<h1>Layout</h1><div class="card"><h3>Intro</h3><p>The component library provides two auxiliary layout components, <code>&lt;var-row/&gt;</code> and <code>&lt;var-col/&gt;</code>, so that you can layout more efficiently.</p></div><div class="card"><h3>Install</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Row, Col } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Row).use(Col)\n\n         </code>\n       </pre></div><div class="card"><h3>Gird System</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           The `<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span>/&gt;</span>` component divides a row into an average grid of 24 columns (24 pieces). \nThe `<span class="hljs-tag">&lt;<span class="hljs-name">var-col</span>/&gt;</span>` provides the span property to set the number of pieces in the column and the `offset` property to set the number of pieces `offset` in the column.\n\n         </code>\n       </pre><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>Offset</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>offset: 8 span: 16<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>Alignment</h3><p>The layout component is laid out in <code>flex</code> by default, using the <code>&lt;var-row/&gt;</code> <code>justify</code> and <code>align</code> properties to set the alignment of the main and cross axes.</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n            <span class="hljs-tag">&lt;<span class="hljs-name">var-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;flex-end&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-around&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-between&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>Gutter</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n\n         </code>\n       </pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Row Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>Col gutter</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>Spindle alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>Cross axis alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table></div><div class="card"><h3>Col Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>span</code></td><td>Number of grids occupied by columns</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>Number of grids for column offsets</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>Row Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click Row</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Col Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click Col</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>Row Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Col Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col content</td><td><code>-</code></td></tr></tbody></table></div>',17);var c={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",l,[p])}}}}]);