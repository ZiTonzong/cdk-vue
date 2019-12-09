<template>
  <transition name="loading-fade">
		<div class="c-loading" v-show="visible" :style="elStyle">
			<div class="progress" ref="proress" :style="proStyle"></div>
		</div>
	</transition>
</template>
<script>
export default {
	
}
</script>