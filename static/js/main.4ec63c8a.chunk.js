(this["webpackJsonpgps-react"]=this["webpackJsonpgps-react"]||[]).push([[0],{103:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(9),i=n.n(r),c=(n(58),n(15)),l=n(16),s=n(18),h=n(17),d=n(19),u=n(23),p=n(48),f=n.n(p),g=n(49),m=n.n(g)()("localhost:8000"),v=!1;m.on("connect",(function(){v=!0,console.log("socket connect to server")}));var w,b=function(e){m.on("osc",e)},y=n(50),S=n.n(y),k=function(){w=new S.a.Synth({oscillator:{type:"sine"},envelope:{attack:.1,decay:.1,sustain:.2,release:.5}}).toMaster()},O=function(e){w.triggerAttackRelease(P(e.layer),"16n")},P=function(e){var t="BCDEFGA".length;return"BCDEFGA"[e%t]+Math.min(6,Math.floor(3+e/t))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){var t,n=0,a=0,o=[],r=[],i={},c=!0,l=0,s=[];b((function(e){"/gps/trigger"==e.address&&(JSON.parse(e.args[0].value).id==t&&(l=0))})),e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.frameRate(30),console.log("issocketConnect:"+v),k()},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)},e.myCustomRedrawAccordingToNewPropsHandler=function(e){e.configData&&(alert(e.configData.centerName),i=e.configData,p()),e.name&&(i.centerName=e.name),e.dataPoint&&0!==Object.keys(i).length&&(o=e.dataPoint,d()),e.myId&&(console.log(e.myId),t=e.myId)};var h=function(t){var n=function(e,t,n){if(n.lon&&n.lat){var a=(n.lon-t.lon)*t.globalScale,o=(n.lat-t.lat)*t.globalScale,r=e.createVector(a,o);return r.x=(r.x>0?1:-1)*Math.pow(Math.abs(r.x),t.globalPow),r.y=(r.y>0?1:-1)*Math.pow(Math.abs(r.y),t.globalPow),r.y*=-1,r}return null}(e,i,t),a=1*n.mag().toFixed(5),o=1*(n.heading()/Math.PI*180).toFixed(5);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{pos:n,dist:a,degree:o})},d=function(){console.log("updateDataPoint");var t=e.int(e.frameCount/4);t&&(r=o.map(h).slice(-t)),c=!(t>o.length)},p=function(){for(var e=0;e<50;e++)s[e]=x(e,i.globalScale,i.globalPow)};e.draw=function(){var t,o;e.frameCount%25===0&&c&&d(),a=n,t=i.radioSpeed,o=e.frameCount,n=t*o/60%(2*Math.PI)-Math.PI,l++,e.background(255/l,100),e.textSize(12),e.fill(255),e.stroke(255,10),e.strokeWeight(1);var h="Total Nodes: ".concat(function(e){return e.length}(r),"\nActive: ").concat(function(e){return e.filter((function(e){return!e.leave})).length}(r),"\nExecute Time: ").concat(e.frameCount,"\nScanning: ").concat((n/Math.PI*180).toFixed(2),"\xb0");!function(e,t){e.push(),e.fill(255),e.textSize(14),e.textLeading(24),e.text(new Date,20,e.height-35),e.pop(),e.push(),e.fill(255,130),e.text(t,20,35),e.pop()}(e,h),e.translate(e.width/2,e.height/2),function(e,t){var n=e.frameCount;e.noFill();for(var a=0;a<50;a++){var o=0;if(t.length>a&&(o=t[a]),e.stroke(255,Math.max(60-a/10*60,4)+4*Math.sin(-n/10+a)),a<9){e.fill(255,255,255,1+1*e.noise(n/10,a)),e.stroke(255,20),e.beginShape(e.LINES);for(var r=0;r<360;r++){var i=E(o,n,a,r,50/(10-a));e.vertex(i*Math.cos(e.radians(r+n/40)),i*Math.sin(e.radians(r+n/40)))}e.endShape(),e.noStroke(),e.beginShape();for(var c=0;c<360;c++){var l=E(o,n,a,c,30/(8-a));e.vertex(l*Math.cos(e.radians(c+n/40)),l*Math.sin(e.radians(c+n/40)))}e.endShape(e.CLOSE)}else e.noFill(),e.ellipse(0,0,o,o)}}(e,s),function(e,t,n,a,o){var r;e.textSize(12),e.fill(255),e.stroke(255,10),e.strokeWeight(1),t.forEach((function(t,i){var c,l=Date.now()-t.timeStamp,s=t.pos.heading(),h=t.showId;if(t.pos){c=s-n;var d=(a-s)*(n-s)<=0&&Math.abs(a-n)<1;if(d){if(r!==t){var u={layer:C(t.dist,o.globalScale,o.globalPow),degree:t.degree,dist:t.dist,leave:t.leave,pos:t.pos};O(u)}r=t}e.push();var p=t.pos.mag();if(p<2*e.width){e.noFill(),e.beginShape();for(var f=0;f<p-10;f+=2){var g=s+e.noise(e.frameCount/10+f/10)/60;e.vertex(Math.cos(g)*f,Math.sin(g)*f)}e.endShape()}e.pop();var m=Math.abs(c%(2*Math.PI))<.08&&c<0;m&&(e.push(),e.fill(0,0,0,70),e.noStroke(),e.rect(t.pos.x+6,t.pos.y-5,e.textWidth(h)+8,12),e.fill(255),e.text(h,t.pos.x+10,t.pos.y+5),e.pop()),d?e.fill(255):e.fill(255,5+150/Math.log(l)+(m?50:0));var v=5+(c<0?Math.max(Math.min(-1/c,6),0):0)+2*e.noise(i,e.frameCount,t.lon);t.leave||(e.fill(255,0,0),v=5+2*Math.sin(e.frameCount/10),e.push(),e.stroke(255,200),e.rectMode(e.CENTER),e.translate(t.pos.x,t.pos.y),e.rotate(e.frameCount/(10+t.lon/100)),e.noFill(),e.rect(0,0,12,12),e.pop(),e.text("//ACTIVE ".concat(e.frameCount%10<5?".":"","\nID: ").concat(h),t.pos.x+10,t.pos.y+20)),e.ellipse(t.pos.x,t.pos.y,v,v)}else console.log("no position?")}))}(e,r,n,a,i),e.noFill(),function(e,t){e.push(),e.stroke(255,200),e.strokeWeight(2),e.line(0,0,1e3*Math.cos(t),1e3*Math.sin(t)),e.noStroke();for(var n=0;n<20;n++)e.fill(255,2.5*(20-n)),e.beginShape(),e.vertex(0,0),e.vertex(1e3*Math.cos(t-.02*(n-1)),1e3*Math.sin(t-.02*(n-1))),e.vertex(1e3*Math.cos(t-.02*n),1e3*Math.sin(t-.02*n)),e.endShape(e.CLOSE);e.pop()}(e,n),function(e,t){e.push(),e.fill("#f24"),e.noStroke(),e.ellipse(0,0,8,8),e.rectMode(e.CENTER),e.stroke(255),e.noFill(),e.strokeWeight(2),e.rect(0,0,20,20),e.rotate(e.frameCount/100),e.stroke(255,20),e.rect(0,0,20,20),e.pop(),e.push(),e.fill(255,200),e.text(t,20,12),e.pop()}(e,i.centerName),function(e){e.push(),e.stroke(255,255),e.strokeWeight(10),e.rect(-e.width/2,-e.height/2,e.width,e.height),e.strokeWeight(1),e.stroke(255,30),e.rect(-e.width/2+10,-e.height/2+10,e.width-20,e.height-20),e.stroke(255,255),e.strokeWeight(2),e.line(-e.width/2,0,-e.width/2+20,0),e.line(e.width/2,0,e.width/2-20,0),e.line(0,-e.height/2,0,-e.height/2+20),e.line(0,e.height/2,0,e.height/2-20),e.noStroke(),e.fill(255,200),e.textAlign(e.CENTER),e.text("W",-e.width/2+20+15,5),e.text("E",e.width/2-20-15,5),e.text("N",0,-e.height/2+20+20),e.text("S",0,e.height/2-20-10),e.pop()}(e),function(e){var t=(new Date).getSeconds();e.fill(255),e.rect(-e.width/2+t%5*30+20,e.height/2-75,25,6),e.stroke(255),e.noFill(),e.rect(-e.width/2+(t+1)%5*30+20,e.height/2-75,25,6)}(e)}}function x(e,t,n){return.5*Math.pow(Math.abs(e*t/10),n)}function C(e,t,n){return Math.ceil(10*Math.pow(e/.25,1/n)/t)}function E(e,t,n,a,o){return e/2+Math.sin(t/(10+10*n)+a/360*2*Math.PI*10)*o}var D=n(31);D.initializeApp({apiKey:"AIzaSyBlfFaGBx7B_nBnlR29yhJAr6kPjqAdLfo",authDomain:"test-84ae7.firebaseapp.com",databaseURL:"https://test-84ae7.firebaseio.com",projectId:"test-84ae7",storageBucket:"test-84ae7.appspot.com",messagingSenderId:"762464277938"});var I=D.database().ref().child("earthlocations"),N=(n(101),!1),F={},A=function(){var e=navigator.userAgent||navigator.vendor||window.opera;if(/android|windows phone/i.test(e))return"1. Open the Chrome app.\n\n2. Find and tap Settings.\n\n3. Tap Site settings > Location.\n\n4. Turn Location on.";if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream)return'1. Open the settings app.\n\n2. Find and tap Safari/Chrome.\n\n3. Tap Location.\n\n4. Select "While Using the App".';return"Enable Location Permission"}();function W(e){console.log("yo!"),N=!0,F={lat:e.coords.latitude,lon:e.coords.longitude,timeStamp:Date.now(),date:Date(Date.now()),leave:!1}}function L(e){switch(console.log("fail!"+A),N=!1,e.code){case 1:console.log("Permission denied");break;case 2:console.log("Permission allowed, location disabled");break;case 3:console.log("Permission allowed, timeout reached")}}var B=n(32),T=n(24),z=n(33);n(102),n(103);function R(e){var t=Object(a.useState)(e.show),n=Object(B.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(""),l=Object(B.a)(c,2),s=l[0],h=l[1],d=function(){i(!1),alert("name:"+s),""!==s&&e.onChange(s)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{show:r,centered:!0,dialogClassName:"name-modal-dialog",backdropClassName:"name-modal-backdrop"},o.a.createElement(T.a.Body,{bsPrefix:"name-modal-body"},o.a.createElement("label",{htmlFor:"name"},"Name your session")," ",o.a.createElement("br",null),o.a.createElement("input",{id:"name",type:"text",placeholder:e.name,value:s,onChange:function(e){return h(e.target.value)}})),o.a.createElement(T.a.Footer,{bsPrefix:"name-modal-footer"},o.a.createElement(z.a,{variant:"dark",size:"sm",onClick:d},"Default"),o.a.createElement(z.a,{variant:"light",size:"sm",onClick:d},"Save"))))}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U="generative_geo_id",J="generative_name",H="generative_geo_id_time",K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={gp:{},allLocations:[],dataPoint:[]},n.initGPS=function(){},n.updateDataSet=function(e){console.log("updateDataset"),n.setState({dataPoint:Object.entries(e).filter((function(e){return e[0]!==F.key})).map((function(e){return _({},e[1],{key:e[0]})}))})},n.checkData=function(e){Object.entries(e).forEach((function(e){("key"in e[1]||I.child(e[0]).child("key").set(e[0]),"showId"in e[1]||!e[0]||I.child(e[0]).child("showId").set(q(e[0])),e[1].timeStamp&&e[1].lat&&e[1].lon)?Date.now()-e[1].timeStamp>6e3?e[1].leave||I.child(e[0]).child("leave").set(!0):e[1].leave&&I.child(e[0]).child("leave").set(!1):I.child(e[0]).remove()}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("setupGPS"),navigator.geolocation.watchPosition(W,L),I.on("value",(function(t){e.updateDataSet(t.val())}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,N&&o.a.createElement(V,{dataPoint:this.state.dataPoint}))}}]),t}(a.Component),V=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={data:{globalScale:25e4,globalPow:.58,maxLineLength:100,radioSpeed:.8,lat:F.lat,lon:F.lon,centerName:"center"},name:"center"},n.addGPSKey=function(){var e,t=localStorage.getItem(U),a=localStorage.getItem(H),o=localStorage.getItem(J);t&&Date.now()-a<36e5?(console.log("Old Id Detected! use "+t),e=t,localStorage.setItem(H,Date.now())):(e=I.push(F).key,o=q(e),console.log("Generate new id "+e),localStorage.setItem(U,e),localStorage.setItem(H,Date.now())),F.key=e,o||(o=q(e)),F.showId=o,I.child(e).set(F),n.changeCenterName2(o,!1)},n.changeCenterName2=function(e,t){alert("change name:"+e),localStorage.setItem(J,e),t&&I.child(F.key).child("showId").set(e),n.setState({data:_({},n.state.data,{centerName:e}),name:e})},n.changeCenterName=function(e){alert("change name:"+e),localStorage.setItem(J,e),I.child(F.key).child("showId").set(e),n.setState({data:_({},n.state.data,{centerName:e}),name:e})},n.saveControlData=function(){var e=n.state.data;sessionStorage.setItem("controlData",JSON.stringify(_({},e)))},n.handleWindowBeforeUnload=function(e){I.child(F.key).child("leave").set(!0)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.handleWindowBeforeUnload),this.addGPSKey()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleWindowBeforeUnload)}},{key:"render",value:function(){var e=this.state.data,t=this.props.dataPoint;return o.a.createElement(o.a.Fragment,null,o.a.createElement(R,{show:!0,name:e.centerName,onChange:this.changeCenterName}),o.a.createElement(f.a,{sketch:M,dataPoint:t,name:this.state.name,configData:e,myId:F.key}))}}]),t}(a.Component),q=function(e){return"A"+e.split("").map((function(e){return e.charCodeAt(0)})).reduce((function(e,t){return e*t}),1)%1e3},Q=K,X=(n(106),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(Q,null)}}]),t}(o.a.Component));i.a.render(o.a.createElement(X,null),document.getElementById("root"))},53:function(e,t,n){e.exports=n(107)},58:function(e,t,n){},88:function(e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.4ec63c8a.chunk.js.map