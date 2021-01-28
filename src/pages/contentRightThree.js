import './common.css';
import { Select, Radio, DatePicker, Button,Table,Pagination } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Option } = Select;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
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
