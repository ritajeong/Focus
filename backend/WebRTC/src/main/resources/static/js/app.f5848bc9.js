(function(e){function t(t){for(var i,s,a=t[0],c=t[1],d=t[2],u=0,p=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0152":function(e,t,n){},2657:function(e,t,n){"use strict";n("331a")},"331a":function(e,t,n){},"55f1":function(e,t,n){"use strict";n("0152")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},r=[],s=n("2877"),a={},c=Object(s["a"])(a,o,r,!1,null,null,null),d=c.exports,l=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"meeting-room"},[null===e.participants?n("div",[n("h1",[e._v("MeetingRoom")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("button",{on:{click:e.register}},[e._v("register")])]):e._e(),null!==e.participants?n("div",{staticClass:"main-container"},[n("div",{staticClass:"row"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.leftSideShow,expression:"leftSideShow"}],staticClass:"col-2",attrs:{id:"left-sidebar"}},[n("VideoUnitGroup",{staticClass:"section",on:{toggleLeftSide:e.onToggleLeftSide}})],1),n("div",{staticClass:"col-7",attrs:{id:"main-video"}},[n("div",{staticClass:"d-flex flex-column justify-content-center section"},[n("MainVideoUnit",{attrs:{mainParticipant:e.mainParticipant}}),n("MeetingRoomController",{on:{toggleLeftSide:e.onToggleLeftSide,toggleRightSide:e.onToggleRightSide}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.rightSideShow,expression:"rightSideShow"}],staticClass:"col-3",attrs:{id:"right-sidebar"}},[n("MeetingSideBar",{staticClass:"section",on:{toggleRightSide:e.onToggleRightSide}})],1)])]):e._e()])},p=[],m=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column"},[n("div",{staticClass:"d-flex justify-content-end"},[n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close"},on:{click:e.toggleLeftSide}})]),e._l(e.participants,(function(e){return n("div",{key:e.name},[n("VideoUnit",{staticClass:"video-unit",attrs:{participant:e}})],1)}))],2)}),f=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:e.videoId}})])},h=[],v={name:"VideoUnit",components:{},props:{participant:Object},data:function(){return{}},computed:{videoId:function(){return"video-of-"+this.participant.name},video:function(){return this.participant.getVideoElement()}},mounted:function(){this.video.classList.add("video-insert"),document.getElementById(this.videoId).appendChild(this.video),console.log(this.videoId+" mounted")},methods:{}},S=v,b=(n("ff84"),Object(s["a"])(S,g,h,!1,null,null,null)),w=b.exports,R={name:"VideoUnitGroup",components:{VideoUnit:w},props:{},data:function(){return{}},computed:{participants:function(){return this.$store.state.meetingRoom.participants}},mounted:function(){},methods:{toggleLeftSide:function(){this.$emit("toggleLeftSide")}}},P=R,_=(n("2657"),Object(s["a"])(P,m,f,!1,null,"217817a3",null)),y=_.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"mainVideo"}})])}],x={name:"MainVideoUnit",components:{},props:{mainParticipant:Object},data:function(){return{}},computed:{video:function(){return this.mainParticipant.getVideoElement()}},mounted:function(){this.video.classList.add("video-insert"),document.getElementById("mainVideo").appendChild(this.video)},updated:function(){console.log(this.mainParticipant)},methods:{}},E=x,V=Object(s["a"])(E,C,M,!1,null,null,null),O=V.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column"},[n("div",{staticClass:"d-flex justify-content-end"},[n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close"},on:{click:e.toggleRightSide}})]),n("PresentationController")],1)},I=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"presenter"}},[e._v("발표자 이름:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.presenter,expression:"presenter"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.presenter},on:{input:function(t){t.target.composing||(e.presenter=t.target.value)}}}),n("button",{attrs:{id:"presenter-set",type:"button"},on:{click:e.presenterSet}},[e._v(" 설정")]),n("button",{staticClass:"btn btn-info",attrs:{id:"start",type:"button",href:"#"},on:{click:e.start}},[e._v(" Start")]),n("button",{staticClass:"btn btn-info",attrs:{id:"stop",type:"button",href:"#"},on:{click:e.stop}},[e._v(" Stop")]),n("button",{staticClass:"btn btn-info",attrs:{id:"prev",type:"button",href:"#"},on:{click:e.prev}},[e._v(" Prev")]),n("button",{staticClass:"btn btn-warning",attrs:{id:"next",type:"button",href:"#"},on:{click:e.next}},[e._v(" Next")])])])},T=[],j={name:"PresentationController",components:{},props:{},data:function(){return{presenter:null}},computed:{},mounted:function(){},methods:{presenterSet:function(){var e={id:"presneterSet",presenter:this.presenter};this.$store.dispatch("meetingRoom/sendMessage",e)},start:function(){var e={id:"start"};this.$store.dispatch("meetingRoom/sendMessage",e)},stop:function(){var e={id:"stop"};this.$store.dispatch("meetingRoom/sendMessage",e)},prev:function(){var e={id:"prev"};this.$store.dispatch("meetingRoom/sendMessage",e)},next:function(){var e={id:"next"};this.$store.dispatch("meetingRoom/sendMessage",e)}}},A=j,k=Object(s["a"])(A,N,T,!1,null,null,null),L=k.exports,G={name:"MeetingSideBar",components:{PresentationController:L},props:{},data:function(){return{}},computed:{},mounted:function(){},methods:{toggleRightSide:function(){this.$emit("toggleRightSide")}}},U=G,W=Object(s["a"])(U,$,I,!1,null,null,null),D=W.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center"},[n("button",{on:{click:e.toggleLeftSide}},[e._v("left")]),n("button",{on:{click:e.toggleRightSide}},[e._v("right")])])},J=[],F={name:"Template",components:{},props:{},data:function(){return{}},computed:{},mounted:function(){},methods:{toggleLeftSide:function(){this.$emit("toggleLeftSide")},toggleRightSide:function(){this.$emit("toggleRightSide")}}},Y=F,z=Object(s["a"])(Y,B,J,!1,null,null,null),q=z.exports,H={name:"MeetingRoom",components:{VideoUnitGroup:y,MainVideoUnit:O,MeetingSideBar:D,MeetingRoomController:q},props:{},data:function(){return{name:null,leftSideShow:!0,rightSideShow:!0,mainVideoGrid:null}},watch:{serverMessage:function(){switch(this.serverMessage.id){case"existingParticipants":this.$store.dispatch("meetingRoom/onExistingParticipants",this.serverMessage);break;case"newParticipantArrived":this.$store.dispatch("meetingRoom/onNewParticipant",this.serverMessage);break;case"participantLeft":this.$store.dispatch("meetingRoom/onParticipantLeft",this.serverMessage);break;case"receiveVideoAnswer":this.$store.dispatch("meetingRoom/receiveVideoResponse",this.serverMessage);break;case"iceCandidate":var e=this.serverMessage;this.participants[e.name].rtcPeer.addIceCandidate(e.candidate,(function(e){e&&console.error("Error adding candidate: "+e)}));break;default:console.error("Unrecognized message"+this.serverMessage)}}},computed:{serverMessage:function(){return this.$store.state.meetingRoom.serverMessage},participants:function(){return this.$store.state.meetingRoom.participants},ws:function(){return this.$store.state.meetingRoom.ws},mainParticipant:function(){return this.participants[this.$store.state.meetingRoom.myName]}},created:function(){var e="wss://"+location.host+"/groupcall";this.$store.dispatch("meetingRoom/wsInit",e)},mounted:function(){},methods:{register:function(){var e=this.name,t="SaffyRoom",n={id:"joinRoom",name:e,room:t};this.$store.dispatch("meetingRoom/sendMessage",n),this.$store.dispatch("meetingRoom/setMyName",this.name)},onToggleLeftSide:function(){this.leftSideShow=!this.leftSideShow,this.arrangeGrid()},onToggleRightSide:function(){this.rightSideShow=!this.rightSideShow,console.log("toggleRightSide",this.rightSideShow),this.arrangeGrid()},arrangeGrid:function(){this.mainVideoGrid=12,this.leftSideShow&&(this.mainVideoGrid-=2),this.rightSideShow&&(this.mainVideoGrid-=3);var e="col-"+String(this.mainVideoGrid);document.getElementById("main-video").className=e}}},K=H,Q=(n("55f1"),Object(s["a"])(K,u,p,!1,null,"edc4fc2a",null)),X=Q.exports;i["a"].use(l["a"]);var Z=[{path:"/",name:"MeetingRoom",component:X}],ee=new l["a"]({mode:"history",base:"/",routes:Z}),te=ee,ne=n("2f62");n("159b");function ie(e){this.name=e,Object.defineProperty(this,"rtcPeer",{writable:!0});var t=document.createElement("video");t.id="video-"+e,t.autoplay=!0,t.controls=!1,this.getVideoElement=function(){return t},this.offerToReceiveVideo=function(t,n,i){if(t)return console.error("sdp offer error");var o={id:"receiveVideoFrom",sender:e,sdpOffer:n};ce.dispatch("meetingRoom/sendMessage",o)},this.onIceCandidate=function(t,n){var i={id:"onIceCandidate",candidate:t,name:e};ce.dispatch("meetingRoom/sendMessage",i)},this.dispose=function(){console.log("Disposing participant "+this.name),this.rtcPeer.dispose(),ce.dispatch("meetingRoom/disposeParticipant",this.name)}}var oe=n("d519"),re=n.n(oe),se={namespaced:!0,state:function(){return{ws:null,participants:null,serverMessage:null,myName:null}},mutations:{WS_INIT:function(e,t){e.ws=new WebSocket(t)},WS_ONMESSAGE:function(e,t){e.serverMessage=t},SET_MY_NAME:function(e,t){e.myName=t},ADD_PARTICIPANT:function(e,t){var n=t.name,o=t.participant;null===e.participants&&(e.participants={}),i["a"].set(e.participants,n,o),console.log("participant added",e.participants)},DISPOSE_PARTICIPANT:function(e,t){delete e.participants[t]}},actions:{wsInit:function(e,t){e.commit("WS_INIT",t),e.state.ws.onmessage=function(t){var n=JSON.parse(t.data);e.commit("WS_ONMESSAGE",n)}},sendMessage:function(e,t){var n=JSON.stringify(t);e.state.ws.send(n)},setMyName:function(e,t){e.commit("SET_MY_NAME",t)},onExistingParticipants:function(e,t){var n=new ie(e.state.myName),i=n.getVideoElement(),o={audio:!0,video:{mandatory:{maxWidth:320,maxFrameRate:15,minFrameRate:15}}},r={localVideo:i,mediaConstraints:o,onicecandidate:n.onIceCandidate.bind(n)};n.rtcPeer=new re.a.WebRtcPeer.WebRtcPeerSendonly(r,(function(e){if(e)return console.log(n,i),console.error(e);this.generateOffer(n.offerToReceiveVideo.bind(n))}));var s=e.state.myName;e.commit("ADD_PARTICIPANT",{name:s,participant:n}),t.data.forEach((function(t){console.log("forEach문 sender: "+t),e.dispatch("receiveVideo",t)}))},receiveVideo:function(e,t){var n=new ie(t),i=n.getVideoElement(),o={remoteVideo:i,onicecandidate:n.onIceCandidate.bind(n)};n.rtcPeer=new re.a.WebRtcPeer.WebRtcPeerRecvonly(o,(function(e){if(e)return console.error(e);this.generateOffer(n.offerToReceiveVideo.bind(n))})),e.commit("ADD_PARTICIPANT",{name:t,participant:n})},onNewParticipant:function(e,t){console.log("onNewParticipant"+t.name),e.dispatch("receiveVideo",t.name)},onParticipantLeft:function(e,t){console.log(e.state.myName),console.log("Participant"+t.name+"left");var n=e.state.participants[t.name];n.dispose()},disposeParticipant:function(e,t){e.commit("DISPOSE_PARTICIPANT",t)},receiveVideoResponse:function(e,t){e.state.participants[t.name].rtcPeer.processAnswer(t.sdpAnswer,(function(e){if(e)return console.error(e)}))}},getters:{}};i["a"].use(ne["a"]);var ae=new ne["a"].Store({state:{},mutations:{},actions:{},modules:{meetingRoom:se}}),ce=ae;i["a"].config.productionTip=!1,new i["a"]({router:te,store:ce,render:function(e){return e(d)}}).$mount("#app")},8980:function(e,t,n){},ff84:function(e,t,n){"use strict";n("8980")}});
//# sourceMappingURL=app.f5848bc9.js.map