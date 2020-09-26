import Photo from './Photo/index.js'

let photoPreview = document.getElementById('photo-preview')
let image;
let photoName;

window.addEventListener('DOMContentLoaded', () => {
  Photo.load()
})

document.getElementById('select-image')
  .addEventListener('click', () => {
    document
      .getElementById('photo-file')
      .click()
  })

Photo.cropButton.onclick = () => Photo.crop()

Photo.downloadButton.onclick = () => Photo.download()