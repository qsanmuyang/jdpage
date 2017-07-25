var num=0;
var timer;
function sliderauto(){
	var slider=document.getElementById("slider");
	var arr=new Array("a1.jpg","a2.jpg","a3.jpg","a4.jpg","a5.jpg","a6.jpg","a7.jpg","a8.jpg");
	var circles=document.getElementById("circles");
	var cir=circles.children[0].getElementsByTagName("li");
	if(num==7){
		num=0;
	}else{
		num++;
	}
	slider.src="images/"+arr[num];
	for(var i=0;i<cir.length;i++)
		cir[i].className="";
	cir[num].className="changecolor";

}
timer=setInterval("sliderauto()",3000);
function selec(num1){
	var slider=document.getElementById("slider");
	var arr=new Array("a1.jpg","a2.jpg","a3.jpg","a4.jpg","a5.jpg","a6.jpg","a7.jpg","a8.jpg");
	var circles=document.getElementById("circles");
	var cir=circles.children[0].getElementsByTagName("li");
	slider.src="images/"+arr[num1];
	for(var i=0;i<cir.length;i++)
		cir[i].className="";
	cir[num1].className="changecolor";

}
var hour=2;var minute=59;var second=60;
var timer1;
function timeout(){
	var cdhour=document.getElementById("cd-hour");
	var cdminute=document.getElementById("cd-minute");
	var cdsecond=document.getElementById("cd-second");
	second--;
	if(hour<10){
	cdhour.innerHTML="0"+hour;
}else{
	cdhour.innerHTML=hour;
}
if(minute<10){
	cdminute.innerHTML="0"+minute;
}else{
	cdminute.innerHTML=minute;
}
if(second<10){
	cdsecond.innerHTML="0"+second;
}else{
	cdsecond.innerHTML=second;
}
	if(second==0){
		minute--;
		second=60;

	}
	if(minute==0){
		hour--;
		minute=60;
	}
	if(hour==0&&minute==0&&second==0){
		clearInterval(timer1);
	}
}
timer1=setInterval("timeout()",1000);
function disp(){
	var left=document.getElementById("control-prev");
	var right=document.getElementById("control-next");
	left.style.display="block";
	right.style.display="block";
}
function out1(){
	var left=document.getElementById("control-prev");
	var right=document.getElementById("control-next");
	left.style.display="";
	right.style.display="";
}
var num1=0;
var timer2;
function fbtauto(){
	num1++;
	var col1=document.getElementById("sup-page-col1");
	var col2=document.getElementById("sup-page-col2");
	var col3=document.getElementById("sup-page-col3");
	var circle=document.getElementById("sup-ind1");
	var circles=circle.getElementsByTagName("li");
	if(num1==0){
		col1.style.display="block";
		col2.style.display="none";
		col3.style.display="none";
	}
	if(num1==1){
		col1.style.display="none";
		col2.style.display="block";
		col3.style.display="none";
	}
	if(num1==2){
		col1.style.display="none";
		col2.style.display="none";
		col3.style.display="block";
	}
	if(num1==3){
		num1=0;
		col1.style.display="block";
		col2.style.display="none";
		col3.style.display="none";
	}
	for(var i=0;i<circles.length;i++){
		circles[i].className="sup-ind-item";
		circles[num1].className+=" active";
	}

}
function chpho(a){
	var col1=document.getElementById("sup-page-col1");
	var col2=document.getElementById("sup-page-col2");
	var col3=document.getElementById("sup-page-col3");
	var circle=document.getElementById("sup-ind1");
	var circles=circle.getElementsByTagName("li");
	if(a==0){
		col1.style.display="block";
		col2.style.display="none";
		col3.style.display="none";
	}
	if(a==1){
		col1.style.display="none";
		col2.style.display="block";
		col3.style.display="none";
	}
	if(a==2){
		col1.style.display="none";
		col2.style.display="none";
		col3.style.display="block";
	}
	for(var i=0;i<circles.length;i++){
		circles[i].className="sup-ind-item";
		circles[a].className+=" active";
	}
}
timer2=setInterval("fbtauto()",2000);
function hitemgo(num){
	var active=document.getElementById("tb-active");
	var item1=document.getElementById("tb-item1");
	var item2=document.getElementById("tb-item2");
	var item3=document.getElementById("tb-item3");
	var item4=document.getElementById("tb-item4");
	var item5=document.getElementById("tb-item5");
	if(num==0){
		active.style.transform="translateX(0px)";
		item1.className="top-tab-content-item";
		item2.className="top-tab-content-item top-tab-content-item-off";
		item3.className="top-tab-content-item top-tab-content-item-off";
		item4.className="top-tab-content-item top-tab-content-item-off";
		item5.className="top-tab-content-item top-tab-content-item-off";
	}
	if(num==1){
		active.style.transform="translateX(78px)";
		item1.className="top-tab-content-item top-tab-content-item-off";
		item2.className="top-tab-content-item";
		item3.className="top-tab-content-item top-tab-content-item-off";
		item4.className="top-tab-content-item top-tab-content-item-off";
		item5.className="top-tab-content-item top-tab-content-item-off";
	}
	if(num==2){
		active.style.transform="translateX(156px)";
		item1.className="top-tab-content-item top-tab-content-item-off";
		item2.className="top-tab-content-item top-tab-content-item-off";
		item3.className="top-tab-content-item";
		item4.className="top-tab-content-item top-tab-content-item-off";
		item5.className="top-tab-content-item top-tab-content-item-off";
	}
	if(num==3){
		active.style.transform="translateX(234px)";
		item1.className="top-tab-content-item top-tab-content-item-off";
		item2.className="top-tab-content-item top-tab-content-item-off";
		item3.className="top-tab-content-item top-tab-content-item-off";
		item4.className="top-tab-content-item";
		item5.className="top-tab-content-item top-tab-content-item-off";
	}
	if(num==4){
		active.style.transform="translateX(312px)";
		item1.className="top-tab-content-item top-tab-content-item-off";
		item2.className="top-tab-content-item top-tab-content-item-off";
		item3.className="top-tab-content-item top-tab-content-item-off";
		item4.className="top-tab-content-item top-tab-content-item-off";
		item5.className="top-tab-content-item";
	}
}

