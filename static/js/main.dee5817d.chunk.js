(this.webpackJsonpmusiclyrics=this.webpackJsonpmusiclyrics||[]).push([[0],{52:function(e,t,a){e.exports=a(81)},57:function(e,t,a){},59:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),s=a.n(i),r=(a(57),a(24)),l=a.n(r),m=a(32),o=a(27),u=a(33),d=a(25),p=(a(59),a(113)),f=a(114),h=a(34),v=a.n(h),y=function(){var e=Object(n.useState)({artistname:"",musicTitle:""}),t=Object(d.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),h=r[0],y=r[1],E=Object(n.useState)(""),b=Object(d.a)(E,2),g=b[0],j=b[1],N=Object(n.useState)(!1),O=Object(d.a)(N,2),w=(O[0],O[1],function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},a,n))}))});function M(){return(M=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.lyrics.ovh/v1/".concat(a.artistname,"/").concat(a.musicTitle)).then((function(e){console.log(e),y(e.data.lyrics)})).catch((function(e){console.log(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c3a01ce6fbd4b8aa86a5686356fe86ec&artist=".concat(a.artistname,"&album=").concat(a.musicTitle,"&format=json")).then((function(e){console.log(e),j(e.data.album.image[3])})).catch((function(e){console.log(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("div",{className:"parentDiv"},c.a.createElement("div",{className:"searchFormMainDiv",id:"searchFormMainDiv"},c.a.createElement("div",{className:"formTitle"},"Search the lyrics of you'r favourive music"),c.a.createElement("div",{className:"inputField"},c.a.createElement(p.a,{name:"artistname",value:a.artistname,id:"standard-password-input",onChange:w,label:"Artist Name",type:"text",autoComplete:"current-artistname",style:{width:"90%",margin:"10px"}}),c.a.createElement(p.a,{name:"musicTitle",value:a.musicTitle,id:"standard-password-input",onChange:w,label:"Music Title",type:"text",autoComplete:"current-title",style:{width:"90%",margin:"10px"}})),c.a.createElement("div",{className:"submitBtn"},c.a.createElement(f.a,{variant:"contained",style:{width:"100%"},onClick:function(e){document.getElementById("searchFormMainDiv").style.display="none",document.getElementById("displayLyricsMain").style.display="block",e.preventDefault(),function(){M.apply(this,arguments)}(),function(){x.apply(this,arguments)}()}},"Search Lyrics"))),c.a.createElement("div",{className:"displayLyricsMain",id:"displayLyricsMain"},c.a.createElement("div",{className:"lyricsMain"},c.a.createElement("div",{class:"cardImg"},c.a.createElement("div",{className:"ImageOfMusic"},g["#text"]?c.a.createElement("img",{src:g["#text"],style:{width:"80%",height:"80%"}}):c.a.createElement("h1",null,"Can't find the song art")),c.a.createElement("div",{className:"musicInfo"},"Artist Name :- ".concat(a.artistname),c.a.createElement("br",null),"Music Title :- ".concat(a.musicTitle))),c.a.createElement("div",{className:"musicLyrics"},h||c.a.createElement("h1",null,"Can't find the lyrics of the song ",c.a.createElement("br",null),c.a.createElement("a",{href:"/"},"Back To Home Page"))))))},E=(a(80),function(){return c.a.createElement("div",{className:"homePageMainDiv"},c.a.createElement(y,null))}),b=function(){return c.a.createElement("div",{className:"appMainDiv"},c.a.createElement(E,null))};s.a.render(c.a.createElement("div",null,c.a.createElement(b,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.dee5817d.chunk.js.map