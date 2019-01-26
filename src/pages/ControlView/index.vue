<template>
	<div class="layui-fluid" id="console">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md8 layui-col-space15">
				<div class="layui-col-md6">
					<div class="layui-card">
						<div class="layui-card-header">快捷方式</div>
						<div class="layui-card-body">
							<div class="layui-carousel" id="shortcut">
								 <div carousel-item>
									<div>
										<ul class="layui-row layui-col-space15 shortcut-icon">
											<li class="layui-col-md3" v-for="(item,index) in shortcuts" :key="index">
												<router-link :to="item.path">
											       <i class="layui-icon" :class="item.icon"></i>
											       <span>{{item.title}}</span>
											    </router-link>
											</li>
										</ul>
									</div>
									<div>快捷方式第二页</div>
								 </div>
							 </div>
						</div>
					</div>
				</div>
				<div class="layui-col-md6">
					<div class="layui-card" id="backlog">
						<div class="layui-card-header">待办事项</div>
						<div class="layui-card-body">
							<ul class="layui-row layui-col-space10">
								<li class="layui-col-md6">
									<a href="">
										<h3>待审评论</h3>
										<p><span>66</span></p>
									</a>
								</li>
								<li class="layui-col-md6">
									<a href="">
										<h3>待审评论</h3>
										<p><span>66</span></p>
									</a>
								</li>
								<li class="layui-col-md6">
									<a href="">
										<h3>待审评论</h3>
										<p><span>66</span></p>
									</a>
								</li>
								<li class="layui-col-md6">
									<a href="">
										<h3>待审评论</h3>
										<p><span>66</span></p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="layui-col-md12">
					<div class="layui-card">
						<div class="layui-card-header">数据图表</div>
						<div class="layui-card-body">
							<div class="layui-carousel" id="dataChats">
								<div carousel-item>
									<div>
										<bar-chart :set-class="'noclass'" :set-id="'noid'" :set-width="screenWidth" :set-height="400"></bar-chart>
									</div>
									<div>
										<line-chart :set-class="'noclass'" :set-id="'noid'" :set-width="screenWidth" :set-height="400"></line-chart>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="layui-col-md4">
				<div class="layui-row layui-col-space15">
					<div class="layui-col-md12">
						<div class="layui-card" id="version">
							<div class="layui-card-header">版本信息</div>
							<div class="layui-card-body">
								<table class="layui-table">
									<tbody>
										 <tr>
										  <td>当前版本</td>
										  <td>v1.00beta</td>
										</tr>
										<tr>
										<td>基于框架</td>
										<td>vue2.0 layui2.43</td>
										</tr>
										<tr>
										<td>主要特色</td>
										<td>单页面/多页面/清爽/极简</td>
										</tr>
										<tr>
										<td>获取渠道</td>
										<td><a href="" class="layui-btn layui-btn-danger">获取授权</a><a href="" class="layui-btn">立即下载</a></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BarChart from '@/components/Echarts/barChart'
	import LineChart from '@/components/Echarts/lineChart'
	export default {
		components:{
			BarChart,
			LineChart
		},
		data(){
			return {
				timer:false,
				screenWidth: 500,
				charts: null,
				shortcuts:[
					{
						icon:'layui-icon-set',
						title:'设置',
						path:'/set'
					},
					{
						icon:'layui-icon-component',
						title:'组件',
						path:'/component'
					},
					{
						icon:'layui-icon-headset',
						title:'音频',
						path:'/headset'
					},
					{
						icon:'layui-icon-util',
						title:'工具',
						path:'/util'
					},
					{
						icon:'layui-icon-file',
						title:'文件管理',
						path:'/file'
					},
					{
						icon:'layui-icon-star',
						title:'收藏',
						path:'/star'
					},
					{
						icon:'layui-icon-404',
						title:'404',
						path:'/404'
					},
					{
						icon:'layui-icon-console',
						title:'控制台',
						path:'/console'
					}
				]
			}
		},
		created() {
			this.initLayui()
		},
		mounted(){
			const that = this
			this.screenWidth = document.querySelector('#dataChats').clientWidth
			window.onresize = ()=>{
				that.screenWidth = document.querySelector('#dataChats').clientWidth
				console.log(that.screenWidth)
			} 
		},
		methods:{
			initLayui(){
				layui.use('element',function(){
					var element = layui.element
				})
				layui.use('carousel', function(){
				var carousel = layui.carousel;
				//建造实例
				carousel.render({
					elem: '#shortcut'
					,width: '100%' ,//设置容器宽度
					height:'185px',
					autoplay:false,
					arrow:'none',
					trigger:'hover'
				})
				carousel.render({
					elem:'#dataChats',
					width:'100%',
					height:'400px',
					autoplay:false,
					arrow:'none',
					trigger:'hover'
				})
				})
			}
		}
	}
</script>

<style lang="less">
	#console{
		.layui-carousel-ind{
		  position: absolute;
		  top: -42px;
		  right: 0;
		  width: 42px;
		}
		.layui-carousel>[carousel-item]>*{
			background: #fff;
		}
		#shortcut{
			text-align: center;
			.shortcut-icon{
				a{
					&:hover{
						.layui-icon{
							background:#F2F2F2
						}
					}
				}
				.layui-icon{
					width: 100%;
					height: 60px;
					line-height: 60px;
					font-size: 30px;
					display: block;
					border-radius: 2px;
					background: #F8F8F8;
					text-align: center;
					transition: all .3s;
			    }
				city{
					position: relative;
					top: 2px;
					font-size: 14px;
					width: 100%;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
			}
		}
		#backlog{
			li{
				a{
					color: #999;
					display: block;
					padding: 14.75px 15px;
					background: #F8F8F8;
				}
				h3{
					font-size: 12px;
					padding-bottom: 10px;
				}
				p{
					font-style: normal;
					font-size: 30px;
					font-weight: 300;
					color: #009688;
				}
			}
		}
		
		#dataChats{
			.charts{
				width: 100%;
				height: 400px;
			}
		}

	}
</style>
