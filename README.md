# EffectiveFE-Engineering

## 作者：冰红茶  
    
------    
    
工作了一段时间后，发现自己在代码高效化和工程化方面欠债太多，所以想记录和总结用以提升效率的最佳实践^_ ^
        
------   
## 参考书籍：
### 高效前端：《Web高效编程与优化实践》作者：李银城
### 《前端工程化 体系设计与实践》作者：周俊鹏
            
--------     
- [EffectiveFE-Engineering](#effectivefe-engineering)
  - [作者：冰红茶](#作者冰红茶)
  - [参考书籍：](#参考书籍)
    - [高效前端：《Web高效编程与优化实践》作者：李银城](#高效前端web高效编程与优化实践作者李银城)
    - [《前端工程化 体系设计与实践》作者：周俊鹏](#前端工程化-体系设计与实践作者周俊鹏)
  - [一、HTML/CSS优化](#一htmlcss优化)
    - [遵循几条大原则：](#遵循几条大原则)
    - [1.1 巧用伪类](#11-巧用伪类)
      - [1) hover](#1-hover)
      - [2) checked](#2-checked)
      - [3) 前向伪类选择器nth-last-of-type(n)](#3-前向伪类选择器nth-last-of-typen)
    - [1.2 HTML标签](#12-html标签)
      - [1) 画一个三角形](#1-画一个三角形)
      - [2) 尽可能使用伪元素](#2-尽可能使用伪元素)
  - [二、js优化](#二js优化)
    - [2.1 几个原则和模式](#21-几个原则和模式)
      - [1) 避免使用全局变量](#1-避免使用全局变量)
      - [2) 改变样式](#2-改变样式)
      - [3) 避免使用重复代码](#3-避免使用重复代码)
      - [3) 访问者模式](#3-访问者模式)
      - [4) 不要滥用闭包](#4-不要滥用闭包)
    - [2.2 其他优化策略](#22-其他优化策略)
      - [1) 其他优化策略](#1-其他优化策略)
      - [1) Array方法](#1-array方法)
  - [三、页面优化](#三页面优化)
    - [3.1 chrome的优化工具](#31-chrome的优化工具)
      - [1) Performance](#1-performance)
      - [1) Performance](#1-performance-1)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-使用consoletable代替consolelog层级较深的数组或者对象)
  - [四、webpack打包](#四webpack打包)
    - [3.1 开发环境与生产环境](#31-开发环境与生产环境)
      - [1) Performance](#1-performance-2)
      - [1) Performance](#1-performance-3)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-使用consoletable代替consolelog层级较深的数组或者对象-1)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-使用consoletable代替consolelog层级较深的数组或者对象-2)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-使用consoletable代替consolelog层级较深的数组或者对象-3)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-使用consoletable代替consolelog层级较深的数组或者对象-4)
  - [五、库的设计](#五库的设计)
    - [5.1 配置设计](#51-配置设计)
      - [1) Performance](#1-performance-4)
      - [1) Performance](#1-performance-5)
  - [六、单元测试](#六单元测试)
    - [6.1 macha](#61-macha)
      - [1) Performance](#1-performance-6)
      - [1) Performance](#1-performance-7)
  - [七、mock服务器](#七mock服务器)
    - [7.1 koa](#71-koa)
      - [1) Performance](#1-performance-8)
      - [1) Performance](#1-performance-9)
    - [7.2 路由](#72-路由)
      - [1) Performance](#1-performance-10)
      - [1) Performance](#1-performance-11)
    - [7.3 普通请求](#73-普通请求)
      - [1) Performance](#1-performance-12)
      - [1) Performance](#1-performance-13)
    - [7.4 上传](#74-上传)
      - [1) Performance](#1-performance-14)
      - [1) Performance](#1-performance-15)
    - [7.5 下载](#75-下载)
      - [1) Performance](#1-performance-16)
      - [1) Performance](#1-performance-17)
    - [7.6 播放](#76-播放)
      - [1) Performance](#1-performance-18)
      - [1) Performance](#1-performance-19)
  - [八、Vue](#八vue)
    - [8.1 八股文](#81-八股文)
      - [1) ``compute`` 和 ``watch``有什么区别](#1-compute-和-watch有什么区别)
      - [2) diff算法](#2-diff算法)
      - [3) 生命周期](#3-生命周期)
      - [4) 双向绑定](#4-双向绑定)
      - [5) 预编译](#5-预编译)
    - [8.2 性能优化](#82-性能优化)
      - [1) 在map循环中添加不同的id](#1-在map循环中添加不同的id)
      - [2) 对于不变的对象使用Object.freeze](#2-对于不变的对象使用objectfreeze)
    - [8.3 原则与规范](#83-原则与规范)
      - [1) 数据与视图分离](#1-数据与视图分离)
  - [九、React](#九react)
    - [9.1 基本使用](#91-基本使用)
      - [1) Performance](#1-performance-20)

## 一、HTML/CSS优化
        
### 遵循几条大原则：
> - 能用HTML/CSS优化结束战斗的勿用JS
> - 尽量简练
        
### 1.1 巧用伪类  
        
#### 1) hover
> - 高亮：hover与opacity配合
                
                .title:hover {
                    opacity: 0.5;
                }

                <h1 class="title">你好</h1>
> - 显示子菜单
>> - 这里有一个问题，两个组件需要紧邻着，否则如果存在间隙的话两个组件hover的过程变得不连续，显示就会变得失效。
>> - 但是实际业务中，需要两个紧邻组件中的是需要缝隙的，这时候可以使用透明伪元素解决问题
```js
        ul,
        li {
            display: inline-block;
            margin: 0;
            padding: 0;
        }
        li {
            margin-right: 10px;
        }
        ul li:last-of-type {
            margin-right: 0;
        }
        .select {
            display: none;
        }
        .select::before {
            display: block;
            content: '';
            height: 10px;
            opacity: 0;
        }
        .select:hover {
            display: block;
        }
        .title:hover + .select{
            display: block;
        }


        <div class="title">你好</div>
        <ul class="select">
            <li>选择1</li>
            <li>选择2</li>
            <li>选择3</li>
            <li>选择4</li>
        </ul>
```
#### 2) checked
> - 修改radio/checkbox的样式
```js
        input[type="radio"] + span {
            display: inline-block;
            padding: 3px;
            width: 6px;
            height: 6px;
            border: 1px solid #000;
            border-radius: 50%;
            background: transparent;
            background-clip: content-box;
            transition: all 0.5s;
        }
        input[type="radio"]:checked + span{
            background: #000;
            background-clip: content-box;
        }
        input[type="radio"]  + span + label {
            display: inline-block;
            font-size: 12px;
        }

        <input id="radio1" type="radio" name="singleSelect"></input>
        <span></span>
        <label for="radio1">选择1</label>
        <input id="radio2" type="radio" name="singleSelect"></input>
        <span></span>
        <label for="radio2">选择2</label>
``` 
                    
#### 3) 前向伪类选择器nth-last-of-type(n)
> - 多列宽度自适应
```js
        ul,
        li {
            display: inline-block;
            margin: 0;
            padding: 0;
        }
        ul {
            width: 100%;
        }
        li:first-of-type:nth-last-of-type(2),
        li:first-of-type:nth-last-of-type(2) ~ li {
            width: 50%;
        }
        li:first-of-type:nth-last-of-type(3),
        li:first-of-type:nth-last-of-type(3) ~ li {
            width: 33.3%;
        }
        li:first-of-type:nth-last-of-type(4),
        li:first-of-type:nth-last-of-type(4) ~ li {
            width: 25%;
        }

        <ul class="select">
            <li>选择1</li>
            <li>选择2</li>
            <li>选择3</li>
            <li>选择4</li>
        </ul>
```

### 1.2 HTML标签
        
#### 1) 画一个三角形
> - 利用不同border边的透明度
```js
        .triangle {
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid red;
        }

        <div class="triangle"></div>
```
#### 2) 尽可能使用伪元素
> - 伪元素原生计算值是inline
> - 输入框的不可读可以使用伪元素进行覆盖
> - CSS计数器count
```js
        .counterReset {
            counter-reset: fruit 1;
        }
        .counterReset input:checked {
            counter-increment: fruit;
        }
        .total::after {
            content: counter(fruit);
            font-size: 14px;
            color: red;
        }
        
        <div class="counterReset">
            <label><input type="checkbox"></input>香蕉</label>
            <label><input type="checkbox"></input>苹果</label>
        </div>
        <p>你选择了<span class="total"></span>个水果</p>
```


--------        
## 二、js优化

        
### 2.1 几个原则和模式 
        
#### 1) 避免使用全局变量
> - 
#### 2) 改变样式
> - 常见的方法是直接使用getComputedStyle, 添加内联style的方式，但是这种方式不好，每次都要添加多个样式，而且不能复用，最佳实践是先把需要实现的样式用class实现，然后再用JS addClass的方式进行实现
#### 3) 避免使用重复代码
> - 重复代码 -> 封装成函数 -> 封装成模块 -> 封装成库 -> 封装成SDK
> - 使用策略模式有利于高内聚低耦合，也能体现开闭原则（即对拓展是开放的，对修改是封闭的）
```js
        model: {
            low: function() {
                // low speed
            },
            middle: function() {
                // middle speed
            },
            high: function() {
                // high speed
            }
        }
        use(model['middle']);
```
#### 3) 访问者模式
> - 
```js
        function vistor() {
        }
        vistor.prototype.eventName = [];
        vistor.prototype.registry = {};
        vistor.prototype.on = function() {
            this.eventName.push(arguments[0]);
            this.registry[arguments[0]] = arguments[1]
        }
        vistor.prototype.emit = function() {
            let eventName = arguments[0];
            let a = Array.from(arguments)
            a.shift();
            this.registry[eventName](...a)
        }
```
#### 4) 不要滥用闭包
> - 闭包的作用是可以使子作用域访问父作用域的变量，同时不用闭包内的变量不可见。
> - 子作用域访问上层的作用域需要花费较多的时间，做好直接把父作用域的变量作为函数的参数传进去
        
### 2.2 其他优化策略 
        
#### 1) 其他优化策略
> - 使用三目运算符
> - 不要出现魔数，即函数的参数含义不明显，可以先在函数前面把参数重新定义一下名称再传进去
> - Object.assign()合并对象
> - 减少使用forEach，map等遍历函数，多使用includes(), filter(), find()等数组方法
> - 使用async/await 替代promise和callback hell, 对于一些callback hell可以先包装成promise再使用async/await

<h3 id='2.3'>2.3 lodash的使用</h3>  
        
#### 1) Array方法
> - chunk(array, [size=1]) 根据数量分割数组
> - difference(array, [values]) 筛选不相同的元素
> - 升级版 加了一个迭代器 differenceBy(array, [values], [iteratee=_.identity])
> 
> - 不要出现魔数，即函数的参数含义不明显，可以先在函数前面把参数重新定义一下名称再传进去
> - Object.assign()合并对象
> - 减少使用forEach，map等遍历函数，多使用includes(), filter(), find()等数组方法
> - 使用async/await 替代promise和callback hell, 对于一些callback hell可以先包装成promise再使用async/await
        
--------        
## 三、页面优化

        
### 3.1 chrome的优化工具
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 
<h3 id='3.1'>3.2 控制台打印</h3>  
        
#### 1) 使用console.table代替console.log层级较深的数组或者对象
> - 

        
--------        
## 四、webpack打包

        
### 3.1 开发环境与生产环境
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 
<h3 id='3.1'>3.2 分离配置</h3>  
        
#### 1) 使用console.table代替console.log层级较深的数组或者对象
> - 
<h3 id='3.1'>3.2 loader</h3>  
        
#### 1) 使用console.table代替console.log层级较深的数组或者对象
> - 
<h3 id='3.1'>3.2 plugin</h3>  
        
#### 1) 使用console.table代替console.log层级较深的数组或者对象
> - 
<h3 id='3.1'>3.2 devserver</h3>  
        
#### 1) 使用console.table代替console.log层级较深的数组或者对象
> - 

        
--------        
## 五、库的设计

        
### 5.1 配置设计  
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 

        
--------        
## 六、单元测试

        
### 6.1 macha 
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 

        
--------        
## 七、mock服务器

        
### 7.1 koa 
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 

### 7.2 路由
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 

### 7.3 普通请求 
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 

### 7.4 上传
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 

### 7.5 下载
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 

### 7.6 播放  
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance

        
--------        
## 八、Vue
        
### 8.1 八股文
#### 1) ``compute`` 和 ``watch``有什么区别
项目|``compute``|``watch``
-|-|-
异步|不支持|支持
缓存|支持|不支持
流|*一个数据 <- 多个数据*|*行为 <- 一个数据*
属性|``get``(默认)和``set``|``handler``、``immediate``、``deep``
参数|无|``curVal``、``prevVal``

#### 2) diff算法
> - 是否是相同的节点，如果节点不同(key和sel节点的选择器)，直接替换
> - 如果节点相同，分析子节点的5种情况，进行不同的处理
>> - ``oldVnode === vnode``
>> - ``oldVnode``有子节点``vnode``没有
>> - ``oldVnode``没有子节点``vnode``有
>> - 都有文本节点
>> - 都有子节点
> - 递归处理子节点
> - 比较时为同层级比较，直接把时间复杂度从O(3) -> O(1)
> - 比较的时候是从首尾向中间进行，一旦``StartIdx > EndIdx``表明oldCh和newCh至少有一个已经遍历完了，就会结束比较。如果有key，还会从用key生成的对象oldKeyToIdx中查找匹配的节点，所以为节点设置key可以更高效的利用dom

#### 3) 生命周期
执行链：父``beforeCreate`` => 父``created`` => 父``beforeMount`` => 子``beforeCreate`` => 子``created`` => 子``beforeMount`` => 子``mounted`` => 父``mounted``
父``beforeUpdate`` => 子``beforeUpdate`` => 子``updated`` => 父``updated``

周期|执行顺序|特点
-|-|-
``beforeCreate``|先父后子|可以访问``vm.$parent``和``vm.$createElement``
``created``|先父后子|可以访问``data``、``props``、``methods``、``computed``、``watch``、``inject``
``beforeMount``|先父后子|获取并可以访问``vm.$el``(el提供的真实节点)
``mounted``|先子后父|``render``函数 -> ``vnode`` -> 真实节点
``beforeDestory``|先父后子|
``destoryed``|先子后父|删除``vm``, 销毁``vm._watcher``，删除数据``observer``中的引用
``beforeUpdate``|先父后子|
``updated``|先子后父|

#### 4) 双向绑定
> - 观察者模式 一个主题多个观察者
```js
        // 主题，接收状态变化，触发每个观察者
        class Subject {
            constructor() {
                this.state = 0
                this.observers = []
            }
            getState() {
                return this.state
            }
            setState(state) {
                this.state = state
                this.notifyAllObservers()
            }
            attach(observer) {
                this.observers.push(observer)
            }
            notifyAllObservers() {
                this.observers.forEach(observer => {
                    observer.update()
                })
            }
        }

        // 观察者，等待被触发
        class Observer {
            constructor(name, subject) {
                this.name = name
                this.subject = subject
                this.subject.attach(this)
            }
            update() {
                console.log(`${this.name} update, state: ${this.subject.getState()}`)
            }
        }

        // 测试代码
        let s = new Subject()
        let o1 = new Observer('o1', s)
        let o2 = new Observer('o2', s)
        let o3 = new Observer('o3', s)

        s.setState(1)
        s.setState(2)
        s.setState(3)
```

> - 发布订阅者模式
```js
    var pubsub = (() => {
        var topics = {};
        function on(topic,fn){
            if (!topics[topic]) topics[topic] = []; 
            topics[topic].push(fn);
        }
        function emit(topic,...args){
            if (!topics[topic]) return;
            topics[topic].forEach(fn => fn(...args);
        }
        return {
            on,
            emit
        }
    })()
```
模式|特点
-|-
观察者模式| 主题和观察者需要相互关联，观察者拥有update方法 一对多
发布订阅者模式| 发布者和订阅者不需要直接联系 多对多 比较简单，多作为库来使用

> - 对象监听方法
> 
> - 数组窃听方法
> - 缺点：无法监听对象的属性的创建和删除

#### 5) 预编译
> - render函数 > templates模板 > el属性挂载元素outerHTML
> - 在包含单文件组件的项目中，使用 webpack 打包时已经将单文件组件中的模板预先编译成了渲染函数
> - 也存在实例化vue但是没有render、templates、el的情况，就是使用vue作为eventbus使用时

构建模式|运行时机|webpack配置|特点
-|-|-|-
运行时构建|vue实例化创建节点且存在render函数属性时|默认或者``alias: {'vue$': 'vue/dist/vue.runtime.common.js'}``|删除了模板的编译功能，无法支持带``template``属性的Vue实例选项
独立构建|vue实例化创建节点并且不存在render函数属性时|``alias: {'vue$': 'vue/dist/vue.common.js'}``|需要完整的模板编译功能


### 8.2 性能优化
#### 1) 在map循环中添加不同的id
#### 2) 对于不变的对象使用Object.freeze

### 8.3 原则与规范
#### 1) 数据与视图分离


--------        
## 九、React

        
### 9.1 基本使用
#### 1) Performance
 