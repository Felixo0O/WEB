$(function () {
    //1.获取数据
    let page = 0,
        imgData = null,
        isRun = false;
    let queryData = () => {
        page++;
        $.ajax({
            url: `json/data.json?page=${page}`,
            method: 'get',
            async: false,
            dataType: 'json',
            success: result => {
                imgData = result;
            }
        });
    };
    queryData();

    //2.数据绑定
    let bindHTML = () => {
        let $boxList = $('.flowBox > li');
        for (let i = 0; i < imgData.length; i += 3) {
            $boxList.sort((a, b) => {
                return $(a).outerHeight() - $(b).outerHeight();
            }).each((index, curLi) => {
                let item = imgData[i + index];
                if (!item) return;
                let {id, pic, link, title} = item;
                $(`<a href="${link}">
                    <div><img src="${pic}" alt=""></div>
                    <span>${title}</span>
                </a>`).appendTo($(curLi));
            });
        }
        isRun = false;
    };
    bindHTML();
    
    //3.当滚动到页面底部的时候，加载下一页的更多数据
    $(window).on('scroll', () => {
        let winH = $(window).outerHeight(),
            pageH = document.documentElement.scrollHeight || document.body.scrollHeight,
            scrollT = $(window).scrollTop();
        if ((scrollT + 100) >= (pageH - winH)) {
            if (isRun) return;
            isRun = true;
            if (page > 5) {
                alert('没有更多数据了');
                return;
            }
            queryData();
            bindHTML();
        }
    });
});