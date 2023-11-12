
// ==UserScript==
// @name        计量日冻结数据批量召测神器
// @namespace   F1
// @description 根据填写的用户编号，直达召读数据、保存数据按钮，并且可以导出为表格。
// @include     http://10.150.12.240/gdcams/index.html*
// @version     3.0
// @grant       none
// @author      F1
// ==/UserScript==
Date.prototype.formatDate = function(b) {
	var c = {
		"M+" : this.getMonth() + 1,
		"d+" : this.getDate(),
		"h+" : this.getHours(),
		"m+" : this.getMinutes(),
		"s+" : this.getSeconds(),
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		S : this.getMilliseconds()
	};
	if (/(y+)/.test(b)) {
		b = b.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length))
	}
	for ( var a in c) {
		if (new RegExp("(" + a + ")").test(b)) {
			b = b.replace(RegExp.$1, RegExp.$1.length == 1 ? c[a]
					: ("00" + c[a]).substr(("" + c[a]).length))
		}
	}
	return b
};
function formatDateText(c, b) {
	switch (c) {
	case "C":
		return b.formatDate("yyyy-MM-dd");
		break;
	case "D":
		return b.formatDate("yyyy-MM-dd");
		break;
	case "M":
		return b.formatDate("yyyy-MM");
		break;
	case "Q":
		var a = b.getMonth() + 1;
		var d = parseInt((a + 2) / 3);
		a = d * 3 - 2;
		b.setMonth(a - 1);
		return b.formatDate("yyyy-MM");
		break;
	case "Y":
		return b.formatDate("yyyy");
		break;
	case "MI":
		return b.formatDate("yyyy-MM-dd hh:mm");
		break;
	case "H":
		return b.formatDate("yyyy-MM-dd");
		break;
	case "HH":
		b.setMinutes(0);
		return b.formatDate("yyyy-MM-dd hh:mm");
		break;
	case "W":
		return b.formatDate("yyyy-MM-dd");
		break;
	case "SS":
		return b.formatDate("yyyy-MM-dd hh:mm:ss");
		break;
	default:
		break
	}
}


function sleep(time){
	return new Promise((resolve) => setTimeout(resolve, time));
}

