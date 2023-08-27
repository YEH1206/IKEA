function getRoomPics(rdata) {
    let roomPics = ''
    rdata.forEach(element => {
        roomPics += 
            `<div>
                <div>
                    <a href="./gallery.html?${element.room}">
                        <div class="card_img">
                            <span><img src="./Images/Rooms/${element.section[0].image}.jpg" alt="${element.section[0].name}"></span>
                        </div>
                        <div class="card_info">
                            <h2>${element.room}</h2>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </div>`
    });

    $('#rooms_container').append(roomPics)
}

function getGalleryPics(room, data) {
    console.log(data)
    let galleryPics = ''
    data.forEach(element => {
        galleryPics +=
        `<div>
            <div>
                <a href="./detail.html?${room}?${element.image}">
                    <div class="card_img">
                        <span><img src="./Images/Rooms/${element.image}.jpg" alt=""></span>
                    </div>
                    <div class="card_info">
                        <h2>${element.name}</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>`
    })
    $('#rooms_container').append(galleryPics)
}