function getRoomPics(rdata) {
    let roomPics = ''
    rdata.forEach(element => {
        roomPics += 
            `<div>
                <div>
                    <a href="./gallery.html?${element.room}">
                        <div class="card_img">
                            <span><img src="./Images/Rooms/${element.section[0].image}" alt="${element.section[0].name}"></span>
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

function getGalleryPics(room) {
    let galleryPics = ''
    console.log(rdata)
    rdata.forEach(element => {
        console.log(element)
        element.room == 1
    })
}