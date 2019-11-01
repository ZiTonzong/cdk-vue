<template>
  <div class="c-menu-item" :class="{active}" @click="onClickItem">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'cMenuItem',
	inject: ['eventBus'],
	props: {
		index: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	},
	data () {
		return {
			active: false,
			pathArr: null
		}
	},
	computed: {
		path () {
			return this.pathArr && this.pathArr.join('/')
		}
	},
	beforeDestroy () {
		this.$eventBus.$off('click-item', this.listenItem)
		this.$eventBus.$off('vertical-prop', this.listenVertical)
		this.$eventBus.$off('update-menu', this.listenRefresh)
	},
	mounted () {
		this.eventBus.$on('click-item', this.listenItem)
		this.eventBus.$on('vertical-prop', this.listenVertical)
		this.eventBus.$on('update-menu', this.listenRefresh)
		this.$nextTick(() => {
			this.getNames(this)
		})
	},
	methods: {
		getNames (vm) {
			this.pathArr = this.pathArr || []
			if (vm.$options.name === 'cMenuItem' || vm.$options.name === 'cSubMenu') {
				this.pathArr.unshift(vm.name)
			}
			if (vm.$parent) {
				let that = this
				that.getNames.call(this, vm.$parent)
			}
		},
		onClickItem () {
			this.active = true
			this.eventBus.$emit('click-item', {
				index: this.index,
				name: this.name,
				path: this.path
			})
		},
		listenItem (data) {
			this.active = this.index === data.index
		},
		listenVertical (value) {
			this.vertical = value
		},
		listenRefresh (data) {
			// 监听到index检查自身active
			if (data.index) {
				this.active = this.index === data.index
			} else if (data.path === this.path) {
				this.eventBus.$emit('update-menu', { index: this.index })
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@/scss/baseColor.scss';
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.c-menu-item {
		width: 100%;
		padding: 5px 15px;
		white-space: nowrap;
		min-width: 8em;
		font-size: 14px;
		color: $main;

		&:hover {
			background: $habg;
			color: $hover;
		}
		&.active {
			overflow: hidden;
			color: $p;
			background: $habg;
		}
	}
	.c-sub-menu .c-menu-item {
		&:first-child {
			border-top-left-radius: 2px;
			border-top-right-radius: 2px;
		}
		&:last-child {
			border-bottom-left-radius: 2px;
			border-bottom-right-radius: 2px;
		}
	}
	.c-sub-menu.vertical .c-menu-item {
		&:first-child {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
		&:last-child {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
		padding-left: 25px;
	}
	.c-sub-menu.vertical .c-sub-menu.vertical .c-menu-item {
		padding-left: 35px;

		&.active {
			color: $p;
		}
	}
</style>
