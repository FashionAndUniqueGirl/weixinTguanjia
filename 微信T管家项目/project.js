// window.onload = function(){
// 	var Json1 = {"list":[
// 					{
// 						"img":"images/gnico_01.png",
// 						"name":"微网站",
// 						"introduce1":"5分钟轻松建站",
// 						"introduce2":"打造酷炫微官网",
// 						"img1":"images/gnico_01_1.png"
// 					},
// 					{
// 						"img":"images/gnico_02.png",
// 						"name":"微商城",
// 						"introduce1":"小微信也有大商城",
// 						"introduce2":"电商轻松就能走入微信",
// 						"img1":"images/gnico_02_1.png"
// 					},
// 					{
// 						"img":"images/gnico_03.png",
// 						"name":"微信会员卡",
// 						"introduce1":"方便携带  永不挂失",
// 						"introduce2":"消费积分  一卡配备",
// 						"img1":"images/gnico_03_1.png"
// 					},
// 					{
// 						"img":"images/gnico_04.png",
// 						"name":"微团购",
// 						"introduce1":"微团购适合商家搞团购活动及",
// 						"introduce2":"秒杀活动，能快速提升销售业绩",
// 						"img1":"images/gnico_04_1.png"
// 					},
// ]}
// 	Json2 = {"list":[
// 					{
// 						"img":"images/gnico_05.png",
// 						"name":"微信刮刮卡",
// 						"introduce1":"震撼有趣的互动体验",
// 						"introduce2":"带动周边朋友一起分享"
// 					},
// 					{
// 						"img":"images/gnico_06.png",
// 						"name":"微信优惠券",
// 						"introduce1":"先到先得抢票抽奖",
// 						"introduce2":"爆炸式的增长效果"
// 					},
// 					{
// 						"img":"images/gnico_07.png",
// 						"name":"微相册",
// 						"introduce1":"各行各业",
// 						"introduce2":"照片展现轻松搞定"
// 					},
// 					{
// 						"img":"images/gnico_08.png",
// 						"name":"自定义菜单",
// 						"introduce1":"无需定制  完全自定义",
// 						"introduce2":"无需触发  完全可视化"
// 					},
// ]}
// 	Json3 = {"list":[
// 					{
// 						"img":"images/gnico_09.png",
// 						"name":"微信LBS位置回复",
// 						"introduce1":"粉丝发送自己地理位置",
// 						"introduce2":"查找到周边的商家的位置"
// 					},
// 					{
// 						"img":"images/gnico_10.png",
// 						"name":"微信大转盘",
// 						"introduce1":"吸引用户参与",
// 						"introduce2":"增强用户沉淀"
// 					},
// 					{
// 						"img":"images/gnico_11.png",
// 						"name":"微订单",
// 						"introduce1":"在线预订、在线报名、在线",
// 						"introduce2":"预约、酒店订房、包厢预订等"
// 					},
// 					{
// 						"img":"images/gnico_12.png",
// 						"name":"微统计",
// 						"introduce1":"折线图清晰查询数据",
// 						"introduce2":"助理企业营销"
// 					},
// ]}
// 	function $(id){return document.getElementById(id);}
// 	var pic_thirteen = $("pic_thirteen");
// 	//console.log(pic_thirteen);
// 	var date_new = Json1.list;
// 	//console.log(date_new);
// 	var sub_ul = document.createElement("ul");
// 	// sub_ul.className = "sub_ul";
// 	for (var i = 0; i < date_new.length; i++) {
// 		date_new[i].index = i;
// 		var lis = document.createElement("li");
// 		console.log(lis);
// 		sub_ul.appendChild(lis);
// 		pic_thirteen.appendChild(sub_ul);
		
// 		lis.className = "lis";
// 		// 创建图片   
// 	    var images = document.createElement("img");
// 	    images.className = "images";
// 	    lis.appendChild(images);
// 		images.src = date_new[i].img ;
// 		var images1 = document.createElement("img");
// 	    images1.className = "images";
// 	    lis.appendChild(images1);
// 		images1.src = date_new[i].img1 ;
// 		images1.style.display = "none";
// 		// console.log(lis.length);
// 		// lis.onmouseover = function(){
// 		// 	images.style.display = "block";
// 		// 	images.style.display = "none";
// 		// }

// 		var name = document.createElement("p");
// 		name.className = "name";
// 		name.innerHTML = date_new[i].name;
// 		lis.appendChild(name);

