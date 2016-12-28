### 问题一：在点击【系统默认浏览器】的【默认视频播放器】的播放按钮时，部分设备自动调起全屏播放（暂不考虑微信、QQ、微博内情况）。

#### *现象 ####

+ Android 设备：部分自动调起全屏播放，部分使用内联播放。

+ IOS 设备：全部自动调起全屏播放。

#### *目标 ####

使所有设备的系统默认浏览器的默认视频播放器在被点击其播放按钮时，均禁止自动调起全屏播放即使用内联播放。

#### *解决方案调研 ####

+ 在 video 标签上添加 __webkit-playsinline 属性__

    结论：只适用于 IOS Safari（定存在系统版本兼容问题）。

    <https://github.com/bfred-it/iphone-inline-video>

    ___在 video 标签上添加 playsinline 属性，去除 webkit 前缀___

    结论：只适用于 IOS 10 Safari

    <https://webkit.org/blog/6784/new-video-policies-for-ios/>

+ __自定义__ 视频播放器控制条

    现象：
    
    + IOS 设备：部分可内联播放但在开始播放时默认控制条会展现，部分依然无法禁止自动全屏播放。
    
    + Android 设备：被测机型除在 QQ 内基本可以内联播放，但在开始播放时除在微博内默认控制条均会遮盖自定义控制条。

    ![](http://oij8a9ql4.bkt.clouddn.com/video_1.png)
    
    解决方案调研：
    
    + 隐藏 __-webkit-media-controls__
    
        结论：基本不起作用

    + __video.controls = false__

        结论：基本不起作用

    > 在制作自定义控制条的声音控件时，原设计为：点击增加音量时 0.1 递增；点击减小音量时 0.1 递减。然而结果如下图：
    
    ![](http://oij8a9ql4.bkt.clouddn.com/video_2.png) ![](http://oij8a9ql4.bkt.clouddn.com/video_3.png)
    
*****

### 问题二：m3u8 格式的有效视频源在微博及更美 App 内无法正常播放。

#### *现象 ####

Android 设备：部分在点击播放按钮后，需要拉动进度条方可正常播放。

IOS 设备：未发现此问题。

#### *解决方案 ####

hybrid 内调用客户端原生播放器，而 m 站中该问题未解决。