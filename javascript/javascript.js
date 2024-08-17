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

// Markdown渲染功能
function loadMarkdownFile() {
    fetch('example.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked(markdown);
            document.getElementById('markdown-content').innerHTML = html;
        });
}