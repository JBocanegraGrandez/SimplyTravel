(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(74),i=a.n(l),o=(a(86),a(2)),s=a(190),c=(a(91),a(189)),m=a(192),u=a(188),d=a(191),p=a(193),f=function(e){return{loggedIn:Boolean(e.session.id)}},h=Object(p.a)(Object(o.b)(f)(function(e){var t=e.component,a=e.path,n=e.loggedIn,l=e.exact;return r.a.createElement(u.a,{path:a,exact:l,render:function(e){return n?r.a.createElement(d.a,{to:"/"}):r.a.createElement(t,e)}})})),g=(Object(p.a)(Object(o.b)(f)(function(e){var t=e.component,a=e.path,n=e.loggedIn,l=e.exact;return r.a.createElement(u.a,{path:a,exact:l,render:function(e){return n?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/login"})}})})),a(14)),y=a.n(g),v=a(23),E=a.n(v),b=(window.$,function(e){e?y.a.defaults.headers.common.Authorization=e:delete y.a.defaults.headers.common.Authorization}),N=function(e){return{type:"RECEIVE_CURRENT_USER",payload:e}},T=function(){return function(e){localStorage.removeItem("jwtToken"),b(!1),e(N({}))}},k=function(e){var t=e.currentUser,a=e.logoutUser;return t?r.a.createElement("div",{className:"menu-right"},r.a.createElement("div",{className:"about-us-header-div"},r.a.createElement(c.a,{to:"/about",className:"link-blank"},r.a.createElement("button",null,"About us"))),r.a.createElement("div",{className:"main-header-divider"}),r.a.createElement("div",{className:"log-in-header-div2"},r.a.createElement(c.a,{to:"/map",className:"link-blank2"},r.a.createElement("button",null,r.a.createElement("img",{className:"world-logo",src:"http://kabramkrafts.com/wp-content/uploads/2017/04/earth.svg"})))),r.a.createElement("div",{className:"sign-up-header-div"},r.a.createElement(c.a,{to:"/",className:"link-blank"},r.a.createElement("button",{onClick:a},"Log out")))):r.a.createElement("div",{className:"menu-right"},r.a.createElement("div",{className:"about-us-header-div"},r.a.createElement(c.a,{to:"/about",className:"link-blank"},r.a.createElement("button",null,"About us"))),r.a.createElement("div",{className:"main-header-divider"}),r.a.createElement("div",{className:"log-in-header-div"},r.a.createElement(c.a,{to:"/login",className:"link-blank"},r.a.createElement("button",null,"Log In"))),r.a.createElement("div",{className:"sign-up-header-div"},r.a.createElement(c.a,{to:"/signup",className:"link-blank"},r.a.createElement("button",null,"Sign Up"))))},w=Object(o.b)(function(e){return{currentUser:e.session.id}},function(e){return{logoutUser:function(){return e(T())}}})(k),j=function(){return r.a.createElement("div",{className:"main-header-container"},r.a.createElement("img",{className:"home-icon",src:"https://mbtskoudsalg.com/images/travel-png-images-7.png"}),r.a.createElement("div",{className:"main-header-menu-wrap"},r.a.createElement("div",{className:"main-header-menu-left"},r.a.createElement(c.a,{to:"/",className:"logo-link"},"Simply Travel")),r.a.createElement("div",null,r.a.createElement(w,null))))},O=a(15),S=a(6),C=a(7),x=a(9),_=a(8),R=a(10),I=a(4),L=a(35),D=a.n(L),A=a(36),P=a.n(A),U=a(37),F=a.n(U),V=a(38),B=a.n(V),M=a(39),q=a.n(M),z=a(40),W=a.n(z),H=a(41),$=a.n(H),G=a(42),Y=a.n(G),J=a(43),X=a.n(J),K=a(44),Z=a.n(K),Q=a(45),ee=a.n(Q),te=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).state={first_name:"",last_name:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(I.a)(Object(I.a)(a))),a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"update",value:function(e){var t=this;return function(a){return t.setState(Object(O.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault(),e.stopPropagation();var t=Object.assign({},this.state);this.props.signup(t)}},{key:"renderErrors",value:function(){if(0===this.props.errors.length)return null;var e=Object.values(this.props.errors);return console.log(this.props.errors),r.a.createElement("div",{className:"errors"},r.a.createElement("ul",null,e.map(function(e,t){return r.a.createElement("li",{key:"error-".concat(t)},e)})))}},{key:"render",value:function(){var e=[D.a,P.a,F.a,B.a,q.a,W.a,$.a,Y.a,X.a,Z.a,ee.a][Math.floor(11*Math.random())];return r.a.createElement("div",{className:"background-container",style:{backgroundImage:"url(".concat(e,")")}},r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("div",{className:"auth-main"},this.renderErrors(),r.a.createElement("div",{className:"main-left"},r.a.createElement("div",{className:"main-left-wrapper"},r.a.createElement("form",Object(O.a)({className:"form"},"className","login-form-box"),r.a.createElement("div",{className:"signup-form-top-container"},r.a.createElement("div",{className:"top-signup-div"}),r.a.createElement("div",{className:"signup-form-top-text"},r.a.createElement("h2",{className:"signup-title"},"Sign Up "))),r.a.createElement("div",{className:"signup-form-bot-container"},r.a.createElement("div",{className:"signup-form-bot"},r.a.createElement("input",{type:"text",placeholder:"First Name",onChange:this.update("first_name"),className:"first-name",value:this.state.first_name,required:!0}),r.a.createElement("input",{type:"text",placeholder:"Last Name",onChange:this.update("last_name"),className:"last-name",value:this.state.last_name,required:!0}),r.a.createElement("input",{type:"email",value:this.state.email,placeholder:"Email",onChange:this.update("email"),className:"login-input",required:!0}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:this.update("password"),className:"login-input",value:this.state.password,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{className:"sign-up-button",onClick:this.handleSubmit},"Sign Up"),r.a.createElement("div",{className:"fine-print"},r.a.createElement("p",{className:"fine-print2"},"Already on Simple Travel?",r.a.createElement(c.a,{to:"/login",onClick:this.props.clearErrors,className:"link"}," ","Log in")))))))))))}}]),t}(r.a.Component),ae=Object(o.b)(function(e){return{errors:e.errors.session}},function(e){return{signup:function(t){return e((a=t,function(e){y.a.post("api/users/register",a).then(function(t){var a=t.data.token;localStorage.setItem("jwtToken",a),b(a);var n=E()(a);e(N(n))}).catch(function(e){return console.log(e)})}));var a},clearErrors:function(){return e(function(e){e({type:"CLEAR_ALL_ERRORS"})})}}})(te),ne=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).state={email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(I.a)(Object(I.a)(a))),a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"update",value:function(e){var t=this;return function(a){return t.setState(Object(O.a)({},e,a.currentTarget.value))}}},{key:"demo",value:function(e){var t=this;e.preventDefault(),this.setState({email:"demo@demo.com",password:"demodemo"},function(){return setTimeout(function(){return t.ogLogin(e)},1e3)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.ogLogin(e)}},{key:"ogLogin",value:function(e){var t=Object.assign({},this.state);this.props.login(t)}},{key:"renderErrors",value:function(){if(0===this.props.errors.length)return null;var e=Object.values(this.props.errors);return console.log(this.props.errors),r.a.createElement("div",{className:"errors"},r.a.createElement("ul",null,e.map(function(e,t){return r.a.createElement("li",{key:"error-".concat(t)},e)})))}},{key:"render",value:function(){var e=[D.a,P.a,F.a,B.a,q.a,W.a,$.a,Y.a,X.a,Z.a,ee.a][Math.floor(11*Math.random())];return r.a.createElement("div",{className:"background-container",style:{backgroundImage:"url(".concat(e,")")}},r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("div",{className:"auth-main"},this.renderErrors(),r.a.createElement("div",{className:"main-left"},r.a.createElement("div",{className:"main-left-wrapper"},r.a.createElement("form",Object(O.a)({className:"form",onSubmit:this.handleSubmit},"className","login-form-box"),r.a.createElement("div",{className:"signup-form-top-container"},r.a.createElement("div",{className:"top-login-div"}),r.a.createElement("div",{className:"signup-form-top-text"},r.a.createElement("h2",{className:"signup-title"},"Log In "))),r.a.createElement("div",{className:"signup-form-bot-container"},r.a.createElement("div",{className:"signup-form-bot"},r.a.createElement("input",{type:"email",value:this.state.email,placeholder:"Email",onChange:this.update("email"),className:"login-input",required:!0}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:this.update("password"),className:"login-input",value:this.state.password,required:!0}),r.a.createElement("div",{className:"question"},r.a.createElement("p",{className:"fine-print"},r.a.createElement("a",{onClick:this.demo.bind(this),className:"link"},"Demo Log in?"))),r.a.createElement("button",{className:"sign-up-button",type:"submit"},"Log In"),r.a.createElement("div",{className:"fine-print"},r.a.createElement("p",{className:"fine-print2"},"New to Simply Travel? ",r.a.createElement(c.a,{onClick:this.props.clearErrors,to:"/signup",className:"link"}," ","Sign up")))))))))))}}]),t}(r.a.Component),re=Object(o.b)(function(e){return{errors:e.errors.session}},function(e){return{login:function(t){return e((a=t,function(e){y.a.post("/api/users/login",a).then(function(t){var a=t.data.token;localStorage.setItem("jwtToken",a),b(a);var n=E()(a);e(N(n))}).catch(function(t){return e({type:"GET_ERRORS",payload:t.response.data})})}));var a},clearErrors:function(){return e(function(e){e({type:"CLEAR_ALL_ERRORS"})})}}})(ne),le=a(77),ie=a.n(le),oe=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).getHotels=function(){y.a.get("http://api.sandbox.amadeus.com/v1.2/hotels/search-circle?latitude=".concat(a.state.lat,"&longitude=").concat(a.state.lng,"&radius=50&check_in=").concat(a.state.checkIn,"&check_out=").concat(a.state.checkOut,"&number_of_results=50&apikey=AvrAMRvVBrXJA89mKwfYTtRWkufuwAZI")).then(function(e){a.setState({data:e.data.results})})},a.createStars=function(e){return void 0===e.awards[0]?0:e.awards[0].rating},a.checkBreakfast=function(e){var t;return e.rooms.forEach(function(e){e.descriptions.forEach(function(e){t=e.toLowerCase().includes("breakfast")?r.a.createElement("div",null,'"there is breakfast"'):r.a.createElement("div",null,'"NO breakfast"')})}),console.log(t),t},a.state={data:[],lat:"37.7749",lng:"-122.4194",checkIn:"2018-11-01",checkOut:"2018-11-03"},a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"hotels"},r.a.createElement("form",{onSubmit:this.getHotels},r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",{className:"hotels-container"},this.state.data.map(function(a){return r.a.createElement("div",{className:"individual-selection"},r.a.createElement("div",{className:"hotel-stats-container"},r.a.createElement("div",{className:"hotel-name-price-container"},r.a.createElement("span",{className:"hotel-name"},a.property_name),r.a.createElement("span",{className:"hotel-price"},a.total_price.amount," USD - Total")),r.a.createElement("div",{className:"hotel-rating"}),r.a.createElement("div",{className:"hotel-address"},a.address.line1," ",r.a.createElement("br",null),a.address.city,",\xa0",a.address.postal_code,"\xa0",a.address.country),r.a.createElement("div",{className:"marketing-text"},a.marketing_text,r.a.createElement("br",null),a.amenities.map(function(e){if(e.amenity.toLowerCase().includes("internet"))return r.a.createElement("div",null,"render internet icons here")})),r.a.createElement("div",{className:"image-container"},e=t.createStars(a),r.a.createElement("div",null,t.checkBreakfast(a))),r.a.createElement("div",{className:"testing"},r.a.createElement(ie.a,{name:"rate1",starCount:5,value:e}))))}))))}}]),t}(r.a.Component),se=(window.$,function(e){return{type:"RECEIVE_DESTINATION",destination:e}}),ce=function(e){return se(e)},me=(window.$,window.$,function(e){return function(e){return{type:"RECEIVE_LOCATION",location:e}}(e)}),ue=function(e){var t=e.flight;return r.a.createElement("div",{className:"flight-items-container"},r.a.createElement("div",{className:"flight-items"},"From: ",t.origin.airport," Terminal: ",t.origin.terminal),r.a.createElement("div",{className:"flight-items"},"Destination: ",t.destination.airport,"Terminal: ",t.destination.terminal),r.a.createElement("div",{className:"flight-items"},"Departure Date: ",t.departs_at),r.a.createElement("div",{className:"flight-items"},"Travel Class: ",t.booking_info.travel_class))},de=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).state={flight:null,currentDate:null,nearestAirport:null,destinationAirport:null,dropdownVisible:!1},a.flightPriceRequest=a.flightPriceRequest.bind(Object(I.a)(Object(I.a)(a))),a.nearestAirport=a.nearestAirport.bind(Object(I.a)(Object(I.a)(a))),a.renderDropDown=a.renderDropDown.bind(Object(I.a)(Object(I.a)(a))),a.toggleDropdown=a.toggleDropdown.bind(Object(I.a)(Object(I.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(I.a)(Object(I.a)(a))),a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.pinFlightPrice({flight:this.state.flight})}},{key:"nearestAirport",value:function(e,t,a,n){var r=this;y.a.get("https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey= need key here &latitude=".concat(t,"&longitude=").concat(e)).then(function(e){r.setState({nearestAirport:e.data})}).catch(function(e){console.log(e)}),y.a.get("https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey= need key here &latitude=".concat(n,"&longitude=").concat(a)).then(function(e){r.setState({destinationAirport:e.data})}).catch(function(e){console.log(e)})}},{key:"flightPriceRequest",value:function(e,t){var a=this,n=new Date,r=n.getFullYear(),l=n.getMonth()+1,i=n.getDate()+1;console.log(r),console.log(l),console.log(i),y.a.get("https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey= need key here &origin=".concat(e,"&destination=").concat(t,"&departure_date=").concat(r,"-").concat(l,"-").concat(i,"&number_of_results=1")).then(function(e){a.setState({flight:e.data})}).catch(function(e){console.log(e)})}},{key:"stringifyBoolean",value:function(e){return!0===e?"Yes":"No"}},{key:"renderDropDown",value:function(e){return this.state.dropdownVisible?r.a.createElement("div",{className:"flight-info-and-booking-container"},e,r.a.createElement("form",{className:"flight-booking",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"flight-booking-submit",type:"submit",value:"Book Now!"}))):null}},{key:"toggleDropdown",value:function(){var e=!this.state.dropdownVisible;this.setState({dropdownVisible:e})}},{key:"availFlight",value:function(e){var t=this.state.flight.results[0].itineraries[0].outbound,a=t.flights[t.flights.length-1];return r.a.createElement("div",{className:"initial-flight-display-container"},r.a.createElement("div",{className:"initial-flight-display",onClick:this.toggleDropdown},r.a.createElement("img",{className:"flight-icon",src:""}),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Price:"),r.a.createElement("div",{className:"initial-flight-info"},this.state.flight.results[0].fare.total_price)),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Duration:"),r.a.createElement("div",{className:"initial-flight-info"},t.duration)),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Path:"),r.a.createElement("div",{className:"initial-flight-info"},t.flights[0].origin.airport," - ",a.destination.airport)),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Stops:"),r.a.createElement("div",{className:"initial-flight-info"},t.flights.length-1)),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"One"),r.a.createElement("div",{className:"initial-flight-info"},"Way"))),this.renderDropDown(e))}},{key:"noFlight",value:function(){return r.a.createElement("div",{className:"initial-flight-display"},r.a.createElement("img",{className:"flight-icon",src:""}),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Price:"),r.a.createElement("div",{className:"initial-flight-info"},"-")),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Duration:"),r.a.createElement("div",{className:"initial-flight-info"},"-")),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Path:"),r.a.createElement("div",{className:"initial-flight-info"},"-")),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"Stops:"),r.a.createElement("div",{className:"initial-flight-info"},"-")),r.a.createElement("div",{className:"initial-flight-info-container"},r.a.createElement("div",{className:"initial-flight-info"},"One"),r.a.createElement("div",{className:"initial-flight-info"},"Way")))}},{key:"render",value:function(){var e;return null===this.state.nearestAirport&&null===this.state.destinationAirport&&null===this.state.flight&&this.nearestAirport(this.props.location.lng,this.props.location.lat,this.props.destination.lng,this.props.destination.lat),null!==this.state.nearestAirport&&null!==this.state.destinationAirport&&null===this.state.flight&&this.flightPriceRequest(this.state.nearestAirport[0].airport,this.state.destinationAirport[0].airport),this.state.flight&&(e=this.state.flight.results[0].itineraries[0].outbound.flights.map(function(e){return r.a.createElement(ue,{key:e.arrives_at,flight:e})})),r.a.createElement("div",{className:"flight-info-main-container"},e?this.availFlight(e):this.noFlight())}}]),t}(r.a.Component),pe=Object(o.b)(function(e){return{location:e.entities.location,destination:e.entities.destination,flightPrice:e.entities.flightPrice}},function(e){return{pinLocation:function(t){return e(me(t))},pinDestination:function(t){return e(ce(t))},pinFlightPrice:function(t){return e(function(e){return function(e){return{type:"RECEIVE_FLIGHT_PRICE",flightPrice:e}}(e)}(t))}}})(de),fe=(a(116),a(17)),he=a.n(fe),ge=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.state={address:""},a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"handleSelect",value:function(e){var t=this;Object(fe.geocodeByAddress)(e).then(function(e){return Object(fe.getLatLng)(e[0])}).then(function(e){t.props.pinLocation(e),console.log("Success",e)}).catch(function(e){return console.error("Error",e)})}},{key:"render",value:function(){return r.a.createElement(he.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect.bind(this),googleCallbackName:"myCallbackFunLocationSearchInput\nLocationSearchInputc"},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",{className:"location-input-container"},r.a.createElement("input",t({placeholder:"Current location ...",className:"location-search-input"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))})))})}}]),t}(r.a.Component),ye=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).state={address:""},a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"openNav",value:function(){document.getElementById("mySidenav").style.transform="translateX(0)"}},{key:"closeNav",value:function(){document.getElementById("mySidenav").style.transform="translateX(-100%)"}},{key:"render",value:function(){return r.a.createElement("div",{className:"places-autocomplete"},r.a.createElement("div",{className:"open-button-container"},r.a.createElement("img",{src:"https://www.atipso.com/wp-content/uploads/2014/09/icon_send.png",className:"open-button",onClick:this.openNav}),r.a.createElement("div",{id:"mySidenav",className:"sidenav"},r.a.createElement("div",{className:"location-container"},r.a.createElement("span",{className:"sidebar-panel",onClick:this.openNav},"Your destination is one click away!")),r.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/arrows-ii/24/Material_icons-02-55-512.png",className:"closebtn",onClick:this.closeNav}),r.a.createElement("div",{className:"location-search-container"},r.a.createElement(ge,null)),r.a.createElement("div",{className:"flights-container"},r.a.createElement(pe,null),r.a.createElement("div",null,r.a.createElement("img",{className:"airline-logos",src:"http://flyingfood.com/wp-content/uploads/2014/01/airline-Catering-Customers-Slide5-1170x300.jpg",alt:""}))),r.a.createElement("div",{className:"hotels-container"},r.a.createElement("div",{className:"hotels-inside-container"},r.a.createElement("img",{src:"https://www.bingleywalkersarewelcome.org.uk/wp-content/uploads/2015/06/icon-hotel.png",className:"hotel-icon"}),r.a.createElement("span",{className:"hotel-name"},"Fairmont Hotel"),r.a.createElement("span",{className:"hotel-price"},"$138")),r.a.createElement("div",{className:"hotels-inside-container-2"},r.a.createElement("span",{className:"hotel-location"},"950 Mason St, San Francisco, CA 94108, United States"),r.a.createElement("div",{className:"container-3"},r.a.createElement("span",{className:"hotel-rating"},"4 Stars",r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png",className:"rating-img"})),r.a.createElement("span",{className:"optional-breakfast"}," ","Breakfast",r.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/rcons-drink/16/tea-512.png",className:"drink-icon"})),r.a.createElement("span",{className:"optional-wifi"}," ","Free Wifi",r.a.createElement("img",{src:"https://images.vexels.com/media/users/3/141424/isolated/preview/e0bb2e1b2183a2d1e675f215ce236e21-wifi-icon-by-vexels.png",className:"wifi-icon"}))))),r.a.createElement("div",{className:"aboutus-container"},r.a.createElement("div",{className:"dropdown-categories"},r.a.createElement("a",{href:"#"},"About Us"),r.a.createElement("a",{href:"/login"},"Log In"),r.a.createElement("a",{href:"/signup"},"Sign Up"),r.a.createElement("a",{href:"#"},"Take me somewhere"))))))}}]),t}(r.a.Component),ve=Object(o.b)(function(e){return{}},function(e){return{}})(ye),Ee=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).state={markers:{},currentLocation:null,gmapsLoaded:!1},a.styles={default:null,silver:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],night:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],retro:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],hiding:[{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]}]},a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){window.initMap()}},{key:"updateStyle",value:function(e){window.map.setOptions({styles:this.styles[e.currentTarget.value]})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement("select",{onChange:this.updateStyle.bind(this),id:"style-selector",className:"selector-control"},r.a.createElement("option",{value:"default"},"Default"),r.a.createElement("option",{value:"silver"},"Silver"),r.a.createElement("option",{value:"night"},"Night mode"),r.a.createElement("option",{value:"retro",selected:"selected"},"Retro"),r.a.createElement("option",{value:"hiding"},"Hide features")),r.a.createElement("div",{id:"google-map",className:"google-map"}))}}]),t}(r.a.Component),be=Object(o.b)(function(e){return{location:e.entities.location,destination:e.entities.destination}},function(e){return{pinLocation:function(t){return e(me(t))},pinDestination:function(t){return e(ce(t))}}})(Ee),Ne=Object(o.b)(null,function(e){return{pinLocation:function(t){return e(me(t))},pinDestination:function(t){return e(ce(t))}}})(ge),Te=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(_.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){Object(fe.geocodeByAddress)(e).then(function(e){return Object(fe.getLatLng)(e[0])}).then(function(e){a.props.pinDestination(e),console.log("Success",e)}).catch(function(e){return console.error("Error",e)})},a.state={address:""},a}return Object(R.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement(he.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,googleCallbackName:"myCallbackFunc"},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",{className:"location-input-container"},r.a.createElement("input",t({placeholder:"Where do you want to go ...",className:"location-search-input"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))})))})}}]),t}(r.a.Component),ke=Object(o.b)(null,function(e){return{pinLocation:function(t){return e(me(t))},pinDestination:function(t){return e(ce(t))}}})(Te);function we(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("h1",null,"SimplyTravel"),r.a.createElement(ke,null),r.a.createElement(Ne,null))}var je=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(j,null),r.a.createElement(c.a,{to:"/",className:"header-link"})),r.a.createElement(m.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:we}),r.a.createElement(u.a,{exact:!0,path:"/flightprice",component:pe}),r.a.createElement(h,{exact:!0,path:"/login",component:re}),r.a.createElement(h,{exact:!0,path:"/signup",component:ae}),r.a.createElement(u.a,{exact:!0,path:"/hotels",component:oe}),r.a.createElement(u.a,{path:"/map",component:be})))},Oe=function(e){var t=e.store;return r.a.createElement(o.a,{store:t},r.a.createElement(s.a,null,r.a.createElement(je,null)))},Se=a(13),Ce=a(78),xe=a(79),_e=a.n(xe),Re=a(80),Ie=a.n(Re),Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"SET_CURRENT_USER":return Ie()({},e,Object(O.a)({},t.payload.handle,t.payload));default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_LOCATION":return t.location;default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_DESTINATION":return t.destination;default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_FLIGHT_PRICE":return t.flightPrice;default:return e}},Ue=Object(Se.c)({users:Le,destination:Ae,location:De,flightPrice:Pe}),Fe=Object.freeze({id:null}),Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_CURRENT_USER":return{id:t.payload.id,handle:t.payload.handle,email:t.payload.email};default:return e}},Be=Object(Se.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"GET_ERRORS":return t.payload;case"RECEIVE_CURRENT_USER":case"CLEAR_ALL_ERRORS":return[];default:return e}}}),Me=Object(Se.c)({entities:Ue,session:Ve,errors:Be}),qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Se.d)(Me,e,Object(Se.a)(Ce.a,_e.a))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.addEventListener("DOMContentLoaded",function(){var e=qe();if(localStorage.jwtToken){b(localStorage.jwtToken);var t=E()(localStorage.jwtToken);e.dispatch(N(t));var a=Date.now()/1e3;t.exp<a&&(e.dispatch(T()),window.location.href="/login")}window.getState=e.getState,i.a.render(r.a.createElement(Oe,{store:e}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})},35:function(e,t,a){e.exports=a.p+"static/media/1.134b4ab6.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/2.ec8ac752.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/3.c2aaf778.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/4.86d4e903.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/5.8fc2ca65.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/6.52135f9b.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/7.025f3964.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/8.8a80d00d.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/9.93c1efb7.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/10.8641a5d5.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/11.c995ae9d.jpg"},81:function(e,t,a){e.exports=a(187)},86:function(e,t,a){},91:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.836c4048.chunk.js.map