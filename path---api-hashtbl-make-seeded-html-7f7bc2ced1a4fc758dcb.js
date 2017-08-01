webpackJsonp([276],{"./node_modules/json-loader/index.js!./.cache/json/api-hashtbl-make-seeded-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Hashtbl.MakeSeeded.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Hashtbl.Make.html" title="Hashtbl.Make">Previous</a>\n&#xA0;<a class="up" href="Hashtbl.html" title="Hashtbl">Up</a>\n&#xA0;</div>\n<h1>Functor <a href="type_Hashtbl.MakeSeeded.html">Hashtbl.MakeSeeded</a></h1>\n\n<pre><span class="keyword">module</span> MakeSeeded: (H: SeededHashedType) =&gt; SeededS with type key = H.t;\n</pre><div class="info module top">\nFunctor building an implementation of the hashtable structure.\n    The functor <code class="code">Hashtbl.MakeSeeded</code> returns a structure containing\n    a type <code class="code">key</code> of keys and a type <code class="code">&apos;a t</code> of hash tables\n    associating data of type <code class="code">&apos;a</code> to keys of type <code class="code">key</code>.\n    The operations perform similarly to those of the generic\n    interface, but use the seeded hashing and equality functions\n    specified in the functor argument <code class="code">H</code> instead of generic\n    equality and hashing.  The <code class="code">create</code> operation of the\n    result structure supports the <code class="code">~random</code> optional parameter\n    and returns randomized hash tables if <code class="code">~random:true</code> is passed\n    or if randomization is globally on (see <a href="Hashtbl.html#VALrandomize"><code class="code">Hashtbl.randomize</code></a>).<br>\n<b>Since</b> 4.00.0<br>\n</div>\n<table border="0" cellpadding="3" width="100%">\n<tbody><tr>\n<td align="left" valign="top" width="1%%"><b>Parameters: </b></td>\n<td>\n<table class="paramstable">\n<tbody><tr>\n<td align="center" valign="top" width="15%">\n<code>H</code></td>\n<td align="center" valign="top">:</td>\n<td><code class="type">SeededHashedType</code>\n</td></tr></tbody></table>\n</td>\n</tr>\n</tbody></table>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> key;\n</pre>\n\n\n<pre><span class="keyword">type</span> t &apos;a;\n</pre>\n\n\n<pre><span class="keyword">let</span> create: random::bool? =&gt; int =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> clear: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> reset: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> copy: t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> add: t &apos;a =&gt; key =&gt; &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> remove: t &apos;a =&gt; key =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> find: t &apos;a =&gt; key =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> find_all: t &apos;a =&gt; key =&gt; list &apos;a;\n</pre>\n<pre><span class="keyword">let</span> replace: t &apos;a =&gt; key =&gt; &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> mem: t &apos;a =&gt; key =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> iter: (key =&gt; &apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: (key =&gt; &apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; &apos;b =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> length: t &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> stats: t &apos;a =&gt; Hashtbl.statistics;\n</pre></div>'}}},pathContext:{relativePath:"api/Hashtbl.MakeSeeded.html"}}}});
//# sourceMappingURL=path---api-hashtbl-make-seeded-html-7f7bc2ced1a4fc758dcb.js.map