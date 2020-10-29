let profileEditForm = document.querySelector('.popup__container');

let popup = document.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close-button');
let popupProfileName = popup.querySelector('.popup__input_profile_name');
let popupProfileInfo = popup.querySelector('.popup__input_profile_info');

let profileEditBtn = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__info');

function getProfileData() {
    popupProfileName.value = profileName.textContent;
    popupProfileInfo.value = profileInfo.textContent;
}

function showEditPopup() {
    popup.classList.add('popup_opened');
    getProfileData();
}

function closeEditPopup() {
    popup.classList.remove('popup_opened');
}

function saveProfileData (evt) {
    evt.preventDefault(); 
    profileName.textContent = popupProfileName.value;
    profileInfo.textContent = popupProfileInfo.value;
    closeEditPopup();
}

profileEditBtn.addEventListener('click', showEditPopup);
profileEditForm.addEventListener('submit', saveProfileData); 
popupCloseBtn.addEventListener('click', closeEditPopup);