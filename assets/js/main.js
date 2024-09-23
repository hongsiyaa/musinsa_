
$(window).scroll(function(){
    winTop = $(this).scrollTop();
    if (winTop > 0) {
        $('#header, #main .container').addClass('active');
    }else{
        $('#header, #main .container').removeClass('active');
    }
})

// fetch('./assets/data/bigBanner.json')
// .then(res=>res.json())
// .then(json=>{

//     bigBannerArr = json.contents;
//     let html=``;
//     bigBannerArr.forEach(element => {
//         html+=`  <div class="swiper-slide">
//                     <a href="">
//                         <img src="${element.thumbnailURL}" alt="">
//                         <div class="text-wrap">
//                             <strong class="title">${element.title}</strong>
//                             <span class="desc">${element.description}</span>
//                         </div>
//                     </a>
//                 </div>`;
//     });

//     $('#bigBannerList').html(html);
// })



//visual slide
visualSlide = new Swiper('.visual-slide',{
    loop: true,
    autoplay: {
        delay: 5000, 
    },
    pagination: {
        el:'.swiper-pagination',
        type: "fraction",
    }
});

var cateSlide = new Swiper(".cate-slide", {
    slidesPerView: 'auto',
    grid: {
    fill:"row",
      rows: 2,
    },
    spaceBetween: 16,
  });

prdslide = new Swiper('.prd-slide',{
    slidesPerView:"auto",
    grabCursor: true,
    freeMode:true,
    resistance:true,    
    resistanceRatio: 0,
    spaceBetween:10,
});

issueslide = new Swiper('.issue-slide',{
    slidesPerView:"auto",
    grabCursor: true,
    freeMode:true,
    resistance:true,    
    resistanceRatio: 0,
    spaceBetween:10,
});

liveslide = new Swiper('.live-slide',{
    slidesPerView:"auto",
    grabCursor: true,
    freeMode:true,
    resistance:true,    
    resistanceRatio: 0,
    spaceBetween:10,
});



detailrecSlide = new Swiper('.detailrec-slide',{
    loop: true,
    autoplay: {
        delay: 5000, 
    },
    pagination: {
        el:'.swiper-pagination',
    }
});

//nav date
$('#saleDay').countdown('2024/06/18', function(event) {
    $(this).html(event.strftime('%H:%M:%S'));
});

$('#scroll-top').click(function(){
    $('html, body').animate({
        scrollTop : 0}, 400)
        return false;
})

//footer
$('#footer .btn-info').click(function () {
    if(!$(this).hasClass('on')){
        $('#footer .btn-info').removeClass('on').siblings('.info-text').slideUp();
        $(this).addClass('on').siblings('.info-text').slideDown();
    }else{
        $(this).removeClass('on').siblings('.info-text').slideUp();
        
    }
})

$('#footer .gender-area .total').click(function () {
    $(this).addClass('hide').siblings('.gender-detail').addClass('on');
})


fetch('./assets/json/bigbanner.json')
.then(res=>res.json())
.then(json=>{
    bigBannerArr = json.contents;
    //console.log(bigBannerArr);

    let html=``;

    bigBannerArr.forEach(element => {
        html+=`<div class="swiper-slide">
                <a href="">
                    <img src="${element.thumbnailURL}" alt="">
                    <div class="text-wrap">
                        <strong class="title">${element.title}</strong>
                        <span class="desc">${element.description}</span>
                    </div>
                </a>
            </div>`
    });
    $('#bigBannerList').html(html);

})

fetch('./assets/json/quickMenu.json')
.then(res=>res.json())
.then(json=>{
    quickMenuArr = json.contents;
    //console.log(bigBannerArr);

    let html=``;

    quickMenuArr.forEach(element => {
        html+=`  <li class="swiper-slide cate-item">
        <a href="${element.linkURL}" class="cate-title">
            <img src="${element.thumbnailURL}" alt="">
            <span class="name">${element.title}</span>
        </a>
    </li>`;
    });
    $('#quickMenuList').html(html);

})

