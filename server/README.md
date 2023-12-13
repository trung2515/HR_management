# Human Resources Management System

## Giới Thiệu

Dự án Quản lý Nhân sự là một ứng dụng full-stack được xây dựng bằng React (TypeScript), Node.js (Express), và Sequelize cho quản lý dữ liệu cơ sở dữ liệu.

## Yêu Cầu Hệ Thống

1. [Node.js](https://nodejs.org/) - phiên bản 16.x hoặc cao hơn.
2. [npm](https://www.npmjs.com/) - quản lý gói phụ thuộc JavaScript.

## Cài Đặt

1. **Clone Repository:**

    ```bash
    git clone https://github.com/trung2515/HR_management
    ```

2. **Cài Đặt Dependencies Client:**

    ```bash
    # Trong thư mục gốc
    cd .\client\
    `npm install`
    ```
3. **Cài Đặt Dependencies Server:**

    ```bash
    # Trong thư mục gốc
    cd .\server\
    `npm install`
    ```

4. **Cấu Hình Database:**

    - Tạo một cơ sở dữ liệu MySQL.
    - Điều chỉnh thông tin cấu hình cơ sở dữ liệu trong file `config/config.json và config/config.ts`.

4. **Chạy Migration và Seed:**

    ```bash
    `npm run migrate-cli` nếu là lần đầu tiên migrate
    `npm run migrate`  || npx sequelize db:migrate
    `npm run seed`     || npx sequelize db:seed:all
    ```

5. **Chạy Ứng Dụng:**

    ```bash
    cd .\client\
    `npm start`
    Ứng dụng sẽ chạy tại [http://localhost:4001](http://localhost:4001).

    cd .\server\
    `npm start`
    Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000).
    ```
## Sử Dụng

- Mở trình duyệt và truy cập [http://localhost:4001](http://localhost:4001).
- Đăng nhập với tài khoản mặc định sau khi seed `admin@gmail.com ~ 123`. hoặc tạo mới tài khoản tại api `http://localhost:3000/api/auth/register`
- Quản lý nhân sự, phòng ban, chức vụ, v.v.
- tài liệu api tại postman `https://orange-meadow-264896.postman.co/workspace/Team-Workspace~f62cabe6-b95d-4a4a-81ba-5bf[…]-4eed-941e-0098d714b5bb?action=share&creator=26214427`
## Cộng Tác

Nếu bạn phát hiện lỗi hoặc có đề xuất cải tiến, hãy tạo một [issue](https://github.com/trung2515/HR_management/issues) hoặc gửi pull request.

## Giấy Phép

[MIT License](LICENSE)
