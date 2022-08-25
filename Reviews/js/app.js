let rightBtn = document.querySelector('.arrow-right')
let leftBtn = document.querySelector('.arrow-left')
let surpriseBtn = document.querySelector('.surprise-btn')
let name = document.querySelector('.author')
let career = document.querySelector('.review-career')
let text = document.querySelector('.review-text')
let picture = document.querySelector('.review-img')
let reviews = []

class Author {
  constructor(aname, career, review, img) {
    this.aname = aname,
    this.career = career,
    this.review = review,
    this.img = img
  }
}

let review1 = new Author('Amelia Pond', 'UX Designer', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus finibus ipsum dui, a aliquet purus faucibus vel.', 'img/review1.jpg')
let review2 = new Author('George Smith', 'Doctor', 'Phasellus ullamcorper dictum semper. Quisque nec facilisis purus. Aliquam et velit urna.', 'img/review2.jpg')
let review3 = new Author('Simon Ricci', 'Software Engineer', 'Vivamus tortor nisl, posuere id arcu at, ornare semper orci. Suspendisse tristique tortor nec diam rutrum elementum.', 'img/review3.jpg')
let review4 = new Author('Anne Jones', 'UX Writer', 'Sed lobortis mauris sit amet facilisis lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae', 'img/review4.jpg')
let review5 = new Author('Lily Phan', 'French Teacher', ' Vestibulum accumsan, dolor vel consequat placerat, orci augue tincidunt dui, dignissim fermentum nibh nulla at turpis.', 'img/review5.jpg')
let review6 = new Author('Olivia Melin', 'UX Writer', 'Sed lobortis mauris sit amet facilisis lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae', 'img/review6.jpg')

reviews.push(review1, review2, review3, review4, review5, review6)

rightBtn.addEventListener('click', () => {
  let reviewImg = document.querySelector('.review-img').src
  let imgNum = parseInt(reviewImg.substr(-5, 1))
  //let newNum
  if(imgNum < 6) {
    //newNum = imgNum + 1
    name.innerText = reviews[imgNum].aname
    career.innerText = reviews[imgNum].career
    text.innerText = reviews[imgNum].review
    picture.src = reviews[imgNum].img
  }

  if(imgNum == 6) {
    imgNum = 0
    name.innerText = reviews[imgNum].aname
    career.innerText = reviews[imgNum].career
    text.innerText = reviews[imgNum].review
    picture.src = reviews[imgNum].img
  }
})

leftBtn.addEventListener('click', () => {
  let reviewImg = document.querySelector('.review-img').src
  let imgNum = parseInt(reviewImg.substr(-5, 1))
  if(imgNum > 1) {
    name.innerText = reviews[imgNum - 2].aname
    career.innerText = reviews[imgNum - 2].career
    text.innerText = reviews[imgNum - 2].review
    picture.src = reviews[imgNum - 2].img
  }

  if(imgNum == 1) {
    imgNum = 5
    name.innerText = reviews[imgNum].aname
    career.innerText = reviews[imgNum].career
    text.innerText = reviews[imgNum].review
    picture.src = reviews[imgNum].img
  }
})

surpriseBtn.addEventListener('click', () => {
  let reviewImg = document.querySelector('.review-img').src
  let imgNum = parseInt(reviewImg.substr(-5, 1))

  let randomReview = Math.random() * (5 - 0) + 0
  randomReview = Math.floor(randomReview)
  console.log(randomReview)
  console.log(imgNum)

  if (imgNum == randomReview && randomReview != 5) {
    name.innerText = reviews[randomReview + 1].aname
    career.innerText = reviews[randomReview + 1].career
    text.innerText = reviews[randomReview + 1].review
    picture.src = reviews[randomReview + 1].img
  }
  else if(imgNum != randomReview) {
    name.innerText = reviews[randomReview].aname
    career.innerText = reviews[randomReview].career
    text.innerText = reviews[randomReview].review
    picture.src = reviews[randomReview].img
  }
  else if(imgNum == randomReview && randomReview == 5) {
    name.innerText = reviews[randomReview - 1].aname
    career.innerText = reviews[randomReview - 1].career
    text.innerText = reviews[randomReview - 1].review
    picture.src = reviews[randomReview - 1].img
  }
})