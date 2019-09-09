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
### [1.3 平台](#1.3)
## [二、JS代码优化](#2)
### [2.1 基本数据类型](#2.1)
### [2.2 对象类型系统](#2.2)
### [2.3 平台](#2.3)
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
        
#### 1) 
> - 
