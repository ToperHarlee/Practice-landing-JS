import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');
    //дз и рекомендации ментора.
    let checkDataInput = () => {
        let formMessage = document.createElement('div');
        document.querySelectorAll('.form-control').forEach(input => {
            if (input.value === ''){
                document.querySelector('.popup_calc_button').disabled = true;
                formMessage.textContent = 'заполните поля';
                document.querySelector('.popup_calc_content').append(formMessage);
            }
            input.addEventListener('input', () => {
                document.querySelector('.popup_calc_button').disabled = false;
                formMessage.textContent = '';
            });
        });
        document.querySelectorAll('.checkbox').forEach(checkbox => {
            if (checkbox.checked === false ||
                document.querySelector('.form-control').selected === false){
                document.querySelector('.popup_calc_profile_button').disabled = true;
            } else {
                document.querySelector('.popup_calc_profile_button').disabled = false;
            }
        });
    };
    checkDataInput();
    function bindActionToElems (event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        if (state[prop] === -1){
                            document.querySelector('.popup_calc_button').disabled = true;
                        } else {
                            document.querySelector('.popup_calc_button').disabled = false;
                        }
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            element.forEach((box, j) => {
                                box.checked = false;
                                if (box.checked === false){
                                    document.querySelector('.popup_calc_profile_button').disabled = true;
                                }
                                if (i === j){
                                    box.checked = true;
                                }
                                if (box.checked === true){
                                    document.querySelector('.popup_calc_profile_button').disabled = false;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    /*windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
            console.log(state);
        });
    });*/
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;


//придумать валидацию чтобы пользователя не пускало на следующую страницу пока не выбрана форма или размеры(done)













