<template>
	<div class="taskContainer">
		<div class="taskItem" style="margin-left: 250px;">
			<el-descriptions>
				<el-descriptions-item label="区块总数:">
					<el-tag size="small">100</el-tag>
				</el-descriptions-item>
			</el-descriptions>
		</div>
		<div class="taskItem">
			<el-input v-model="input1" placeholder="交易/区块查询" style="width: 40%;">
				<template #prefix>
					<el-icon class="el-input__icon">
						<search />
					</el-icon>
				</template>
			</el-input>
		</div>
		<div class="taskItem" style="grid-column:1/3;">
			<el-descriptions border="true" :column="1" size="large">
				<el-descriptions-item label="区块号" width="300px" label-align="center" align="center">111
				</el-descriptions-item>
				<el-descriptions-item label="区块哈希" width="300px" label-align="center" align="center">gjalgfawewa
				</el-descriptions-item>
				<el-descriptions-item label="父哈希" :span="2" width="300px" label-align="center" align="center">222
				</el-descriptions-item>
				<el-descriptions-item label="交易数" width="300px" label-align="center" align="center">999
				</el-descriptions-item>
				<el-descriptions-item label="交易费" width="300px" label-align="center" align="center">1000
				</el-descriptions-item>
				<el-descriptions-item label="出块主机" :span="2" width="300px" label-align="center" align="center">192
				</el-descriptions-item>
			</el-descriptions>
		</div>
	</div>
</template>

<script>
	// import {
	// 	ref
	// } from 'vue'
	import {
		Search
	} from '@element-plus/icons-vue'
	export default {
		name: "BlockchianDetails",
		components: {
			Search,
		}
	}
	// const input1 = ref('')
</script>

<style scoped>
	.taskContainer {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 50%);
		justify-items: center;
	}

	.taskItem {
		margin-top: 30px;
		width: 70%;
	}
</style>
