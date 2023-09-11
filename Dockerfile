# Sử dụng hình ảnh chứa Node.js làm cơ sở
FROM node:14

# Đặt thư mục làm việc mặc định trong container
WORKDIR /app

# Sao chép các tệp package.json và package-lock.json vào thư mục /app trong container
COPY package*.json ./

# Cài đặt các dependencies của ứng dụng
RUN npm install

# Sao chép tất cả các tệp từ thư mục gốc của dự án vào /app trong container
COPY . .

EXPOSE 3000

# Chạy ứng dụng React
CMD ["npm", "start"]
