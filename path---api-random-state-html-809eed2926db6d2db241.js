webpackJsonp([213],{"./node_modules/json-loader/index.js!./.cache/json/api-random-state-html.json":function(t,n){t.exports={data:{file:{relativePath:"api/Random.State.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Random.html" title="Random">Up</a>\n&#xA0;</div>\n<h1>Module <a href="type_Random.State.html">Random.State</a></h1>\n\n<pre><span class="keyword">module</span> State: sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe type of PRNG states.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> make: array int =&gt; t;\n</pre><div class="info ">\nCreate a new state and initialize it with the given seed.<br>\n</div>\n\n<pre><span class="keyword">let</span> make_self_init: unit =&gt; t;\n</pre><div class="info ">\nCreate a new state and initialize it with a system-dependent\n      low-entropy seed.<br>\n</div>\n\n<pre><span class="keyword">let</span> copy: t =&gt; t;\n</pre><div class="info ">\nReturn a copy of the given state.<br>\n</div>\n\n<pre><span class="keyword">let</span> bits: t =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> int: t =&gt; int =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> int32: t =&gt; Int32.t =&gt; Int32.t;\n</pre>\n<pre><span class="keyword">let</span> nativeint: t =&gt; Nativeint.t =&gt; Nativeint.t;\n</pre>\n<pre><span class="keyword">let</span> int64: t =&gt; Int64.t =&gt; Int64.t;\n</pre>\n<pre><span class="keyword">let</span> float: t =&gt; float =&gt; float;\n</pre>\n<pre><span class="keyword">let</span> bool: t =&gt; bool;\n</pre><div class="info ">\nThese functions are the same as the basic functions, except that they\n      use (and update) the given PRNG state instead of the default one.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Random.State.html"}}}});
//# sourceMappingURL=path---api-random-state-html-809eed2926db6d2db241.js.map