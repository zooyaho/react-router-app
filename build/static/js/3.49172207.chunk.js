(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{53:function(e,t,c){e.exports={card:"Card_card__1m44e"}},54:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},57:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(3),r=c(16),a=c(17),s=c(5),i=c(53),u=c.n(i),d=c(1),l=function(e){return Object(d.jsx)("div",{className:u.a.card,children:e.children})},j=c(12),b=c(54),f=c.n(b),m=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),o=(c[0],c[1]),r=Object(n.useRef)(),a=Object(n.useRef)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l,{children:Object(d.jsxs)("form",{onFocus:function(){o(!0)},className:f.a.form,onSubmit:function(t){t.preventDefault();var c=r.current.value,n=a.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(d.jsx)("div",{className:f.a.loading,children:Object(d.jsx)(j.a,{})}),Object(d.jsxs)("div",{className:f.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:r})]}),Object(d.jsxs)("div",{className:f.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:a})]}),Object(d.jsx)("div",{className:f.a.actions,onClick:function(){o(!1)},children:Object(d.jsx)("button",{className:"btn",children:"Add Quote"})})]})})})};t.default=function(){var e=Object(o.n)(),t=Object(r.a)(a.b),c=t.sendRequest,s=t.status;Object(n.useEffect)((function(){"completed"===s&&e("/quotes")}),[s,e]);return Object(d.jsx)(m,{isLoading:"pending"===s,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=3.49172207.chunk.js.map