(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8,11,12,13,15],{259:function(t,e,n){"use strict";n.r(e);var o=n(260),r=n.n(o),l=(n(261),n(262),{name:"Carousel",components:{VueSlickCarousel:r.a},methods:{showNext:function(){this.$refs.carousel.next()},showBefore:function(){this.$refs.carousel.prev()}}}),c=n(40),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonials wf-section"},[n("div",{staticClass:"testimonials-section"},[n("div",{staticClass:"w-col w-col-10 slick-carousel"},[n("div",{staticClass:"w-slider-mask"},[n("VueSlickCarousel",{ref:"carousel",staticClass:"testimonial w-slider",attrs:{"css-ease":t.ease}},[n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])]),t._v(" "),n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])])])],1),t._v(" "),n("div",{staticClass:"slider-arrow"},[n("div",{staticClass:"left-arrow",on:{click:t.showBefore}},[n("div",{staticClass:"icon-4 w-icon-slider-left"},[t._v("◄")])]),t._v(" "),n("div",{staticClass:"right-arrow",on:{click:t.showNext}},[n("div",{staticClass:"icon-3 w-icon-slider-right"},[t._v("►")])])])])])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-section about-contact wf-section"},[n("div",{staticClass:"contact-container about-contact-container w-container"},[n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/aboutimage2.839e161e.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/aboutimage1.bd629355.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-4"},[n("img",{attrs:{src:"assets/images/aboutimage2.839e161e.png",loading:"lazy",alt:""}})])]),t._v(" "),n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-table w-col w-col-4"},[n("p",{staticClass:"contact-section-text about"},[t._v("\n          Contact Us "),n("br"),t._v("Today!"),n("br")])]),t._v(" "),n("div",{staticClass:"contact-table w-col w-col-8"},[n("div",{staticClass:"w-form"},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-row"},[n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"Name"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"Phone",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6",attrs:{id:"field"}},[n("textarea",{staticClass:"textarea w-input",attrs:{placeholder:"Example Text",maxlength:"5000",rows:"3",name:"field","data-name":"Field"}}),t._v(" "),n("input",{staticClass:"button contact w-button today-button",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])])])}],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1,burgerOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},burgerToggle:function(){this.burgerOpen=!this.burgerOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")}}},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-container wf-section"},[n("div",{staticClass:"nav-contain w-row"},[n("div",{staticClass:"column-2 w-col w-col-5 w-col-stack nav-bar-group"},[n("NuxtLink",{staticClass:"nav-bar-logo",attrs:{to:"/att-index"}},[n("img",{staticClass:"logo",attrs:{src:"assets/images/logo.ce898954.png",loading:"lazy",width:"245.5",alt:""}})]),t._v(" "),n("div",{staticClass:"w-nav-button",on:{click:t.burgerToggle}},[n("div",{staticClass:"w-icon-nav-menu"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerOpen,expression:"burgerOpen"}],staticClass:"w-nav-overlay",staticStyle:{display:"block",height:"4042.22px"},attrs:{id:"w-nav-overlay-0","data-wf-ignore":""}},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation","data-nav-menu-open":""}},[n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-index"}},[t._v("\n            Homes\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-about"}},[t._v("\n            About\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-resources"}},[t._v("\n            Resources\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-faq"}},[t._v("\n            FAQ\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-contact"}},[t._v("\n            Contact\n          ")])],1)])],1),t._v(" "),n("div",{staticClass:"column w-col w-col-7 w-col-stack w-col-small-small-stack"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container w-container nav-menu-responsive"},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation"}},[n("NuxtLink",{attrs:{to:"/att-index"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Home")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-about"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("About")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-resources"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Resources")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-faq"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("FAQ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-contact"}},[n("a",{staticClass:"nav-link w-nav-link w--current",attrs:{"aria-current":"page"}},[t._v("\n                Contact\n              ")])])],1)])]),t._v(" "),n("div",{staticClass:"w-row"},[n("div",{staticClass:"sub-phone attorney left w-col w-col-3 w-col-stack"},[n("div",{staticClass:"w-dropdown",attrs:{"data-hover":"true","data-delay":"0"},on:{click:t.toggle}},[t._m(0),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-dropdown-list attorney",attrs:{id:"myDropdown"}},[t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"site-toggle w-col w-col-5 w-col-stack"},[n("Nuxt-link",{attrs:{to:"/"}},[n("a",{staticClass:"toggle-button attorney w-button",attrs:{href:"/"}},[t._v("\n              Attorneys At Law    ----------------\n            ")])])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[n("div",{staticClass:"icon w-icon-dropdown-toggle"}),t._v(" "),n("div",{staticClass:"text-block-4 attorney"},[t._v("Practice Areas")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-dropdown-list-sub"},[n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("adoption")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("family law")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("divorce")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("wills/succession")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("criminal defense")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("personal injury")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-dropdown-list-sub"},[n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("dui.dwi")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("workers' comp")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("auto")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("1b-wheeler accident")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("maritime")]),t._v(" "),n("a",{staticClass:"w-dropdown-link",attrs:{href:"#"}},[t._v("\n                  irrevocable/"),n("br"),t._v("\n                  revocable trust\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-phone attorney w-col w-col-4 w-col-stack"},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])}],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("div",{staticClass:"experienced-attorneys-text attorneys"},[t._v("Experienced and Local Attorneys Here for You")]),t._v(" "),n("div",{staticClass:"footer-content w-row"},[n("div",{staticClass:"w-col w-col-3"}),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("OFFICE"),n("br"),t._v("105 Tivoli Street"),n("br"),t._v("Abbeville, LA"),n("br"),t._v("337-893-3423"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("CONTACT"),n("br"),t._v("Disclaimer"),n("br"),t._v("Sitemap"),n("br"),t._v("Privacy policy"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-3"},[n("p",{staticClass:"working-with-subtext"},[t._v("PRIVACY POLICY"),n("br"),t._v("‍Purpose Federal and state laws and regulations require Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it collects, shares, and protects any personal information obtained during the course of normal business operations. This Privacy Policy and Notice is to be distributed pursuant to Title V of the Gramm-Leach-Bliley Act (GLBA). Any information collected will only be used in accordance with this privacy statement."),n("br")])])])])])}],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("Carousel"),t._v(" "),n("ContactUsToday")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay-section about-us resources r-header w-container"},[n("h1",{staticClass:"hero-text sub-page-hero resources"},[t._v("Resources"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resources-top wf-section"},[n("div",{staticClass:"resources-top-container attorney w-row"},[n("div",{staticClass:"w-col w-col-5"},[n("h1",{staticClass:"resources-title"},[t._v("Covid-19 Policy"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-7"},[n("p",{staticClass:"resources-page-subtext"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. "),n("br")])])]),t._v(" "),n("div",{staticClass:"resources-top-container other-resources w-row"},[n("div",{staticClass:"w-col w-col-5"},[n("h1",{staticClass:"resources-title other"},[t._v("Documents"),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-7"},[n("p",{staticClass:"resources-page-subtext other"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien venenatis at. Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh eu, condimentum iaculis sapien. "),n("br")])])]),t._v(" "),n("div",{staticClass:"resources-top-container other-resources final section-1 w-row"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"resources-title other document attorney"},[t._v("Document"),n("br"),t._v("title"),n("br")]),t._v(" "),n("p",{staticClass:"resources-page-subtext other document-subtext"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc."),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"resources-title other document attorney"},[t._v("Document"),n("br"),t._v("title"),n("br")]),t._v(" "),n("p",{staticClass:"resources-page-subtext other document-subtext"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc."),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"resources-title other document attorney"},[t._v("Document"),n("br"),t._v("title"),n("br")]),t._v(" "),n("p",{staticClass:"resources-page-subtext other document-subtext"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc."),n("br")])])]),t._v(" "),n("div",{staticClass:"resources-top-container other-resources final section-2 w-row"},[n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"resources-title other document attorney"},[t._v("Document"),n("br"),t._v("title"),n("br")]),t._v(" "),n("p",{staticClass:"resources-page-subtext other document-subtext"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc."),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"resources-title other document attorney"},[t._v("Document"),n("br"),t._v("title"),n("br")]),t._v(" "),n("p",{staticClass:"resources-page-subtext other document-subtext"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc."),n("br")])]),t._v(" "),n("div",{staticClass:"w-col w-col-4"},[n("h1",{staticClass:"resources-title other document attorney"},[t._v("Document"),n("br"),t._v("title"),n("br")]),t._v(" "),n("p",{staticClass:"resources-page-subtext other document-subtext"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet, lacinia nunc at, semper nunc."),n("br")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Carousel:n(259).default,ContactUsToday:n(263).default})},287:function(t,e,n){"use strict";n.r(e);var o={},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AttorneysNavbar"),t._v(" "),n("AttorneysResourcesMain"),t._v(" "),n("AttorneysFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AttorneysNavbar:n(265).default,AttorneysResourcesMain:n(274).default,AttorneysFooter:n(267).default})}}]);