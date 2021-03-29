import calc from './modules/calc';
import dropDownMenu from './modules/dropDownMenu';
import gallerySlider from './modules/gallerySlider';
import mainSlider from './modules/mainSlider';
import scrollActions from './modules/scrollActions';
import sendForm from './modules/sendForm';
import servicesSlider from './modules/servicesSlider';
import togglePopup from './modules/togglePopUp';
import togglePopupMenu from './modules/togglePopupMenu';
import validateForm from './modules/validateForm';

// Слайдеры
mainSlider();
servicesSlider();
gallerySlider();
// Выпадающее меню
dropDownMenu();
// Действия при скролле:
//      Липкое мобильное меню
//      Появлние стрекли "Вверх"
scrollActions();
// модальные окна
togglePopup();
// Мобильное меню
togglePopupMenu();
// Валидация форм
const errorValidList = validateForm();
// Калькулятор
calc();
// Отправка форм
sendForm(errorValidList);
