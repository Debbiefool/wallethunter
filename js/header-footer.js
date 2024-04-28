// rwd點擊漢堡出現主選單
document.addEventListener('DOMContentLoaded', function () {
    var cartIcon = document.querySelector('.fa-cart-shopping');
    var navMenu = document.querySelector('.nav');

    cartIcon.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});

document.getElementById('shopping-cart').addEventListener('click', function (event) {
    event.preventDefault();  // 阻止連結默認的點擊行為
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
    setTimeout(function () {
        nav.classList.toggle('active');
    }, 10);
});


// rwd header 搜尋框滑動出現
document.addEventListener("click", function (event) {
    if (event.target.closest('.first button')) {
        const secondaryMenu = document.querySelector(".secondary");
        secondaryMenu.classList.toggle("show");
        setTimeout(function () {
            secondaryMenu.classList.toggle("active");
        }, 10);
    }
});





//子選單滑動出現 
document.addEventListener('DOMContentLoaded', function () {
    var mainProductButton = document.querySelectorAll('.nav .list')[2]; // 選擇第三個.list元素

    mainProductButton.addEventListener('click', function () {
        var navList = document.querySelector('.nav-list');
        navList.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var mainProductButton = document.querySelectorAll('.nav-list .back'); // 選擇第三個.list元素

    mainProductButton.addEventListener('click', function () {
        var navList = document.querySelector('.nav-list');
        navList.classList.toggle('close');
    });
});

// search-bar
$(document).ready(function () {
    $('#search').focus(function () {
        $(this).attr('placeholder', '');
    });

    $('#search').blur(function () {
        $(this).attr('placeholder', '想找什麼玩具呢~');
    });
});


// 获取回到顶部按钮元素
const topButton = document.querySelector('.top-btn');

// 隐藏回到顶部按钮
topButton.style.display = 'none';

window.addEventListener('scroll', () => {
    // 获取当前滚动位置
    const scrollPosition = window.pageYOffset;

    // 如果滚动位置超过300px，显示回到顶部按钮，否则隐藏按钮
    if (scrollPosition > 50) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

// 回到顶部按钮点击事件处理
topButton.addEventListener('click', () => {
    // 平滑滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
