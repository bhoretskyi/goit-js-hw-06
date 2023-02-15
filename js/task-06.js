const refs = {
    input: document.querySelector('#validation-input')
}

// refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

const lengthInput = refs.input.getAttribute("data-length");

console.log(lengthInput)

// function onInputFocus() {
//     console.log('focus')

// };

function onInputBlur() {
    if (refs.input.value.length == lengthInput) {
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid')
        console.log(refs.input.value.length)
        
    } 
    else{
        refs.input.classList.add('invalid')
    }
        
        
    

}