<template>
  <div class="c-menu" :class="{vertical}">
		<slot></slot>
	</div>
</template>

<script>
import Vue from 'vue'
export default {
	name: 'cMenu',
	props: {
		selectedIndex: { type: String },
		vertical: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			eventBus: new Vue(),
			currentIndex: '',
			currentName: '',
			currentPath: ''
		}
	},
	provide () {
		return { eventBus: this.eventBus }
	},
	beforeDestroy () {
		this.eventBus.$off('click-item', this.listenItem)
	},
	mounted () {
		this.eventBus.$on('click-item', this.listenItem)
		this.$nextTick(() => {
			this.eventBus.$emit('vertical-prop', this.vertical)
			if (this.selectedIndex) {
				this.currentIndex = this.selectedIndex
				this.updateMenu({ inedx: this.selectedIndex })
			}
		})
	},
	methods: {
		listenItem (data) {
			this.currentIndex = data.inedx
			this.$emit('index-change', this.currentIndex)
			this.$emit('update:selectedIndex', this.currentIndex)
			this.currentName = data.name
			this.$emit('name-change', this.currentName)
			this.currentPath = data.path
			this.$emit('path-change', this.currentPath)
		},
		updateMenu (data) {
			this.eventBus.$emit('update-menu', data)
		}
	}
}
</script>

<style lang="scss" scoped>
  *,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	@import '@/scss/baseColor.scss';
	.c-menu {
		width: 100%;
		display: flex;
		cursor: pointer;
		font-size: 14px;
		color: $main;
		user-select: none;
		justify-content: flex-start;
		align-items: center;
		box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.1);

		&.vertical {
			flex-direction: column;
			box-shadow: none;
		}
	}
</style>
