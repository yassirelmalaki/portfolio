

// seleccionar los elementos que van a interaccionar

const spanPhotoOne = document.querySelector('.highlight.photo-one');
const photoOne = document.querySelector('img.photo-one');

const spanPhotoTwo = document.querySelector('.highlight.photo-two');
const photoTwo = document.querySelector('img.photo-two');

const spanPhotoThree = document.querySelector('.highlight.photo-three');
const photoThree = document.querySelector('img.photo-three');

const spanPhotoFour = document.querySelector('.highlight.photo-four');
const photoFour = document.querySelector('img.photo-four');

const spanPhotoFive = document.querySelector('.highlight.photo-five');
const photoFive = document.querySelector('img.photo-five');

const spanPhotoSix = document.querySelector('.highlight.photo-six');
const photoSix = document.querySelector('img.photo-six');

const spanPhotoSeven = document.querySelector('.highlight.photo-seven');
const photoSeven = document.querySelector('img.photo-seven');

const spanPhotoEight = document.querySelector('.highlight.photo-eight');
const photoEight = document.querySelector('img.photo-eight');

// declararles un evento

spanPhotoOne.addEventListener('mouseover', (e) => {
  showPictureOne();
})

spanPhotoOne.addEventListener('mouseout', (e) => {
  hidePictureOne();
})

spanPhotoTwo.addEventListener('mouseover', (e) => {
  showPictureTwo();
})

spanPhotoTwo.addEventListener('mouseout', (e) => {
  hidePictureTwo();
})

spanPhotoThree.addEventListener('mouseover', (e) => {
  showPictureThree();
})
spanPhotoThree.addEventListener('mouseout', (e) => {
  hidePictureThree();
})

spanPhotoFour.addEventListener('mouseover', (e) => {
  showPictureFour();
})
spanPhotoFour.addEventListener('mouseout', (e) => {
  hidePictureFour();
})

spanPhotoFive.addEventListener('mouseover', (e) => {
  showPictureFive();
})
spanPhotoFive.addEventListener('mouseout', (e) => {
  hidePictureFive() 
  });

spanPhotoSix.addEventListener('mouseover', (e) => {
    showPictureSix();
  })
spanPhotoSix.addEventListener('mouseout', (e) => {
    hidePictureSix() 
  });

spanPhotoSeven.addEventListener('mouseover', (e) => {
      showPictureSeven();
    })
spanPhotoSeven.addEventListener('mouseout', (e) => {
      hidePictureSeven();
});

spanPhotoEight.addEventListener('mouseover', (e) => {
        showPictureEight();
      })
spanPhotoEight.addEventListener('mouseout', (e) => {
        hidePictureEight();
});
// escribes la funcion

const showPictureOne = () => {
  photoOne.classList.add('active');
}

const hidePictureOne = () => {
  photoOne.classList.remove('active');
}


const showPictureTwo = () => {
  photoTwo.classList.add('active');
}

const hidePictureTwo = () => {
  photoTwo.classList.remove('active');
}


const showPictureThree = () => {
  photoThree.classList.add('active');
}

const hidePictureThree = () => {
  photoThree.classList.remove('active');
}


const showPictureFour = () => {
  photoFour.classList.add('active');
}

const hidePictureFour = () => {
  photoFour.classList.remove('active');
}


const showPictureFive = () => {
  photoFive.classList.add('active');
}

const hidePictureFive = () => {
  photoFive.classList.remove('active');
}


const showPictureSix = () => {
  photoSix.classList.add('active');
}

const hidePictureSix = () => {
  photoSix.classList.remove('active');
}


const showPictureSeven = () => {
  photoSeven.classList.add('active');
}

const hidePictureSeven = () => {
  photoSeven.classList.remove('active');
}

const showPictureEight = () => {
  photoEight.classList.add('active');
}

const hidePictureEight = () => {
  photoEight.classList.remove('active');
}