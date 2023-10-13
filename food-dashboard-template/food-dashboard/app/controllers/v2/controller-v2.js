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
export function showData(product) {
  document.getElementById("foodID").value = product.ma;
  document.getElementById("tenMon").value = product.ten;
  document.getElementById("loai").value = product.loai;
  document.getElementById("giaMon").value = product.gia;
  document.getElementById("tinhTrang").value =
    product.tinhTrang == 0 ? "hết" : "còn";
  document.getElementById("khuyenMai").value = product.khuyenMai;
  document.getElementById("moTa").value = product.moTa;
  document.getElementById("hinhMon").value = product.hinhAnh;
}
