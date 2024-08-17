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
