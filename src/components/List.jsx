const ArduinoBoard = [
    {
        id: '1.1',
        name: "Mạch phát triển Teensy 4.1 (Arduino Compatible)",
        price: "1.269.000₫",
        description: 'Mạch phát triển Teensy 4.1 (Arduino Compatible) sử dụng vi điều khiển ARM Cortex-M7 600MHz...',
        Image: "https://tse4.mm.bing.net/th/id/OIP.-PvXmei0sXg9ws_cetqsigHaFZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: '1.2',
        name: "Mạch phát triển Teensy 4.0 (Arduino Compatible)",
        price: "1.069.000₫",
        description: 'Mạch phát triển Teensy 4.0 (Arduino Compatible) sử dụng vi điều khiển ARM Cortex-M7 600MHz...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/teensy-4-0-1.jpg?v=1754286618733"
    },
    {
        id: '1.3',
        name: "Arduino Opta RS485 microPLC (Made in Italy)",
        price: "5.499.000₫",
        description: 'Arduino Opta RS485 microPLC là một bộ điều khiển lập trình nhỏ gọn...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/38f4e038-b411-4a6b-a55f-b4d2b37e7c1a-1-201-a.jpg?v=1744301334763"
    },
    {
        id: '1.4',
        name: "Arduino Ethernet Shield 2 (Made in Italy)",
        price: "1.199.000₫",
        description: 'Arduino Ethernet Shield 2 chính hãng cho phép kết nối Arduino với mạng Ethernet...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/c2cbcbce-14a6-4eb3-8e8c-d5818845c886-1-201-a.jpg?v=1744280145957"
    },
    {
        id: '1.5',
        name: "Arduino UNO R4 Minima (Made in Italy)",
        price: "899.000₫",
        description: 'Arduino UNO R4 Minima là phiên bản nhỏ gọn của Arduino UNO R4...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/img-7150.jpg?v=1743826604133"
    },

    {
        id: '1.6',
        name: "Mạch Seeed Studio XIAO ESP32S3 Sense",
        price: "329.000₫",
        description: 'Mạch Seeed Studio XIAO ESP32S3 Sense tích hợp Wi-Fi, BLE, camera OV2640 và microphone...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/5-113991115-xiao-esp32s3-sense-feature-2.jpg?v=1731597572090"
    },
    ];
