import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let t={email:"",message:""};const o=document.querySelector(".feedback-form"),l=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){t=e;for(const a in e)e.hasOwnProperty(a)&&(o.elements[a].value=e[a])}};l();const m=e=>{e.preventDefault();const a=e.target.name,r=e.target.value.trim();t[a]=r,localStorage.setItem("feedback-form-state",JSON.stringify(t))},s=e=>{if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log(t),e.target.reset(),t={},localStorage.removeItem("feedback-form-state")};o.addEventListener("input",m);o.addEventListener("submit",s);
//# sourceMappingURL=commonHelpers2.js.map
