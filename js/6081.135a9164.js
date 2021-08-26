(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[6081],{6081:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});var l=t(7875),e={class:"varlet-site-doc"},n=(0,l.uE)('<h1>Progress</h1><div class="card"><h3>Intro</h3><p>Display the current progress of an operation flow.</p></div><div class="card"><h3>Install</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Progress } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Progress)\n\n         </code>\n       </pre></div><div class="card"><h3>Basic Usage</h3><p>Set the current progress through the <code>value</code> attribute.</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">:track</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:track</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:track</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>Show Label</h3><p>The label is displayed through the <code>label</code> attribute. The label is the percentage of progress by default. You can use the slot to insert custom content.</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">label</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;30&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">label</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">label</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">var-progress</span>&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>Custom Style</h3><p>Set the line width, progress bar color, track color and ripple loading effect through the attributes of <code>line-width</code>, <code>color</code>, <code>track-color</code> and <code>ripple</code>.</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">line-width</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-attr">line-width</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> <span class="hljs-attr">track-color</span>=<span class="hljs-string">&quot;#f5cb90&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;80&quot;</span> <span class="hljs-attr">ripple</span> <span class="hljs-attr">line-width</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> <span class="hljs-attr">track-color</span>=<span class="hljs-string">&quot;#f5cb90&quot;</span> /&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>Progress circle</h3><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">line-width</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;56&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">label</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">line-width</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;56&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">label</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">line-width</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;56&quot;</span> /&gt;</span>\n\n         </code>\n       </pre></div><div class="card"><h3>Hide Track</h3><p>Use <code>track</code> prop to hide track.</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-tag">&lt;<span class="hljs-name">var-progress</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;56&quot;</span> <span class="hljs-attr">:track</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n\n         </code>\n       </pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>mode</code></td><td>Mode of Progress. Optional value is <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>value</code></td><td>Completion value</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td>Width of the progress bar</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td>Color of the progress bar</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>track-color</code></td><td>Color of the progress track</td><td><em>string</em></td><td><code>#d8d8d8</code></td></tr><tr><td><code>label</code></td><td>Whether the label is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>track</code></td><td>Whether the progress track is visible or not</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Loading style for progress (only supports linear progress)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Size of progress (only supports circle progress)</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td>Origin of progress (only supports circle progress)</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom label</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-ripple-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>',12);var r={render:function(s,a){return(0,l.wg)(),(0,l.j4)("div",e,[n])}}}}]);