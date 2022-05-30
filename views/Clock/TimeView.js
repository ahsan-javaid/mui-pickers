"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var times_1 = require("./times");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var core_2 = require("@material-ui/core");
exports.TimeView = function (props) {
    var _a = react_1.useState(''), selected = _a[0], setSelected = _a[1];
    var _b = react_1.useState(new Date()), selectedDate = _b[0], setSelectedDate = _b[1];
    var styles = styles_1.makeStyles({
        red: {
            color: 'red',
        },
        listItem: {
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover, &.active': {
                fontSize: '24px',
                fontWeight: '700'
            },
        },
        listView: {
            height: '200px',
            overflow: 'scroll',
        }
    });
    var classes = styles();
    var myRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var node = myRef.current;
        node.focus();
        var win = window;
        win.scrollIndex = 0;
    }, []);
    var onClick = function (time) {
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
    var onDateChange = function (e) {
        var time = e.currentTarget.value;
        var _a = time.split(':'), h = _a[0], m = _a[1];
        setSelected(time);
        var date = props.date;
        date.setHours(Number(h));
        date.setMinutes(Number(m));
        props.onMinutesChange(date, false);
        setSelectedDate(date);
    };
    var onkeydown = function (e) {
        var win = window;
        var active = document.activeElement;
        if (e.keyCode === 40) {
            if (active.nextSibling) {
                active.nextSibling.focus();
            }
            if (win.scrollIndex < 64) {
                win.scrollIndex++;
                onClick(times_1.times[win.scrollIndex]);
            }
        }
        if (e.keyCode === 38) {
            if (active.previousSibling) {
                active.previousSibling.focus();
            }
            if (win.scrollIndex >= 1) {
                win.scrollIndex--;
                onClick(times_1.times[win.scrollIndex]);
            }
        }
    };
    return (react_1.default.createElement(core_1.Box, null,
        react_1.default.createElement("div", { ref: myRef, onKeyDown: onkeydown, className: classes.listView, tabIndex: 1, style: { outline: 'none' } }, times_1.times.map(function (ele, index) { return (react_1.default.createElement(core_1.Box, { onClick: function () { return onClick(ele); }, className: classes.listItem + " " + (selected === ele ? 'active' : ''), key: index }, ele)); })),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { style: { textAlign: 'center' } },
            react_1.default.createElement(core_2.TextField, { variant: "outlined", size: "small", style: { width: '140px' }, type: "time", value: (new Date(selectedDate)).toTimeString().slice(0, 5), onChange: function (e) { return onDateChange(e); }, id: "birthdaytime", name: "birthdaytime" }),
            react_1.default.createElement("br", null))));
};
