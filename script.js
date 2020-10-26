let popup = document.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close-button');
let popupSaveBtn = popup.querySelector('.popup__save-button');
let popupProfileName = popup.querySelector('.popup__profile-name');
let popupProfileInfo = popup.querySelector('.popup__profile-info');

let profileEditBtn = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__info');


function showEditPopup() {
    popup.classList.add('popup_opened');
    getProfileData();
}

function closeEditPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}

function getProfileData() {
    popupProfileName.value = profileName.textContent;
    popupProfileInfo.value = profileInfo.textContent;
}

function setProfileData() {
    profileName.textContent = popupProfileName.value;
    profileInfo.textContent = popupProfileInfo.value;

    closeEditPopup();
}

profileEditBtn.addEventListener('click', showEditPopup);
popupCloseBtn.addEventListener('click', closeEditPopup);
popupSaveBtn.addEventListener('click', setProfileData);