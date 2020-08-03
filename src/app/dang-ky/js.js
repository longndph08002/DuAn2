const ten = document.getElementById('ten');
const sdt = document.getElementById('sdt');
const email = document.getElementById('email');
const diachi = document.getElementById('diachi');
const tendn = document.getElementById('tendn');
const mk1 = document.getElementById('mk');
const mk2 = document.getElementById('mk2');
const form = document.getElementById('form');

const erroer = document.getElementById('error');

form.addEventListener('submit',(e)=> {
    let messages = []
    if (ten.value ===''|| ten.value ==null) {
messages.push('tên rỗng')
        
    }
    if (messages.length>0) {
        e.preventDefault()
        erroer.innerText = messages.join(', ')
    }
})