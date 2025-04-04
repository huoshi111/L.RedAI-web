        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // 滚动时导航栏效果
// 修改原有滚动事件监听
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const scrollY = window.scrollY;

    // 导航栏动画
    if (scrollY > 90) {
        header.classList.add('scrolled');
        hero.style.transform = `translateY(${scrollY * 0.15}px) scale(0.98)`;
        hero.style.opacity = 1 - scrollY / 800;
    } else {
        header.classList.remove('scrolled');
        hero.style.transform = 'none';
        hero.style.opacity = 1;
    }

    // 原有背景颜色调整（改为通过class控制）
    header.style.backgroundColor = scrollY > 50 
        ? 'rgba(0, 0, 0, 0.8)' 
        : 'rgba(0, 0, 0, 0.4)';
});

// 添加加载时初始化
window.addEventListener('load', () => {
    document.querySelector('header').style.transition = 'all 0.3s ease';
});
        
        // 动态加载字体图标
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
        document.head.appendChild(fontAwesome);