// 创建加载动画的HTML
function createSpinnerHTML() {
    return `
        <div class="spinner-wrap" style="
            width: 100px;
            height: 100px;
            background: #5a6b77;
            border-radius: 50%;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3), 0 3px 6px rgba(0,0,0,0.3), 0 4px 2px -2px rgba(0,0,0,0.3);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        ">
            <div class="spinner" style="
                width: 92%;
                height: 92%;
                margin: 4%;
                background: aliceblue;
                border-radius: 50%;
                box-shadow: inset 0 5px 20px rgba(0,0,0,0.3), inset 0 3px 6px rgba(0,0,0,0.3), inset 0 4px 2px -2px rgba(0,0,0,0.3);
                position: relative;
                overflow: hidden;
            ">
                <style>
                    @keyframes spin {
                        0%   { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .spinner:before, .spinner:after {
                        content: '';
                        position: absolute;
                        top: 0;
                        width: 50%;
                        height: 100%;
                        background: url('data:image/png;base64,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');
                        background-size: 200% 100%;
                    }
                    .spinner:before {
                        left: 50%;
                        border-radius: 0 100% 100% 0 / 50%;
                        background-position: right center;
                        transform-origin: left center;
                        animation: spin 3s linear infinite reverse;
                    }
                    .spinner:after {
                        left: 0;
                        border-radius: 100% 0 0 100% / 50%;
                        background-position: left center;
                        transform-origin: right center;
                        animation: spin 1.5s linear infinite;
                    }
                </style>
            </div>
        </div>
    `;
}

// 为iframe添加加载动画
function addLoaderToIframe(iframe) {
    // 创建一个包装器div
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';

    // 将iframe移动到包装器中
    iframe.parentNode.insertBefore(wrapper, iframe);
    wrapper.appendChild(iframe);

    // 添加加载动画
    wrapper.insertAdjacentHTML('afterbegin', createSpinnerHTML());

    // 存储原始src
    const originalSrc = iframe.src;
    
    // 清除src以阻止加载
    iframe.src = 'about:blank';

    // 在短暂延迟后重新设置src以触发加载
    setTimeout(() => {
        iframe.onload = function() {
            // 加载完成后隐藏加载动画
            const spinner = wrapper.querySelector('.spinner-wrap');
            if (spinner) {
                spinner.style.display = 'none';
            }
        };
        iframe.src = originalSrc;
    }, 100);
}

// 处理页面上的所有iframe
function handleAllIframes() {
    const iframes = document.getElementsByTagName('iframe');
    for (let iframe of iframes) {
        addLoaderToIframe(iframe);
    }
}

// 在页面加载完成后执行
window.addEventListener('load', handleAllIframes);

// 处理动态添加的iframe
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.tagName === 'IFRAME') {
                    addLoaderToIframe(node);
                }
            });
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });