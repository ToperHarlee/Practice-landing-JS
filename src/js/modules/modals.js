const modals = () => {

    let openModal = (modal) => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        //document.body.classList.add('modal-open');//класс из бутстрапа - запрещает скролл при открытой модалке
    }

    let closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        //document.body.classList.remove('modal-open');
    }


    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault();
                }
                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target.contains(modal)){
                closeModal(modal);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            openModal(document.querySelector(selector));
        }, time);
    }
    
    /*const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close');*/

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 3000)
};

export default modals;