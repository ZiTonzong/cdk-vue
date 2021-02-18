<template>
  <div class="slides-container">
		<h2>Slides走马灯（轮播图）</h2>
		<p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
		<h3>基础用法</h3>
		<div class="demo">
			<c-slides class="slides-cls" :duration="2000" :autoPlay="false">
				<div class="img">1</div>
				<div class="img">2</div>
				<div class="img">3</div>
				<div class="img">4</div>
			</c-slides>
		</div>
	</div>
</template>

<script>
export default {
	name: 'slides-demo'
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
.slides-container {
	margin: 0 auto;
	width: 1050px;
	padding: 65px 0 0 250px;

	.demo {
		width: 500px;
		height: 300px;
		background: #FFF;

		.slides-cls {
			height: 200px;
			background: $p5;

			.img {
				width: 100px;
				height: 50px;
				background: red;
			}
		}
	}
}
</style>
