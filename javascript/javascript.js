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

// 默认显示第一个标签页的内容
document.getElementById("Tab1").style.display = "block";

// Bing搜索功能
function searchBing() {
    const query = document.getElementById('bing-search').value;
    if (query) {
        window.open(`https://www.bing.com/search?q=${query}`, '_blank');
    }
}

// Baidu搜索功能
function searchBaidu() {
    const query = document.getElementById('baidu-search').value;
    if (query) {
        window.open(`https://www.baidu.com/s?wd=${query}`, '_blank');
    }
}

// 监听搜索框的Enter键
document.getElementById('bing-search').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchBing();
    }
});

document.getElementById('baidu-search').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchBaidu();
    }
});