var timer3;
var num3=0;
function liveaoto(){
	var ul=document.getElementById("live1-list");
	var ul1=document.getElementById("live1-ind");
	var lists=ul.getElementsByTagName("li");
	var lists1=ul1.getElementsByTagName("li");
	num3++;
	if(num3==5){
		num3=0;
	}
	for(var i=0;i<lists.length;i++){
		lists[i].className="live-item dino";
	}
	for(var j=0;j<lists1.length;j++){
		lists1[j].className="live-ind-item";
	}
	lists[num3].className="live-item";
	lists1[num3].className+=" active";
}
timer3=setInterval("liveaoto()",2000);
function liveback(){
	var ul=document.getElementById("live1-list");
	var ul1=document.getElementById("live1-ind");
	var lists=ul.getElementsByTagName("li");
	var lists1=ul1.getElementsByTagName("li");
	num3--;
	if(num3<0){
		num3=4;
	}
	for(var i=0;i<lists.length;i++){
		lists[i].className="live-item dino";
	}
	for(var j=0;j<lists1.length;j++){
		lists1[j].className="live-ind-item";
	}
	lists[num3].className="live-item";
	lists1[num3].className+=" active";
}
function livefoward(){
	liveaoto();
}
function choosepho1(num){
	var ul=document.getElementById("live1-list");
	var ul1=document.getElementById("live1-ind");
	var lists=ul.getElementsByTagName("li");
	var lists1=ul1.getElementsByTagName("li");
	for(var i=0;i<lists.length;i++){
		lists[i].className="live-item dino";
	}
	for(var j=0;j<lists1.length;j++){
		lists1[j].className="live-ind-item";
	}
	lists[num].className="live-item";
	lists1[num].className+=" active";
}













