# Tích hợp Jenkins với github để xây dựng và triển khai web trên môi trường windown
# 1. Chuẩn bị môi trường
## Cài đặt Jenkins trên máy chủ Windows bằng docker
### Bước 1: Cần cài đặt Docker trên máy chủ Windows của mình và Docker đã được khởi chạy.
### Bước 2: Mở cửa sổ Terminal hoặc Command Prompt trên máy tính của bạn và Sử dụng lệnh sau để tải Jenkins image từ Docker Hub như sau: "docker pull Jenkins/Jenkins : Its"
### Bước 3: Khi image đã được tải xuống, sử dụng lệnh sau để tạo một container Jenkins mới: "docker run -d -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts"
### Bước 4: Sau khi container được tạo, bạn có thể truy cập vào giao diện quản lý Jenkins bằng cách mở trình duyệt và truy cập vào địa chỉ: "http://localhost:8080."
### Bước 5: Trong trình duyệt, Jenkins sẽ yêu cầu bạn nhập mật khẩu khởi động. Để lấy mật khẩu này, sử dụng lệnh sau để xem log của container Jenkins: "docker logs <container_id>" 
### Bước 6: Dán mật khẩu giống hình ảnh dưới đây và khởi động vào trình duyệt và tiếp tục.
![demo](https://lh3.googleusercontent.com/GvoeOOMAawtHsaW-OWQVgryl-jWxnkWIzJQoNCK20DWVdueKIZwtiN4JAIrPjhZAcLIpYedPYYhWRSsYXTUP7wG0E8bNxD6P9p5CiKZ70eu_UQVnJ-wAnik9k2qLI1792yAOF4E4hw=w2400)
### Bước 7: Tiếp theo, Jenkins sẽ yêu cầu bạn cài đặt các plugin. Bạn có thể chọn cài đặt các plugin mặc định hoặc tùy chỉnh danh sách plugin. Sau khi cài đặt xong, bạn có thể tạo người dùng quản trị.
### Bước 8: Khi cài đặt hoàn tất, bạn sẽ được chuyển đến trang thông tin Jenkins. Bây giờ bạn có thể bắt đầu sử dụng Jenkins để tạo và quản lý các công việc.

# 2. Cài đặt và cấu hình cấu hình Ngrok
## 
# 3. Thiết lập quy trình CI
## Cấu hình jenkins để lấy mã nguồn từ kho github và tự động kích hoạt quy trình xây dựng khi có sự thay đổi trong mã nguồn

# 4. Thiết lập quy trình CD
## Cấu hình Jenkins để tự động triển khai sau khi quá trình xây dựng thành công
