webpackJsonp([292],{"./node_modules/json-loader/index.js!./.cache/json/api-camlinternal-format-basics-html.json":function(a,o){a.exports={data:{file:{relativePath:"api/CamlinternalFormatBasics.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="CamlinternalFormat.html" title="CamlinternalFormat">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="CamlinternalLazy.html" title="CamlinternalLazy">Next</a>\n</div>\n<h1>Module <a href="type_CamlinternalFormatBasics.html">CamlinternalFormatBasics</a></h1>\n\n<pre><span class="keyword">module</span> CamlinternalFormatBasics: sig .. end</pre><div class="info module top">\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> padty = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Left</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Right</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Zeros</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int_conv = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_d</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_pd</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_sd</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_i</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_pi</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_si</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_x</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_Cx</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_X</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_CX</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_o</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_Co</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_u</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> float_conv = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_f</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_pf</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_sf</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_e</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_pe</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_se</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_E</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_pE</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_sE</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_g</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_pg</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_sg</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_G</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_pG</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_sG</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_F</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> char_set = string;\n</pre>\n\n\n<pre><span class="keyword">type</span> counter = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Line_counter</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Char_counter</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Token_counter</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b) padding = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>No_padding : (&apos;a0, &apos;a0) padding</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Lit_padding : padty * int -&gt; (&apos;a1, &apos;a1) padding</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Arg_padding : padty -&gt; (int -&gt; &apos;a2, &apos;a2) padding</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> pad_option = option int;\n</pre>\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b) precision = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>No_precision : (&apos;a0, &apos;a0) precision</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Lit_precision : int -&gt; (&apos;a1, &apos;a1) precision</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Arg_precision : (int -&gt; &apos;a2, &apos;a2) precision</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> prec_option = option int;\n</pre>\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b, &apos;c) custom_arity = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Custom_zero : (&apos;a0, string, &apos;a0) custom_arity</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Custom_succ : (&apos;a1, &apos;b0, &apos;c0) custom_arity -&gt; (&apos;a1, &apos;x -&gt; &apos;b0, &apos;x -&gt; &apos;c0) custom_arity</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> block_type = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Pp_hbox</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Pp_vbox</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Pp_hvbox</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Pp_hovbox</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Pp_box</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Pp_fits</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> formatting_lit = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Close_box</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Close_tag</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Break of string * int * int</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>FFlush</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Force_newline</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Flush_newline</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Magic_size of string * int</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Escaped_at</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Escaped_percent</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Scan_indic of char</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b, &apos;c, &apos;d, &apos;e, &apos;f) formatting_gen = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Open_tag : (&apos;a0, &apos;b0, &apos;c0, &apos;d0, &apos;e0, &apos;f0) format6 -&gt; (&apos;a0, &apos;b0, &apos;c0, &apos;d0, &apos;e0, &apos;f0) formatting_gen</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Open_box : (&apos;a1, &apos;b1, &apos;c1, &apos;d1, &apos;e1, &apos;f1) format6 -&gt; (&apos;a1, &apos;b1, &apos;c1, &apos;d1, &apos;e1, &apos;f1) formatting_gen</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> fmtty &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f = fmtty_rel &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f;\n</pre>\n\n\n<pre><span class="keyword">type</span> (&apos;a1, &apos;b1, &apos;c1, &apos;d1, &apos;e1, &apos;f1, &apos;a2, &apos;b2, &apos;c2, &apos;d2, &apos;e2, &apos;f2) fmtty_rel = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Char_ty : (&apos;a10, &apos;b10, &apos;c10, &apos;d10, &apos;e10, &apos;f10, &apos;a20, &apos;b20, &apos;c20, &apos;d20, &apos;e20, &apos;f20)     fmtty_rel -&gt; (char -&gt; &apos;a10, &apos;b10, &apos;c10, &apos;d10, &apos;e10, &apos;f10, char -&gt; &apos;a20, &apos;b20, &apos;c20, &apos;d20,        &apos;e20, &apos;f20)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>String_ty : (&apos;a11, &apos;b11, &apos;c11, &apos;d11, &apos;e11, &apos;f11, &apos;a21, &apos;b21, &apos;c21, &apos;d21, &apos;e21, &apos;f21)     fmtty_rel -&gt; (string -&gt; &apos;a11, &apos;b11, &apos;c11, &apos;d11, &apos;e11, &apos;f11, string -&gt; &apos;a21, &apos;b21, &apos;c21,        &apos;d21, &apos;e21, &apos;f21)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_ty : (&apos;a12, &apos;b12, &apos;c12, &apos;d12, &apos;e12, &apos;f12, &apos;a22, &apos;b22, &apos;c22, &apos;d22, &apos;e22, &apos;f22)     fmtty_rel -&gt; (int -&gt; &apos;a12, &apos;b12, &apos;c12, &apos;d12, &apos;e12, &apos;f12, int -&gt; &apos;a22, &apos;b22, &apos;c22, &apos;d22,        &apos;e22, &apos;f22)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int32_ty : (&apos;a13, &apos;b13, &apos;c13, &apos;d13, &apos;e13, &apos;f13, &apos;a23, &apos;b23, &apos;c23, &apos;d23, &apos;e23, &apos;f23)     fmtty_rel -&gt; (int32 -&gt; &apos;a13, &apos;b13, &apos;c13, &apos;d13, &apos;e13, &apos;f13, int32 -&gt; &apos;a23, &apos;b23, &apos;c23,        &apos;d23, &apos;e23, &apos;f23)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Nativeint_ty : (&apos;a14, &apos;b14, &apos;c14, &apos;d14, &apos;e14, &apos;f14, &apos;a24, &apos;b24, &apos;c24, &apos;d24, &apos;e24, &apos;f24)     fmtty_rel -&gt; (nativeint -&gt; &apos;a14, &apos;b14, &apos;c14, &apos;d14, &apos;e14, &apos;f14, nativeint -&gt; &apos;a24, &apos;b24,        &apos;c24, &apos;d24, &apos;e24, &apos;f24)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int64_ty : (&apos;a15, &apos;b15, &apos;c15, &apos;d15, &apos;e15, &apos;f15, &apos;a25, &apos;b25, &apos;c25, &apos;d25, &apos;e25, &apos;f25)     fmtty_rel -&gt; (int64 -&gt; &apos;a15, &apos;b15, &apos;c15, &apos;d15, &apos;e15, &apos;f15, int64 -&gt; &apos;a25, &apos;b25, &apos;c25,        &apos;d25, &apos;e25, &apos;f25)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float_ty : (&apos;a16, &apos;b16, &apos;c16, &apos;d16, &apos;e16, &apos;f16, &apos;a26, &apos;b26, &apos;c26, &apos;d26, &apos;e26, &apos;f26)     fmtty_rel -&gt; (float -&gt; &apos;a16, &apos;b16, &apos;c16, &apos;d16, &apos;e16, &apos;f16, float -&gt; &apos;a26, &apos;b26, &apos;c26,        &apos;d26, &apos;e26, &apos;f26)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Bool_ty : (&apos;a17, &apos;b17, &apos;c17, &apos;d17, &apos;e17, &apos;f17, &apos;a27, &apos;b27, &apos;c27, &apos;d27, &apos;e27, &apos;f27)     fmtty_rel -&gt; (bool -&gt; &apos;a17, &apos;b17, &apos;c17, &apos;d17, &apos;e17, &apos;f17, bool -&gt; &apos;a27, &apos;b27, &apos;c27, &apos;d27,        &apos;e27, &apos;f27)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Format_arg_ty : (&apos;g, &apos;h, &apos;i, &apos;j, &apos;k, &apos;l) fmtty        * (&apos;a18, &apos;b18, &apos;c18, &apos;d18, &apos;e18, &apos;f18, &apos;a28, &apos;b28, &apos;c28, &apos;d28, &apos;e28, &apos;f28)          fmtty_rel -&gt; ((&apos;g, &apos;h, &apos;i, &apos;j, &apos;k, &apos;l) format6 -&gt; &apos;a18, &apos;b18,        &apos;c18, &apos;d18, &apos;e18, &apos;f18,        (&apos;g, &apos;h, &apos;i, &apos;j, &apos;k, &apos;l) format6 -&gt; &apos;a28, &apos;b28,        &apos;c28, &apos;d28, &apos;e28, &apos;f28)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Format_subst_ty : (&apos;g0, &apos;h0, &apos;i0, &apos;j0, &apos;k0, &apos;l0, &apos;g1, &apos;b19, &apos;c19, &apos;j1, &apos;d19, &apos;a19)     fmtty_rel        * (&apos;g0, &apos;h0, &apos;i0, &apos;j0, &apos;k0, &apos;l0, &apos;g2, &apos;b29, &apos;c29, &apos;j2, &apos;d29, &apos;a29)          fmtty_rel        * (&apos;a19, &apos;b19, &apos;c19, &apos;d19, &apos;e19, &apos;f19, &apos;a29, &apos;b29, &apos;c29, &apos;d29, &apos;e29, &apos;f29)          fmtty_rel -&gt; ((&apos;g0, &apos;h0, &apos;i0, &apos;j0, &apos;k0, &apos;l0) format6 -&gt; &apos;g1,        &apos;b19, &apos;c19, &apos;j1, &apos;e19, &apos;f19,        (&apos;g0, &apos;h0, &apos;i0, &apos;j0, &apos;k0, &apos;l0) format6 -&gt; &apos;g2,        &apos;b29, &apos;c29, &apos;j2, &apos;e29, &apos;f29)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Alpha_ty : (&apos;a110, &apos;b110, &apos;c110, &apos;d110, &apos;e110, &apos;f110, &apos;a210, &apos;b210, &apos;c210, &apos;d210, &apos;e210,      &apos;f210)     fmtty_rel -&gt; ((&apos;b110 -&gt; &apos;x -&gt; &apos;c110) -&gt; &apos;x -&gt; &apos;a110, &apos;b110, &apos;c110, &apos;d110, &apos;e110, &apos;f110,        (&apos;b210 -&gt; &apos;x -&gt; &apos;c210) -&gt; &apos;x -&gt; &apos;a210, &apos;b210, &apos;c210, &apos;d210, &apos;e210, &apos;f210)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Theta_ty : (&apos;a111, &apos;b111, &apos;c111, &apos;d111, &apos;e111, &apos;f111, &apos;a211, &apos;b211, &apos;c211, &apos;d211, &apos;e211,      &apos;f211)     fmtty_rel -&gt; ((&apos;b111 -&gt; &apos;c111) -&gt; &apos;a111, &apos;b111, &apos;c111, &apos;d111, &apos;e111, &apos;f111,        (&apos;b211 -&gt; &apos;c211) -&gt; &apos;a211, &apos;b211, &apos;c211, &apos;d211, &apos;e211, &apos;f211)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Any_ty : (&apos;a112, &apos;b112, &apos;c112, &apos;d112, &apos;e112, &apos;f112, &apos;a212, &apos;b212, &apos;c212, &apos;d212, &apos;e212,      &apos;f212)     fmtty_rel -&gt; (&apos;x0 -&gt; &apos;a112, &apos;b112, &apos;c112, &apos;d112, &apos;e112, &apos;f112, &apos;x0 -&gt; &apos;a212, &apos;b212, &apos;c212,        &apos;d212, &apos;e212, &apos;f212)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Reader_ty : (&apos;a113, &apos;b113, &apos;c113, &apos;d113, &apos;e113, &apos;f113, &apos;a213, &apos;b213, &apos;c213, &apos;d213, &apos;e213,      &apos;f213)     fmtty_rel -&gt; (&apos;x1 -&gt; &apos;a113, &apos;b113, &apos;c113, (&apos;b113 -&gt; &apos;x1) -&gt; &apos;d113, &apos;e113, &apos;f113,        &apos;x1 -&gt; &apos;a213, &apos;b213, &apos;c213, (&apos;b213 -&gt; &apos;x1) -&gt; &apos;d213, &apos;e213, &apos;f213)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_reader_ty : (&apos;a114, &apos;b114, &apos;c114, &apos;d114, &apos;e114, &apos;f114, &apos;a214, &apos;b214, &apos;c214, &apos;d214, &apos;e214,      &apos;f214)     fmtty_rel -&gt; (&apos;a114, &apos;b114, &apos;c114, (&apos;b114 -&gt; &apos;x2) -&gt; &apos;d114, &apos;e114, &apos;f114, &apos;a214, &apos;b214,        &apos;c214, (&apos;b214 -&gt; &apos;x2) -&gt; &apos;d214, &apos;e214, &apos;f214)       fmtty_rel</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>End_of_fmtty : (&apos;f115, &apos;b115, &apos;c115, &apos;d115, &apos;d115, &apos;f115, &apos;f215, &apos;b215, &apos;c215, &apos;d215, &apos;d215,        &apos;f215)       fmtty_rel</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b, &apos;c, &apos;d, &apos;e, &apos;f) fmt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Char : (&apos;a0, &apos;b0, &apos;c0, &apos;d0, &apos;e0, &apos;f0) fmt -&gt; (char -&gt; &apos;a0, &apos;b0, &apos;c0, &apos;d0, &apos;e0, &apos;f0) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Caml_char : (&apos;a1, &apos;b1, &apos;c1, &apos;d1, &apos;e1, &apos;f1) fmt -&gt; (char -&gt; &apos;a1, &apos;b1, &apos;c1, &apos;d1, &apos;e1, &apos;f1) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>String : (&apos;x, string -&gt; &apos;a2) padding        * (&apos;a2, &apos;b2, &apos;c2, &apos;d2, &apos;e2, &apos;f2) fmt -&gt; (&apos;x, &apos;b2, &apos;c2, &apos;d2, &apos;e2, &apos;f2) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Caml_string : (&apos;x0, string -&gt; &apos;a3) padding        * (&apos;a3, &apos;b3, &apos;c3, &apos;d3, &apos;e3, &apos;f3) fmt -&gt; (&apos;x0, &apos;b3, &apos;c3, &apos;d3, &apos;e3, &apos;f3) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int : int_conv        * (&apos;x1, &apos;y) padding        * (&apos;y, int -&gt; &apos;a4) precision        * (&apos;a4, &apos;b4, &apos;c4, &apos;d4, &apos;e4, &apos;f4) fmt -&gt; (&apos;x1, &apos;b4, &apos;c4, &apos;d4, &apos;e4, &apos;f4) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int32 : int_conv        * (&apos;x2, &apos;y0) padding        * (&apos;y0, int32 -&gt; &apos;a5) precision        * (&apos;a5, &apos;b5, &apos;c5, &apos;d5, &apos;e5, &apos;f5) fmt -&gt; (&apos;x2, &apos;b5, &apos;c5, &apos;d5, &apos;e5, &apos;f5) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Nativeint : int_conv        * (&apos;x3, &apos;y1) padding        * (&apos;y1, nativeint -&gt; &apos;a6) precision        * (&apos;a6, &apos;b6, &apos;c6, &apos;d6, &apos;e6, &apos;f6) fmt -&gt; (&apos;x3, &apos;b6, &apos;c6, &apos;d6, &apos;e6, &apos;f6) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int64 : int_conv        * (&apos;x4, &apos;y2) padding        * (&apos;y2, int64 -&gt; &apos;a7) precision        * (&apos;a7, &apos;b7, &apos;c7, &apos;d7, &apos;e7, &apos;f7) fmt -&gt; (&apos;x4, &apos;b7, &apos;c7, &apos;d7, &apos;e7, &apos;f7) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float : float_conv        * (&apos;x5, &apos;y3) padding        * (&apos;y3, float -&gt; &apos;a8) precision        * (&apos;a8, &apos;b8, &apos;c8, &apos;d8, &apos;e8, &apos;f8) fmt -&gt; (&apos;x5, &apos;b8, &apos;c8, &apos;d8, &apos;e8, &apos;f8) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Bool : (&apos;a9, &apos;b9, &apos;c9, &apos;d9, &apos;e9, &apos;f9) fmt -&gt; (bool -&gt; &apos;a9, &apos;b9, &apos;c9, &apos;d9, &apos;e9, &apos;f9) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Flush : (&apos;a10, &apos;b10, &apos;c10, &apos;d10, &apos;e10, &apos;f10) fmt -&gt; (&apos;a10, &apos;b10, &apos;c10, &apos;d10, &apos;e10, &apos;f10) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>String_literal : string * (&apos;a11, &apos;b11, &apos;c11, &apos;d11, &apos;e11, &apos;f11) fmt -&gt; (&apos;a11, &apos;b11, &apos;c11, &apos;d11, &apos;e11, &apos;f11) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Char_literal : char * (&apos;a12, &apos;b12, &apos;c12, &apos;d12, &apos;e12, &apos;f12) fmt -&gt; (&apos;a12, &apos;b12, &apos;c12, &apos;d12, &apos;e12, &apos;f12) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Format_arg : pad_option        * (&apos;g, &apos;h, &apos;i, &apos;j, &apos;k, &apos;l) fmtty        * (&apos;a13, &apos;b13, &apos;c13, &apos;d13, &apos;e13, &apos;f13) fmt -&gt; ((&apos;g, &apos;h, &apos;i, &apos;j, &apos;k, &apos;l) format6 -&gt; &apos;a13, &apos;b13,        &apos;c13, &apos;d13, &apos;e13, &apos;f13)       fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Format_subst : pad_option        * (&apos;g0, &apos;h0, &apos;i0, &apos;j0, &apos;k0, &apos;l0, &apos;g2, &apos;b14, &apos;c14, &apos;j2, &apos;d14, &apos;a14)          fmtty_rel        * (&apos;a14, &apos;b14, &apos;c14, &apos;d14, &apos;e14, &apos;f14) fmt -&gt; ((&apos;g0, &apos;h0, &apos;i0, &apos;j0, &apos;k0, &apos;l0) format6 -&gt; &apos;g2,        &apos;b14, &apos;c14, &apos;j2, &apos;e14, &apos;f14)       fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Alpha : (&apos;a15, &apos;b15, &apos;c15, &apos;d15, &apos;e15, &apos;f15) fmt -&gt; ((&apos;b15 -&gt; &apos;x6 -&gt; &apos;c15) -&gt; &apos;x6 -&gt; &apos;a15, &apos;b15, &apos;c15, &apos;d15, &apos;e15, &apos;f15)       fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Theta : (&apos;a16, &apos;b16, &apos;c16, &apos;d16, &apos;e16, &apos;f16) fmt -&gt; ((&apos;b16 -&gt; &apos;c16) -&gt; &apos;a16, &apos;b16, &apos;c16, &apos;d16, &apos;e16, &apos;f16)       fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Formatting_lit : formatting_lit        * (&apos;a17, &apos;b17, &apos;c17, &apos;d17, &apos;e17, &apos;f17) fmt -&gt; (&apos;a17, &apos;b17, &apos;c17, &apos;d17, &apos;e17, &apos;f17) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Formatting_gen : (&apos;a18, &apos;b18, &apos;c18, &apos;d18, &apos;e18, &apos;f18) formatting_gen        * (&apos;f18, &apos;b18, &apos;c18, &apos;e18, &apos;e20, &apos;f20) fmt -&gt; (&apos;a18, &apos;b18, &apos;c18, &apos;d18, &apos;e20, &apos;f20) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Reader : (&apos;a19, &apos;b19, &apos;c19, &apos;d19, &apos;e19, &apos;f19) fmt -&gt; (&apos;x7 -&gt; &apos;a19, &apos;b19, &apos;c19, (&apos;b19 -&gt; &apos;x7) -&gt; &apos;d19, &apos;e19, &apos;f19)       fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Scan_char_set : pad_option * char_set        * (&apos;a20, &apos;b20, &apos;c20, &apos;d20, &apos;e21, &apos;f21) fmt -&gt; (string -&gt; &apos;a20, &apos;b20, &apos;c20, &apos;d20, &apos;e21, &apos;f21) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Scan_get_counter : counter        * (&apos;a21, &apos;b21, &apos;c21, &apos;d21, &apos;e22, &apos;f22) fmt -&gt; (int -&gt; &apos;a21, &apos;b21, &apos;c21, &apos;d21, &apos;e22, &apos;f22) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Scan_next_char : (&apos;a22, &apos;b22, &apos;c22, &apos;d22, &apos;e23, &apos;f23) fmt -&gt; (char -&gt; &apos;a22, &apos;b22, &apos;c22, &apos;d22, &apos;e23, &apos;f23) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_param : (&apos;a23, &apos;b23, &apos;c23, &apos;d23, &apos;y4, &apos;x8) ignored        * (&apos;x8, &apos;b23, &apos;c23, &apos;y4, &apos;e24, &apos;f24) fmt -&gt; (&apos;a23, &apos;b23, &apos;c23, &apos;d23, &apos;e24, &apos;f24) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Custom : (&apos;a24, &apos;x9, &apos;y5) custom_arity * (unit -&gt; &apos;x9)        * (&apos;a24, &apos;b24, &apos;c24, &apos;d24, &apos;e25, &apos;f25) fmt -&gt; (&apos;y5, &apos;b24, &apos;c24, &apos;d24, &apos;e25, &apos;f25) fmt</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>End_of_format : (&apos;f26, &apos;b25, &apos;c25, &apos;e26, &apos;e26, &apos;f26) fmt</code></td>\n\n</tr></tbody></table>\n\n<div class="info ">\nList of format elements.<br>\n</div>\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b, &apos;c, &apos;d, &apos;e, &apos;f) ignored = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_char : (&apos;a0, &apos;b0, &apos;c0, &apos;d0, &apos;d0, &apos;a0) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_caml_char : (&apos;a1, &apos;b1, &apos;c1, &apos;d1, &apos;d1, &apos;a1) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_string : pad_option -&gt; (&apos;a2, &apos;b2, &apos;c2, &apos;d2, &apos;d2, &apos;a2) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_caml_string : pad_option -&gt; (&apos;a3, &apos;b3, &apos;c3, &apos;d3, &apos;d3, &apos;a3) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_int : int_conv * pad_option -&gt; (&apos;a4, &apos;b4, &apos;c4, &apos;d4, &apos;d4, &apos;a4) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_int32 : int_conv * pad_option -&gt; (&apos;a5, &apos;b5, &apos;c5, &apos;d5, &apos;d5, &apos;a5) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_nativeint : int_conv * pad_option -&gt; (&apos;a6, &apos;b6, &apos;c6, &apos;d6, &apos;d6, &apos;a6) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_int64 : int_conv * pad_option -&gt; (&apos;a7, &apos;b7, &apos;c7, &apos;d7, &apos;d7, &apos;a7) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_float : pad_option * prec_option -&gt; (&apos;a8, &apos;b8, &apos;c8, &apos;d8, &apos;d8, &apos;a8) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_bool : (&apos;a9, &apos;b9, &apos;c9, &apos;d9, &apos;d9, &apos;a9) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_format_arg : pad_option        * (&apos;g, &apos;h, &apos;i, &apos;j, &apos;k, &apos;l) fmtty -&gt; (&apos;a10, &apos;b10, &apos;c10, &apos;d10, &apos;d10, &apos;a10) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_format_subst : pad_option        * (&apos;a11, &apos;b11, &apos;c11, &apos;d11, &apos;e0, &apos;f0) fmtty -&gt; (&apos;a11, &apos;b11, &apos;c11, &apos;d11, &apos;e0, &apos;f0) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_reader : (&apos;a12, &apos;b12, &apos;c12, (&apos;b12 -&gt; &apos;x) -&gt; &apos;d12, &apos;d12, &apos;a12)       ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_scan_char_set : pad_option * char_set -&gt; (&apos;a13, &apos;b13, &apos;c13, &apos;d13, &apos;d13, &apos;a13) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_scan_get_counter : counter -&gt; (&apos;a14, &apos;b14, &apos;c14, &apos;d14, &apos;d14, &apos;a14) ignored</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ignored_scan_next_char : (&apos;a15, &apos;b15, &apos;c15, &apos;d15, &apos;d15, &apos;a15) ignored</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b, &apos;c, &apos;d, &apos;e, &apos;f) format6 = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Format of (&apos;a, &apos;b, &apos;c, &apos;d, &apos;e, &apos;f) fmt * string</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">let</span> concat_fmtty:\n  fmtty_rel &apos;g1 &apos;b1 &apos;c1 &apos;j1 &apos;d1 &apos;a1 &apos;g2 &apos;b2 &apos;c2 &apos;j2 &apos;d2 &apos;a2 =&gt;\n  fmtty_rel &apos;a1 &apos;b1 &apos;c1 &apos;d1 &apos;e1 &apos;f1 &apos;a2 &apos;b2 &apos;c2 &apos;d2 &apos;e2 &apos;f2 =&gt;\n  fmtty_rel &apos;g1 &apos;b1 &apos;c1 &apos;j1 &apos;e1 &apos;f1 &apos;g2 &apos;b2 &apos;c2 &apos;j2 &apos;e2 &apos;f2;\n</pre>\n<pre><span class="keyword">let</span> erase_rel: fmtty_rel &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f &apos;g &apos;h &apos;i &apos;j &apos;k &apos;l =&gt; fmtty &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f;\n</pre>\n<pre><span class="keyword">let</span> concat_fmt: fmt &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f =&gt; fmt &apos;f &apos;b &apos;c &apos;e &apos;g &apos;h =&gt; fmt &apos;a &apos;b &apos;c &apos;d &apos;g &apos;h;\n</pre></div>'
}}},pathContext:{relativePath:"api/CamlinternalFormatBasics.html"}}}});
//# sourceMappingURL=path---api-camlinternal-format-basics-html-9371fc4e306ce34e94df.js.map