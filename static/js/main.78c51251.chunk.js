(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(3),c=t.n(o),r=(t(13),t(1));t(15);function s(){var e=Object(n.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return l.a.createElement("div",{className:"container",style:t},l.a.createElement("h2",{className:"my-3"},"About Us"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),l.a.createElement("div",{className:"container my-3"},l.a.createElement("button",{onClick:function(){"black"===t.color?(o({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},type:"button",className:"btn btn-info"},i)))}function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode," navbar-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},e.AboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":"true",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function d(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"8",value:o,onChange:function(e){c(e.target.value)},placeholder:"Write Here",style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to UpperCase","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to LowerCase","success")}},"Convert to Lowercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){c("")}},"Clear All")),l.a.createElement("div",{className:"container my-3"},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,o.split(" ").filter(function(e){return 0!==e.length}).length," Words and ",o.length," characters")))}var m=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type),": ",e.alert.msg))};var u=function(){var e=Object(n.useState)(null),a=Object(r.a)(e,2),t=a[0],o=a[1],c=function(e,a){o({msg:e,type:a}),setTimeout(function(){o(null)},2e3)},u=Object(n.useState)("light"),h=Object(r.a)(u,2),b=h[0],p=h[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"Textutils",AboutText:"About Us",mode:b,toggleMode:function(){"light"===b?(p("dark"),document.body.style.backgroundColor="grey",c("Dark mode has been enabled","success")):(p("light"),document.body.style.backgroundColor="white",c("Light mode has been enabled","success"))}}),l.a.createElement(m,{alert:t}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(d,{showAlert:c,heading:"Enter Text Here",mode:b})),l.a.createElement("div",null,l.a.createElement(s,null)))},h=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),h()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.78c51251.chunk.js.map