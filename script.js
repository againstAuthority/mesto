let profile = document.querySelector('.profile');
let profileEditBtn = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close-button');
let popupSaveBtn = popup.querySelector('.popup__save-button');

function showEditPopup() {
    popup.classList.add('popup_opened');
    getProfileData();
}

function getProfileData() {
    let profileName = profile.querySelector('.profile__name');
    let profileInfo = profile.querySelector('.profile__about');
    let popupProfileName = popup.querySelector('.popup__item-profile-name');
    let popupProfileInfo = popup.querySelector('.popup__item-profile-about');

    popupProfileName.value = profileName.textContent;
    popupProfileInfo.value = profileInfo.textContent;
}

function saveProfile() {
    let profileName = document.querySelector('.profile__name');
    let profileInfo = document.querySelector('.profile__about');
    let popupProfileName = popup.querySelector('.popup__item-profile-name');
    let popupProfileInfo = popup.querySelector('.popup__item-profile-about');

    profileName.textContent = popupProfileName.value;
    profileInfo.textContent = popupProfileInfo.value;

    closeEditPopup();
}

function closeEditPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}


profileEditBtn.addEventListener('click', showEditPopup);
popupCloseBtn.addEventListener('click', closeEditPopup);
popupSaveBtn.addEventListener('click', saveProfile);