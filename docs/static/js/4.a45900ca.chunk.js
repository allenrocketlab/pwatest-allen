(this["webpackJsonppwatest-allen"]=this["webpackJsonppwatest-allen"]||[]).push([[4],{125:function(e,t,n){"use strict";n.r(t);n(83);var l=n(0),c=n.n(l),o=n(56);t.default=function(){return Object(l.useEffect)((function(){var e,t=new o.BrowserMultiFormatReader;console.log("ZXing code reader initialized"),t.getVideoInputDevices().then((function(n){var l=document.getElementById("sourceSelect");(e=n[0].deviceId,n.length>=1)&&(n.forEach((function(e){var t=document.createElement("option");t.text=e.label,t.value=e.deviceId,l.appendChild(t)})),l.onchange=function(){e=l.value},document.getElementById("sourceSelectPanel").style.display="block");document.getElementById("startButton").addEventListener("click",(function(){t.decodeFromVideoDevice(e,"video",(function(e,t){e&&(console.log(e),document.getElementById("result").textContent=e.text),!t||t instanceof o.NotFoundException||(console.error(t),document.getElementById("result").textContent=t)})),console.log("Started continous decode from camera with id ".concat(e))})),document.getElementById("resetButton").addEventListener("click",(function(){t.reset(),document.getElementById("result").textContent="",console.log("Reset.")}))})).catch((function(e){console.error(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h1",{className:"title"},"Scan a product"),c.a.createElement("div",null,c.a.createElement("button",{id:"startButton",className:"actionButton"},"Start"),c.a.createElement("button",{id:"resetButton",className:"actionButton"},"Reset")),c.a.createElement("div",{id:"sourceSelectPanel",style:{display:"none"}},c.a.createElement("label",{htmlFor:"sourceSelect",className:"sourceSelect"},"Change video source:"),c.a.createElement("select",{id:"sourceSelect",className:"sourceSelect",style:{maxWidth:"400px"}})),c.a.createElement("div",{className:"resultOutput"},c.a.createElement("label",null,"Result:"),c.a.createElement("div",null,c.a.createElement("label",{id:"result"}))),c.a.createElement("div",null,c.a.createElement("video",{id:"video",width:"70%",height:"auto",style:{border:"1px solid gray"}}))))}},83:function(e,t,n){}}]);
//# sourceMappingURL=4.a45900ca.chunk.js.map