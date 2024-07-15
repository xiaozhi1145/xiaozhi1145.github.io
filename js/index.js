document.addEventListener('DOMContentLoaded', function() {
    // 选择汉堡菜单按钮
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    // 选择移动导航菜单
    var mobileNav = document.querySelector('.mobile-nav');

    // 检查这两个元素是否存在
    if (hamburgerMenu && mobileNav) {
        // 为汉堡菜单按钮添加点击事件监听器
        hamburgerMenu.addEventListener('click', function() {
            // 切换移动导航菜单的显示和隐藏
            mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
        });
    } else {
        console.error('Hamburger menu or mobile navigation not found in the DOM.');
    }
});