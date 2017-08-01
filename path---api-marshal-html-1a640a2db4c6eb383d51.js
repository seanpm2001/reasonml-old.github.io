webpackJsonp([248],{"./node_modules/json-loader/index.js!./.cache/json/api-marshal-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Marshal.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Map.html" title="Map">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="MoreLabels.html" title="MoreLabels">Next</a>\n</div>\n<h1>Module <a href="type_Marshal.html">Marshal</a></h1>\n\n<pre><span class="keyword">module</span> Marshal: sig .. end</pre><div class="info module top">\nMarshaling of data structures.\n<p>\n\n   This module provides functions to encode arbitrary data structures\n   as sequences of bytes, which can then be written on a file or\n   sent over a pipe or network connection.  The bytes can then\n   be read back later, possibly in another process, and decoded back\n   into a data structure. The format for the byte sequences\n   is compatible across all machines for a given version of OCaml.\n</p><p>\n\n   Warning: marshaling is currently not type-safe. The type\n   of marshaled data is not transmitted along the value of the data,\n   making it impossible to check that the data read back possesses the\n   type expected by the context. In particular, the result type of\n   the <code class="code">Marshal.from_*</code> functions is given as <code class="code">&apos;a</code>, but this is\n   misleading: the returned OCaml value does not possess type <code class="code">&apos;a</code>\n   for all <code class="code">&apos;a</code>; it has one, unique type which cannot be determined\n   at compile-type.  The programmer should explicitly give the expected\n   type of the returned value, using the following syntax:</p><ul>\n<li><code class="code">(Marshal.from_channel chan : type)</code>.\n   Anything can happen at run-time if the object in the file does not\n   belong to the given type.</li>\n</ul>\n\n   Values of extensible variant types, for example exceptions (of\n   extensible type <code class="code">exn</code>), returned by the unmarhsaller should not be\n   pattern-matched over through <code class="code">match ... with</code> or <code class="code">try ... with</code>,\n   because unmarshalling does not preserve the information required for\n   matching their constructors. Structural equalities with other\n   extensible variant values does not work either.  Most other uses such\n   as Printexc.to_string, will still work as expected.\n<p>\n\n   The representation of marshaled values is not human-readable,\n   and uses bytes that are not printable characters. Therefore,\n   input and output channels used in conjunction with <code class="code">Marshal.to_channel</code>\n   and <code class="code">Marshal.from_channel</code> must be opened in binary mode, using e.g.\n   <code class="code">open_out_bin</code> or <code class="code">open_in_bin</code>; channels opened in text mode will\n   cause unmarshaling errors on platforms where text channels behave\n   differently than binary channels, e.g. Windows.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> extern_flags = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>No_sharing</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nDon&apos;t preserve sharing<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Closures</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nSend function closures<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Compat_32</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nEnsure 32-bit compatibility<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n\n<div class="info ">\nThe flags to the <code class="code">Marshal.to_*</code> functions below.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> to_channel: Pervasives.out_channel =&gt; &apos;a =&gt; list extern_flags =&gt; unit;\n</pre><div class="info ">\n<code class="code">Marshal.to_channel chan v flags</code> writes the representation\n   of <code class="code">v</code> on channel <code class="code">chan</code>. The <code class="code">flags</code> argument is a\n   possibly empty list of flags that governs the marshaling\n   behavior with respect to sharing, functional values, and compatibility\n   between 32- and 64-bit platforms.\n<p>\n\n   If <code class="code">flags</code> does not contain <code class="code">Marshal.No_sharing</code>, circularities\n   and sharing inside the value <code class="code">v</code> are detected and preserved\n   in the sequence of bytes produced. In particular, this\n   guarantees that marshaling always terminates. Sharing\n   between values marshaled by successive calls to\n   <code class="code">Marshal.to_channel</code> is neither detected nor preserved, though.\n   If <code class="code">flags</code> contains <code class="code">Marshal.No_sharing</code>, sharing is ignored.\n   This results in faster marshaling if <code class="code">v</code> contains no shared\n   substructures, but may cause slower marshaling and larger\n   byte representations if <code class="code">v</code> actually contains sharing,\n   or even non-termination if <code class="code">v</code> contains cycles.\n</p><p>\n\n   If <code class="code">flags</code> does not contain <code class="code">Marshal.Closures</code>, marshaling fails\n   when it encounters a functional value inside <code class="code">v</code>: only &apos;pure&apos; data\n   structures, containing neither functions nor objects, can safely be\n   transmitted between different programs. If <code class="code">flags</code> contains\n   <code class="code">Marshal.Closures</code>, functional values will be marshaled as a the\n   position in the code of the program together with the values\n   corresponding to the free variables captured in the closure.  In\n   this case, the output of marshaling can only be read back in\n   processes that run exactly the same program, with exactly the same\n   compiled code. (This is checked at un-marshaling time, using an MD5\n   digest of the code transmitted along with the code position.)\n</p><p>\n\n   The exact definition of which free variables are captured in a\n   closure is not specified and can very between bytecode and native\n   code (and according to optimization flags).  In particular, a\n   function value accessing a global reference may or may not include\n   the reference in its closure.  If it does, unmarshaling the\n   corresponding closure will create a new reference, different from\n   the global one.\n</p><p>\n\n   If <code class="code">flags</code> contains <code class="code">Marshal.Compat_32</code>, marshaling fails when\n   it encounters an integer value outside the range <code class="code">[-2{^30}, 2{^30}-1]</code>\n   of integers that are representable on a 32-bit platform.  This\n   ensures that marshaled data generated on a 64-bit platform can be\n   safely read back on a 32-bit platform.  If <code class="code">flags</code> does not\n   contain <code class="code">Marshal.Compat_32</code>, integer values outside the\n   range <code class="code">[-2{^30}, 2{^30}-1]</code> are marshaled, and can be read back on\n   a 64-bit platform, but will cause an error at un-marshaling time\n   when read back on a 32-bit platform.  The <code class="code">Mashal.Compat_32</code> flag\n   only matters when marshaling is performed on a 64-bit platform;\n   it has no effect if marshaling is performed on a 32-bit platform.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> to_bytes: &apos;a =&gt; list extern_flags =&gt; bytes;\n</pre><div class="info ">\n<code class="code">Marshal.to_bytes v flags</code> returns a byte sequence containing\n   the representation of <code class="code">v</code>.\n   The <code class="code">flags</code> argument has the same meaning as for\n   <a href="Marshal.html#VALto_channel"><code class="code">Marshal.to_channel</code></a>.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">let</span> to_string: &apos;a =&gt; list extern_flags =&gt; string;\n</pre><div class="info ">\nSame as <code class="code">to_bytes</code> but return the result as a string instead of\n    a byte sequence.<br>\n</div>\n\n<pre><span class="keyword">let</span> to_buffer: bytes =&gt; int =&gt; int =&gt; &apos;a =&gt; list extern_flags =&gt; int;\n</pre><div class="info ">\n<code class="code">Marshal.to_buffer buff ofs len v flags</code> marshals the value <code class="code">v</code>,\n   storing its byte representation in the sequence <code class="code">buff</code>,\n   starting at index <code class="code">ofs</code>, and writing at most\n   <code class="code">len</code> bytes.  It returns the number of bytes\n   actually written to the sequence. If the byte representation\n   of <code class="code">v</code> does not fit in <code class="code">len</code> characters, the exception <code class="code">Failure</code>\n   is raised.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_channel: Pervasives.in_channel =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">Marshal.from_channel chan</code> reads from channel <code class="code">chan</code> the\n   byte representation of a structured value, as produced by\n   one of the <code class="code">Marshal.to_*</code> functions, and reconstructs and\n   returns the corresponding value.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_bytes: bytes =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">Marshal.from_bytes buff ofs</code> unmarshals a structured value\n   like <a href="Marshal.html#VALfrom_channel"><code class="code">Marshal.from_channel</code></a> does, except that the byte\n   representation is not read from a channel, but taken from\n   the byte sequence <code class="code">buff</code>, starting at position <code class="code">ofs</code>.\n   The byte sequence is not mutated.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">let</span> from_string: string =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\nSame as <code class="code">from_bytes</code> but take a string as argument instead of a\n    byte sequence.<br>\n</div>\n\n<pre><span class="keyword">let</span> header_size: int;\n</pre><div class="info ">\nThe bytes representing a marshaled value are composed of\n   a fixed-size header and a variable-sized data part,\n   whose size can be determined from the header.\n   <a href="Marshal.html#VALheader_size"><code class="code">Marshal.header_size</code></a> is the size, in bytes, of the header.\n   <a href="Marshal.html#VALdata_size"><code class="code">Marshal.data_size</code></a><code class="code"> buff ofs</code> is the size, in bytes,\n   of the data part, assuming a valid header is stored in\n   <code class="code">buff</code> starting at position <code class="code">ofs</code>.\n   Finally, <a href="Marshal.html#VALtotal_size"><code class="code">Marshal.total_size</code></a> <code class="code">buff ofs</code> is the total size,\n   in bytes, of the marshaled value.\n   Both <a href="Marshal.html#VALdata_size"><code class="code">Marshal.data_size</code></a> and <a href="Marshal.html#VALtotal_size"><code class="code">Marshal.total_size</code></a> raise <code class="code">Failure</code>\n   if <code class="code">buff</code>, <code class="code">ofs</code> does not contain a valid header.\n<p>\n\n   To read the byte representation of a marshaled value into\n   a byte sequence, the program needs to read first\n   <a href="Marshal.html#VALheader_size"><code class="code">Marshal.header_size</code></a> bytes into the sequence,\n   then determine the length of the remainder of the\n   representation using <a href="Marshal.html#VALdata_size"><code class="code">Marshal.data_size</code></a>,\n   make sure the sequence is large enough to hold the remaining\n   data, then read it, and finally call <a href="Marshal.html#VALfrom_bytes"><code class="code">Marshal.from_bytes</code></a>\n   to unmarshal the value.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> data_size: bytes =&gt; int =&gt; int;\n</pre><div class="info ">\nSee <a href="Marshal.html#VALheader_size"><code class="code">Marshal.header_size</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> total_size: bytes =&gt; int =&gt; int;\n</pre><div class="info ">\nSee <a href="Marshal.html#VALheader_size"><code class="code">Marshal.header_size</code></a>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Marshal.html"}}}});
//# sourceMappingURL=path---api-marshal-html-1a640a2db4c6eb383d51.js.map