const ArduinoShield = [
    {
        id: '2.1',
        name: "Arduino Ethernet Shield 2 chính hãng (Original - Made in Italy)",
        price: "945.000₫",
        description: '  Arduino Ethernet Shield 2 chính hãng cho phép kết nối Arduino với mạng Ethernet...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/c2cbcbce-14a6-4eb3-8e8c-d5818845c886-1-201-a.jpg?v=1744280145957",
    },
    {
        id: '2.2',
        name: "Mạch MakerEdu Shield for Vietduino",
        price: "115.000₫",
        description: 'Mạch MakerEdu Shield for Vietduino là một bo mở rộng được thiết kế dành riêng cho các bo mạch vi điều khiển của Vietduino...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/z6750814416625-782bf2aeaca1fdb56fdeec89320d8309-1.jpg?v=1751094803103",
    },
    {
        id: '2.3',
        name: "Mạch DMX Shield (Arduino Compatible)",
        price: "550.000₫",
        description: 'Mạch DMX Shield (Arduino Compatible) là một bo mở rộng cho các bo mạch Arduino, cho phép giao tiếp với các thiết bị sử dụng giao thức DMX512...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/dsc0885-7c9134b4722c41f89bbf977006fe0e0a-1024x1024-jpeg.jpg?v=1723048191327",
    },
    {
        id: '2.4',
        name: "Mạch GSM GPRS SIM800DS Shield (Arduino Compatible)",
        price: "265.000₫",
        description: 'Mạch GSM GPRS SIM800DS Shield (Arduino Compatible) là một bo mở rộng cho các bo mạch Arduino, cho phép giao tiếp với mạng di động GSM/GPRS...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/arduino-gsm-gprs-sim800ds-shield-f1510ec8235241838f8b7b248757b3d6-5c1d760c-e5f2-44c6-91e8-caf2dd35da15-a3ee2eb1-f2fa-42b1-8f36-44eb8ee3a0ce-c830593e-2908-489d-8ca4-cb1e05f9240d.jpg?v=1723030741317",
    },
    {
        id: '2.5',
        name: "Mạch Grove Base Shield V2 (Arduino Compatible)",
        price: "135.000₫",
        description: 'Mạch Grove Base Shield V2 (Arduino Compatible) là một bo mở rộng cho các bo mạch Arduino, cung cấp giao diện kết nối dễ dàng với các cảm biến và mô-đun Grove...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/grove-base-shield-v2-3-29b61f0e6f934964bdbe86315935a651-f2013bba-3825-4ba2-895a-2edf9f099ad0-2eaea9c1-e5ba-43d3-9da5-287a143bde05.jpg?v=1723030635010",
    },
];
const PhụkiệnArduino = [
    {
        id: '3.1',
        name: "Pin dự phòng USB-C 5VDC 2A 5000mAh Mini Power Bank",
        price: "145.000₫",
        description: 'Pin dự phòng USB-C 5VDC 2A 5000mAh Mini Power Bank là một thiết bị nhỏ gọn và tiện lợi để sạc các thiết bị di động của bạn khi đang di chuyển...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/0b7be0e6-b998-4baf-970c-20ceee774453-1-201-a-2bb1fb900d7648fbb2ea95d3825fe2c0-00cbe267-ec3f-42e7-8593-0a1283db582f-507aec38-f653-43e2-a918-f1355a31748f.jpg?v=1723031110410",
    },
    {
        id: '3.2',
        name: "Vỏ Mica Arduino Uno Acrylic Case (Trong Suốt)",
        price: "75.000₫",
        description: 'Vỏ Mica Arduino Uno Acrylic Case (Trong Suốt) là một vỏ bảo vệ được làm từ chất liệu mica trong suốt, thiết kế dành riêng cho bo mạch Arduino Uno...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/arduino-uno-r3-case-71593b9b-e55f-455b-a26c-dccd5337d471-f956cab8-f68c-41c2-aa49-bd260480a8f7.jpg?v=1723030606620",
    },
    ];
const JetsonNano = [
    {
        id: '4.1',
        name: "Máy tính nhúng AI NVIDIA Jetson AGX Orin 64GB Developer Kit (275 TOPS)",
        price: "59.990.000₫",
        description: 'Máy tính nhúng AI NVIDIA Jetson AGX Orin 64GB Developer Kit là một nền tảng phát triển mạnh mẽ được thiết kế để xây dựng các ứng dụng trí tuệ nhân tạo và máy học...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/nvidia-jetson-agx-orin-64gb-275-tops.jpg?v=1757047487423",
    },
    {
        id: '4.2',
        name: "UGV Rover Open-Source 6 Wheels 4WD AI Robot For Jetson Orin Series Boards",
        price: "9.720.000₫",
        description: 'UGV Rover Open-Source 6 Wheels 4WD AI Robot For Jetson Orin Series Boards là một robot di động có khả năng tự động di chuyển và thực hiện các nhiệm vụ thông minh...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/ugv-rover-pt-jetson-orin-ai-kit-acce-1.jpg?v=1731902130860",
    },
    {
        id:'4.3',
        name:"JetRacer Professional Version ROS AI Kit, Lidar Mapping, Vision Processing Powered by Jetson Nano",
        price:"8.100.000₫",
        description: "",
        Image:"https://bizweb.dktcdn.net/100/522/662/products/jetracer-ros-ai-kit-1-1-a1ac567e8b544e04ade26504138701b1-158fa756-2d7c-4cf6-9f9e-adfae7399b6c-db2e189b-7e65-4166-bd18-db46cc4c72f5.jpg?v=1723031018143",
    },
];
const sanpham = [
    ...ArduinoBoard,
    ...ArduinoShield,
    ...PhụkiệnArduino,
    ...JetsonNano,
];


export default sanpham;