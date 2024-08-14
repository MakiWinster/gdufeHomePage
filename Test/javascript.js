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

// 默认显示第一个标签页的内容
document.getElementById("Tab1").style.display = "block";
