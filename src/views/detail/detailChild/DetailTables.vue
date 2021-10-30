<template>
	<div class="detail-tables">
		<table v-if="tablesmessages.tables">
			<tr v-for="(item,index) in tablesmessages.tables[0]" :key="index">
				<th>{{item[0]}}</th>
				<td v-for="(item1,index) in item" v-show="index != 0" :key="index">{{item1}}</td>
			</tr>
		</table>
		<table v-if="tablesmessages.set" class="tab1">
			<tr v-for="(item,index) in tablesmessages.set" :key="index">
				<th>{{item.key}}</th>
				<td>{{item.value}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:'DetailTables',
		props:{
			tablesmessages:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.detail-tables{
		padding: 1.25rem 0.3125rem 0 0.9375rem;
		border-top: 0.0625rem solid #bdbdbd;
		font-size: 0.875rem;
		margin-bottom: 1.875rem;
	}
	table{
		width: 100%;
		border-collapse: collapse;
	}
	.detail-tables tr{
		border-bottom: 0.0625rem solid #bdbdbd;
	}
	.detail-tables th{
		width: 6.25rem;
		height: 2.5rem;
		text-align: left;
		font-weight: 300;
	}
	.detail-tables td{
		width: 3.125rem;
		height: 2.5rem;
		text-align: center;
	}
	.tab1 td{
		width: 6.875rem;
		font-size: 0.75rem;
		color: red;
		text-align: left;
	}
</style>
