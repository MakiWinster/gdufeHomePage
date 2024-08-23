# 广财起始页！
来到广财已经差不多一年了。在这一年里，经常需要访问各种校内网页或者小程序，这些网页和小程序有时不常用，但偶尔又需要用到，要用的时候再去找又会想不起来，往往很麻烦。为了方便访问，我萌生了一个想法：制作一个专属于广财人的启动页，将常用的网页、小程序和通知等集中在一个页面上，并且尽量做成起始页的样式。这样，只要打开浏览器，就能看到这个页面，方便随时打开，节省时间和精力。

## 说明
由于我使用的是国外的服务器，访问速度可能会稍微慢一些。而且微信对国外服务器的 DNS 解析支持不太理想。因此，十分建议将网址复制到外部浏览器中进行访问，以获得更好的浏览体验。

此外，也可以选择在本地进行部署，但请注意，本地部署可能无法接收到后续的更新和改进。有关本地部署的详细方法，请参见下文说明。

## 使用方法
选择方式：<a href="#ChangeHome">修改浏览器主页</a>   <a href="#Local">本地部署</a>

<div id="ChangeHome"></div>

### 1. 浏览器设为主页
因为新建标签受限，所以电脑端浏览器统一，借助第三方插件完成，步骤一致。
#### 电脑端
1. 安装插件 → [New Tab Changer - Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/new-tab-changer/dlbnebcbaeajdpekcdhmcgdhoodcjpeg)<div id="NTC"></div>
2. 这里以edge为例：  
<center style="font-weight: bold; font-size: 1em; margin-top: 1.25em; margin-bottom: 0.75em;">
    打开浏览器扩展页
</center>

<article class="markdown-body">
    <div class="image-container">
        <img src="https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231411059.png" alt="Image 1" class="medium">
        <img src="https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231412481.png" alt="Image 2" class="smaill">
    </div>
    <center style="font-weight: bold; font-size: 1em; margin-top: 1.25em; margin-bottom: 0.75em;">
        找到插件，确保开启，并且点击"详细信息"
    </center>
    <div class="image-container">
        <img src="https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231442899.png" alt="Image-bu" class="medium">
        <img src="https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231413866.png" alt="Image 3" class="smaill">
        <img src="https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231414765.png" alt="Image 4" class="smaill">
    </div>
    <center style="font-weight: bold; font-size: 1em; margin-top: 1.25em; margin-bottom: 0.75em;">
        打开Edge设置页，确保主页选中New Tab Changer
    </center>
    <div class="image-container">
        <img src="https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231757885.png" alt="Image 6" class="smaill">
        <img src="https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231757885.png" alt="Image 5" class="smaill">
    </div>
</article>





<div id="Local"></div>

### 2. 本地部署
1. 打开GitHub项目页：[MakiWinster/gdufeHomePage (github.com)](https://github.com/MakiWinster/gdufeHomePage)
2. 依次单击
![](https://aly-images472.oss-cn-guangzhou.aliyuncs.com/images/202408231418156.png)

3. 此时浏览器会下载一个压缩包，请把压缩包解压并存放到不会被删除的地方。
4. 接下来步骤与上文一致 → <a href="#NTC">Link</a> ，在最后一步，把地址改为`你解压的文件夹链接\index.html`再点击save，此时重新打开浏览器即可检验是否设置成功