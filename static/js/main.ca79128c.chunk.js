(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(200),o={};a.keys().forEach(function(e){e.match(/\.\/index\.js|.*\.test\.js/)||(o[e.replace(/(\.\/|\.js)/g,"")]=a(e).default)}),t.default=o},190:function(e,t,n){e.exports=n(418)},198:function(e,t,n){},200:function(e,t,n){var a={"./Host.js":78,"./Host.test.js":201,"./LoginManager.js":59,"./LoginManager.test.js":202,"./Recorder.js":38,"./Recorder.test.js":203,"./Websocket.js":42,"./Websocket.test.js":204,"./index.js":103};function o(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=200},201:function(e,t,n){"use strict";n.r(t);var a=n(78);describe("Host reducer",function(){it("should retrun inital state",function(){expect(Object(a.default)(void 0,{})).toEqual({hostname:"https://vawsr.mino.tw"})}),it("should handle CHANGE_HOST",function(){expect(Object(a.default)(void 0,{type:"CHANGE_HOST",hostname:"https://test"})).toEqual({hostname:"https://test"})})})},202:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n(59);describe("LoginManager reducer",function(){it("should retrun inital state",function(){expect(Object(o.default)(void 0,{})).toEqual({logined:!1})}),it("should handle LOGIN",function(){var e={fbid:1,email:"test",name:"test",hasivector:!1};expect(Object(o.default)(void 0,Object.assign({type:"LOGIN"},e))).toEqual(Object(a.a)({logined:!0},e))}),it("should handle LOGOUT",function(){expect(Object(o.default)(void 0,{type:"LOGOUT"})).toEqual({logined:!1})})})},203:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n(38);describe("Recorder reducer",function(){var e={test:"test"},t={record:!1,suspended:!1};it("should retrun inital state",function(){expect(Object(o.default)(void 0,{})).toEqual(t)}),it("should handle UPDATE_STREAM",function(){expect(Object(o.default)(void 0,{type:"UPDATE_STREAM",stream:e})).toEqual(Object(a.a)({},t,{stream:e}))}),it("should handle START_RECORD",function(){expect(Object(o.default)(Object(a.a)({stream:e},t),{type:"START_RECORD"})).toEqual(Object(a.a)({},t,{record:!0,stream:e}))}),it("should handle STOP_RECORD",function(){expect(Object(o.default)(Object(a.a)({stream:e},t),{type:"STOP_RECORD"})).toEqual(Object(a.a)({},t,{record:!1,stream:e}))}),it("should handle SUSPEND_VOLUMEMETER",function(){expect(Object(o.default)(void 0,{type:"SUSPEND_VOLUMEMETER"})).toEqual(Object(a.a)({},t,{suspended:!0}))}),it("should handle RESUME_VOLUMEMETER",function(){expect(Object(o.default)(Object(a.a)({},t,{suspended:!0}),{type:"RESUME_VOLUMEMETER"})).toEqual(Object(a.a)({},t))})})},204:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n(42);describe("Websocket reducer",function(){var e={connected:!1,responses:[],google:"",kaldi:""};it("should return the initial state",function(){expect(Object(o.default)(void 0,{})).toEqual(e)}),it("should handle ON_CONNECT",function(){expect(Object(o.default)(void 0,{type:"ON_CONNECT"})).toEqual(Object(a.a)({},e,{connected:!0}))}),it("should handle TRANSCRIPT_GOOGLE",function(){expect(Object(o.default)(void 0,{type:"TRANSCRIPT_GOOGLE",transcript_google:"test"})).toEqual(Object(a.a)({},e,{google:"test"}))}),it("should handle TRANSCRIPT_KALDI",function(){expect(Object(o.default)(void 0,{type:"TRANSCRIPT_KALDI",transcript_kaldi:"test"})).toEqual(Object(a.a)({},e,{kaldi:"test"}))}),it("should handle STOP_STREAM",function(){var t={text:"123",url:"456"},n=Object(a.a)({},e,{responses:[Object(a.a)({google:"",kaldi:"",proba:.8},t)]});expect(Object(o.default)(void 0,Object(a.a)({type:"STOP_STREAM",proba:.8},t))).toEqual(n)})})},229:function(e,t){},38:function(e,t,n){"use strict";n.r(t);var a=n(8);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{record:!1,suspended:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_STREAM":return Object(a.a)({},e,{stream:t.stream});case"START_RECORD":return Object(a.a)({},e,{record:!0});case"STOP_RECORD":return Object(a.a)({},e,{record:!1});case"SUSPEND_VOLUMEMETER":return Object(a.a)({},e,{suspended:!0});case"RESUME_VOLUMEMETER":return Object(a.a)({},e,{suspended:!1});default:return e}}},418:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n.n(r),c=n(23),s=n(22),l=(n(198),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function u(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var d=n(103),p=Object(s.b)(d.default),h=n(15),f=n(16),m=n(18),b=n(17),g=n(19),v=n(28),O=n(29);function E(){var e=Object(v.a)(["\n  background: #fff;\n  border: 1px solid #dcddde;\n  position: absolute;\n  border-radius: 3px;\n  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1),\n    0 3px 3px 0 rgba(0, 0, 0, 0.05);\n  cursor: ew-resize;\n  height: 24px;\n  left: 0px;\n  margin-left: -5px;\n  margin-top: -13px;\n  top: 50%;\n  width: 10px;\n"]);return E=function(){return e},e}function j(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  right: 5px;\n  left: 5px;\n"]);return j=function(){return e},e}function y(){var e=Object(v.a)(["\n  height: 100%;\n  background: rgba(0, 0, 0, 0.25);\n  transition: width 35ms ease;\n"]);return y=function(){return e},e}function w(){var e=Object(v.a)(["\n  border-radius: 4px;\n  display: block;\n  height: 8px;\n  overflow: hidden;\n  position: relative;\n  top: 16px;\n  width: 100%;\n"]);return w=function(){return e},e}function k(){var e=Object(v.a)(["\n  height: 40px;\n  position: relative;\n  width: 100%;\n"]);return k=function(){return e},e}var T=O.a.div(k()),R=O.a.div(w()),x=O.a.div(y()),C=O.a.div(j()),S=O.a.div(E()),M=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=e.threshold,a=e.handleMouse;return o.a.createElement(T,null,o.a.createElement(R,{style:{background:"rgb(105, 196, 154) none repeat scroll 0% 0%"}},o.a.createElement(x,{style:{width:n+"%",background:"rgb(251, 184, 72) none repeat scroll 0% 0%"}})),o.a.createElement(R,{style:{position:"absolute",top:"16px",background:"transparent"}},o.a.createElement(x,{style:{width:t+"%"}})),o.a.createElement(C,{onMouseDown:a},o.a.createElement(S,{onMouseDown:a,style:{left:n+"%"}})))}}]),t}(o.a.Component),_=n(189),N=n(188),L=n(167),A=n.n(L),U=function(){return{type:"ON_CONNECT"}},D=function(e){return{type:"TRANSCRIPT_GOOGLE",transcript_google:e}},P=function(e){return{type:"TRANSCRIPT_KALDI",transcript_kaldi:e}},I=function(e,t){return{type:"STOP_STREAM",proba:e,text:t.text,url:t.url}},B=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={google:[],context:new AudioContext},n.componentDidMount=function(){var e=n.props,t=e.stream,a=e.on_connect,o=n.state.context;n.socket=A()("wss://vawsr.mino.tw/ws"),a(),n.processor=o.createScriptProcessor(2048,1,1),n.processor.connect(o.destination),n.input=o.createMediaStreamSource(t),n.input.connect(n.processor),n.processor.onaudioprocess=function(e){n.props.record&&n.microphoneProcess(e)},n.registerEvents()},n.componentDidUpdate=function(e){var t=n.props.record;e.record!==t&&(t||n.stopRecording())},n.registerEvents=function(){n.socket.on("google_speech_data",function(e){var t=e.transcript;e.is_final&&n.setState(function(e){return{google:Object(N.a)(e.google).concat([t])}});var a=n.state.google;(0,n.props.update_google)(a.reduce(function(e,t){return e+" "+t},"")+t)}),n.socket.on("kaldi_speech_data",function(e){var t=e.transcript;(0,n.props.update_kaldi)(t)}),n.socket.on("stop_stream",function(e){var t=e.proba,a=e.result,o=n.props.stop_stream;n.setState({google:[]}),o(t,a)})},n.stopRecording=function(){n.socket.emit("stop_stream","")},n.microphoneProcess=function(e){var t=e.inputBuffer.getChannelData(0),a=n.floatTo16BitPCM(t);n.socket.emit("binary_data",a)},n.floatTo16BitPCM=function(e){for(var t=new Int16Array(e.length),n=0,a=0;n<t.length;){for(var o=n+1,r=0,i=0,c=a;c<o&&c<e.length;c++)r+=e[c],i++;t[n]=32767*Math.min(1,r/i),n++,a=o}return t.buffer},n.downsampleBuffer=function(e,t,n){if(n===t)return e;if(n>t)throw Error("downsampling rate show be smaller than original sample rate");for(var a=t/n,o=Math.round(e.length/a),r=new Int16Array(o),i=0,c=0;i<r.length;){for(var s=Math.round((i+1)*a),l=0,u=0,d=c;d<s&&d<e.length;d++)l+=e[d],u++;r[i]=32767*Math.min(1,l/u),i++,c=s}return r.buffer},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(o.a.Component),G=Object(c.b)(function(e){return{record:e.Recorder.record,stream:e.Recorder.stream}},function(e){return Object(s.a)({on_connect:U,update_google:D,update_kaldi:P,stop_stream:I},e)})(B),W=function(){return{type:"START_RECORD"}},q=function(){return{type:"STOP_RECORD"}},V=function(e){return{type:"UPDATE_STREAM",stream:e}},H=function(){return{type:"RESUME_VOLUMEMETER"}},X=function(){return{type:"SUSPEND_VOLUMEMETER"}},F=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).loop=function(){n.analyser.getByteTimeDomainData(n.array);for(var e,t,a,o,r=0,i=0;i<n.array.length;)r+=(t=n.array[i++]/128-1)*t;a=Math.sqrt(r/n.array.length),o=20*Math.log10(a),e=100+2.083*(o=Math.max(-48,Math.min(o,0))),n.setState({volume:Number(e.toFixed(2))});var c=n.props,s=c.startRecord,l=c.stopRecord,u=c.record,d=c.logined,p=c.suspended,h=n.state,f=h.stream,m=h.threshold,b=h.stopTimeout;p&&u?l():p||(d&&f&&e>=m&&!u&&s(),u&&e<m&&(b>10&&(n.setState({stopTimeout:0}),l()),n.setState(function(e){return{stopTimeout:e.stopTimeout+1}})))},n.handleMouse=function(){document.addEventListener("mousemove",n.handleMouseMove,!0),document.addEventListener("mouseup",n.handleMouseUp,!0)},n.handleMouseMove=function(e){var t;t=e.clientX<n.node.offsetLeft?0:e.clientX>n.node.offsetWidth+n.node.offsetLeft?n.node.offsetWidth/n.node.clientWidth*100:(e.clientX-n.node.offsetLeft)/n.node.clientWidth*100,n.setState({threshold:t})},n.handleMouseUp=function(e){var t;document.removeEventListener("mousemove",n.handleMouseMove,!0),document.removeEventListener("mouseup",n.handleMouseUp,!0),t=e.clientX<n.node.offsetLeft?0:e.clientX>n.node.offsetWidth+n.node.offsetLeft?n.node.offsetWidth/n.node.clientWidth*100:(e.clientX-n.node.offsetLeft)/n.node.clientWidth*100,n.setState({threshold:t}),n.cookie.set("threshold",t)},window.AudioContext=window.AudioContext||window.webkitAudioContext,n.state={audioContext:new AudioContext,src:null,volume:0,threshold:50,stream:!1,stopTimeout:0},n.cookie=new _.a,n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateStream;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(n){t(n),e.setState(function(e){return{src:e.audioContext.createMediaStreamSource(n),stream:n}}),e.setupAnalyser()});var n=this.cookie.get("threshold");void 0!==n&&Number(n)&&this.setState({threshold:Number(n)})}},{key:"setupAnalyser",value:function(){var e=this.state,t=e.audioContext,n=e.src;this.analyser=t.createAnalyser(),n.connect(this.analyser),this.array=new Uint8Array(this.analyser.frequencyBinCount),setInterval(this.loop,100)}},{key:"render",value:function(){var e=this,t=this.state,n=t.volume,a=t.threshold,r=t.stream,i=this.props.logined;return o.a.createElement("div",{ref:function(t){return e.node=t}},o.a.createElement(M,{handleMouse:this.handleMouse,threshold:a,width:n}),i&&r&&o.a.createElement(G,null))}}]),t}(o.a.Component),K=Object(c.b)(function(e){return{record:e.Recorder.record,suspended:e.Recorder.suspended,logined:e.LoginManager.logined}},function(e){return Object(s.a)({startRecord:W,stopRecord:q,updateStream:V},e)})(F),z=n(33),J=n(79),Q=n.n(J),Y=n(80),$=n.n(Y),Z=n(52),ee=n.n(Z),te=n(41),ne=n.n(te),ae=n(58),oe=n.n(ae),re=n(60),ie=n.n(re),ce=n(182),se=n.n(ce),le=n(37),ue=n(27),de=n(183),pe=n.n(de),he=n(184),fe=n.n(he),me=n(107),be=n.n(me),ge=n(106),ve=n.n(ge),Oe=n(25),Ee=n(168),je=n.n(Ee),ye=function(e){return{type:"LOGIN",fbid:e.fbid,email:e.email,name:e.name,hasivector:e.hasivector}},we=function(){return{type:"LOGOUT"}},ke=n(51),Te=n.n(ke),Re=n(174),xe=n.n(Re),Ce=n(179),Se=n.n(Ce),Me=n(180),_e=n.n(Me),Ne=n(178),Le=n.n(Ne),Ae=n(181),Ue=n.n(Ae),De=n(175),Pe=n.n(De),Ie=n(172),Be=n.n(Ie),Ge=n(177),We=n.n(Ge),qe=n(173),Ve=n.n(qe),He=n(39),Xe=n.n(He),Fe=n(176),Ke=n.n(Fe),ze=n(171),Je=n.n(ze),Qe=n(170),Ye=n.n(Qe),$e=n(169),Ze=n.n($e),et=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).componentDidMount=function(){var e=n.props.stream;n.recorder=new Ze.a(e),n.recorder.mimeType="audio/wav",n.recorder.audioChannels=1,n.recorder.ondataavailable=function(e){n.props.handleURL(e)},n.setState({ready:!0})},n.startRecording=function(){n.setState({record:!0}),n.recorder.start(1e5)},n.stopRecording=function(){n.setState({record:!1}),n.recorder.stop()},n.state={record:!1,ready:!1},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.record},o.a.createElement(Te.a,{className:e.button,variant:"fab",color:"secondary",onClick:this.state.record?this.stopRecording:this.startRecording,type:"button",disabled:!this.state.ready},this.state.record?o.a.createElement(Ye.a,null):o.a.createElement(Je.a,null)))}}]),t}(o.a.Component),tt=Object(c.b)(function(e){return{stream:e.Recorder.stream}})(Object(ue.withStyles)(function(e){return{button:{margin:e.spacing.unit,float:"right"},record:{margin:"10px 0px"}}})(et));function nt(e){return o.a.createElement(Ve.a,Object.assign({direction:"up"},e))}var at=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,sentences:[],audioBlob:{},audio:[],step:0,loading:!1},n.handleClick=function(){(0,n.props.suspend)(),n.generateSentences(),n.setState({open:!0})},n.handleClose=function(){var e=n.props,t=e.callback;(0,e.resume)(),n.setState({open:!1}),t()},n.handleBack=function(){n.state.step>0?n.setState(function(e){return{step:e.step-1}}):n.handleClose()},n.handleNext=function(){if(n.state.step<9)n.setState(function(e){return{step:e.step+1}});else{var e=n.props.hostname;n.setState({loading:!0});for(var t=new FormData,a=0;a<10;a++)t.append("file".concat(a+1),n.state.audioBlob[a],"file".concat(a+1,".wav"));Xe.a.post("".concat(e,"/registerspeaker"),t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){Oe.toast.success("\u8a9e\u8005\u8a3b\u518a\u6210\u529f"),n.handleClose()}).catch(function(){Oe.toast.error("\u8a9e\u8005\u8a3b\u518a\u5931\u6557\uff0c\u8acb\u91cd\u65b0\u50b3\u9001\u4e00\u904d"),n.setState({loading:!1})})}},n.handleURL=function(e){var t={};t[n.state.step]=e,n.setState(function(e){return{audioBlob:Object.assign({},e.audioBlob,t)}})},n.replayBlob=function(){var e=window.URL.createObjectURL(n.state.audioBlob[n.state.step]);new Audio(e).play()},n.generateSentences=function(){var e=n.props.hostname;Xe.a.get("".concat(e,"/sentences.json")).then(function(e){return e.data}).then(function(e){var t=e.sentences;n.setState({sentences:t})}).catch(function(){Oe.toast.error("\u53d6\u5f97\u8a9e\u6599\u5931\u6557\uff0c\u8acb\u6aa2\u67e5\u767b\u5165\u662f\u5426\u904e\u671f"),n.handleClose()})},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.hasivector,a=this.state,r=a.loading,i=a.step,c=a.sentences,s=a.audioBlob,l=a.open;return o.a.createElement("div",null,o.a.createElement(ie.a,{onClick:this.handleClick},o.a.createElement("p",null,n?"\u91cd\u65b0\u8a3b\u518a\u8a9e\u8005":"\u8a9e\u8005\u8a2d\u5b9a")),o.a.createElement(xe.a,{fullScreen:!0,open:l,onClose:this.handleClose,TransitionComponent:nt},o.a.createElement(Q.a,{className:t.appBar},o.a.createElement($.a,null,o.a.createElement(ee.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},o.a.createElement(Pe.a,null)),o.a.createElement(ne.a,{variant:"h6",color:"inherit",className:t.flex},"\u8a9e\u8005\u8a2d\u5b9a"),o.a.createElement(Ke.a,{className:t.dots,variant:"dots",steps:10,position:"static",activeStep:i,backButton:o.a.createElement(Te.a,{onClick:this.handleBack,color:"inherit"},"Back"),nextButton:o.a.createElement(Te.a,{onClick:this.handleNext,color:"inherit",autoFocus:!0,disabled:!s[i]||r},9===i?"Finish":"Next",r&&o.a.createElement(We.a,{size:24,className:t.buttonProgress}))}))),o.a.createElement(Le.a,{id:"responsive-dialog-title"},"\u8acb\u6717\u8b80\u4e0b\u5217\u6587\u5b57\u9032\u884c\u8a9e\u8005\u8a3b\u518a"),o.a.createElement(Se.a,null,o.a.createElement(_e.a,{id:"sentences"},c[i]),o.a.createElement(tt,{handleURL:this.handleURL}),o.a.createElement(Te.a,{disabled:!s[i],className:t.button,variant:"fab",color:"secondary",type:"button",onClick:this.replayBlob},o.a.createElement(Ue.a,null)))))}}]),t}(o.a.Component),ot=Object(c.b)(function(e){return{hasivector:e.LoginManager.hasivector,hostname:e.Host.hostname}},function(e){return Object(s.a)({resume:H,suspend:X},e)})(Object(ue.withStyles)(function(e){return{dots:{backgroundColor:"inherit"},button:{margin:e.spacing.unit,float:"right"},buttonProgress:{color:Be.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},appBar:{position:"relative"},flex:{flex:1}}})(at));Xe.a.defaults.withCredentials=!0;var rt=function(e){function t(e){var n;Object(h.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).state={anchorEl:null},n.handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null})},n.handleLogin=function(e){var t=n.props,a=t.hostname,o=t.login;Xe.a.post("".concat(a,"/login"),{email:e.email,name:e.name,token:e.accessToken,signed:e.signedRequest,fbid:Number(e.id)},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.data}).then(function(e){o(e),Oe.toast.success("Login success",{position:Oe.toast.POSITION.BOTTOM_RIGHT})}).catch(function(){return Oe.toast.error("Login failed",{position:Oe.toast.POSITION.BOTTOM_RIGHT})}).finally(function(){n.handleMenuClose()})},n.handleLogout=function(){var e=n.props,t=e.logout,a=e.hostname;Xe.a.get("".concat(a,"/logout")),t(),Oe.toast.warn("Logout success",{position:Oe.toast.POSITION.BOTTOM_RIGHT}),n.handleMenuClose()};var a=n.props,o=a.hostname,r=a.login;return Xe.a.get("".concat(o,"/auth")).then(function(e){return e.data}).then(function(e){r(e),console.log("Auth success")}).catch(function(){console.log("Auth failed")}),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=this.props,n=t.classes,a=t.logined,r=t.stream,i=t.user,c=Boolean(e),s=o.a.createElement(se.a,{anchorEl:e,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:this.handleMenuClose},a?o.a.createElement(ie.a,{onClick:this.handleLogout},"Logout"):o.a.createElement(je.a,{appId:"332358063993706",fields:"name,email,picture",disableMobileRedirect:!0,callback:this.handleLogin,render:function(e){return o.a.createElement(ie.a,{onClick:e.onClick},"Facebook Login")}}),a&&o.a.createElement(ot,{callback:this.handleMenuClose}));return o.a.createElement("div",{className:n.root},o.a.createElement(Q.a,{position:"static"},o.a.createElement($.a,null,o.a.createElement(ee.a,{className:n.menuButton,color:"inherit","aria-label":"Open drawer"},o.a.createElement(pe.a,null)),o.a.createElement(ne.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"\u5177\u8a9e\u8005\u8fa8\u8b58\u4e4b\u8a9e\u97f3\u52a9\u7406"),o.a.createElement("div",{className:n.search},o.a.createElement("div",{className:n.searchIcon},o.a.createElement(fe.a,null)),o.a.createElement(oe.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput}})),o.a.createElement("div",{className:n.grow}),o.a.createElement("div",{className:n.sectionDesktop},o.a.createElement(ee.a,{"aria-owns":c?"material-appbar":null,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},i.fbid?o.a.createElement(ve.a,{alt:i.name,src:"https://graph.facebook.com/".concat(i.fbid,"/picture?type=normal")}):o.a.createElement(be.a,null))),o.a.createElement("div",{className:n.sectionMobile},o.a.createElement(ee.a,{"aria-owns":c?"material-appbar":null,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},i.fbid?o.a.createElement(ve.a,{alt:i.name,src:"https://graph.facebook.com/".concat(i.fbid,"/picture?type=normal")}):o.a.createElement(be.a,null))))),r&&s)}}]),t}(o.a.Component),it=Object(c.b)(function(e){return{logined:e.LoginManager.logined,hostname:e.Host.hostname,user:e.LoginManager,stream:e.Recorder.stream}},function(e){return Object(s.a)({login:ye,logout:we},e)})(Object(ue.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(z.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(z.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(le.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(le.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(z.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(z.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(z.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(rt));function ct(){var e=Object(v.a)(["\n  margin: 0px;\n  margin-bottom: 10px;\n"]);return ct=function(){return e},e}var st=O.a.p(ct()),lt=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement(st,null,"\xa9 YunTech 2018"))}}]),t}(o.a.Component),ut=n(5),dt=n.n(ut),pt=n(83),ht=n.n(pt),ft=n(82),mt=n.n(ft),bt=n(81),gt=n(185),vt=n.n(gt),Ot=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){var e=n.props.url;e&&window.open(e,"_blank")},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.google,a=e.kaldi,r=e.proba,i=e.text,c=e.url;return o.a.createElement("div",null,n&&o.a.createElement("div",{className:t.flex},o.a.createElement(mt.a,{className:t.margin,label:"Google",defaultValue:n,variant:"outlined",multiline:!0,InputProps:{startAdornment:o.a.createElement(ht.a,{position:"start"},o.a.createElement(bt.a,{icon:["fab","google"]})),readOnly:!0}})),a&&o.a.createElement("div",{className:t.flex},o.a.createElement(mt.a,{className:t.margin,label:"Kaldi",defaultValue:a,multiline:!0,variant:"outlined",InputProps:{startAdornment:o.a.createElement(ht.a,{position:"start"},o.a.createElement(bt.a,{className:t.k_margin,icon:["fab","kaggle"]})),readOnly:!0}})),i&&o.a.createElement("div",{className:t.flexRight},o.a.createElement(mt.a,{className:dt()(t.margin,t.marginLeft),label:"The probability: ".concat(r),defaultValue:i+c,multiline:!0,variant:"outlined",onClick:this.handleClick,InputProps:{startAdornment:o.a.createElement(ht.a,{position:"start"},o.a.createElement(bt.a,{icon:["fas","robot"]})),readOnly:!0}})),i&&o.a.createElement(vt.a,{className:t.clear}))}}]),t}(a.Component),Et=Object(ue.withStyles)(function(e){return{flex:{display:"flex",flexWrap:"wrap"},flexRight:{display:"flex"},clear:{clear:"both"},margin:Object(z.a)({margin:e.spacing.unit,width:"80%"},e.breakpoints.up("md"),{width:"40%"}),marginLeft:{"margin-left":"auto"},k_margin:{"margin-left":"3px","margin-right":"3px"}}})(Ot);function jt(){var e=Object(v.a)(["\n  width: 100%;\n  height: calc(100vh - 132px);\n  overflow: scroll;\n  overflow-x: hidden;\n  border-radius: 10px;\n  background: #eee;\n"]);return jt=function(){return e},e}var yt=O.a.div(jt()),wt=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.el.scrollTop=this.el.scrollTopMax}},{key:"render",value:function(){for(var e=this,t=this.props,n=t.google,a=t.kaldi,r=t.responses,i=[],c=0;c<r.length;c++)i.push(o.a.createElement(Et,Object.assign({key:c},r[c])));return o.a.createElement(yt,{innerRef:function(t){e.el=t}},i,o.a.createElement(Et,{google:n,kaldi:a,proba:0,text:"",url:""}))}}]),t}(a.Component),kt=Object(c.b)(function(e){return{google:e.Websocket.google,kaldi:e.Websocket.kaldi,responses:e.Websocket.responses}})(wt);n(416);function Tt(){var e=Object(v.a)(["\n  text-align: center;\n  margin: 0px auto;\n"]);return Tt=function(){return e},e}var Rt=O.a.div(Tt()),xt=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement(Rt,{id:"app"},o.a.createElement(it,null),o.a.createElement(kt,null),o.a.createElement(K,null),o.a.createElement(lt,null),o.a.createElement(Oe.ToastContainer,null))}}]),t}(a.Component),Ct=n(420),St=n(61),Mt=n(186),_t=n(187);St.b.add(Mt.a,_t.a);var Nt=Object(ue.createMuiTheme)({typography:{useNextVariants:!0}}),Lt=Object(s.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(c.a,{store:Lt},o.a.createElement(ue.MuiThemeProvider,{theme:Nt},o.a.createElement(Ct.a,null,o.a.createElement(xt,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/VAWSR",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/VAWSR","/service-worker.js");l?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):u(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):u(e)})}}()},42:function(e,t,n){"use strict";n.r(t);var a=n(8);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{connected:!1,responses:[],google:"",kaldi:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_CONNECT":return Object(a.a)({},e,{connected:!0});case"TRANSCRIPT_GOOGLE":return Object(a.a)({},e,{google:t.transcript_google});case"TRANSCRIPT_KALDI":return Object(a.a)({},e,{kaldi:t.transcript_kaldi});case"STOP_STREAM":return e.responses.push({google:e.google,kaldi:e.kaldi,proba:t.proba,text:t.text,url:t.url}),Object(a.a)({},e,{google:"",kaldi:""});default:return e}}},59:function(e,t,n){"use strict";n.r(t);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{logined:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{fbid:t.fbid,email:t.email,name:t.name,logined:!0,hasivector:t.hasivector};case"LOGOUT":return{logined:!1};default:return e}}},78:function(e,t,n){"use strict";n.r(t);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hostname:"https://vawsr.mino.tw"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_HOST":return Object.assign({},e,{hostname:t.hostname});default:return e}}}},[[190,2,1]]]);
//# sourceMappingURL=main.ca79128c.chunk.js.map