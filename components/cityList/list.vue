<style lang="less">
@color-gray : #eee;
.list{
	&__item{
		&--title{			
			line-height: 30px;
			color: rgba(0,0,0,.54);
			background-color: @color-gray;
			text-indent: 10px;

			position: -webkit-sticky; 
		    position: sticky;  
		    top: 0px;
		}

		&--city{
			padding: 0 10px;

			li{
				line-height: 50px;
				border-bottom: 1px solid @color-gray;

				&:last-child{
					border-bottom: 0;
				}
			}
		}
	}
}
</style>

<template>
<section class="list">
	<div class="list__item" v-repeat="city | orderBy '$key'">
		<h2 class="list__item--title" v-text="$key" v-attr="id : $key"></h2>
		<ul class="list__item--city">
			<li v-repeat="its : $value" v-text="its.city" v-attr="data-id : its.id, data-name : its.pinyin"></li>
		</ul>
	</div>
</section>
</template>

<script>
module.exports = {
	props : ['city']
}
</script>