/*
 Copyright (c) 2009-2013 Petr Vostrel (http://petr.vostrel.cz/)
 Licensed under the MIT License (LICENSE.txt).

 jQuery Reel
 http://reel360.org
 Version: 1.3rc
 Updated: 2013-10-16

 Requires jQuery 1.6.2 or higher
*/
(function(k){var O=typeof define=="function"&&define.amd&&(define(["jquery"],k)||true),X=!O&&typeof module=="object"&&typeof module.exports=="object"&&(module.exports=k);!O&&!X&&k()})(function(){return jQuery.reel||function(k,O,X,s){function Bc(f){return n.instances.push(f[0])&&f}function Cc(f){return(n.instances=n.instances.not(Ba(f.attr(ka))))&&f}function Y(f){return n.instances.first().data(f)}function Dc(f){return"data:image/gif;base64,R0lGODlh"+f}function V(f){return"<"+f+"/>"}function x(f){return"."+
(f||"")}function Va(f){return f.replace(Ca,n.cdn)}function Da(f){return"url('"+ub(f)+"')"}function ac(f,j){return typeof j==vb?j[f]:j}function Ea(f,j,o){return wb(f,Fa(j,o))}function Ga(f,j){return H(f)*(j?-1:1)}function Wa(f){return f.touch||f.originalEvent.touches&&f.originalEvent.touches[0]||f}function xb(f){return f.originalEvent}function y(f){return f===s?0:typeof f==yb?f:f+"px"}function Ba(f){return"#"+f}function Xa(f,j,o){for(;f.length<j;)f=o+f;return f}function ub(f){return encodeURI(decodeURI(f))}
function zb(f){return n.re.array.exec(f)?f.split(n.re.array):f}function bc(f){return!f.parents(Ab).length}function cc(f){return typeof f==yb?f:k.each(f,function(j,o){f[j]=o?+o:s})}function Ec(f){try{console.error(f)}catch(j){}}if(k){var Z=k&&k().jquery.split(/\./);if(!(!Z||+(Xa(Z[0],2,"0")+Xa(Z[1],2,"0")+Xa(Z[2]||"",2,"0"))<10602)){var n=k.reel={version:"1.3rc",def:{frame:1,frames:36,loops:true,clickfree:false,draggable:true,scrollable:true,steppable:true,throwable:true,wheelable:true,orientable:false,
cw:false,revolution:s,stitched:0,directional:false,row:1,rows:0,rowlock:false,framelock:false,orbital:0,vertical:false,inversed:false,footage:6,spacing:0,horizontal:true,suffix:"-reel",image:s,images:"",path:"",preload:"fidelity",shy:false,speed:0,delay:0,timeout:2,duration:s,rebound:0.5,entry:s,opening:0,brake:0.23,velocity:0,tempo:36,laziness:6,cursor:s,hint:"",indicator:0,klass:"",preloader:2,area:s,attr:{},annotations:s,responsive:false,graph:s,monitor:s},scan:function(){return k(x(z)+":not("+
x(Bb)+" > "+x(z)+")").each(function(f,j){f=k(j);j=f.data();j.images=zb(j.images);var o={};k(x(dc)+"[data-for="+f.attr(ka)+"]").each(function(u,t){u=k(t);t=u.data();t.x=cc(zb(t.x));t.y=cc(zb(t.y));var g=u.attr(ka);t.node=u.removeData();o[g]=t});j.annotations=o;f.removeData().reel(j)})},fn:{reel:function(){var f=arguments,j=k(this),o=j.data(),u=f[0]||{},t=f[1];if(typeof u=="object"){var g=k.extend({},n.def,u),K=[];j.filter(Ya).unreel().filter(function(){var h=k(this),e=g.attr,a=e.src||h.attr(Cb),I=
e.width||h.attr(L)||h.width();h=e.height||h.attr(D)||h.height();if(a&&I&&h)return true;else Ec("Missing attributes: Image needs `src` and both dimensions to be set to Reel")}).each(function(){var h=k(this),e=function(c,d){return h.reel(c,d)&&h.data(c)},a=function(c){return h.reel(c)},I={setup:function(){if(!(h.hasClass(z)&&h.parent().hasClass(Bb))){e(Ha,g);var c={src:h.attr(Cb),width:h.attr(D)||null,height:h.attr(L)||null,style:h.attr($)||null,"class":h.attr(ec)||null},d=h.attr(g.attr).attr(Cb),b=
e(ka,h.attr(ka)||h.attr(ka,z+"-"+ +new Date).attr(ka)),i=k.extend({},h.data()),p=e(aa,g.images||[]),l=e(W,g.stitched),m=!p.length||l;m=e(Za,g.responsive&&(Fc?true:!m));var q=e(fc,{}),r=g.loops,v=g.orbital,E=g.revolution,ba=g.rows,ca=e(ra,Fa(g.footage,g.frames));e($a,g.spacing);var Db=e(D,+h.attr(D)||h.width()),Eb=e(L,+h.attr(L)||h.height()),Gc=e(Ia,g.shy),gc=e(P,v&&ca||ba<=1&&p.length||g.frames),Hc=ba>1||v;e(Ja,ac("x",E)||l/2||Db*2);e(Fb,!Hc?0:ac("y",E)||(ba>3?Eb:Eb/(5-ba)));ba=l?1:la(gc/ca);e(Gb,
l-(r?0:Db));e(ab,0);b=Ba(b+g.suffix);r=h.attr(ec);r=!r?Q:r+A;r=k(V(sa),{id:b.substr(1),"class":r+A+Bb+A+hc+"0"});r=h.wrap(r.addClass(g.klass)).addClass(z);K.push(Bc(r)[0]);r=r.parent().bind(I.instance);e(Hb,p.length?Q:g.image||d.replace(n.re.image,"$1"+g.suffix+".$2"));e(bb,k(V(sa),{"class":Ib}).appendTo("body"));e(Ka,k());e(ic,[]);e(J,null);e(B,null);e(R,g.row);e(ta,0);e(Jb,ba);e(jc,g.rowlock);e(kc,g.framelock);e(cb,e(La,e(db,0)));e(eb,1/gc);e(lc,b);e(M,e(ua,g.speed)<0);e(Ma,false);e(ma,0);e(va,
g.vertical);e(da,0);e(wa,Ga(1,!g.cw&&!l));e(fb,{});e(ea,false);e(gb,e(Kb,0));e(hb,e(ib,0));e(Na,false);e(Lb,false);e(fa,false);e(mc,g.brake);e(Mb,!!v);e(ga,g.tempo/(n.lazy?g.laziness:1));e(xa,-1);e(jb,-1);e(Oa,g.annotations||r.unbind(x(Oa))&&{});e(Nb,1);e(nc,{attr:c,data:i});g.steppable||r.unbind("up.steppable");g.indicator||r.unbind(".indicator");C(Q,{overflow:Ob,position:"relative"});m||C(Q,{width:Db,height:Eb});m&&k.each(Ic,function(cd,oc){q[oc]=a(oc)});C(na+A+x(z),{display:Pb});C(x(Ib),{position:"fixed",
left:y(-100),top:y(-100)},true);C(x(Ib)+A+Ya,{position:Pa,width:10,height:10},true);ha.bind(I.pool);h.trigger(Gc?"prepare":"setup")}},instance:{teardown:function(){var c=h.data(nc);h.parent().unbind(I.instance);if(a(Ia))h.parent().unbind(kb,ia);else a($).remove()&&a(Ka).unbind(F);a(bb).empty();clearTimeout(Qb);clearTimeout(Rb);k(O).unbind(pc,qc);k(O).unbind(F);ha.unbind(I.pool);oa.unbind(ja);h.siblings().unbind(F).remove();lb();h.removeAttr("onloaded");Cc(h.unbind(F).removeData().unwrap().attr(c.attr).data(c.data));
h.attr($)==Q&&h.removeAttr($)},setup:function(){function c(q){return h.trigger("down",[Wa(q).clientX,Wa(q).clientY,q])&&q.give}function d(q,r){return!r||h.trigger("wheel",[r,q])&&q.give}var b=h.parent().append(ya()),i=e(Ka,k(g.area||b)),p=g.rows>1;C(A+x(z),{MozUserSelect:mb,WebkitUserSelect:mb,MozTransform:"translateZ(0)"});h.unbind(kb,ia);i.bind(Jc,c).bind(g.clickfree?Kc:Lc,c).bind(g.wheelable?Mc:null,d).bind(Nc,function(){return false});if(!Qa){var l=g.cursor,m=l==rc?Oc:l||Pc;l=l==rc?Qc+A+"!important":
s;C(Q,{cursor:Va(m)});C(x(Sb),{cursor:"wait"});C(x(nb)+na+x(nb)+" *",{cursor:Va(l||m)},true)}if(a(Za)){C(A+x(z),{width:"100%",height:Tb});k(O).bind(pc,qc)}g.hint&&i.attr("title",g.hint);g.indicator&&b.append(Ra("x"));p&&g.indicator&&b.append(Ra("y"));g.monitor&&b.append(sc=k(V(sa),{"class":tc}))&&C(A+x(tc),{position:Pa,left:0,top:0})},preload:function(){function c(r,v){setTimeout(function(){!bc(d)&&v.attr({src:ub(r)})},(m-l.length)*2)}var d=h.parent(),b=a(aa),i=!b.length,p=n.preload[g.preload]||n.preload[n.def.preload],
l=i?[a(Hb)]:p(b.slice(0),g,a),m=l.length;e(da,i?0.5:0);b=a(bb).empty();i=[];d.addClass(Sb);e($,a($)||k("<"+$+' type="text/css">'+C.rules.join("\n")+"</"+$+">").prependTo(Ub));e(Ma,true);h.trigger("stop");g.responsive&&Vb();for(h.trigger("resize",true);l.length;){p=n.substitute(g.path+l.shift(),a);var q=k(V(Ya)).appendTo(b);q.bind("load error abort",function(r){r.type!="load"&&h.trigger(r.type);return!bc(d)&&h.trigger("preloaded")&&false});c(p,q);i.push(p)}e(ic,i);e(Ia,false)},preloaded:function(){var c=
a(aa).length||1,d=e(da,Fa(a(da)+1,c));d===1&&h.trigger("frameChange",[s,a(J)]);if(d===c){h.parent().removeClass(Sb);h.trigger("loaded")}},loaded:function(){a(aa).length>1||h.css({backgroundImage:Da(n.substitute(g.path+a(Hb),a))}).attr({src:Va(uc)});a(W)&&h.attr({src:Va(uc)});a(Lb)||e(ma,g.velocity||0);e(Ma,false);pa=true},prepare:function(){h.css("display",Pb).parent().one(kb,ia)},opening:function(){if(!g.opening)return h.trigger("openingDone");e(fa,true);e(Wb,!a(ua));var c=g.entry||g.speed,d=a(B),
b=g.opening;e(B,d-c*b);e(xa,la(b*Y(ga)))},openingDone:function(){function c(b){return h.trigger("orient",[xb(b).alpha,xb(b).beta,xb(b).gamma,b])&&b.give}e(Sa,false);e(fa,false);var d=ob+x(fa);ha.unbind(d,I.pool[d]);Qa&&g.orientable&&k(O).bind(Rc,c);if(g.delay>0)Qb=setTimeout(function(){h.trigger("play")},g.delay*1E3);else h.trigger("play")},play:function(c,d){d=d?e(ua,d):a(ua)*Ga(1,a(M));(c=g.duration)&&e(jb,la(c*Y(ga)));e(M,d<0);d=e(Sa,!!d);e(Wb,!d);za()},reach:function(c,d,b){if(d!=a(J)){c=a(P);
e(R,la(d/c));var i=e(cb,a(J));d=e(La,d);d=e(db,n.math.distance(i,d,c));b=H(b||a(ua))*Ga(1,d<0);h.trigger("play",b)}},pause:function(){w()},stop:function(){var c=e(Wb,true);e(Sa,!c)},down:function(c,d,b,i){function p(q){return h.trigger("pan",[Wa(q).clientX,Wa(q).clientY,q])&&q.give}function l(q){return h.trigger("up",[q])&&q.give}if(!(i&&i.button!=Sc&&!g.clickfree))if(g.draggable){e(ea,a(J));c=g.clickfree;e(ma,0);var m=c?a(Ka):oa;pb=qb(a(Ja),d,b);Qa||i&&i.preventDefault();w();lb();G=0;k(Ab,oa).addClass(nb);
m.bind(Tc+A+Uc,p).bind(Vc+A+Wc,l).bind(c?Xc:Yc,l)}},up:function(){e(ea,false);e(Na,false);var c=g.throwable,d=H(Ta[0]+Ta[1])/60;N=e(ma,!c?0:c===true?d:Fa(c,d))?1:0;w();lb();k(Ab,oa).removeClass(nb);(g.clickfree?a(Ka):oa).unbind(ja)},pan:function(c,d,b,i){if(g.draggable&&Ua){Ua=false;w();c=g.rows;var p=g.orbital,l=Qa&&!a(Na)&&c<=1&&!p&&g.scrollable,m={x:d-pb.x,y:b-pb.y},q={x:H(m.x),y:H(m.y)};if(i&&l&&q.x<q.y)return i.give=true;if(q.x>0||q.y>0){i&&(i.give=false);G=wb(q.x,q.y);pb={x:d,y:b};i=a(Ja);l=
a(fb);q=a(va);if(!a(kc)){var r=e(B,vc(q?b-l.y:d-l.x,a(gb),i,a(hb),a(ib),a(wa),q?b-l.y:d-l.x));e(Na,a(Na)||a(J)!=a(ea));(m=wc(q?m.y:m.x||0))&&e(M,m<0)}if(p&&a(Mb)){e(va,H(b-l.y)>H(d-l.x));l=qb(i,d,b)}if(c>1&&!a(jc)){c=a(Fb);p=a(Kb);m=-p*c;e(ta,n.math.envelope(b-l.y,p,c,m,m+c,-1))}!(r%1)&&!g.loops&&qb(i,d,b)}}},wheel:function(c,d,b){if(d){rb=true;c=la(qa.sqrt(H(d))/2);c=Ga(c,d>0);d=0.0833*a(Ja);qb(d);c&&e(M,c<0);e(ma,0);e(B,vc(c,a(gb),d,a(hb),a(ib),a(wa)));b&&b.preventDefault();b&&(b.give=false);w();
h.trigger("up",[b])}},orient:function(c,d){if(!(!Ua||S)){xc=true;c=d/360;fraction=e(B,+(g.stitched||g.cw?1-c:c).toFixed(2));Ua=false}},fractionChange:function(c,d,b){if(d===s){c=1+sb(b/a(eb));d=g.rows>1;b=g.orbital;e(Mb,!!b&&(c<=b||c>=a(ra)-b+2));if(d)c+=(a(R)-1)*a(P);e(J,c)}},tierChange:function(c,d,b){if(d===s){c=e(R,T(Xb(b,1,g.rows)));d=a(P);b=a(J)%d||d;e(J,b+c*d-d)}},rowChange:function(c,d,b){d===s&&Yb(ta,s,b,g.rows)},frameChange:function(c,d,b){if(d===s){this.className=this.className.replace(n.re.frame_klass,
hc+b);c=a(P);d=g.rows;var i=g.path,p=b%c||c,l=((b-p)/c+1-1)/(d-1),m=a(R);!d?a(ta):Yb(ta,l,m,d);var q=Yb(B,s,p,c),r=a(ra);if(g.orbital&&a(va)){b=g.inversed?r+1-b:b;b+=r}var v=a(W);c=a(aa);if(!c.length||v){p=a($a);var E=a(D);l=a(L);if(v){b=e(ab,T(Xb(q,0,a(Gb)))%v);d=d<=1?0:(l+p)*(d-m);b=[y(-b),y(-d)];c=c.length>1&&c[m-1];d=n.substitute(i+c,a);c&&h.css("backgroundImage").search(d)<0&&h.css({backgroundImage:Da(d)})}else{i=g.horizontal;m=b%r-1;m=m<0?r-1:m;b=sb((b-0.1)/r);b+=d>1?0:a(M)?0:!g.directional?
0:a(Jb);b=b*((i?l:E)+p);d=m*((i?E:l)+p);b=c.length?[0,0]:i?[y(-d),y(-b)]:[y(-b),y(-d)]}h.css({backgroundPosition:b.join(A)})}else{a(Za)&&Vb();a(da)&&h.attr({src:ub(n.substitute(i+c[b-1],a))})}}},"frameChange.reach":function(c,d,b){if(!(!a(La)||d!==s)){c=n.math.distance(a(cb),b,a(P));if(H(c)>=H(a(db))){e(J,e(La));e(La,e(db,e(cb,0)));h.trigger("stop")}}},"imageChange imagesChange":function(){h.trigger("preload")},"fractionChange.indicator":function(c,d,b){if(g.indicator&&d===s){c=g.indicator;var i=
g.orbital;d=i&&a(va)?a(L):a(D);i=i?a(ra):g.images.length||a(P);i=la(d/i);d-=i;b=T(Xb(b,0,d));b=!g.cw||a(W)?b:d-b;Ra.$x.css(a(va)?{left:0,top:y(b),bottom:Tb,width:c,height:i}:{bottom:0,left:y(b),top:Tb,width:i,height:c})}},"tierChange.indicator":function(c,d,b){if(g.rows>1&&g.indicator&&d===s){var i=a(L);c=g.indicator;d=la(i/g.rows);i-=d;b=T(b*i);Ra.$y.css({left:0,top:b,width:c,height:d})}},"setup.annotations":function(){var c=h.parent();k.each(a(Oa),function(d,b){var i=typeof b.node==yb?k(b.node):
b.node||{};i=i.jquery?i:k(V(sa),i);i=i.attr({id:d}).addClass(dc);var p=b.image?k(V(Ya),b.image):k(),l=b.link?k(V("a"),b.link).click(function(){h.trigger("up.annotations",{target:l})}):k();C(Ba(d),{display:mb,position:Pa},true);b.image||b.link&&i.append(l);b.link||b.image&&i.append(p);b.link&&b.image&&i.append(l.append(p));i.appendTo(c)})},"prepare.annotations":function(){k.each(a(Oa),function(c){k(Ba(c)).hide()})},"frameChange.annotations":function(c,d){if(!(!a(da)||d!==s)){var b=a(D),i=a(W),p=a(ab);
k.each(a(Oa),function(l,m){l=k(Ba(l));var q=m.start||1,r=m.end,v=v||a(J),E=v-1,ba=m.at?m.at[E]=="+":false;E=m.at?E:E-q+1;v=typeof m.x!=vb?m.x:m.x[E];var ca=typeof m.y!=vb?m.y:m.y[E];m=v!==s&&ca!==s&&(m.at?ba:E>=0&&(!r||E<=r-q));if(i){q=v>i-b&&p>=0&&p<b;v=!(v<b&&p>i-b)?v:v+i;v=!q?v:v-i;v-=p}if(a(Za)){q=a(Nb);v=v&&v*q;ca=ca&&ca*q}v={display:m?Pb:mb,left:y(v),top:y(ca)};l.css(v)})}},"up.annotations":function(c,d){if(!(G>10||rb)){c=k(d.target);(c.is("a")?c:c.parents("a")).attr("href")&&(G=10)}},"up.steppable":function(){G||
rb||h.trigger(a(fb).x-h.offset().left>0.5*a(D)?"stepRight":"stepLeft")},"stepLeft stepRight":function(){w()},stepLeft:function(){e(M,false);e(B,a(B)-a(eb)*a(wa))},stepRight:function(){e(M,true);e(B,a(B)+a(eb)*a(wa))},stepUp:function(){e(R,a(R)-1)},stepDown:function(){e(R,a(R)+1)},resize:function(c,d){if(!(a(Ma)&&!d)){var b=a(W),i=a($a);c=a(L);var p=!a(aa).length||b,l=g.rows||1;b=a(aa).length?!b?s:y(b)+A+y(c):b&&y(b)+A+y((c+i)*l-i)||y((a(D)+i)*a(ra)-i)+A+y((c+i)*a(Jb)*l*(g.directional?2:1)-i);h.css({height:p?
y(c):null,backgroundSize:b||null});d||h.trigger("imagesChange")}},"setup.fu":function(){e(J,g.frame+(a(R)-1)*a(P));h.trigger("preload")},"wheel.fu":function(){rb=false},"clean.fu":function(){h.trigger("teardown")},"loaded.fu":function(){h.trigger("opening")}},pool:{"tick.reel.preload":function(){if(!(!(pa||a(Ma))||a(Ia))){var c=a(D),d=Zc(ya.$.css(D)),b=a(aa).length||1,i=T(1/b*a(da)*c);ya.$.css({width:d+(i-d)/3+1});if(a(da)===b&&d>c-1){pa=false;ya.$.fadeOut(300,function(){ya.$.css({opacity:1,width:0})})}}},
"tick.reel":function(c){if(!a(Ia)){var d=a(ma),b=Y(ga),i=g.monitor;if(!(!n.intense&&$c())){if(N){d=d-a(mc)/b*N;d=e(ma,d>0.1?d:(N=S=0))}i&&sc.text(a(i));d&&N++;S&&S++;wc(0);Ua=true;if(S&&!d)return U(c);if(a(ea))return U(c,w());if(!(a(xa)>0)){if(!g.loops&&g.rebound){!S&&!(a(B)%1)?Zb++:(Zb=0);Zb>=g.rebound*1E3/b&&e(M,!a(M))}c=a(wa)*Ga(1,a(M));b=a(jb);d=(!a(Sa)||xc||!b?d:H(a(ua))+d)/Y(ga);e(B,a(B)-d*c);b=!g.duration?b:b>0&&e(jb,b-1);!b&&a(Sa)&&h.trigger("stop")}}}},"tick.reel.opening":function(){if(a(fa)){var c=
(g.entry||g.speed)/Y(ga)*(g.cw?-1:1),d=e(xa,a(xa)-1);e(B,a(B)+c);d||h.trigger("openingDone")}}}},pa=false,U=function(c,d){return c.stopImmediatePropagation()||d},ia=function(){h.trigger("setup")},S,N=0,za=function(){return S=0},w=function(){clearTimeout(Qb);ha.unbind(ob+x(fa),I.pool[ob+x(fa)]);e(xa,0);e(Lb,true);return S=-g.timeout*Y(ga)},G=0,rb=false,xc=false,sc=k(),ya=function(){C(A+x(yc),{position:Pa,left:0,bottom:0,height:g.preloader,overflow:Ob,backgroundColor:"#000"});return ya.$=k(V(sa),{"class":yc})},
Ra=function(c){C(A+x(zc)+x(c),{position:Pa,width:0,height:0,overflow:Ob,backgroundColor:"#000"});return Ra["$"+c]=k(V(sa),{"class":zc+A+c})},C=function(c,d,b){function i(p){var l=[];k.each(p,function(m,q){l.push(m.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+y(q)+";")});return"{"+l.join(Q)+"}"}b=b?Q:a(lc);c=c.replace(/^/,b).replace(na,na+b);return C.rules.push(c+i(d))&&d},$c=function(){var c=a(L),d=a(D),b=h[0].getBoundingClientRect();return b.top<-c||b.left<-d||b.right>d+k(O).width()||b.bottom>c+k(O).height()},
Zb=0,pb={x:0,y:0},wc=function(c){return Ta.push(c)&&Ta.shift()&&c},lb=function(){return Ta=[0,0]},Ta=lb(),vc=g.graph||n.math[g.loops?"hatch":"envelope"],qc=function(){clearTimeout(Rb);Rb=setTimeout(Vb,n.resize_gauge)},Vb=function(){if(h.width()!=a(D)){var c=a(fc),d=e(Nb,h.width()/c.width);k.each(c,function(b,i){e(b,T(i*d))});h.trigger("resize")}},Qb,Rb,qb=function(c,d,b){var i=e(gb,a(B));e(Kb,a(ta));var p=g.loops;e(hb,p?0:-i*c);e(ib,p?c:c-i*c);return d!==s&&e(fb,{x:d,y:b})||s},Ua=true,Yb=function(c,
d,b,i){if(i){var p=a(c)||0;b=d!==s?d:(b-1)/(i-1);b=c!=B?b:Fa(b,0.9999);return d=+H(p-b).toFixed(8)>=+(1/(i-1)).toFixed(8)?e(c,b):d||p}},oa=ha;try{if(ha[0]!=top.document)oa=ha.add(top.document)}catch(dd){}top===self?k():function(c){k("iframe",oa.last()).each(function(){try{if(k(this).contents().find(Ub).html()==k(Ub).html())return(c=k(this))&&false}catch(d){}});return c}();C.rules=[];I.setup()});tb=tb||function h(){var e=+new Date,a=Y(ga);if(!a)return tb=null;ha.trigger(ob);n.cost=(+new Date+n.cost-
e)/2;return tb=setTimeout(h,wb(4,1E3/a-n.cost))}();return k(K)}else if(typeof u=="string")if(f.length==1)return o[u];else{if(t!==s){n.normal[u]&&(t=n.normal[u](t,o));if(o[u]===s)o[u]=t;else if(o[u]!==t)j.trigger(u+"Change",[s,o[u]=t])}return j}},unreel:function(){return this.trigger("teardown")}},re:{image:/^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,ua:[/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i,/(webkit)\/([\d.]+)/i,/(mozilla)\/([\d.]+)/i],array:/ *, */,lazy_agent:/\(iphone|ipod|android|fennec|blackberry/i,
frame_klass:/frame-\d+/,substitution:/(@([A-Z]))/g,no_match:/^(undefined|)$/,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.net/",math:{envelope:function(f,j,o,u,t,g){return j+Ea(u,t,-f*g)/o},hatch:function(f,j,o,u,t,g){f=(f<u?t:0)+f%t;f=j+-f*g/o;return f-sb(f)},interpolate:function(f,j,o){return j+f*(o-j)},distance:function(f,j,o){var u=o/2;f=j-f;return f<-u?f+o:f>u?f-o:f}},preload:{fidelity:function(f,j,o){function u(e,a,I){function pa(G){for(;!(G>=
1&&G<=N);)G+=G<1?+N:-N;return h[I+G]||(h[I+G]=!!U.push(G))}if(!e.length)return[];var U=[],ia=4*a,S=j.frame,N=e.length;a=true;for(var za=N/ia,w=0;w<ia;w++)pa(S+T(w*za));for(;za>1;){w=0;ia=U.length;za/=2;for(a=!a;w<ia;w++)pa(U[w]+(a?1:-1)*T(za))}for(w=0;w<=N;w++)pa(w);for(w=0;w<U.length;w++)U[w]=e[U[w]-1];return U}var t=j.orbital,g=t?2:j.rows||1,K=t?o(ra):o(P);o=(j.row-1)*K;t=[].concat(f);var h=new Array(f.length+1);f=g<2?[]:t.slice(o,o+K);return u(f,1,o).concat(u(t,g,0))},linear:function(f){return f}},
substitute:function(f,j){return f.replace(n.re.substitution,function(o,u,t){return typeof n.substitutes[t]=="function"?n.substitutes[t](j):Ac[t]?j(Ac[t]):u})},substitutes:{T:function(){return+new Date}},normal:{fraction:function(f,j){if(f===null)return f;return j[Ha].loops?f-sb(f):Ea(0,1,f)},tier:function(f){if(f===null)return f;return Ea(0,1,f)},row:function(f,j){if(f===null)return f;return T(Ea(1,j[Ha].rows,f))},frame:function(f,j){if(f===null)return f;var o=j[Ha];j=j[P]*(o.orbital?2:o.rows||1);
f=T(o.loops?f%j||j:Ea(1,j,f));return f<0?f+j:f},images:function(f,j){var o=n.re.sequence.exec(f);return!o?f:n.sequence(o,j[Ha])}},sequence:function(f,j){if(f.length<=1)return j.images;var o=[],u=j.orbital,t=f[1],g=f[2],K=f[4];K=n.re.no_match.test(K+Q)?1:+K;var h=u?2:j.rows||1;j=u?j.footage:j.stitched?1:j.frames;h=+(f[5]||h*j)-K;f=+f[7]||1;for(j=0;j<=h;){o.push(t.replace(g,Xa(K+j+Q,g.length,"0")));j+=f}return o},instances:k(),leader:Y,resize_gauge:300,cost:0},ha=k(X);X=navigator.userAgent;var Aa=n.re.ua[0].exec(X)||
n.re.ua[1].exec(X)||n.re.ua[2].exec(X);Z=+Aa[2].split(".").slice(0,2).join(".");Aa=Aa[1]=="MSIE";var ad=!(Aa&&Z<8),Fc=!(Aa&&Z<9),tb,z="reel",Bb=z+"-overlay",Ib=z+"-cache",zc=z+"-indicator",yc=z+"-preloader",tc=z+"-monitor",dc=z+"-annotation",nb=z+"-panning",Sb=z+"-loading",hc="frame-",qa=Math,T=qa.round,sb=qa.floor,la=qa.ceil,Fa=qa.min,wb=qa.max,H=qa.abs,Zc=parseInt,Xb=n.math.interpolate,Oa="annotations",Ka="area",Tb="auto",nc="backup",M="backwards",eb="bit",mc="brake",bb="cache",ic=bb+"d",Mb="center",
ec="class",kb="click",ea=kb+"ed",fb=ea+"_location",gb=ea+"_on",Kb=ea+"_tier",wa="cwish",cb="departure",La="destination",db="distance",ra="footage",B="fraction",J="frame",kc="framelock",P="frames",L="height",ib="hi",Ob="hidden",Hb="image",aa="images",Ma="loading",fa="opening",xa=fa+"_ticks",hb="lo",Ha="options",Sa="playing",da="preloaded",Nb="ratio",Na="reeling",Lb="reeled",Za="responsive",Ja="revolution",Fb="revolution_y",R="row",jc="rowlock",Jb="rows",Ia="shy",$a="spacing",ua="speed",Cb="src",lc=
"stage",W="stitched",ab=W+"_shift",Gb=W+"_travel",Wb="stopped",$="style",ga="tempo",jb="ticks",ta="tier",fc="truescale",ma="velocity",va="vertical",D="width",F=x(z),ja=x("pan")+F,Nc="dragstart"+F,Lc="mousedown"+F,Kc="mouseenter"+F,Xc="mouseleave"+ja,Uc="mousemove"+ja,Yc="mouseup"+ja,Mc="mousewheel"+F,ob="tick"+F,Wc="touchcancel"+ja,Vc="touchend"+ja,Jc="touchstart"+F,Tc="touchmove"+ja,Rc="deviceorientation"+F,pc="resize"+F,Q="",A=" ",na=",",Pa="absolute",Pb="block",Ca="@CDN@",sa="div",rc="hand",Ub=
"head",Ab="html",ka="id",Ya="img",$b="jquery."+z,mb="none",vb="object",yb="string",Ic=[D,L,$a,Ja,Fb,W,ab,Gb],Ac={W:D,H:L},uc=ad?Dc("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):Ca+"blank.gif",Pc=Da(Ca+$b+".cur")+na+"move",Oc=Da(Ca+$b+"-drag.cur")+na+"move",Qc=Da(Ca+$b+"-drag-down.cur")+na+"move",Qa=n.touchy="ontouchstart"in O||!!navigator.msMaxTouchPoints;n.lazy=n.re.lazy_agent.test(X);var Sc=Qa?s:Aa&&Z<9?1:0,bd=k.cleanData;k.cleanData=function(f){k(f).each(function(){k(this).triggerHandler("clean")});
return bd.apply(this,arguments)};k.extend(k.fn,n.fn)&&k(n.scan);return n}}}(jQuery,window,document)});