fetch('./assets/json/todaySale.json')
.then(res=>res.json())
.then(json=>{
    todaySaleArr = json.goods;
    //console.log(bigBannerArr);

    let html=``;

    todaySaleArr.forEach(element => {
        html+=`<li class="swiper-slide prd-item">                                
                    <div class="img-wrap">
                        <div class="img-vertical">
                            <img src="${element.thumbnailURL}" alt="">
                        </div>
                        <button class="btn-heart">
                            <span class="blind">좋아요</span>
                            <svg class="main__sc-1jrilbs-11 gHstnJ" width="22" height="22" viewBox="0 0 22 22"><title>좋아요</title><defs><filter id="9vl3mev2pb4029600" width="116.4%" height="118.9%" x="-8.2%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha4029600" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha4029600" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix></filter><filter id="wtpsksbhjc4029600" width="129.6%" height="132.8%" x="-14.8%" y="-16.4%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha4029600" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix></filter><path id="jnerokenza4029600" d="M9.997 5.398l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path><path id="fhomqf994d4029600" d="M2.54 4.69c-2.254 2.255-2.254 5.91 0 8.164l8.45 8.448 8.448-8.448c2.254-2.254 2.254-5.91 0-8.163l-.186-.178c-2.265-2.075-5.784-2.016-7.978.178l-.285.285-.285-.285c-2.254-2.255-5.91-2.255-8.163 0zm7.457.708l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path></defs><g fill="none" fill-rule="evenodd"><g fill="black" opacity=".1" transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-inner"><use xlink:href="#jnerokenza4029600"></use><use filter="url(#9vl3mev2pb4029600)" xlink:href="#jnerokenza4029600"></use></g><g transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-line"><use fill="#000" filter="url(#wtpsksbhjc4029600)" xlink:href="#fhomqf994d4029600"></use><use fill="#fff" xlink:href="#fhomqf994d4029600"></use></g></g></svg>
                        </button>
                    </div>
                    <div class="txt-wrap">
                        <p class="title">${element.goodsName}</p>
                        <p class="price"><span class="sale">${element.saleRate}</span>${element.price}</p>
                    </div>
                <a href="${element.linkURL}" class="link-prd"></a>
            </li>`;
    });
    $('#todaySale').html(html);

})

fetch('./assets/json/brandBanner.json')
.then(res=>res.json())
.then(json=>{
    brandBannerArr = json.contents;

    let html=``;

    brandBannerArr.forEach(element => {
        html+=` <li class="issue-item swiper-slide">                            
                    <img src="${element.thumbnailURL}" alt="">
                    <div class="txt-wrap">
                        <span class="desc">${element.title}</span>
                        <strong class="title">${element.description}</strong>
                    </div>
                    <a href="${element.linkURL}" class="link"></a>
                </li>`;
    });
    $('#brandBanner').html(html);
})

fetch('./assets/json/feedType01.json')
.then(res=>res.json())
.then(json=>{
    feedType01Arr = json.goods;

    let html=``;

    feedType01Arr.forEach(element => {
        html+=`<li class="prd-item">
                    <div class="img-wrap">
                        <div class="img-vertical">
                            <img src="${element.thumbnailURL}" alt="">
                        </div>
                        <button class="btn-heart">
                            <span class="blind">좋아요</span>
                            <svg class="main__sc-1jrilbs-11 gHstnJ" width="22" height="22" viewBox="0 0 22 22"><title>좋아요</title><defs><filter id="9vl3mev2pb4029600" width="116.4%" height="118.9%" x="-8.2%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha4029600" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha4029600" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix></filter><filter id="wtpsksbhjc4029600" width="129.6%" height="132.8%" x="-14.8%" y="-16.4%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha4029600" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix></filter><path id="jnerokenza4029600" d="M9.997 5.398l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path><path id="fhomqf994d4029600" d="M2.54 4.69c-2.254 2.255-2.254 5.91 0 8.164l8.45 8.448 8.448-8.448c2.254-2.254 2.254-5.91 0-8.163l-.186-.178c-2.265-2.075-5.784-2.016-7.978.178l-.285.285-.285-.285c-2.254-2.255-5.91-2.255-8.163 0zm7.457.708l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path></defs><g fill="none" fill-rule="evenodd"><g fill="black" opacity=".1" transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-inner"><use xlink:href="#jnerokenza4029600"></use><use filter="url(#9vl3mev2pb4029600)" xlink:href="#jnerokenza4029600"></use></g><g transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-line"><use fill="#000" filter="url(#wtpsksbhjc4029600)" xlink:href="#fhomqf994d4029600"></use><use fill="#fff" xlink:href="#fhomqf994d4029600"></use></g></g></svg>
                        </button>
                    </div>
                    <div class="txt-wrap">
                        <p class="title2">${element.goodsName}</p>
                        <p class="price"><span class="sale">${element.saleRate}%</span>${element.price}</p>
                    </div>
                        <a href="${element.linkURL}" class="link"></a>
                </li>`;
    });
    $('#feedType01').html(html);
})

