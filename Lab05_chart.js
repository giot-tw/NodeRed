[{
    "id": "854717e9.a75808",
    "type": "mqtt in",
    "z": "76bc7ca.d2f0484",
    "name": "mqtt sub",
    "topic": "#",
    "qos": "2",
    "broker": "36f6941.620886c",
    "x": 190.20001220703125,
    "y": 168,
    "wires": [
        ["4aab016c.0546e", "30d8874e.615058", "25f915a9.daaf6a"]
    ]
}, {
    "id": "4aab016c.0546e",
    "type": "debug",
    "z": "76bc7ca.d2f0484",
    "name": "All json",
    "active": false,
    "console": "false",
    "complete": "payload",
    "x": 456.2000274658203,
    "y": 168,
    "wires": []
}, {
    "id": "c9988170.80367",
    "type": "function",
    "z": "76bc7ca.d2f0484",
    "name": "payload.data2ACSII",
    "func": "function hex2a(hexx) {\n    var hex = hexx.toString();//force conversion\n    var str = '';\n    for (var i = 0; i < hex.length; i += 2)\n        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));\n    return str;\n}\nvar payload = msg.payload[0];\nmsg.payload = hex2a(payload.data);\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 577.2000274658203,
    "y": 219,
    "wires": [
        ["ce830adf.161508", "b74339cd.c8ab78"]
    ]
}, {
    "id": "25f915a9.daaf6a",
    "type": "json",
    "z": "76bc7ca.d2f0484",
    "name": "",
    "x": 399.2000274658203,
    "y": 219,
    "wires": [
        ["c9988170.80367"]
    ]
}, {
    "id": "ce830adf.161508",
    "type": "debug",
    "z": "76bc7ca.d2f0484",
    "name": "json debug",
    "active": true,
    "console": "false",
    "complete": "payload",
    "x": 790.2000274658203,
    "y": 218,
    "wires": []
}, {
    "id": "fd046fdc.0270c",
    "type": "comment",
    "z": "76bc7ca.d2f0484",
    "name": "GIoT private MQTT Flow",
    "info": "",
    "x": 223.20001220703125,
    "y": 127,
    "wires": []
}, {
    "id": "b74339cd.c8ab78",
    "type": "ui_chart",
    "z": "76bc7ca.d2f0484",
    "name": "",
    "group": "af46de1a.49f0d",
    "order": 0,
    "width": 0,
    "height": 0,
    "label": "chart",
    "chartType": "line",
    "legend": "false",
    "xformat": "HH:mm:ss",
    "interpolate": "linear",
    "nodata": "",
    "ymin": "",
    "ymax": "",
    "removeOlder": "5",
    "removeOlderPoints": "",
    "removeOlderUnit": "60",
    "cutout": 0,
    "x": 780.5000152587891,
    "y": 291.40003967285156,
    "wires": [
        [],
        []
    ]
}, {
    "id": "36f6941.620886c",
    "type": "mqtt-broker",
    "z": "",
    "broker": "10.6.1.28",
    "port": "1883",
    "clientid": "",
    "usetls": false,
    "compatmode": true,
    "keepalive": "60",
    "cleansession": true,
    "willTopic": "",
    "willQos": "0",
    "willPayload": "",
    "birthTopic": "",
    "birthQos": "0",
    "birthPayload": ""
}, {
    "id": "af46de1a.49f0d",
    "type": "ui_group",
    "z": "",
    "name": "Default",
    "tab": "d448a83f.8175c8",
    "disp": true,
    "width": "6"
}, {
    "id": "d448a83f.8175c8",
    "type": "ui_tab",
    "z": "",
    "name": "Home",
    "icon": "dashboard"
}]
