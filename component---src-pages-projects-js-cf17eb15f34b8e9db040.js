"use strict";(self.webpackChunkmysitev2=self.webpackChunkmysitev2||[]).push([[853],{7800:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),c=a(5444);function n(e,t,c,n){void 0===c&&(c=a.g),void 0===n&&(n={});var s=(0,r.useRef)(),l=n.capture,o=n.passive,i=n.once;(0,r.useEffect)((function(){s.current=t}),[t]),(0,r.useEffect)((function(){if(c&&c.addEventListener){var t=function(e){return s.current(e)},a={capture:l,passive:o,once:i};return c.addEventListener(e,t,a),function(){c.removeEventListener(e,t,a)}}}),[e,c,l,o,i])}var s={},l=function(e,t,a){return s[e]||(s[e]={callbacks:[],value:a}),s[e].callbacks.push(t),{deregister:function(){var a=s[e].callbacks,r=a.indexOf(t);r>-1&&a.splice(r,1)},emit:function(a){s[e].value!==a&&(s[e].value=a,s[e].callbacks.forEach((function(e){t!==e&&e(a)})))}}};function o(e,t){if(void 0===t&&(t=void 0!==a.g&&a.g.localStorage?a.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var c=(s=t,{get:function(e,t){var a=s.getItem(e);return null==a?"function"==typeof t?t():t:JSON.parse(a)},set:function(e,t){s.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,a){var c=a.get,s=a.set,o=(0,r.useRef)(null),i=(0,r.useState)((function(){return c(t,e)})),d=i[0],u=i[1];n("storage",(function(e){if(e.key===t){var a=JSON.parse(e.newValue);d!==a&&u(a)}})),(0,r.useEffect)((function(){return o.current=l(t,u,e),function(){o.current.deregister()}}),[e,t]);var m=(0,r.useCallback)((function(e){var a="function"==typeof e?e(d):e;s(t,a),u(a),o.current.emit(e)}),[d,s,t]);return[d,m]}(t,e,c)}}var s;return r.useState}var i=function(){},d={classList:{add:i,remove:i}},u=function(e,t,c){void 0===c&&(c=a.g);var n=e?o(e,t):r.useState,s=c.matchMedia?c.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return s.addListener&&s.addListener(t)},removeEventListener:function(e,t){return s.removeListener&&s.removeListener(t)}},i="(prefers-color-scheme: dark)"===s.media,u=c.document&&c.document.body||d;return{usePersistedDarkModeState:n,getDefaultOnChange:function(e,t,a){return void 0===e&&(e=u),void 0===t&&(t="dark-mode"),void 0===a&&(a="light-mode"),function(r){e.classList.add(r?t:a),e.classList.remove(r?a:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return i?s.matches:e}}};var m=function(){var e=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var a=t.element,c=t.classNameDark,s=t.classNameLight,l=t.onChange,o=t.storageKey;void 0===o&&(o="darkMode");var i=t.storageProvider,d=t.global,m=(0,r.useMemo)((function(){return u(o,i,d)}),[o,i,d]),p=m.getDefaultOnChange,h=m.mediaQueryEventTarget,f=(0,m.usePersistedDarkModeState)((0,m.getInitialValue)(e)),g=f[0],E=f[1],v=(0,r.useMemo)((function(){return l||p(a,c,s)}),[l,a,c,s,p]);return(0,r.useEffect)((function(){v(g)}),[v,g]),n("change",(function(e){return E(e.matches)}),h),{value:g,enable:(0,r.useCallback)((function(){return E(!0)}),[E]),disable:(0,r.useCallback)((function(){return E(!1)}),[E]),toggle:(0,r.useCallback)((function(){return E((function(e){return!e}))}),[E])}}(!1);return r.createElement("div",{className:"nav-flex",id:"navbar"},r.createElement("div",{className:"darkmode-text"},r.createElement(c.Link,{to:"#",style:{textDecoration:"none"},onClick:e.toggle}," ",e.value?"light":"dark"," ")),r.createElement("div",{className:"nav-items"},r.createElement(c.Link,{to:"/",class:"nav-item",activeClassName:"nav-active"},"home"),r.createElement(c.Link,{to:"/projects",class:"nav-item",activeClassName:"nav-active"},"projects"),r.createElement(c.Link,{to:"/fun",class:"nav-item",activeClassName:"nav-active"},"fun"),r.createElement("a",{href:"../../fahim_cv.pdf",class:"nav-item"},"cv.pdf")))}},7744:function(e,t,a){a.r(t);var r=a(7294),c=a(5444),n=a(7800);t.default=function(){return r.createElement("main",null,r.createElement(n.Z,null),r.createElement("div",{className:"container"},r.createElement("div",null,r.createElement("h1",{className:"home-name"},"Projects"),r.createElement(c.Link,{to:"/archive",class:"proj-link hover-underline-animation"},"visit the archive")),r.createElement("div",{class:"row-col-sm-1 row-col-md-1 row-col-lg-1 g-4 project-start"},r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"mac-setup"),r.createElement("p",{class:"card-text"},"Guide to setup a fresh macOS installation automatically, saving time and effort. Includes 3rd-party apps, ssh and gpg setups"),r.createElement("a",{href:"https://github.com/i3p9/mac-setup",target:"_blank",rel:"noreferrer",class:"button-git git hover-underline-animation"},"github")," ",r.createElement("a",{href:"https://mac-setup.vercel.app/#/",target:"_blank",rel:"noreferrer",class:"button-demo-beta demo"},"demo"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"MD"),r.createElement("span",{class:"techused-font"},"Docify JS"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"LyriCatch"),r.createElement("p",{class:"card-text"},"Cross platform Python app to fetch, show and download lyrics from currently playing song. Supports Spotify and last.fm"),r.createElement("a",{href:"https://github.com/i3p9/lyricatch",target:"_blank",rel:"noreferrer",class:"button-git git"},"github")," ",r.createElement("a",{href:"https://github.com/i3p9/lyricatch",target:"_blank",rel:"noreferrer",class:"button-demo demo"},"demo"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Python"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"Text in a Bottle"),r.createElement("p",{class:"card-text"},"Simple and fast webapp made in Python to create and share text or code snippets. Has live Markdown editing and publishing,  supports creating super fast and light web page to share via Markdown. Made using Flask and MongoDB. Click demo to use the site."),r.createElement("a",{href:"https://github.com/i3p9/txt-in-a-bottle",target:"_blank",rel:"noreferrer",class:"button-git git"},"github")," ",r.createElement("a",{href:"https://txtinabottle.herokuapp.com/",target:"_blank",rel:"noreferrer",class:"button-demo demo"},"demo"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Python"),r.createElement("span",{class:"techused-font"},"Flask"),r.createElement("span",{class:"techused-font"},"MongoDB"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"Jumpstart"),r.createElement("p",{class:"card-text"},"Webapp for installing/updating multiple macOS Applications at once, amazingly faster compared to installing applications one-by-one."),r.createElement("a",{href:"https://github.com/i3p9/Jumpstart",target:"_blank",rel:"noreferrer",class:"button-git git"},"github")," ",r.createElement("a",{href:"https://jumpstart-mac.vercel.app/",target:"_blank",rel:"noreferrer",class:"button-demo demo"},"demo"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Javascript"),r.createElement("span",{class:"techused-font"},"MDB"),r.createElement("span",{class:"techused-font"},"Shell"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"Deepfake Detection using Xception"),r.createElement("p",{class:"card-text"},"Detecting deepfakes specially found in Social Media and usually low-res using custom Xception Deep Learning"),r.createElement("a",{href:"https://github.com/i3p9/deepfake-detection-with-xception",target:"_blank",rel:"noreferrer",class:"button-git git"},"github"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Python"),r.createElement("span",{class:"techused-font"},"ML"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"Personalwebsite V1"),r.createElement("p",{class:"card-text"},"V1 of my personal website made using Jekyll, Ruby. Still accessible via demo!"),r.createElement("a",{href:"https://github.com/i3p9/personalwebsite",target:"_blank",rel:"noreferrer",class:"button-git git"},"github")," ",r.createElement("a",{href:"https://old.fahim.tech",target:"_blank",rel:"noreferrer",class:"button-demo demo"},"demo"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Ruby"),r.createElement("span",{class:"techused-font"},"Jekyll"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"Imgbb.sh"),r.createElement("p",{class:"card-text"},"Command line interface to access Imgbb, supports uploading/deleting multiple images from various sources"),r.createElement("a",{href:"https://github.com/i3p9/imgbb.sh",target:"_blank",rel:"noreferrer",class:"button-git git"},"github")," ",r.createElement("a",{href:"https://i3p9.github.io/imgbb.sh/",target:"_blank",rel:"noreferrer",class:"button-demo demo"},"demo"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Shell"),r.createElement("span",{class:"techused-font"},"macOS"),r.createElement("span",{class:"techused-font"},"Linux"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"python-scripts"),r.createElement("p",{class:"card-text"},"Collection of smaller python projects including Covid Data Tracker, OCR to Google, Tesla Charge Reminder etc."),r.createElement("a",{href:"https://github.com/i3p9/python-scripts",target:"_blank",rel:"noreferrer",class:"button-git git"},"github"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Python"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body moveup"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"Reach: WiFi Analyzer"),r.createElement("p",{class:"card-text"},"Reach automagically searches and figures out the best wifi channel for your network avoiding populated channels."),r.createElement("a",{href:"https://github.com/reach",target:"_blank",rel:"noreferrer",class:"button-git git"},"github"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Python"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"shell-scripts"),r.createElement("p",{class:"card-text"},"Big collection of shell scripts including automating complete computer setup, system services and apps. Also includes a number of script to automate uploading, downloading and backing up computer. "),r.createElement("a",{href:"https://github.com/i3p9/shell-scripts",target:"_blank",rel:"noreferrer",class:"button-git git"},"github"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"Bash"),r.createElement("span",{class:"techused-font"},"Shell"))))),r.createElement("div",{class:"col"},r.createElement("div",{class:"card proj-body"},r.createElement("div",{class:"card-body"},r.createElement("h5",{class:"card-title proj-title"},"EduShare V2"),r.createElement("p",{class:"card-text"},"A complete Education Management System made using pure php and MySQL. Supports classes, tests, interaction and more."),r.createElement("a",{href:"https://github.com/i3p9/Edusharev2",target:"_blank",rel:"noreferrer",class:"button-git git"},"github"),r.createElement("p",{class:"card-text card-techused"},r.createElement("span",{class:"techused-font"},"PHP"),r.createElement("span",{class:"techused-font"},"MySQL"))))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-cf17eb15f34b8e9db040.js.map