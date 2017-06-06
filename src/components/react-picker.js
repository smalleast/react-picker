import React, {Component, PropTypes} from 'react';
import PickerGroup from './picker_group';
import classNames from 'classnames';
import Mask from './mask';

class Picker extends Component {
  static propTypes = {
    actions: PropTypes.array,
    groups: PropTypes.array,
    defaultSelect: PropTypes.array,
    onGroupChange: PropTypes.func,
    onChange: PropTypes.func,
    onCancel: PropTypes.func,
    show: PropTypes.bool,
    lang: PropTypes.object,
  };

  static defaultProps = {
    actions: [],
    groups: [],
    show: false,
    lang: {leftBtn: '取消', rightBtn: '确定'},
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      selected: this.props.defaultSelect ? this.props.defaultSelect : Array(this.props.groups.length).fill(-1),
      actions: [{
        label: this.props.lang.leftBtn,
        onClick: e => this.handleClose(() => {
          if (this.props.onCancel) this.props.onCancel(e);
        })
      },
        {
          label: this.props.lang.rightBtn,
          onClick: e => this.handleChanges()
        }],
      closing: false
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChanges() {
    this.handleClose(() => {
      if (this.props.onChange) this.props.onChange(this.state.selectedItem, this.state.selected, this);
    });
  }

  handleChange(inItem) {
    const {item, selectedIndex, groupIndex} = inItem;
    let selected = this.state.selected;
    selected[groupIndex] = selectedIndex;
    this.setState({selected, selectedItem: item}, () => {
      if (this.props.onGroupChange) this.props.onGroupChange(inItem, this.state.selected, this);
    });
  }

  handleClose(cb) {
    this.setState({
      closing: true
    }, () => setTimeout(() => {
      this.setState({closing: false});
      cb();
    }, 300));
  }

  renderActions() {
    let elActions = this.state.actions.map((action, i) => {
      const {label, onClick} = action;
      return <a onClick={onClick.bind(this)} key={i} className="weui-picker__action"> { label }</a>;
    });

    return (
      <div className="weui-picker__hd">
        { elActions }
      </div>
    );
  }

  renderGroups() {
    return this.props.groups.map((group, i) => {
      return <PickerGroup key={i} {...group} onChange={this.handleChange} groupIndex={i}
                          defaultIndex={this.state.selected[i]}/>;
    });
  }

  render() {
    const {className, show} = this.props;
    const cls = classNames('weui-picker', {
      'weui-animate-slide-up': show && !this.state.closing,
      'weui-animate-slide-down': this.state.closing
    }, className);

    const maskCls = classNames({
      'weui-animate-fade-in': show && !this.state.closing,
      'weui-animate-fade-out': this.state.closing
    });

    return this.props.show ? (
      <div>
        <div className={cls}>
          { this.renderActions() }
          <div className="weui-picker__bd">
            { this.renderGroups() }
          </div>
        </div>
      </div>
    ) : false;
  }
}

export default Picker;
