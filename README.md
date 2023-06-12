# Tích hợp Jenkins với github để xây dựng và triển khai web trên môi trường windown
# 1. Chuẩn bị môi trường
## Bước 1: Cần cài đặt Docker trên máy chủ Windows của mình và Docker đã được khởi chạy.
## Bước 2: Mở cửa sổ Terminal hoặc Command Prompt trên máy tính của bạn và Sử dụng lệnh sau để tải Jenkins image từ Docker Hub như sau: "docker pull Jenkins/Jenkins : Its"
## Bước 3: Khi image đã được tải xuống, sử dụng lệnh sau để tạo một container Jenkins mới: "docker run -d -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts"
## Bước 4: Sau khi container được tạo, bạn có thể truy cập vào giao diện quản lý Jenkins bằng cách mở trình duyệt và truy cập vào địa chỉ: "http://localhost:8080."
## Bước 5: Trong trình duyệt, Jenkins sẽ yêu cầu bạn nhập mật khẩu khởi động. Để lấy mật khẩu này, sử dụng lệnh sau để xem log của container Jenkins: "docker logs <container_id>" 
## Bước 6: Dán mật khẩu giống hình ảnh dưới đây và khởi động vào trình duyệt và tiếp tục.
![demo](https://lh3.googleusercontent.com/GvoeOOMAawtHsaW-OWQVgryl-jWxnkWIzJQoNCK20DWVdueKIZwtiN4JAIrPjhZAcLIpYedPYYhWRSsYXTUP7wG0E8bNxD6P9p5CiKZ70eu_UQVnJ-wAnik9k2qLI1792yAOF4E4hw=w2400)
### Bước 7: Tiếp theo, Jenkins sẽ yêu cầu bạn cài đặt các plugin. Bạn có thể chọn cài đặt các plugin mặc định hoặc tùy chỉnh danh sách plugin. Sau khi cài đặt xong, bạn có thể tạo người dùng quản trị.
### Bước 8: Khi cài đặt hoàn tất, bạn sẽ được chuyển đến trang thông tin Jenkins. Bây giờ bạn có thể bắt đầu sử dụng Jenkins để tạo và quản lý các công việc.
![demo](https://lh3.googleusercontent.com/0Hl1LxjsvmedJQuU7z8j4XvpDMFMsDUQAEg04lxrX5CcGNAm0o0WoUHhbPJ_WVwaZJTHFIi_KgD5UrXyWnmxl6MELc_17gd0wUwY6-f53Tq1ynqx-nI0KqbjVwcMMJwVjDNa6y9rIA=w2400)
# 2. Cài đặt và cấu hình cấu hình Ngrok
## Bước 1: Vào trang chủ của Ngrok để đăng ký tài khoản để nó cung cấp mã xác thực sau đó chọn phiên bản cài đặt Ngrok
![demo](https://lh3.googleusercontent.com/hnlO-l6EomJUyCGMpqg_F-xyc2nk9pASZ6z781WURPAdxCK6RIUPM-B2vEaolCKOnskYeGvTPLMI_V5cHxRlGvthlDa5theoUqcDz0hHq0ucv_TL2QoxaLMqYQzug7BSmEiREPuiSQ=w2400)
## Bước 2: Giải nén file vừa download về tôi sẽ mở Terminal trên ổ đĩa chứa file Ngrok sau đó chạy lệnh “ngrok config add-authtoken 2Px7IsirCSMph19Y2A7Rjd0TNFy_7pJzo8Uh2eUpJKHDQi5E4” để nó dùng mã xác thực kết nối đến tài khoản của bạn, niếu nó báo “Authtoken saved to configuration file” là đã kết nối thành công
![demo](https://lh3.googleusercontent.com/t4wbbd67SUl9SYSmu92-SHlvFnq5ygEaC2WmaOUD_ePuiluLNMvtYgwklpyLj9dyAnhrzLZTeAq-Ozklkr3ndcydp4rWI0eHAYXlRrQSA1gRno42Wcoj_EBVBUYeiS-EdzduCWUaDQ=w2400)
## Bước 3: Cuối cùng tôi sẽ chạy lệnh “Ngrok http 8080” để nó ra URL public ở Locallhost 8080 và nó sẽ tạo một cái Public URL như này:
![demo](https://lh3.googleusercontent.com/zk29fTg_dG1xp_3-XOvh2qaWBIb9-DX2sZqbxPuSOMJCoNK7n_uXmLjB9KBcDeLAVtLhfPAyqXOfKRjPOxjtkdv6SM62iTnRrl2MRm0VWNoVcboFJ8TgAtvFXfsOMxeKZEwk6-lEmA=w2400)
# 3. Thiết lập quy trình CI
## Cấu hình jenkins để lấy mã nguồn từ kho github và tự động kích hoạt quy trình xây dựng khi có sự thay đổi trong mã nguồn
### Bước 1: Tạo một dự án mới trong Jenkins bằng cách nhấp vào “New item” trên giao diện chính. Đặt tên cho công việc và chọn “Freestyle project” 
### Bước 2: Cấu hình kết nối với kho Github bằng cách tìm phần source code management và chọn git. Nhập URL kho Github của bạn vào trường “Repository URL
![demo](https://lh3.googleusercontent.com/AuuR1aVUll69zy5k9S-cvZx8C0f7VKRSlG7-768TxXpJ-bO-Gua7FRj5g0vwJUBKHN4DmufBBzDNEpsrgnp2SXGISObUrIq_M2ShxCNAomFqXTVjdDitnpySG1hIxzB-M8JQ4t0XBA=w2400)
### Bước 3: Thiết lập xây dựng tự động bằng cách tìm phần Buid Triggers và chọn Github hook trigger for GITScm polling. Điều này sẽ cho phép Jenkins tự động kích hoạt quy trình xây dựng khi có sự thay đổi trong mã nguồn trên Github
![demo](https://lh3.googleusercontent.com/rf-bKJDXPA4uJ-MeW8zRIndFXW2CHjo0yOl4qqEL-us2Vqa38th8OglX8zjSiTfzEqOv5yUbEzsHqFhLJOC9qB54yr1hWoEtT0Q7CAT20kybDE_LO0RB3_V2BrKJDTAY3V1hSvFERA=w2400)
### Bước 4: Lưu dự án và chạy thử bằng cách nhấp vào nút Save để lưu dự án. Bạn có thể chạy thử công việc bằng cách nhấp vào nút Buid Now hoặc đợi cho đến khi có sự thay đổi trong mã nguồn để Jenkins tự động kích hoạt quy trình xây dựng
# 4. Thiết lập quy trình CD
## Cấu hình Jenkins để tự động triển khai sau khi quá trình xây dựng thành công
### Bước 1: Sau khi đã tạo new repository trên github, thì bây giờ tôi sẽ sử dụng repository mới tạo để kết nối tới Visual Studio Code và sẽ tiến hành viết mã nguồn của trang web trong repository mới tạo 
### Bước 2: Sau khi đã viết mã nguồn của trang web xong thì tôi sẽ sử dụng các câu lệnh của Git để đẩy mã nguồn lên repository trên Github như là: 
- Câu lệnh "git add ." được sử dụng để thêm tất cả các thay đổi trong thư mục làm việc hiện tại vào vùng staging của Git.
- Câu lệnh "git branch -m master": được sử dụng để đổi tên của một nhánh trong repository Git. Tôi sẽ sử dụng nhánh master để nó có thể tích hợp được trong dự án của jenkins bởi vì trong dự án của jenkins nó thuộc nhánh master 
- Câu lệnh "git commit -m <message>": được sử dụng để tạo một commit mới trong repository Git.
- Câu lệnh "git status": được sử dụng để kiểm tra trạng thái hiện tại của repository Git.
- Câu lệnh "git push -u origin master": được sử dụng để đẩy (push) các commit đã thực hiện lên một nhánh cụ thể trong repository từ máy cục bộ của bạn lên remote repository.
### Bước 3: Sau khi đã sử dụng các câu lệnh git để đẩy mã nguồn lên repository, thì tôi sẽ vào phần webhook để kiểm tra nó đã đóng gói mã nguồn để gửi request đến Jenkins chưa, niếu có tích xanh như hình ảnh bên dưới là nó đã gửi thành công 
![demo](https://lh3.googleusercontent.com/Xtsvayc7PMXF1g_w260lg10x1rdkR1bUAmW9VZ5rIrKETfDHXN9BwwllDNU75XKNMFMa5kQKGj1qiuNt0ajlgd0lNWPLvYJMFZ71xkSVDvjiGepwDLBuH5bpY9fbzbu5ljO8prawCg=w2400)
### Bước 4: Sau đó, vào dự án mới tạo trong jenkins và chọn Buid Now để kiểm tra nó đã dựng thành công chưa, thì hãy kiểm tra ở mục Buid history niếu có tích xanh ở mục kèm theo số thứ tự và ngày giờ đã được dựng là đã thành công
![demo](https://lh3.googleusercontent.com/Uo96_rVf-7uNWcLMvZb-rB0UWYyQ5vQvsNpqeH8p5MajGCD86qDyYrauoczLVQ_wkM0_3DnuCWHn3Q2Hn64sKhL9tj3hEPS1uNLMiE3vjiUvYkL-Dct6WBme7sx8CUizKtbvFcLx-w=w2400)
### Bước 5: Để theo dõi quá trình triển khai của dự án trong Jenkins thì chọn mục Github hook log thì nó sẽ ra ngày và giờ nó được triển khai
![demo](https://lh3.googleusercontent.com/WprfZ3iLYTvY7NQoPZnG_VmP2eAtByTSv-xftDsBjUuy7WTWBQknxtIF4B9ErSuPdgKEc4QvgvHOZsNEJAh_NrOkuFYLeEO8ciLKpTgE9v25fXXFuSTQ8bxumiNSeyzvHySZJXuScQ=w2400)
  
  
  


