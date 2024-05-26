#!/usr/bin/env node
var l=(e,n,r)=>new Promise((c,i)=>{var a=o=>{try{t(r.next(o))}catch(s){i(s)}},d=o=>{try{t(r.throw(o))}catch(s){i(s)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(a,d);t((r=r.apply(e,n)).next())});var g=e=>new Promise(n=>setTimeout(n,e)),u=e=>`Hello ${e}`,m=()=>l(void 0,null,function*(){return console.log(u("World")),yield g(1e3),console.log("done"),!0});m();
