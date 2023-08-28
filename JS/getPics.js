function getRoomPics(rdata) {
    let roomPics = ''
    rdata.forEach(element => {
        roomPics += 
            `<div>
                <div>
                    <a href="./gallery.html?${element.room}">
                        <div class="card_img">
                            <span><img src="./Images/Rooms/${element.section[0].image}.avif" alt="${element.section[0].name}"></span>
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
    let galleryPics = ''
    data.forEach(element => {
        galleryPics +=
        `<div>
            <div>
                <a href="./detail.html?${room}?${element.image}">
                    <div class="card_img">
                        <span><img src="./Images/Rooms/${element.image}.avif" alt=""></span>
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

function getDetailPics(data) {
    let detailPics = ''
    detailPics += 
    console.log(data)
    `<div>
        <h1 class="current">${data.name}</h1>
        <p>${data.info}</p>
        <div id="main_pic">
        <span><img src="./Images/Rooms/${data.image}.avif" alt="${data.name}"></span>
        </div>
    </div>`
    data.detail.forEach(element => {
        detailPics += 
        `<div>
            <div class="detail_grid">
            <div class="detail_info">
                <div>
                <h2>${element.sub_name}</h2>
                <p>${element.sub_detail}</p>
                </div>
            </div>
            <div class="detail_pic">
                <div>
                <span><img src="./Images/Rooms/${element.sub_image}.avif" alt="${element.sub_name}"></span>
                </div>
                <div>
                <ul>
                    <li>
                    <a href=""></a>
                    <div></div>
                    </li>
                    <li>
                    <a href=""></a>
                    <div>
                        <a>
                        <div>
                            <div><span></span><span></span><span></span></div>
                            <div></div>
                        </div>
                        </a>
                    </div>
                    </li>
                    <li>
                    <a href=""></a>
                    <div></div>
                    </li>
                    <li>
                    <a href=""></a>
                    <div></div>
                    </li>
                    <li>
                    <a href=""></a>
                    <div></div>
                    </li>
                    <li>
                    <a href=""></a>
                    <div></div>
                    </li>
                </ul>
                </div>

            </div>
            </div>
        </div>`
    })
    $('#detail_contents').append(detailPics)
}
