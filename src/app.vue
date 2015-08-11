<style lang="less">

</style>

<template>
<div id="box">
	<component is="citylist"></component>
</div>
</template>

<script>
module.exports = {
	components : {
		'citylist' : require('../views/citylist.vue')
	}
}
</script>