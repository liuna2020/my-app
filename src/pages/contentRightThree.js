import './common.css';
import { Select, Radio, DatePicker, Button,Table,Pagination } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Option } = Select;
const columns = [
  {
    title: '机构名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '总余额 (元)',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '60天以上余额 (元)',
    dataIndex: 'address',
    key: 'address',
    width:'200px',
    align:'right',
    className:'columnStyleLast',
    sorter: (a, b) => a.address - b.address,
  },
  {
    title: '占比',
    key: 'age',
    dataIndex: 'age',
    align:'right',
    width:'80px',
    className: 'columnStyleLast',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '90天以上余额 (元)',
    key: 'address',
    dataIndex: 'address',
    width:'200px',
    align:'right',
    className:'columnStyleLast',
    sorter: (a, b) => a.address - b.address,
  },
  {
    title: '占比',
    key: 'age',
    dataIndex: 'age',
    align:'right',
    width:'80px',
    className: 'columnStyleLast',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '360天以上余额 (元)',
    key: 'address',
    dataIndex: 'address',
    width:'200px',
    align:'right',
    className:'columnStyleLast',
    sorter: (a, b) => a.address - b.address,
  },
  {
    title: '占比',
    key: 'age',
    dataIndex: 'age',
    align:'right',
    width:'80px',
    className: 'columnStyleLast',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '预测月底90天最大值',
    key: 'address',
    dataIndex: 'address',
    width:'200px',
    align:'right',
    className:'columnStyleLast',
    sorter: (a, b) => a.address - b.address,
  },
  {
    title: '预测季末90天最大值',
    key: 'address',
    dataIndex: 'address',
    align:'right',
    width:'200px',
    className: 'columnStyleLast',
    sorter: (a, b) => a.address - b.address,
  },
];

const data = [
  {
    key: '1',
    name: '杭州分行',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '8',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '10',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function ContentRightThree() {
  return (
    <div className="content-left-root">
      <div className="content-left-top">
        <div className="content-left-top-line"/>
        <span className="content-left-top-text">逾期余额趋势图</span>
        <div className="content-left-top-right">
          <div className="content-select" style={{marginRight:20}}>
            <span className="content-select-text">机构名称</span>
            <span className="content-select-line"/>
            <Select className="content-select-other" placeholder="请选择机构名称">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="content-select">
            <span className="content-select-text">时间</span>
            <span className="content-select-line"/>
            <DatePicker className="content-range-picker content-range-pickerThree" bordered={false} picker="date" placeholder="请选择时间"/>
          </div>

        </div>
      </div>
      <div className="content-left-line"/>
      <div className="content-three-other">
        <Button icon={<DownloadOutlined />} className="content-three-other-btn">导出</Button>
        <Table columns={columns} dataSource={data} className="content-three-other-table" pagination={false} rowClassName="content-table"/>
        <div className="content-three-other-pagination">
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={50}
            showSizeChanger
            showTotal={total => `共 ${total} 条记录`}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentRightThree;
