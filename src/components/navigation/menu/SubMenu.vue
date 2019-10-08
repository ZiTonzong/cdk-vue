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
	inject: ['eventBus'],,
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