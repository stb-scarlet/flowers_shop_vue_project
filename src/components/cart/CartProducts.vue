<template>
  <div class="cart-products">
		<div class="cp-body">
			<ul class="cpb-wrap">
				<li class="cpbw-item">
					<div class="cpbw-image">
						<img src="" alt="">
					</div>
					<div class="cpbw-info">
						<p class="cpbw-name">
							Product Name
						</p>
						<p class="cpbw-price">123</p>
						<div class="cpbw-quantity">
							<button>-</button>
							<span>1</span>
							<button>+</button>
						</div>
						<p class="cpbw-total-price">2134</p>
					</div>
					<div class="cpbw-delete">
						<i class="fas fa-times"></i>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";
const cartHeader = ref([
	{
		name: "Product",
	},
	{
		name: "Price",
	},
	{
		name: "Quantity",
	},
	{
		name: "Total",
	},
]);
</script>
<style lang="scss" scoped>
.cart-products {
	.cp-body {
		.cpb-wrap {
			list-style: none;
			.cpbw-item {
				display: grid;
				border: 1px solid red;
				grid-template-columns: 80px 3fr 50px;
				.cpbw-image {
					height: 80px;
					border: 1px solid red;
				}
				.cpbw-info {
					display: grid;
					grid-template-columns: 2fr 1fr 1fr 1fr;
					padding: 0 10px;
				}
				.cpbw-delete {
					border: 1px solid red;
				}
			}
		}
	}
}
</style>
