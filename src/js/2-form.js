// У JS напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
let formData = {
    email: "",
    message: "",
}
const formDataCollector = document.querySelector('.feedback-form');
const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (formDataFromLS === null) {
        return;
    }
    formData = formDataFromLS;
    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            formDataCollector.elements[key].value = formDataFromLS[key];
        }
    }
}
fillFormFields();
const onFormElementChange = event => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    formData[fieldName] = fieldValue;    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
const onFormSubmit = event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
    }
    console.log(formData);
    event.target.reset();
    localStorage.removeItem("feedback-form-state");
}
formDataCollector.addEventListener('input', onFormElementChange);
formDataCollector.addEventListener('submit', onFormSubmit);