(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,o){"use strict";o.r(t);var n=o(2),a=o.n(n),c=o(57),r=o.n(c),s=(o(65),o(59)),l=o(58),i=o(15),d=o(16),u=o(18),m=o(17),h=o(19),p=(o(66),function(e){var t=e.form,o=e.palette,n=e.children;return a.a.createElement("main",{className:"list-component"},a.a.createElement("div",{className:"title"},"To Do List"),a.a.createElement("section",{className:"palette-wrapper"},o),a.a.createElement("section",{className:"form-wrapper"},t),a.a.createElement("section",{className:"todos-wrapper"},n))}),v=(o(67),function(e){var t=e.value,o=e.onChange,n=e.onCreate,c=e.onKeyPress,r=e.color;return a.a.createElement("div",{className:"form"},a.a.createElement("input",{value:t,onChange:o,onKeyPress:c,style:{color:r}}),a.a.createElement("div",{className:"create-button",onClick:n},"\ucd94\uac00"))}),f=(o(68),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.checked!==e.checked}},{key:"render",value:function(){var e=this.props,t=e.text,o=e.checked,n=e.id,c=e.color,r=e.onToggle,s=e.onRemove;return a.a.createElement("div",{className:"todo-item",onClick:function(){return r(n)}},a.a.createElement("div",{className:"remove",onClick:function(e){e.stopPropagation(),s(n)}},"\xd7"),a.a.createElement("div",{className:"todo-text ".concat(o&&"checked"),style:{color:c}},a.a.createElement("div",null,t)),o&&a.a.createElement("div",{className:"check-mark"},"\u2713"))}}]),t}(n.Component)),g=(o(69),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props,t=e.todos,o=e.onToggle,n=e.onRemove,c=t.map(function(e){var t=e.id,c=e.text,r=e.checked,s=e.color;return a.a.createElement(f,{id:t,text:c,checked:r,color:s,onToggle:o,onRemove:n,key:t})});return a.a.createElement("div",null,c)}}]),t}(n.Component)),k=(o(70),function(e){var t=e.color,o=e.active,n=e.onClick;return a.a.createElement("div",{className:"color ".concat(o&&"active"),style:{background:t},onClick:n})}),b=function(e){var t=e.colors,o=e.selected,n=e.onSelect,c=t.map(function(e){return a.a.createElement(k,{color:e,active:o===e,onClick:function(){return n(e)},key:e})});return a.a.createElement("div",{className:"palette"},c)},y=o(30),E=o.n(y),C=["#343a40","#f03e3e","#12b886","#228ae6"],T={apiKey:"AIzaSyDHO5e_paBM4vUHzvpm402nmZioUZ49cfA",authDomain:"todo-list-e3734.firebaseapp.com",databaseURL:"https://todo-list-e3734.firebaseio.com",projectId:"todo-list-e3734",storageBucket:"todo-list-e3734.appspot.com",messagingSenderId:"120737067435"},j=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).id=0,o.state={input:"",color:"#343a40",todos:[]},o.handleChange=function(e){o.setState({input:e.target.value})},o.handleCreate=function(){var e=o.state,t=e.input,n=e.todos,a=e.color;if(""!==t){var c=n.concat({id:o.id++,text:t,color:a,checked:!1});o.setState({input:"",todos:c}),o.saveTodosToLocalstorage(c)}},o.handleKeyPress=function(e){"Enter"===e.key&&o.handleCreate()},o.handleToggle=function(e){var t=o.state.todos,n=t.findIndex(function(t){return t.id===e}),a=t[n],c=Object(l.a)(t);c[n]=Object(s.a)({},a,{checked:!a.checked}),o.setState({todos:c}),o.saveTodosToLocalstorage(c)},o.handleRemove=function(e){var t=o.state.todos.filter(function(t){return t.id!==e});o.setState({todos:t}),o.saveTodosToLocalstorage(t)},o.handleSelectColor=function(e){o.setState({color:e})},o.saveTodosToLocalstorage=function(e){E.a.database().ref().update({todos:e})},o.setTodosState=function(e){null!==e&&o.setState({todos:e})},o.loadTodosFromLocalstorage=function(){E.a.database().ref("/todos").once("value").then(function(e){var t=e.val();o.setTodosState(t)})},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){E.a.initializeApp(T),this.loadTodosFromLocalstorage()}},{key:"render",value:function(){var e=this.state,t=e.input,o=e.todos,n=e.color,c=this.handleChange,r=this.handleCreate,s=this.handleKeyPress,l=this.handleToggle,i=this.handleRemove,d=this.handleSelectColor;return a.a.createElement(p,{form:a.a.createElement(v,{value:t,onKeyPress:s,onChange:c,onCreate:r,color:n}),palette:a.a.createElement(b,{colors:C,selected:n,onSelect:d})},a.a.createElement(g,{todos:o,onToggle:l,onRemove:i}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,o){e.exports=o(123)},65:function(e,t,o){},66:function(e,t,o){},67:function(e,t,o){},68:function(e,t,o){},69:function(e,t,o){},70:function(e,t,o){}},[[60,1,2]]]);
//# sourceMappingURL=main.903f5255.chunk.js.map