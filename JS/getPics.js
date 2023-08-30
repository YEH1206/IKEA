function getRoomPics(relement) {
    let roomPics = ''
    relement.forEach(element => {
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

function getGalleryPics(room, element) {
    let galleryPics = ''
    element.forEach(element => {
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

function getDetailPics(element) {
    let detailPics = ''
    detailPics += 
        `<div>
            <h1 class="current">${element.name}</h1>
            <p>${element.info}</p>
            <div id="main_pic">
            <span><img src="./Images/Rooms/${element.image}.avif" alt="${element.name}"></span>
            </div>
        </div>`
    element.detail.forEach(element => {
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
                <div style="position:relative">
                <ul>`
        for (let i = 0; i < element.sub_items.length; i++) {
            let item = element.sub_items[i]
            detailPics += 
            `<li>
            <a href="prd_detail.html?${item.name}" class="image_dot" style="top: ${item.place[0]}; left:${item.place[1]}; position: relative"></a>
            <div style="display: none;">
              <a href="prd.html?${item.name}">
                <div style="border-radius: 3px; position: absolute; top: ${item.place[2]}; left:${item.place[3]};">
                  <div style="width: 130px;">
                    <h3><span style="font-size: 14px;">${item.name}</span></h3>
                    <span style="font-size: 14px; margin-bottom: 4px;">${item.info}</span>
                    <span style="font: 22px;"><i class="fa-solid fa-won-sign" style="font-size: 11px;"></i> ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
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

function getPrdDetail(element){
    console.log(element)
    let prd_pic = ''
    prd_pic += `
        <img src="./Images/Prd/${element.name}.avif" alt="${element.name}">
          <div>
            <p>${element.narr}
            </p>
            <p>제품번호<br><span>${element.prd_num}</span></p>
          </div>`
    $('#prd_left').append(prd_pic)

    let prd_info = ''
    prd_info += `
          <div id="prd_info_box">
            <h1>${element.name}</h1>
            <p id="prd_info">${element.info}</p>
            <span><i class="fa-solid fa-won-sign" style="font-size: 14px;"></i> ${element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            <div>
              <p>색상 선택</p>
              <span id="picked_color">${element.color[0]}</span>
              <div class="picked_color_img">`
    for (let i = 0; i < element.color.length; i++) {
      if (i==0) {
        prd_info += `<img class="selected" src="./Images/Prd/${element.name}${element.color[i]}.webp" alt="${element.color[i]}"></img>`
      } else{
        prd_info += `<img src="./Images/Prd/${element.name}${element.color[i]}.webp" alt="${element.color[i]}"></img>`
      }
    }
    prd_info += `</div>
            </div>
          </div>
          <div id="prd_buttons">
            <div id="prd_qty_form">
              <button type="button" class="qty__minus">-</button>
              <input type="text" value="1" class="qty__input">
              <button type="button" class="qty__plus">+</button>
            </div>
            <button type="submit" class="cart">구매하기</button>
          </div>
        </div>`
    $('#prd_right').append(prd_info)
}

function getAllPrd(data){
    let all_prd = ''
    data.forEach(element => {
        all_prd +=
        `<div class="one_container">
        <a href="./prd_detail.html?${element.name}" style="text-decoration: none;">
          <div class="one_img">
            <img src="./Images/Prd/${element.name}.avif" alt="${element.name}">
          </div>
          <div class="one_info">
            <h2 class="name">${element.name}</h2>
            <p><span class="info">${element.info}</span>, <span class="color">${element.color[0]}</span></p>
            <p class="price"><i class="fa-solid fa-won-sign" style="font-size: 14px;"></i> ${element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          </div></a>
        <div>
            <button type="submit" class="cart"><i class="fa-solid fa-basket-shopping"></i></button>
        </div>
      </div>`
    })
    $('#all_container').append(all_prd)
}