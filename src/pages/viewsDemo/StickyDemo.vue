<template>
  <div class="sticky-container">
		<h2>Sticky 粘滞组件</h2>
		<p>用于窗口滚动时固定某元素的组件</p>
		<h3>基础用法</h3>
		<div class="demo">
			<c-sticky :distance="60" class="my-sticky">
                <div>sticky</div>
            </c-sticky>
			<c-sticky :distance="60" class="my-sticky long-sticky">
                <div>sticky</div>
            </c-sticky>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sticky-demo'
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
.sticky-container {
	margin: 0 auto;
	width: 1050px;
	padding: 65px 0 0 250px;

	.demo {
		width: 500px;
		height: 300px;
		background: #FFF;

		// .sticky-cls {
		// 	height: 200px;
		// 	background: $p5;
		// }
		.my-sticky {
			margin-top: 50px;
			height: 100px;
		}
		.long-sticky {
			margin-top: 500px;
			height: 500px;
		}
	}
}
</style>
