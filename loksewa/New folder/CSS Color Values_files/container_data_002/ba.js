var _w=window,BAP=BAP||function(){function Y(a){var e,c,d={};try{if(k._bab){e=k._bab;k._bab=y;for(c=0;c<e[r];c++)Y(e[c])}}catch(f){}if(a){if(a.uqid){if(e=a.uqid,b[e])return}else return;try{for(c in a)a.hasOwnProperty(c)&&(d[c.toLowerCase()]=a[c]);a=d}catch(l){}if(a.ad_oas)try{a.ad_oas=a.ad_oas.toLowerCase(),a.ad_wxh=a.ad_oas.replace("width=","").replace("height=","").replace(" ","x")}catch(h){}if(a.ad_wxh)try{a.ad_wxh=a.ad_wxh.toLowerCase(),a.ad_w=a.ad_w||a.ad_wxh.split("x")[0],a.ad_h=a.ad_h||a.ad_wxh.split("x")[1]}catch(g){}if(!a.ad_w||
!a.ad_h){I(a,13);return}if(!q(a.ad_w)||!q(a.ad_h)){I(a,15);return}if(15>a.ad_h&&20>a.ad_w){I(a,14);return}if(!a.coid){I(a,9);return}a.nid=a.nid.toString().match(/\d/g).join("");a.ecaid&&(a.ecaid=a.ecaid.split("%")[0]);z[e]=a.nid;d="n/"+a.coid+"/"+a.nid;b[e]=a;if(!sa&&(a.check_container&&"true"==a.check_container||/^(1525|4501|7420|8573)$/.test(a.nid)))c=s.createElement("script"),c.src=D+"/a/e.js",p.appendChild(c);d?R[a.nid]||(S++,c=s.createElement("script"),c.src=Pa+d+".js",p.appendChild(c)):(delete b[e],
I(a,11));try{m("bap-pixel-"+e).style.display="none"}catch(cb){}}else I(y,10);546==a.nid&&(a.delay_start=1);Z?Z&&T&&(T=!1,N()):(c=function(){Z=!0;a.delay_start?B(N,1E3*a.delay_start):N()},"complete"===s.readyState?c():U(window,"load",c),$&&clearTimeout($),$=B(N,5E3))}function C(a){try{delete b[a];var e=m("bap-pixel-"+a);e&&e.parentNode.removeChild(e);(e=m("trigger-container-"+a))&&e.parentNode.removeChild(e)}catch(c){}}function N(){function a(a,e,c){for(c in k.bap_overrides[e])b[a].hasOwnProperty(c)&&
(b[a][c]=k.bap_overrides[e][c])}if(0!=S)B(function(){S=0;N()},500);else if(!T){T=!0;k.bap_skip&&(G=G.concat(bap_skip));var e=[],c,d,f=!1;aa=!(!m("abgc")||!k.abgp);try{Qa();ta("COMMON");for(pageId in b)e.push([pageId,b[pageId].order]);e.sort(function(a,b){return a[1]-b[1]});for(d=0;d<e[r];d++)if(pageId=e[d][0],!b[pageId].processed)if(R[b[pageId].nid]){Ra(pageId,b[pageId].nid);for(c=0;c<G[r];c++){if(G[c]==b[pageId].nid||G[c]==b[pageId].nid+"|"+pageId||G[c]=="size|"+b[pageId].ad_w+"x"+b[pageId].ad_h){C(pageId);
f=!0;break}f=!1}if(!f)if(k.bap_546_h&&546==b[pageId].nid)C(pageId);else{k.bap_amzn&&(b[pageId].amzn=1);k.bap_overrides&&k.bap_overrides.hasOwnProperty(b[pageId].nid)&&a(pageId,b[pageId].nid);k.bap_overrides&&k.bap_overrides.hasOwnProperty(b[pageId].nid+"|"+pageId)&&a(pageId,b[pageId].nid+"|"+pageId);aa&&(b[pageId].position="top-right",b[pageId].icon_display="expandable",b[pageId].server={name:"Google"},b[pageId].ad_z=9011,m("abgc").style.display="none");Sa(pageId);for(c=0;c<G[r];c++){if(G[c]=="size|"+
b[pageId].ad_w+"x"+b[pageId].ad_h){C(pageId);f=!0;break}f=!1}f||(b[pageId].mini=728<=b[pageId].ad_w&&990>=b[pageId].ad_w&&90<=b[pageId].ad_h&&125>=b[pageId].ad_h||160==b[pageId].ad_w&&600==b[pageId].ad_h?!1:190>b[pageId].ad_w||145>b[pageId].ad_h,90>b[pageId].ad_w&&(b[pageId].icon_display="icon"),b[pageId].adi&&!Ta(pageId)?C(pageId):b[pageId].ad&&"none"==b[pageId].ad.style.display?C(pageId):8==b[pageId].dm&&!b[pageId].ad.ds?C(pageId):(Ua(pageId),b[pageId].noticeExists?C(pageId):(Va(pageId),b[pageId].processed=
!0)))}}else I(b[pageId],12),C(pageId)}catch(l){}K.vs=A()[0]<p.scrollHeight;ba=A()[1];U(window,"resize",Wa);Xa(function(){Ya();var a=k.__MicrosoftAdvertising,e,c;if(a&&a.Ad)for(c in b)if(b.hasOwnProperty(c)&&!b[c]._ms&&(e=a.Ad.getByPlacementId(b[c].atl_id)||a.Ad.get(b[c].ad)))e.removePlugin("AdChoices"),b[c]._ms=!0;ca()});U(window,"scroll",Za);V=!0}}function Ta(a){var e,c,d,f,l,h=b[a].adi.split(",");try{if(5==b[a].dm)for(d in h){if(0<s.location.href.indexOf("/"+h[d]+"/")){c=!0;break}}else for(e=b[a].ad.parentNode;;){for(f=
0;f<e.children[r];f++)if(l=e.children[f],l.src)for(d in h)if(0<l.src.indexOf("/"+h[d]+"/")){c=!0;break}if(c)break;e=e.parentNode;if(!e||!e.children)break}}catch(g){}return c}function Ra(a,e){try{var c=R[e].data;b[a].advName=c.adv_name||y;b[a].advMessage=c.adv_msg||y;b[a].advLogo=c.adv_logo.replace("http:","").replace("https:","")||y;b[a].advLink=c.adv_link||y;b[a].rev=c.revision||0;b[a].behavioral=c.behavioral||"definitive";b[a].behavioralCustomMessage=c.generic_text||"";c.hide_wi&&(b[a].hideWhatIs=
!0);c.hide_cl&&(b[a].hideCustom=!0);b[a].defTrans={};c.default_generic1&&(b[a].defTrans.generic1=c.default_generic1);c.default_generic2&&(b[a].defTrans.generic2=c.default_generic2);c.default_generic3&&(b[a].defTrans.generic3=c.default_generic3);c.default_generic4&&(b[a].defTrans.generic4=c.default_generic4);c.default_generic5&&(b[a].defTrans.generic5=c.default_generic5);c.default_generic6&&(b[a].defTrans.generic6=c.default_generic6);c.default_link1&&(b[a].defTrans.link1=c.default_link1);c.default_link2&&
(b[a].defTrans.link2=c.default_link2);c.default_link2&&(b[a].defTrans.link3=c.default_link3);c.default_footer&&(b[a].defTrans.footer=c.default_footer);b[a].skipL2=c.skip_L2||970==b[a].ad_w&&66==b[a].ad_h;var d=c.message_properties||"";d["behavioral_"+n]&&(b[a].behavioral=d["behavioral_"+n]);d["behavioral_"+n]&&(b[a].noDefault=!0);c.default_icon&&!b[a].noDefault&&(b[a].cicon=c.default_icon);d["generic_text_"+n]&&(b[a].behavioralCustomMessage=d["generic_text_"+n]);d["adv_name_"+n]&&(b[a].advName=d["adv_name_"+
n]);d["adv_msg_"+n]&&(b[a].advMessage=d["adv_msg_"+n]);d["adv_logo_"+n]&&(b[a].advLogo=d["adv_logo_"+n].replace("http:","").replace("https:",""));d["adv_link_"+n]&&(b[a].advLink=d["adv_link_"+n]);d["translation_"+n]&&(b[a].translation=d["translation_"+n]);d["translation_"+n]&&(b[a].cicon=d["translation_"+n].icon);d.hasOwnProperty("skip_L2_"+n)&&(b[a].skipL2=d["skip_L2_"+n]);b[a].icon_delay=c.icon_delay||0;b[a].icon_display=c.icon_display||"normal";b[a].icon_display=c.icon_expandable?"expandable":
b[a].icon_display;b[a].icon_grayscale=c.icon_grayscale||100;b[a].container_opacity=c.container_opacity||100;b[a].offsetTop=c.offset_y?!isNaN(q(c.offset_y))?q(c.offset_y):0:0;b[a].offsetLeft=c.offset_x?!isNaN(q(c.offset_x))?q(c.offset_x):0:0;try{b[a].server=c.server[0]}catch(f){b[a].server={id:0,name:"Evidon"}}b[a].position||(b[a].position=c.icon_position||"top-right");b[a].icon||(b[a].icon=c.generic_icon?"g":"d");b[a].positionVertical=function(){return 0<=this.position.indexOf("top")?"top":"bottom"};
b[a].positionHorizontal=function(){return 0<=this.position.indexOf("left")?"left":"right"};z[a]||(z[a]=b[a].nid=c.nid||y);b[a].ad_h=q(b[a].ad_h);b[a].ad_w=q(b[a].ad_w);b[a].dm=-1;v[a]={};b[a].ciconWidth=77;if("_nl"==b[a].cicon||!b[a].cicon&&"nl"==n)b[a].ciconWidth=47;if(/_(de|es|nl_be|si|mt|lt|gr|ee|is|bg|tr|il|ar|hr|rs)$/.test(b[a].cicon)||!b[a].cicon&&/de|es|be|si|mt|lt|gr|cy|ee|is|bg|tr|il|sa|eg|hr|rs/.test(n))b[a].icon_display="expandable",b[a].ciconWidth=107;322==b[a].coid&&/row|ru|cn|il|mx|tr|eg|sa|br|ar|tw|kr|jp/.test(n)&&
(b[a].icon_display="expandable",b[a].icon_grayscale="",b[a].ciconWidth=107,b[a].cicon="g",W="gi")}catch(l){}}function Za(){try{ca(),B(ca,100)}catch(a){}}function Xa(a){var b=0,c=function(){try{0===b?(b++,B(c,200)):(a(),100>b?(b++,B(c,100)):115>b&&(b++,B(c,5E3)))}catch(d){}};return c()}function Ya(){function a(a){for(var e in a)for(var c in b)if(b[c].ad==a[e]){C(c);return}}var e=k.truste;try{a(e.ca.contMap)}catch(c){}try{a(e.ca2.contMap)}catch(d){}}function ca(){var a,e,c,d;for(d in b){a=b[d];if(5==
a.dm)break;else c=6==a.dm?a.px:a.ad;e=c;if(!b[d].hidden&&!b[d].detached&&e)for(;;){e=e.parentNode;if(e==p)break;if(!e){b[d].detached=!0;break}}else{e=ua(b[d].proximityId,b[d].ad_w,b[d].ad_h);if(e=va(e,b[d].ad_h,b[d].ad_w))b[d].ad=e;b[d].detached=!1}6!=a.dm&&(0===c.offsetWidth&&0===c.offsetHeight||"none"==u(c,"display"))?b[d].hidden=!0:b[d].hidden=!1;if(b[d].detached||b[d].hidden)da(d),m("trigger-container-"+d).style.display="none";else{m("trigger-container-"+d).style.display="";try{var f=E(c);if(f.top!=
a.pxt||f.left!=a.pxl)da(d),ea(d),fa(d)}catch(l){}}}}function Wa(){try{var a,e=A()[1]-ba,c=A()[0]<p.scrollHeight,d=K.vs!=c;if(0!==e||d){for(a in b)ea(a),fa(a),m("bap-notice-"+a)&&(da(a),wa(a));ba=A()[1]}K.vs=c}catch(f){}}function xa(a){return[L(a.aid||0),L(a.icaid||0),L(a.ecaid||0).replace(/_/g,"$underscore$").replace(/%2F/g,"$fs$"),L(a.nid||0)].join("_")+"/"}function ya(a,b,c){za("//l.betrad.com/ct/"+xa(a)+[n,b,a.ad_w,a.ad_h,242,a.coid,a.rev].join("/")+"/pixel.gif?v="+Aa+"&ttid="+$a+"&d="+O+c+"&r="+
Math.random())}function za(a){var b=new Image(0,0);b.src=a;b.style.display="none";p.appendChild(b)}function J(a,e){var c,d,f="",l=Ba[a],h=!1;l||(l={I:[0,"0/1/0/0/0/0"],S:[0,"0/0/1/0/0/0"],A:[0,"0/0/0/1/0/0"],B:[0,"0/0/0/0/1/0"],M:[0,"0/0/0/0/0/1"],O:[0,"0/1/0/0/0/0"]});0===l[e][0]&&(l[e][0]=1,c=l[e][1],h=!0);"O"==e&&(f="&o=1");Ba[a]=l;if(h&&(ya(b[a],c,f),!b[a].noticeExists&&v[a]&&("B"==e||"M"==e)))for(d in f="&o=1",v[a])ya(v[a][d],c,f)}function I(a,b){var c=xa(a);Ca[c]!=b&&(Ca[c]=b,c&&za("//l.betrad.com/ct/"+
c+"pixel.gif?e="+b+"&v="+Aa+"&d="+O+"&r="+Math.random()))}function Da(a){if(!b[a].expanded){var e="g"==b[a].icon?"/icong":"/icon",c=D+e+"/c_"+b[a].icon_grayscale+(b[a].cicon?b[a].cicon:Ea)+".png",d=m("trigger-"+a),f=E(d).left;"right"==b[a].positionHorizontal()&&(f=f+19-b[a].ciconWidth);d.style.left=f+"px";d.innerHTML='<img src="'+c+'">';m("trigger-box-"+a).style.left=f+"px";m("trigger-box-"+a).style.width=b[a].ciconWidth+"px";m("trigger-box-image-"+a).src=D+e+"/box_"+b[a].ciconWidth+"_"+b[a].position+
".png";b[a].expanded=!0;B(function(){d.onmouseover=y;d.onmouseout=function(){Fa(a)}},1)}}function Fa(a){if(b[a].expanded){var e="g"==b[a].icon?"/icong":"/icon",c=D+e+"/"+W+".png",d=m("trigger-"+a),f=E(d).left;"right"==b[a].positionHorizontal()&&(f=f+b[a].ciconWidth-19);d.style.left=f+"px";d.innerHTML='<img src="'+c+'">';m("trigger-box-"+a).style.left=f+"px";m("trigger-box-"+a).style.width="19px";m("trigger-box-image-"+a).src=D+e+"/box_19_"+b[a].position+".png";b[a].expanded=!1;B(function(){d.onmouseover=
function(){Da(a)};d.onmouseout=y},1)}}function ga(a){try{var b=a.height,c=a.width;b||(b=q(u(a,"height")));c||(c=q(u(a,"width")));b||(b=a.offsetHeight);c||(c=a.offsetWidth);return[c,b]}catch(d){}return!1}function ha(a,b,c){try{var d=ga(a)[1],f=ga(a)[0];if(d===b&&f===c||d<=b+5&&d>=b-5&&f>=c-5&&f<=c+5)return!0}catch(l){}return!1}function P(a){if(w.Safari&&0>w.SafariVersion.indexOf("5.1"))return a;var b,c,d,f;try{if("object"===a.nodeName.toLowerCase())for(d=a.childNodes[r]-1;0<d;d--){f=a.childNodes[d];
if("embed"===f.nodeName.toLowerCase()){b=f;break}"object"===f.nodeName.toLowerCase()&&"application/x-shockwave-flash"===f.type&&(c=f)}!b&&c&&(b=c);if(w.Gecko&&b)return b;if(0===b.offsetHeight&&0===b.offsetWidth)return a;if(w.Chrome&&b||0!==E(b).top)a=b}catch(l){}return a}function Ga(a,b,c,d){try{return 15==d||!a?!1:Ha(a)&&ha(a,b,c)?a:Ga(a.previousSibling,b,c,++d)}catch(f){return!1}}function Ha(a){return/DIV|IMG|EMBED|OBJECT|IFRAME|CANVAS|VIDEO|svg|ARTICLE|MAIN|ASIDE|FIGURE|NAV|SECTION/.test(a.nodeName)}
function M(a,b,c){try{if(a){var d=a.children||a.childNodes,f,l;if(0===d[r])return!1;for(l=0;l<d[r];l++)if(ia(d[l])){if(ha(d[l],b,c))return d[l];if(f=M(d[l],b,c))return f}}else return!1}catch(h){return!1}}function va(a,b,c){for(var d=a;;)if(d=M(d,b,c))if("EMBED"==d.nodeName)if("OBJECT"==d.parentNode.nodeName){a=P(d.parentNode);break}else a=d;else"OBJECT"==d.nodeName&&(ad2=P(d)),a=d;else break;return a}function da(a){try{var b=m("bap-notice-"+a);b&&(b.style.display="none")}catch(c){}}function Ia(a){a.id||
(a=m("bap-notice-"+a));"none"!=u(a,"display")?a.style.display="none":a.style.display="block"}function ja(a,e){var c=[],d;b[a][e]&&c.push(e+"["+z[a]+"]="+L(b[a][e]));if(v[a])for(d in v[a]){var f=v[a][d];f[e]&&c.push(e+"["+d+"]="+L(f[e]))}return c.join("&")}function Ja(a){var b,c,d=[],f=Ka+"more_info/"+z[a];for(c in v[a])f+=","+c;(b=ja(a,"cps"))&&d.push(b);(b=ja(a,"seg"))&&d.push(b);(b=ja(a,"ecaid"))&&d.push(b);aa&&d.push("gdn=1");0<d[r]&&(f+="?"+d.join("&"));return f}function ka(a,b){m(a).href=b}function ta(a){var b;
a&&!m("bass-"+a)&&K["CSS_"+a]&&(w.IE?(b=s.createStyleSheet(""),b.cssText=K["CSS_"+a]):(b=s.createElement("style"),b.setAttribute("id","bass-"+a),b.setAttribute("type","text/css"),b.innerHTML=K["CSS_"+a],p.appendChild(b)))}function m(){var a,b=[];for(a=0;a<arguments[r];a++){var c=arguments[a];"string"==typeof c&&(c=s.getElementById(c));if(1==arguments[r])return c;b.push(c)}return b}function U(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):(b="on"+b,a.attachEvent?a.attachEvent(b,c):a[b]=c)}function A(){var a=
-1,b=-1,c=k.innerWidth,d=s.documentElement;try{"number"==typeof c?(a=c,b=k.innerHeight):d&&d.clientWidth?(a=d.clientWidth,b=d.clientHeight):p&&p.clientWidth&&(a=p.clientWidth,b=p.clientHeight)}catch(f){}return[b,a]}function u(a,b){try{var c;a.currentStyle?c=a.currentStyle[b]:k.getComputedStyle&&(c=s.defaultView.getComputedStyle(a,y).getPropertyValue(b));if(!c&&"text-align"===b)try{c=a.currentStyle.textAlign}catch(d){}return c}catch(f){return y}}function La(a){var b=w.IE?"zIndex":"z-index",c=y;if(a)return"auto"==
u(a,b)?c=La(a.parentNode):0<q(u(a,b))&&(c=u(a,b)),q(c)+10}function ia(a){return 0===a.offsetWidth&&0===a.offsetHeight||"none"==u(a,"display")||!a.height&&!a.getAttribute("height")&&!u(a,"height")||!a.width&&!a.getAttribute("width")&&!u(a,"width")?!1:!0}function ua(a,b,c,d){var f,l,h,g,k,t,m=y,p={},n,w=s.getElementsByTagName("*");for(f=0;f<w[r];f++)if(Ha(w[f])&&(g=w[f],!("EMBED"==g.nodeName&&"OBJECT"==g.parentNode.nodeName)&&ia(g)))if(g.height==c&&g.width==b||q(g.getAttribute("height"))==c&&q(g.getAttribute("width"))==
b)p[f]=g;else try{l=q(u(g,"width").replace("px","")),h=q(u(g,"height").replace("px","")),h==c&&l==b&&(p[f]=g)}catch(z){}for(k in p)if(b=Math.abs(a-k),!(50<b)){if(!n||b<n)n=b,m=p[k];d&&d.parentNode==p[k].parentNode&&(t={d:b,cm:p[k]})}t&&5>Math.abs(n-t.d)&&(m=t.cm);try{m&&"OBJECT"==m.nodeName&&(m=P(m))}catch(x){}return m}function ab(a){J(a,"I");0<b[a].icon_delay&&(m("trigger-container-"+a).style.display="none",B(function(){try{m("trigger-container-"+a).style.display="block"}catch(b){}},1E3*q(b[a].icon_delay)))}
function fa(a){var e=m("trigger-"+a),c=m("trigger-box-"+a);e.style.top=b[a].posTop+"px";e.style.left=b[a].posLeft+"px";c.style.top=b[a].posTop+"px";c.style.left=b[a].posLeft+"px"}function ea(a){var e,c,d,f,l,h,g=b[a].ad,k=b[a].ad_h,m=b[a].ad_w;if(5==b[a].dm)d=l=h=f=0;else if(/^(1|2|3|4|4.1|4.2|7|8|9)$/.test(b[a].dm))d=E(g).left,f=E(g).top,l=d,h=f;else if(6==b[a].dm){g=b[a].px;d=E(g).left;f=E(g).top;w.Opera&&(g.width=g.height="1",f=E(g).top,g.width=g.height="0");l=d-m-4;h=f-k;try{if((e=g.parentNode.width)||
(e=q(u(g.parentNode,"width"))),e===m||e<=m)l+=m,0<=u(g,"text-align").toLowerCase().indexOf("center")?(l-=m/2,w.IE&&(h-=4)):0<=u(g,"text-align").toLowerCase().indexOf("right")&&(l-=m,w.IE&&(h-=4))}catch(s){}}try{"relative"==u(p,"position")&&(c=p.getBoundingClientRect(),l-=c.left)}catch(n){}e=h;c=l;"top-right"==b[a].position?c+=m:"bottom-right"==b[a].position?(e+=k-14,c+=m):"bottom-left"==b[a].position&&(e+=k-14);e+=b[a].offsetTop;c+=b[a].offsetLeft;e+="top"==b[a].positionVertical()?0:-1;"expandable"==
b[a].icon_display||"icon"==b[a].icon_display&&b[a].mini?"right"==b[a].positionHorizontal()&&(c-=19):"right"==b[a].positionHorizontal()&&(c-=b[a].ciconWidth);b[a].pxl=d;b[a].pxt=f;b[a].posTop=e;b[a].posLeft=c;b[a].spotTop=h;b[a].spotLeft=l}function Sa(a){var e,c,d,f=b[a].ad_h,l=b[a].ad_w,h=m("bap-pixel-"+a),g=s.getElementsByTagName("*");for(d=0;d<g[r];d++)h==g[d]&&(b[a].proximityId=d);if(Ma&&A()[0]==f&&A()[1]==l)d=5;else if(0<O.indexOf("mail.yahoo.com")&&1==s.getElementsByTagName("object")[r]&&w.IE)e=
s.getElementsByTagName("object")[0],d=4.1;else if(b[a].container&&(e=m(b[a].container))||"true"==b[a].check_container&&(e=h.parentNode))d=8,"true"==b[a].check_container?Ma&&0!=(c=Na(A()[0],A()[1]))?(b[a].ad_h=A()[0],b[a].ad_w=A()[1],b[a].ns=c,e=y,d=5):(e=M(e,f,l)||e,e=la(e,a)):(d=9,e=P(M(e,f,l))||e);else if(e=Ga(h.previousSibling,f,l,1))d=3;else{if(c=0<O.indexOf("yahoo.com")){c=y;d=s.getElementsByTagName("img");for(e=0;e<d[r];e++)if(d[e].height||d[e].getAttribute("height"))if(d[e].width||d[e].getAttribute("width"))d[e].height==
f&&d[e].width==l?c=d[e]:q(d[e].getAttribute("height"))==f&&q(d[e].getAttribute("width"))==l&&(c=d[e]);c=e=c}if(c)d=4.2;else if(e=ua(b[a].proximityId,l,f,h))d=7;else{d=6;try{m("bap-pixel-"+a).style.display=""}catch(k){}}}if(5!=d&&/^(1525|4501|7420|8573)$/.test(b[a].nid))try{e=M(h.parentNode,f,l)||e,e=la(e,a),3!=d&&(d=4)}catch(t){}if(3==d||7==d)e=va(e,f,l);0<=O.indexOf("l.yimg.com")&&w.Chrome&&(d=6);b[a].dm=d;b[a].ad=e;b[a].px=h;try{b[a].ad_z=b[a].ad_z||La(e)}catch(p){}5===d&&(b[a].ad_z=1E5);6!=d&&
h.parentNode.removeChild(h)}function Ua(a){var e=b[a].ad;if(e&&!e.notice)e.notice=a;else if(e&&e.notice!=a)b[a].noticeExists=!0,z[e.notice]!=z[a]&&ma(e.notice,a);else if(5==b[a].dm)if(k.notice)b[a].noticeExists=!0,z[k.notice]!=z[a]&&ma(k.notice,a);else try{k.notice=a,b[a].ad={nodeName:"EXACT-FRAME"},k.bap_frameid?H("BAPFRAME|"+z[a]+"|"+k.bap_frameid):k.parent!=k.top?k.top.postMessage("BAPFRAMEBROADCAST|"+z[a]+"|"+(s.referrer?s.referrer:"")+"|"+b[a].ad_w+"|"+b[a].ad_h,"*"):k.top.postMessage("BAPFRAMEID|"+
z[a]+"|"+s.location.href,"*")}catch(c){}if(b[a].ad&&!b[a].noticeExists&&("IFRAME"==b[a].ad.nodeName&&b[a].ad.src in X||"EXACT-FRAME"==b[a].ad.nodeName&&X.contents))b[a].noticeExists=!0;if(b[a].noticeExists)J(a,"I"),J(a,"O");else{ea(a);var d,f,l="",h="",g=m("BAP-holder"),n="BAP.action('"+a+"', 'S'); BAP.createL2('"+a+"');",t="g"==b[a].icon?"/icong":"/icon";g||(g=s.createElement("div"),g.setAttribute("id","BAP-holder"),p.appendChild(g));try{f=q(b[a].container_opacity)/100}catch(r){f=1}f=1>f?"opacity:"+
f+";-moz-opacity:"+f+";-ms-filter:DXImageTransform.Microsoft.Alpha(Opacity="+100*f+");filter:alpha(opacity="+100*f+");":"";"expandable"==b[a].icon_display?(e='<img src="'+D+t+"/"+W+'.png">',d=19,h=' onmouseover="BAP.expandIcon('+a+')" '):"icon"==b[a].icon_display&&b[a].mini?(e='<img src="'+D+t+"/"+W+'.png">',d=19):(d=b[a].ciconWidth,e='<img src="'+D+t+"/c_"+b[a].icon_grayscale+(b[a].cicon?b[a].cicon:Ea)+'.png">');if(b[a].mini||b[a].skipL2)n="BAP.action('"+a+"', 'S'); BAP.action('"+a+"', 'M'); _w.open(BAP.moreInfoHref("+
a+"), '_newtab');";b[a].ad_z&&(l="z-index:"+q(b[a].ad_z)+";");b[a].amzn&&(n="BAP.action('"+a+"', 'S'); _w.open('http://www.amazon.com/gp/dra/info/?pn=1&pg=daaedisc&pp=1,e,"+b[a].coid+","+b[a].nid+"', '_newtab');");e='<div id="trigger-container-'+a+'" style="position: static !important;"><span id="trigger-box-'+a+'" class="bap-trigger" style="'+l+"position:absolute;"+f+"width:"+d+'px;height:15px;"><img id="trigger-box-image-'+a+'" src="'+D+t+"/box_"+d+"_"+b[a].position+'.png"></span>'+('<span id="trigger-'+
a+'" style="'+l+'position:absolute;" class="bap-trigger" onclick="'+n+'"'+h+">"+e+"</span>")+"</div>";g.innerHTML+=e;fa(a);ab(a)}}function ma(a,e,c){var d=c?e:z[e];if(z[a]!=d){if(v[a])for(var f in v[a])if(f==d)return;v[a][d]=c||b[e]}}function na(a,b){return"BAPACCEPT|"+b+"|"+a.nid+"|"+(a.aid||0)+"|"+(a.icaid||0)+"|"+(a.ecaid||0)+"|"+a.coid+"|"+a.ad_w+"|"+a.ad_h+"|"+a.rev+"|"+(a.cps||"-")+"|"+(a.seg||"-")}function Q(a,b,c){H(na(a,b),c)}function H(a,b){var c;c=b?b.postMessage?b:b.contentWindow:k.parent;
c.postMessage&&c.postMessage(a,"*")}function Qa(){for(var a=s.getElementsByTagName("iframe"),b=0;b<a[r];b++)oa[b]=a[b],H("BAPTANGO?|"+b,a[b])}function Oa(){if(V&&0<F[r]){var a,b=[];for(a=0;a<F[r];a++)0<=F[a].indexOf("BAPFRAMEBROADCAST")&&b.push(F[a]);for(;0<F[r];)a=F.pop(),0<=a.indexOf("BAPFRAMEBROADCAST")||b.push(a);for(;0<F[r];)b.push(F.pop());for(;0<b[r];)pa(b.pop())}else!V&&0<F[r]&&B(Oa,1E3)}function pa(a){try{var e,c,d,f,l,h,g,p,t=a;a.data&&(t=a.data);if(0===t.indexOf("BAP"))if(V){var n=t.substring(0,
t.indexOf("|")||t[r]);if("BAPFRAMEBROADCAST"==n){if(k.top==window){d=t.split("|");f=d[1];var q=d[2],y=d[3],u=d[4];for(g in b)if((h=b[g].ad)&&("IFRAME"==h.nodeName&&b[g].ad_h==u&&b[g].ad_w==y)&&(q==h.src||w.IE&&0<q.indexOf(h.src))){Q(b[g],f,a.source);w.IE||J(g,"O");m("trigger-"+g)&&m("BAP-holder").removeChild(m("trigger-container-"+g));delete b[g];break}}}else if("BAPFRAMEID"==n){d=t.split("|");f=d[1];var x=d[2];p=s.getElementsByTagName("iframe");for(c=0;c<p[r];c++)p[c].src&&p[c].src==x&&(oa[c]=p[c],
H("BAPTANGO?|"+c,p[c]))}else if("BAPTANGO?"==n){var A=t.substring(t.indexOf("|")+1);k.bap_frameid=A;H("BAPLETSDANCE|"+A);k.notice&&H("BAPFRAME|"+z[k.notice]+"|"+A)}else if("BAPLETSDANCE"==n)e=t.substring(t.indexOf("|")+1),oa[e].tango=e;else if("BAPFRAME"==n){d=t.split("|");f=d[1];var D=d[2];X[C]=f;X.contents=!0;for(g in b)if((h=b[g].ad)&&"IFRAME"==h.nodeName&&h.tango==D&&!b[g].noticeExists||"EXACT-FRAME"==h.nodeName){d="";if("EXACT-FRAME"==h.nodeName){p=s.getElementsByTagName("iframe");for(c=0;c<
p[r];c++)Q(b[g],f,p[c]),k.passFrame=p[c]}else Q(b[g],f,h),d=h;k.passNid=f;for(l in v[g])Q(v[g][l],f,d||k.passFrame);J(g,"O");m("trigger-"+g)&&m("BAP-holder").removeChild(m("trigger-container-"+g));delete b[g];break}}else if("BAPFLASH"==n){d=t.substring(t.indexOf("|")+1);f=d.substring(0,d.indexOf("|"));var C=d.substring(d.indexOf("|")+1);for(g in b)if(h=b[g].ad,e=h.src||h.data||h.movie||"",h&&("OBJECT"==h.nodeName||"EMBED"==h.nodeName)&&e==C&&!b[g].noticeExists||"EXACT-FRAME"==h.nodeName){try{h.flashGetMessage(na(b[g],
f))}catch(E){}k.passFrame=h;k.passNid=f;for(l in v[g])try{h.flashGetMessage(na(b[g],f))}catch(G){}J(g,"O");m("trigger-"+g)&&m("BAP-holder").removeChild(m("trigger-container-"+g));delete b[g]}}else if("BAPACCEPT"==n){d=t.split("|");c={};var bb=d[1];c.nid=d[2];c.aid=d[3];c.icaid=d[4];c.ecaid=d[5];c.coid=d[6];c.ad_w=d[7];c.ad_h=d[8];c.rev=d[9];d[10]&&"-"!==d[10]&&(c.cps=d[10]);d[12]&&"-"!==d[11]&&(c.seg=d[11]);0===c.ecaid&&delete c.ecaid;if(k.passFrame)Q(c,k.passNid,k.passFrame);else for(g in b)f=z[g],
bb==f&&ma(g,c.nid,c)}else if("BAPPING"==n)d="",k.notice?(d="BAPPONG|"+b[k.notice].position,H(d)):k.passFrame&&H("BAPPING|",k.passFrame);else if("BAPPONG"==n)H(t);else if("BAPAMZN"==n)for(g in k.bap_amzn=!0,b)m("trigger-"+g).onclick=function(){J(g,"S");k.open("http://www.amazon.com/gp/dra/info/?pn=1&pg=daaedisc&pp=1,e,"+b[g].coid+","+b[g].nid,"_newtab")}}else F.push(t),B(Oa,1E3)}catch(I){}}function wa(a){var e=m("bap-notice-"+a),c;if("right"==b[a].positionHorizontal())try{c=b[a].spotLeft+b[a].ad_w-
b[a].popupWidth,e.style.left=(c||0)+"px"}catch(d){}else e.style.left=(b[a].spotLeft||0)+"px";"top"==b[a].positionVertical()?e.style.top=b[a].posTop+"px":(c=q(e.style.height)||b[a].popupHeight,e.style.top=(0<b[a].spotTop+b[a].ad_h-c?b[a].spotTop+b[a].ad_h-c:0)+"px");w.QuirksMode&&(b[a].popupWidth&&"none"!=e.style.display)&&(e.style.display="block",e.style.width=b[a].popupWidth+(728==b[a].popupWidth?4:0)+"px",e.style.margin="0 0");c=b[a].advLogo;m("bap-logo-"+a)&&(c&&"none"!=e.style.display&&!m("bap-logo-"+
a).src)&&(m("bap-logo-"+a).src=c)}function Va(a){function e(a){try{a.generic1&&(D=a.generic1,B=a.generic2,C=a.generic3,E=a.generic4,F=a.generic5,sg6=a.generic6,u=a.link1,x=a.link2,A=a.link3,v=a.footer,v=v.replace("Evidon","Ghostery, Inc"))}catch(b){}}if(!b[a].skipL2){var c="",d=y,f=b[a].ad_w,l=b[a].ad_h,h="",g="",k=m("BAP-holder"),n="",r="",u="More information &#38; opt-out options",x="What is interest based advertising?",A="Learn about your choices",v="Privacy Controls by Ghostery, Inc.&#153;",D=
"This ad has been matched to your interests. It was selected for you based on your browsing activity.",B="This ad may have been matched to your interests based on your browsing activity.",C="helped",E="determine that you might be interested in an ad like this.",F="select this ad for you.";sg6="selected this ad for you.";b[a].noDefault||e(b[a].defTrans);e(b[a].translation);v='<span class="bap-gray">'+v+"</span>";"definitive"==b[a].behavioral?(h=D,b[a].advName&&(h+="<br><br>"+b[a].server.name+" "+C+
" "+b[a].advName+" "+E)):"single"==b[a].behavioral?(h=B,b[a].advName&&(h+="<br><br>"+b[a].advName+" "+sg6)):"uncertain"==b[a].behavioral?(h=B,b[a].advName&&(h+="<br><br>"+b[a].server.name+" "+C+" "+b[a].advName+" "+F)):"custom"==b[a].behavioral&&(h=b[a].behavioralCustomMessage);b[a].ad_z&&(g="z-index:"+(q(b[a].ad_z)+1)+";");d=190<=f&&300>f&&145<=l&&250>l?5:300<=f&&250<=l?1:5;160==f&&600==l&&(d=2);728<=f&&990>=f&&(90<=l&&125>=l)&&(d=6);if(1==d)n=w.QuirksMode?' style="width:294px !important"':"",r=
w.QuirksMode?"width:296px !important;":"width:auto !important;max-width:299px;min-width:276px;",c='<div id="bap-notice-'+a+'" class="bap1 bap-notice" style="'+r+";display:none;"+g+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle('+a+');return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+
a+'" border="0">':"")+"</div><p>"+h+'</p><div class="bap-link-div"'+n+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+u+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"'+n+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+x+" &raquo;</a></div>"),b[a].hideCustom||
(b[a].advLink&&b[a].advMessage?c+='<div class="bap-link-div"'+n+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+" &raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div"'+n+">"+b[a].advMessage+"</div>")),c+='<div class="bap-link-div"'+n+">"+v+"</div></div></div>";else if(2==d)c='<div id="bap-notice-'+a+'" class="bap2 bap-notice" style="width:156px;display:none;'+g+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+
a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':"")+"</div><p>"+h+'</p><div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+
u+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+x+" &raquo;</a></div>"),b[a].hideCustom||(b[a].advLink&&b[a].advMessage?c+='<div class="bap-link-div"><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+"&nbsp;&raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div">'+
b[a].advMessage+"</div>")),c+='<div class="bap-link-div">'+v+"</div></div></div>";else if(5==d)c+='<div id="bap-notice-'+a+'" class="bap5 bap-notice" style="display:none;'+g+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+"'));return false;\">[ X ]</div><p>"+h+' <a class="bap-blue-link" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.link('bap-link-1-"+a+"', '"+Ka+"more_info/"+z[a]+"')\">"+A+
'</a></p><div class="bap-link-div">'+v+"</div></div></div>";else if(6==d){r=w.QuirksMode?"width: 728px !important;":"min-width: 675px !important; width: auto !important;";n=w.QuirksMode?' style="width:275px !important; height: 20px;"':"";if(b[a].hideCustom&&b[a].hideWhatIs)c+="<style>#bap-first-link-div { padding-top:45px !important; }</style>";else if(b[a].hideCustom||b[a].hideWhatIs)c+="<style>#bap-first-link-div { margin-top: 20px !important; }</style>";c=c+('<div id="bap-notice-'+a+'" class="bap6 bap-notice" style="display:none;'+
r+g+'"><div class="bap-div"><div id="bap-gradient-1" class="bap-gradient"><div id="bap-first-link-div" class="bap-link-div"'+n+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+u+" &raquo;</a></div>")+(b[a].hideWhatIs?"":'<div class="bap-link-div"'+n+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+
a+"')\">"+x+" &raquo;</a></div>");b[a].hideCustom||(c=b[a].advLink&&b[a].advMessage?c+('<div class="bap-link-div"'+n+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+" &raquo;</a></div>"):b[a].advMessage?c+('<div class="bap-link-div"'+n+">"+b[a].advMessage+"</div>"):c+"&nbsp;");c+='<div class="bap-link-div"'+n+">"+v+'</div></div><div id="bap-gradient-2" class="bap-gradient"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+
a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':"")+"</div><p>"+h+"</p></div></div></div>"}k||(k=s.createElement("div"),k.setAttribute("id","BAP-holder"),p.appendChild(k),k=m("BAP-holder"));k.innerHTML+=c;ta(d)}}function E(a){var b;if(!a||!a.ownerDocument)return y;
if(a===a.ownerDocument.body){b=p.offsetTop;var c=p.offsetLeft;a=s.createElement("div");var d,f,k=qa(u(p,"marginTop"))||0;a.style.position="absolute";a.style.top=0;a.style.left=0;a.style.margin=0;a.style.border=0;a.style.width="1px";a.style.height="1px";a.style.visibility="hidden";a.innerHTML='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
p.insertBefore(a,p.firstChild);d=a.firstChild;f=d.firstChild;f.style.position="fixed";f.style.top="20px";f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";p.removeChild(a);p.offsetTop!==k&&(b+=qa(u(p,"marginTop"))||0,c+=qa(u(p,"marginLeft"))||0);return{top:b,left:c}}try{b=a.getBoundingClientRect()}catch(h){}d=a.ownerDocument;c=d.documentElement;if(!b)return b?{top:b.top,left:b.left}:{top:0,left:0};d=d.body;a=a&&"object"===typeof a&&"setInterval"in a?a:9===a.nodeType?
a.defaultView||a.parentWindow:!1;return{top:b.top+(a.pageYOffset||ra&&c.scrollTop||d.scrollTop)-(c.clientTop||(w.QuirksMode?d.clientTop:0)||0),left:b.left+(a.pageXOffset||ra&&c.scrollLeft||d.scrollLeft)-(c.clientLeft||(w.QuirksMode?d.clientLeft:0)||0)}}var x={},G=[],sa=!1,T=!1,V=!1,Z=!1,Aa="64bcc9c",$a="2",n="row",Ea="_us",W="ci",K={CSS_COMMON:".bap-blue,.bap-close,.bap-div,.bap-gradient,.bap-gray,.bap-img-container,.bap-notice,.bap-link-div{color:#000;white-space:normal;word-wrap:normal;vertical-align:middle !important;margin:0;padding:0;border:0;outline:0;font-family:Arial !important;font-size:100%;border-collapse:collapse;border-spacing:0;line-height:13px;list-style:none;letter-spacing:0 !important;text-align:left;overflow:visible !important}.bap-notice{background-color:#fff;padding:2px;font-size:16px;line-height:13px;z-index:9991;top:-100px;left:-100px}.bap-blue,.bap-blue:link,.bap-blue:visited{color:#2b2f98}.bap-close{width:20px;color:#707070;font-size:10px;font-weight:bold;margin-left:-22px;position:relative;top:1px;left:100%;cursor:pointer}.bap-div{border:1px solid #ababab}.bap-div p{float:none;padding:0}.bap-gray,.bap-gray:visited{color:#444}.bap-img-container a{vertical-align:middle;display:table-cell;height:45px}.bap-link-div{height:14px;color:#2b2f98;border-top:1px solid #ababab;padding:3px 10px 4px 10px;text-decoration:none;font-size:.67em !important;font-weight:bold}.bap-link-div a,.bap-link-div span{text-decoration:none;font-size:inherit;font-weight:bold}#BAP-holder img{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;max-width:100%;box-shadow:0 0 !important;-moz-box-shadow:0 0 !important;-webkit-box-shadow:0 0 !important;background:none !important}#BAP-holder{position:static !important}#BAP-holder .bap-trigger{z-index:9990}.bap-trigger{cursor:pointer;display:block;font-family:Arial;font-size:8pt;white-space:nowrap}.bap-trigger img{width:auto;height:auto}",
CSS_1:".bap1 .bap-img-container{margin:-18px 0 9px 10px;height:45px;position:static}.bap1 .bap-img-container img{margin-top:6px !important}.bap1 p{font-size:.7em;margin:4px 5px 0 10px;padding-bottom:6px;line-height:13px;width:259px}.bap1 .bap-close{\x3c!--[if lte IE 7]>top:0;left:273px !important;<![endif]--\x3e}",CSS_2:".bap2 .bap-close{z-index:1}.bap2 .bap-close{\x3c!--[if lte IE 7]>top:0;left:152px !important;<![endif]--\x3e}.bap2 .bap-gray,.bap-gray:visited{padding-right:0 !important;word-spacing:-2px;font-size:.8em}.bap2 .bap-img-container{position:relative;top:-7px;margin-left:10px}.bap2 .bap-link-div{height:100%}.bap2 .bap-notice{font-size:12px}.bap2 .bap-img-container img{display:block;margin-top:10px}.bap2 p{font-size:11px;margin:2px 5px 0 10px;padding-bottom:7px;line-height:13px}",
CSS_5:".bap5 .bap-gray,.bap-gray:visited{font-size:95%}.bap5 .bap-link-div{background-color:#dcdcdc;font-size:.8em;padding:3px 3px 4px 6px}.bap5{font-size:12px;width:190px}.bap5 .bap-spacer-div{height:1px}.bap5 p{font-size:.8em;margin:3px 6px 0 5px;padding-bottom:3px;line-height:13px}.bap5 .bap-close{\x3c!--[if lte IE 7]>top:0;left:185px !important;<![endif]--\x3e}",CSS_6:".bap6 .bap-close{margin-left:0;display:inline;float:right;right:10px;left:0 !important}.bap6 .bap-div{height:84px;min-width:688px}.bap6 .bap-gradient{float:left;height:84px}.bap6 .bap-img-container{float:right;clear:right;margin-top:10px;height:45px;width:115px}.bap6 .bap-link-div{padding:4px 10px 3px 10px;overflow:hidden}.bap6 .bap-link-div a,.bap6 .bap-link-div span{display:block;width:auto !important;max-width:275px;min-width:210px;line-height:130%}.bap6 p{font-size:.7em;width:310px;margin:5px 0 0 10px;line-height:13px}#bap-gradient-1{border-right:1px solid #ababab;width:auto !important;max-width:280px;min-width:230px}#bap-gradient-2{width:441px}#bap-first-link-div{border:0}",
options:{}},k=window,s=document,L=encodeURIComponent,b=K.options,y=null,B=setTimeout,q=parseInt,qa=parseFloat;location.href.indexOf("tech-ticker");var r="length",D="//c.betrad.com",Pa=D+"/a/",Ka="http://info.evidon.com/",p=s.getElementsByTagName("body")[0],Ca={},oa={},v={},ba=0,$,F=[],X={},R={},z={},Ba={},S=0,O=s.domain,aa,w=function(){var a=navigator.userAgent,b="[object Opera]"==Object.prototype.toString.call(k.opera),c=a.substring(a.indexOf("Version")+"Version"[r]+1),d=!!k.attachEvent&&!b&&s.createStyleSheet;
try{c=c.substring(0,c.indexOf(" "))}catch(f){}return{IE:d,IE6:-1<a.indexOf("MSIE 6"),IE7:-1<a.indexOf("MSIE 7"),IE8:-1<a.indexOf("MSIE 8"),Opera:b,Gecko:-1<a.indexOf("Gecko")&&-1===a.indexOf("KHTML"),Safari:-1<a.indexOf("Safari")&&-1>=a.indexOf("Chrome"),Chrome:!!a.match("Chrome"),QuirksMode:d&&"BackCompat"==s.compatMode,SafariVersion:c}}(),Ma=top.location!=location;(function(){var a=[0,0,0],b=y,c=navigator,d=!1;if("undefined"!=typeof c.plugins&&"object"==typeof c.plugins["Shockwave Flash"]){if((b=
c.plugins["Shockwave Flash"].description)&&!("undefined"!=typeof c.mimeTypes&&c.mimeTypes["application/x-shockwave-flash"]&&!c.mimeTypes["application/x-shockwave-flash"].enabledPlugin))d=!0,b=b.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),a[0]=q(b.replace(/^(.*)\..*$/,"$1"),10),a[1]=q(b.replace(/^.*\.(.*)\s.*$/,"$1"),10),a[2]=/[a-zA-Z]/.test(b)?q(b.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if("undefined"!=typeof k.ActiveXObject)try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(f&&(b=f.GetVariable("$version")))b=
b.split(" ")[1].split(","),d=!0,a=[q(b[0],10),q(b[1],10),q(b[2],10)]}catch(l){}return{x:d,v:a}})();var la,Na,ra=y;(function(){var a=s.createElement("div");a.style.width=a.style.paddingLeft="1px";p.appendChild(a);ra=2===a.offsetWidth;p.removeChild(a).style.display="none"})();try{U(window,"message",pa)}catch(db){}k._bao&&Y(_bao);x.options=b;x.flashPostMessage=function(a){pa({data:a})};x.createL2=function(a){var e=m("bap-notice-"+a);e.style.position="absolute";Ia(e);b[a].popupHeight=e.offsetHeight;b[a].popupWidth=
e.offsetWidth;wa(a)};x.link=ka;x.iabLink=function(a,b){for(var c in v[a]);ka("bap-link-2-"+a,"http://www.youronlinechoices.com/")};x.moreInfoLink=function(a){ka("bap-link-1-"+a,Ja(a))};x.moreInfoHref=Ja;x.toggle=Ia;x.expandIcon=Da;x.collapseIcon=Fa;x.action=J;x.start=Y;x.copyJSON=function(a){try{R[a.data.nid]=a,S--}catch(b){}};x.$=m;x.inject=function(a){sa=!0;la=a.rh;M=a.checkChildren;Na=a.getAdStandard;a.inject({isValidElement:ia,getDims:ga,checkElement:ha,getObjectEmbed:P})};return x}();
BAP.SVNREV="r64bcc9c";
