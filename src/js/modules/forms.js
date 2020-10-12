import checkNumInputs from "./checkNumInputs";
import main from "../../../../../../04 Продвинутый JavaScript/lesson072_TEST/src/js/main";
const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Упс что то не так'
    };
//прикрутить анимацию загрузки
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = `${message.loading}`;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end"){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                        document.querySelector('.popup_calc_end').style.display = 'none'; // скрытие модального окна после валидации
                        document.body.style.overflow = '';
                    }, 6000);
                    for (let key in state) { // очистка данных в обьекте после отправки
                        delete state[key];
                    }
                    console.log(state);
                    console.log('тест');
                });
        });
    });
};

export default forms;


//Make functional in landing, on pratice JS course
// Проект функционала для лендинга в рамках практического курса по JS.
// модальные окна, табы, форма отправки данных, калькулятор, таймер, показ увеличенных изображений наподобие магнифик -попап.
// Используется бутстрап, jquery, slick-slider.


