fetch('./assets/json/feedType02.json')
.then(res=>res.json())
.then(json=>{
    feedType02Arr = json.goods;

    let html=``;

    feedType02Arr.forEach(element => {
        html+=`<li class="prd-item">
                    <div class="img-wrap">
                        <div class="img-vertical">
                            <img src="${element.thumbnailURL}" alt="">
                        </div>
                        <button class="btn-heart">
                            <span class="blind">좋아요</span>
                            <svg class="main__sc-1jrilbs-11 gHstnJ" width="22" height="22" viewBox="0 0 22 22"><title>좋아요</title><defs><filter id="9vl3mev2pb4029600" width="116.4%" height="118.9%" x="-8.2%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha4029600" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha4029600" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix></filter><filter id="wtpsksbhjc4029600" width="129.6%" height="132.8%" x="-14.8%" y="-16.4%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha4029600" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix></filter><path id="jnerokenza4029600" d="M9.997 5.398l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path><path id="fhomqf994d4029600" d="M2.54 4.69c-2.254 2.255-2.254 5.91 0 8.164l8.45 8.448 8.448-8.448c2.254-2.254 2.254-5.91 0-8.163l-.186-.178c-2.265-2.075-5.784-2.016-7.978.178l-.285.285-.285-.285c-2.254-2.255-5.91-2.255-8.163 0zm7.457.708l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path></defs><g fill="none" fill-rule="evenodd"><g fill="black" opacity=".1" transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-inner"><use xlink:href="#jnerokenza4029600"></use><use filter="url(#9vl3mev2pb4029600)" xlink:href="#jnerokenza4029600"></use></g><g transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-line"><use fill="#000" filter="url(#wtpsksbhjc4029600)" xlink:href="#fhomqf994d4029600"></use><use fill="#fff" xlink:href="#fhomqf994d4029600"></use></g></g></svg>
                        </button>
                    </div>
                    <div class="txt-wrap">
                        <p class="title2">${element.goodsName}</p>
                        <p class="price"><span class="sale">${element.saleRate}%</span>${element.price}</p>
                    </div>
                        <a href="${element.linkURL}" class="link"></a>
                </li>`;
    });
    $('#feedType02').html(html);
})

fetch('./assets/json/feedType03.json')
.then(res=>res.json())
.then(json=>{
    feedType03Arr = json.goods;

    let html=``;

    feedType03Arr.forEach(element => {
        html+=`<li class="prd-item">
                    <div class="img-wrap">
                        <div class="img-vertical">
                            <img src="${element.thumbnailURL}" alt="">
                        </div>
                        <button class="btn-heart">
                            <span class="blind">좋아요</span>
                            <svg class="main__sc-1jrilbs-11 gHstnJ" width="22" height="22" viewBox="0 0 22 22"><title>좋아요</title><defs><filter id="9vl3mev2pb4029600" width="116.4%" height="118.9%" x="-8.2%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha4029600" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha4029600" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix></filter><filter id="wtpsksbhjc4029600" width="129.6%" height="132.8%" x="-14.8%" y="-16.4%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha4029600" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix></filter><path id="jnerokenza4029600" d="M9.997 5.398l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path><path id="fhomqf994d4029600" d="M2.54 4.69c-2.254 2.255-2.254 5.91 0 8.164l8.45 8.448 8.448-8.448c2.254-2.254 2.254-5.91 0-8.163l-.186-.178c-2.265-2.075-5.784-2.016-7.978.178l-.285.285-.285-.285c-2.254-2.255-5.91-2.255-8.163 0zm7.457.708l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path></defs><g fill="none" fill-rule="evenodd"><g fill="black" opacity=".1" transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-inner"><use xlink:href="#jnerokenza4029600"></use><use filter="url(#9vl3mev2pb4029600)" xlink:href="#jnerokenza4029600"></use></g><g transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-line"><use fill="#000" filter="url(#wtpsksbhjc4029600)" xlink:href="#fhomqf994d4029600"></use><use fill="#fff" xlink:href="#fhomqf994d4029600"></use></g></g></svg>
                        </button>
                    </div>
                    <div class="txt-wrap">
                        <p class="title2">${element.goodsName}</p>
                        <p class="price"><span class="sale">${element.saleRate}%</span>${element.price}</p>
                    </div>
                        <a href="${element.linkURL}" class="link"></a>
                </li>`;
    });
    $('#feedType03').html(html);
})

fetch('./assets/json/liveSchedule.json')
.then(res=>res.json())
.then(json=>{
    liveScheduleArr = json.contents;

    let html=``;

    liveScheduleArr.forEach(element => {
        html+=` <li class="swiper-slide live-item">                                
                    <div class="img-wrap">
                        <img src="${element.thumbnailURL}" alt="">
                        <span class="date">오늘 오후 7시 57분</span>
                    </div>
                    <strong class="title">${element.title}</strong>
                    <a href="${element.linkURL}" class="link"></a>
                </li> `;
    });
    $('#liveSchedule').html(html);
})

