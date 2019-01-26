<template>
	<div id="bar">
		<div :id="setId" :class="setClass" :style="{width:setWidth+'px',height:setHeight+'px'}" ref="barChart"></div>
	</div>
</template>

<script>
	// 引入 echarts 主模块。
	import * as echarts from 'echarts/lib/echarts';
	// 引入折线图。
	import 'echarts/lib/chart/bar';
	// 引入提示框组件、标题组件、工具箱组件。
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/title';
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
				this.charts = echarts.init(this.$refs.barChart)
				let option = {
					title : {
						text: '某地区蒸发量和降水量',
						subtext: '纯属虚构'
					},
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:['蒸发量','降水量']
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
							data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'蒸发量',
							type:'bar',
							data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
							name:'降水量',
							type:'bar',
							data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
							markPoint : {
								data : [
									{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
									{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
								]
							},
							markLine : {
								data : [
									{type : 'average', name : '平均值'}
								]
							}
						}
					]
				};
				this.charts.setOption(option)
			}
		}
		
	}
</script>