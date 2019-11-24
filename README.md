# EffectiveFE-Engineering

## 作者：冰红茶  
    
------    
    
工作了一段时间后，发现自己在代码高效化和工程化方面欠债太多，所以想记录和总结用以提升效率的最佳实践^_ ^
        
------   
## 参考书籍：
### 高效前端：《Web高效编程与优化实践》作者：李银城
### 《前端工程化 体系设计与实践》作者：周俊鹏
        
------   
## 目录
## [一、HTML/CSS优化](#1)
### [1.1 巧用伪类](#1.1)
### [1.2 HTML标签](#1.2)
## [二、JS代码优化](#2)
### [2.1 几个原则和模式](#2.1)
### [2.2 其他优化策略](#2.2)
## [三、页面优化](#2)
### [2.1 基本数据类型](#2.1)
### [2.2 对象类型系统](#2.2)
### [2.3 平台](#2.3)
## [四、webpack打包](#3)
### [4.1 本地测试服务器+postman](#4.1)
## [五、库的设计](#4)
### [5.1 本地测试服务器+postman](#5.1)
## [六、本地测试](#2)
### [6.1 本地测试服务器+postman](#6.1)

            
--------        
<h2 id='1'>一、HTML/CSS优化</h2>
        
## 遵循几条大原则：
> - 能用HTML/CSS优化结束战斗的勿用JS
> - 尽量简练
        
<h3 id='1.1'>1.1 巧用伪类</h3>  
        
#### 1) hover
> - 高亮：hover与opacity配合
                
                .title:hover {
                    opacity: 0.5;
                }

                <h1 class="title">你好</h1>
> - 显示子菜单
>> - 这里有一个问题，两个组件需要紧邻着，否则如果存在间隙的话两个组件hover的过程变得不连续，显示就会变得失效。
>> - 但是实际业务中，需要两个紧邻组件中的是需要缝隙的，这时候可以使用透明伪元素解决问题
                
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
#### 2) checked
> - 修改radio/checkbox的样式
                
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
                    
#### 3) 前向伪类选择器nth-last-of-type(n)
> - 多列宽度自适应
                
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

<h3 id='1.2'>1.2 HTML标签</h3>  
        
#### 1) 画一个三角形
> - 利用不同border边的透明度
                

                .triangle {
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-bottom: 10px solid red;
                }

                <div class="triangle"></div>
#### 2) 尽可能使用伪元素
> - 伪元素原生计算值是inline
> - 输入框的不可读可以使用伪元素进行覆盖
> - CSS计数器count
                
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


--------        
<h2 id='2'>二、js优化</h2>

        
<h3 id='2.1'>2.1 几个原则和模式</h3>  
        
#### 1) 避免使用全局变量
> - 
#### 2) 改变样式
> - 常见的方法是直接使用getComputedStyle, 添加内联style的方式，但是这种方式不好，每次都要添加多个样式，而且不能复用，最佳实践是先把需要实现的样式用class实现，然后再用JS addClass的方式进行实现
#### 3) 避免使用重复代码
> - 重复代码 -> 封装成函数 -> 封装成模块 -> 封装成库 -> 封装成SDK
> - 使用策略模式有利于高内聚低耦合，也能体现开闭原则（即对拓展是开放的，对修改是封闭的）
                
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
#### 3) 访问者模式
<<<<<<< HEAD
> - 
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
#### 4) 不要滥用闭包
> - 闭包的作用是可以使子作用域访问父作用域的变量，同时不用闭包内的变量不可见。
> - 子作用域访问上层的作用域需要花费较多的时间，做好直接把父作用域的变量作为函数的参数传进去
        
<h3 id='2.2'>2.2 其他优化策略</h3>  
        
#### 1) 其他优化策略
> - 使用三目运算符
> - 不要出现魔数，即函数的参数含义不明显，可以先在函数前面把参数重新定义一下名称再传进去
> - Object.assign()合并对象
> - 减少使用forEach，map等遍历函数，多使用includes(), filter(), find()等数组方法
> - 使用async/await 替代promise和callback hell, 对于一些callback hell可以先包装成promise再使用async/await
        
--------        
<h2 id='3'>三、页面优化</h2>

        
<h3 id='3.1'>3.1 chrome的优化工具</h3>  
        
#### 1) Performance
> - 里面可以看帧的帧率，还有js,html,css的耗时
#### 1) Performance
> - 
<h3 id='3.1'>3.2 控制台打印</h3>  
        
#### 1) 使用console.table代替console.log层级较深的数组或者对象
> - 
=======
> - 
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
#### 4) 不要滥用闭包
> - 闭包的作用是可以使子作用域访问父作用域的变量，同时不用闭包内的变量不可见。
> - 子作用域访问上层的作用域需要花费较多的时间，做好直接把父作用域的变量作为函数的参数传进去
        
<h3 id='2.2'>2.2 其他优化策略</h3>  
        
#### 1) 其他优化策略
> - 使用三目运算符
> - 不要出现魔数，即函数的参数含义不明显，可以先在函数前面把参数重新定义一下名称再传进去
> - Object.assign()合并对象
> - 减少使用forEach，map等遍历函数，多使用includes(), filter(), find()等数组方法
> - 使用async/await 替代promise和callback hell, 对于一些callback hell可以先包装成promise再使用async/await
>>>>>>> 86b08ad91f0c99af4be64593b56aabdc8d731ced
