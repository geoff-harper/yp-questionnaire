webpackJsonp([0],{"+6DE":function(e,t){},"/CQW":function(e,t){e.exports={presenceTypesOptions:[["currentWebsite","Current Website"],["facebook","Facebook"],["instagram","Instagram"],["twitter","Twitter"],["other","Other"]]}},"08z+":function(e,t){},"1ghz":function(e,t){},"4Ty+":function(e,t){e.exports={repNames:[["brenda","Brenda"],["carolina","Carolina"],["jen","Jen"],["jenny","Jenny"],["josephine","Josephine"],["lea","Lea"],["marie-claude","Marie-Claude"]]}},"9luM":function(e,t){},CC2f:function(e,t){e.exports={suppliedContentTypes:[["documents","Documents"],["ownPhotos","My own photos"],["stockImages","Stock images"],["logo","Logo"]]}},Fcyn:function(e,t){e.exports={displayedMediums:[["phone","Phone"],["email","Email"],["address","Address"]]}},Fyzc:function(e,t){},Kdjy:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),n=i("mvHQ"),a=i.n(n),r=i("oQ0A"),o={name:"TabNav",components:{},props:{activeTab:{required:!0,type:String}},data:function(){return{tabs:r.tabs}},methods:{emitNav:function(e){this.$emit("navigate",e)}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"tab-navigation"},[i("ul",e._l(e.tabs,function(t){return i("li",{class:["tab",t[0]===e.activeTab?"active":null],on:{click:function(i){e.emitNav(t[0])}}},[e._v(e._s(t[1]))])}))])},staticRenderFns:[]},c=i("VU/8")(o,u,!1,function(e){i("tA8o")},null,null).exports,l={name:"IntroSubSection",props:{header:{required:!0,type:String},subHeader:{required:!0,type:String}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"intro sub-section"},[i("h2",{staticClass:"section__header"},[e._v(e._s(e.header))]),e._v(" "),i("h3",{staticClass:"section__sub-header"},[e._v(e._s(e.subHeader))]),e._v(" "),i("p",{staticClass:"section__intro"},[e._t("en"),e._v(" "),e._e()],2)])},staticRenderFns:[]},d=i("VU/8")(l,h,!1,function(e){i("VcMv")},null,null).exports,p={name:"InputText",props:{inputParams:{required:!0,type:Array,validator:function(e){return e.length>=3}}},data:function(){return{error:!1}},methods:{emitText:function(e){this.errorCheck(e.value),this.$emit("input",e.id,e.value,this.error)},errorCheck:function(e){this.inputParams[2]?this.error=0===e.length:this.error=!1},validateEmail:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())}}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"form-field__label",attrs:{for:e.inputParams[0]}},[e._t("default",[e._v("Input label")]),e._v(" "),0===e.inputParams[1]?i("input",{attrs:{name:e.inputParams[0],id:e.inputParams[0],required:!1,type:"text"},on:{input:function(t){e.emitText(t.target)}}}):e._e(),e._v(" "),1===e.inputParams[1]?i("textarea",{attrs:{name:e.inputParams[0],id:e.inputParams[0],required:!1,cols:"30",rows:"10"},on:{input:function(t){e.emitText(t.target)}}}):e._e(),e._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"form-field__error"},[e._v("Please fill in this field.")])],2)},staticRenderFns:[]},v=i("VU/8")(p,m,!1,function(e){i("Kdjy")},null,null).exports,f={name:"InputCheckbox",props:{inputParams:{required:!0,type:Array,validator:function(e){return 3===e.length}}},data:function(){return{error:!1,checked:[]}},methods:{emitChecked:function(){this.errorCheck(),this.$emit("change",this.inputParams[0],this.checked,this.error)},errorCheck:function(){0===this.checked.length&&this.inputParams[2]?this.error=!0:this.error=!1}}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fieldset",[e._t("default",[e._v("Checkbox group label")]),e._v(" "),e._l(e.inputParams[1],function(t){return i("label",{staticClass:"form-field__label",attrs:{for:t[0]}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{name:e.inputParams[0],id:t[0],type:"checkbox"},domProps:{value:t[0],checked:Array.isArray(e.checked)?e._i(e.checked,t[0])>-1:e.checked},on:{change:[function(i){var s=e.checked,n=i.target,a=!!n.checked;if(Array.isArray(s)){var r=t[0],o=e._i(s,r);n.checked?o<0&&(e.checked=s.concat([r])):o>-1&&(e.checked=s.slice(0,o).concat(s.slice(o+1)))}else e.checked=a},e.emitChecked]}}),e._v("\n    "+e._s(t[1])+"\n  ")])}),e._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"form-field__error"},[e._v("Please fill in this field.")])],2)},staticRenderFns:[]},b=i("VU/8")(f,_,!1,function(e){i("hUBZ")},null,null).exports,y=i("Fcyn"),x={name:"BusinessDetails",components:{IntroSubSection:d,InputText:v,InputCheckbox:b},props:{fieldData:{required:!0,type:Object}},data:function(){return{displayedMediums:y.displayedMediums}},methods:{emitFieldData:function(e,t,i){this.$emit("update","businessDetailsData",e,t),this.$emit("error",i)}}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"business-details section",attrs:{id:"business-details"}},[t("IntroSubSection",{attrs:{header:"Business Details",subHeader:"Advertiser Profile"}},[t("span",{attrs:{slot:"en"},slot:"en"},[this._v("Congratulations on your new website product! The first step in our production process is to briefly gather some basic information regarding your business and your goals for your website. This information will help our web team to begin designing a personalized website that accurately reflects your business.")]),this._v(" "),t("span",{attrs:{slot:"fr"},slot:"fr"},[this._v("Le Congratulations on your new website product! The first step in our production process is to briefly gather some basic information regarding your business and your goals for your website. This information will help our web team to begin designing a personalized website that accurately reflects your business.")])]),this._v(" "),t("div",{staticClass:"sub-section"},[t("h3",{staticClass:"section__sub-header"},[this._v("Business Info")]),this._v(" "),t("InputText",{attrs:{inputParams:["primaryContact",0,!0]},on:{input:this.emitFieldData}},[this._v("Primary point of contact for our website development team")]),this._v(" "),t("InputText",{attrs:{inputParams:["displayedName",0,!0]},on:{input:this.emitFieldData}},[this._v("Business name to be displayed on site")]),this._v(" "),t("InputCheckbox",{attrs:{inputParams:["displayedInfo",this.displayedMediums,!1]},on:{change:this.emitFieldData}},[this._v("Contact information to be displayed on site")]),this._v(" "),t("InputText",{attrs:{inputParams:["mainPhone",0,!0]},on:{input:this.emitFieldData}},[this._v("Main phone number")]),this._v(" "),t("InputText",{attrs:{inputParams:["otherPhone",1,!1]},on:{input:this.emitFieldData}},[this._v("Additional phone numbers")]),this._v(" "),t("InputText",{attrs:{inputParams:["email",0,!0,!0]},on:{input:this.emitFieldData}},[this._v("Email")]),this._v(" "),t("InputText",{attrs:{inputParams:["mainAddress",0,!0]},on:{input:this.emitFieldData}},[this._v("Main business address")]),this._v(" "),t("InputText",{attrs:{inputParams:["otherAddress",1,!1]},on:{input:this.emitFieldData}},[this._v("Additional addresses")])],1),this._v(" "),t("div",{staticClass:"sub-section"},[t("h3",{staticClass:"section__sub-header"},[this._v("Hours of Operation")]),this._v(" "),t("InputText",{attrs:{inputParams:["monday",0,!1]},on:{input:this.emitFieldData}},[this._v("Monday")]),this._v(" "),t("InputText",{attrs:{inputParams:["tuesday",0,!1]},on:{input:this.emitFieldData}},[this._v("Tuesday")]),this._v(" "),t("InputText",{attrs:{inputParams:["wednesday",0,!1]},on:{input:this.emitFieldData}},[this._v("Wednesday")]),this._v(" "),t("InputText",{attrs:{inputParams:["thursday",0,!1]},on:{input:this.emitFieldData}},[this._v("Thursday")]),this._v(" "),t("InputText",{attrs:{inputParams:["friday",0,!1]},on:{input:this.emitFieldData}},[this._v("Friday")]),this._v(" "),t("InputText",{attrs:{inputParams:["saturday",0,!1]},on:{input:this.emitFieldData}},[this._v("Saturday")]),this._v(" "),t("InputText",{attrs:{inputParams:["sunday",0,!1]},on:{input:this.emitFieldData}},[this._v("Sunday")])],1),this._v(" "),t("div",{staticClass:"sub-section"},[t("InputText",{attrs:{inputParams:["otherInfo",1,!1]},on:{input:this.emitFieldData}},[this._v("Are there any other notes you would like to provide regarding your business information?")])],1)],1)},staticRenderFns:[]},g=i("VU/8")(x,T,!1,function(e){i("Fyzc")},null,null).exports,D=i("/CQW"),w={name:"ExistingPresence",components:{IntroSubSection:d,InputText:v,InputCheckbox:b},props:{fieldData:{required:!0,type:Object}},data:function(){return{presenceTypesOptions:D.presenceTypesOptions}},computed:{checkSocialVisibility:function(){var e=this.fieldData.presenceTypes;return 1===e.length&&-1===e.indexOf("currentWebsite")||e.length>=2}},methods:{emitFieldData:function(e,t,i){this.$emit("update","existingPresenceData",e,t),this.$emit("error",i)}}},P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"existing-presence section",attrs:{id:"existing-presence"}},[t("IntroSubSection",{attrs:{header:"Existing Online Presence",subHeader:"Existing Online Presence"}},[t("span",{attrs:{slot:"en"},slot:"en"},[this._v("TEMP: need some text for this section's intro")]),this._v(" "),t("span",{attrs:{slot:"fr"},slot:"fr"},[this._v("TEMP: Parlons de votre public cible et des informations que vous voulez partager sur votre site web.")])]),this._v(" "),t("div",{staticClass:"sub-section"},[t("h3",{staticClass:"section__sub-header"},[this._v("Existing Online Presence")]),this._v(" "),t("InputCheckbox",{attrs:{inputParams:["presenceTypes",this.presenceTypesOptions,!1]},on:{change:this.emitFieldData}},[this._v("\n      What online platforms are you already on?\n    ")])],1),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:-1!==this.fieldData.presenceTypes.indexOf("currentWebsite"),expression:"fieldData.presenceTypes.indexOf('currentWebsite') !== -1"}],staticClass:"sub-section"},[t("h3",{staticClass:"section__sub-header"},[this._v("Current Website")]),this._v(" "),t("InputText",{attrs:{inputParams:["domainName",0,!1]},on:{input:this.emitFieldData}},[this._v("What is the domain name?")]),this._v(" "),t("InputText",{attrs:{inputParams:["domainNameContinue",0,!1]},on:{input:this.emitFieldData}},[this._v("Would you like to continue using this domain?")]),this._v(" "),t("InputText",{attrs:{inputParams:["upToDateInfo",0,!1]},on:{input:this.emitFieldData}},[this._v("Is the information on your website up to date?")])],1),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.checkSocialVisibility,expression:"checkSocialVisibility"}],staticClass:"sub-section"},[t("h3",{staticClass:"section__sub-header"},[this._v("Social Media")]),this._v(" "),t("p",{staticClass:"section__text"},[this._v("If possible, please provide URLs")]),this._v(" "),t("InputText",{directives:[{name:"show",rawName:"v-show",value:-1!==this.fieldData.presenceTypes.indexOf("facebook"),expression:"fieldData.presenceTypes.indexOf('facebook') !== -1"}],attrs:{inputParams:["facebook",0,!1]},on:{input:this.emitFieldData}},[this._v("Facebook")]),this._v(" "),t("InputText",{directives:[{name:"show",rawName:"v-show",value:-1!==this.fieldData.presenceTypes.indexOf("instagram"),expression:"fieldData.presenceTypes.indexOf('instagram') !== -1"}],attrs:{inputParams:["instagram",0,!1]},on:{input:this.emitFieldData}},[this._v("Instagram")]),this._v(" "),t("InputText",{directives:[{name:"show",rawName:"v-show",value:-1!==this.fieldData.presenceTypes.indexOf("twitter"),expression:"fieldData.presenceTypes.indexOf('twitter') !== -1"}],attrs:{inputParams:["twitter",0,!1]},on:{input:this.emitFieldData}},[this._v("Twitter")]),this._v(" "),t("InputText",{directives:[{name:"show",rawName:"v-show",value:-1!==this.fieldData.presenceTypes.indexOf("other"),expression:"fieldData.presenceTypes.indexOf('other') !== -1"}],attrs:{inputParams:["other1",0,!1]},on:{input:this.emitFieldData}},[this._v("Other")]),this._v(" "),t("InputText",{directives:[{name:"show",rawName:"v-show",value:-1!==this.fieldData.presenceTypes.indexOf("other"),expression:"fieldData.presenceTypes.indexOf('other') !== -1"}],attrs:{inputParams:["other2",0,!1]},on:{input:this.emitFieldData}},[this._v("Other")]),this._v(" "),t("InputText",{directives:[{name:"show",rawName:"v-show",value:-1!==this.fieldData.presenceTypes.indexOf("other"),expression:"fieldData.presenceTypes.indexOf('other') !== -1"}],attrs:{inputParams:["other3",0,!1]},on:{input:this.emitFieldData}},[this._v("Other")])],1)],1)},staticRenderFns:[]},C=i("VU/8")(w,P,!1,function(e){i("1ghz")},null,null).exports,I=i("CC2f"),k={name:"YourAudience",components:{IntroSubSection:d,InputText:v,InputCheckbox:b},props:{fieldData:{required:!0,type:Object}},data:function(){return{suppliedContentTypes:I.suppliedContentTypes}},methods:{emitFieldData:function(e,t,i){this.$emit("update","yourAudienceData",e,t),this.$emit("error",i)}}},F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"your-audience section",attrs:{id:"your-audience"}},[t("IntroSubSection",{attrs:{header:"Your Audience",subHeader:"Your Goals"}},[t("span",{attrs:{slot:"en"},slot:"en"},[this._v("Let's talk about who you are looking to attract and what information you would like to share with your new website.")]),this._v(" "),t("span",{attrs:{slot:"fr"},slot:"fr"},[this._v("TEMP: Parlons de votre public cible et des informations que vous voulez partager sur votre site web.")])]),this._v(" "),t("div",{staticClass:"sub-section"},[t("h3",{staticClass:"section__sub-header"},[this._v("Demographic Info")]),this._v(" "),t("InputText",{attrs:{inputParams:["targetDemo",1,!0]},on:{input:this.emitFieldData}},[this._v("Who is your target demographic?")]),this._v(" "),t("InputText",{attrs:{inputParams:["firstThing",1,!1]},on:{input:this.emitFieldData}},[this._v("What is the first thing you would like your potential clients to see when visiting your website?")])],1),this._v(" "),t("div",{staticClass:"sub-section"},[t("h3",{staticClass:"section__sub-header"},[this._v("Images and Content")]),this._v(" "),t("InputCheckbox",{attrs:{inputParams:["suppliedContent",this.suppliedContentTypes,!1]},on:{change:this.emitFieldData}},[this._v("\n      Will you be supplying us with some documents, images, logos?\n    ")]),this._v(" "),t("InputText",{attrs:{inputParams:["stockImagesSubjects",1,!1]},on:{input:this.emitFieldData}},[this._v("What type of stock images would you like to see?")])],1)],1)},staticRenderFns:[]},N=i("VU/8")(k,F,!1,function(e){i("9luM")},null,null).exports,S=i("4Ty+"),A={name:"FinishQuestionnaire",components:{IntroSubSection:d},props:{formData:{type:Object,required:!0}},data:function(){return{repNames:S.repNames,selectedRep:""}},methods:{emitRep:function(){this.$emit("update",this.selectedRep)}}},O={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"existing-presence section",attrs:{id:"existing-presence"}},[i("IntroSubSection",{attrs:{header:"Great job kid",subHeader:"Now don't get cocky"}},[i("span",{attrs:{slot:"en"},slot:"en"},[e._v("Thanks for doing the form, you nailed it.")]),e._v(" "),i("span",{attrs:{slot:"fr"},slot:"fr"},[e._v("Le thanks for doing the form, you nailed it.")])]),e._v(" "),i("div",{staticClass:"sub-section"},[i("h3",{staticClass:"section__sub-header"},[e._v("Select Your Representative")]),e._v(" "),i("label",{staticClass:"form-field__label",attrs:{for:"repNames"}},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedRep,expression:"selectedRep"}],attrs:{name:"repNames",id:"repNames"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedRep=t.target.multiple?i:i[0]},function(t){e.emitRep()}]}},e._l(e.repNames,function(t){return i("option",{domProps:{value:t[0]}},[e._v(e._s(t[1]))])}))]),e._v(" "),""!==e.selectedRep?i("input",{staticClass:"form-button",attrs:{type:"submit",value:"Complete Questionnaire"}}):e._e()])],1)},staticRenderFns:[]},E=i("VU/8")(A,O,!1,function(e){i("Qxhl")},null,null).exports,M={name:"ButtonNav",components:{},props:{activeTab:{required:!0,type:String}},data:function(){return{tabs:r.tabs}},methods:{emitNav:function(e){var t=0;for(var i in this.tabs)if(this.tabs[i][0]===this.activeTab)return t="next"===e?++i:--i,void this.$emit("navigate",this.tabs[t][0])}}},$={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"button-navigation"},[i("button",{directives:[{name:"show",rawName:"v-show",value:"businessDetails"!==e.activeTab,expression:"activeTab !== 'businessDetails'"}],staticClass:"button-navigation__button",on:{click:function(t){e.emitNav("prev")}}},[e._v("Previous")]),e._v(" "),i("button",{staticClass:"button-navigation__button",on:{click:function(t){e.emitNav("next")}}},[e._v("Next")])])},staticRenderFns:[]},Q={name:"Questionnaire",components:{TabNav:c,BusinessDetails:g,ExistingPresence:C,YourAudience:N,FinishQuestionnaire:E,ButtonNav:i("VU/8")(M,$,!1,function(e){i("08z+")},null,null).exports},data:function(){return{activeTab:"businessDetails",formData:{businessDetailsData:{primaryContact:"",displayedName:"",displayedInfo:[],mainPhone:"",otherPhone:"",email:"",mainAddress:"",otherAddress:"",monday:"",tuesday:"",wednesday:"",thursday:"",friday:"",saturday:"",sunday:"",otherInfo:""},existingPresenceData:{presenceTypes:[],domainName:"",domainNameContinue:"",upToDateInfo:"",facebook:"",instagram:"",twitter:"",other1:"",other2:"",other3:""},yourAudienceData:{targetDemo:"",firstThing:"",suppliedContent:[],stockImagesSubjects:""},rep:""},errorPresent:!1}},methods:{handleNav:function(e){this.errorPresent||(this.activeTab=e)},handleData:function(e,t,i){this.formData[e][t]=i},handleError:function(e){this.errorPresent=e},handleRep:function(e){this.formData.rep=e},handleSubmit:function(){var e=a()(this.formData);fetch("./php/mail.php",{headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},method:"POST",body:e}).then(function(e){return e.text()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}}},q={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{attrs:{id:"questionnaire"}},[i("TabNav",{attrs:{activeTab:e.activeTab},on:{navigate:e.handleNav}}),e._v(" "),i("form",{staticClass:"questionnaire-form",on:{submit:function(t){t.preventDefault(),e.handleSubmit(t)}}},[i("BusinessDetails",{directives:[{name:"show",rawName:"v-show",value:"businessDetails"===e.activeTab,expression:"activeTab === 'businessDetails'"}],attrs:{fieldData:e.formData.businessDetailsData},on:{update:e.handleData,error:e.handleError}}),e._v(" "),i("ExistingPresence",{directives:[{name:"show",rawName:"v-show",value:"existingPresence"===e.activeTab,expression:"activeTab === 'existingPresence'"}],attrs:{fieldData:e.formData.existingPresenceData},on:{update:e.handleData,error:e.handleError}}),e._v(" "),i("YourAudience",{directives:[{name:"show",rawName:"v-show",value:"yourAudience"===e.activeTab,expression:"activeTab === 'yourAudience'"}],attrs:{fieldData:e.formData.yourAudienceData},on:{update:e.handleData,error:e.handleError}}),e._v(" "),i("FinishQuestionnaire",{directives:[{name:"show",rawName:"v-show",value:"finishQuestionnaire"===e.activeTab,expression:"activeTab === 'finishQuestionnaire'"}],attrs:{formData:e.formData},on:{update:e.handleRep}})],1),e._v(" "),i("ButtonNav",{directives:[{name:"show",rawName:"v-show",value:"finishQuestionnaire"!==e.activeTab,expression:"activeTab !== 'finishQuestionnaire'"}],attrs:{activeTab:e.activeTab},on:{navigate:e.handleNav}})],1)},staticRenderFns:[]},W=i("VU/8")(Q,q,!1,function(e){i("+6DE")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#questionnaire",template:"<Questionnaire/>",components:{Questionnaire:W}})},Qxhl:function(e,t){},VcMv:function(e,t){},hUBZ:function(e,t){},oQ0A:function(e,t){e.exports={tabs:[["businessDetails","Business Details"],["existingPresence","Existing Presence"],["yourAudience","Your Audience"],["finishQuestionnaire","Finish Questionnaire"]]}},tA8o:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ad87a6d6790fd751b37d.js.map