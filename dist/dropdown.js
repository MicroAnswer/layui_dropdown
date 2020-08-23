/* layui_dropdown v2.3.1 by Microanswer,website:http://layuidropdown.microanswer.cn/ */
layui.define(["jquery","laytpl"],function(i){var r=layui.jquery||layui.$,s=layui.laytpl,e="a",d={},c="1",u="2",m="3";function f(i){if(!i)throw new Error("菜单条目内必须填写内容。");if("hr"===i)return"hr";if(0!==i.indexOf("{"))throw new Error("除了分割线hr，别的菜单条目都必须保证是合格的Javascript对象或json对象。");return new Function("return "+i)()}function a(i){if(i&&0<i.length){for(var t=0,n=new Array(i.length),o=0;o<i.length;o++)for(var e=i[o],d=0;d<e.length;d++)e[d].header&&e[d].fixed&&(t++,n[o]=e[d],e.splice(d,1),d--);if(0<t)return n}return null}var l=window.MICROANSWER_DROPDOWAN||"dropdown",h="<div tabindex='0' class='layui-anim layui-anim-upbit dropdown-root' "+l+"-id='{{d.downid}}' style='display: none;z-index: {{d.zIndex}}'>{{# if (d.arrow){ }}<div class='dropdown-pointer'></div>{{# } }}<div class='dropdown-content' style='margin: {{d.gap}}px {{d.gap}}px;background-color: {{d.backgroundColor}};min-width: {{d.minWidth}}px;max-width: {{d.maxWidth}}px;min-height: {{d.minHeight}}px;max-height: {{d.maxHeight}}px;white-space: {{d.nowrap?\"nowrap\":\"normal\"}}'>",p="</div></div>",w=h+"<table cellpadding='0' cellspacing='0'>{{# if (d.fixHeaders && d.fixHeaders.length > 0){ }}<thead><tr>{{# layui.each(d.fixHeaders, function(i, fixHeader){ }}{{# if (fixHeader) { }}<th><div class='dropdown-menu-fixed-head {{(d.menuSplitor && i < (d.menus.length-1))?\"menu-splitor\":\"\"}}'><div class='menu-fixed-head' style='text-align: {{fixHeader.align||\"center\"}}'>{{fixHeader.header}}</div></div></th>{{# } else { }}<th><div class='dropdown-menu-fixed-head {{(d.menuSplitor && i < (d.menus.length-1))?\"menu-splitor\":\"\"}}'><div class='menu-fixed-head'>&nbsp;</div></div></th>{{# } }}{{# }); }}</tr></thead>{{# } }}<tbody><tr>{{# layui.each(d.menus, function(i, menu){ }}<td valign='top'><div class='dropdown-menu-wrap {{(d.menuSplitor && i < (d.menus.length-1))?\"menu-splitor\":\"\"}} overflowauto' style='min-height: {{d.minHeight}}px;max-height: {{d.maxHeight - ((d.fixHeaders)?24:0)}}px;'><ul class='dropdown-menu' style=''>{{# layui.each(menu, function(index, item){ }}<li class='menu-item-wrap {{(d.fixHeaders && d.fixHeaders.length) > 0?\"nomargin\":\"\"}}'>{{# if ('hr' === item) { }}<hr>{{# } else if (item.header) { }}{{# if (item.withLine) { }}<fieldset class=\"layui-elem-field layui-field-title menu-header withLine\"><legend>{{item.header}}</legend></fieldset>{{# } else { }}<div class='menu-header' style='text-align: {{item.align||\"left\"}}'>{{item.header}}</div>{{# } }}{{# } else { }}<div class='menu-item'><a href='javascript:;' lay-event='{{item.event}}'>{{# if (item.layIcon){ }}<i class='layui-icon {{item.layIcon}}'></i>&nbsp;{{# } }}<span class='{{item.txtClass||\"\"}}'>{{item.txt}}</span></a></div>{{# } }}</li>{{# }); }}</ul></div></td>{{#});}}</tr></tbody></table>"+p,n={menus:[],templateMenu:"",template:"",showBy:"click",align:"left",minWidth:80,maxWidth:500,minHeight:10,maxHeight:400,zIndex:891,gap:8,onHide:function(i,t){},onShow:function(i,t){},scrollBehavior:"follow",backgroundColor:"#FFF",cssLink:"https://cdn.jsdelivr.net/gh/microanswer/layui_dropdown@2.3.1/dist/dropdown.css",immed:!1,arrow:!0,templateMenuSptor:"[]",menuSplitor:!0};function g(i,t){"string"==typeof i&&(i=r(i)),this.$dom=i,this.option=r.extend({downid:String(Math.random()).split(".")[1],filter:i.attr("lay-filter")},n,t),20<this.option.gap&&(this.option.gap=20),this.init()}function o(i,o){r(i||"[lay-"+l+"]").each(function(){var i=r(this),t=new Function("return "+(i.attr("lay-"+l)||"{}"))();i.removeAttr("lay-"+l);var n=i.data(l)||new g(i,r.extend({},t,o||{}));i.data(l,n)})}window[l+"_useOwnCss"]||layui.link(window[l+"_cssLink"]||n.cssLink,function(){},l+"_css"),g.prototype.init=function(){var t=this,i=!1;if(t.option.menus&&0<t.option.menus.length){i=!0;var n=t.option.menus[0];Array.isArray(n)||(t.option.menus=[t.option.menus]),t.option.fixHeaders=a(t.option.menus),t.option.nowrap=!0,s(w).render(t.option,function(i){t.downHtml=i,t.initEvent()})}else if(t.option.templateMenu){var o;i=!0,o=-1===t.option.templateMenu.indexOf("#")?"#"+t.option.templateMenu:t.option.templateMenu;var e=r.extend(r.extend({},t.option),t.option.data||{});s(r(o).text()).render(e,function(i){t.option.menus=function(i,t){if(!i)return"";if(!t)throw new Error("请指定菜单模板限定符。");for(var n,o,e=t.charAt(0),d=t.charAt(1),r=i.length,s=0,a=c,l=!1,h=[];s<r;){var p=i.charAt(s);a!==c||l?a!==u||l?a===m&&(l?(o.srcStr+=p,l=!1):"\\"===p?l=!0:p===d?(o=f(o.srcStr),n.push(o),a=u):o.srcStr+=p):e===p?(o={srcStr:""},a=m):d===p&&(a=c):e===p&&(n=[],h.push(n),a=u),s+=1}return h}(i,t.option.templateMenuSptor),t.option.fixHeaders=a(t.option.menus),t.option.nowrap=!0,s(w).render(t.option,function(i){t.downHtml=i,t.initEvent()})})}else if(t.option.template){var d;i=!0,d=-1===t.option.template.indexOf("#")?"#"+t.option.template:t.option.template,(e=r.extend(r.extend({},t.option),t.option.data||{})).nowrap=!1,s(h+r(d).html()+p).render(e,function(i){t.downHtml=i,t.initEvent()})}else layui.hint().error("下拉框目前即没配置菜单项，也没配置下拉模板。[#"+(t.$dom.attr("id")||"")+",filter="+t.option.filter+"]");i&&this.option.immed&&this.downHtml&&this.show()},g.prototype.initSize=function(){if(this.$down&&(this.$down.find(".dropdown-pointer").css({width:2*this.option.gap,height:2*this.option.gap}),!this._sized)){var i=0;this.$down.find(".dropdown-menu-wrap").each(function(){i=Math.max(i,r(this).height())}),this.$down.find(".dropdown-menu-wrap").css({height:i}),this._sized=!0}},g.prototype.initPosition=function(){if(this.$down){var i,t,n,o,e=this.$dom.offset(),d=this.$dom.outerHeight(),r=this.$dom.outerWidth(),s=e.left,a=e.top-window.pageYOffset,l=this.$down.outerHeight(),h=this.$down.outerWidth();t=d+a,(i="right"===this.option.align?s+r-h+this.option.gap:"center"===this.option.align?s+(r-h)/2:s-this.option.gap)+h>=window.innerWidth&&(i=window.innerWidth-h-2*this.option.gap),n=i<s?r<h?s-i+r/2:h/2:r<h?i+(s+r-i)/2:h/2,n-=this.option.gap;var p=this.$arrowDom;o=-this.option.gap,p.css("left",n),p.css("right","unset"),t+l>=window.innerHeight?(t=a-l,o=l-this.option.gap,p.css("top",o).addClass("bottom")):p.css("top",o).removeClass("bottom"),this.$down.css("left",i),this.$down.css("top",t)}},g.prototype.show=function(){var n,i,t=this,o=!1;t.$down||(t.$down=r(t.downHtml),t.$dom.after(t.$down),t.$arrowDom=t.$down.find(".dropdown-pointer"),o=!0),t.initPosition(),t.opening=!0,setTimeout(function(){t.$down.focus()},100),t.$down.addClass("layui-show"),t.initSize(),t.opened=!0,o&&t.initDropdownEvent(),n=t,i=d[e]||[],r.each(i,function(i,t){t(n)}),o&&t.onSuccess(),t.option.onShow&&t.option.onShow(t.$dom,t.$down)},g.prototype.hide=function(){this.opened&&(this.fcd=!1,this.$down.removeClass("layui-show"),this.opened=!1,this.option.onHide&&this.option.onHide(this.$dom,this.$down))},g.prototype.hideWhenCan=function(){this.mic||this.opening||this.fcd||this.hide()},g.prototype.toggle=function(){this.opened?this.hide():this.show()},g.prototype.onSuccess=function(){this.option.success&&this.option.success(this.$down)},g.prototype._onScroll=function(){var i=this;i.opened&&("follow"===this.option.scrollBehavior?setTimeout(function(){i.initPosition()},1):this.hide())},g.prototype.initEvent=function(){var i,t,n,o=this;t=function(i){i!==o&&o.hide()},(n=d[i=e]||[]).push(t),d[i]=n,r(window).on("scroll",function(){o._onScroll()}),o.$dom.parents().on("scroll",function(){o._onScroll()}),r(window).on("resize",function(){o.opened&&o.initPosition()}),o.initDomEvent()},g.prototype.initDomEvent=function(){var i=this;i.$dom.mouseenter(function(){i.mic=!0,"hover"===i.option.showBy&&(i.fcd=!0,i.show())}),i.$dom.mouseleave(function(){i.mic=!1}),"click"===i.option.showBy&&i.$dom.on("click",function(){i.fcd=!0,i.toggle()}),i.$dom.on("blur",function(){i.fcd=!1,i.hideWhenCan()})},g.prototype.initDropdownEvent=function(){var o=this;o.$down.find(".dropdown-menu-wrap").on("mousewheel",function(i){var t=r(this);(i=i||window.event).cancelable=!0,i.cancelBubble=!0,i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation&&i.stopImmediatePropagation(),i.returnValue=!1,o.scrolling&&t.finish();var n=-i.originalEvent.wheelDelta||i.originalEvent.detail;0<n?(50<n&&(n=50),o.scrolling=!0,t.animate({scrollTop:t.scrollTop()+n},{duration:170,complete:function(){o.scrolling=!1}})):n<0?(n<-50&&(n=-50),o.scrolling=!0,t.animate({scrollTop:t.scrollTop()+n},{duration:170,complete:function(){o.scrolling=!1}})):o.scrolling=!1}),o.$down.mouseenter(function(){o.mic=!0,o.$down.focus()}),o.$down.mouseleave(function(){o.mic=!1}),o.$down.on("blur",function(){o.fcd=!1,o.hideWhenCan()}),o.$down.on("focus",function(){o.opening=!1}),o.option.menus&&r("["+l+"-id='"+o.option.downid+"']").on("click","a",function(){var i=(r(this).attr("lay-event")||"").trim();i?(layui.event.call(this,l,l+"("+o.option.filter+")",i),o.hide()):layui.hint().error("菜单条目["+this.outerHTML+"]未设置event。")})},o(),i(l,{suite:o,onFilter:function(i,t){layui.onevent(l,l+"("+i+")",function(i){t&&t(i)})},hide:function(i){r(i).each(function(){var i=r(this).data(l);i&&i.hide()})},show:function(t,n){r(t).each(function(){var i=r(this).data(l);i?i.show():(layui.hint().error("警告：尝试在选择器【"+t+"】上进行下拉框show操作，但此选择器对应的dom并没有初始化下拉框。"),(n=n||{}).immed=!0,o(t,n))})},version:"2.3.1"})});