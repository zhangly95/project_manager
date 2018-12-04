import React, { Component,Fragment } from 'react';
import {Row, Card, Table} from 'antd';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/tree';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
      };

    componentDidMount() {
        const data = {
            "children": [
                {
                    "children": [
                        {
                            "children": [{
                                "children": [],
                                "name": "熔盐用量",
                            },
                            {
                                "children": [],
                                "name": "设计流量范围",       
                            },
                            {
                                "children": [],
                                "name": "保温层厚度",       
                            },
                            {
                                "children": [],
                                "name": "主回路总热损失",       
                            },
                            {
                                "children": [],
                                "name": "温升速率",       
                            },
                            {
                                "children": [],
                                "name": "散热功率",       
                            },
                            {
                                "children": [],
                                "name": "泵罐液位波动",       
                            },
                            {
                                "children": [],
                                "name": "触液材质",       
                            },
                        ],
                            "name": "泵",
                        },
                        {
                            "children": [],
                            "name": "吸入管路系统",
                        },
                        {
                            "children": [],
                            "name": "吐出管路系统",
                        },
                        {
                            "children": [],
                            "name": "流量测量段",
                        },
                        {
                            "children": [],
                            "name": "流量调节段",
                        },
                        {
                            "children": [],
                            "name": "调节阀",
                        },
                    ],
                    "name": "主回路",
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "熔盐转运罐",
                        },
                        {
                            "children": [],
                            "name": "熔盐储罐",
                        },
                        {
                            "children": [],
                            "name": "截止阀",
                        },
                        {
                            "children": [],
                            "name": "冷冻阀",
                        },
                        {
                            "children": [],
                            "name": "液位计",
                        },
                        {
                            "children": [],
                            "name": "压力计",
                        },
                        {
                            "children": [],
                            "name": "气压计",
                        },
                    ],
                    "name": "熔盐储存与加载系统",
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "氩气钢瓶",
                        },
                        {
                            "children": [],
                            "name": "气体管道",
                        },
                        {
                            "children": [],
                            "name": "调节阀",
                        },
                        {
                            "children": [],
                            "name": "压力计",
                        },
                        {
                            "children": [],
                            "name": "流量计",
                        },
                        {
                            "children": [],
                            "name": "真空泵",
                        },
                        {
                            "children": [],
                            "name": "尾气冷凝器",
                        },
                        {
                            "children": [],
                            "name": "尾气处理装置",
                        },
                        {
                            "children": [],
                            "name": "油雾分离器",
                        },
                        {
                            "children": [],
                            "name": "检漏仪",
                        },
                    ],
                    "name": "气路系统",
                },
                {
                    "children": [],
                    "name": "预热与散热系统",
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "液位计", 
                        },
                        {
                            "children": [],
                            "name": "压力计", 
                        },
                        {
                            "children": [],
                            "name": "流量计", 
                        },
                        {
                            "children": [],
                            "name": "温度传感器", 
                        },
                        {
                            "children": [],
                            "name": "转速仪", 
                        },
                        {
                            "children": [],
                            "name": "功率测量仪", 
                        },
                        {
                            "children": [],
                            "name": "噪声测量仪", 
                        },
                    ],
                    "name": "测控系统",
                },
                {
                    children:[
                        {
                            "children": [],
                            "name": "钢结构平台", 
                        },
                        {
                            "children": [],
                            "name": "设备支撑", 
                        },

                    ],
                    name: "支持系统",
                },
            ],
            "name": "泵测试台",
        }

        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title:{
                text:"设备信息",
            },
            tooltip: {
                // show：'true',//默认：true；是否显示提示框组件，包括提示框浮层和 axisPointer。
                trigger: 'item',// 默认：item；触发类型。item：数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none':什么都不触发。
                triggerOn: 'mousemove',
            },
            series:[
                {
                    type: 'tree',
 
                    data: [data],
 
                    left: '7%',
                    right: '20%',
                    top: '1%',
                    bottom: '1%',
 
                    symbolSize: 15,
 
                    // orient: 'vertical',
 
                    expandAndCollapse: true,// 默认：true；子树折叠和展开的交互，默认打开 。
 
                    initialTreeDepth:1,// 默认：2，树图初始展开的层级（深度）。根节点是第 0 层，然后是第 1 层、第 2 层，... ，直到叶子节点
 
                    label: {
                        normal: {
                            position: 'left',
                            verticalAlign: 'middle',// 文字垂直对齐方式，默认自动。
                            align: 'right',// 文字水平对齐方式，默认自动。
                            fontSize: 20,// 文字的字体大小
                        },
                    },
 
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                            },
                        },
                    },
                    animationDurationUpdate: 750,       
                },
            ],
        });  
    }
    
    render () {
        const columns = [
            {
              title: '设备',
              dataIndex: 'device',
              key: 'device',
            },
            {
              title: '参数名',
              dataIndex: 'parameter',
              key: 'parameter',
              render: text => <a href="/">{text}</a>,
            },
            {
              title: '数值',
              dataIndex: 'value',
              key: 'value',
              sorter: (a, b) => a.value - b.value,
              
            },
            {
              title: '备注',
              dataIndex: 'mark',
              key: 'mark',
              sorter: (a, b) => a.mark - b.mark,
              align: 'right',
            },
          ];
          const searchData = [{index: 1,device:"泵", parameter: "熔盐用量", value: "0.8m3", mark: "泵罐和管道中的熔盐最大用量"
          , status: 0},
          {index: 2,device:"泵", parameter: "设计流量范围", value: "0~400m3/h", mark: "适用于样机"
          , status: 1},
          {index: 3,device:"泵", parameter: "保温层厚度", value: "250mm", mark: "", status: 0},
          {index: 4,device:"泵", parameter: "主回路热损失", value: "9kw", mark: "", status: 0 },
          {index: 5,device:"泵", parameter: "温升速率", value: "1.32C/min", mark: "保守值为1.58C/min", status: 0},
          {index: 6,device:"泵", parameter: "散热功率", value: "45.9kw", mark: "", status: 0},
          {index: 7,device:"泵", parameter: "泵罐液位波动", value: "49.6mm", mark: "正常运行状态下", status: 0},
          {index: 8,device:"泵", parameter: "触液材质", value: "316H", mark: "", status: 0},
        ];

        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
          hideDefaultSelections: true,
          selections: [{
            key: '主回路',
            text: '主回路系统',
            onSelect: () => {
              this.setState({
                selectedRowKeys: [...Array(4).keys()], // 0...4
              });
            },
          }, {
            key: '熔盐储存与加载系统',
            text: '熔盐储存与加载系统',
            onSelect: () => {
            },
          }],
          onSelection: this.onSelection,
        };
        return (
          <Fragment>
            <Row gutter={24}>
              <Card
                bordered={false}
                bodyStyle={{ padding: '0 0 32px 0' }}
                style={{ marginTop: 32 }}
              >
                <div id="main" style={{ width: '2000px', height: '500px' }} />    
              </Card>
              <Card
                bordered={false}
                bodyStyle={{ padding: '0 0 32px 0' }}
                style={{ marginTop: 32 }}
              >
                <Table
                  title={()=>{return "设备参数"}}
                  rowKey={record => record.index}
                  size="small"
                  columns={columns}
                  dataSource={searchData}
                  pagination={{
                    style: { marginBottom: 0 },
                       pageSize: 5,
                     }}
                  rowSelection={rowSelection}
                />     
              </Card>
            </Row>
          </Fragment>
        );
    }
}
export default EchartsTest;