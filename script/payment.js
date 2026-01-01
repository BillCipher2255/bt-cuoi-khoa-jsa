window.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff3f81,       // Màu hồng (giống ảnh mẫu)
        backgroundColor: 0x1a1a1a, // Màu nền tối (khớp với web của bạn)
        points: 12.00,
        maxDistance: 20.00,
        spacing: 16.00
    })
})