<template>
  <div class="pager-container">
		<h2>Pager 分页</h2>
		<p>当数据量过多时，使用分页分解数据</p>
		<h3>页数较少时完全显示</h3>
		<div class="demo">
			<c-pager :total="7" :current.sync="current1"></c-pager>
		</div>
		<h3>页数较多时非连续页之间显示分隔符</h3>
		<div class="demo">
			<c-pager :total="50" :current.sync="current2"></c-pager>
		</div>
		<h3>simple 属性开启简洁样式</h3>
		<div class="demo">
			<c-pager :total="50" :current.sync="current3" simple></c-pager>
		</div>
	</div>
</template>

<script>
export default {
	name: 'pager-demo',
	data () {
		return {
			current1: 1,
			current2: 10,
			current3: 20
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
.pager-container {
	margin: 0 auto;
	width: 1050px;
	padding: 65px 0 0 250px;

	.demo {
		margin-top: 20px;
		// width: 500px;
		height: 100px;
		background: #FFF;
	}
}
</style>
