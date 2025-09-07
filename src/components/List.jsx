const ArduinoBoard = [
    {
        id: '1.1',
        name: "Mạch phát triển Teensy 4.1 (Arduino Compatible)",
        price: "1.269.000₫",
        description: 'Mạch phát triển Teensy 4.1 (Arduino Compatible) sử dụng vi điều khiển ARM Cortex-M7 600MHz...',
        Image: "https://bizweb.dktcdn.net/100/522/662/products/teensy-4-1-1.jpg?v=1754289201183"
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
        Image: "https://bizweb.dktcdn.net/100/522/662/products/38f90a6b-a55f-b4d2b37e7c1a-1-201-a.jpg?v=1744301334763"
    },
    {
        id: '1.4',
        name: "Arduino Ethernet Shield 2 (Made in Italy)",
        price: "1.199.000₫",
        description: 'Arduino Ethernet Shield 2 chính hãng cho phép kết nối Arduino với mạng Ethernet...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/ethshield2.jpg?v=1744280145957"
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
        Image: "https://bizweb.dktcdn.net/100/522/662/products/5-1-xiao-esp32s3-sense-feature-2.jpg?v=1731597572090"
    },
    ];
const ArduinoShield = [
    {
        id: '2.1',
        name: "Arduino Ethernet Shield 2 chính hãng (Original - Made in Italy)",
        price: "945.000₫",
        description: '  Arduino Ethernet Shield 2 chính hãng cho phép kết nối Arduino với mạng Ethernet...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/ethshield2.jpg?v=1744280145957",
    },
    {
        id: '2.2',
        name: "Mạch MakerEdu Shield for Vietduino",
        price: "115.000₫",
        description: 'Mạch MakerEdu Shield for Vietduino là một bo mở rộng được thiết kế dành riêng cho các bo mạch vi điều khiển của Vietduino...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/makeredu-shield-for-vietduino-1.jpg?v=1671126485370",
    },
    {
        id: '2.3',
        name: "Mạch DMX Shield (Arduino Compatible)",
        price: "550.000₫",
        description: 'Mạch DMX Shield (Arduino Compatible) là một bo mở rộng cho các bo mạch Arduino, cho phép giao tiếp với các thiết bị sử dụng giao thức DMX512...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/grove-base-shield-v2-1.jpg?v=1671126595370",
    },
    {
        id: '2.4',
        name: "Mạch GSM GPRS SIM800DS Shield (Arduino Compatible)",
        price: "265.000₫",
        description: 'Mạch GSM GPRS SIM800DS Shield (Arduino Compatible) là một bo mở rộng cho các bo mạch Arduino, cho phép giao tiếp với mạng di động GSM/GPRS...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/sim800ds-shield-1.jpg?v=1671126625370",
    },
    {
        id: '2.5',
        name: "Mạch Grove Base Shield V2 (Arduino Compatible)",
        price: "135.000₫",
        description: 'Mạch Grove Base Shield V2 (Arduino Compatible) là một bo mở rộng cho các bo mạch Arduino, cung cấp giao diện kết nối dễ dàng với các cảm biến và mô-đun Grove...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/grove-base-shield-v2-1.jpg?v=1671126595370",
    },
];
const PhụkiệnArduino = [
    {
        id: '3.1',
        name: "Pin dự phòng USB-C 5VDC 2A 5000mAh Mini Power Bank",
        price: "145.000₫",
        description: 'Pin dự phòng USB-C 5VDC 2A 5000mAh Mini Power Bank là một thiết bị nhỏ gọn và tiện lợi để sạc các thiết bị di động của bạn khi đang di chuyển...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/pin-du-phong-usb-c-5vdc-2a-5000mah-mini-power-bank-1.jpg?v=1671126655370",
    },
    {
        id: '3.2',
        name: "Vỏ Mica Arduino Uno Acrylic Case (Trong Suốt)",
        price: "75.000₫",
        description: 'Vỏ Mica Arduino Uno Acrylic Case (Trong Suốt) là một vỏ bảo vệ được làm từ chất liệu mica trong suốt, thiết kế dành riêng cho bo mạch Arduino Uno...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/vo-mica-arduino-uno-acrylic-case-trong-suot-1.jpg?v=1671126685370",
    },
    ];
const JetsonNano = [
    {
        id: '4.1',
        name: "Máy tính nhúng AI NVIDIA Jetson AGX Orin 64GB Developer Kit (275 TOPS)",
        price: "59.990.000₫",
        description: 'Máy tính nhúng AI NVIDIA Jetson AGX Orin 64GB Developer Kit là một nền tảng phát triển mạnh mẽ được thiết kế để xây dựng các ứng dụng trí tuệ nhân tạo và máy học...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/nvidia-jetson-agx-orin-64gb-developer-kit-1.jpg?v=1671126715370",
    },
    {
        id: '4.2',
        name: "UGV Rover Open-Source 6 Wheels 4WD AI Robot For Jetson Orin Series Boards",
        price: "9.720.000₫",
        description: 'UGV Rover Open-Source 6 Wheels 4WD AI Robot For Jetson Orin Series Boards là một robot di động có khả năng tự động di chuyển và thực hiện các nhiệm vụ thông minh...',
        Image: "https://bizweb.dktcdn.net/thumb/large/100/522/662/products/ugv-rover-open-source-6-wheels-4wd-ai-robot-for-jetson-orin-series-boards-1.jpg?v=1671126745370",
    },
];
const sanpham = [
    ...ArduinoBoard,
    ...ArduinoShield,
    ...PhụkiệnArduino,
    ...JetsonNano,
];


export default sanpham;