// 		var introduce1 = document.createElement("p");
// 		introduce1.className = "introduce1";
// 		introduce1.innerHTML = date_new[i].introduce1;
// 		lis.appendChild(introduce1);

// 		var introduce2 = document.createElement("p");
// 		introduce2.className = "introduce1";
// 		introduce2.innerHTML = date_new[i].introduce2;
// 		lis.appendChild(introduce2);
// 	};


// 	var pic_fourteen = $("pic_fourteen");
// 	//console.log(pic_fourteen);
// 	var date_new = Json2.list;
// 	//console.log(date_new);
// 	var sub_ul = document.createElement("ul");
// 	// sub_ul.className = "sub_ul";
// 	for (var i = 0; i < date_new.length; i++) {
// 		date_new[i].index = i;
// 		var lis = document.createElement("li");
// 		sub_ul.appendChild(lis);
// 		pic_thirteen.appendChild(sub_ul);
// 		lis.className = "lis1";
// 		// 创建图片   
// 	    var images = document.createElement("img");
// 	    images.className = "images";
// 	    lis.appendChild(images);
// 		images.src = date_new[i].img ;

// 		var name = document.createElement("p");
// 		name.className = "name";
// 		name.innerHTML = date_new[i].name;
// 		lis.appendChild(name);

// 		var introduce1 = document.createElement("p");
// 		introduce1.className = "introduce1";
// 		introduce1.innerHTML = date_new[i].introduce1;
// 		lis.appendChild(introduce1);

// 		var introduce2 = document.createElement("p");
// 		introduce2.className = "introduce1";
// 		introduce2.innerHTML = date_new[i].introduce2;
// 		lis.appendChild(introduce2);
// 	};

// 	var pic_fifteen = $("pic_fifteen");
// 	//console.log(pic_fifteen);
// 	var date_new = Json3.list;
// 	//console.log(date_new);
// 	var sub_ul = document.createElement("ul");
// 	// sub_ul.className = "sub_ul";
// 	for (var i = 0; i < date_new.length; i++) {
// 		date_new[i].index = i;
// 		var lis = document.createElement("li");
// 		sub_ul.appendChild(lis);
// 		pic_thirteen.appendChild(sub_ul);
// 		lis.className = "lis1";
// 		// 创建图片   
// 	    var images = document.createElement("img");
// 	    images.className = "images";
// 	    lis.appendChild(images);
// 		images.src = date_new[i].img ;

// 		var name = document.createElement("p");
// 		name.className = "name";
// 		name.innerHTML = date_new[i].name;
// 		lis.appendChild(name);

// 		var introduce1 = document.createElement("p");
// 		introduce1.className = "introduce1";
// 		introduce1.innerHTML = date_new[i].introduce1;
// 		lis.appendChild(introduce1);

// 		var introduce2 = document.createElement("p");
// 		introduce2.className = "introduce1";
// 		introduce2.innerHTML = date_new[i].introduce2;
// 		lis.appendChild(introduce2);
// 	};
// };


window.onload = function(){
	var str = ["images/gnico_01_1.png","images/gnico_02_1.png","images/gnico_03_1.png","images/gnico_04_1.png","images/gnico_05_1.png","images/gnico_06_1.png","images/gnico_07_1.png","images/gnico_08_1.png","images/gnico_09_1.png","images/gnico_10_1.png","images/gnico_11_1.png","images/gnico_12_1.png"];
	var strs = ["images/gnico_01.png","images/gnico_02.png","images/gnico_03.png","images/gnico_04.png","images/gnico_05.png","images/gnico_06.png","images/gnico_07.png","images/gnico_08.png","images/gnico_09.png","images/gnico_10.png","images/gnico_11.png","images/gnico_12.png"];
	imgs = document.getElementsByClassName("images");
	lis = document.getElementsByClassName("lis");
	console.log(imgs);
	console.log(lis);
	
	for (var j = 0; j < lis.length; j++) {
		lis[j].index = j;
			lis[j].onmouseover = function(){
				for (var i = 0; i < imgs.length; i++) {
					
						console.log(imgs[i]);
						imgs[this.index].src = str[this.index];
					}
				}
			}
	for (var j = 0; j < lis.length; j++) {
			lis[j].onmouseout = function(){
				for (var i = 0; i < imgs.length; i++) {
					
						console.log(imgs[i]);
						imgs[this.index].src = strs[this.index];
					}

		};
	};

}