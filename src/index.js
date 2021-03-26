import dropDownMenu from './modules/dropDownMenu';
import togglePopup from './modules/togglePopUp';
import validateForm from './modules/validateForm';
import sendForm from './modules/sendForm';
import slider from './modules/slider';

// Слайдеры
slider();
// Выпадающее меню
dropDownMenu();
// модальные окна
togglePopup();
// Валидация форм
const errorValidList = validateForm();
// Отправка форм
sendForm(errorValidList);
