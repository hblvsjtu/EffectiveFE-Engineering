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
  - [作者：冰红茶](#%e4%bd%9c%e8%80%85%e5%86%b0%e7%ba%a2%e8%8c%b6)
  - [参考书籍：](#%e5%8f%82%e8%80%83%e4%b9%a6%e7%b1%8d)
    - [高效前端：《Web高效编程与优化实践》作者：李银城](#%e9%ab%98%e6%95%88%e5%89%8d%e7%ab%afweb%e9%ab%98%e6%95%88%e7%bc%96%e7%a8%8b%e4%b8%8e%e4%bc%98%e5%8c%96%e5%ae%9e%e8%b7%b5%e4%bd%9c%e8%80%85%e6%9d%8e%e9%93%b6%e5%9f%8e)
    - [《前端工程化 体系设计与实践》作者：周俊鹏](#%e5%89%8d%e7%ab%af%e5%b7%a5%e7%a8%8b%e5%8c%96-%e4%bd%93%e7%b3%bb%e8%ae%be%e8%ae%a1%e4%b8%8e%e5%ae%9e%e8%b7%b5%e4%bd%9c%e8%80%85%e5%91%a8%e4%bf%8a%e9%b9%8f)
  - [一、HTML/CSS优化](#%e4%b8%80htmlcss%e4%bc%98%e5%8c%96)
    - [遵循几条大原则：](#%e9%81%b5%e5%be%aa%e5%87%a0%e6%9d%a1%e5%a4%a7%e5%8e%9f%e5%88%99)
    - [1.1 巧用伪类](#11-%e5%b7%a7%e7%94%a8%e4%bc%aa%e7%b1%bb)
      - [1) hover](#1-hover)
      - [2) checked](#2-checked)
      - [3) 前向伪类选择器nth-last-of-type(n)](#3-%e5%89%8d%e5%90%91%e4%bc%aa%e7%b1%bb%e9%80%89%e6%8b%a9%e5%99%a8nth-last-of-typen)
    - [1.2 HTML标签](#12-html%e6%a0%87%e7%ad%be)
      - [1) 画一个三角形](#1-%e7%94%bb%e4%b8%80%e4%b8%aa%e4%b8%89%e8%a7%92%e5%bd%a2)
      - [2) 尽可能使用伪元素](#2-%e5%b0%bd%e5%8f%af%e8%83%bd%e4%bd%bf%e7%94%a8%e4%bc%aa%e5%85%83%e7%b4%a0)
  - [二、js优化](#%e4%ba%8cjs%e4%bc%98%e5%8c%96)
    - [2.1 几个原则和模式](#21-%e5%87%a0%e4%b8%aa%e5%8e%9f%e5%88%99%e5%92%8c%e6%a8%a1%e5%bc%8f)
      - [1) 避免使用全局变量](#1-%e9%81%bf%e5%85%8d%e4%bd%bf%e7%94%a8%e5%85%a8%e5%b1%80%e5%8f%98%e9%87%8f)
      - [2) 改变样式](#2-%e6%94%b9%e5%8f%98%e6%a0%b7%e5%bc%8f)
      - [3) 避免使用重复代码](#3-%e9%81%bf%e5%85%8d%e4%bd%bf%e7%94%a8%e9%87%8d%e5%a4%8d%e4%bb%a3%e7%a0%81)
      - [3) 访问者模式](#3-%e8%ae%bf%e9%97%ae%e8%80%85%e6%a8%a1%e5%bc%8f)
      - [4) 不要滥用闭包](#4-%e4%b8%8d%e8%a6%81%e6%bb%a5%e7%94%a8%e9%97%ad%e5%8c%85)
    - [2.2 其他优化策略](#22-%e5%85%b6%e4%bb%96%e4%bc%98%e5%8c%96%e7%ad%96%e7%95%a5)
      - [1) 其他优化策略](#1-%e5%85%b6%e4%bb%96%e4%bc%98%e5%8c%96%e7%ad%96%e7%95%a5)
      - [1) Array方法](#1-array%e6%96%b9%e6%b3%95)
  - [三、页面优化](#%e4%b8%89%e9%a1%b5%e9%9d%a2%e4%bc%98%e5%8c%96)
    - [3.1 chrome的优化工具](#31-chrome%e7%9a%84%e4%bc%98%e5%8c%96%e5%b7%a5%e5%85%b7)
      - [1) Performance](#1-performance)
      - [1) Performance](#1-performance-1)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-%e4%bd%bf%e7%94%a8consoletable%e4%bb%a3%e6%9b%bfconsolelog%e5%b1%82%e7%ba%a7%e8%be%83%e6%b7%b1%e7%9a%84%e6%95%b0%e7%bb%84%e6%88%96%e8%80%85%e5%af%b9%e8%b1%a1)
  - [四、webpack打包](#%e5%9b%9bwebpack%e6%89%93%e5%8c%85)
    - [3.1 开发环境与生产环境](#31-%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e4%b8%8e%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83)
      - [1) Performance](#1-performance-2)
      - [1) Performance](#1-performance-3)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-%e4%bd%bf%e7%94%a8consoletable%e4%bb%a3%e6%9b%bfconsolelog%e5%b1%82%e7%ba%a7%e8%be%83%e6%b7%b1%e7%9a%84%e6%95%b0%e7%bb%84%e6%88%96%e8%80%85%e5%af%b9%e8%b1%a1-1)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-%e4%bd%bf%e7%94%a8consoletable%e4%bb%a3%e6%9b%bfconsolelog%e5%b1%82%e7%ba%a7%e8%be%83%e6%b7%b1%e7%9a%84%e6%95%b0%e7%bb%84%e6%88%96%e8%80%85%e5%af%b9%e8%b1%a1-2)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-%e4%bd%bf%e7%94%a8consoletable%e4%bb%a3%e6%9b%bfconsolelog%e5%b1%82%e7%ba%a7%e8%be%83%e6%b7%b1%e7%9a%84%e6%95%b0%e7%bb%84%e6%88%96%e8%80%85%e5%af%b9%e8%b1%a1-3)
      - [1) 使用console.table代替console.log层级较深的数组或者对象](#1-%e4%bd%bf%e7%94%a8consoletable%e4%bb%a3%e6%9b%bfconsolelog%e5%b1%82%e7%ba%a7%e8%be%83%e6%b7%b1%e7%9a%84%e6%95%b0%e7%bb%84%e6%88%96%e8%80%85%e5%af%b9%e8%b1%a1-4)
  - [五、库的设计](#%e4%ba%94%e5%ba%93%e7%9a%84%e8%ae%be%e8%ae%a1)
    - [5.1 配置设计](#51-%e9%85%8d%e7%bd%ae%e8%ae%be%e8%ae%a1)
      - [1) Performance](#1-performance-4)
      - [1) Performance](#1-performance-5)
  - [六、单元测试](#%e5%85%ad%e5%8d%95%e5%85%83%e6%b5%8b%e8%af%95)
    - [6.1 macha](#61-macha)
      - [1) Performance](#1-performance-6)
      - [1) Performance](#1-performance-7)
  - [七、mock服务器](#%e4%b8%83mock%e6%9c%8d%e5%8a%a1%e5%99%a8)
    - [7.1 koa](#71-koa)
      - [1) Performance](#1-performance-8)
      - [1) Performance](#1-performance-9)
    - [7.2 路由](#72-%e8%b7%af%e7%94%b1)
      - [1) Performance](#1-performance-10)
      - [1) Performance](#1-performance-11)
    - [7.3 普通请求](#73-%e6%99%ae%e9%80%9a%e8%af%b7%e6%b1%82)
      - [1) Performance](#1-performance-12)
      - [1) Performance](#1-performance-13)
    - [7.4 上传](#74-%e4%b8%8a%e4%bc%a0)
      - [1) Performance](#1-performance-14)
      - [1) Performance](#1-performance-15)
    - [7.5 下载](#75-%e4%b8%8b%e8%bd%bd)
      - [1) Performance](#1-performance-16)
      - [1) Performance](#1-performance-17)
    - [7.6 播放](#76-%e6%92%ad%e6%94%be)
      - [1) Performance](#1-performance-18)
      - [1) Performance](#1-performance-19)
  - [八、Vue](#%e5%85%abvue)
    - [8.1 koa](#81-koa)
  - [九、React](#%e4%b9%9dreact)
    - [9.1 基本使用](#91-%e5%9f%ba%e6%9c%ac%e4%bd%bf%e7%94%a8)
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

        
### 8.1 koa


--------        
## 九、React

        
### 9.1 基本使用
#### 1) Performance
 