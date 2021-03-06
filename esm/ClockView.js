import React__default, { useMemo, createElement, useState, useRef, useEffect, memo } from 'react';
import { object, func, bool, number, oneOf } from 'prop-types';
import { u as useUtils } from './useUtils-cfb96ac9.js';
import clsx from 'clsx';
import _extends from '@babel/runtime/helpers/esm/extends';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import { C as ClockType, g as getMeridiem, c as convertToMeridiem } from './time-utils-7b3077ee.js';
import { Box, TextField } from '@material-ui/core';

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles = makeStyles(function (theme) {
  var size = theme.spacing(4);
  return {
    clockNumber: {
      width: size,
      height: 32,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat(typeof size === 'number' ? "".concat(size, "px") : size, ") / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      index = _ref.index,
      isInner = _ref.isInner;
  var classes = useStyles();
  var className = clsx(classes.clockNumber, selected && classes.clockNumberSelected);
  var transformStyle = useMemo(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  return createElement(Typography, {
    component: "span",
    className: className,
    variant: isInner ? 'body2' : 'body1',
    style: transformStyle,
    children: label
  });
};

var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      utils = _ref.utils,
      date = _ref.date;
  var currentHours = utils.getHours(date);
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  for (var hour = startHour; hour <= endHour; hour += 1) {
    var label = hour.toString();

    if (hour === 0) {
      label = '00';
    }

    var props = {
      index: hour,
      label: utils.formatNumber(label),
      selected: isSelected(hour),
      isInner: !ampm && (hour === 0 || hour > 12)
    };
    hourNumbers.push(createElement(ClockNumber, _extends({
      key: hour
    }, props)));
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var value = _ref2.value,
      utils = _ref2.utils;
  var f = utils.formatNumber;
  return [createElement(ClockNumber, {
    label: f('00'),
    selected: value === 0,
    index: 12,
    key: 12
  }), createElement(ClockNumber, {
    label: f('05'),
    selected: value === 5,
    index: 1,
    key: 1
  }), createElement(ClockNumber, {
    label: f('10'),
    selected: value === 10,
    index: 2,
    key: 2
  }), createElement(ClockNumber, {
    label: f('15'),
    selected: value === 15,
    index: 3,
    key: 3
  }), createElement(ClockNumber, {
    label: f('20'),
    selected: value === 20,
    index: 4,
    key: 4
  }), createElement(ClockNumber, {
    label: f('25'),
    selected: value === 25,
    index: 5,
    key: 5
  }), createElement(ClockNumber, {
    label: f('30'),
    selected: value === 30,
    index: 6,
    key: 6
  }), createElement(ClockNumber, {
    label: f('35'),
    selected: value === 35,
    index: 7,
    key: 7
  }), createElement(ClockNumber, {
    label: f('40'),
    selected: value === 40,
    index: 8,
    key: 8
  }), createElement(ClockNumber, {
    label: f('45'),
    selected: value === 45,
    index: 9,
    key: 9
  }), createElement(ClockNumber, {
    label: f('50'),
    selected: value === 50,
    index: 10,
    key: 10
  }), createElement(ClockNumber, {
    label: f('55'),
    selected: value === 55,
    index: 11,
    key: 11
  })];
};

var times = ["07:45 AM", "08:00 AM", "08:15 AM", "08:30 AM", "08:45 AM", "09:00 AM", "09:15 AM", "09:30 AM", "09:45 AM", "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM", "01:00 PM", "01:15 PM", "01:30 PM", "01:45 PM", "02:00 PM", "02:15 PM", "02:30 PM", "02:45 PM", "03:00 PM", "03:15 PM", "03:30 PM", "03:45 PM", "04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:00 PM", "05:15 PM", "05:30 PM", "05:45 PM", "06:00 PM", "06:15 PM", "06:30 PM", "06:45 PM", "07:00 PM", "07:15 PM", "07:30 PM", "07:45 PM", "08:00 PM", "08:15 PM", "08:30 PM", "08:45 PM", "09:00 PM", "09:15 PM", "09:30 PM", "09:45 PM", "10:00 PM", "10:15 PM", "10:30 PM", "10:45 PM", "11:00 PM", "11:15 PM", "11:30 PM", "11:45 PM"];

var TimeView = function TimeView(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = useState(new Date()),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedDate = _useState4[0],
      setSelectedDate = _useState4[1];

  var styles = makeStyles({
    red: {
      color: 'red'
    },
    listItem: {
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      '&:hover, &.active': {
        fontSize: '24px',
        fontWeight: '700'
      }
    },
    listView: {
      height: '200px',
      overflow: 'scroll'
    }
  });
  var classes = styles();
  var myRef = useRef(null);
  useEffect(function () {
    var node = myRef.current;
    node.focus();
    var win = window;
    win.scrollIndex = 0;
  }, []);

  var _onClick = function onClick(time) {
    var ampm = time.slice(6);
    var add = ampm === 'AM' ? 0 : 12;
    setSelected(time);
    var date = props.date;
    var hr = Number(time.slice(0, 2)) + add;
    date.setHours(hr === 24 ? 12 : hr);
    date.setMinutes(Number(time.slice(3, 5)));
    props.onMinutesChange(date, false);
    setSelectedDate(date);
  };

  var onDateChange = function onDateChange(e) {
    var time = e.currentTarget.value;

    var _time$split = time.split(':'),
        _time$split2 = _slicedToArray(_time$split, 2),
        h = _time$split2[0],
        m = _time$split2[1];

    setSelected(time);
    var date = props.date;
    date.setHours(Number(h));
    date.setMinutes(Number(m));
    props.onMinutesChange(date, false);
    setSelectedDate(date);
  };

  var onkeydown = function onkeydown(e) {
    var win = window;
    var active = document.activeElement;

    if (e.keyCode === 40) {
      if (active.nextSibling) {
        active.nextSibling.focus();
      }

      if (win.scrollIndex < 64) {
        win.scrollIndex++;

        _onClick(times[win.scrollIndex]);
      }
    }

    if (e.keyCode === 38) {
      if (active.previousSibling) {
        active.previousSibling.focus();
      }

      if (win.scrollIndex >= 1) {
        win.scrollIndex--;

        _onClick(times[win.scrollIndex]);
      }
    }
  };

  return React__default.createElement(Box, null, React__default.createElement("div", {
    ref: myRef,
    onKeyDown: onkeydown,
    className: classes.listView,
    tabIndex: 1,
    style: {
      outline: 'none'
    }
  }, times.map(function (ele, index) {
    return React__default.createElement(Box, {
      onClick: function onClick() {
        return _onClick(ele);
      },
      className: "".concat(classes.listItem, " ").concat(selected === ele ? 'active' : ''),
      key: index
    }, ele);
  })), React__default.createElement("hr", null), React__default.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React__default.createElement(TextField, {
    variant: "outlined",
    size: "small",
    style: {
      width: '140px'
    },
    type: "time",
    value: new Date(selectedDate).toTimeString().slice(0, 5),
    onChange: function onChange(e) {
      return onDateChange(e);
    },
    id: "birthdaytime",
    name: "birthdaytime"
  }), React__default.createElement("br", null)));
};

var ClockView = function ClockView(_ref) {
  var type = _ref.type,
      onHourChange = _ref.onHourChange,
      onMinutesChange = _ref.onMinutesChange,
      onSecondsChange = _ref.onSecondsChange,
      ampm = _ref.ampm,
      date = _ref.date,
      minutesStep = _ref.minutesStep;
  var utils = useUtils();
  var viewProps = useMemo(function () {
    switch (type) {
      case ClockType.HOURS:
        return {
          value: utils.getHours(date),
          children: getHourNumbers({
            date: date,
            utils: utils,
            ampm: Boolean(ampm)
          }),
          onChange: function onChange(value, isFinish) {
            var currentMeridiem = getMeridiem(date, utils);
            var updatedTimeWithMeridiem = convertToMeridiem(utils.setHours(date, value), currentMeridiem, Boolean(ampm), utils);
            console.log('updatedTimeWithMeridiem', updatedTimeWithMeridiem);
            onHourChange(updatedTimeWithMeridiem, isFinish);
          }
        };

      case ClockType.MINUTES:
        var minutesValue = utils.getMinutes(date);
        return {
          value: minutesValue,
          children: getMinutesNumbers({
            value: minutesValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setMinutes(date, value);
            console.log('updatedTime', updatedTime);
            onMinutesChange(updatedTime, isFinish);
          }
        };

      case ClockType.SECONDS:
        var secondsValue = utils.getSeconds(date);
        return {
          value: secondsValue,
          children: getMinutesNumbers({
            value: secondsValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setSeconds(date, value);
            onSecondsChange(updatedTime, isFinish);
          }
        };

      default:
        throw new Error('You must provide the type for TimePickerView');
    }
  }, [ampm, date, onHourChange, onMinutesChange, onSecondsChange, type, utils]);
  return createElement(TimeView, _extends({
    date: date,
    onMinutesChange: onMinutesChange,
    type: type,
    ampm: ampm,
    minutesStep: minutesStep
  }, viewProps));
};
ClockView.displayName = 'TimePickerView';
process.env.NODE_ENV !== "production" ? ClockView.propTypes = {
  date: object.isRequired,
  onHourChange: func.isRequired,
  onMinutesChange: func.isRequired,
  onSecondsChange: func.isRequired,
  ampm: bool,
  minutesStep: number,
  type: oneOf(Object.keys(ClockType).map(function (key) {
    return ClockType[key];
  })).isRequired
} : void 0;
ClockView.defaultProps = {
  ampm: true,
  minutesStep: 1
};
var ClockView$1 = memo(ClockView);

export default ClockView$1;
export { ClockView };
//# sourceMappingURL=ClockView.js.map
