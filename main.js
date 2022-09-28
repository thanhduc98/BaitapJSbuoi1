// Bài 1 :Tính tiền lương nhân viên 
//input: Số ngày làm việc 
// gắn giá trị lương ngày và số ngày làm
var SalaryperDay = 100000;
var Workingday= 10;
// process :lấy đc input 
// tính lương = lấy số ngày làm * lương 1 ngày
var total = SalaryperDay * Workingday ;
 console.log(' tổng lương tháng = ', total);

//Bài 2: Tính giá trị trung bình 
// input: nhập vào 5 số thực
// 5 số thực = 3, 6, 9, 12, 15
// process: Lấy tổng 5 số vừa nhập chia cho 5
// output: giá trị trung bình tổng của 5 số 
var numb1 = 5;
var numb2 = 10;
var numb3 = 15;
var numb4 = 20;
var numb5 = 25;
// xử lý
// tính tổng 5 số thực rồi chia cho 5 có được gia trị trung bình 
var average = null;
var  average = (numb1 + numb2 + numb3 + numb4 + numb5) / 5;
// output giá trị trung bình 5 số thực
console.log("average =", average);

// Bài 3: Quy đổi tiền
// input
// gán giá trị 1 usd là 23500 và số usd quy đổi
const current = 23500;
var usd = 1;
var result = null;
//số VND nhận được bằng giá trị 1 usd nhân cho số usd quy đổi
result = usd * current;
// output số tiền vnd nhận được
console.log("result =", result, "vnd");

// Bài 4: Tính diện tích , chu vi hình chữ nhật 
// Gắn giá trị chiều dài và chiều rộng cho hình chữ nhật
var sum1 = 10;
var sum2 = 20;
// // xử lý chu vi bằng tổng chiều dài và chiều rộng nhân cho 2, diện tích bằng chiều dài nhân cho chiều rộng
var perimeter = (sum1 + sum2) * 2;
var area = sum1 * sum2;
// // output kết quả diện tích hình chữ nhật và chu vi hình chữ nhật
console.log('area = ' + area + ' ' +'perimeter = '+ perimeter);

//Bài 5: Tính tổng 2 ký số
//Gắn giá trị số có 2 chữ số 
var numb = 12;
// Xử lý tính số hàng đơn vị bằng cách chia numb cho 10 và giữ số dư 
// Lấy hàng chục : numb / 10 
// lấy hàng đơn vị :  numb % 10
//lấy tổng của số hàng đơn vị cộng với hàng chục 
var Dozens = Math.floor(numb / 10);
var Units = Math.floor(numb % 10);
var total = (numb % 10) + Math.floor(numb /10)
//output : tổng của 2 ký số vừa nhập 
console.log("total =", total);