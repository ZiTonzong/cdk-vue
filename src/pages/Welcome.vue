<template>
	<div id="my" class="outer-container">cdk-vue
		<div class="test-con pingfang-font">
			dsad
			<a class="pingfang-font">xsx</a>
			<div class="mm pingfang-font">xjiasncan</div>
		</div>
		<div class="test-2 pingfang-font">sssaksa</div>
		<button @click="switchActive">切换</button>
		<div ref="test3" class="test-3">
			<div v-bind:class="{ expansion : active }" class="card-mid">{{message}}</div>
		</div>
		<p>dadasdads</p>
		<div class="test-4">
			<cut-text :content="message" :line="3" :isShowHiddenBtn="true" :lineHeight="20"></cut-text>
		</div>
	</div>
</template>

<script>
import CutText from '@/Components/others/cutText/CutText.vue'
export default {
	name: 'welcome',
	components: {
		CutText
	},
	data () {
		return {
			active: false,
			message: 'edennnnakkkk'
		}
	},
	methods: {
		switchActive () {
			this.active = !this.active
		}
	},
	mounted () {
		const aa = this.$refs.test3
		console.log('aa', aa.firstChild)
	}
}
</script>

<style lang="scss" scoped>
	#my {
		display: block;
	}
	.outer-container * {
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
	}
	// .outer-container .pingfang-font{
	// 	// font-size: 14px;
	// 	font-family: PingFangSC-Regular, PingFang SC;
	// 	font-weight: 400;
	// }
	.test-con {
		font-size: 30px;
	}
	.mm {
		font-size: 50px;
	}
	.test-2 {
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
	}
	.test-3 {
		width: 500px;
		margin-top: 30px;
	}
	.expansion {
		white-space:pre-line;
		width: 500px;
		overflow: hidden;
		-webkit-line-clamp: 4;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
  }
	.test-4 {
		margin-top: 50px;
		width: 300px;
	}
</style>
