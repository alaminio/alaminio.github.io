(this.webpackJsonpmetube=this.webpackJsonpmetube||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),s=a(7),i=a(9),o=a(25),u=Object(i.c)({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"favourites",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_QUERY":return n;default:return e}},songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SEARCH_SONG":return n;default:return e}},play:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"PLAY_SONG":return n;default:return e}}}),m=Object(i.d)(Object(i.a)(o.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=Object(i.e)(u,m),d=a(2),h=a(3),f=a(5),E=a(4),y=a(6),b=a(28),v=a(26),O=a.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3"});O.interceptors.request.use((function(e){return e.params=Object(b.a)({part:"snippet",maxResults:20,key:"AIzaSyB-CD2qqObMMMCUthOT1bV8bz32XmZ9pmE"},e.params),e}));var N=O,g=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={searchQuery:""},a.search=function(e){a.setState({searchQuery:e.target.value})},a.submit=function(e){e.preventDefault(),a.props.searchSong(a.state.searchQuery),a.props.searchYoutube(a.state.searchQuery)},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header",id:"Header"},r.a.createElement("div",null,r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",value:this.state.searchQuery,onChange:this.search})),r.a.createElement("div",{className:"control"},r.a.createElement("a",{href:"/",className:"button is-info",onClick:this.submit},"Search")))))}}]),t}(n.Component),j=Object(s.b)((function(e){return{q:e.query}}),(function(e){return{searchSong:function(t){return e(function(e){return{type:"UPDATE_QUERY",payload:e}}(t))},searchYoutube:function(t){return e(function(e){return function(t){N.get("/search",{params:{q:e}}).then((function(e){t({type:"SEARCH_SONG",payload:e.data.items})}))}}(t))}}}))(g),S=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer",id:"Footer"},r.a.createElement("div",null,r.a.createElement("p",null,"\xa0")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={hidePlayer:!1,stopPlayer:!1,clearVideo:!1},a.togglePlayer=function(e){e.preventDefault(),a.setState({hidePlayer:!a.state.hidePlayer})},a.stopPlayer=function(e){e.preventDefault(),a.setState({stopPlayer:!0})},a.showClearVideo=function(e){e.preventDefault(),a.setState({clearVideo:!a.state.clearVideo})},a.getSnapshotBeforeUpdate=function(e,t){return e.play!==a.props.play},a.componentDidUpdate=function(e,t,n){n&&a.setState({stopPlayer:!1})},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){if(!this.props.play||this.state.stopPlayer)return r.a.createElement("div",null,"\xa0");var e="";this.state.hidePlayer&&(e="hide"),this.state.clearVideo&&(e+=" opacity1");var t="https://www.youtube.com/embed/".concat(this.props.play);return r.a.createElement("div",{className:"Player",id:"Player"},r.a.createElement("div",{className:"card"},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title"},"Playing: ",t)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{id:"video-placeholder",className:e},r.a.createElement("iframe",{title:"m3tube",width:"640",height:"360",src:t,frameBorder:"0",allowFullScreen:!0})))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("a",{href:"/",className:"card-footer-item",onClick:this.togglePlayer},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-toggle-on","aria-hidden":"true"}))),r.a.createElement("a",{href:"/",className:"card-footer-item",onClick:this.showClearVideo},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-cloud","aria-hidden":"true"}))),r.a.createElement("a",{href:"/",className:"card-footer-item",onClick:this.stopPlayer},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-stop","aria-hidden":"true"}))))))}}]),t}(n.Component),P=Object(s.b)((function(e){return{play:e.play}}))(w),C=a(27),_=a.n(C),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).playThisSong=function(e){e.preventDefault(),a.props.playVideo(a.props.song.id.videoId)},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=_()(this.props.song.snippet.publishedAt).fromNow();return r.a.createElement("div",{className:"Song",id:"Song"},r.a.createElement("div",{className:"box"},r.a.createElement("article",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:this.props.song.snippet.thumbnails.default.url,alt:this.props.song.snippet.title}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,r.a.createElement("strong",null,e),"\xa0",r.a.createElement("small",null,this.props.song.snippet.channelTitle),r.a.createElement("br",null),this.props.song.snippet.title)),r.a.createElement("nav",{className:"level is-mobile"},r.a.createElement("div",{className:"level-left"},r.a.createElement("a",{href:"/",className:"level-item","aria-label":"reply",onClick:this.playThisSong},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-play","aria-hidden":"true"})))))))))}}]),t}(n.Component),A=Object(s.b)(null,(function(e){return{playVideo:function(t){e(function(e){return{type:"PLAY_SONG",payload:e}}(t))}}}))(k),D=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.songs.map((function(e,t){return"youtube#video"!==e.id.kind?"":r.a.createElement(A,{song:e,key:t})}));return r.a.createElement("div",{className:"Songs",id:"Songs"},e)}}]),t}(n.Component),V=Object(s.b)((function(e){return{songs:e.songs}}))(D),T=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"App"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(j,null),r.a.createElement(P,null),r.a.createElement(V,null),r.a.createElement(S,null))))}}]),t}(n.Component);a(58);l.a.render(r.a.createElement(s.a,{store:p},r.a.createElement(T,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c1a36e16.chunk.js.map