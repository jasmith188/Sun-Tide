(this["webpackJsonpsun-tide"]=this["webpackJsonpsun-tide"]||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){e.exports=a(27)},23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),l=a.n(c),i=(a(23),a(11)),o=a.n(i),s=a(14),u=a(4),m=a(5),d=a(9),p=a(8),h=(a(10),function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"current-weather"},n.a.createElement("h2",null,e.city&&e.country&&n.a.createElement("p",null,"Location: ",e.city,", ",e.country)),n.a.createElement("div",{className:"current-card"},e.temperature&&n.a.createElement("p",null,"Current Temperature: ",Math.round(e.temperature),"\xb0F"),e.feelsLike&&n.a.createElement("p",null,"Feels Like: ",Math.round(e.feelsLike),"\xb0F"),e.humidity&&n.a.createElement("p",null,"Current Humidity: ",e.humidity,"%"),e.description&&n.a.createElement("p",null,"Current Description: ",e.description),e.icon&&n.a.createElement("p",null,"icon here:",e.icon),e.error&&n.a.createElement("p",null,(void 0).props.error," "))))}),y=a(25),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=new Date,t=1e3*this.props.day.dt;e.setTime(t);var a="owf owf-"+this.props.day.weather[0].id+"owf-5x red";return n.a.createElement("div",null,n.a.createElement("div",{className:""},n.a.createElement("div",{className:"card"},n.a.createElement("h3",{className:"card-title"},y(e).format("dddd")),n.a.createElement("p",{className:"text"},y(e).format("MMMM Do, h:mm a")),n.a.createElement("i",{className:a}),n.a.createElement("h1",null,Math.round(this.props.day.main.temp),"\xb0F"),n.a.createElement("h5",null,"Feels Like: ",Math.round(this.props.day.main.feels_like),"\xb0F"),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},this.props.day.weather[0].description)))))}}]),a}(n.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"form"},n.a.createElement("form",{onSubmit:this.props.getWeather},n.a.createElement("input",{type:"text",name:"city",placeholder:"City"}),n.a.createElement("select",{className:"form-control",id:"country"},n.a.createElement("option",null,"United States"),n.a.createElement("option",null,"Germany"),n.a.createElement("option",null,"Mexico"),n.a.createElement("option",null,"France"),n.a.createElement("option",null,"Spain")),n.a.createElement("button",null,"Get Weather")))}}]),a}(n.a.Component),v=a(16),b=a(17),w="c5fc998f4951203abe90d5f6c1f39d7b",k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={dailyData:[]},e.getWeather=function(){var t=Object(s.a)(o.a.mark((function t(a){var r,n,c,l,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=a.target.elements.city.value,n=a.target.elements.country.value,t.next=5,fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=".concat(r,",").concat(n,"&appid=").concat(w,"&units=imperial"));case 5:return c=t.sent,t.next=8,c.json();case 8:l=t.sent,i=l.list.filter((function(e){return e.dt_txt.includes("18:00:00")})),r&&n?(console.log(e.state),e.setState({temperature:l.list[0].main.temp,city:l.city.name,country:l.city.country,humidity:l.list[0].main.humidity,description:l.list[0].weather[0].description,feelsLike:l.list[0].main.feels_like,error:"",dailyData:i})):e.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,feelsLike:void 0,error:"Please type a value...",fullData:void 0,dailyData:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.formatDayCards=function(){return e.state.dailyData.map((function(e,t){return n.a.createElement(E,{day:e,key:t})}))},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"title-card"},n.a.createElement("div",{className:"title"},"Sun Tide"),n.a.createElement("br",null),n.a.createElement("div",{className:"sub-title"},"Get Your Current & 5 Day Forecast"),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"top-form"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(f,{getWeather:this.getWeather})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(b.a,{className:"current-weather-card"},n.a.createElement(h,{classname:"current-weather",temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,feelsLike:this.state.feelsLike,error:this.state.error}))))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(v.a,null,this.formatDayCards()))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ada144fe.chunk.js.map