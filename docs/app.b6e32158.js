parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vqK8":[function(require,module,exports) {
var e=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,c=0,a=t.length;c<a;c++)!r&&c in t||(r||(r=Array.prototype.slice.call(t,0,c)),r[c]=t[c]);return e.concat(r||Array.prototype.slice.call(t))},t=document.querySelector(".work-area__table"),n=document.getElementById("header__btn-create-table"),r=document.getElementById("header__btn-download-exel"),c=function(e,t){return"<table>"+("<tr>"+'<td><input type="text">'.repeat(e)+"</tr>").repeat(t)+"</table>"},a=function(t){return e([],t.children[0].children,!0).map(function(t){return e([],t.children,!0).map(function(e){return e.children[0].value})})},o=function(e,t){var n=document.createElement("a");n.download=t,n.href=URL.createObjectURL(e),document.body.appendChild(n),n.click(),n.remove()};window.onload=function(){return t.innerHTML=c(5,5)},n.addEventListener("click",function(){var e=document.getElementById("input-field__input--x"),n=document.getElementById("input-field__input--y"),r=parseInt(e.value)||1,a=parseInt(n.value)||1;t.innerHTML=c(r,a)}),r.addEventListener("click",function(){var e={excelData:a(document.querySelector(".work-area__table table"))||[]};fetch("https://generate-excel.herokuapp.com/excel",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then(function(e){return e.blob()}).then(function(e){return o(e,"excel.xlsx")}).catch(function(e){return console.log("Error "+e)})});
},{}]},{},["vqK8"], null)