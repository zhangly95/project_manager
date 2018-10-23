import React,{PureComponent} from 'react';
import { connect } from 'dva';
// import moment from 'moment';
import { Table ,List} from 'antd';
// import StandardTable from '../../components/StandardTable/index';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

// const FormItem = Form.Item;
@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))

export default class TableForm extends PureComponent {
    state = {
      };

   componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
          type: 'list/getTaskList',
        });
      };

      render() {

        const columnsA = [
          { title: '归属', dataIndex: 'order', key: 'order' },
          { title: '更新时间', dataIndex: 'updateTime', key: 'updateTime' },
          { title: '具体要求', dataIndex: 'requirement', key: 'requirement' },
          { title: '责任人', dataIndex: 'responseble', key: 'responseble' },
          { title: '完成情况', dataIndex: 'complete', key: 'complete' },
          { title: '下一步计划', dataIndex: 'nextstep', key: 'nextstep' },
          { title: '备注', dataIndex: 'remark', key: 'remark' },
          { title: '操作', dataIndex: 'action', key: 'action', render: () => <a href="javascript">更新</a> },
        ];
        const columnsB = [
          { title: '序号', dataIndex: 'order', key: 'order' },
          { title: '更新时间', dataIndex: 'updateTime', key: 'updateTime' },
          { title: '具体要求', dataIndex: 'requirement', key: 'requirement' },
          { title: '责任人', dataIndex: 'responseble', key: 'responseble' },
          { title: '完成情况', dataIndex: 'complete', key: 'complete' },
          { title: '下一步计划', dataIndex: 'nextstep', key: 'nextstep' },
          { title: '备注', dataIndex: 'remark', key: 'remark' },
        ];
        
        const dataA = [
          { key: 1,order: 1, updateTime: 20180910, requirement: '方案设计文件', responseble: '韩利峰',
          complete:'已完成10%', nextstep:'进一步……',remark:'9月17日', 
          description: <Table 
            pagination={false}
            showHeader={false}
            columns={columnsB} 
            dataSource={[{key: 1,order: 1, updateTime: 20180910, requirement: '与物理讨论，在9月底锁定技术参数，1周时间转化方案设计', responseble: '韩利峰',complete:'已完成10%', nextstep:'进一步……',remark:'9月17日' },
                         {key: 2,order: 2, updateTime: 20180911, requirement: '过程控制需求分析', responseble: '韩利峰',complete:'已完成10%', nextstep:'进一步……',remark:'9月17日' }]} />},
          { key: 2,order: 2,  updateTime: 20180911, requirement: '控制系统设计', responseble: '韩利峰',
          complete:'已完成20%', nextstep:'进一步……',remark:'9月18日', description: <Table columns={columnsA} dataSource={dataB} /> },
          { key: 3,order: 3, updateTime: 20180912, requirement: '与物理讨论，在9月底锁定技术参数，1周时间转化方案设计', responseble: '陈志军',
          complete:'已完成30%', nextstep:'进一步……',remark:'9月19日', description: <Table columns={columnsA} dataSource={dataB} /> },
        ];
        const dataB = [
          { key: 4,order: 1, updateTime: 32, requirement: 'New York No. 1 Lake Park', responseble: 'New York No. 1 Lake Park',
          complete:'New York No. 1 Lake Park', nextstep:'New York No. 1 Lake Park',remark:'New York No. 1 Lake Park' },
          { key: 5,order: 2,  updateTime: 32, requirement: 'New York No. 1 Lake Park', responseble: 'New York No. 1 Lake Park',
          complete:'New York No. 1 Lake Park', nextstep:'New York No. 1 Lake Park',remark:'New York No. 1 Lake Park' },
          { key: 6,order: 3, updateTime: 32, requirement: 'New York No. 1 Lake Park', responseble: 'New York No. 1 Lake Park',
          complete:'New York No. 1 Lake Park', nextstep:'New York No. 1 Lake Park',remark:'New York No. 1 Lake Park' },
        ];

          return (
            <PageHeaderLayout title="查询表格">
              <Table
                columns={columnsA}
                expandedRowRender={record =>record.description}
                dataSource={dataA}
              />
            </PageHeaderLayout>
          )
      }


}

