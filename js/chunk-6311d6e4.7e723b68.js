(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6311d6e4"],{"329a":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Row Style")]),t("Explain"),t("RowStripe"),t("HoverHighlight"),t("ClickHighlight"),t("API",{attrs:{title:"API",anchor:"API",desc:"rowStyleOption 行样式配置"}})],1)},o=[],a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、Set the style of the row through the property "),t("code",[e._v("rowStyleOption")]),t("br"),e._v(" 2、Enable the row stripes effect through the attribute "),t("code",[e._v("stripe=true")]),t("br"),e._v(" 3、Enable the row hover highlight effect through the attribute "),t("code",[e._v("hoverHighlight=true")]),e._v(". Default on"),t("br"),e._v(" 4、Enable the row click highlight effect through the attribute "),t("code",[e._v("clickHighlight=true")]),e._v(". Default on")])])])}],l=t("2877"),d={},c=Object(l["a"])(d,a,i,!1,null,null,null),s=c.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Row Stripe",fileName:"row-stripe.md"}}),t("demo-block",[t("div",[t("p",[e._v("Enable the row stripe with attribute "),t("code",[e._v("stripe")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table :row-style-option="rowStyleOption" :columns="columns" :table-data="tableData" />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    stripe: true,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"row-style-option":e.rowStyleOption,columns:e.columns,"table-data":e.tableData}})],1)]],2)},n=[],t={data:function(){return{rowStyleOption:{stripe:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return y({render:e,staticRenderFns:n},t)}()}},p=m,f=Object(l["a"])(p,h,u,!1,null,null,null),w=f.exports,v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Row Hover Highlight",fileName:"hover-highlight.md"}}),t("demo-block",[t("div",[t("p",[e._v("The default row hover highlight is on")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table :row-style-option="rowStyleOption" :columns="columns" :table-data="tableData" />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    hoverHighlight: true,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var _={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"row-style-option":e.rowStyleOption,columns:e.columns,"table-data":e.tableData}})],1)]],2)},n=[],t={data:function(){return{rowStyleOption:{hoverHighlight:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return C({render:e,staticRenderFns:n},t)}()}},S=_,A=Object(l["a"])(S,v,O,!1,null,null,null),N=A.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Row Click highlight",fileName:"click-highlight.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、By default, line click highlight is on, Must set "),t("code",[e._v("row-key-field-name")]),t("br"),e._v("2、You can set the highlighted row through the "),t("code",[e._v("setHighlightRow")]),e._v(" instance method")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <button class="button-demo" @click="setHighlightRow(1002)">Highlight Row 2</button>\n        <br />\n        <br />\n        <ve-table\n            ref="tableRef"\n            :row-style-option="rowStyleOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    clickHighlight: true,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // set highlight row\n            setHighlightRow(rowKey) {\n                this.$refs["tableRef"].setHighlightRow({ rowKey: rowKey });\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},D=[];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var R={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(n){return e.setHighlightRow(1002)}}},[e._v("Highlight Row 2")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("ve-table",{ref:"tableRef",attrs:{"row-style-option":e.rowStyleOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{rowStyleOption:{clickHighlight:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{setHighlightRow:function(e){this.$refs["tableRef"].setHighlightRow({rowKey:e})}}};return H({render:e,staticRenderFns:n},t)}()}},E=R,J=Object(l["a"])(E,K,D,!1,null,null,null),B=J.exports,I=t("acf0"),$={name:"basic-main",components:{Explain:s,RowStripe:w,HoverHighlight:N,ClickHighlight:B,API:I["a"]}},q=$,z=Object(l["a"])(q,r,o,!1,null,null,null);n["default"]=z.exports},acf0:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.rowStyleOption.data,columns:e.db.rowStyleOption.columns}})],1)},o=[],a=t("3ef3"),i=t("7eb4"),l={components:{tpl:a["a"]},props:{anchor:{type:String,default:"Row style configuration"},desc:{type:String,default:"rowStyleOption"}},data:function(){return{db:i["a"]}}},d=l,c=t("2877"),s=Object(c["a"])(d,r,o,!1,null,null,null);n["a"]=s.exports}}]);
//# sourceMappingURL=chunk-6311d6e4.7e723b68.js.map