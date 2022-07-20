<template>
	<div class="taskContainer">
		<div class="taskItem">
			<el-descriptions border="true" :column="1" size="large" :style="blockMargin">
				<el-descriptions-item label="资源类型" width="300px">kooriookami</el-descriptions-item>
				<el-descriptions-item label="资源摘要" width="300px">18100000000</el-descriptions-item>
				<el-descriptions-item label="详细描述与安全策略" :span="2" width="300px">Suzhou</el-descriptions-item>
			</el-descriptions>
			<div class="action">
				<el-button type="primary" plain>发布策略</el-button>
				<el-button type="primary" plain>无法解决</el-button>
			</div>
		</div>
	</div>
</template>

<script>
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
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.action {
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
	}
</style>
