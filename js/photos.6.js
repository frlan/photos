(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(e,t,r){var a=r(212);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r(117).default)("0f73ce6c",a,!0,{})},211:function(e,t,r){"use strict";var a=r(186);r.n(a).a},212:function(e,t,r){(t=r(116)(!1)).push([e.i,".file[data-v-1b9c1a10],.folder[data-v-1b9c1a10]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.file .cover[data-v-1b9c1a10],.folder .cover[data-v-1b9c1a10]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-1b9c1a10],.file:active .cover[data-v-1b9c1a10],.file:hover .cover[data-v-1b9c1a10],.file:focus .cover[data-v-1b9c1a10],.folder.active .cover[data-v-1b9c1a10],.folder:active .cover[data-v-1b9c1a10],.folder:hover .cover[data-v-1b9c1a10],.folder:focus .cover[data-v-1b9c1a10]{opacity:.3}.file--clear.active .cover[data-v-1b9c1a10],.file--clear:active .cover[data-v-1b9c1a10],.file--clear:hover .cover[data-v-1b9c1a10],.file--clear:focus .cover[data-v-1b9c1a10],.folder--clear.active .cover[data-v-1b9c1a10],.folder--clear:active .cover[data-v-1b9c1a10],.folder--clear:hover .cover[data-v-1b9c1a10],.folder--clear:focus .cover[data-v-1b9c1a10]{opacity:.1}.fade-enter-active[data-v-1b9c1a10],.fade-leave-active[data-v-1b9c1a10]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-1b9c1a10],.fade-leave-to[data-v-1b9c1a10]{opacity:0}.folder-content[data-v-1b9c1a10]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-1b9c1a10]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-1b9c1a10]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-1b9c1a10]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-1b9c1a10]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-1b9c1a10]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-1b9c1a10]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.folder-name[data-v-1b9c1a10]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-1b9c1a10]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-1b9c1a10]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-1b9c1a10]{opacity:.3}.folder--clear .folder-name__name[data-v-1b9c1a10]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-1b9c1a10]{opacity:.3}.folder:not(.folder--clear):active .folder-name[data-v-1b9c1a10],.folder:not(.folder--clear):active .cover[data-v-1b9c1a10],.folder:not(.folder--clear):hover .folder-name[data-v-1b9c1a10],.folder:not(.folder--clear):hover .cover[data-v-1b9c1a10],.folder:not(.folder--clear):focus .folder-name[data-v-1b9c1a10],.folder:not(.folder--clear):focus .cover[data-v-1b9c1a10]{opacity:0}\n",""]),e.exports=t},213:function(e,t,r){var a=r(320);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r(117).default)("388d73e2",a,!0,{})},239:function(e,r,a){"use strict";var o=a(15),n={name:"FolderTagPreview",props:{icon:{type:String,default:"icon-folder"},id:{type:Number,required:!0},name:{type:String,required:!0},path:{type:String,required:!0},fileList:{type:Array,default:function(){return[]}}},data:function(){return{loaded:!1,failed:[]}},computed:{isEmpty:function(){return 0===this.previewList.length},ariaUuid:function(){return"folder-".concat(this.id)},ariaLabel:function(){return t("photos",'Open the "{name}" sub-directory',{name:this.name})},previewList:function(){var e=this;return this.fileList.filter((function(t){return-1===e.failed.indexOf(t.fileid)}))},to:function(){var e=/^\/?(.+)/i.exec(this.path)[1];return Object.assign({},this.$route,{params:{path:e}})}},methods:{generateImgSrc:function(e){var t=e.fileid,r=e.etag;return Object(o.generateUrl)("/core/preview?fileId=".concat(t,"&x=",256,"&y=",256,"&a=true&v=").concat(r))},onPreviewFail:function(e){var t=e.fileid;this.failed.push(t)}}},i=(a(211),a(64)),c=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"folder",class:{"folder--clear":e.isEmpty},attrs:{to:e.to,"aria-label":e.ariaLabel}},[r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"folder-content",class:"folder-content--grid-"+e.previewList.length,attrs:{role:"none"}},e._l(e.previewList,(function(t){return r("img",{key:t.fileid,attrs:{src:e.generateImgSrc(t),alt:""},on:{load:function(t){e.loaded=!0},error:function(r){return e.onPreviewFail(t)}}})})),0)]),e._v(" "),r("div",{staticClass:"folder-name"},[r("span",{staticClass:"folder-name__icon",class:[e.isEmpty?"icon-dark":"icon-white",e.icon],attrs:{role:"img"}}),e._v(" "),r("p",{staticClass:"folder-name__name",attrs:{id:e.ariaUuid}},[e._v("\n\t\t\t"+e._s(e.name)+"\n\t\t")])]),e._v(" "),r("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"1b9c1a10",null);r.a=c.exports},319:function(e,t,r){"use strict";var a=r(213);r.n(a).a},320:function(e,t,r){(t=r(116)(!1)).push([e.i,".file[data-v-4b85e8d1],.folder[data-v-4b85e8d1]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.file .cover[data-v-4b85e8d1],.folder .cover[data-v-4b85e8d1]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-4b85e8d1],.file:active .cover[data-v-4b85e8d1],.file:hover .cover[data-v-4b85e8d1],.file:focus .cover[data-v-4b85e8d1],.folder.active .cover[data-v-4b85e8d1],.folder:active .cover[data-v-4b85e8d1],.folder:hover .cover[data-v-4b85e8d1],.folder:focus .cover[data-v-4b85e8d1]{opacity:.3}.file--clear.active .cover[data-v-4b85e8d1],.file--clear:active .cover[data-v-4b85e8d1],.file--clear:hover .cover[data-v-4b85e8d1],.file--clear:focus .cover[data-v-4b85e8d1],.folder--clear.active .cover[data-v-4b85e8d1],.folder--clear:active .cover[data-v-4b85e8d1],.folder--clear:hover .cover[data-v-4b85e8d1],.folder--clear:focus .cover[data-v-4b85e8d1]{opacity:.1}.fade-enter-active[data-v-4b85e8d1],.fade-leave-active[data-v-4b85e8d1]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-4b85e8d1],.fade-leave-to[data-v-4b85e8d1]{opacity:0}.folder-content[data-v-4b85e8d1]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-4b85e8d1]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-4b85e8d1]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-4b85e8d1]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-4b85e8d1]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-4b85e8d1]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-4b85e8d1]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.folder-name[data-v-4b85e8d1]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-4b85e8d1]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-4b85e8d1]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-4b85e8d1]{opacity:.3}.folder--clear .folder-name__name[data-v-4b85e8d1]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-4b85e8d1]{opacity:.3}.folder:not(.folder--clear).active .folder-name[data-v-4b85e8d1],.folder:not(.folder--clear).active .cover[data-v-4b85e8d1],.folder:not(.folder--clear):active .folder-name[data-v-4b85e8d1],.folder:not(.folder--clear):active .cover[data-v-4b85e8d1],.folder:not(.folder--clear):hover .folder-name[data-v-4b85e8d1],.folder:not(.folder--clear):hover .cover[data-v-4b85e8d1],.folder:not(.folder--clear):focus .folder-name[data-v-4b85e8d1],.folder:not(.folder--clear):focus .cover[data-v-4b85e8d1]{opacity:0}\n",""]),e.exports=t},447:function(e,t,r){"use strict";r.r(t);var a=r(42),o=r(199),n=r.n(o),i=r(15),c=r(19),l=r(209);function d(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,n=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw n}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function f(e,t,r,a,o,n,i){try{var c=e[n](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function i(e){f(n,a,o,i,c,"next",e)}function c(e){f(n,a,o,i,c,"throw",e)}i(void 0)}))}}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var v=function(){return p.apply(this,arguments)};function p(){return(p=u(regeneratorRuntime.mark((function e(){var t,r,a,o,s,f,u,v,p,h,b,m=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:"/",r=m.length>1&&void 0!==m[1]?m[1]:{},a=Object(i.generateUrl)("/apps/photos/api/v1/".concat(r.shared?"shared":"albums")),e.next=5,n.a.get(a+Object(c.a)(t),r);case 5:o=e.sent,s=o.data.map((function(e){return Object(c.b)(e)})),f={},u=[],v=[],p=d(s);try{for(p.s();!(h=p.n()).done;)(b=h.value).filename===t?f=b:"file"!==b.type?u.push(b):l.a.indexOf(b.mime)>-1&&v.push(b)}catch(e){p.e(e)}finally{p.f()}return e.abrupt("return",{folder:f,folders:u,files:v});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=r(238),b=r(192);function m(e,t,r,a,o,n,i){try{var c=e[n](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,o)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={name:"Folder",components:{FolderTagPreview:r(239).a},inheritAttrs:!1,props:{basename:{type:String,required:!0},filename:{type:String,required:!0},fileid:{type:Number,required:!0},showShared:{type:Boolean,default:!1}},data:function(){return{cancelRequest:null}},computed:y(y({},Object(a.c)(["files","folders"])),{},{folderContent:function(){return this.folders[this.fileid]},fileList:function(){var e=this;return this.folderContent?this.folderContent.map((function(t){return e.files[t]})).filter((function(e){return!!e})).slice(0,4):[]}}),created:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var r,a,o,n,i,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(b.a)(v),a=r.request,o=r.cancel,t.cancelRequest=o,e.prev=2,e.next=5,a(t.filename,{shared:t.showShared});case 5:n=e.sent,i=n.folder,c=n.folders,l=n.files,t.$store.dispatch("updateFolders",{fileid:i.fileid,files:l,folders:c}),t.$store.dispatch("updateFiles",{folder:i,files:l,folders:c}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),e.t0.response&&e.t0.response.status&&console.error("Failed to get folder content",t.folder,e.t0.response);case 16:return e.prev=16,t.cancelRequest=null,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})),function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function i(e){m(n,a,o,i,c,"next",e)}function c(e){m(n,a,o,i,c,"throw",e)}i(void 0)}))})()},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Navigated away")}},x=(r(319),r(64)),_=Object(x.a)(O,(function(){var e=this.$createElement;return(this._self._c||e)("FolderTagPreview",{attrs:{id:this.fileid,name:this.basename,path:this.filename,"file-list":this.fileList}})}),[],!1,null,"4b85e8d1",null).exports,j=r(240),k=r(241),F=r(242);function P(e,t,r,a,o,n,i){try{var c=e[n](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,o)}function C(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function i(e){P(n,a,o,i,c,"next",e)}function c(e){P(n,a,o,i,c,"throw",e)}i(void 0)}))}}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E={name:"Albums",components:{EmptyContent:h.a,File:j.a,Folder:_,Grid:k.a,Navigation:F.a},props:{rootTitle:{type:String,required:!0},path:{type:String,default:"/"},loading:{type:Boolean,required:!0},showShared:{type:Boolean,default:!1}},data:function(){return{error:null,cancelRequest:function(){}}},computed:q(q({},Object(a.c)(["files","folders"])),{},{folderId:function(){return this.$store.getters.folderId(this.path)},folder:function(){return this.files[this.folderId]},folderContent:function(){return this.folders[this.folderId]},fileList:function(){var e=this;return this.folderContent&&this.folderContent.map((function(t){return e.files[t]})).filter((function(e){return!!e}))},subFolders:function(){return this.folderId&&this.files[this.folderId]&&this.files[this.folderId].folders},folderList:function(){var e=this;return this.subFolders&&this.subFolders.map((function(t){return e.files[t]})).filter((function(e){return!!e}))},isEmpty:function(){return!this.haveFiles&&!this.haveFolders},haveFiles:function(){return!!this.fileList&&0!==this.fileList.length},haveFolders:function(){return!!this.folderList&&0!==this.folderList.length}}),watch:{path:function(){this.fetchFolderContent()},showShared:function(){this.fetchFolderContent()}},beforeMount:function(){var e=this;return C(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchFolderContent();case 1:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.cancelRequest("Changed view")},methods:{fetchFolderContent:function(){var e=this;return C(regeneratorRuntime.mark((function t(){var r,a,o,n,i,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.cancelRequest("Changed folder"),OCA.Viewer&&OCA.Viewer.close&&OCA.Viewer.close(),OCA.Files&&OCA.Files.Sidebar.close&&OCA.Files.Sidebar.close(),e.files[e.folderId]||e.$emit("update:loading",!0),e.error=null,r=Object(b.a)(v),a=r.request,o=r.cancel,e.cancelRequest=o,t.prev=7,t.next=10,a(e.path,{shared:e.showShared});case 10:n=t.sent,i=n.folder,c=n.folders,l=n.files,e.$store.dispatch("addPath",{path:e.path,fileid:i.fileid}),e.$store.dispatch("updateFolders",{fileid:i.fileid,files:l,folders:c}),e.$store.dispatch("updateFiles",{folder:i,files:l,folders:c}),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(7),t.t0.response&&t.t0.response.status&&(404===t.t0.response.status?(e.error=404,setTimeout((function(){e.$router.push({name:e.$route.name})}),3e3)):e.error=t.t0),console.error("Error fetching album data",t.t0);case 23:return t.prev=23,e.$emit("update:loading",!1),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[7,19,23,26]])})))()}}},R=Object(x.a)(E,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return 404===e.error?r("EmptyContent",{attrs:{"illustration-name":"folder"}},[e._v("\n\t"+e._s(e.t("photos","This folder does not exists"))+"\n")]):e.error?r("EmptyContent",[e._v("\n\t"+e._s(e.t("photos","An error occurred"))+"\n")]):e.loading?e._e():r("Grid",[e.folder?r("Navigation",e._b({key:"navigation",attrs:{"root-title":e.rootTitle,"show-actions":!0}},"Navigation",e.folder,!1)):e._e(),e._v(" "),e.isEmpty?r("EmptyContent",{key:"emptycontent",attrs:{"illustration-name":"empty"}},[e._v("\n\t\t"+e._s(e.t("photos","No photos in here"))+"\n\t")]):[e._l(e.folderList,(function(t){return r("Folder",e._b({key:t.fileid,attrs:{"show-shared":e.showShared}},"Folder",t,!1))})),e._v(" "),e._l(e.fileList,(function(t){return r("File",e._b({key:t.fileid,attrs:{list:e.fileList}},"File",t,!1))}))]],2)}),[],!1,null,null,null);t.default=R.exports}}]);
//# sourceMappingURL=photos.6.js.map?v=683f40b1a8e4d8b37126