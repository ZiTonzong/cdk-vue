<template>
  <ul class="c-pager" v-show="!singleHide || total !== 1" :class="{simple}">
		<li class="num" :class="{disabled:current===1}" @click="onSkip(-1)">
			<c-icon name="arrow" class="arrow-left"></c-icon>
		</li>
		<li v-for="(page, index) in pages" :key="index" class="num" :class="{active:page===current, seprator:page==='...'}" @click="onClickPage(page)">
			<template v-if="page==='...'">
				<c-icon name="dot"></c-icon>
			</template>
			<template v-else>
				{{page}}
			</template>
		</li>
		<li class="num" :class="{disabled:current===total}" @click="onSkip(1)">
			<c-icon name="arrow" class="arrow-right"></c-icon>
		</li>
	</ul>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'

export default {
	name: 'cPager',
	components: {
		cIcon
	},
	props: {
		total: {
			type: Number,
			required: true
		},
		current: {
			type: Number,
			required: true
		},
		singleHide: {
			type: Boolean,
			default: true
		},
		simple: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		pages () {
			let array = [1, this.total, this.current, this.current - 1, this.current - 2, this.current + 1, this.current + 2]
			if (this.current <= 4) {
				array = [1, 2, 3, 4, 5, 6, 7, this.current + 1, this.current + 2, this.total]
			}
			if (this.current >= this.total - 3) {
				array = [1, this.total, this.current, this.total - 1, this.total - 2, this.total - 3, this.total - 4, this.total - 5, this.total - 6]
			}
			array = this.unique(array.sort((a, b) => a - b))
			let pages = array.reduce((prev, current, index, array) => {
				prev.push(current)
				let length = prev.length
				if (prev[length - 2] && current - prev[length - 2] > 1) {
					prev.splice(prev.length - 1, 0, '...')
				}
				return prev
			}, [])
			pages = pages.filter(n => (n >= 1 && n <= this.total) || n === '...')
			return pages
		}
	},
	methods: {
		unique (arr) {
			let newArray = []
			arr.forEach(n => {
				if (newArray.indexOf(n) === -1) {
					newArray.push(n)
				}
			})
			return newArray
		},
		onClickPage (page) {
			if (page !== '...') {
				this.$emit('update:current', page)
			}
		},
		onSkip (num) {
			if (num === -1 && this.current > 1) {
				this.$emit('update:current', this.current - 1)
			}
			if (num === 1 && this.current < this.total) {
				this.$emit('update:current', this.current + 1)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
.c-pager {
	font-size: 14px;
	font-weight: 600;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	line-height: 30px;
	user-select: none;
	height: 30px;

	.arrow-left {
		font-size: 10px;
		transform: rotateZ(180deg);
	}
	.arrow-right {
		font-size: 10px;
	}
	> .num {
		min-width: 35px;
		height: 100%;
		background: $bg;
		cursor: pointer;
		padding: 2px 0;
		display: flex;
		justify-content: center;
		align-items: center;

		&:not(:first-child) {
			margin-left: 4px;
		}
		&:hover:not(.seprator) {
			color: $p;
		}
		&.active {
			background: $p;
			color: #fff;
			cursor: default;
			&:hover {
				color: #fff;
			}
		}
		&.seprator {
			cursor: default;
		}
		&.disabled {
			color: $disabled;
			cursor: not-allowed;

			&:hover {
				color: $disabled;
			}
		}
	}
	&.simple {
		> .num {
			background: none;
			color: $main;

			&:hover:not(.seprator) {
				color: $p;
			}
			&.active {
				color: $p;
				cursor: default;
			}
			&.disabled {
				color: $disabled;
				cursor: not-allowed;

				&:hover {
					color: $disabled;
				}
			}
		}
	}
}
</style>
