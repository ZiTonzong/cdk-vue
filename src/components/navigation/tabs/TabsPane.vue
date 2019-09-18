<template>
  <div class="tabs-pane" :class="{active}" v-show="active">
    <slot></slot>
	</div>
</template>

<script>
export default {
	name: 'cTabsPane',
	inject: ['eventBus'],
	props: {
		name: {
			type: [String, Number],
			required: true
		}
	},
	data () {
		return {
			active: false
		}
	},
	created () {
		this.eventBus.$on('update:selected', name => {
			this.active = this.name === name
		})
	}
}
</script>

<style lang="scss" scoped>
	@import '@/scss/baseColor.scss';

	.tabs-pane {
		text-align: left;
		text-indent: 2em;
		&.active {
			background: $bg;
		}
	}
</style>
