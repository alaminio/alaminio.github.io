(this.webpackJsonpmetube=this.webpackJsonpmetube||[]).push([[0],{29:function(e,a,t){e.exports=t(59)},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),s=t(7),i=t(9),o=t(25),u={prevPageToken:null,nextPageToken:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"CHANGE_PAGINATION":return n;default:return e}},p=Object(i.c)({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"favourites",a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"UPDATE_QUERY":return n;default:return e}},songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SEARCH_SONG":return n;default:return e}},play:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"PLAY_SONG":return n;default:return e}},pagination:m}),d=Object(i.d)(Object(i.a)(o.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=Object(i.e)(p,d),f=t(1),v=t(2),b=t(4),E=t(3),g=t(5),y=t(28),N=t(26),O=t.n(N).a.create({baseURL:"https://www.googleapis.com/youtube/v3"});O.interceptors.request.use((function(e){return e.params=Object(y.a)({part:"snippet",maxResults:10,key:"AIzaSyCzJ3rS9ATMHTC0suSCA8G0fk0cZ7yWKec"},e.params),e}));var j=O,P=function(e){return{type:"CHANGE_PAGINATION",payload:e}},k=function(e){return{type:"SEARCH_SONG",payload:e}},T=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(t){var n={params:{q:e}};a&&(n.params.pageToken=a),j.get("/search",n).then((function(e){t(k(e.data.items));var a={prevPageToken:null,nextPageToken:null};e.data.prevPageToken&&(a.prevPageToken=e.data.prevPageToken),e.data.nextPageToken&&(a.nextPageToken=e.data.nextPageToken),t(P(a))}))}},C=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={searchQuery:""},t.search=function(e){t.setState({searchQuery:e.target.value})},t.submit=function(e){e.preventDefault(),t.props.searchSong(t.state.searchQuery),t.props.searchYoutube(t.state.searchQuery)},t}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header",id:"Header"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",value:this.state.searchQuery,onChange:this.search})),r.a.createElement("div",{className:"control"},r.a.createElement("a",{href:"/",className:"button is-info",onClick:this.submit},"Search")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,"m3tube\xa0\xa0"),r.a.createElement("li",{className:"github"},r.a.createElement("a",{target:"_blank",href:"https://github.com/m3alamin/m3tube",title:"View Code On Github",rel:"noopener noreferrer"},r.a.createElement("i",{className:"far fa-eye"})," ",r.a.createElement("i",{className:"fas fa-code"})," ","On",r.a.createElement("i",{className:"fab fa-github"})))))))}}]),a}(n.Component),w=Object(s.b)((function(e){return{q:e.query}}),(function(e){return{searchSong:function(a){return e(function(e){return{type:"UPDATE_QUERY",payload:e}}(a))},searchYoutube:function(a){return e(T(a))}}}))(C),S=function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer",id:"Footer"},r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},"Made with ",r.a.createElement("i",{className:"fas fa-heart"})," by MD AL AMIN"),r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"is-pulled-right"},"Powerd by youtube API v3"))))))}}]),a}(n.Component),A=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={hidePlayer:!1,stopPlayer:!1,clearVideo:!1},t.togglePlayer=function(e){e.preventDefault(),t.setState({hidePlayer:!t.state.hidePlayer})},t.stopPlayer=function(e){e.preventDefault(),t.setState({stopPlayer:!0})},t.showClearVideo=function(e){e.preventDefault(),t.setState({clearVideo:!t.state.clearVideo})},t.getSnapshotBeforeUpdate=function(e,a){return e.play!==t.props.play},t.componentDidUpdate=function(e,a,n){n&&t.setState({stopPlayer:!1})},t}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){if(!this.props.play||this.state.stopPlayer)return r.a.createElement("div",null,"\xa0");var e="";this.state.hidePlayer&&(e="hide"),this.state.clearVideo&&(e+=" opacity1");var a="https://www.youtube.com/embed/".concat(this.props.play);return r.a.createElement("div",{className:"Player",id:"Player"},r.a.createElement("div",{className:"card"},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title"},"Playing: ",a)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{id:"video-placeholder",className:e},r.a.createElement("iframe",{title:"m3tube",width:"640",height:"360",src:a,frameBorder:"0",allowFullScreen:!0})))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("a",{href:"/",className:"card-footer-item",onClick:this.togglePlayer},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-toggle-on","aria-hidden":"true"}))),r.a.createElement("a",{href:"/",className:"card-footer-item",onClick:this.showClearVideo},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-cloud","aria-hidden":"true"}))),r.a.createElement("a",{href:"/",className:"card-footer-item",onClick:this.stopPlayer},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-stop","aria-hidden":"true"}))))))}}]),a}(n.Component),_=Object(s.b)((function(e){return{play:e.play}}))(A),x=t(27),D=t.n(x),V=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).playThisSong=function(e){e.preventDefault(),t.props.playVideo(t.props.song.id.videoId)},t}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=D()(this.props.song.snippet.publishedAt).fromNow();return r.a.createElement("div",{className:"Song",id:"Song"},r.a.createElement("div",{className:"box"},r.a.createElement("article",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:this.props.song.snippet.thumbnails.default.url,alt:this.props.song.snippet.title}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,r.a.createElement("strong",null,e),"\xa0",r.a.createElement("small",null,this.props.song.snippet.channelTitle),r.a.createElement("br",null),this.props.song.snippet.title)),r.a.createElement("nav",{className:"level is-mobile"},r.a.createElement("div",{className:"level-left"},r.a.createElement("a",{href:"/",className:"level-item","aria-label":"reply",onClick:this.playThisSong},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-play","aria-hidden":"true"})))))))))}}]),a}(n.Component),q=Object(s.b)(null,(function(e){return{playVideo:function(a){e(function(e){return{type:"PLAY_SONG",payload:e}}(a))}}}))(V),I=function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("a",{href:"/",className:"pagination-previous",onClick:this.props.onClick},"Previous")}}]),a}(n.Component),U=function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("a",{href:"/",className:"pagination-next",onClick:this.props.onClick},"Next page")}}]),a}(n.Component),G=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).changeToNextPage=function(e){e.preventDefault(),t.props.searchYoutube(t.props.query,t.props.pagination.nextPageToken)},t.changeToPrevPage=function(e){e.preventDefault(),t.props.searchYoutube(t.props.query,t.props.pagination.prevPageToken)},t}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e="";this.props.pagination.prevPageToken&&(e=r.a.createElement(I,{onClick:this.changeToPrevPage}));var a="";return this.props.pagination.nextPageToken&&(a=r.a.createElement(U,{onClick:this.changeToNextPage})),r.a.createElement("nav",{className:"pagination",role:"navigation","aria-label":"pagination"},e,a)}}]),a}(n.Component),Y=Object(s.b)((function(e){return{pagination:e.pagination,query:e.query}}),(function(e){return{searchYoutube:function(a,t){return e(T(a,t))}}}))(G),R=function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.props.songs.map((function(e,a){return"youtube#video"!==e.id.kind?"":r.a.createElement(q,{song:e,key:a})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"Songs",id:"Songs"},e),r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement("br",null)))}}]),a}(n.Component),Q=Object(s.b)((function(e){return{songs:e.songs}}))(R),H=function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"App"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(_,null),r.a.createElement(Q,null),r.a.createElement(S,null))))}}]),a}(n.Component);t(58);l.a.render(r.a.createElement(s.a,{store:h},r.a.createElement(H,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e314adf1.chunk.js.map