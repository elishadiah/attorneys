(window.webpackJsonp=window.webpackJsonp||[]).push([[33,6,18,21,23,26,32],{263:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("6d93a522",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);var o={},l=(n(266),n(40)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-overlay1"},[n("div",{staticClass:"modal-overlay",on:{click:function(e){return t.$emit("close-modal")}}}),t._v(" "),n("div",{staticClass:"modal"},[t._m(0),t._v(" "),n("div",{staticClass:"submit"},[n("button",{on:{click:function(e){return t.$emit("close-modal")}}},[t._v("SUBMIT")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-div"},[n("p",[t._v("SEARCH")]),t._v(" "),n("input",{attrs:{type:"text",value:""}})])}],!1,null,"5faef120",null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var o=n(268),l=n.n(o),c=(n(269),n(270),{name:"Carousel",components:{VueSlickCarousel:l.a},methods:{showNext:function(){this.$refs.carousel.next()},showBefore:function(){this.$refs.carousel.prev()}}}),r=n(40),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonials wf-section"},[n("div",{staticClass:"testimonials-section"},[n("div",{staticClass:"w-col w-col-10 slick-carousel"},[n("div",{staticClass:"w-slider-mask"},[n("img",{staticClass:"desktop-view",staticStyle:{"margin-bottom":"-30px"},attrs:{src:"assets/images/carousel quote.png",loading:"lazy",alt:"",width:"35"}}),t._v(" "),n("VueSlickCarousel",{ref:"carousel",staticClass:"testimonial w-slider",attrs:{"css-ease":t.ease}},[n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])]),t._v(" "),n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])])])],1),t._v(" "),n("div",{staticClass:"slider-arrow"},[n("div",{staticClass:"left-arrow",on:{click:t.showBefore}},[n("div",{staticClass:"icon-4 w-icon-slider-left"},[t._v("◄")])]),t._v(" "),n("div",{staticClass:"right-arrow",on:{click:t.showNext}},[n("div",{staticClass:"icon-3 w-icon-slider-right"},[t._v("►")])])])])])])}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n(263)},267:function(t,e,n){var o=n(52)(!1);o.push([t.i,".search-div[data-v-5faef120]{width:80%;display:flex;align-items:center;border-bottom:2px solid grey}.submit[data-v-5faef120]{display:flex;flex-direction:row-reverse;margin-right:15%}.modal-overlay1[data-v-5faef120]{top:55%;justify-content:flex-end}.modal-overlay[data-v-5faef120],.modal-overlay1[data-v-5faef120]{position:fixed;bottom:0;right:0;left:0;display:flex;z-index:1000}.modal-overlay[data-v-5faef120]{top:0;justify-content:center}.modal[data-v-5faef120]{display:flex;flex-direction:column;text-align:center;background-color:hsla(0,0%,100%,.8);width:60%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:5px 0 0 5px;padding:20px 50px;z-index:2000}p[data-v-5faef120]{font-size:18px;font-weight:600;margin:0}input[data-v-5faef120]{width:100%;margin-left:20px;outline:none;font-size:20px}button[data-v-5faef120],input[data-v-5faef120]{background:none}button[data-v-5faef120]{width:150px;color:#892432;font-size:18px;margin-top:10px;font-weight:600;border-radius:16px;width:20%}",""]),t.exports=o},271:function(t,e,n){"use strict";n.r(e);var o={components:{SavedModal:n(264).default},data:function(){return{isOpen:!1,burgerOpen:!1,showModal:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOver:function(){this.isOpen=!0,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOut:function(){this.isOpen=!1},burgerToggle:function(){this.burgerOpen=!this.burgerOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-container wf-section"},[n("div",{staticClass:"nav-contain w-row"},[n("div",{staticClass:"column-2 w-col w-col-5 w-col-stack nav-bar-group"},[n("NuxtLink",{staticClass:"nav-bar-logo",attrs:{to:"/"}},[n("img",{attrs:{src:"assets/images/logo.ce898954.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"w-nav-button",on:{click:t.burgerToggle}},[n("div",{staticClass:"w-icon-nav-menu"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerOpen,expression:"burgerOpen"}],staticClass:"w-nav-overlay",staticStyle:{display:"block",height:"4042.22px"},attrs:{id:"w-nav-overlay-0","data-wf-ignore":""}},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation","data-nav-menu-open":""}},[n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/"}},[t._v("\n            Homes\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/about"}},[t._v("\n            About\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/resources"}},[t._v("\n            Resources\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/faq"}},[t._v("\n            FAQ\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/contact"}},[t._v("\n            Contact\n          ")])],1)])],1),t._v(" "),n("div",{staticClass:"column w-col w-col-7 w-col-stack w-col-small-small-stack"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container w-container nav-menu-responsive"},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation"}},[n("NuxtLink",{attrs:{to:"/"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Home")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/about"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("About")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/resources"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Resources")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/faq"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("FAQ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/contact"}},[n("a",{staticClass:"nav-link w-nav-link",attrs:{"aria-current":"page"}},[t._v("Contact")])]),t._v(" "),n("button",{staticClass:"nav-link w-nav-link",staticStyle:{background:"none"},on:{click:function(e){t.showModal=!0}}},[n("img",{attrs:{src:"assets/images/search.png",loading:"lazy",alt:"",width:"20px"}})]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[n("a",{staticClass:"nav-link w-nav-link",attrs:{"aria-current":"page"}},[n("img",{attrs:{src:"assets/images/Facebook-logo-gray.png",loading:"lazy",alt:"",width:"20px"}})])])],1)])]),t._v(" "),n("div",{staticClass:"w-row"},[n("div",{staticClass:"sub-phone left w-col w-col-3 w-col-stack"},[n("div",{staticClass:"w-dropdown",attrs:{"data-hover":"true","data-delay":"0"},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:t.toggle}},[t._m(0),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-dropdown-list",attrs:{id:"myDropdown"}},[n("div",{staticClass:"w-dropdown-list-sub"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Commercial")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Title Settlement")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Loan Closing")])])],1),t._v(" "),n("div",{staticClass:"w-dropdown-list-sub"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Residential")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Estate Planning")])])],1)])])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"site-toggle w-col w-col-5 w-col-stack"},[n("Nuxt-link",{attrs:{to:"/att-index"}},[n("a",{staticClass:"toggle-button w-button"},[n("p",{staticClass:"sub-switch"},[t._v("Attorneys At Law")]),t._v(" "),n("hr",{attrs:{size:"2",width:"80px"}})])])],1)])])]),t._v(" "),n("SavedModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{"close-modal":function(e){t.showModal=!1}}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[n("div",{staticClass:"icon w-icon-dropdown-toggle"}),t._v(" "),n("div",{staticClass:"text-block-4"},[t._v("Real Estate")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-phone sub-phone-number w-col w-col-4 w-col-stack"},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SavedModal:n(264).default})},272:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1,isOpenContact:!1,expandText:"Expand"}},methods:{toggle:function(){this.expandText=this.isOpen?"Expand":"Close",this.isOpen=!this.isOpen}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("div",{staticClass:"experienced-attorneys-text footer-font"},[t._v("\n      Experienced and Local Attorneys Here for You\n    ")]),t._v(" "),n("div",{staticClass:"footer-content w-row"},[t._m(0),t._v(" "),n("div",{staticClass:"w-col w-col-8 footer-parent"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"w-col w-col-6 footer-policy"},[t._m(3),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text"},[t._v("\n            Through discussions with management and review of available\n            information, identify the institution’s information sharing\n            practices (and changes to those practices) with affiliates and\n            nonaffiliated third parties; how it treats nonpublic personal\n            information; and how it administers opt-outs.\n          ")]),t._v(" "),n("div",{staticClass:"w-col w-col-3",on:{click:t.toggle}},[n("div",{staticClass:"expand",staticStyle:{"text-align":"left","margin-bottom":"20px"}},[n("span",{staticStyle:{color:"#4f748b"}},[t._v(t._s(t.expandText))]),t._v("\n              "+t._s(t.isOpen?"▲":"▼")+"\n            ")])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenContact,expression:"isOpenContact"}],staticClass:"w-col footer-contact-form"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t._m(4),t._v(" "),n("p",{staticClass:"close-button",on:{click:function(e){t.isOpenContact=!1}}},[t._v("×")])]),t._v(" "),t._m(5)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOpenContact,expression:"!isOpenContact"}],staticClass:"w-col footer-contact-form-title",on:{click:function(e){t.isOpenContact=!0}}},[t._m(6),t._v(" "),t._m(7)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-col w-col-4"},[e("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Full Logo.png",loading:"lazy",alt:"",width:"90%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3 footer-child"},[n("p",{staticClass:"footer-text"},[n("span",{staticClass:"footer-sub-title"},[t._v("OFFICE")]),n("br"),t._v("105 Tivoli\n            Street"),n("br"),t._v("Abbeville, LA"),n("br"),t._v("337-893-3423"),n("br")]),t._v(" "),n("a",{staticStyle:{cursor:"pointer"},attrs:{href:"#"}},[n("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Facebook-logo-gray.png",loading:"lazy",alt:"",width:"20%"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3 footer-child second"},[n("p",{staticClass:"footer-text linked"},[n("span",[t._v("Contact")]),n("br"),t._v("Disclaimer"),n("br"),t._v("Sitemap"),n("br"),t._v("Privacy\n            policy"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"footer-text"},[n("span",{staticClass:"footer-sub-title"},[t._v("PRIVACY POLICY")]),n("br"),t._v("‍Purpose"),n("br"),t._v("‍Federal and state laws and regulations\n            require Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it\n            collects, shares, and protects any personal information obtained\n            during the course of normal business operations. This Privacy\n            Policy and Notice is to be distributed pursuant to Title V of the\n            Gramm-Leach-Bliley Act (GLBA). Any information collected will only\n            be used in accordance with this privacy statement."),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description"},[t._v("\n          Contact Us"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-col w-col-6 contact-us-group"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("textarea",{staticClass:"textarea w-input",attrs:{id:"field",placeholder:"MESSAGE",maxlength:"5000",name:"field",rows:"6"}}),t._v(" "),n("input",{staticClass:"button contact w-button today-button",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description desktop-view"},[t._v("\n        Contact Us"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description mobile-view"},[t._v("\n        Contact Us"),n("strong",[n("br")])])}],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-table w-col w-col-4"},[n("p",{staticClass:"contact-section-text about"},[t._v("Contact Us "),n("br"),t._v("Today!"),n("br")])]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-8"},[n("div",{staticClass:"w-form"},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6",attrs:{id:"field"}},[n("textarea",{staticClass:"textarea w-input",attrs:{placeholder:"MESSAGE",maxlength:"5000",rows:"6",name:"field","data-name":"Field"}}),t._v(" "),n("input",{staticClass:"button contact w-button today-button",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])}],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen1:!1,isOpen2:!1}},methods:{toggle1:function(){this.isOpen1=!this.isOpen1,this.isOpen2=!this.isOpen1&&this.isOpen2,this.isOpen1?(document.getElementById("myDropdown1").style.maxHeight="600px",document.getElementById("myDropdown1").style.paddingTop="0px",document.getElementById("myDropdown2").style.maxHeight="0px",document.getElementById("myDropdown2").style.paddingTop="0px"):(document.getElementById("myDropdown1").style.maxHeight="0px",document.getElementById("myDropdown1").style.paddingTop="0px")},toggle2:function(){this.isOpen2=!this.isOpen2,this.isOpen1=!this.isOpen2&&this.isOpen1,this.isOpen2?(document.getElementById("myDropdown2").style.maxHeight="600px",document.getElementById("myDropdown2").style.paddingTop="0px",document.getElementById("myDropdown1").style.maxHeight="0px",document.getElementById("myDropdown1").style.paddingTop="0px"):(document.getElementById("myDropdown2").style.maxHeight="0px",document.getElementById("myDropdown2").style.paddingTop="0px")}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"real-estate-title-services-section wf-section",staticStyle:{"margin-top":"200px"}},[t._m(1),t._v(" "),n("div",{staticClass:"\n        workingwithtextsection\n        real-estate-title-services\n        about-page-content\n        w-row\n      "},[n("div",{staticClass:"experienced-attorneys-text about-subtext-hero mobile-view"},[t._v("\n        Vestibulum Mattis Laoreet Est, Scelerisque Hehicula Enim Laoreet\n      ")]),t._v(" "),n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("img",{staticClass:"circle-image about-image",attrs:{src:"assets/images/person1.046db6ca.png",loading:"lazy",alt:""}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("div",{staticClass:"credentials w-dropdown",attrs:{"data-hover":"false","data-delay":"0"}},[n("div",{staticClass:"credential-title"},[n("div",{staticClass:"w-row"},[t._m(6),t._v(" "),n("div",{staticClass:"w-col w-col-3",on:{click:t.toggle1}},[t._m(7)])])]),t._v(" "),t._m(8)])]),t._v(" "),n("div",{staticClass:"w-col w-col-6 real-estate-intro"},[n("img",{staticClass:"circle-image about-image",attrs:{src:"assets/images/person2.b2145e19.png",loading:"lazy",alt:""}}),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("div",{staticClass:"credentials w-dropdown",attrs:{"data-hover":"false","data-delay":"0"}},[n("div",{staticClass:"credential-title"},[n("div",{staticClass:"w-row"},[t._m(13),t._v(" "),n("div",{staticClass:"w-col w-col-3",on:{click:t.toggle2}},[t._m(14)])])]),t._v(" "),t._m(15)])])])]),t._v(" "),t._m(16),t._v(" "),n("Carousel"),t._v(" "),n("div",{staticClass:"contact-section about-contact wf-section"},[n("div",{staticClass:"contact-container about-contact-container w-container"},[t._m(17),t._v(" "),n("ContactUsToday")],1)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-hero sub-page-hero wf-section"},[n("div",{staticClass:"overlay-section about-us w-container"},[n("h1",{staticClass:"hero-text sub-page-hero resources",staticStyle:{position:"relative"}},[n("img",{staticClass:"desktop-view",staticStyle:{position:"absolute",left:"-100%"},attrs:{src:"assets/images/Logo Icon.png",loading:"lazy",alt:""}}),t._v("\n        About Us"),n("br")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experienced-attorneys-text about-subtext-hero desktop-view"},[t._v("\n      Vestibulum Mattis Laoreet Est, Scelerisque "),n("br"),t._v("Hehicula Enim Laoreet\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title"},[t._v("\n          Gabe A. Duhon"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title sub-title"},[t._v("\n          attorney/owner"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"working-with-subtext about-page-subtext"},[n("br"),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n          Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam\n          facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna\n          nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"email-direct",attrs:{href:"mailto:email@example.com"}},[e("img",{attrs:{src:"assets/images/email.png",loading:"lazy",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-9"},[n("div",{staticClass:"text-credentials"},[t._v("Credentials")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expand"},[n("span",{staticStyle:{color:"#4f748b"}},[t._v("Expand")]),t._v("\n                  ▼\n                ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"w-dropdown-credential"},[n("p",{staticClass:"working-with-subtext about-page-subtext",staticStyle:{overflow:"hidden",transition:"all 0.5s"},attrs:{id:"myDropdown1"}},[n("br"),t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n              aliquam cursus metus, at accumsan massa ornare id. Aliquam\n              facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel\n              urna nec quam elementum ultricies. Vivamus sed sem venenatis\n              nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula\n              venenatis odio, id feugiat libero gravida facilisis. Class\n              aptent taciti sociosqu ad litora torquent per conubia nostra,\n              per inceptos himenaeos. Donec commodo ex vitae odio tincidunt\n              sodales vel at massa. Nulla facilisi. Etiam cursus varius urna,\n              vel mattis sapien venenatis at. Donec et eros eros. Phasellus\n              arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien.\n              "),n("br"),n("br"),t._v("Donec eu blandit elit, in ultrices tellus. Maecenas\n              ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec\n              ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat\n              volutpat. Donec auctor luctus diam, id finibus neque\n              pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam\n              vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec\n              blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n              augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n              convallis mollis elementum."),n("br"),t._v(" "),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title"},[t._v("\n          Kimberly K. "),n("br"),t._v("Souriyakhamphong"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"about-grey-text title sub-title"},[t._v("\n          associate attorney"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"working-with-subtext about-page-subtext"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis\n          ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam\n          elementum ultricies. Vivamus sed sem venenatis nibh lacinia\n          imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id\n          feugiat libero gravida facilisis. Class aptent taciti sociosqu ad\n          litora torquent per conubia nostra, per inceptos himenaeos. Donec\n          commodo ex vitae odio tincidunt sodales vel at massa. Nulla\n          facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at.\n          Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu,\n          condimentum iaculis sapien. "),n("br"),n("br"),t._v("Donec eu blandit elit, in\n          ultrices tellus. Maecenas ultricies bibendum sodales. Morbi in\n          tincidunt eros. Vivamus nec ipsum suscipit, sagittis libero eget,\n          vehicula leo. Aliquam erat volutpat. Donec auctor luctus diam, id\n          finibus neque pellentesque vitae. Duis pretium ut velit quis cursus.\n          Aliquam vitae leo nec neque luctus gravida. Nulla vestibulum, felis\n          nec blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n          augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n          convallis mollis elementum."),n("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"email-direct",attrs:{href:"mailto:email@example.com"}},[e("img",{attrs:{src:"assets/images/email.png",loading:"lazy",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-9"},[n("div",{staticClass:"text-credentials"},[t._v("Credentials")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expand"},[n("span",{staticStyle:{color:"#4f748b"}},[t._v("Expand")]),t._v(" ▼\n                ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"w-dropdown-credential"},[n("p",{staticClass:"working-with-subtext about-page-subtext",staticStyle:{overflow:"hidden",transition:"all 0.5s"},attrs:{id:"myDropdown2"}},[n("br"),t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n              aliquam cursus metus, at accumsan massa ornare id. Aliquam\n              facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel\n              urna nec quam elementum ultricies. Vivamus sed sem venenatis\n              nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula\n              venenatis odio, id feugiat libero gravida facilisis. Class\n              aptent taciti sociosqu ad litora torquent per conubia nostra,\n              per inceptos himenaeos. Donec commodo ex vitae odio tincidunt\n              sodales vel at massa. Nulla facilisi. Etiam cursus varius urna,\n              vel mattis sapien venenatis at. Donec et eros eros. Phasellus\n              arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien.\n              "),n("br"),n("br"),t._v("Donec eu blandit elit, in ultrices tellus. Maecenas\n              ultricies bibendum sodales. Morbi in tincidunt eros. Vivamus nec\n              ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam erat\n              volutpat. Donec auctor luctus diam, id finibus neque\n              pellentesque vitae. Duis pretium ut velit quis cursus. Aliquam\n              vitae leo nec neque luctus gravida. Nulla vestibulum, felis nec\n              blandit lobortis, neque nisi aliquam nunc, eget vehicula lectus\n              augue interdum leo. Nam vestibulum a sem id ornare. Praesent\n              convallis mollis elementum."),n("br"),t._v(" "),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-choose-us about-us-contact-banner wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("h1",{staticClass:"why-choose-us-title-container about-us-dupe"},[t._v("\n        Cras Et "),n("br"),t._v("Fringilla "),n("br"),t._v("Libero "),n("br"),t._v(" "),n("button",[t._v("Contact Us Today")])])]),t._v(" "),n("div",{staticClass:"wcu-images wcu-section-about w-row"},[n("div",{staticClass:"wcu-image-one about-image about-image-two w-col w-col-6"}),t._v(" "),n("div",{staticClass:"wcu-image-one about-image w-col w-col-6"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/resources-contact-3.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/about-contact-2.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/about-contact-3.png",loading:"lazy",alt:""}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Carousel:n(265).default,ContactUsToday:n(276).default})},300:function(t,e,n){"use strict";n.r(e);var o={},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("AboutMain"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(271).default,AboutMain:n(286).default,Footer:n(272).default})}}]);