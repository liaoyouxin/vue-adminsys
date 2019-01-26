<template>
	<div id="line">
		<div :id="setId" :class="setClass" :style="{width:setWidth+'px',height:setHeight+'px'}" ref="lineChart"></div>
	</div>
</template>

<script>
	// 引入 echarts 主模块。
	import * as echarts from 'echarts/lib/echarts';
	// 引入折线图。
	import 'echarts/lib/chart/line';
	// 引入提示框组件、标题组件、工具箱组件。
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/title';
	import 'echarts/lib/component/toolbox';
	export default {
		props:{
			setClass:{
				type:String,
				default:'yourClassName'
			},
			setId:{
				type:String,
				default:'yourId'
			},
			setWidth:{
				type:Number,
				default:500
			},
			setHeight:{
				type:Number,
				default:400
			}
		},
		data(){
			return{
			  charts: null,
			  timer: false
			}
		},
		watch:{
			setWidth(val){
				if(!this.timer){
					this.timer = true
					let that = this
					setTimeout(()=>{
						that.charts.resize({
							width:val+'px',
							height:'auto'
						})
						that.timer = false
					},100)
				}
			}
		},
		mounted(){
			this.initChart()
		},
		methods:{
			initChart(){
				this.charts = echarts.init(this.$refs.lineChart)
				this.charts.setOption({
					title : {
						text: '未来一周气温变化',
						subtext: '纯属虚构'
					},
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:['最高气温','最低气温']
					},
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : ['周一','周二','周三','周四','周五','周六','周日']
						}
					],
					yAxis : [
						{
							type : 'value',
							axisLabel : {
								formatter: '{value} °C'
							}
						}
					],
					series : [
						{
							name:'最高气温',
							type:'line',
							data:[11, 11, 15, 13, 12, 13, 10],
							markPoint : {
								data : [
									{type : 'max', name: '最大值'},
									{type : 'min', name: '最小值'}
								]
							},
							markLine : {
								data : [
									{type : 'average', name: '平均值'}
								]
							}
						},
						{
							name:'最低气温',
							type:'line',
							data:[1, -2, 2, 5, 3, 2, 0],
							markPoint : {
								data : [
									{name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
								]
							},
							markLine : {
								data : [
									{type : 'average', name : '平均值'}
								]
							}
						}
					]

				})
			}
		}
		
	}
</script>