# vue-scratch-card

> a vue component to scratch card

## 简介

刮刮卡vue组件，可在PC或移动端使用。

## 截图

![scratchcard](https://raw.githubusercontent.com/ZENGzoe/imagesCollection/master/2018/scratchCard.gif)

## Install

```
npm install --save vue-scratch-card
```

## Usage

1.通过import使用

```
import ScratchCard from 'vue-scratch-card0'
Vue.use(ScratchCard)

<vue-scratch-card 
    element-id='scratchWrap'
    :ratio=0.5
    :move-radius=50
/>

```

2.通过标签`<script>`引用

```
<vue-scratch-card 
    element-id='scratchWrap'
    :ratio=0.5
    :move-radius=50
    :start-callback=startCallback
    :clear-callback=clearCallback
    cover-color='#caa'
  />

<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    new Vue({
      el : '#app',
      data () {
        return {

        }
      },
      methods : {
        startCallback(){
          console.log('抽奖成功！')
        },
        clearCallback(){
          console.log('清除完毕！')
        }
      }
    })
</script>
```

## 属性

可以向`vue-scratch-card`组件传递的props值：

Name | Type | Default | Description  
------------- | ------------- | ------------- | -------------
element-id | String| scratch | 可选，组件最外层DOM的id属性。如果页面中超多一次调用`vue-scratch-card`，必须传入该属性区分不同的刮刮卡组件
ratio | Number | 0.3 | 可选，要求刮掉的面积占比，达到这个占比后，将会自动把其余区域清除
start-callback | Function |  | 可选，第一次触碰到刮刮卡的函数。比如可以在这个函数中调取抽奖接口
clear-callback | Function |  | 可选，刮刮卡清除完毕后事件
cover-color | String | #C5C5C5 | 可选，刮刮卡遮罩层的颜色
cover-img | String |  | 可选，刮刮卡遮罩层图片，图片格式必须为base64
resul-img | String |  | 可选，刮刮卡结果区域的图片
move-radius | Number |  | 可选，刮刮清除的半径


## 插槽

组件还可以定制结果区域的DOM结构，插槽名为`result`

```
<VueScratchCard>
    <div slot='result'>
        恭喜您中大奖啦～～
    </div>
</VueScratchCard>
```

