rollup-errors
=============

```
yarn
yarn build
```

Errors:

```
yarn run v1.15.2
$ rollup -c

src/index.tsx → dist/index.js, dist/index.es.js...
(!) Plugin node-resolve: preferring built-in module 'path' over local alternative at 'path', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'vm' over local alternative at 'vm', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'events' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\events\events.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to
disable this warning
(!) Plugin node-resolve: preferring built-in module 'fs' over local alternative at 'fs', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'url' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\url\url.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable t
his warning
(!) Plugin node-resolve: preferring built-in module 'punycode' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\punycode\punycode.es6.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins:
 true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'util' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\util\util.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disabl
e this warning
(!) Plugin node-resolve: preferring built-in module 'http' over local alternative at 'http', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'child_process' over local alternative at 'child_process', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'querystring' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\querystring\index.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins:
true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'stream' over local alternative at 'stream', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'buffer' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\buffer\index.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to d
isable this warning
(!) Plugin node-resolve: preferring built-in module 'net' over local alternative at 'net', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'os' over local alternative at 'os', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'crypto' over local alternative at 'crypto', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'https' over local alternative at 'https', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'tls' over local alternative at 'tls', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'zlib' over local alternative at 'zlib', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'string_decoder' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\string_decoder\lib\string_decoder.js', pass 'preferBuiltins: false' to disable this behavior o
r 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'punycode' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\request\node_modules\punycode\punycode.js', pass 'preferBuiltins: false' to disable this behavior or
 'preferBuiltins: true' to disable this warning
(!) Plugin node-resolve: preferring built-in module 'assert' over local alternative at 'D:\REPO\github\zevs-lite\node_modules\assert\assert.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to
disable this warning
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
path (imported by ..\..\node_modules\jsdom\lib\api.js, ..\..\node_modules\jsdom\lib\jsdom\utils.js,  path?commonjs-external, ..\..\node_modules\mime-types\index.js, ..\..\node_modules\form-data\lib\form_data.js)
vm (imported by ..\..\node_modules\jsdom\lib\api.js, ..\..\node_modules\jsdom\lib\jsdom\browser\Window.js,  vm?commonjs-external, ..\..\node_modules\jsdom\lib\jsdom\living\helpers\create-event-accessor.js, ..\..\node_modules\jsd
om\lib\jsdom\living\nodes\HTMLScriptElement-impl.js)
fs (imported by ..\..\node_modules\pn\fs.js, ..\..\node_modules\jsdom\lib\jsdom\browser\resources\resource-loader.js, ..\..\node_modules\jsdom\lib\jsdom\living\xhr-utils.js,  fs?commonjs-external, ..\..\node_modules\request\lib\
har.js, ..\..\node_modules\form-data\lib\form_data.js)
events (imported by ..\..\node_modules\jsdom\lib\jsdom\virtual-console.js,  events?commonjs-external, ..\..\node_modules\jsdom\lib\jsdom\living\xhr-utils.js, ..\..\node_modules\ws\lib\websocket.js, ..\..\node_modules\ws\lib\webs
ocket-server.js, ..\..\node_modules\tunnel-agent\index.js)
canvas (imported by ..\..\node_modules\jsdom\lib\jsdom\utils.js,  canvas?commonjs-external)
url (imported by ..\..\node_modules\jsdom\node_modules\tough-cookie\lib\cookie.js, ..\..\node_modules\jsdom\lib\jsdom\living\websockets\WebSocket-impl.js,  url?commonjs-external, ..\..\node_modules\tough-cookie\lib\cookie.js, ..
\..\node_modules\ws\lib\websocket.js, ..\..\node_modules\request\request.js, ..\..\node_modules\request\lib\redirect.js, ..\..\node_modules\request\lib\oauth.js, ..\..\node_modules\request\lib\tunnel.js, ..\..\node_modules\reque
st\node_modules\tough-cookie\lib\cookie.js, ..\..\node_modules\aws-sign2\index.js, ..\..\node_modules\aws4\aws4.js, ..\..\node_modules\form-data\lib\form_data.js)
util (imported by ..\..\node_modules\jsdom\node_modules\tough-cookie\lib\cookie.js, ..\..\node_modules\jsdom\lib\jsdom\living\helpers\runtime-script-errors.js, ..\..\node_modules\jsdom\node_modules\tough-cookie\lib\memstore.js,
util?commonjs-external, ..\..\node_modules\tough-cookie\lib\cookie.js, ..\..\node_modules\tough-cookie\lib\memstore.js, ..\..\node_modules\request\request.js, ..\..\node_modules\request\node_modules\tough-cookie\lib\cookie.js, .
.\..\node_modules\forever-agent\index.js, ..\..\node_modules\form-data\lib\form_data.js, ..\..\node_modules\request\node_modules\tough-cookie\lib\memstore.js, ..\..\node_modules\tunnel-agent\index.js, ..\..\node_modules\combined
-stream\lib\combined_stream.js, ..\..\node_modules\http-signature\lib\parser.js, ..\..\node_modules\http-signature\lib\utils.js, ..\..\node_modules\http-signature\lib\signer.js, ..\..\node_modules\delayed-stream\lib\delayed_stre
am.js, ..\..\node_modules\assert-plus\assert.js, ..\..\node_modules\jsprim\lib\jsprim.js, ..\..\node_modules\sshpk\lib\errors.js, ..\..\node_modules\sshpk\lib\identity.js, ..\..\node_modules\sshpk\lib\private-key.js, ..\..\node_
modules\sshpk\lib\certificate.js, ..\..\node_modules\extsprintf\lib\extsprintf.js, ..\..\node_modules\sshpk\lib\ed-compat.js, ..\..\node_modules\verror\lib\verror.js, ..\..\node_modules\verror\node_modules\extsprintf\lib\extspri
ntf.js)
punycode (imported by ..\..\node_modules\jsdom\node_modules\tough-cookie\lib\cookie.js, ..\..\node_modules\whatwg-url\lib\url-state-machine.js,  punycode?commonjs-external, ..\..\node_modules\tr46\index.js, ..\..\node_modules\ps
l\index.js, ..\..\node_modules\tough-cookie\lib\cookie.js, ..\..\node_modules\request\node_modules\tough-cookie\lib\cookie.js)
http (imported by ..\..\node_modules\jsdom\lib\jsdom\living\xmlhttprequest.js,  http?commonjs-external, ..\..\node_modules\ws\lib\websocket.js, ..\..\node_modules\ws\lib\websocket-server.js, ..\..\node_modules\request\request.js
, ..\..\node_modules\forever-agent\index.js, ..\..\node_modules\form-data\lib\form_data.js, ..\..\node_modules\tunnel-agent\index.js, ..\..\node_modules\http-signature\lib\signer.js)
child_process (imported by ..\..\node_modules\jsdom\lib\jsdom\living\xmlhttprequest.js,  child_process?commonjs-external)
stream (imported by ..\..\node_modules\iconv-lite\lib\streams.js, ..\..\node_modules\iconv-lite\lib\extend-node.js, ..\..\node_modules\ws\lib\receiver.js, ..\..\node_modules\ws\lib\stream.js, ..\..\node_modules\request\request.j
s,  stream?commonjs-external, ..\..\node_modules\isstream\isstream.js, ..\..\node_modules\combined-stream\lib\combined_stream.js, ..\..\node_modules\delayed-stream\lib\delayed_stream.js, ..\..\node_modules\assert-plus\assert.js,
 ..\..\node_modules\sshpk\lib\ed-compat.js)
querystring (imported by ..\..\node_modules\jsdom\lib\jsdom\living\file-api\FileReader-impl.js,  querystring?commonjs-external, ..\..\node_modules\request\lib\har.js, ..\..\node_modules\request\lib\querystring.js, ..\..\node_mod
ules\aws4\aws4.js)
net (imported by ..\..\node_modules\tough-cookie\lib\cookie.js, ..\..\node_modules\ws\lib\websocket.js,  net?commonjs-external, ..\..\node_modules\forever-agent\index.js, ..\..\node_modules\request\node_modules\tough-cookie\lib\
cookie.js, ..\..\node_modules\tunnel-agent\index.js)
buffer (imported by ..\..\node_modules\safer-buffer\safer.js, ..\..\node_modules\iconv-lite\lib\extend-node.js, ..\..\node_modules\iconv-lite\lib\streams.js,  buffer?commonjs-external, ..\..\node_modules\safe-buffer\index.js)
os (imported by ..\..\node_modules\jsdom\lib\jsdom\living\navigator\NavigatorConcurrentHardware-impl.js,  os?commonjs-external)
crypto (imported by ..\..\node_modules\ws\lib\websocket-server.js, ..\..\node_modules\ws\lib\sender.js, ..\..\node_modules\ws\lib\websocket.js, ..\..\node_modules\request\lib\helpers.js, ..\..\node_modules\request\lib\oauth.js,
..\..\node_modules\request\lib\hawk.js,  crypto?commonjs-external, ..\..\node_modules\aws-sign2\index.js, ..\..\node_modules\aws4\aws4.js, ..\..\node_modules\oauth-sign\index.js, ..\..\node_modules\uuid\lib\rng.js, ..\..\node_mo
dules\http-signature\lib\verify.js, ..\..\node_modules\http-signature\lib\signer.js, ..\..\node_modules\sshpk\lib\key.js, ..\..\node_modules\sshpk\lib\fingerprint.js, ..\..\node_modules\sshpk\lib\private-key.js, ..\..\node_modul
es\sshpk\lib\identity.js, ..\..\node_modules\sshpk\lib\signature.js, ..\..\node_modules\sshpk\lib\certificate.js, ..\..\node_modules\sshpk\lib\dhe.js, ..\..\node_modules\sshpk\lib\utils.js, ..\..\node_modules\sshpk\lib\formats\p
em.js, ..\..\node_modules\sshpk\lib\formats\ssh-private.js, ..\..\node_modules\sshpk\lib\formats\openssh-cert.js, ..\..\node_modules\tweetnacl\nacl-fast.js, ..\..\node_modules\ecc-jsbn\index.js)
https (imported by ..\..\node_modules\ws\lib\websocket.js, ..\..\node_modules\request\request.js,  https?commonjs-external, ..\..\node_modules\forever-agent\index.js, ..\..\node_modules\form-data\lib\form_data.js, ..\..\node_mod
ules\tunnel-agent\index.js)
tls (imported by ..\..\node_modules\ws\lib\websocket.js,  tls?commonjs-external, ..\..\node_modules\forever-agent\index.js, ..\..\node_modules\tunnel-agent\index.js)
bufferutil (imported by ..\..\node_modules\ws\lib\buffer-util.js,  bufferutil?commonjs-external)
utf-8-validate (imported by ..\..\node_modules\ws\lib\validation.js,  utf-8-validate?commonjs-external)
zlib (imported by ..\..\node_modules\ws\lib\permessage-deflate.js, ..\..\node_modules\request\request.js,  zlib?commonjs-external)
string_decoder (imported by ..\..\node_modules\iconv-lite\encodings\internal.js,  string_decoder?commonjs-external)
assert (imported by ..\..\node_modules\tunnel-agent\index.js,  assert?commonjs-external, ..\..\node_modules\assert-plus\assert.js, ..\..\node_modules\extsprintf\lib\extsprintf.js, ..\..\node_modules\verror\node_modules\extsprint
f\lib\extsprintf.js, ..\..\node_modules\asn1\lib\ber\writer.js, ..\..\node_modules\asn1\lib\ber\reader.js)
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\
node_modules\cssstyle\node_modules\cssom\lib\CSSStyleSheet.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleRule.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSS
tyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\
node_modules\cssstyle\node_modules\cssom\lib\CSSStyleSheet.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleRule.js ->  D:\REPO\github\zevs-lite\node_modules\jsdom\node_modules\cssstyle\node_mo
dules\cssom\lib\CSSStyleDeclaration.js?commonjs-proxy -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleSheet.js -> ..\..\node_modules\jsdom\node_m
odules\cssstyle\node_modules\cssom\lib\parse.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleSheet.js ->  D:\REPO\github\zevs-lite\node_
modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js?commonjs-proxy -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\
node_modules\cssstyle\node_modules\cssom\lib\CSSFontFaceRule.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\
node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\
node_modules\cssstyle\node_modules\cssom\lib\CSSKeyframeRule.js -> ..\..\node_modules\jsdom\node_modules\cssstyle\node_modules\cssom\lib\CSSStyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Attr.js -> ..\..\node_modules\jsdom\lib\jsdom\living\attributes\Attr-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\attributes.js -> ..\..\node_m
odules\jsdom\lib\jsdom\living\generated\Attr.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Attr.js -> ..\..\node_modules\jsdom\lib\jsdom\living\attributes\Attr-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\attributes.js ->  D:\REPO\git
hub\zevs-lite\node_modules\jsdom\lib\jsdom\living\generated\Attr.js?commonjs-proxy -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\Attr.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js -> ..\..\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\MouseEven
t.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\MouseEventInit.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js -> ..\..\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\MouseEven
t.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\MouseEventInit.js ->  D:\REPO\github\zevs-lite\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js?commonjs-proxy -> ..\..\node_modules\jsdom\lib\jsdom\living\
generated\EventTarget.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js -> ..\..\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\MouseEven
t.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\signature.js -> ..\..\node_modules\sshpk\lib\utils.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\signature.js -> ..\..\node_modules\sshpk\
lib\utils.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\signature.js -> ..\..\node_modules\sshpk\lib\utils.js ->  D:\REPO\github\zevs-lite\node_modules\sshpk\lib\private-key.js?common
js-proxy -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\signature.js -> ..\..\node_modules\sshpk\
lib\utils.js ->  D:\REPO\github\zevs-lite\node_modules\sshpk\lib\key.js?commonjs-proxy -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\dhe.js -> ..\..\node_modules\sshpk\lib\ke
y.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\dhe.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\pkcs1.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\pkcs1.js -> ..\..\node_m
odules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\pkcs1.js -> ..\..\node_modules\sshpk\lib\formats\pem.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\pkcs1.js -> ..\..\node_modules\sshpk\lib\formats\pkcs8.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\pkcs1.js -> ..\..\node_m
odules\sshpk\lib\formats\pkcs8.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\pkcs1.js -> ..\..\node_modules\sshpk\lib\formats\pkcs8.js -> ..\..\node_modules\sshpk\lib\formats\pem.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\pkcs1.js -> ..\..\node_modules\sshpk\lib\formats\pkcs8.js ->  D:\REPO\github\zevs-lite\node_modules\sshpk\lib\formats\p
em.js?commonjs-proxy -> ..\..\node_modules\sshpk\lib\formats\pem.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\ssh-private.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\ssh-private.js -> ..\..\
node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\ssh-private.js -> ..\..\node_modules\sshpk\lib\formats\pem.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\ssh-private.js -> ..\..\node_modules\sshpk\lib\formats\rfc4253.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\formats\pem.js -> ..\..\node_modules\sshpk\lib\formats\ssh-private.js -> ..\..\
node_modules\sshpk\lib\formats\rfc4253.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\ssh.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\formats\ssh.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\dnssec.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\sshpk\lib\formats\dnssec.js -> ..\..\node_modules\sshpk\lib\private-key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js -> ..\..\node_modules\sshpk\lib\formats\auto.js -> ..\..\node_modules\ssh
pk\lib\formats\putty.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\private-key.js ->  D:\REPO\github\zevs-lite\node_modules\sshpk\lib\fingerprint.js?commonjs-proxy -> ..\..\node_modules\sshpk\li
b\fingerprint.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\fingerprint.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\identity.js -> ..\..\node_modules\sshpk\lib\fingerprint.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\formats\openssh-cert.js -> ..\..\node_mod
ules\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\formats\openssh-cert.js -> ..\..\node_modules\sshpk\lib\certificate.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\formats\openssh-cert.js ->  D:\REPO\github\zevs-lite\node_modules\sshpk\lib\certificate.js?commonjs-proxy -> ..\..\node_modules
\sshpk\lib\certificate.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\formats\x509.js -> ..\..\node_modules\ssh
pk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\formats\x509.js -> ..\..\node_modules\sshpk\lib\certificate.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\key.js -> ..\..\node_modules\sshpk\lib\fingerprint.js -> ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\formats\x509-pem.js -> ..\..\node_modules
\sshpk\lib\key.js
(!) Circular dependency: ..\..\node_modules\sshpk\lib\certificate.js -> ..\..\node_modules\sshpk\lib\formats\x509-pem.js -> ..\..\node_modules\sshpk\lib\certificate.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleSheet.js -> .
.\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleRule.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleSheet.js -> .
.\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleRule.js ->  D:\REPO\github\zevs-lite\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js?commonjs-proxy -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSSt
yleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleSheet.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleSheet.js ->  D:\REPO\github\zevs-lite\node_modules\jsdom\node_modules\cssom\lib\parse.j
s?commonjs-proxy -> ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSFontFaceRule.js ->
 ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.j
s
(!) Circular dependency: ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\parse.js -> ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSKeyframeRule.js ->
 ..\..\node_modules\jsdom\node_modules\cssom\lib\CSSStyleDeclaration.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Document.js -> ..\..\node_modules\jsdom\lib\jsdom\living\nodes\Document-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\DOMImplementatio
n.js -> ..\..\node_modules\jsdom\lib\jsdom\living\nodes\DOMImplementation-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\Document.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Document.js -> ..\..\node_modules\jsdom\lib\jsdom\living\nodes\Document-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\DOMImplementatio
n.js -> ..\..\node_modules\jsdom\lib\jsdom\living\nodes\DOMImplementation-impl.js ->  D:\REPO\github\zevs-lite\node_modules\jsdom\lib\jsdom\living\generated\Document.js?commonjs-proxy -> ..\..\node_modules\jsdom\lib\jsdom\living
\generated\Document.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Blob.js -> ..\..\node_modules\jsdom\lib\jsdom\living\file-api\Blob-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\Blob.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Blob.js -> ..\..\node_modules\jsdom\lib\jsdom\living\file-api\Blob-impl.js ->  D:\REPO\github\zevs-lite\node_modules\jsdom\lib\jsdom\living\generated\B
lob.js?commonjs-proxy -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\Blob.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Storage.js -> ..\..\node_modules\jsdom\lib\jsdom\living\webstorage\Storage-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\StorageEvent.
js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\StorageEventInit.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\Storage.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Storage.js -> ..\..\node_modules\jsdom\lib\jsdom\living\webstorage\Storage-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\StorageEvent.
js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\StorageEventInit.js ->  D:\REPO\github\zevs-lite\node_modules\jsdom\lib\jsdom\living\generated\Storage.js?commonjs-proxy -> ..\..\node_modules\jsdom\lib\jsdom\living\gene
rated\Storage.js
(!) Circular dependency: ..\..\node_modules\jsdom\lib\jsdom\living\generated\Storage.js -> ..\..\node_modules\jsdom\lib\jsdom\living\webstorage\Storage-impl.js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\StorageEvent.
js -> ..\..\node_modules\jsdom\lib\jsdom\living\generated\Storage.js
created dist/index.js, dist/index.es.js in 14.2s
Done in 16.49s.

```