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
  - [三、Vue](#三vue)
    - [3.1 八股文](#31-八股文)
      - [1) ``compute`` 和 ``watch``有什么区别](#1-compute-和-watch有什么区别)
      - [2) diff算法](#2-diff算法)
      - [3) 生命周期](#3-生命周期)
      - [4) 双向绑定](#4-双向绑定)
      - [5) 预编译](#5-预编译)
      - [6) 组件间通讯](#6-组件间通讯)
      - [7) 指令](#7-指令)
      - [8) 自定义指令](#8-自定义指令)
      - [9) 事件修饰符](#9-事件修饰符)
      - [10) 混入mixins](#10-混入mixins)
      - [11) 自定义插件](#11-自定义插件)
      - [12) 过滤器](#12-过滤器)
      - [13) nextTick与更新循环](#13-nexttick与更新循环)
      - [13) vue-loader是什么](#13-vue-loader是什么)
    - [3.2 性能优化](#32-性能优化)
      - [1) 在map循环中添加不同的key值，就地复用](#1-在map循环中添加不同的key值就地复用)
      - [2) 对于不变的对象使用Object.freeze](#2-对于不变的对象使用objectfreeze)
      - [3) `` v-cloak``解决页面闪烁问题](#3-v-cloak解决页面闪烁问题)
      - [4) ``v-once`` 和 ``v-pre`` 提升性能](#4-v-once-和-v-pre-提升性能)
      - [5) 使用函数式组件](#5-使用函数式组件)
    - [3.3 原则与规范](#33-原则与规范)
      - [1) 数据与视图分离](#1-数据与视图分离)
    - [3.4 小技巧](#34-小技巧)
      - [1) 父子组件透传](#1-父子组件透传)
      - [2) 作用域插槽](#2-作用域插槽)
      - [3) 动态指令参数](#3-动态指令参数)
      - [4) ``hookEvent ``的使用](#4-hookevent-的使用)
      - [5) ``watch``](#5-watch)
      - [6) 渲染函数中使用 JSX](#6-渲染函数中使用-jsx)
    - [3.5 vue3.0的特点](#35-vue30的特点)
      - [1) 性能比2.0快1.3~2倍](#1-性能比20快132倍)
      - [2) 使用``typescript``重构](#2-使用typescript重构)
      - [3) ``Tree shaking support``](#3-tree-shaking-support)
      - [4) ``Composition API``](#4-composition-api)
      - [5) 自定义渲染API ``Custom Renderer API``](#5-自定义渲染api-custom-renderer-api)
      - [6) 更先进的组件](#6-更先进的组件)
      - [7) ``v-model``统一双向数据流，删除``.sync``](#7-v-model统一双向数据流删除sync)
      - [8) ``v-if``、``v-for``优先级问题](#8-v-ifv-for优先级问题)
      - [9) 去掉``functional: true``](#9-去掉functional-true)
      - [10) vue文件结构](#10-vue文件结构)
      - [11) ``Teleport`` 传送门](#11-teleport-传送门)
      - [12) Fragments](#12-fragments)
  - [四、React](#四react)
    - [4.1 八股文](#41-八股文)
      - [1) 单向数据流](#1-单向数据流)
      - [2) ``setState``是同步还是异步](#2-setstate是同步还是异步)
      - [3) 通讯](#3-通讯)
      - [4) 为什么使用框架而不是原生](#4-为什么使用框架而不是原生)
      - [5) ``redux``的``middleware``机制](#5-redux的middleware机制)
      - [6) thunk](#6-thunk)
    - [4.2 性能优化](#42-性能优化)
    - [4.3 原则与规范](#43-原则与规范)
    - [4.4 小技巧](#44-小技巧)

## 一、HTML/CSS优化
        
### 遵循几条大原则：
> - 能用HTML/CSS优化结束战斗的勿用JS
> - 尽量简练
        
### 1.1 巧用伪类  
        
#### 1) hover
> - 高亮：hover与opacity配合
```html
        .title:hover {
            opacity: 0.5;
        }

        <h1 class="title">你好</h1>
```
> - 显示子菜单
>> - 这里有一个问题，两个组件需要紧邻着，否则如果存在间隙的话两个组件hover的过程变得不连续，显示就会变得失效。
>> - 但是实际业务中，需要两个紧邻组件中的是需要缝隙的，这时候可以使用透明伪元素解决问题
```html
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
```html
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
```html
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
```html
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
```html
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
     
## 三、Vue
        
### 3.1 八股文
#### 1) ``compute`` 和 ``watch``有什么区别
项目|``compute``|``watch``
-|-|-
异步|不支持|支持
缓存|支持|不支持
流|*一个数据 <- 多个数据*|*行为 <- 一个数据*
属性|``get``(默认)和``set``|``handler``、``immediate``、``deep``
参数|无|``curVal``、``prevVal``

注意：当依赖的属性变化时，computed不会立即重新计算生成新的值，而是先标记为脏数据，当下次computed被获取时候，才会进行重新计算并返回。

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
``beforeMount``|先父后子|获取并可以访问``vm.$el``(el提供的真实节点)，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。
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
            constructor(state) {
                this.state = state
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
```js
function activeObject(obj) {
    Object.keys(obj).forEach(key => {
        let val = obj[key];
        let subject = null, watcher = null;
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: () => {
                if (!subject) {
                    subject = new Subject(val);
                    watcher = new Observer(key, subject);
                }
                return subject.getState();
            },
            set: value => {
                if (val !== value) {
                    val = value;
                    subject && subject.setState(val);
                }
            }
        })
    })
}
```

> - 数组窃听方法
```js
const methods = ['push', 'pop'];

function activeArray(obj) {
    const wrapArrayPrototype = Object.create(Array.prototype); 
    subject = new Subject(obj);
    watcher = new Observer(obj, subject);
    methods.forEach(method => {           
        wrapArrayPrototype[method] = function(...args) {
            const result = Array.prototype[method].call(this, ...args);
            subject.setState(result);
            return result;
        }
    })
    obj.__proto__ = wrapArrayPrototype;
}

```
> - 综合
```js
    function activeData(obj) {
        const type = Object.prototype.toString.call(obj).slice(8, -1);
        if (type === 'Object') {
            activeObject(obj);
            Object.values(obj).forEach(child => activeData(child));
        }
        else if (type === 'Array') {
            activeArray(obj);
            obj.forEach(child => activeData(child));
        }
    }

```
> - Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
>> - 实例化时往主题subject里面添加自己
>> - 必须有一个update()方法
>> - 待属性变动subject.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调。
> - 缺点：无法监听对象的属性的创建和删除，可以使用``this.$set``


#### 5) 预编译
> - render函数 > templates模板 > el属性挂载元素outerHTML
> - 在包含单文件组件的项目中，使用 webpack 打包时已经将单文件组件中的模板预先编译成了渲染函数
> - 也存在实例化vue但是没有render、templates、el的情况，就是使用vue作为eventbus使用时
> - 编译时 先转化为AST树，在转化为渲染函数，最后返回Vnode节点

构建模式|运行时机|webpack配置|特点
-|-|-|-
运行时构建|vue实例化创建节点且存在render函数属性时|默认或者``alias: {'vue$': 'vue/dist/vue.runtime.common.js'}``|删除了模板的编译功能，无法支持带``template``属性的Vue实例选项
独立构建|vue实例化创建节点并且不存在render函数属性时|``alias: {'vue$': 'vue/dist/vue.common.js'}``|需要完整的模板编译功能

#### 6) 组件间通讯
对象|方法
-|-
父子|props和$emit
多层嵌套|``provide``和``inject`` 或者``eventbus``（`` = new vue()``）
状态共享``Vue.observable``|``const store = Vue.observable({ count: 0 }); const mutations = {setCount(count) {store.count = count;}};``
vue实例(``$on ``和 ``$emit``)|``vue.$on`` ``vue.$emit`` ``vue.$off``
其他``$ref``/``$parent``/``$children``|``this.$refs.list.getList()``


#### 7) 指令

名称|正常写法|缩写|特点
-|-|-|-
组件数据绑定|``v-bind:props``|``:props``|
插槽|``v-slot:name``|``#name``|获取插槽作用域 ``v-slot:name="scope"``
方法绑定|``v-on:func``|``@func``|获取额外参数和子组件通讯参数 ``@callback=handleChange(index, $event)``
双向绑定|``v-model``| - | 语法糖，等同于 ``<Child :value="value" @input="handleInputValue"></Child>`` 子组件必须emit input事件：``props: {value: Number}  $emit('input', value) ``，当然了，你也可以手动修改参数名和方法名，使用``model``字段: ``{prop: 'checked',event: 'change'}``
只渲染一次|v-once|-|-
循环|v-for|-|
判断|``v-if`` ``v-else-if`` ``v-else``|-|根据表达式的值的真假条件，销毁或重建元素
是否显示|``v-show``|-|根据表达式之真假值，切换元素的 ``display`` CSS 属性节点还在文档中
innerHTML|``v-html``|-|更新元素的 ``innerHTML``
textContent|``v-text``|-|更新元素的 ``textContent``


#### 8) 自定义指令
```js
// 入口
import Auth from './utils/auth';
Vue.use(Auth);

// auth.js 提供给install方法
const AUTH_LIST = ['admin']

function checkAuth(auths) {
    return AUTH_LIST.some(item => auths.includes(item))
}

function install(Vue, options = {}) {
    Vue.directive('auth', {
        componentUpdated(el, binding) {
            if (!checkAuth(binding.value)) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
        // bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

        // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

        // update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。

        // componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

        // unbind：只调用一次，指令与元素解绑时调用。
    })
}

export default { install }

// 组件使用时
<button v-auth="['user']">提交</button>
```

#### 9) 事件修饰符
名称|特点
-|-
.stop|阻止事件冒泡
.capture|使用事件捕获模式
.prevent|阻止默认事件
.self|事件只在自己身上发生时才触发，如果触发其他元素通过冒泡或者捕获等方式不会被触发，当自身触发后依然会往外进行冒泡
.once|事件只发生一次
.sync|数据双向绑定，父组件``<Child :value="total" v-on:update:change="total = $event"/>``子组件``$emit('update:change', value)``
表单修饰符``.lazy``, ``.trim``, ``.number``|配合v-model使用, ``.number``如果输入的第一个字符是数字，那就只能输入数字，否则他输入的就是普通字符串。
.passive|当页面滚动的时候就会一直触发 onScroll 事件，这个其实是存在性能问题的，尤其是在移动端，当给他加上 .passive 后触发的就不会那么频繁了。
鼠标按钮修饰符|：鼠标左键点击；``.right``：鼠标右键点击；``.middle``：鼠标中键点击；
键盘按键修饰符|``.enter`` ``.tab`` ``.delete`` (捕获“删除”和“退格”键) ``.esc`` ``.space`` ``.up`` ``.down`` ``.left`` ``.right``,``.exact ``修饰符允许你控制由精确的系统修饰符组合触发的事件。
**串联使用事件修饰符的时候，需要注意其顺序，同样2个修饰符进行串联使用，顺序不同，结果大不一样。@click.prevent.self 会阻止所有的点击事件，而 @click.self.prevent 只会阻止对自身元素的点击。**

#### 10) 混入mixins
> - 混入的先被执行，组件数据部分后执行，如果有重复属性以组件数据为准

#### 11) 自定义插件
```js
        MyPlugin.install = function (Vue, options) {
            // 1. 添加全局方法或 property
            Vue.myGlobalMethod = function () {
                // 逻辑...
            }

            // 2. 添加全局资源
            Vue.directive('my-directive', {
                bind (el, binding, vnode, oldVnode) {
                // 逻辑...
                }
                ...
            })

            // 3. 注入组件选项
            Vue.mixin({
                created: function () {
                // 逻辑...
                }
                ...
            })

            // 4. 添加实例方法
            Vue.prototype.$myMethod = function (methodOptions) {
                // 逻辑...
            }
        }
```

#### 12) 过滤器

```html
    <!-- 在双花括号中 -->
    {{ message | filterA | filterB }}

    <!-- 在 `v-bind` 中 -->
    <div v-bind:id="rawId | formatId"></div>
```

```js
    // 局部
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }

    // 全局
    Vue.filter('capitalize', function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    })

    new Vue({
        // ...
    })
```

#### 13) nextTick与更新循环
> - 在Vue更新数据的时候，视图不会立即更新，因为在数据更新过程中同一变量可能被修改多次，所以会有一个批处理的过程，保留最后一次修改变量的结果，并把最终结果更新视图。
> - 步骤
>> - 同步修改数据, Vue 开启一个异步队列，并缓冲在此事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次
>> - 查找异步队列，推入执行栈，执行callback[事件循环]并更新视图, （``promise.then``或者HTML5的``MutationObserver``，如果环境不支持就使用``setTimeout(fn, 0)``）
>> - nextTick拿到更新后视图，在同一事件循环中，如果存在多个nextTick，将会按最初的执行顺序进行调用；
> - 官方文档说明：注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick
```js
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
            })
        }
```

#### 13) vue-loader是什么
> - vue文件的一个加载器，跟template/js/style转换成js模块。


### 3.2 性能优化
#### 1) 在map循环中添加不同的key值，就地复用
#### 2) 对于不变的对象使用Object.freeze
#### 3) `` v-cloak``解决页面闪烁问题
> - v-cloak 指令保持在元素上直到关联实例结束编译，利用它的特性，结合 CSS 的规则 ``[v-cloak] { display: none }`` 一起使用就可以隐藏掉未编译好的 Mustache 标签，直到实例准备完毕，但是个人认为加个loading体验会更好
```html
    // template 中
    <div class="#app" v-cloak>
        <p>{{value.name}}</p>
    </div>

    // css 中
    [v-cloak] {
        display: none;
    }
```
#### 4) ``v-once`` 和 ``v-pre`` 提升性能
> - ``v-pre`` 给我们去决定要不要跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
> - ``v-once`` 只会渲染一次，后面的重新渲染都会被跳过

#### 5) 使用函数式组件
> - 无状态，无数据响应，无生命周期，没有instance实例, 只会根据传进来的props进行数据渲染，基本的骨架如下
```js
        Vue.component('my-component', {
            functional: true, // 必要
            // Props 是可选的
            props: {
                // ...
            },
            // 为了弥补缺少的实例
            // 提供第二个参数作为上下文
            render (createElement, context) {
                return createElement('div', context.data, [context.scopedSlots.default({
                    a:1 // 作为插槽的作用域参数
                })])
            }
        })
```
// 或者
```html
        
        <template functional>
            <button
                class="btn btn-primary"
                v-bind="data.attrs"
                v-on="listeners"
            >
            <p v-for="item in props.items" @click="props.handleClick(item);">
                {{ item }}
            </p>
                <slot />
            </button>
        </template>
        <script>
        export default {
            props: ['level']
        }
        </script>
```
```js
        // 或者 https://juejin.im/post/6872128694639394830
        // 根据不同的情况渲染不同的组件
        var EmptyList = { /* ... */ }
        var TableList = { /* ... */ }
        var OrderedList = { /* ... */ }
        var UnorderedList = { /* ... */ }

        Vue.component('smart-list', {
            functional: true, // 声明 functional: true，表明它是一个函数式组件
            props: {
                items: {
                type: Array,
                required: true
                },
                isOrdered: Boolean
            },
            // 为了弥补缺少的实例
            // 提供第二个参数作为上下文
            render: function (createElement, context) { // 组件中所有的一切都是通过 context 传递的
                // 根据不同的情况渲染不同的组件
                function appropriateListComponent () {
                var items = context.props.items

                if (items.length === 0)           return EmptyList
                if (typeof items[0] === 'object') return TableList
                if (context.props.isOrdered)      return OrderedList

                return UnorderedList
                }

                return createElement(
                appropriateListComponent(),
                context.data, // 传递给组件的整个数据对象
                context.children // `VNode` 子节点的数组
                )
            }
        })
```

### 3.3 原则与规范
#### 1) 数据与视图分离

### 3.4 小技巧
#### 1) 父子组件透传
> - 属性透传``v-bind="$props"``或者``v-bind="$attrs"``
```html
        <template>
            <child-component v-bind="$props"/>
        </template>

        <script>
        import ChildComponent from '@/components/ChildComponent'
        
        export default {
            props: { // 注意这里的校验props
                ...ChildComponent.options.props
            }
        }
        </script>
```
> - 对象透传 也可传递某一特定对象的属性，与``provide``和``inject``的区别：``provide``和``inject``绑定并不是可响应的
```html
        <!-- obj = {name: '', id: ''} -->
        <Child v-bind="obj"></Child>
        <!-- 等价于 -->
        <Child :name="obj.name" :id="obj.id"></Child>
```
> - 事件监听透传 ``v-bind="$listeners"`` 但不包括.native修饰器的

#### 2) 作用域插槽
```html
    <!-- 子组件 -->
    <div>
        <slot name="head" :id="id"><slot>
        <slot name="footer" :item="item"><slot>
    </div>

    <!-- 父组件 -->
    <child>
        <template v-slot:head="scope">{{scope.id}}<template>
        <template v-slot:footer="{item}">{{item}}<template>
    </child>
```

#### 3) 动态指令参数
> - ``<div @[event]="handleChange"></div>``

#### 4) ``hookEvent ``的使用
> - 可以在模板中监听子组件的生命周期钩子，好处是可以不破坏第三方的源码的同时监听其生命周期
> - ``<ThirdPart @hook:updated="handleUpdated"></ThirdPart>``
> - 也可以使用``vm.$on('hooks:beforeDestory', cb)`` 或者 ``vm.$once('hooks:beforeDestory', cb)``，可以使代码的可读性更好

#### 5) ``watch``
> - watch 有一个特点，初始化变量的是时候是不会执行回调的，可以使用``immediate: true``
> - `deep: true``可以进行深度监听，但有时☝🏻监听某一层，可以这样写
```js
        watch: {
            'obj.a': {
                handler(newVal, oldVal) {
                },
            }
        }
```

#### 6) 渲染函数中使用 JSX

### 3.5 vue3.0的特点
#### 1) 性能比2.0快1.3~2倍
> - diff 算法优化
>> - vue2.0的VNode比较是全量的，vue3.0只比较PatchFlag标记标记节点，静态节点不比较
>> - cachehandlers 事件侦听缓存 vue2.0的事件绑定是动态的，每次都会重新创建，vue3.0会缓存不变的事件
#### 2) 使用``typescript``重构
#### 3) ``Tree shaking support``
#### 4) ``Composition API``
#### 5) 自定义渲染API ``Custom Renderer API``
#### 6) 更先进的组件
> - ``Fragment`` ``Teleport(Protal)`` ``Suspense``
#### 7) ``v-model``统一双向数据流，删除``.sync``
#### 8) ``v-if``、``v-for``优先级问题
> - 在2.x是``v-for``优先级高，在3.0中``v-if``的优先级高
#### 9) 去掉``functional: true``
```js
        import { h } from 'vue'

        const FuncComp = (props, context) => {
            return h(`h${props.name}`, context.attrs, context.slots)
        }

        FuncComp.props = ['level']

        export default FuncComp
```
#### 10) vue文件结构
> - ``beforeCreate``和``created``钩子使用``setup``函数替代
> - props解构会使其丧失响应式的
> - 一个组件中可写多个v-model指令
```html
        <!-- 
            作者：宫小白
            链接：https://juejin.im/post/6874314855281590280
            来源：掘金
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
         -->
        <!-- 父组件 -->
        <test01 v-model:foo="a" v-model:bar="b"></test01>
        <!-- 子组件 -->
        <template>
            <div>{{num2}}</div>
            <input type="text" :value="foo" @input="$emit('update:foo',$event.target.value)" />
            <input type="text" :value="bar" @input="$emit('update:bar',$event.target.value)" />
        </template>
        <script>
        import { ref, reactive, computed, watch, onMounted, onUpdated, onUnmounted, provide, inject } from "vue";
        export default {
            props: {
                data: String,
            },
            emits: ["update:foo", "update:bar"],, // 用于v-model
            setup (props, context) {
                provide('xx','1234')
		        const data=inject('xx', 该参数为默认值);
                const num = ref(1);
                const obj = reactive({
                    name: "gxb",
                    age: 18,
                    num,
                });
                const num2 = computed(() => num.value + 1);
                const num3 = computed({
                    get: () => num,
                    set: value => num.value = value
                });
                watch(num, (name, preName) => {
                    console.log(`new ${name}---old ${preName}`);
                });
                // 监听多个
                watch([num, ()=>obj.name], ([newNum, newName], [oldNum, oldName]) => {
                    console.log(`new ${(newNum)},${(newName)}---old ${(oldNum)},${oldName}`);
                });

                // 生命周期
                onBeforeMounted(() => {
                    console.log('beforeMounted!')
                });
                onMounted(() => {
                    console.log('mounted!')
                });
                onUpdated(() => {
                    console.log('updated!')
                });
                onUnmounted(() => {
                    console.log('unmounted!')
                });
                return { num, obj, num2, num3 };
            },
        };
        </script>
``` 
#### 11) ``Teleport`` 传送门
> - 把节点挂载到body上
```html
    <teleport to="body">
        <div v-if="flag">
            <div>模态框</div>
        </div>
    </teleport>
```
#### 12) Fragments
> - 原来template节点下只能放一个节点，现在可以放多个


--------        
## 四、React

### 4.1 八股文
#### 1) 单向数据流
> - ``view`` -> ``action`` -> ``store`` -> ``reducer`` -> ``store`` -> ``view``
> - ``view`` ``dispatch`` 一个 ``action``，``store``根据``action``的类型``reducer``一个``new state``，``store``拿到``new state``后更新``view``

#### 2) ``setState``是同步还是异步
> - ``setState``只在合成事件和钩子函数中是“异步”的，在原生事件和 ``setTimeout`` 中都是同步的。
> - setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，此外可以通过 ``setState(newState, cb)`` 中的cb拿到更新后的结果。
> - 一句话总结：``react``管得到的就是异步 管不到的就是同步

发生时机|特点
-|-
批量更新|创建一个异步队列``updateQueue``，通过 ``firstUpdate`` 、 ``lastUpdate`` 、`` lastUpdate.next`` 去维护这个队列，相同的``key``会被覆盖，只保留最后一个更新，这样的话就可以避免多次更新同一个``state``
合成事件|合成事件的代码放在``try``里面执行，此时去读``state``里面的值还是以前的，所以就会造成异步的错觉，最后执行``finally``的时候次啊回执行``performSyncWork``方法，更新``state``并渲染视图
生命周期|如果在``componentDidMount``中执行``SetState``，需要在执行完``componentDidmount``后才去``commitUpdateQueue``更新
原生事件|没有走合成事件的逻辑，并不像合成事件或钩子函数中被``return``，而直接走``performSyncWork``去更新，所以当在原生事件中``setState``后，能同步拿到更新后的``state``值
``setTimeout``|基于``event Loop``的模型下，没有被react包装过，``setTimeout``中里去``setState``总能拿到最新的``state``值

#### 3) 通讯
> - 
方式|特点
父子|props
兄弟|父state子props
多层|``Provider``，``Consumer``和``Context``
``eventbus``|``on`` ``emit``

```js
        // util.js
        import React from 'react'
        let { Consumer, Provider } = React.createContext();//创建 context 并暴露Consumer和Provider模式
        export {
            Consumer,
            Provider
        }
```

```html
        <!-- 父组件 -->
        <!-- 导入 Provider -->
        import {Provider} from "../../utils/context"

        <Provider value={name}>
            <div>
                <p>父组件定义的值:{name}</p>
                <Child />
            </div>
        </Provider>
```

```js
        // 导入Consumer
        import { Consumer } from "../../utils/context"
        function Son(props) {
            return (
                //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
                <Consumer>
                    {
                        name => (
                            <div
                                style={{
                                    border: "1px solid blue",
                                    width: "60%",
                                    margin: "20px auto",
                                    textAlign: "center"
                                }}
                            >
                                // 在 Consumer 中可以直接通过 name 获取父组件的值
                                <p>子组件。获取父组件的值:{name}</p>
                            </div>
                        )
                    }
                </Consumer>
            );
        }
        export default Son;
```

#### 4) 为什么使用框架而不是原生
> - *组件化* ``react``的组件化可以做到函数级别的原子组件
> - *天然分层* ``MVVM``模式，代码解耦更容易读写
> - *开发效率* 不必手动更新DOM，提高开发效率
> - *生态* 数据流管理结构和UI库都有成熟的解决方案

#### 5) ``redux``的``middleware``机制
> - 使用``applyMiddleware`` ``API``
> - 借鉴koa的洋葱圈模型
```js
        // 手动包装dispatch
        getDispatchWrapper(store) {
            let next = store.dispatch;
            return action => {
                // before TODO
                const result = next(action);
                // after TODO
                return result;
            }
        }

        // middlewares = [getDispatchWrapper1, getDispatchWrapper2, ...];
        function applyMiddleware(middlewares) {
            middlewares
            .reverse()
            .forEach(getDispatchWrapper => store.dispatch = getDispatchWrapper(store));
        }
```

> - 上面的做法是每次更新store.dispatch方法的引用，只想一个新的函数，此外还有一种方式进行链式调用，使用next作为传参代替store.dispatch

```js
        // 改进 克里希化getDispatchWrapper
        const middle = store => next => action => {
            // before TODO
            console.log('dispatching', action);

            const result = next(action);

            // after TODO
            console.log('next state', store.getState());

            return result;
        }

        // middlewares = [getDispatchWrapper1, getDispatchWrapper2, ...];
        function applyMiddleware(middlewares) {
            middlewares
            .reverse()
            .reduce((ret, middle) => middle(store)(ret), store.dispatch)
        }
```
#### 6) thunk
> - 判断``action``：如果是``function``类型，就调用这个``function``（并传入``dispatch``和``getState`` 及``extraArgument`` 为参数），而不是任由让它到达 ``reducer``，因为 ``reducer`` 是个纯函数，``Redux`` 规定到达 ``reducer`` 的 ``action`` 必须是一个 ``plain object`` 类型。

```js
        function createThunkMiddleware(extraArgument) {
            return ({ dispatch, getState }) => next => action => {
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }

                return next(action);
            };
        }

        const thunk = createThunkMiddleware();
        thunk.withExtraArgument = createThunkMiddleware;

        export default thunk;
```

### 4.2 性能优化
### 4.3 原则与规范
### 4.4 小技巧
 