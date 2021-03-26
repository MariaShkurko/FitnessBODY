import dropDownMenu from './modules/dropDownMenu';
import fixedMenu from './modules/fixedMenu';
import togglePopup from './modules/togglePopUp';
import togglePopupMenu from './modules/togglePopupMenu';
import validateForm from './modules/validateForm';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import gallerySlider from './modules/gallerySlider';

// Слайдеры
mainSlider();
gallerySlider();
// Выпадающее меню
dropDownMenu();
// Действия при скролле:
//      Липкое мобильное меню
//      Появлние стрекли "Вверх"
fixedMenu();
// модальные окна
togglePopup();
// Мобильное меню
togglePopupMenu();
// Появлние стрекли "Вверх"
// Валидация форм
const errorValidList = validateForm();
// Отправка форм
sendForm(errorValidList);
