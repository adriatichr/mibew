/*
 Copyright 2005-2014 the original author or authors.
 Licensed under the Apache License, Version 2.0 (the "License").
 You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
*/
!function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.default_control=Handlebars.template(function(a,e,l,s,t){this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),t=t||{};var n,r,p="",c="function",h=this.escapeExpression;return p+="<strong>",(r=l.title)?n=r.call(e,{hash:{},data:t}):(r=e&&e.title,n=typeof r===c?r.call(e,{hash:{},data:t}):r),p+=h(n)+"</strong>"})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.message=Handlebars.template(function(a,e,l,s,t){function n(a,e){var s,t,n="";return n+="<span class='n",(t=l.kindName)?s=t.call(a,{hash:{},data:e}):(t=a&&a.kindName,s=typeof t===o?t.call(a,{hash:{},data:e}):t),n+=d(s)+"'>",(t=l.name)?s=t.call(a,{hash:{},data:e}):(t=a&&a.name,s=typeof t===o?t.call(a,{hash:{},data:e}):t),n+=d(s)+"</span>: "}function r(a,e){var s,t;return d((s=l.apply||a&&a.apply,t={hash:{},data:e},s?s.call(a,a&&a.message,"urlReplace, nl2br, allowTags",t):f.call(a,"apply",a&&a.message,"urlReplace, nl2br, allowTags",t)))}function p(a,e){var s,t;return d((s=l.apply||a&&a.apply,t={hash:{},data:e},s?s.call(a,a&&a.message,"urlReplace, nl2br",t):f.call(a,"apply",a&&a.message,"urlReplace, nl2br",t)))}this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,a.helpers),t=t||{};var c,h,i,m="",o="function",d=this.escapeExpression,f=l.helperMissing,u=this;return m+="<span>"+d((h=l.formatTime||e&&e.formatTime,i={hash:{},data:t},h?h.call(e,e&&e.created,i):f.call(e,"formatTime",e&&e.created,i)))+"</span>\n",c=l["if"].call(e,e&&e.name,{hash:{},inverse:u.noop,fn:u.program(1,n,t),data:t}),(c||0===c)&&(m+=c),m+="\n<span class='m",(h=l.kindName)?c=h.call(e,{hash:{},data:t}):(h=e&&e.kindName,c=typeof h===o?h.call(e,{hash:{},data:t}):h),m+=d(c)+"'>",c=l["if"].call(e,e&&e.allowFormatting,{hash:{},inverse:u.program(5,p,t),fn:u.program(3,r,t),data:t}),(c||0===c)&&(m+=c),m+="</span><br/>"})}();