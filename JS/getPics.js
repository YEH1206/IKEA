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
                <ul>`
        for (let i = 0; i < element.sub_items.length; i++) {
            let item = element.sub_items[i]
            console.log(item)
            detailPics += 
            `<li>
            <a href="prd_detail.html?" class="image_dot" style="top: ${item.place[0]}; left:${item.place[1]};"></a>
            <div style="display: none;">
              <a href="prd.html">
                <div style="border-radius: 3px; position: absolute; top: ${item.place[2]}; left:${item.place[3]}">
                  <div style="width: 130px;">
                    <h3><span style="font-size: 14px; margin-bottom: 4px;">${item.name}</span></h3>
                    <span style="font-size: 14px; margin-bottom: 4px;">${item.info}</span>
                    <span style="font: 22px;"><i class="fa-solid fa-won-sign" style="font-size: 11px;"></i> ${item.price}</span>
                  </div>
                </div>
              </a>
            </div>
          </li>`
        }
        
        detailPics += 
                `</ul>
              </div>
            </div>
            </div>
        </div>`
    })
    $('#detail_contents').append(detailPics)
}
