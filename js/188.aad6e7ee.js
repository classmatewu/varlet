(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[188],{188:(s,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var n=a(7875),t={class:"varlet-site-doc"},o=(0,n.uE)('<h1>Browser Adaptation</h1><div class="card"><h3>Intro</h3><p>The component library provides mobile and desktop adaptations, scheme <code>varlet-touch-emulator</code> is used for mobile terminal adaptation, scheme <code>varlet-touch-emulator</code> is used for mobile terminal adaptation.</p></div><div class="card"><h3>Mobile Adaptation</h3><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use PostCSS plugin to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code></p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-meta">#</span><span class="bash"> npm</span>\nnpm i postcss-px-to-viewport -D\n<span class="hljs-meta">#</span><span class="bash"> yarn</span>\nyarn add postcss-px-to-viewport -D\n\n         </code>\n       </pre><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-comment">// postcss.config.js</span>\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">plugins</span>: {\n    <span class="hljs-string">&#39;postcss-px-to-viewport&#39;</span>: {\n      <span class="hljs-attr">viewportWidth</span>: <span class="hljs-number">375</span>,\n      <span class="hljs-attr">unitPrecision</span>: <span class="hljs-number">6</span>,\n      <span class="hljs-attr">unitToConvert</span>: <span class="hljs-string">&#39;px&#39;</span>,\n      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],\n    }\n  }\n}\n\n         </code>\n       </pre></div><div class="card"><h3>Desktop Adaptation</h3><p>Because component library interaction events are developed using <code>touch</code> events, <code>mouse</code> events on the desktop side are not supported. It is recommended to use <code>@varlet/touch-emulator</code> to set <code>touch -&gt; mouse</code> for desktop adaptation.</p><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-meta">#</span><span class="bash"> npm</span>\nnpm i @varlet/touch-emulator\n<span class="hljs-meta">#</span><span class="bash"> yarn</span>\nyarn add @varlet/touch-emulator\n\n         </code>\n       </pre><pre>         <code>\n           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">\n           <span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/touch-emulator&#39;</span>\n\n         </code>\n       </pre></div>',4);var c={render:function(s,e){return(0,n.wg)(),(0,n.j4)("div",t,[o])}}}}]);