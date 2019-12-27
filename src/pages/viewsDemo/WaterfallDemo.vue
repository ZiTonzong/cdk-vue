<template>
  <div class="waterfall-container">
		<h2 class="title-h2">Waterfall 瀑布流布局</h2>
		<p>瀑布流，又称瀑布流式布局。是比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。</p>
		<h3 class="title-h3">基础用法</h3>
		<div class="demo">
			<c-waterfall :width="150" :source="source" @scroll-bottom="scrollBottom">
				<div slot-scope="slotProps" :class="slotProps.prop.className">
					<!-- <div>slot</div> -->
					<div class="content">宽度 {{ slotProps.prop.size }}</div>
				</div>
			</c-waterfall>
		</div>
	</div>
</template>

<script>
export default {
	name: 'waterfall-demo',
	data () {
		return {
			// slotProps: {
			// 	prop: {
			// 		size: '宽度150px'
			// 	}
			// },
			source: [
				{ size: '150px', className: 'div-1' },
				{ size: '150px', className: 'div-2' },
				{ size: '150px', className: 'div-3' },
				{ size: '150px', className: 'div-4' },
				{ size: '150px', className: 'div-5' },
				{ size: '150px', className: 'div-6' },
				{ size: '150px', className: 'div-7' },
				{ size: '150px', className: 'div-8' },
				{ size: '150px', className: 'div-9' },
				{ size: '150px', className: 'div-10' },
				{ size: '150px', className: 'div-11' },
				{ size: '150px', className: 'div-12' },
				{ size: '150px', className: 'div-13' },
				{ size: '150px', className: 'div-14' },
				{ size: '150px', className: 'div-15' },
				{ size: '150px', className: 'div-16' },
				{ size: '150px', className: 'div-17' },
				{ size: '150px', className: 'div-18' },
				{ size: '150px', className: 'div-19' },
				{ size: '150px', className: 'div-20' },
				{ size: '150px', className: 'div-21' },
				{ size: '150px', className: 'div-22' }
			]
		}
	},
	methods: {
		scrollBottom () {
			this.$message({message: '触发了scrollBottom', showClose: false})
		}
	}
	// mounted () {
	// 	console.log('slotProps', this.slotProps)
	// }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
.waterfall-container {
	margin: 0 auto;
	width: 1050px;
	padding: 65px 0 0 250px;

	.title-h2 {
		margin: 20px 0;
	}
	.title-h3 {
		margin: 20px 0;
	}
	.demo {
		// width: 500px;
		// height: 300px;
		background: #FFF;
		// .sticky-cls {
		// 	height: 200px;
		// 	background: $p5;
		// }
		.item {
			> div {
				display: flex;
				justify-content: center;
				align-items: center;
				background: $p;
				margin-right: 10px;
				margin-bottom: 20px;
				color: #fff;

				// .content {
				// 	// display: flex;
				// 	// justify-content: center;
				// 	// align-items: center;
				// }
			}
			.div-1 {
				height: 50px;
			}
			.div-2 {
				height: 80px;
			}
			.div-3 {
				height: 100px;
			}
			.div-4 {
				height: 110px;
			}
			.div-5 {
				height: 80px;
			}
			.div-6 {
				height: 60px;
			}
			.div-7 {
				height: 90px;
			}
			.div-8 {
				height: 70px;
			}
			.div-9 {
				height: 160px;
			}
			.div-10 {
				height: 70px;
			}
			.div-11 {
				height: 150px;
			}
			.div-12 {
				height: 75px;
			}
			.div-13 {
				height: 64px;
			}
			.div-14 {
				height: 70px;
			}
			.div-15 {
				height: 70px;
			}
			.div-16 {
				height: 200px;
			}
			.div-17 {
				height: 350px;
			}
			.div-18 {
				height: 250px;
			}
			.div-19 {
				height: 400px;
			}
			.div-20 {
				height: 70px;
			}
			.div-21 {
				height: 85px;
			}
			.div-22 {
				height: 90px;
			}
		}
	}
}
</style>
