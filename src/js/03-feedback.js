// Завдання 3

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
//  об'єкт з полями email і message, у яких зберігай поточні значення
//  полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
// заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль
//  об'єкт з полями email, message та їхніми поточними значеннями.

// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';


const formRef = document.querySelector(`.feedback-form`);
const emailInputRef = document.querySelector(`input[name="email"]`);
const messageInputRef = document.querySelector(`textarea[name="message"]`);

// отримання і запис в локальне сховище об'єкта currentValue з поточними полями email і message

const saveStateToLocalStorage = () => {
   
    const currentValue = {
        email: emailInputRef.value,
        message: messageInputRef.value,
    };

    localStorage.setItem(`feedback-form-state`, JSON.stringify(currentValue));
};
// провірка стану сховища і заповнення полів збереженими данними якщо такі є

const getAndChangeItems = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const currentValue = JSON.parse(savedState);
        emailInputRef.value = currentValue.email;
        messageInputRef.value = currentValue.message;
    }
};
// виведення в консоль об'єкту з полями email, message і їх поточні значення
const giveMessegeAndClearForm = () => {
    console.log('Form submitted with values:', {
        email: emailInputRef.value,
        message: messageInputRef.value,
    });
    // очищення форми
    const currentValue = {
    email: "",
    message: "",
    };
// очищення пам'яті
    localStorage.removeItem('feedback-form-state');
    emailInputRef.value = currentValue.email;
    messageInputRef.value = currentValue.message;

};

formRef.addEventListener('input', throttle(saveStateToLocalStorage, 500));
formRef.addEventListener('submit', (event) => {

    event.preventDefault();

    if (emailInputRef.value.trim() === '' || messageInputRef.value.trim() === '') {
        
        alert("Заповніть всі пусті поля будь-ласка");
        return;
     
    }
    giveMessegeAndClearForm();
});
getAndChangeItems();
