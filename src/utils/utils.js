/**
 * 工具
 */



/**
 * 根据身份证计算年龄
 * 
 * @param IDCard 身份证号
 */
function getAgeWithIDCard (IDCard) {
  var sexAndAge = {};
	//获取用户身份证号码
	var userCard = IDCard;
	//如果身份证号码为undefind则返回空
	if(!userCard){
		return sexAndAge;
	}
	//获取性别
	if(parseInt(userCard.substr(16,1)) % 2 == 1){
		sexAndAge.sex = '1（男）'
	}else{
		sexAndAge.sex = '0（女）'
	}
	//获取出生年月日
	//userCard.substring(6,10) + "-" + userCard.substring(10,12) + "-" + userCard.substring(12,14);
	var yearBirth = userCard.substring(6,10);
	var monthBirth = userCard.substring(10,12);
	var dayBirth = userCard.substring(12,14);
	//获取当前年月日并计算年龄
	var myDate = new Date();
	var monthNow = myDate.getMonth() + 1;
	var dayNow = myDate.getDay();
	var age = myDate.getFullYear() - yearBirth;
	if(monthNow < monthBirth || (monthNow == monthBirth && dayNow < dayBirth)){
		age--;
	}
	//返回年龄
	return age;
}


function dateFtt(fmt, date) { //author: meizz   
	var o = {
		"M+": date.getMonth() + 1, //月份   
		"d+": date.getDate(), //日   
		"h+": date.getHours(), //小时   
		"m+": date.getMinutes(), //分   
		"s+": date.getSeconds(), //秒   
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度   
		"S": date.getMilliseconds() //毫秒   
	};
	if(/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}


export default {
  getAgeWithIDCard,
  dateFtt
}