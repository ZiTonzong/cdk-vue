<template>
  <div class="c-sub-menu" :class="{open:selfOpen, vertical}">
		<div class="title" @click="onClick">
			<slot name="title"></slot>
			<c-icon name="right" class="c-icon"></c-icon>
		</div>
		<div class="popover">
			<c-spread :visible="selfOpen">
				<slot></slot>
			</c-spread>
		</div>
	</div>
</template>
<script>
import cIcon from '@/components/basic/icon/Icon.vue'
import cSpread from '@/components/others/spread/Spread.vue'

export default {
	name: 'cSubMenu',
	components: {
		cSpread,
		cIcon
	},
	inject: ['eventBus'],
	props: {
		index: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: name
		},
		open: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			selfOpen: false,
			vertical: false,
			clickable: true
		}
	},
	computed: {
		indexArr () {
			return this.index.split('-')
		}
	},
	created () {
		this.selfOpen = this.open
	},
	mounted () {
		this.$eventBus.$on('click-item', this.listenItem)
		this.$eventBus.$on('click-sub', this.listenSub)
		this.$eventBus.$on('vertical-prop', this.listenVertical)
		this.$eventBus.$on('update-menu', this.listenRefresh)
	},
	beforeDestroy () {
		this.eventBus.$off('click-item', this.listenItem)
		this.eventBus.$off('click-sub', this.listenSub)
		this.eventBus.$off('vertical-prop', this.listenVertical)
		this.eventBus.$off('update-menu', this.listenRefresh)
	},
	methods: {
		onClick () {
			this.selfOpen = !this.selfOpen
			this.$eventBus.$emit('click-sub', this.index)
		},
		listenItem (data) {
			if (this.open) {
				return
			}
			if (!this.vertical) {
				this.selfOpen = false
			} else {
				this.listenRefresh(data)
			}
		},
		listenSub(index) {
			if (this.open) {
				return
			}
			if (this.index === index) {
				return
			}
			let arr = index.split('-')
			this.indexArr.forEach((str, n) => {
				str !== arr[n] ? this.selfOpen = false : ''
			})
		},
		listenVertical (value) {
			this.vertical = value
		},
		listenRefresh (data) {
			if (this.open) {
				return
			}
			if (data.index) {
				let arr = data.index.split('-')
				let result = true
				this.indexArr.forEach((str, n) => {
					str !== arr[n] ? result = false : ''
				})
				this.selfOpen = result
			}
		}
	}
}
</script>
<style lang="scss" scoped>
	@import '@/scss/baseColor.scss';
	.c-sub-menu {
		color: $main;
		font-size: 14px;
		position: relative;
		width: 100%;

		> .title {
			padding: 5px 15px;
			position: relative;
			width: 100%;
			min-width: 8em;
			white-space: nowrap;
			display: flex;
			justify-content: flex-start;
			align-items: center;

			&:hover {
				background: $habg;
			}
			> .c-icon {
				margin-left: auto;
				transition: transform 0.3s;
				color: $sub;
			}
		}
		> .popover {
			width: 100%;
			position: absolute;
			margin-top: 2px;
			top: 100%;
			left: 0;
			background: #fff;
			border-radius: 2px;
			box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
		}
		&.open {
			> .title {
				> .c-icon {
					transform: rotateZ(90deg);
				}
			}
		}
	}
	.c-sub-menu.vertical {
		color: $main;
		font-size: 14px;
		
		> .title {
			padding: 5px 15px;
			position: relative;
			width: 100%;
			min-width: 8em;
			white-space: nowrap;
			display: flex;
			justify-content: flex-start;
			align-items: center;

			&:hover {
				background: $habg;
			}
			> .c-icon {
				margin-left: auto;
				transition: transform 0.3s;
			}
		}
		> .popover {
			position: static;
			box-shadow: none;
		}
		&.open {
			> .title {
				> .c-icon {
					transform: rotate(90deg);
				}
			}
		}
	}
	.c-sub-menu .c-sub-menu {
		&:first-child {
			.title {
				border-top-left-radius: 2px;
				border-top-right-radius: 2px;
			}
		}
		&:last-child {
			.title {
				border-bottom-left-radius: 2px;
				border-bottom-right-radius: 2px;
			}
		}
  }
	.c-sub-menu.vertical .c-sub-menu.vertical .title {
		padding-left: 25px;
	}
	.c-sub-menu .c-sub-menu .popover {
		top: 0;
		left:100%;
		margin-top: 0;
		margin-left: 2px;
	}
	.c-sub-menu.vertical .c-sub-menu.vertical .popover {
		margin-left: 0;
	}
</style>