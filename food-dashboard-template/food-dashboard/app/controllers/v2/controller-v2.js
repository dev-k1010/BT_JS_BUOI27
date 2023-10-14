let getData = (idValue) => document.getElementById(idValue).value;

// DOM thông tin từ HTML v
export let layThongTinForm = () => {
  let ma = getData("foodID");
  let ten = getData("tenMon");
  let loai = getData("loai");
  let gia = getData("giaMon");
  let tinhTrang = getData("tinhTrang");
  let khuyenMai = getData("khuyenMai");
  let moTa = getData("moTa");
  let hinhAnh = getData("hinhMon");
  return { ma, ten, loai, gia, tinhTrang, khuyenMai, moTa, hinhAnh };
};
// Loading data
export let renderFoodList = (foodArr) => {
  let contentHTML = "";
  foodArr.forEach((food) => {
    let { ma, ten, loai, gia, tinhTrang, khuyenMai, moTa, hinhAnh } = food;
    let trString = `<tr> 
                            <td>${ma}</td> 
                            <td>${ten}</td> 
                            <td>${loai}</td> 
                            <td>${gia}</td> 
                            <td>${khuyenMai}</td> 
                            <td>0</td> 
                            <td>${tinhTrang}</td> 
                            <td>
                            <button onclick="deleteFood(${ma})" type="button" class="btn btn-primary">Delete</button>
                            <button onclick="editFood(${ma})" type="button" class="btn btn-warning">Edit</button>
                          
                            </td>
                            
                </tr>`;
    contentHTML = contentHTML + trString;
  });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};
// Show data
const monChay = "loai1";
const chay = true;
const monMan = "loai2";

// tinh trang
const con = true;
const conMon = "1";
const hetMon = "0";
export function showData(product) {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh } = product;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == chay ? monChay : monMan;
  document.getElementById("giaMon").value = gia;
  document.getElementById("tinhTrang").value =
    tinhTrang == con ? conMon : hetMon;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("moTa").value = moTa;
  document.getElementById("hinhMon").value = hinhAnh;
}

// validate
function validateUndefire() {}
