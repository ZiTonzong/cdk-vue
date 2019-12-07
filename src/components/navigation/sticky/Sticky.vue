<template>
	<div class="sticky-wrapper">
		<div class="c-sticky" ref="sticky" :class="{sticky}">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'cSticky',
	props: {
		distance: {
			type: Number,
			default: 0
		}
	},
	data () {
		return {
			sticky: false,
			top: 0,
			handleScroll: null
		}
	},
	mounted () {
		let that = this
		let { top } = this.$refs.sticky.getBoundingClientRect()
		this.top = top + window.scrollY
		this.handleScroll = that._handleScroll.bind(that)
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy () {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		_handleScroll () {
			if (window.scrollY > this.top - this.distance) {
				let { width, height, left } = this.$refs.sticky.getBoundingClientRect()
				this.$el.style.width = width + 'px'
				this.$el.style.height = height + 'px'
				this.$refs.sticky.style.width = width + 'px'
				this.$refs.sticky.style.height = height + 'px'
				this.$refs.sticky.style.top = this.distance + 'px'
				this.$refs.sticky.style.left = left + 'px'
				this.sticky = true
			} else {
				this.sticky = false
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
	.sticky-wrapper {
		width: 100%;
		> .c-sticky {
			width: 100%;
			height: 100%;
			background: $p;

			&.sticky {
				position: fixed;
				top: 0;
				left: 0;
				z-index: 100;
				background: $p;
			}
		}
	}
</style>
