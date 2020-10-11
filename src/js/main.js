'use strict';

import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

//лучше без обработчика тк при загрузке страницы функция будет срабатывать (например модальные окна) а потом через таймаут еще раз
window.addEventListener('DOMContentLoaded', () => {

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms();

});










