<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url(./static/css/animate.min.css);
	/*每个页面公共css */
	body{
		background: #f7f7f7;
	}
	.popups{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.8);
		z-index: 100;
	}
</style>
