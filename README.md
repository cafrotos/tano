# Tano
Ứng dụng quản lý chi tiêu cho các quý bà nội trợ

## Env
|Name|Description|
|----------|-------|
|Java|Oracle JVM 1.8|
|Node|v14|
|Package Control|Yarn|
|IDE|VSCode|
|Android Studio| Android API 29 (Andrdoi 10)|


## App Name
Ứng dụng quản lý chi tiêu cá nhân cho người nội trợ trong gia đình

## Users
Người nội trợ trong gia đình

## Ý tưởng
Ý tưởng ban đầu là sử áp dụng các phương pháp quản lý chi tiêu như phương pháp 50/20/30 và việc kê khai thu chi nhằm nâng cao khả năng quản lý và sử dụng nguồn tiền, giúp người dùng tạo thói quen về ghi chép thu chi, sử dụng ngân sách hợp lý và đồng thời nhắc nhở người dùng khi phát sinh những khoản chi tiêu bất thường.

## Giải quyết vấn đề:
  * Quản lý các khoản thu nhập:
    * Lương
    * Chu cấp
    * Thươngr
    * TIền lãi
    * Được tặng
    * Bán đồ
    * Thu Nhập khác
    * <Thêm khoản thu>
  * Quản lý các khoản chi
    * Ăn uống
    * Tiết kiệm
    * Hóa đơn và tiện ích
      * Thuê nhà
      * Hóa đơn điện/nước/ga/...
    * Di chuyển
      * Xăng/dầu
      * Bảo dưỡng xe
      * Gửi xe
    * Mua sắm
      * Các thiết bị điện tử
      * Quần áo/giày dép
    * Bạn bè/người yêu
    * Giải trí 
    * Sức khỏe
      * Thể thao
      * Khám chữa bệnh
    * Quà tặng/quyên góp
      * Cưới hỏi
      * Tang lễ
      * Từ thiện
    * Gia đình
      * Con cái
      * Sửa chữa nhà cửa
      * DV gia đình
      * Vật nuôi
    * Giáo dục
    * Đầu tư
    * Kinh doanh
    * Các chi phí khác
  * <Nhóm chi phí mới>
  * Quản lý các vay và cho Vay 
    * Thu nợ
    * Đi Vay
    * Cho vay
    * Trả nợ
  * Báo cáo thu nhập
  * Lập kế hoạch
    * Tạo khoản ngân sách(tạo mặc định theo kế hoạch 50/20/30)

## Concept ứng dụng
  * Quản lý tài chính dựa trên các phương pháp mặc định hoặc tư tạo:
    + Tạo ví
    + Chọn phương pháp (6 hũ, 50/30/20, khác)
  * Phương pháp 6 hũ :
    + Nhu cầu thiết yếu (55%): ăn uống, hóa đơn & tiện ích, mua sắm, sức khỏe, con cái, vật nuôi
    + Tiết kiệm dài hạn (10%): tiết kiệm
    + Giáo dục đào tạo (10%): sách vở, dụng cụ học tập, dịch vụ học tập
    + Hưởng thụ (10%): giải trí, 
    + Cho đi (5%): quà tặng & quyên góp
    + Quỹ tự do tài chính (10%): đầu tư, kinh doanh thụ động
  * Phương pháp 50/30/20
    + Nhu cầu (50%): ăn uống, hóa đơn & tiện ích, sức khỏe, con cái, vật nuôi, giáo dục & đào tạo
    + Mong muốn (30%): quà tặng & quyên góp, giải trí, đầu tư, kinh doanh thụ động, mua sắm
    + Tiết kiệm (20%): tiết kiệm
  * Tự thiết lập :
    + Ăn uống
		+ Tiết kiệm
    + Hóa đơn và tiện ích
      * Thuê nhà
      * Hóa đơn điện/nước/ga/...
    + Di chuyển
      * Xăng/dầu
      * Bảo dưỡng xe
      * Gửi xe
    + Mua sắm
      * Các thiết bị điện tử
      * Quần áo/giày dép
    + Bạn bè/người yêu
    + Giải trí 
    + Sức khỏe
      * Thể thao
      * Khám chữa bệnh
    + Quà tặng/quyên góp
      * Cưới hỏi
      * Tang lễ
      * Từ thiện
    + Gia đình
      * Con cái
      * Sửa chữa nhà cửa
      * DV gia đình
      * Vật nuôi
    + Giáo dục
    + Đầu tư
    + Kinh doanh
    + Các chi phí khác
    + <Nhóm chi phí mới>
    
## Chức năng chính
### 1. Đăng ký/đăng nhập
Sử dụng sđt/email/social network
### 2. Tạo ví, chọn phương pháp
### 3. Ghi chép giao dịch
Ghi chép các thông tin về giao dịch: số tiền, loại giao dịch(nhóm giao dịch: thu/chi), nội dung
### 4. Báo cáo
### 5. Lập kế hoạch(các sự kiện: )