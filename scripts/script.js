//1. Выбираю кнопку редактирования профиля editButton
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup');

//2. Выбираю кнопку закрытия формы closeButton
const closeButton = popupEditProfile.querySelector('.popup__close-button');

//3. Находим форму в DOM
let formElement = document.querySelector('.popup__form');

//4. Находим поля формы в DOM --- перенесено со стр.33-34
let nameInput = formElement.querySelector('.popup__input_name_name'); //раньше был поиск по всему документу
let jobInput = formElement.querySelector('.popup__input_name_job');
// это поля ФОРМЫ ВВОДА, которые при открытии попапа должны автоматически заполняться значениями полей из профиля

//5. Выберите элементы, куда должны быть вставлены значения полей --- перенесено со стр. 46-47
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');
//это ПОЛЯ ИЗ ПРОФИЛЯ


//6. ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА  (которая будет добавлять блоку popup модификатор _opened)
function handleEditButton() {
  popupEditProfile.classList.add('popup_opened');
  //сюда надо дописать, что value поля ФОРМЫ ВВОДА = textContent соответствующего поля из profile
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

};
//6.1. слушатель КЛИКА по кнопке редактирования, он же ВЫЗОВ ФУНКЦИИ
editButton.addEventListener('click', handleEditButton);


//7. ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА (убирает из блока popup модификатор _opened)
function handleCloseButton() {
  popupEditProfile.classList.remove('popup_opened');
};
//7.1. слушатель КЛИКА по кнопке закрытия формы
closeButton.addEventListener('click', handleCloseButton);

//8. ФУНКЦИЯ- ОБРАБОТЧИК «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  //8.1. Вставьте новые значения с помощью textContent => имя из ПРОФИЛЯ = имя из ФОРМЫ ВВОДА
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //8.2. Вызов функции закрытия попапа
  handleCloseButton();
}
//9. Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка».
formElement.addEventListener('submit', handleFormSubmit);