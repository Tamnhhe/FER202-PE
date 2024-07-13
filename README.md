Cách sử dụng nhiều project chung 1 file node_modules

Bước  1: Tạo 1 Folder tổng(ex:FER202_PE_Project)

Bước 2: Tạo 1 file package.json ở thư mục gốc

###################################

{
  "private": true,
  "workspaces": ["packages/*"]
}

###################################

Bước 3: Tạo 1 folder tên packages

Bước 4: Đưa tất cả project giống đường dẫn sau

###################################

FER202_PE_Project/
├── package.json
└── packages/
    ├── project1/
    │   ├── node_modules/
    │   ├── package.json
    │   ├── public/
    │   └── src/
    └── project2/
        ├── node_modules/
        ├── package.json
        ├── public/
        └── src/

###################################

Bước 5: Vào thư mục chứa đường dẫn gốc và mở CMD chạy lệnh 'yarn'

ví dụ: D:\FPT\NodeJS\FER202\FER202_PE_Project>yarn

Xin cảm ơn
