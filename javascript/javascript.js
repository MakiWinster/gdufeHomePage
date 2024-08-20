// Tab切换功能
function openTab(evt, tabName) {
    // 隐藏所有的tab内容
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // 移除所有标签的激活状态
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // 显示当前的tab内容，并添加激活状态
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// "新生"里面的栏目
document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".collapsible-header");

    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

// 校园地图功能
document.addEventListener('DOMContentLoaded', function () {
    const mapImages = document.querySelectorAll('.map-image');
    mapImages.forEach(mapImage => {
        let isEnlarged = false;
        let isDragging = false;
        let startX = 0, startY = 0;
        let translateX = 0, translateY = 0;
        let scaleFactor = 2.5;

        mapImage.addEventListener('click', function (event) {
            if (event.button === 0) { // 左键点击
                if (!isEnlarged) {
                    const rect = mapImage.getBoundingClientRect();
                    const offsetX = event.clientX - rect.left;
                    const offsetY = event.clientY - rect.top;

                    const originX = (offsetX / mapImage.clientWidth) * 100;
                    const originY = (offsetY / mapImage.clientHeight) * 100;

                    mapImage.style.transformOrigin = `${originX}% ${originY}%`;
                    mapImage.classList.add('enlarged');
                    isEnlarged = true;
                } else {
                    resetImage(); // 还原到初始状态
                }
            }
        });

        mapImage.addEventListener('mousedown', function (event) {
            if (event.button === 2 && isEnlarged) { // 右键按下且图片已放大
                isDragging = true;
                startX = event.clientX;
                startY = event.clientY;
                mapImage.classList.add('dragging');
                event.preventDefault(); // 防止右键菜单弹出
            }
        });

        document.addEventListener('mousemove', function (event) {
            if (isDragging) {
                const deltaX = (event.clientX - startX);
                const deltaY = (event.clientY - startY);

                translateX += deltaX;
                translateY += deltaY;

                mapImage.style.transform = `scale(${scaleFactor}) translate(${translateX}px, ${translateY}px)`;

                startX = event.clientX;
                startY = event.clientY;
            }
        });

        document.addEventListener('mouseup', function (event) {
            if (isDragging && event.button === 2) { // 右键释放
                isDragging = false;
                mapImage.classList.remove('dragging');
            }
        });

        mapImage.addEventListener('contextmenu', function (event) {
            if (isEnlarged) {
                event.preventDefault(); // 阻止默认右键菜单
            }
        });

        mapImage.addEventListener('mouseleave', function () {
            if (isEnlarged) {
                resetImage(); // 鼠标离开时还原图片
            }
        });

        function resetImage() {
            mapImage.style.transform = ''; // 还原transform
            mapImage.classList.remove('enlarged');
            translateX = 0;
            translateY = 0;
            isEnlarged = false;
        }
    });
});

// 导航栏js


