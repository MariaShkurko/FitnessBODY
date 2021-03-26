import dropDownMenu from './modules/dropDownMenu';
import togglePopup from './modules/togglePopUp';
import validateForm from './modules/validateForm';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import gallerySlider from './modules/gallerySlider';

// Слайдеры
mainSlider();
gallerySlider();
// Выпадающее меню
dropDownMenu();
// модальные окна
togglePopup();
// Валидация форм
const errorValidList = validateForm();
// Отправка форм
sendForm(errorValidList);
