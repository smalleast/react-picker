#react-picker
> Modal components for react(alert/confirm &amp; the common modal components).


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript

```


## usage:
```javascript
import {ReactPicker} from 'react-picker';
  state = {
    picker_show: false,
    picker_value: '',
    picker_group: [
      {
        items: [
          {
            code: '1001',
            label: 'Item1'
          },
          {
            label: 'Item2 (Disabled)',
            disabled: true
          },
          {
            label: 'Item3'
          },
          {
            label: 'Item4'
          },
          {
            label: 'Item5'
          }
        ]
      }
    ]
  };

  _onChange(inItem) {
    console.log('picker_value:',inItem);
    this.setState({picker_value: inItem.label, picker_show: false})
  }

  _onGroupChange(inItem, selected, obj) {
  }

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
```
