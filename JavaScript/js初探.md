Mosaic(马赛克)，是互联网历史上第一个获普遍使用和能够显示图片的网页浏览器,1997年问世
Sun公司被Oracle公司收购,JavaScript版权归Oracle公司所有

编译性语言:c c++
	优点:快
不足:移植性不好(不跨平台)
解释性语言:JavaScript PHP
	优点:跨平台
	不足:稍微慢

原始值存在栈内存(stack)中
引用值存在堆内存(heap)中
栈内存和栈内存之间赋值是拷贝
栈内存存放堆内存地址,引用值之间拷贝过去的是地址
字符串比大小比较的是asc码顺序
asc1 asc2
var a = ”10”>”8”false
var b = 1==2;false
var c = NaN ==NaNfalse//特例

逻辑运算符 && || !
先看第一个表达式转换为布尔值的结果值,如果为真,那它就会看第二个表达式的布尔值结果,如果只有两个表达式的话,就返回第二个表达式的值.
var a = 1 && 2;
undefined null NaN “” 0 false false
2>1 && document.write('我很帅’);

var num=1 & 3;
没卵用

console.log(a);

var obj={
	name:”cxf”,
	sex:”男”,
	age:18,
}

JavaScript即是面向过程,也是面向对象语言.
typeof : number  String  Boolean  object  undefined  function 
null为原始值.表示占位最初用于给空对象占位(历史遗留问题)

JavaScrip隐式类型转换
paseInt  paseFloat  String  Boolean toString   
defind定义
undefined没有定义的

undefined不能转换成数
var num=Number(true); num=1;
Number(true)NaN

var demo=”10”;
var num=parseInt(demo,16);以16进制为基底

undefined不能用toString

var demo=123;
var num=demo.toString(8);

21016
var num=1000;
var test=parseInt(num,2);
console.log(test.toString(16)); 

inNaN()Number()
++/--/+/- Number() 纵使转不成数字,但也是number的人
== != >= <= 
undefined==null

不发生类型转换===   !==

num.toFixed();小数点保留几位

console.log(typeof(a));唯一不报错情况

弱数据类型不能打印出地址值

表达式会忽略名字
命名函数表达式(函数表达式)
var  test=function abc(){
	
}
匿名函数表达式
var  test=function (){
	
}
test.name

a形参
function sum(a){
	//arguments  [11,2,3]
}
a实参
sum(11,2,3)

function sum(a,b,c,d){
	if(sum.length>arguments.length){
	console.log(“实参多了”)
}
}

arguments和参数同时变化,但他们并不是同一个,内部映射规则,跟随变化
实参个数不对应形参个数时他俩不映射.
return可终止函数	
函数里面的可以访问函数外面的,但外面的不能访问里面的

递归,调用自己
如何使用递归：1.找规律 2.找出口

js运行三部曲
1.	语法分析 通篇扫描
2.	预编译
3.	解释执行

Window就是全局的域
function a(){}函数声明
var a = function (){}函数表达式

var a=123;window{ a:123  }
预编译发生在函数执行的前一刻
预编译前奏
1.	implay global暗示全局变量:如果变量未经申明就赋值,此变量就为全局变量所有
2.	一切声明的全局变量,全是window的属性 

Window就是全局 

预编译
1.	创建AO对象
2.	找形参和变量声明,将变量和形参名作为AO属性名,值为undefined
3.	将实参值和形参统一
4.	在函数体里找函数声明,值赋予函数体

GO===window
全局的预编译,生成一个GO对象(global object),然后直接跳到最后一部
方法全部向上提升,声明声明提升
预编译略过

[[scope]]隐藏内置属性
function a(){
	funciotn b(){}
}
a defined:  a.[[scope]]0:GO{}
a doing:  a.[[scope]]0:AO{}
					1:GO{}
b defined:  a.[[scope]] 0:AO{}
					1:GO{}
b doing:  a.[[scope]]0:AO{}
					1:AO{}
					2:GO{}
AO放在作用于链的顶端

内部函数保存到外部,内部函数就成了闭包

闭包会导致原有作用域链不释放,造成内存泄露

闭包的作用
1.	实现公有变量 eg: 函数累加器
2.	做缓存(存储结构) eg:eater
3.	实现封装,属性私有化 eg:Person();
4.	模块化开发,防止污染全局变量 

立即执行函数也有执行期上下文,函数执行一次后就被销毁了
var num = (function (a,b){
	var c=a+b;
}(1,2));

(function (){})();第二种形式
()执行符号
只有表达式才能被执行符号执行

var test = function(){
	console.log(“a”);
}
能被执行符号执行的表达式这个函数的名字就会被忽略
函数在定义是不用看该函数

变量未声明就使用会报错,对象的属性没有就访问会打印undefined
对象属性的增删改查
对象字面量 对象直接量
var obj = new Object();
var obj={}
构造函数结构上和函数没区别

function Person(){

}
var person1=new Person();
person1.name = “小乔”
构造函数名大驼峰式命名规则(每个单词首字母大写)
new了之后写return不能返回原始值,只能返回对象

element元素

querySelector() , querySelectorAll()  不实时
var newDiv = document.createElement()
document.body.appendchild(newDiv)
parentNode
push:array.prototype.push
splice:array.prototype.splice变得像数组

comment注释

function returnParent(element,n){
		while(element , n){
			element = element.parentElement;
			n--;
		}
		return element;
	}
	var i = document.getElementsByTagName('i')[0];

sibling兄弟
div.classname=’’
div.id=’’

var firstTime = new Date().getTime();
	for(var i = 0;i < 1000000; i++){
	}
	var lastTime = new Date().getTime();
	console.log(lastTime-firstTime);
	
	setInterval(,time)
time只识别一次,时间不准

/*function returnParent(element,n){
		while(element , n){
			element = element.parentElement;
			n--;
		}
		return element;
	}
	var i = document.getElementsByTagName('i')[0];*/
	
	/*var div = document.createElement('div');
	var p = document.createElement('p');
	div.setAttribute('class','example');
	p.setAttribute('class','slogan');
	var text = document.createTextNode('最帅');
	p.appendChild(text);
	div.appendChild(p);
	document.body.appendChild(div);*/
	var firstTime = new Date().getTime();
	for(var i = 0;i < 1000000; i++){
	}
	var lastTime = new Date().getTime();
	console.log(lastTime-firstTime);
	
	setInterval(,time)

标准模式,怪异模式

查看几何元素的尺寸doEle.getBoundingClientRect();
	
事件元对象

