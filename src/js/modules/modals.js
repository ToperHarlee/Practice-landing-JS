const modals = () => {

    let scroll = calcScroll();

    let openModal = (modal) => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        //document.body.classList.add('modal-open');//класс из бутстрапа - запрещает скролл при открытой модалке
    }

    let closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        //document.body.classList.remove('modal-open');
    }

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target.contains(modal) && closeClickOverlay){
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                closeModal(modal);
            }
        });
    }

    function showModalByTime(selector, time) {
        let timeout = setTimeout(() => {
            openModal(document.querySelector(selector));
        }, time);
        clearTimeout(timeout);
    }

    function calcScroll () {
        let div = document.createElement('div');

        div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow: scroll;
        visibility: hidden;
        `;

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }
    
    /*const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close');*/

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
    showModalByTime('.popup', 60000);
};

export default modals;