window.onload=function(){
	var ttbar=document.getElementById("ttbar-mycity");
	ttbar.onmouseover=function(){
		var province=document.getElementById("province");
		ttbar.style.backgroundColor="white";
		province.style.display="block";
	}
	ttbar.onmouseout=function(){
		var province=document.getElementById("province");
		ttbar.style.backgroundColor="";
		province.style.display="";
	}
	var ttbar1=document.getElementById("ttbar-myjd");
	ttbar1.onmouseover=function(){
		var myjd=document.getElementById("fore3-myjd");
		var myjddt=document.getElementById("myjd-dt");
		ttbar1.style.backgroundColor="white";
		myjd.style.display="block";
		myjddt.style.border="1px solid #ccc";
		myjddt.style.borderBottom="none";
	}
	ttbar1.onmouseout=function(){
		var myjd=document.getElementById("fore3-myjd");
		var myjddt=document.getElementById("myjd-dt");
		ttbar1.style.backgroundColor="";
		myjd.style.display="";
		myjddt.style.border="";
	}
	var ttbar2=document.getElementById("ttbar-serv");
	ttbar2.onmouseover=function(){
		var myjd=document.getElementById("fore6-serv");
		var servdt=document.getElementById("serv-dt");
		ttbar2.style.backgroundColor="white";
		myjd.style.display="block";
		servdt.style.border="1px solid #ccc";
		servdt.style.borderBottom="none";
	}
	ttbar2.onmouseout=function(){
		var myjd=document.getElementById("fore6-serv");
		var servdt=document.getElementById("serv-dt");
		ttbar2.style.backgroundColor="";
		myjd.style.display="";
		servdt.style.border="";
	}
	var ttbar3=document.getElementById("ttbar-navs");
	ttbar3.onmouseover=function(){
		var myjd=document.getElementById("fore7-navs");
		var navsdt=document.getElementById("navs-dt");
		ttbar3.style.backgroundColor="white";
		myjd.style.display="block";
		navsdt.style.border="1px solid #ccc";
		navsdt.style.borderBottom="none";
	}
	ttbar3.onmouseout=function(){
		var myjd=document.getElementById("fore7-navs");
		var navsdt=document.getElementById("navs-dt");
		ttbar3.style.backgroundColor="";
		myjd.style.display="";
		navsdt.style.border="";
	}
	var ttbar4=document.getElementById("J-mobile");
	ttbar4.onmouseover=function(){
		var myjd=document.getElementById("qrcode-podo");
		myjd.style.display="block";
	}
	ttbar4.onmouseout=function(){
		var myjd=document.getElementById("qrcode-podo");
		myjd.style.display="";
	}
	var left=document.getElementById("slider-left");
	left.onclick=function(){
	var slider=document.getElementById("slider");
	var arr=new Array("a1.jpg","a2.jpg","a3.jpg","a4.jpg","a5.jpg","a6.jpg","a7.jpg","a8.jpg");
	var circles=document.getElementById("circles");
	var cir=circles.children[0].getElementsByTagName("li");
	if(num==0){
		num=7;
	}else{
		num--;
	}
	slider.src="images/"+arr[num];
	for(var i=0;i<cir.length;i++)
		cir[i].className="";
	cir[num].className="changecolor";
	}
	var right=document.getElementById("slider-right");
	right.onclick=function(){
		sliderauto();
	}
	left.onmouseover=function(){
		left.style.backgroundColor="rgba(0,0,0,.6)";
	}
	left.onmouseout=function(){
		left.style.backgroundColor="";
	}
	right.onmouseover=function(){
		right.style.backgroundColor="rgba(0,0,0,.6)";
	}
	right.onmouseout=function(){
		right.style.backgroundColor="";
	}
	var main1=document.getElementById("slider-main");
	main1.onmouseover=function(){
		clearInterval(timer)
		left.style.display="block";
		right.style.display="block";
	}
	main1.onmouseout=function(){
		left.style.display="";
		right.style.display="";
		timer=setInterval("sliderauto()",3000);
	}
	var newfirst=document.getElementById("new-first");
	newfirst.onmouseover=function(){
		var itemon=document.getElementById("item-on");
		var item=document.getElementById("item");
		var active=document.getElementById("tab-active");
		itemon.style.display="block";
		item.style.display="none";
		active.style.transform="translateX(0)";
	}
	var newlast=document.getElementById("new-last");
	newlast.onmouseover=function(){
		var itemon=document.getElementById("item-on");
		var item=document.getElementById("item");
		var active=document.getElementById("tab-active");
		itemon.style.display="none";
		item.style.display="block";
		active.style.transform="translateX(52px)";
	}
	var left=document.getElementById("control-prev");
	var right=document.getElementById("control-next");
	var add1=-1000;
	left.onclick=function(){
		var list=document.getElementById("sk-list1");
		add1=add1+1000;
		if(add1==1000){
			add1=-2000;
		}
		list.style.transform="translateX("+add1+"px)";

	}
	right.onclick=function(){
		var list=document.getElementById("sk-list1");
		add1=add1-1000;
		if(add1==-3000){
			add1=0;
		}
		list.style.transform="translateX("+add1+"px)";
	}
	var fcol2=document.getElementById("fbt-col2");
	fcol2.onmouseover=function(){
		var left=document.getElementById("sup1-pre");
		var right=document.getElementById("sup1-next");
		left.style.display="block";
		right.style.display="block";
		clearInterval(timer2);
	}
	fcol2.onmouseout=function(){
		var left=document.getElementById("sup1-pre");
		var right=document.getElementById("sup1-next");
		left.style.display="";
		right.style.display="";
		timer2=setInterval("fbtauto()",2000);
	}
	var left=document.getElementById("sup1-pre");
	var right=document.getElementById("sup1-next");
	left.onclick=function(){
		num1--;
	var col1=document.getElementById("sup-page-col1");
	var col2=document.getElementById("sup-page-col2");
	var col3=document.getElementById("sup-page-col3");
	var circle=document.getElementById("sup-ind1");
	var circles=circle.getElementsByTagName("li");
	if(num1==0){
		col1.style.display="block";
		col2.style.display="none";
		col3.style.display="none";
	}
	if(num1==1){
		col1.style.display="none";
		col2.style.display="block";
		col3.style.display="none";
	}
	if(num1==2){
		col1.style.display="none";
		col2.style.display="none";
		col3.style.display="block";
	}
	if(num1==-1){
		num1=2;
		col1.style.display="none";
		col2.style.display="none";
		col3.style.display="block";
	}
	for(var i=0;i<circles.length;i++){
		circles[i].className="sup-ind-item";
		circles[num1].className+=" active";
	}

	}
	right.onclick=function(){
		fbtauto();
	}
}
window.onscroll = function() { 
	// 1600//600//2300/3000/3400/4000/4700/5400
	// 5820//6420
// alert(window.scrollY); 
          var height=window.scrollY;
          var lift=document.getElementById("lift");
          var list=document.getElementById("lift-list");
          var ltems=list.getElementsByTagName("li");
          var search=document.getElementById("search");
          for(var i=0;i<ltems.length-1;i++){
          	ltems[i].className="lift-item"; 
          }
          if(height>=600){
          	search.className="search-fix";
          }else{
          	search.className="";
          }
          if(height<1600){
          	lift.style.display="";
          }else{
          	lift.style.display="block";
          }
          if(height>=1600&&height<2300){
          	ltems[0].className+=" changecolor";
          }
          else if(height>=2300&&height<3000){
          	ltems[1].className+=" changecolor";
          }
           else if(height>=3000&&height<3400){
          	ltems[2].className+=" changecolor";
          }
          else if(height>=3400&&height<4000){
          	ltems[3].className+=" changecolor";
          }
          else if(height>=4000&&height<4700){
          	ltems[4].className+=" changecolor";
          }
          else if(height>=4700&&height<5400){
          	ltems[5].className+=" changecolor";
          }
          else if(height>=5400&&height<5820){
          	ltems[6].className+=" changecolor";
          }
          else if(height>=5820&&height<6420){
          	ltems[7].className+=" changecolor";
          }
          else if(height>=6420){
          	ltems[8].className+=" changecolor";
          }
          var entry3=document.getElementById("live1");
          entry3.onmouseover=function(){
          	var left=document.getElementById("live1-btn-pre");
          	var right=document.getElementById("live1-btn-next");
          	clearInterval(timer3);
          }
          entry3.onmouseout=function(){
          	var left=document.getElementById("live1-btn-pre");
          	var right=document.getElementById("live1-btn-next");
          	timer3=setInterval("liveaoto()",2000);
          }
} 
var timer4;

function go1(num1){
	timer4=setInterval(function(){
		var height=window.scrollY;
		if(height>num1){
			height=height-100;
			if(height<=num1)
				clearInterval(timer4);
		}
		if(height<num1){
			height=height+100;
			if(height>=num1)
				clearInterval(timer4);
		}
		window.scrollTo(0,height);
	},10)
}
