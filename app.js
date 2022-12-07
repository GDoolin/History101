const PageRoot = document.querySelector(".PageRoot");
const NavBar = document.querySelector(".NavBar");
const NavTitle = document.querySelector(".NavTitle");
const NavButton = document.querySelector(".NavButton");
const MainGallerySection = document.querySelector(".MainGallerySection");
const MainGalleryPhotoOne = document.querySelector("#MainGalleryPhotoOne");
const MainGalleryPhotoTwo = document.querySelector("#MainGalleryPhotoTwo");
const MainGalleryPhotoThree = document.querySelector("#MainGalleryPhotoThree");
const IntroBanner = document.querySelector(".IntroBanner");
const IntroBannerPhrase = document.querySelector(".IntroBannerPhrase");
const IntroBannerPhraseOne = document.querySelector("#IntroBannerPhraseOne");
const IntroBannerPhraseTwo = document.querySelector("#IntroBannerPhraseTwo");
const IntroBannerPhraseThree = document.querySelector("#IntroBannerPhraseThree");
const InfoCardSection = document.querySelector(".InfoCardSection");
const Left = document.querySelectorAll(".Left");
const Right = document.querySelectorAll(".Right");
const FooterBar = document.querySelectorAll(".FooterBar");
const FooterBarContainer = document.querySelectorAll(".FooterBarContainer");



const timeline = new TimelineMax();

timeline

.fromTo(NavBar, 1, {height: "0rem"}, {height: "3rem", ease: Power2.easeInOut})

.fromTo(NavTitle, 1, {color: "rgb(20, 20, 20, 255)"}, {color: "rgb(255, 255, 255, 255)", ease: Power2.easeInOut}, "-=0.75")
.fromTo(NavTitle, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1")

.fromTo(NavButton, 1, {fill: "rgb(20, 20, 20, 255)"}, {fill: "rgb(255, 255, 255, 255)", ease: Power2.easeInOut}, "-=1")
.fromTo(NavButton, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1")

.fromTo(MainGallerySection, 1, {y: "-100%"}, {y: "0%", ease: Power2.easeInOut}, "-=0.5")

.fromTo(MainGalleryPhotoThree, 3, {x: "-6000px"}, {x: "0px", ease: Power2.easeInOut}, "-=1.5")
.fromTo(MainGalleryPhotoThree, 3, {rotate: "-2.5deg"}, {rotate: "2.5deg", ease: Power2.easeInOut}, "-=3")
.fromTo(MainGalleryPhotoThree, 3, {scale: "0.75"}, {scale: "1", ease: Power2.easeInOut}, "-=3")

.fromTo(MainGalleryPhotoTwo, 3, {x: "-6000px"}, {x: "0px", ease: Power2.easeInOut}, "-=3")
.fromTo(MainGalleryPhotoTwo, 3, {rotate: "-5deg"}, {rotate: "0deg", ease: Power2.easeInOut}, "-=3")
.fromTo(MainGalleryPhotoTwo, 3, {scale: "0.75"}, {scale: "1", ease: Power2.easeInOut}, "-=3")

.fromTo(MainGalleryPhotoOne, 3, {x: "-6000px"}, {x: "0px", ease: Power2.easeInOut}, "-=3")
.fromTo(MainGalleryPhotoOne, 3, {rotate: "-7.5deg"}, {rotate: "-2.5deg", ease: Power2.easeInOut}, "-=3")
.fromTo(MainGalleryPhotoOne, 3, {scale: "0.75"}, {scale: "1", ease: Power2.easeInOut}, "-=3")

.fromTo(IntroBanner, 1, {height: "0rem"}, {height: "5rem", ease: Power2.easeInOut}, "-=1.5")

.fromTo(IntroBannerPhraseOne, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.33")
.fromTo(IntroBannerPhraseTwo, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.33")
.fromTo(IntroBannerPhraseThree, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.33")

.fromTo(Left, 2, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut})
.fromTo(Right, 2, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=2")

.fromTo(FooterBar, 1, {height: "0rem"}, {height: "6rem", ease: Power2.easeInOut}, "-=1")
.fromTo(FooterBarContainer, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.75")
