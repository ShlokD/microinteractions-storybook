(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(17),__webpack_require__(23),__webpack_require__(24),__webpack_require__(16),__webpack_require__(33),__webpack_require__(18),__webpack_require__(34),__webpack_require__(70),__webpack_require__(14),__webpack_require__(35),__webpack_require__(25),__webpack_require__(26);var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ActionButton=function(_ref){var display=_ref.display,colorClass=_ref.colorClass,icon=_ref.icon,onClick=_ref.onClick,opacityClass=display?"o-100":"o-0";return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button",{className:"ma4 pa2 f-5 bg-transparent b--transparent fw9 opacity-animate ".concat(colorClass," ").concat(opacityClass),onClick:onClick},icon)};ActionButton.displayName="ActionButton",__webpack_exports__.a=function(_ref2){var name=_ref2.name,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1),2),expanded=_useState2[0],setExpanded=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)("READY"),2),tagState=_useState4[0],setTagState=_useState4[1],containerBgClass="ADDED"===tagState?"bg-light-green":"bg-white",nameClass="REMOVED"===tagState?"strike":"";return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"flex flex-column h-100vh w-100 justify-center items-center",onMouseEnter:function doExpand(){return setExpanded(!0)},onMouseLeave:function doContract(){return setExpanded(!1)}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"pointer background-color-animate flex flex-row justify-between items-center shadow-3 br4 ".concat(containerBgClass)},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(ActionButton,{icon:"+",colorClass:"green",display:expanded,onClick:function doAdd(){return setTagState("ADDED")}}),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"ma4 pa4 f2 ".concat(nameClass)},name),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(ActionButton,{icon:"-",colorClass:"light-silver",display:expanded,onClick:function doRemove(){return setTagState("REMOVED")}})))}},252:function(module,exports,__webpack_require__){var content=__webpack_require__(555);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(557)(content,options);content.locals&&(module.exports=content.locals)},255:function(module,exports,__webpack_require__){__webpack_require__(256),__webpack_require__(368),module.exports=__webpack_require__(369)},277:function(module,exports){},369:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(254);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(553),module)}.call(this,__webpack_require__(370)(module))},553:function(module,exports,__webpack_require__){var map={"./0 - Interactions.stories.js":554,"./1 - Inputs.stories.js":559};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=553},554:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CoconutTag",(function(){return CoconutTag}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_tags_add_remove_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(152);__webpack_require__(252);__webpack_exports__.default={title:"Microinteractions"};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tags_add_remove_tag__WEBPACK_IMPORTED_MODULE_1__.a,{name:"Coconut"}),CoconutTag=function(){return _ref};CoconutTag.displayName="CoconutTag",CoconutTag.__docgenInfo={description:"",methods:[],displayName:"CoconutTag"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\0 - Interactions.stories.js"]={name:"CoconutTag",docgenInfo:CoconutTag.__docgenInfo,path:"stories\\0 - Interactions.stories.js"})},555:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(253)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Lato&display=swap);",""]),exports.i(__webpack_require__(556),""),exports.push([module.i,"* {\r\n  font-family: 'Lato', sans-serif\r\n}\r\n\r\n.background-color-animate {\r\n  -webkit-transition: background-color 0.5s ease-in-out;\r\n  transition: background-color 0.5s ease-in-out;\r\n}\r\n\r\n.opacity-animate {\r\n  -webkit-transition: opacity 0.2s ease-in-out;\r\n  transition: opacity 0.2s ease-in-out;\r\n}\r\n\r\n.h-100vh {\r\n  height: 100vh;\r\n}\r\n",""])},559:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"EmailValidator",(function(){return EmailValidator})),__webpack_require__.d(__webpack_exports__,"NumberValidator",(function(){return NumberValidator})),__webpack_require__.d(__webpack_exports__,"NameRequiredValidator",(function(){return NameRequiredValidator}));__webpack_require__(17),__webpack_require__(23),__webpack_require__(24),__webpack_require__(71),__webpack_require__(33),__webpack_require__(18),__webpack_require__(34),__webpack_require__(45),__webpack_require__(14),__webpack_require__(35),__webpack_require__(25),__webpack_require__(26);var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);__webpack_require__(152),__webpack_require__(252);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}__webpack_exports__.default={title:"Forms"};var InputWithValidator=function(_ref){var id=_ref.id,inputProps=_ref.inputProps,labelText=_ref.labelText,checks=_ref.checks,errorMessage=_ref.errorMessage,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(!0),2),isValid=_useState2[0],setIsValid=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label",{className:"pr3",htmlFor:id},labelText),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input",_extends({id:id},inputProps,{onBlur:function checkValidity(ev){var validity=ev.target.validity,checksPassed=0===checks.filter((function(check){return validity[check]})).length;setIsValid(checksPassed.length)}})),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p",{className:"".concat(isValid?"dn":"dib red")},errorMessage))};InputWithValidator.displayName="InputWithValidator";var EmailValidator=function(){return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(InputWithValidator,{inputProps:{type:"email"},id:"email-field",labelText:"Enter email:",checks:["typeMismatch"],errorMessage:"Please enter a valid email!!"})};EmailValidator.displayName="EmailValidator";var NumberValidator=function(){return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(InputWithValidator,{inputProps:{type:"number",min:"0",max:"12"},id:"number-field",labelText:"Enter a number between 0 and 12:",checks:["rangeOverflow","rangeUnderflow"],errorMessage:"Please enter a number between 0 and 12!!"})};NumberValidator.displayName="NumberValidator";var NameRequiredValidator=function(){return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(InputWithValidator,{inputProps:{type:"text",required:!0},id:"name-field",labelText:"Enter your name: ",checks:["valueMissing"],errorMessage:"This is a required input"})};NameRequiredValidator.displayName="NameRequiredValidator",EmailValidator.__docgenInfo={description:"",methods:[],displayName:"EmailValidator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\1 - Inputs.stories.js"]={name:"EmailValidator",docgenInfo:EmailValidator.__docgenInfo,path:"stories\\1 - Inputs.stories.js"}),NumberValidator.__docgenInfo={description:"",methods:[],displayName:"NumberValidator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\1 - Inputs.stories.js"]={name:"NumberValidator",docgenInfo:NumberValidator.__docgenInfo,path:"stories\\1 - Inputs.stories.js"}),NameRequiredValidator.__docgenInfo={description:"",methods:[],displayName:"NameRequiredValidator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\1 - Inputs.stories.js"]={name:"NameRequiredValidator",docgenInfo:NameRequiredValidator.__docgenInfo,path:"stories\\1 - Inputs.stories.js"})}},[[255,1,2]]]);
//# sourceMappingURL=main.bd4c8f44883d7f178d14.bundle.js.map