"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var PickerToolbar_1 = __importDefault(require("../_shared/PickerToolbar"));
var ToolbarButton_1 = __importDefault(require("../_shared/ToolbarButton"));
var DateTimePickerTabs_1 = __importDefault(require("./DateTimePickerTabs"));
var useUtils_1 = require("../_shared/hooks/useUtils");
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (_) { return ({
    toolbar: {
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-around',
    },
    separator: {
        margin: '0 4px 0 2px',
        cursor: 'default',
    },
}); }, { name: 'MuiPickerDTToolbar' });
exports.DateTimePickerToolbar = function (_a) {
    var date = _a.date, openView = _a.openView, setOpenView = _a.setOpenView, ampm = _a.ampm, hideTabs = _a.hideTabs, dateRangeIcon = _a.dateRangeIcon, timeIcon = _a.timeIcon, onChange = _a.onChange;
    var utils = useUtils_1.useUtils();
    var classes = exports.useStyles();
    var showTabs = !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerToolbar_1.default, { isLandscape: false, className: classes.toolbar },
            React.createElement(Grid_1.default, { container: true, justify: "center", wrap: "nowrap" },
                React.createElement(Grid_1.default, { item: true, container: true, xs: 5, justify: "flex-start", direction: "column" },
                    React.createElement("div", null,
                        React.createElement(ToolbarButton_1.default, { variant: "subtitle1", onClick: function () { return setOpenView('year'); }, selected: openView === 'year', label: utils.getYearText(date) })),
                    React.createElement("div", null,
                        React.createElement(ToolbarButton_1.default, { variant: "h4", onClick: function () { return setOpenView('date'); }, selected: openView === 'date', label: utils.getDateTimePickerHeaderText(date) }))))),
        showTabs && (React.createElement(DateTimePickerTabs_1.default, { dateRangeIcon: dateRangeIcon, timeIcon: timeIcon, view: openView, onChange: setOpenView }))));
};
