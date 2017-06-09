import React from 'react';
import './dev.scss';
import {ReactPicker, PickerGroup} from './main';


class App extends React.Component {

  state = {
    picker_show: false,
    picker_value: '',
    picker_group: [
      {
        items: [{"id": "B_ICBC", "text": "工商银行", "extend01": null, "defaultOne": false}, {
          "id": "B_ABC",
          "text": "农业银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_BOC", "text": "中国银行", "extend01": null, "defaultOne": false}, {
          "id": "B_CCB",
          "text": "建设银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_BCM", "text": "交通银行", "extend01": null, "defaultOne": false}, {
          "id": "B_PSBC",
          "text": "邮储银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_CNCB", "text": "中信银行", "extend01": null, "defaultOne": false}, {
          "id": "B_CEB",
          "text": "光大银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_HXB", "text": "华夏银行", "extend01": null, "defaultOne": false}, {
          "id": "B_CMBC",
          "text": "民生银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_GDB", "text": "广发银行", "extend01": null, "defaultOne": false}, {
          "id": "B_CMB",
          "text": "招商银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_CIB", "text": "兴业银行", "extend01": null, "defaultOne": false}, {
          "id": "B_SPDB",
          "text": "浦发银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_PNB", "text": "平安银行", "extend01": null, "defaultOne": false}, {
          "id": "B_BOB",
          "text": "北京银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_BOSH", "text": "上海银行", "extend01": null, "defaultOne": false}, {
          "id": "B_BONB",
          "text": "宁波银行",
          "extend01": null,
          "defaultOne": false
        }, {"id": "B_CITI", "text": "花旗银行", "extend01": null, "defaultOne": false}, {
          "id": "B_BEA",
          "text": "东亚银行",
          "extend01": null,
          "defaultOne": false
        }]
      }
    ]
  };

  _onChange(inItem) {
    console.log('picker_value:', inItem);
    this.setState({picker_value: inItem.label, picker_show: false})
  }

  _onGroupChange(inItem, selected, obj) {
  }


  render() {
    return (
      <section className="hello-react-picker">
        <input type="text" value={this.state.picker_value} placeholder="select item" onClick={e => {
          e.preventDefault();
          this.setState({picker_show: true})
        }} readOnly={true}/>
        <ReactPicker
          onChange={this._onChange.bind(this)}
          groups={this.state.picker_group}
          onGroupChange={this._onGroupChange.bind(this)}
          show={this.state.picker_show}
          onCancel={e => this.setState({picker_show: false})}
        />
      </section>

    );
  }
}
;
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
