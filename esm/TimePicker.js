import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { createElement, useCallback } from 'react';
import 'prop-types';
import { u as useUtils } from './useUtils-cfb96ac9.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectWithoutProperties';
import '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { P as PickerToolbar, T as ToolbarButton, c as ToolbarText, m as makePickerWithState, a as PureDateInput, u as usePickerState, K as KeyboardDateInput, b as useKeyboardPickerState, p as pick12hOr24hFormat } from './makePickerWithState-8de229b6.js';
import '@material-ui/core/Button';
import '@material-ui/core/Toolbar';
import { a as arrayIncludes } from './Wrapper-241966d7.js';
import './Calendar-cc8a9fe8.js';
import '@material-ui/core/TextField';
import '@material-ui/core/IconButton';
import '@material-ui/core/InputAdornment';
import 'rifm';
import '@material-ui/core/SvgIcon';
import '@babel/runtime/helpers/esm/slicedToArray';
import { t as timePickerDefaultProps } from './Picker-0191d111.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/inherits';
import './Day.js';
import 'react-transition-group';
import '@material-ui/core/CircularProgress';
import '@material-ui/core/DialogActions';
import '@material-ui/core/DialogContent';
import '@material-ui/core/Dialog';
import '@material-ui/core/Popover';
import { C as ClockType, g as getMeridiem, c as convertToMeridiem } from './time-utils-7b3077ee.js';
import './ClockView.js';
import '@material-ui/core';

var useStyles = makeStyles({
  toolbarLandscape: {
    flexWrap: 'wrap'
  },
  toolbarAmpmLeftPadding: {
    paddingLeft: 50
  },
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelAmpmLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    marginLeft: 20,
    marginRight: -20,
    display: 'flex',
    flexDirection: 'column'
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmSelectionWithSeconds: {
    marginLeft: 15,
    marginRight: 10
  },
  ampmLabel: {
    fontSize: 18
  }
}, {
  name: 'MuiPickersTimePickerToolbar'
});
function useMeridiemMode(date, ampm, onChange) {
  var utils = useUtils();
  var meridiemMode = getMeridiem(date, utils);
  var handleMeridiemChange = useCallback(function (mode) {
    var timeWithMeridiem = convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, false);
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  };
}
var TimePickerToolbar = function TimePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      ampm = _ref.ampm,
      openView = _ref.openView,
      onChange = _ref.onChange,
      isLandscape = _ref.isLandscape,
      setOpenView = _ref.setOpenView;
  var utils = useUtils();
  var theme = useTheme();
  var classes = useStyles();

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var clockTypographyVariant = isLandscape ? 'h3' : 'h2';
  return createElement(PickerToolbar, {
    isLandscape: isLandscape,
    className: clsx(isLandscape ? classes.toolbarLandscape : ampm && classes.toolbarAmpmLeftPadding)
  }, createElement("div", {
    className: clsx(classes.hourMinuteLabel, ampm && isLandscape && classes.hourMinuteLabelAmpmLandscape, {
      rtl: classes.hourMinuteLabelReverse
    }[theme.direction])
  }, arrayIncludes(views, 'hours') && createElement(ToolbarButton, {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView(ClockType.HOURS);
    },
    selected: openView === ClockType.HOURS,
    label: utils.getHourText(date, Boolean(ampm))
  }), arrayIncludes(views, ['hours', 'minutes']) && createElement(ToolbarText, {
    label: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  }), arrayIncludes(views, 'minutes') && createElement(ToolbarButton, {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView(ClockType.MINUTES);
    },
    selected: openView === ClockType.MINUTES,
    label: utils.getMinuteText(date)
  }), arrayIncludes(views, ['minutes', 'seconds']) && createElement(ToolbarText, {
    variant: "h2",
    label: ":",
    selected: false,
    className: classes.separator
  }), arrayIncludes(views, 'seconds') && createElement(ToolbarButton, {
    variant: "h2",
    onClick: function onClick() {
      return setOpenView(ClockType.SECONDS);
    },
    selected: openView === ClockType.SECONDS,
    label: utils.getSecondText(date)
  })), ampm && createElement("div", {
    className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape, arrayIncludes(views, 'seconds') && classes.ampmSelectionWithSeconds)
  }, createElement(ToolbarButton, {
    disableRipple: true,
    variant: "subtitle1",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), createElement(ToolbarButton, {
    disableRipple: true,
    variant: "subtitle1",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, timePickerDefaultProps, {
  openTo: 'hours',
  views: ['hours', 'minutes']
});

function useOptions(props) {
  var utils = useUtils();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return pick12hOr24hFormat(props.format, props.ampm, {
        '12h': utils.time12hFormat,
        '24h': utils.time24hFormat
      });
    }
  };
}

var TimePicker = makePickerWithState({
  useOptions: useOptions,
  Input: PureDateInput,
  useState: usePickerState,
  DefaultToolbarComponent: TimePickerToolbar
});
var KeyboardTimePicker = makePickerWithState({
  useOptions: useOptions,
  Input: KeyboardDateInput,
  useState: useKeyboardPickerState,
  DefaultToolbarComponent: TimePickerToolbar,
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
TimePicker.defaultProps = defaultProps;
KeyboardTimePicker.defaultProps = defaultProps;

export { KeyboardTimePicker, TimePicker };
//# sourceMappingURL=TimePicker.js.map
