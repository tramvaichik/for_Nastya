let peoplePhoto = [
    "/assets/images/people_photo/honeycomb.jpeg",
    "/assets/images/people_photo/in_flowers.jpeg",
    "/assets/images/people_photo/people.jpeg",
    "/assets/images/people_photo/people1.jpeg",
    "/assets/images/people_photo/people2.jpeg"
]

let peopleCounter = -1;

function peopleImgPrev() {
    let img = document.getElementById("people");
    if (peopleCounter < peoplePhoto.length - 1)
        peopleCounter ++
    else {
        peopleCounter = 0
    }
    img.src = peoplePhoto[peopleCounter];
}

function peopleImgNext() {
    let img = document.getElementById("people");
    if (peopleCounter > 0)
        peopleCounter --
    else {
        peopleCounter = peoplePhoto.length - 1
    }
    img.src = peoplePhoto[peopleCounter];
}



let familyPhoto = [
    "/assets/images/family_photo/family.jpeg",
    "/assets/images/family_photo/family2.jpg",
    "/assets/images/family_photo/family4.jpg",
    "/assets/images/family_photo/family5.jpg",
    "/assets/images/family_photo/family6.jpg"
]

let familyCounter = -1;

function familyImgPrev() {
    let img = document.getElementById("family");
    if (familyCounter < familyPhoto.length - 1)
        familyCounter ++
    else {
        familyCounter = 0
    }
    img.src = familyPhoto[familyCounter];
}

function familyImgNext() {
    let img = document.getElementById("family");
    if (familyCounter > 0)
        familyCounter --
    else {
        familyCounter = familyPhoto.length - 1
    }
    img.src = familyPhoto[familyCounter];
}


let foodPhoto = [
    "/assets/images/food_photo(vegan)/food.jpeg", 
    "/assets/images/food_photo(vegan)/food1.jpeg",
    "/assets/images/food_photo(vegan)/food2.jpeg",
    "/assets/images/food_photo(vegan)/food3.jpeg",
    "/assets/images/food_photo(vegan)/food4.jpeg"
]

let foodCounter = -1;

function foodImgPrev() {
    let img = document.getElementById("food");
    if (foodCounter < foodPhoto.length - 1)
        foodCounter ++
    else {
        foodCounter = 0
    }
    img.src = foodPhoto[foodCounter];
}

function foodImgNext() {
    let img = document.getElementById("food");
    if (foodCounter > 0)
        foodCounter --
    else {
        foodCounter = foodPhoto.length - 1
    }
    img.src = foodPhoto[foodCounter];
}

let weddingPhoto = [
    "/assets/images/wedding_photo/wedding1.jpeg",
    "/assets/images/wedding_photo/wedding2.jpeg",
    "/assets/images/wedding_photo/wedding3.jpeg",
    "/assets/images/wedding_photo/wedding4.jpeg",
    "/assets/images/wedding_photo/wedding5.jpeg"
]

let weddingCounter = -1;

function weddingImgPrev() {
    let img = document.getElementById("wedding");
    if (weddingCounter < weddingPhoto.length - 1)
        weddingCounter ++
    else {
        weddingCounter = 0
    }
    img.src = weddingPhoto[weddingCounter];
}

function weddingImgNext() {
    let img = document.getElementById("wedding");
    if (weddingCounter > 0)
        weddingCounter --
    else {
        weddingCounter = weddingPhoto.length - 1
    }
    img.src = weddingPhoto[weddingCounter];
}

let underwaterPhoto = [
    "/assets/images/underwater_photo/blue_dress.jpeg",
    "/assets/images/underwater_photo/pink_dress.jpeg",
    "/assets/images/underwater_photo/red_dress.jpeg",
    "/assets/images/underwater_photo/yellow_dress.jpeg",
]

let underwaterCounter = -1;

function underwaterImgPrev() {
    let img = document.getElementById("underwater");
    if (underwaterCounter < underwaterPhoto.length - 1)
        underwaterCounter ++
    else {
        underwaterCounter = 0
    }
    img.src = underwaterPhoto[underwaterCounter];
}

function underwaterImgNext() {
    let img = document.getElementById("underwater");
    if (underwaterCounter > 0)
        underwaterCounter --
    else {
        underwaterCounter = underwaterPhoto.length - 1
    }
    img.src = underwaterPhoto[underwaterCounter];
}






