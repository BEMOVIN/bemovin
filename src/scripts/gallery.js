import $ from 'jquery';

export class Gallery {
  static load() {
    const slideNum = 5;
    const imagesPerSlide = 8;
    for (let slide = 1; slide <= slideNum; slide++) {
      const galleryElem = $(`#bmv-gallery-${slide}`);
      for (let imgIdx = 1; imgIdx <= imagesPerSlide; imgIdx++) {
        const rawImgName = `0${imgIdx}`;
        const imgName = rawImgName.substr(rawImgName.length - 2);
        galleryElem.append(
          `
          <div class="bmv-gallery-img">
            <a href="assets/images/gallery/slide-${slide}/${imgName}.jpg" data-lightbox="bemovin">
              <img src="assets/images/gallery/slide-${slide}/${imgName}.thmb.jpg" alt="gallery image"
                class="image-responsive">
            </a>
          </div>
          `
        )
      }
    }
  }
}
