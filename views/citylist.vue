
<template>
<component is="list" city="{{city}}"></component>
</template>

<script>
module.exports = {
	data : function(){
		return {

			city : null,
		}
	},
	compiled : function(){
		var that = this;
		var data = require('json!./city.json');

		//传入城市数据，进行格式化
		that.formatCity.call(that, data.citys);
	},
	methods : {
		//从.json读取城市信息后，进行格式化，将城市按照拼音排列
		formatCity : function(arr){
			var that = this;
			var map = {};

			arr.forEach(function(x){
				title = x.pinyin;
				
				that.getFirstLetter(title, function (ret){
					if (map[ret]) {
						map[ret].push(x);
					} else {
						map[ret] = [x]
					}
				});
			});

			that.setData(map);
		},
		//接收一个拼音，返回它的首字母大写
		getFirstLetter : function(word, fn){
			fn(word.charAt(0).toUpperCase());
		},
		setData : function(map){
			this.$data.city = map;
		}
	},
	components : {
		'list' : require('../components/cityList/list.vue') //城市列表模块
	},
}
</script>