import './common.css';
import { Select, Radio, DatePicker } from 'antd';

const { Option } = Select;
const plainOptions = ['年','季','月','日'];
const { RangePicker } = DatePicker;

function ContentRightTwo() {
  return (
    <div className="content-left-root">
      <div className="content-left-top">
        <div className="content-left-top-line"/>
        <span className="content-left-top-text">逾期余额趋势图</span>
        <div className="content-left-top-right">
          <div className="content-select" style={{marginRight:20}}>
            <span className="content-select-text">逾期天数</span>
            <span className="content-select-line"/>
            <Select className="content-select-other" placeholder="请选择逾期天数" defaultValue="jack">
              <Option value="jack">总金额</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="content-select">
            <span className="content-select-text">机构名称</span>
            <span className="content-select-line"/>
            <Select className="content-select-other" placeholder="请选择机构名称">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <Radio.Group options={plainOptions} value="Apple" optionType="button" className="content-radio"/>
          <div className="content-select">
            <span className="content-select-text">时间</span>
            <span className="content-select-line"/>
            <RangePicker className="content-range-picker" bordered={false} picker="date" placeholder={['开始月份','结束月份']}/>
          </div>

        </div>
      </div>
      <div className="content-left-line"/>
      <div style={{padding: '20px 0 0 40px'}}>
        内容
      </div>
    </div>
  );
}

export default ContentRightTwo;
