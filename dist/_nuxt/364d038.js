(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9,12],{273:function(t,e,c){"use strict";c.r(e);var n=c(270),o=c.n(n),l=(c(271),c(272),{name:"Carousel",components:{VueSlickCarousel:o.a},methods:{showNext:function(){this.$refs.carousel.next()},showBefore:function(){this.$refs.carousel.prev()}}}),r=c(40),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"testimonials wf-section"},[c("div",{staticClass:"testimonials-section"},[c("div",{staticClass:"w-col w-col-11 slick-carousel"},[c("div",{staticClass:"w-slider-mask"},[c("img",{staticClass:"carousel-quote",attrs:{src:"assets/images/carousel quote meet.png",loading:"lazy",alt:"",width:"35"}}),t._v(" "),c("VueSlickCarousel",{ref:"carousel",staticClass:"testimonial w-slider",attrs:{"css-ease":t.ease}},[c("div",{staticClass:"w-slide"},[c("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),c("br"),t._v("LOREM IPSUM"),c("br"),c("br")])]),t._v(" "),c("div",{staticClass:"w-slide"},[c("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),c("br"),t._v("LOREM IPSUM\n            ")])])])],1),t._v(" "),c("div",{staticClass:"slider-arrow"},[c("div",{staticClass:"left-arrow",on:{click:t.showBefore}},[c("div",{staticClass:"icon-4 w-icon-slider-left",staticStyle:{color:"#4f748b"}},[t._v("\n            ◄\n          ")])]),t._v(" "),c("div",{staticClass:"right-arrow",on:{click:t.showNext}},[c("div",{staticClass:"icon-3 w-icon-slider-right",staticStyle:{color:"#4f748b"}},[t._v("\n            ►\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,c){"use strict";c.r(e);var n=c(40),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"contact-table w-col w-col-7 contact-attorney-forms"},[c("div",{staticClass:"contact-table w-col w-col-12"},[c("p",{staticClass:"contact-section-text attorney about"},[t._v("\n      Contact Us "),c("br"),t._v("Today!"),c("br")])]),t._v(" "),c("div",{staticClass:"contact-table w-col w-col-12"},[c("div",{staticClass:"w-form"},[c("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[c("div",{staticClass:"w-row"},[c("p",{staticClass:"contact-description"},[t._v("SCHEDULE A CONSULTATION")]),t._v(" "),c("div",{staticClass:"contact-form-column-two w-col w-col-6"},[c("input",{staticClass:"w-input white-tag",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),c("input",{staticClass:"w-input white-tag",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),c("input",{staticClass:"w-input white-tag",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),c("div",{staticClass:"contact-form-column-two w-col w-col-6",attrs:{id:"field"}},[c("textarea",{staticClass:"textarea w-input white-tag",attrs:{placeholder:"MESSAGE",maxlength:"5000",rows:"6",name:"field","data-name":"Field"}}),t._v(" "),c("input",{staticClass:"button contact w-button today-button",staticStyle:{"background-color":"#892432","margin-top":"20px"},attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])])]),t._v(" "),c("div",{staticClass:"w-form-done"},[c("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),c("div",{staticClass:"w-form-fail"},[c("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])}],!1,null,null,null);e.default=component.exports},300:function(t,e,c){"use strict";c.r(e);var n={data:function(){return{itemArrays:[!1,!1,!1,!1,!1,!1,!1,!1,!1],temp:"",sectionTitle:"Adoption",listGroup:!1}},mounted:function(){this.$nextTick((function(){this.itemArrays[0]=!this.itemArrays[0],this.changeClass(0)}))},methods:{toggle:function(t){this.itemArrays[t]=!this.itemArrays[t],this.changeClass(t)},changeClass:function(t){this.temp="accordion-des"+t,this.iconTemp="accordion-icon"+t,this.itemArrays[t]?(document.getElementById(this.iconTemp).classList.add("icon-opened"),document.getElementById(this.temp).classList.add("item-opened")):(document.getElementById(this.iconTemp).classList.remove("icon-opened"),document.getElementById(this.temp).classList.remove("item-opened"))}}},o=c(40),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t._m(0),t._v(" "),c("div",{staticClass:"practice-mobile"},[c("h1",{staticStyle:{color:"#892432","text-transform":"none"},on:{click:function(e){t.listGroup=!t.listGroup}}},[t._v("\n      Practice area "),c("span",[t._v("▼")])]),t._v(" "),c("ul",{directives:[{name:"show",rawName:"v-show",value:t.listGroup,expression:"listGroup"}],staticClass:"w-list-unstyled list-group",attrs:{role:"list"}},[c("li",{staticClass:"practice-list-item attorney",on:{click:function(e){t.sectionTitle="Adoption",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Adoption")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Family law",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Family Law")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Divorce",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Divorce")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Wills / Succession",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Wills / Succession")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Criminal Defense",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Criminal Defense")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Personal Injury",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Personal Injury")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="DUI / DWI",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("DUI / DWI")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Workers' Comp",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Workers' Comp")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Auto",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("AUTO")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="18-Wheeler Accident",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("18-Wheeler Accident")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Maritime",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("Maritime")])]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Irrevocable / Revocable trust",t.listGroup=!1}}},[c("p",{staticClass:"practice-area-list"},[t._v("IRREVOCABLE / Revocable trust")])])])]),t._v(" "),c("div",{staticClass:"faq-top wf-section"},[c("div",{staticClass:"faq-container w-row"},[c("div",{staticClass:"faq-column-one w-col w-col-8"},[c("h1",{staticClass:"faq-heading commercial attorney"},[t._v(t._s(t.sectionTitle))]),t._v(" "),c("div",{staticClass:"cloneable-area"},[c("div",{staticClass:"c-accordion-list"},[c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(0)}}},[t._m(1)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(1)}}},[t._m(2)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(2)}}},[t._m(3)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(3)}}},[t._m(4)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(4)}}},[t._m(5)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(5)}}},[t._m(6)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(6)}}},[t._m(7)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(7)}}},[t._m(8)]),t._v(" "),c("div",{staticClass:"c-accordion-item",on:{click:function(e){return t.toggle(8)}}},[t._m(9)])])])]),t._v(" "),c("div",{staticClass:"faq-sidebar attorney w-col w-col-4 real"},[c("h1",{staticClass:"faq-heading sidebar attorney"},[t._v("Practice Areas")]),t._v(" "),c("ul",{staticClass:"w-list-unstyled",attrs:{role:"list"}},[c("li",{staticClass:"practice-list-item attorney",on:{click:function(e){t.sectionTitle="Adoption"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Adoption")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Family law"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Family Law")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Divorce"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Divorce")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Wills / Succession"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Wills / Succession")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Criminal Defense"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Criminal Defense")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Personal Injury"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Personal Injury")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="DUI / DWI"}}},[c("p",{staticClass:"practice-area-list"},[t._v("DUI / DWI")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Workers' Comp"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Workers' Comp")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Auto"}}},[c("p",{staticClass:"practice-area-list"},[t._v("AUTO")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="18-Wheeler Accident"}}},[c("p",{staticClass:"practice-area-list"},[t._v("18-Wheeler Accident")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Maritime"}}},[c("p",{staticClass:"practice-area-list"},[t._v("Maritime")]),t._v(" "),c("p")]),t._v(" "),c("li",{staticClass:"practice-list-item",on:{click:function(e){t.sectionTitle="Irrevocable / Revocable trust"}}},[t._m(10),t._v(" "),c("p")])])])])]),t._v(" "),c("div",{staticClass:"contact-section about-contact wf-section mobile-view"},[c("div",{staticClass:"\n        contact-container\n        about-contact-container\n        w-container w-row\n        contact-attorney\n      ",staticStyle:{"margin-bottom":"-100px","margin-top":"-120px"}},[c("AttorneysContactUsToday")],1)]),t._v(" "),c("AttorneysCarousel"),t._v(" "),c("div",{staticClass:"contact-section about-contact wf-section desktop-view"},[c("div",{staticClass:"\n        contact-container\n        about-contact-container\n        w-container w-row\n        contact-attorney\n      "},[c("AttorneysContactUsToday"),t._v(" "),t._m(11)],1)])],1)}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"overlay-section about-us resources faq w-container"},[c("h1",{staticClass:"hero-text sub-page-hero resources",staticStyle:{position:"relative"}},[c("img",{staticClass:"desktop-view",staticStyle:{position:"absolute",left:"-100%"},attrs:{src:"assets/images/Logo Icon.png",loading:"lazy",alt:""}}),t._v("\n         FAQ    "),c("br")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon0"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des0"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon1"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des1"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon2"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des2"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon3"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des3"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon4"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des4"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon5"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des5"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon6"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des6"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon7"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des7"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"_w-accordion-item"},[c("div",{staticClass:"c-accordion-item-q"},[c("div",{staticClass:"_w-accordion-item-q"},[c("div",{staticClass:"c-accordion-item-q-text"},[c("div",{staticClass:"_w-accordion-item-q-text"},[c("div",{staticClass:"accordion-item-q-text"},[t._v("QUESTION")])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-q-icon",attrs:{id:"accordion-icon8"}},[c("div",{staticClass:"_w-accordion-item-q-icon"},[t._v("▼")])])])]),t._v(" "),c("div",{staticClass:"c-accordion-item-a",attrs:{id:"accordion-des8"}},[c("div",{staticClass:"_w-accordion-content-divider"},[c("div",{staticClass:"accordion-content-divider"})]),t._v(" "),c("div",{staticClass:"_w-accordion-item-a"},[c("p",{staticClass:"accordion-item-a-text"},[t._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                      Aliquam aliquam cursus metus, at accumsan massa ornare\n                      id. Aliquam facilisis ex aliquet, lacinia nunc at,\n                      semper nunc. Vivamus vel urna nec quam elementum\n                      ultricies. Vivamus sed sem venenatis nibh lacinia\n                      imperdiet sit amet sit amet ex. Nam vehicula venenatis\n                      odio, id feugiat libero gravida facilisis. Class aptent\n                      taciti sociosqu ad litora torquent per conubia nostra,\n                      per inceptos himenaeos. Donec commodo ex vitae odio\n                      tincidunt sodales vel at massa. Nulla facilisi. Etiam\n                      cursus varius urna, vel mattis sapien venenatis at.\n                      Donec et eros eros. Phasellus arcu mi, hendrerit eu nibh\n                      eu, condimentum iaculis sapien.\n                    ")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("p",{staticClass:"practice-area-list"},[t._v("\n              IRREVOCABLE / "),c("br"),t._v("Revocable trust\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-col w-col-5"},[e("img",{attrs:{src:"assets/images/Mask Group 19.jpg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AttorneysContactUsToday:c(279).default,AttorneysCarousel:c(273).default})}}]);