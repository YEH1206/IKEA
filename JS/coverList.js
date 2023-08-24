function usedata(room){
    let newdata = data.filter(value => value.room == room)
    let content = ``

    newdata.forEach(value=>{
        content += `<div id="${value.image}">`
        content += `<img src="./Images/coverImages/${value.image}" alt="${value.image}">`
        value.items.forEach(item=>{
            content += `<a href="./detail.html?${item}">${item}</a>`
        })
        content += `</div>`
    })
    $('.list .product div').remove()
    $('.list .product').append(content)

    /* let newdata = data.filter( value => value.mcategory == mcate )
    console.log(newdata)

    let ulli = `<ul>`
    newdata.forEach(value=>{
        ulli += `<li>`
        ulli += `<a href="./detail.html?${value.name}&${value.price}&${value.image}&${value.detailinfo}&${value.option.size}&${value.option.color}">`
        ulli += `<img src="./images/${value.image}" alt="${value.name}">`
        ulli += `<div class="info">`
        ulli += `<p class="name">${value.name}</p>`
        ulli += `<p class="price">${value.price}</p>`
        ulli += `</div>`
        ulli += `</a>`
        ulli += `</li>`
    })
    ulli += "</ul>"
    $('.list .product ul').remove()
    $('.list .product').append(ulli) */
}

$('.list .subcate li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on')
    let text = $(this).text()
    usedata(text)
})