var magic_JLY_PLZC = (function() {
	var that = {};

	function run() {

var qxdwbm = "0306";

var yhbhs = [];
var rowLength = 21;

var DIVwidth = 2500;
var DIVheight = 1200;

// 创建一个AbortController对象
var controllerww = new AbortController();

// 发送fetch请求，并将controller.signal作为选项参数
// fetch("https://xushanxiang.com/demo/js-abort-fetch/MilkyWayGlowingAtNight-1.mp4", {
//   signal: controllerww.signal
// });
// // 当需要取消请求时，调用controller.abort()
// controllerww.abort();
// Create a floating button
var TOPbutton = document.createElement( "div" );
TOPbutton.style.position = "fixed";
TOPbutton.style.top = "200px";
TOPbutton.style.left = "200px";
TOPbutton.style.width = "50px";
TOPbutton.style.height = "50px";
TOPbutton.style.borderRadius = "50%";
TOPbutton.style.backgroundColor = "rgba(144, 134, 228, 0.8)";
TOPbutton.style.cursor = "move";
TOPbutton.style.zIndex = "99999";
TOPbutton.id="TOPbutton1"
document.body.appendChild( TOPbutton );

// Make the button draggable
var dragging = false;
var offsetX, offsetY;
TOPbutton.addEventListener( "mousedown", function ( e ) {
	dragging = true;
	offsetX = e.clientX - TOPbutton.offsetLeft;
	offsetY = e.clientY - TOPbutton.offsetTop;
} );
document.addEventListener( "mousemove", function ( e ) {
	if ( dragging ) {
		TOPbutton.style.left = e.clientX - offsetX + "px";
		TOPbutton.style.top = e.clientY - offsetY + "px";
	}
} );
document.addEventListener( "mouseup", function ( e ) {
	dragging = false;
} );

// Toggle the page visibility when clicking the button
var visible = false;
TOPbutton.addEventListener( "click", function ( e ) {
	visible = !visible;
	TOPpage.style.display = visible ? "block" : "none";
} );






function setTableValue ( row, col, value ) {
	document.querySelector( "#cell" + row + "_" + col + " > p" ).innerText = value;
}
function setTableValue2 ( row, col, value ) {
	//请注意只有第一行有两个文本
	if(row!=0)
	return
	document.querySelector( "#cell" + row + "_" + col + " > p:nth-child(2)" ).innerText = value;
}

function getTableValue ( row, col ) {
	return document.querySelector( "#cell" + row + "_" + col + " > p" ).innerText;
}
function getTableValue2 ( row, col, value ) {
	return document.querySelector( "#cell" + row + "_" + col + " > p:nth-child(2)" ).innerText;
}

function setTableSelectValue ( row, col, value ) {
	document.querySelector( "#cell" + row + "_" + col + " > select" ).value = value;
}
function getTableSelectValue ( row, col ) {
	return document.querySelector( "#cell" + row + "_" + col + " > select" ).value;
}
function addTableSelectOption ( row, col, value,text) {
			//创建一个option元素
			var option = document.createElement( "option" );
			//设置option的value和文本内容为选项list中的值
			option.value = value;
			option.textContent = text;
			//将option添加到select中
			document.querySelector( "#cell" + row + "_" + col + " > select" ).appendChild(option);
}

function getTableButton ( row, col ) {
	return document.querySelector( "#cell" + row + "_" + col + " > button" );
}

function setTableTextShow ( row, col ) {
	document.querySelector( "#cell" + row + "_" + col + " > p" ).style.display = "block";
}
function setTableButtonHide ( row, col ) {
	document.querySelector( "#cell" + row + "_" + col + " > button" ).style.display = "none";
	if(col==20||col==28){
		setTableValue(row,col,"-")
	}
}

function setTableValuePlus ( row, startCol, list ) {
	for ( let i = 0; i < list.length; i++ ) {
		document.querySelector( "#cell" + row + "_" + startCol++ + " > p" ).innerText = list[ i ];
	}
}

function setTableButtonShow ( row, col ) {
	document.querySelector( "#cell" + row + "_" + col + " > button" ).style.display = "block";
}

function setTableColor ( row, col, color ) {
	document.querySelector( "#cell" + row + "_" + col + " > p" ).style.color = color;
}

function setTableButtonColor ( row, col, color ) {
	document.querySelector( "#cell" + row + "_" + col + " > button" ).style.color = color;
}

function addTextToCell ( row, col, text ) {
	var p = document.createElement( "p" );
	p.textContent = text;
	document.querySelector( "#cell" + row + "_" + col ).appendChild( p );
}

//计算要取的何日的数据
function setSjsj ( row, col, value ) {
	//document.querySelector("#cell" + row + "_" + col + " > select").value = value;
	var hex = "0" + parseInt( value ).toString( 16 ).toUpperCase(); //将选择的数字转化为16进制数，并且前边带0
	var sjxitem = "050601" + hex;
	document.querySelector( "#cell" + row + "_" + col + " > select" ).sjxitem = sjxitem;

	if ( getTableValue( row, 12 ).indexOf( "cell" ) != -1 || getTableValue( row, 12 ).indexOf( "---" ) != -1 || getTableValue( row, 12 ).indexOf( "***" ) != -1 ) {
		setTableValue( row, col, "***" );
	} else {
		var sjsj = new Date( getTableValue( row, 12 ) ); //获取召测时间
		sjsj.setDate( sjsj.getDate() - value + 1 ); //计算需要召测的日期时间
		setTableValue( row, col, formatDateText( "D", sjsj ) ); //将选择的召测日期显示在该cell
	}
	setTableButtonHide( row, 20 ); //更改后隐藏保存数据按钮，防止写入错误的数据
	setTableButtonHide( row, 28 );
}



//设置列标题（第0行）
function addAllTextToCell () {

	setTableValue( 0, 0, "yhbh" );
	setTableValue( 0, 1, "dycldbs" );
	setTableValue( 0, 2, "qxdwbm" );
	setTableValue( 0, 3, "zdljdz" );
	setTableValue( 0, 4, "zdbs" );
	setTableValue( 0, 5, "cbsxh" );
	//
	setTableValue( 0, 6, "dbh" );
	setTableValue( 0, 7, "sbwdk" );
	setTableValue( 0, 8, "btl" );
	setTableValue( 0, 9, "txfsdm" );
	setTableValue( 0, 10, "sjw" );
	setTableValue( 0, 11, "tzw" );
	setTableValue( 0, 12, "lastFreeze" );
	//
	setTableValue( 0, 13, "sjxitem" );
	setTableValue( 0, 14, "sjxitem2" );

	//
	setTableValue( 0, 15, "dg" );
	setTableValue( 0, 16, "dp" );
	setTableValue( 0, 17, "df" );
	setTableValue( 0, 18, "dj" );
	setTableValue( 0, 19, "dz" );
	setTableValue( 0, 20, "save1" );
	//
	setTableValue( 0, 21, "sjxitem" );
	setTableValue( 0, 22, "sjxitem2" );
	//
	setTableValue( 0, 23, "dg" );
	setTableValue( 0, 24, "dp" );
	setTableValue( 0, 25, "df" );
	setTableValue( 0, 26, "dj" );
	setTableValue( 0, 27, "dz" );
	setTableValue( 0, 28, "save2" );

	///////////////////////////////////////////////////////////////
	setTableValue2( 0, 0, "0.用户编号" );
	setTableValue2( 0, 1, "1.参数" );
	setTableValue2( 0, 2, "2.电网部门" );
	// addTextToCell( 0, 2, "【tip:默认佛山局即可。如出现错误，再尝试选择到具体的供电所。】" );
	setTableValue2( 0, 3, "3.终端逻辑地址" );
	setTableValue2( 0, 4, "4.参数" );
	setTableValue2( 0, 5, "5.测量点号" );
	//
	setTableValue2( 0, 6, "6.表地址" );
	setTableValue2( 0, 7, "7.端口" );
	setTableValue2( 0, 8, "8.波特率" );
	setTableValue2( 0, 9, "9.通讯方式" );
	setTableValue2( 0, 10, "10.数据位" );
	setTableValue2( 0, 11, "11.停止位" );
	setTableValue2( 0, 12, "12.上1次日冻结时间" );
	//
	setTableValue2( 0, 13, "13.取何日的日冻结数据" );
	addTextToCell( 0, 13, "【选择取上x次数据】" );

	setTableValue2( 0, 14, "14.选择数据项" );


	//
	setTableValue2( 0, 15, "谷" );
	setTableValue2( 0, 16, "平" );
	setTableValue2( 0, 17, "峰" );
	setTableValue2( 0, 18, "尖" );
	setTableValue2( 0, 19, "总" );
	setTableValue2( 0, 20, "20.保存有功" );
	//
	setTableValue2( 0, 21, "21.取何日的日冻结数据" );
	addTextToCell( 0, 21, "【选择取上x次数据】" );

	setTableValue2( 0, 22, "22.选择数据项" );
	//
	setTableValue2( 0, 23, "谷" );
	setTableValue2( 0, 24, "平" );
	setTableValue2( 0, 25, "峰" );
	setTableValue2( 0, 26, "尖" );
	setTableValue2( 0, 27, "总" );


	setTableValue2( 0, 28, "28.保存无功" );

}






//options={value:[],text:[]}

//定义一个函数生成select下拉框，传入一个选项list作为参数
function createSelect ( row, col, optionsValue,optionsText ) {
	//创建一个select元素
	var select = document.createElement( "select" );
	//遍历选项list，为每个选项创建一个option元素
	for ( let i = 0; i < optionsValue.length; i++ ) {
		//创建一个option元素
		var option = document.createElement( "option" );
		//设置option的value和文本内容为选项list中的值
		option.value = optionsValue[ i ];
		option.textContent = optionsText[ i ];
		//将option添加到select中
		select.appendChild( option );
	}

	if ( col == 2 ) {
		if ( row == 0 ) {
			select.addEventListener( "change", function () {
				for ( let m = 1; m < rowLength; m++ ) {
					setTableSelectValue( m, col, this.value );
					setTableValue( m, col, this.value );
					setTableButtonHide( row, 20 );
					setTableButtonHide( row, 28 ); //更改后隐藏保存数据按钮，防止写入错误的数据
				}
			} );
		} else {
			select.addEventListener( "change", function () {
				setTableValue( row, col, this.value );
				setTableButtonHide( row, 20 );
				setTableButtonHide( row, 28 ); //更改后隐藏保存数据按钮，防止写入错误的数据
			} );
		}
	}
	if ( col == 13 || col == 21 ) {
		if ( row == 0 ) {
			select.addEventListener( "change", function () {
				for ( let m = 1; m < rowLength; m++ ) {
					setSjsj( m, col, this.value );
					setTableSelectValue( m, col, this.value );
				}
			} );
		} else {
			select.addEventListener( "change", function () {
				setSjsj( row, col, this.value );
			} );
		}
	}
	if ( col == 14 || col == 22 ) {
		if ( col == 14 ) select.value = 1;
		if ( col == 22 ) select.value = 2;
		if ( row == 0 ) {
			select.addEventListener( "change", function () {
				for ( let m = 1; m < rowLength; m++ ) {
					document.querySelector( "#cell" + m + "_" + col + " > select" ).value = this.value;
					setTableValue( m, col, select.value );
					setTableButtonHide( m, col + 6 ); //更改后隐藏保存数据按钮，防止写入错误的数据
				}
			} );
		} else {
			select.addEventListener( "change", function () {
				document.querySelector( "#cell" + row + "_" + col + " > select" )
					.value = this.value;
				setTableValue( row, col, this.value );
				setTableButtonHide( row, col + 6 ); //更改后隐藏保存数据按钮，防止写入错误的数据
			} );
		}


	}
	return select;
}


function showEchart_ring(dom){
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
	
    
    
    var option;

    const gaugeData = [  
		{
		value: 0,
		name: '查询用户',
		title: {
		  offsetCenter: ['150%', '-95%']
		},
		detail: {
		  valueAnimation: true,
		  offsetCenter: ['150%', '-80%']
		}
	  },
  {
    value: 0,
    name: '召测参数',
    title: {
      offsetCenter: ['150%', '-65%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['150%', '-50%']
    }
  },
  {
    value: 0,
    name: '召测时间',
    title: {
      offsetCenter: ['150%', '-35%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['150%', '-20%']
    }
  },
  {
    value: 0,
    name: '召测有功',
    title: {
      offsetCenter: ['150%', '-5%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['150%', '10%']
    }
  },  {
    value: 0,
    name: '召测无功',
    title: {
      offsetCenter: ['150%', '25%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['150%', '40%']
    }
  },  {
    value: 0,
    name: '保存有功',
    title: {
      offsetCenter: ['150%', '55%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['150%', '70%']
    }
  },  {
    value: 0,
    name: '保存无功',
    title: {
      offsetCenter: ['150%', '85%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['150%', '100%']
    }
  }
];

option = {

  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 2,
          borderColor: '#464646'
        }
      },
      axisLine: {
        lineStyle: {
          width: 150
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: gaugeData,
      title: {
        fontSize: 20
      },
      detail: {
        width: 50,
        height: 14,
        fontSize: 18,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    }
  ]
};



function flashEcharts() {
	if(totalF==0)totalF=1
	gaugeData[0].value = +(doneA/totalF * 100).toFixed(2);
	gaugeData[1].value = +(doneB/totalF * 100).toFixed(2);
	gaugeData[2].value = +(doneC/totalF * 100).toFixed(2);
	gaugeData[3].value = +(doneD/totalF * 100).toFixed(2);
	gaugeData[4].value = +(doneE/totalF * 100).toFixed(2);
	gaugeData[5].value = +(doneSave1/totalF * 100).toFixed(2);
	gaugeData[6].value = +(doneSave2/totalF * 100).toFixed(2);

	var timestr="00:00:00"
	if(startTime!=null){
		var nowTime=Date.parse(new Date())
		var seconds=(nowTime-startTime)/1000;
		if(endTime!=null){
			seconds=(endTime-startTime)/1000;
		}

		var hours = Math.floor(seconds / 3600); // 计算小时数
		var minutes = Math.floor((seconds % 3600) / 60); // 计算分钟数
		var seconds = seconds % 60; // 计算秒数
		function formatTime(n) { // 格式化时间，如果小于10，补0
		  return n < 10 ? "0" + n : n;
		}
		timestr = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
	
		// console.log(timestr);
		// console.log(seconds);
	}


	myChart.setOption({
		title: {
			show: true, // 是否显示标题，默认true
			text: "自动召测用时："+ timestr, //主标题文本，支持使用 \n 换行。
			textStyle: { //设置主标题文字样式，颜色，字体，阴影等
			  color: "#008DFF",
			},
			left: 300, //title 组件离容器左侧的距离
			top:400,
			backgroundColor: '#ccc' //标题背景色，默认透明。
		  },
	  series: [
		{
		  data: gaugeData,
		  pointer: {
			show: false
		  }
		}
	  ]
	});
  }

  setInterval(flashEcharts, 1000);

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

// Create a floating page
var TOPpage = document.createElement( "div" );
TOPpage.style.position = "fixed";
TOPpage.style.top = "50px";
TOPpage.style.left = "50px";
TOPpage.style.width = DIVwidth + "px";
TOPpage.style.height = DIVheight + "px";
TOPpage.style.border = "5px solid #00FFFF"; 
TOPpage.style.backgroundColor = "#F0F8FF"; 
TOPpage.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5)"; 
TOPpage.style.display = "none";
TOPpage.style.zIndex = "99998";
document.body.appendChild( TOPpage );

// Add some content to the page
var title = document.createElement( "h1" );
title.textContent = "计量日冻结数据批量召测神器（演示版）";
title.style.backgroundColor = "#9086e4cc"
title.style.color = "#ffffff";

title.style.textAlign = "center";
title.style.fontSize = "large";
TOPpage.appendChild( title );

// Create a table element
var upDIV = document.createElement( "div" );
// upDIV.style.width="500px"
// upDIV.style.height="500px"
TOPpage.appendChild( upDIV );

var div1 = document.createElement( "div" );
div1.style.width = "800px"; 
div1.style.float = "left";
// tips.style.height = "500px";
upDIV.appendChild( div1 );

// Add some content to the page
var tips = document.createElement( "p" );
tips.textContent = "在此输入用户编号，多个编号用换行符分隔：";
tips.style.color = "#000000"; 
tips.style.textAlign = "left";
div1.appendChild( tips );

// Create a textarea on the right side of the content
var YHBHS_textarea = document.createElement( "textarea" );
// textarea.value = "在此输入用户编号（最多10个，用换行符分隔）";
YHBHS_textarea.value = "0306000184067572\n0306130040017453\n0306130153819069";
YHBHS_textarea.style.width = "300px"; // Change this to adjust the width of the textarea
YHBHS_textarea.style.height = "100px"; // Change this to adjust the height of the textarea
YHBHS_textarea.style.border = "1px solid black"; // Change this to adjust the border of the textarea
YHBHS_textarea.style.fontSize = "20px";
div1.appendChild( YHBHS_textarea );


function makeButtonBeautiful(button) {
	// 设置button的样式
	button.style.backgroundColor = "#8b6882"; // 背景颜色
	button.style.color = "white"; // 文字颜色为白色
	button.style.border = "10px";
	button.style.padding = "7px 14px"; // 内边距为10px 20px
	button.style.fontSize = "15px"; // 字体大小为20px
	button.style.cursor = "pointer"; // 鼠标悬停时变为手指形状
	// button.style.top = "20px"; // Change this to adjust the top offset of the text button
	// button.style.right = "20px"; // Change this to adjust the right offset of the text button
	button.style.borderRadius = "10px"; // 边角半径为10px
	button.style.margin = "10px"; // 外边距为10px
}

function makeButtonBeautiful2 ( button ) {
	// 设置button的样式
	//button.style.backgroundColor = "blue"; // 背景颜色
	button.style.color = "black"; // 文字颜色为白色
	button.style.cursor = "pointer"; // 鼠标悬停时变为手指形状
}

function initDoneFail(){
	doneA = 0;
	doneB = 0;
	doneC = 0;
	doneD = 0;
	doneE = 0;
	doneSave1 = 0;
	doneSave2 = 0;
	
	failA=0;
	failB=0;
	failC = 0;
	failD = 0;
	failE = 0;
	failSave1 = 0;
	failSave2 = 0;
	
	startTime=null;
	endTime=null;
}


var initTableFlag = 0; //初始化表格标记

var initTableBtn = document.createElement( "button" );
initTableBtn.innerText = "初始化表格";

initTableBtn.onclick = function () {
	initDoneFail()
	// flashSum()
			controllerww.abort();
			controllerww = new AbortController()
			var text = YHBHS_textarea.value;
			yhbhs = text.split( "\n" );
						// 使用replace方法来删除空行
	var non_empty_array = yhbhs.map(function(line) {
		return line.replace(/^\s*$/, '');
	  });
	  // 使用filter方法来过滤掉空字符串
	  yhbhs = non_empty_array.filter(function(line) {
		return line !== '';
	  });
			totalF=yhbhs.length
			flashSum()
			rowLength = yhbhs.length + 1;
			document.querySelector( "#table_A" ).remove();
			tableDiv.appendChild( creatTable( yhbhs.length + 1 ) );
			addAllTextToCell();
			for ( let i = 1; i < yhbhs.length + 1; i++ ) {
	
				for ( let j = 0; j < 29; j++ ) {
					setTableValue( i, j, "-----" );
					// setTableValue2( i, j, "" );
					if ( j == 2 || j == 14 || j == 22 ) {
						setTableValue( i, j, getTableSelectValue( i, j ) );
					}
					if ( j == 20 || j == 28 ) {
						setTableButtonHide( i, j );
					}
				}
			}
	
			for ( let i = 0; i < yhbhs.length; i++ ) {
				setTableValue( i + 1, 0, yhbhs[ i ] );
			}
			//fetch_0_get_danwei_name();
	initTableFlag = 1;

};
div1.appendChild( initTableBtn );


function fetch_0_get_danwei_name(){//预留作为其他地市局单位使用，@@@FLAGGGGG@@@
	fetch("http://10.150.12.240/gdcams/cityStat.html?method=cityStatnewList", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "http://10.150.12.240/gdcams//cityStat.html?method=list&treeFlag=2&layer=11&nodeId=508673650&treeCityNo=06&treeParentId=-1&oneShowPageFlag=1&nodeName=%B7%F0%C9%BD%B9%A9%B5%E7%BE%D6&jgTreePath=-1_1_508673650&lossTreelayer=null",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "columnExcel=&page=1&rows=50&sort=xssx&order=asc",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then( ( response ) => {
	return response.json();
} )
.then( ( responseJson ) => {
	if(responseJson.total>0){
		var danwei_name=document.querySelector("#leftTree > div.left_box1 > div.left_box_title > table > tbody > tr > td:nth-child(2) > ul > li:nth-child(2)").innerText;
		var element=document.querySelector( "#cell" + 0 + "_" + 2 + " > select" )
		var selectedIndex=0;
		for (var i = 0; i < element.options.length; i++) {
			if (element.options[i].textContent == danwei_name) {
				selectedIndex = i;
				break
			}
		}
		for(var i=0; i<rowLength;i++){
			var element=document.querySelector( "#cell" + i + "_" + 2 + " > select" )
			element.selectedIndex
			setTableSelectValue(i,2,value)
		}

		var value=responseJson.rows[0].zzbmdm
		var text=responseJson.rows[0].zzmc
		for(var i=0; i<rowLength;i++){
			addTableSelectOption(i,2,value,text)
			setTableSelectValue(i,2,value)

		}
		addTextToCell(0,2,"已为您自动添加并选择了["+text+"]")

		if (element) {
			for (var i = 0; i < element.options.length; i++) {
				if (element.options[i].value == value) {
					element.selectedIndex = i;
					break
				}
			}
		} else {
			alert("没有找到id为" + id + "的元素")
		}
	}

});
}

// Create a button on the right side of the textarea
var gotoShowSaveButton = document.createElement( "button" );
gotoShowSaveButton.innerText = "自动召测";
gotoShowSaveButton.onclick = async function () {
	if (initTableFlag == 0) {
		alert("请先初始化表格")
		return
	}
	
	initDoneFail()
	
	startTime=Date.parse(new Date())
	
	controllerww.abort();
	controllerww = new AbortController()

	initTableBtn.textContent="已锁定";
	initTableBtn.style.color="red";
	initTableBtn.disabled=true;
	initTableBtn.style.cursor=""

	this.textContent="已锁定";
	this.style.color="red";
	this.disabled=true;
	this.style.cursor=""

	for ( let i = 0; i < yhbhs.length; i++ ) {
		// setTableValue( i + 1, 0, yhbhs[ i ] );
		await sleep(Math.floor(Math.random() * 50))
		fetch_1_zdljdz( getTableValue(i+1,0), i + 1, 4, i + 1, 3, true );
	}

};
div1.appendChild( gotoShowSaveButton );

// Create a button on the right side of the textarea
var abortTestButton = document.createElement( "button" );
abortTestButton.innerText = "终止召测并解锁按钮";
abortTestButton.onclick = function () {
	controllerww.abort();

	initTableBtn.textContent="初始化表格";
	initTableBtn.style.color="white";
	initTableBtn.disabled=false;
	initTableBtn.style.cursor="pointer"

	gotoShowSaveButton.textContent="自动召测";
	gotoShowSaveButton.style.color="white";
	gotoShowSaveButton.disabled=false;
	gotoShowSaveButton.style.cursor="pointer";

	controllerww = new AbortController()
};
div1.appendChild( abortTestButton );

// // Add some content to the page
// var tips2div = document.createElement( "div" );
// tips2div.style.width = "800px"; 
// // tips2div.style.height = "500px";
// TOPpage.appendChild( tips2div );


// Add some content to the page
var tips2 = document.createElement( "p" );
tips2.textContent = "个人（单位）月度保存激活码：（为防止软件滥用，【保存数据】功能需提供【个人（单位）月度保存激活码】进行激活后才可使用。您可以编辑“单位+姓名+申请【个人（或者单位）月度保存激活码】”发送至开发者邮箱huangfuying@fs.gd.csg.cn或者南网智搜平台搜索“我的悬浮球工具”免费获取，当月有效，仅限个人（或者单位内）使用";
tips2.style.color = "#000000"; // Change this to adjust the color of the title
tips2.style.textAlign = "left";
div1.appendChild( tips2 );

// Create a textarea on the right side of the content
var KEY_input = document.createElement( "input" );
KEY_input.value = "";
KEY_input.style.height = "40px";
KEY_input.style.width = "200px";
if(localStorage.getItem("activeKey1")!=null){
	KEY_input.value = localStorage.getItem("activeKey1")
}
div1.appendChild( KEY_input );

var tips2a = document.createElement( "span" );
tips2a.textContent = "未激活";
tips2a.style.color = "red"; // Change this to adjust the color of the title
//tips2a.style.textAlign = "left";
div1.appendChild( tips2a );


var checkKEYButton = document.createElement( "button" );
checkKEYButton.innerText = "激活";
checkKEYButton.onclick = function () {
	localStorage.setItem("activeKey1",KEY_input.value)//保存key到本地localStorage
	safeSaveFetch();
};
div1.appendChild( checkKEYButton );

async function clickSaveData(){
	for ( let i = 1; i < rowLength; i++ ) {
		for ( let j = 0; j < 29; j++ ) {
			if ( j == 20 || j == 28 ) {
				await sleep(Math.floor(Math.random() * 50))
				if ( document.querySelector( "#cell" + i + "_" + j + " > button" )
					.style.display == "block" ) {
					document.querySelector( "#cell" + i + "_" + j + " > button" ).click();
				}
			}
		}
	}
}

// Create a button on the right side of the textarea
var savaAllButton = document.createElement( "button" );
savaAllButton.innerText = "点击所有显示的保存数据按钮";
savaAllButton.onclick = function () {
	if (initTableFlag == 0) {
		alert("请先初始化表格！")
		return
	}
	if (activeLOCK == 0) {
		alert("请先激活！")
		return
	}
	clickSaveData()


};
div1.appendChild( savaAllButton );


// Create a button on the right side of the textarea
var saveToExcelButton = document.createElement( "button" );
saveToExcelButton.innerText = "保存为excel";
// 输出base64编码
const base64 = s => window.btoa( unescape( encodeURIComponent( s ) ) );
saveToExcelButton.onclick = function () {
	let str = '';

	str += '<tr><td>';
	str += "前边加@防止自动使用科学计数法。如需去除，全选表格，转为文本格式后，使用“替换”功能全部替换@为空字符串即可。"
	str += '</td></tr>';

	str += '<tr>';
	for ( let j = 0; j < 29; j++ ) {
		str += `<td>${ getTableValue(0,j) + '\t'}</td>`;
	}
	str += '</tr>';
	str += '<tr>';
	for ( let j = 0; j < 29; j++ ) {
		str += `<td>${ getTableValue2(0,j) + '\t'}</td>`;
	}
	str += '</tr>';

	for ( let i = 1; i < rowLength; i++ ) {
		str += '<tr>';
		for ( let j = 0; j < 29; j++ ) {//加@防止科学计数法
			str += `<td>${ "@"+getTableValue(i,j) + '\t'}</td>`;
		}
		str += '</tr>';
	}
	// Worksheet名
	const worksheet = 'Sheet1'
	const uri = 'data:application/vnd.ms-excel;base64,';

	// 下载的表格模板数据
	const template = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:x="urn:schemas-microsoft-com:office:excel"
        xmlns="http://www.w3.org/TR/REC-html40">
        <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head><body><table>${str}</table></body></html>`;
	// 下载模板
	window.location.href = uri + base64( template );
}

div1.appendChild( saveToExcelButton );


var doneA=0;
var doneB=0;
var doneC = 0;
var doneD = 0;
var doneE = 0;
var doneSave1 = 0;
var doneSave2 = 0;

var failA=0;
var failB=0;
var failC = 0;
var failD = 0;
var failE = 0;
var failSave1 = 0;
var failSave2 = 0;

var totalF = 0;

var startTime=null;
var endTime=null;
// var startFlag=0;
// var finishFlag=0;

		// Add some content to the page
		var tipsF3 = document.createElement("div");
		tipsF3.textContent = "【总召测 " + totalF + " 个，已查询 " + doneA + " 个，召测参数完成 " + doneB + " 个，召测时间完成 " + doneC +" 个，"+"召读数据1完成 "+ doneD +"个，召读数据2完成 "+ doneE +" 个，保存数据1成功"+ doneSave1 +" 个，保存数据2成功"+doneSave2+"个。】"
		tipsF3.style.color = "red"; // Change this to adjust the color of the titleF
		tipsF3.style.textAlign = "left"; // Change this to adjust the alignment of the titleF
		div1.appendChild(tipsF3);



		function flashSum() {
			tipsF3.textContent = "【总召测 " + totalF + " 个，已查询 " + doneA + " 个，召测参数完成 " + doneB + " 个，召测时间完成 " + doneC +" 个，"+"召读数据1完成 "+ doneD +"个，召读数据2完成 "+ doneE +" 个，保存数据1成功"+ doneSave1 +" 个，保存数据2成功"+doneSave2+"个。】"
			

			if(endTime!=null)return
			if((doneD+failD)==totalF&&(doneE+failE)==totalF){
				endTime=Date.parse(new Date())
			}
		}





// Create a table element
var container_ring = document.createElement( "div" );
container_ring.style.width="800px"
container_ring.style.height="450px"
container_ring.style.float="left"
container_ring.id="container_ring"


// upDIV.appendChild(div1)
upDIV.appendChild(container_ring)

showEchart_ring(container_ring)



// Create a table element
var tableDiv = document.createElement( "div" );
tableDiv.style.overflow = "auto";

// 初始化table
function creatTable ( rowLength ) {
	// Create a table element
	var simpleTable = document.createElement( "table" );
	simpleTable.style.border = "1px solid black";
	simpleTable.style.borderCollapse = "collapse";
	simpleTable.style.margin = "auto"; // Change this to adjust the margin of the table
	simpleTable.id = "table_A";
	// Set the rows and cols attributes
	simpleTable.setAttribute( "rows", "10" );
	simpleTable.setAttribute( "cols", "29" );

	for ( let i = 0; i < rowLength; i++ ) {
		var rowtr = document.createElement( "tr" );

		for ( let j = 0; j < 29; j++ ) {
			var cell = document.createElement( "td" );
			cell.style.border = "1px solid black";
			cell.style.padding = "3px";
			var cellText = document.createElement( "p" );
			cellText.textContent = "cell" + i + "_" + j;
			cellText.style.display = "block";
			cell.appendChild( cellText );

			if(i==0){
				var cellText2 = document.createElement( "p" );
				cellText2.textContent = "(" + i + "," + j+")";
				cell.appendChild( cellText2 );
			}
			cell.id = "cell" + i + "_" + j;
			cell.i = i;
			cell.j = j;
			rowtr.appendChild( cell );
			if ( j == 2 ) {
				cellText.textContent = qxdwbm;
				cell.appendChild( createSelect( i, j, [
					"0306",
					"0320",
					"0318",
					"0301",
					"0313",
					"0308",
					"0360",
					"0312",
					"0307",
					"0305",
					"0309",
					"0352",
					"0315",
					"0314",
					"0317",
					"0353",
					"0316"
				], [
					"佛山局",
					"中山局",
					"东莞局",
					"清远局",
					"广州局",
					"惠州局",
					"湛江局",
					"中调",
					"肇庆局",
					"珠海局",
					"韶关局",
					"江门局",
					"汕头局",
					"茂名局",
					"揭阳局",
					"汕尾局",
					"梅州局",
					"阳江局",
					"云浮局",
					"河源局"
				]) )
			}
			if ( j == 0 ) {
				var cellButton = document.createElement( "button" );
				cellButton.innerText = "查询用户";
				makeButtonBeautiful2( cellButton );
				cellButton.i = i; //使用button的属性存储i,j，再使用this指针调用i,j
				cellButton.j = j;
				//cellButton.style.display = "block";

				cellButton.onclick = function () {
					
					var i = parseInt( this.i );
					var j = parseInt( this.j );
					if ( i == 0 ) { //第0行是所有row都进行fetch
						for ( let m = 1; m < rowLength; m++ ) {
							fetch_1_zdljdz( getTableValue( m, 0 ), m, 4, m, 3, false );
						}
					} else {
						fetch_1_zdljdz( getTableValue( i , 0 ), i, 4, i, 3, false );
					}
				};

				cell.appendChild( cellButton );
			}


			if ( j == 5 ) {
				var cellButton = document.createElement( "button" );
				cellButton.innerText = "召测参数";
				makeButtonBeautiful2( cellButton );
				cellButton.i = i; //使用button的属性存储i,j，再使用this指针调用i,j
				cellButton.j = j;
				//cellButton.style.display = "block";
				cellButton.onclick =  function () {
					var i = parseInt( this.i );
					var j = parseInt( this.j );
					if ( i == 0 ) {
						// doneB=0
						// flashSum()
						for ( let m = 1; m < rowLength; m++ ) {
							var canshu1 = getTableValue( m, 1 );
							var canshu2 = getTableValue( m, 2 );
							var canshu3 = getTableValue( m, 3 );
							var canshu4 = getTableValue( m, 4 );
							var canshu5 = getTableValue( m, 5 );
							fetch_3_call_for_testing( canshu1, canshu2, canshu3, canshu4, canshu5, m, 6, false );
						}
					} else {
						// doneB-=1
						// flashSum()
						var row = i;
						var canshu1 = getTableValue( row, 1 );
						var canshu2 = getTableValue( row, 2 );
						var canshu3 = getTableValue( row, 3 );
						var canshu4 = getTableValue( row, 4 );
						var canshu5 = getTableValue( row, 5 );
						fetch_3_call_for_testing( canshu1, canshu2, canshu3, canshu4, canshu5, row, 6, false );
					}
				};

				cell.appendChild( cellButton );
			}
			if ( j == 11 ) {
				var cellButton = document.createElement( "button" );
				cellButton.innerText = "召测时间";
				makeButtonBeautiful2( cellButton );
				cellButton.i = i; //使用button的属性存储i,j，再使用this指针调用i,j
				cellButton.j = j;
				//cellButton.style.display = "block";
				cellButton.onclick = function () {
					var i = parseInt( this.i );
					var j = parseInt( this.j );
					if ( i == 0 ) {
						// doneC=0
						// flashSum()
						for ( let m = 1; m < rowLength; m++ ) {
							var row = m;
							var list = [];
							for ( let n = 1; n <= 11; n++ ) {
								list.push( getTableValue( row, n ) );
							}
							// console.log(list);
							var [ dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw ] = list;
							fetch_4_call_for_time( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, row, 12, false );
						}
					} else {
						// doneC-=1
						// flashSum()
						var row = i;
						var list = [];
						for ( let n = 1; n <= 11; n++ ) {
							list.push( getTableValue( row, n ) );
						}
						// console.log(list);
						var [ dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw ] = list;
						fetch_4_call_for_time( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, row, 12, false );
					}
				};

				cell.appendChild( cellButton );
			}


			if ( j == 12 ) {
				cell.style.color = "red";
			}
			if ( j == 13 || j == 21 ) {
				var select = createSelect( i, j, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ] );
				cell.appendChild( select );
			}
			if ( j == 14 || j == 22 ) {
				if ( j == 14 ) cellText.textContent = "1";
				if ( j == 22 ) cellText.textContent = "2";
				var select = createSelect( i, j, [ 1, 2, 3, 4 ],[ "①正向有功", "②反向有功", "③正向无功", "④反向无功" ] );
				cell.appendChild( select );
				var cellButton = document.createElement( "button" );
				cellButton.innerText = "召读数据"+cellText.textContent;
				makeButtonBeautiful2( cellButton );
				cellButton.i = i; //使用button的属性存储i,j，再使用this指针调用i,j
				cellButton.j = j;
				//cellButton.style.display = "block";
				cellButton.onclick = function () {
					var i = parseInt( this.i );
					var j = parseInt( this.j );
					if ( i == 0 ) {
						for ( let m = 0; m < yhbhs.length; m++ ) {
							var row = m + 1;
							var list = [];
							for ( let n = 1; n <= 11; n++ ) {
								list.push( getTableValue( row, n ) );
							}
							// console.log(list);
							var [ dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw ] = list;
							var sjxitem = document.querySelector( "#cell" + row + "_" + (j-1) + " > select" )
								.sjxitem;
							var sjxitem2 = document.querySelector( "#cell" + row + "_" + j + " > p:nth-child(1)" )
								.innerText;
							// console.log(dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, sjxitem, sjxitem2);
							setTableButtonHide( row, j + 6 );
							fetch_5_call_for_data( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, sjxitem, sjxitem2, row, j + 1, false );
						}
					} else {
						var row = i;
						var list = [];
						for ( let n = 1; n <= 11; n++ ) {
							list.push( getTableValue( row, n ) );
						}
						// console.log(list);
						var [ dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw ] = list;
						var sjxitem = document.querySelector( "#cell" + row + "_" + ( j - 1 ) + " > select" )
							.sjxitem;
						var sjxitem2 = document.querySelector( "#cell" + row + "_" + j + " > p:nth-child(1)" )
							.innerText;
						// console.log(dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, sjxitem, sjxitem2);
						setTableButtonHide( row, j + 6 );
						fetch_5_call_for_data( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, sjxitem, sjxitem2, row, j + 1, false );
					}

				};
				cell.appendChild( cellButton );
			}


			if ( j == 20 || j == 28 ) { //saveButton
				var cellButton = document.createElement( "button" );
				if ( j == 20 ){
					cellButton.innerText = "保存数据1";
				}
				if ( j == 28 ){
					cellButton.innerText = "保存数据2";
				}
				makeButtonBeautiful2( cellButton );
				cellButton.i = i; //使用button的属性存储i,j，再使用this指针调用i,j
				cellButton.j = j;
				cellButton.style.display = "none";
				cellButton.onclick = function () {
					var i = parseInt( this.i );
					var j = parseInt( this.j );
					var list = [];
					for ( let n = 1; n <= 4; n++ ) {
						list.push( getTableValue( i, n ) );
					}
					var list2 = [];
					for ( let n = j - 5; n < j; n++ ) {
						list2.push( ( getTableValue( i, n ) ) );
					}
					var [ dycldbs, qxdwbm, zdljdz, zdbs ] = list;
					var [ dg, dp, df, dj, dz ] = list2;
					var sjsj = getTableValue( i, j - 7 );
					var sjxitem = document.querySelector( "#cell" + i + "_" + ( j - 7 ) + " > select" )
						.sjxitem;
					var sjxitem2 = document.querySelector( "#cell" + i + "_" + ( j - 6 ) + " > p:nth-child(1)" )
						.innerText;
					fetch_6_savedata( dycldbs, qxdwbm, zdljdz, zdbs, dg, dp, df, dj, dz, sjsj, sjxitem, sjxitem2, i, j );
				};
				cell.appendChild( cellButton );
			}
		}
		simpleTable.appendChild( rowtr );

	}
	return simpleTable;
}




tableDiv.style.width = DIVwidth - 20 + "px"; //hange this to adjust the width of the page
tableDiv.style.height = DIVheight - 500 + "px"; //Change this to adjust the height of the page
tableDiv.id = "tableDiv";
tableDiv.appendChild( creatTable( rowLength ) );

// Append the table to the page
TOPpage.appendChild( tableDiv );
addAllTextToCell();




function makeALLBtnBeautiful() {
	makeButtonBeautiful( initTableBtn );
    makeButtonBeautiful( gotoShowSaveButton );
    makeButtonBeautiful( checkKEYButton );
	makeButtonBeautiful( savaAllButton );
	makeButtonBeautiful( saveToExcelButton );
	makeButtonBeautiful( abortTestButton);


	initTableBtn.style.backgroundColor = "rgb(0, 120, 212)";
    gotoShowSaveButton.style.backgroundColor = "rgb(76, 175, 80)"
    
    abortTestButton.style.backgroundColor = "#FF5722"
    checkKEYButton.style.backgroundColor = "rgb(0, 120, 212)";
	savaAllButton.style.backgroundColor = "rgb(76, 175, 80)"
	saveToExcelButton.style.backgroundColor ="rgb(139, 104, 130)";
}
makeALLBtnBeautiful();


//1，查参数zdbs和zdljdz
function fetch_1_zdljdz ( yhbh, row1, col1, row2, col2, continueFlag ) { //continueFlag接力赛标志
	// if(syn_lock==-1){
	//根据用户编码yhbh可fetch查zdbs和zdljdz=====rows[0].zdbs
	var row = row1;
	setTableButtonHide( row, 20 );
	setTableButtonHide( row, 28 );
	setTableValue( row, col1, "***" );
	setTableValue( row, col2, "***" );
	setTableButtonColor( row, 0, "orange" ); //让按钮变橙色


	var responseJson=pre_data_plzc_A[(row-1) % 3]
	if(responseJson.total==1){
		var zdbs = responseJson.rows[ 0 ].zdbs;
		var zdljdz = responseJson.rows[ 0 ].zdljdz;
		setTableValue( row, col1, zdbs );
		setTableValue( row, col2, zdljdz );
		// console.log("zdbs and zdljdz was writed");

		fetch_2_cbsxh( zdbs, yhbh, row, 1, row, 5, continueFlag );
	}else{
		setTableButtonColor( row, 0, "red" );
		setTableValue( row, col1, "错误，数据不唯一" );
		setTableValue( row, col2, "错误，数据不唯一" );
	}

}

//2，查参数dycldbs_and_cbsxh
function fetch_2_cbsxh ( zdbs, yhbh, row1, col1, row2, col2, continueFlag ) {
	// if(syn_lock==0){
	var row = row1;
	setTableValue( row, col1, "***" );
	setTableValue( row, col2, "***" );
	setTableButtonHide( row, 20 );
	setTableButtonHide( row, 28 );

	var responseJson=pre_data_plzc_B[(row-1) % 3]
	if(responseJson.total==1){
		var dycldbs = responseJson.rows[ 0 ].dycldbs;
		var cbsxh = responseJson.rows[ 0 ].cldh;
		setTableValue( row, col1, dycldbs );
		setTableValue( row, col2, cbsxh );
		doneA++
		flashSum()

		if ( continueFlag ) {
			var canshu1 = document.querySelector( "#cell" + row + "_" + 1 + " > p" )
				.innerText;
			var canshu2 = document.querySelector( "#cell" + row + "_" + 2 + " > p" )
				.innerText;
			var canshu3 = document.querySelector( "#cell" + row + "_" + 3 + " > p" )
				.innerText;
			var canshu4 = document.querySelector( "#cell" + row + "_" + 4 + " > p" )
				.innerText;
			var canshu5 = document.querySelector( "#cell" + row + "_" + 5 + " > p" )
				.innerText;
				
			fetch_3_call_for_testing( canshu1, canshu2, canshu3, canshu4, canshu5, row, 6, continueFlag );
		}
		setTableButtonColor( row, 0, "green" );
	}else{
		setTableButtonColor( row, 0, "red" );
		setTableValue( row, col1, "错误，数据不唯一" );
		setTableValue( row, col2, "错误，数据不唯一" );
	}

}

//3，召测参数
async function fetch_3_call_for_testing ( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, row, startCol, continueFlag ) {
	// if(syn_lock==1){
		setTableButtonHide( row, 20 );
		setTableButtonHide( row, 28 );
	setTableValuePlus( row, startCol, [ "***", "***", "***", "***", "***", "***" ] );
	setTableButtonColor( row, 5, "orange" );

	await sleep(Math.floor(Math.random() * 1001) + 2000)
	
	var responseJson=pre_data_plzc_C[0]
	if ( responseJson.message == "处理成功" ) {
		// console.log("call test success");
		var [ dbh, sbwdk, btl, txfsdm, sjw, tzw ] = [ responseJson.dbh, responseJson.sbwdk, responseJson.btl, responseJson.txfsdm, responseJson.sjw, responseJson.tzw ];
		setTableValuePlus( row, startCol, [ dbh, sbwdk, btl, txfsdm, sjw, tzw ] );
		doneB++
		flashSum()
		if ( continueFlag ) {
			var list = [];
			for ( let j = 1; j <= 11; j++ ) {
				list.push( getTableValue( row, j ) );
			}
			var [ dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw ] = list;
			fetch_4_call_for_time( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, row, 12, continueFlag );
		}
		setTableButtonColor( row, 5, "green" );
	} else {
		setTableButtonColor( row, 5, "red" );
		setTableValuePlus( row, startCol, [ responseJson.message, responseJson.message, responseJson.message, responseJson.message, responseJson.message, responseJson.message ] );
	}
}

//4，召测时间
async function fetch_4_call_for_time ( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, row, col, continueFlag ) {
	setTableButtonHide( row, 20 );
	setTableButtonHide( row, 28 );
	setTableValue( row, col, "***" );
	setTableButtonColor( row, 11, "orange" );

	await sleep(Math.floor(Math.random() * 1001) + 3000)
	//预置数据
	var responseJson=pre_data_plzc_D[0]
	if ( responseJson.message == "处理成功" ) {
		if ( responseJson.status == "0" ) {
			// console.log("call time success");

			var dbsj = responseJson.dbsj; //lastFreeze
			setTableValue( row, col, dbsj );

			setTableButtonShow( row, 14 );
			setTableButtonShow( row, 22 );


			doneC++
			flashSum()

			setSjsj( row, 13, document.querySelector( "#cell" + row + "_" + 13 + " > select" ).value );
			setSjsj( row, 21, document.querySelector( "#cell" + row + "_" + 21 + " > select" ).value );
		}
		if ( continueFlag ) {
			var list = [];
			for ( let j = 1; j <= 11; j++ ) {
				list.push( getTableValue( row, j ) );
			}
			var [ dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw ] = list;
			var sjxitem = document.querySelector( "#cell" + row + "_" + 13 + " > select" ).sjxitem;
			var sjxitem2 = document.querySelector( "#cell" + row + "_" + 14 + " > p:nth-child(1)" ).innerText;
			// console.log(dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, sjxitem, sjxitem2);


			getTableButton(row,14).click()
			getTableButton(row,22).click()
		}
		setTableButtonColor( row, 11, "green" );
	} else {
		setTableButtonColor( row, 11, "red" );
		setTableValue( row, col, responseJson.message );
	}

}


//召读数据
async function fetch_5_call_for_data ( dycldbs, qxdwbm, zdljdz, zdbs, cbsxh, dbh, sbwdk, btl, txfsdm, sjw, tzw, sjxitem, sjxitem2, row, startCol, continueFlag ) {
	if(startCol==15){
		var responseJson=pre_data_plzc_E[0]
		setTableButtonHide( row, 20 );
	}
	if(startCol==23){
		var responseJson=pre_data_plzc_F[0]
		setTableButtonHide( row, 28 );
	}
	setTableValuePlus( row, startCol, [ "***", "***", "***", "***", "***" ] );
	setTableButtonColor( row, startCol-1, "orange" );

	await sleep(Math.floor(Math.random() * 1001) +4000)
	if ( responseJson.message == "处理成功" ) {
		// console.log(responseJson);
		var [ dg, dp, df, dj, dz ] = [ responseJson.dg, responseJson.dp, responseJson.df, responseJson.dj, responseJson.dz ];
		setTableValuePlus( row, startCol, [ dg, dp, df, dj, dz ] );

		if(startCol==15){
			setTableButtonShow( row, 20 );
			setTableButtonColor( row, 20, "orange" ); 
			doneD++
			flashSum()
		}
		if(startCol==23){
			setTableButtonShow( row, 28 );
			setTableButtonColor( row, 28, "orange" ); 
			doneE++
			flashSum()
		}

		setTableButtonColor( row, startCol-1, "green" );
	} else {
		setTableButtonColor( row, startCol-1, "red" );
		setTableValuePlus( row, startCol, [ responseJson.message, responseJson.message, responseJson.message, responseJson.message, responseJson.message ] );
	}

}

function fetch_6_savedata ( dycldbs, qxdwbm, zdljdz, zdbs, dg, dp, df, dj, dz, sjsj, sjxitem, sjxitem2, row, col ) {
	if (activeLOCK == 0) {
		alert("请先激活！")
		return
	}

	setTableButtonColor( row, col, "green" ); 
	setTableValue(row,col,"success")
	
	if(col==20){
		doneSave1++
	}
	if(col==28){
		doneSave2++
	}
	flashSum()
}


var activeLOCK=0;

function safeSaveFetch(){
	activeLOCK=1
	tips2a.textContent="已激活"
	tips2a.style.color="green"
}
}
that.run = run;
return that;
})();


magic_JLY_PLZC.run();
