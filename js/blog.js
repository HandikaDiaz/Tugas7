// let namaSiswa1 = "Adit";
// let namaSiswa2 = "Zidane";
// let namaSiswa3 = "Raihan";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// // array
// let namaSiswa = ["Adit", "Zidane", "Raihan", "Handika"]
// console.log(namaSiswa);
// console.log(namaSiswa[0]);
// console.log(namaSiswa[2]);

// object
// let nama = "Nabil";
// let alamat = "Bekasi";
// let umur = 17;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// let dataPersonal1 = {
//     nama: "Adit",
//     alamat: "Antapani",
//     umur: 17
// }

// let dataPersonal2 = {
//     nama: "Raihan",
//     alamat: "Aceh",
//     umur: 19
// }

// let dataPersonal3 = {
//     nama: "Nabil",
//     alamat: "Bekasi",
//     umur: 14
// }

// let dataPersonal4 = {
//     nama: "Adit",
//     alamat: "Antapani",
//     umur: 17
// }

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3);
// console.log(dataPersonal4);

// // array of object
// let dataCaleg = [
//     {nama: "Joko Widodo", alamat: "Solo" },
//     {nama: "Puan Maharani", alamat: "Jakarta Barat" },
//     {nama: "Prabowo S", alamat: "Semarang" },
// ];

// console.log(dataCaleg)
// console.log(dataCaleg[1].nama);









// let dataBlog = [];

// function addBlog(event) {
//     event.preventDefault();

//     let title = document.getElementById("input-blog-title").value;
//     let content = document.getElementById("input-blog-content").value;
//     let image = document.getElementById("input-blog-image").files;
//     let start = document.getElementById("input-blog-start").value;
//     let end =document.getElementById("input-blog-end").value;

//     image = URL.createObjectURL(image[0]);
//     console.log(image);

//     let blog = {
//         title,
//         content,
//         image,
//         start,
//         end,
//         postAT: new Date(),
//         author: "Alexandria",
//     };

//     dataBlog.push(blog);
//     console.log(blog);

//     renderBlog();

// }

// function renderBlog() {
//     document.getElementById("contents").innerHTML = "";

//     for (let index = 0; index < dataBlog.length; index++) {
//         document.getElementById("contents").innerHTML += `
// //                     <div class="jarak">
          //                 <div id="contents" class="blog-list">
            //                 <div class="blog-list-item">
            //                     <div class="blog-image">
            //                         <img src="${dataBlog[index].image}" alt="blog_img"/>
            //                     </div>
            //                     <div class="blog-content">
            //                         <div class="text-box">
            //                             <h1>
            //                                 <a style="color: red;" href="blog-detail.html" target="_blank">${dataBlog[index].title}</a>
            //                             </h1>
            //                             <div style="color: gray; font-size: 15px;">Duration :</div>
                                        //  <div> ${dataBlog[index].months} Bulan, ${dataBlog[index].days} Hari</div>
                                        //  <div></div>
                                        //  <div class="detail-blog-content">
                                        //       ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
                                        //   </div>
                                        //   <div>Ability</div>
                                        //   <div>
                                        //      ${dataBlog[index].checkFruit}
                                        //      ${dataBlog[index].checkSword}
                                        //      ${dataBlog[index].checkGun}
                                        //      ${dataBlog[index].checkRobot}
                                        //   </div>
            //                             <p>
            //                                 ${dataBlog[index].content}
            //                             </p>
            //                             <div style="margin: 10px;  float: right; color: gray;">
                              //        <p style="font-size: 15px; margin-left: 230px;">
                              //        ${getDistanceTime(dataBlog[index].postAt)}
                              //    </p>
                              //     <div class="btn-group">
                              //         <button class="btn-edit">Edit Post</button>
                              //         <buttom class="btn-delete">Delete Post</buttom>
                              //     </div>
                              //     </div>
            //                 </div>
            //             </div>
          //             </div>
//                 `;
//     };
// };

// function getFullTime(time) {
// //     console.log("get Full Time");

// //     let time = new Date();
// //     console.log(time);

// let monthName = [
//     "Jan", 
//     "Feb", 
//     "Mar", 
//     "Apr", 
//     "May", 
//     "June", 
//     "July", 
//     "Aug", 
//     "Sep",
//     "Oct", 
//     "Nov", 
//     "Dec"
// ];

// let date = time.getDate();

// let monthIndex = time.getMonth();

// let year = time.getFullYear();

// let hours = time.getHours();

// let minutes = time.getMinutes();

// if (hours <= 9) {
//     hours = "0" + hours;
// } else if (minutes <= 9) {
//     minutes = "0" + minutes;
// } 

// return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;

// };

// function getDistanceTime(time) {
//     let timeNow = new Date();
//     let timePost = time;

//     let distance = timeNow - timePost;
//     console.log(distance);

//     let milisecond = 1000;
//     let secondInHours = 3600;
//     let hoursInDays = 24;
//     let daysInMonths = 30;

//     let distanceMonth = Math.floor(distance / (milisecond * secondInHours * hoursInDays * daysInMonths));
//     let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDays));
//     let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
//     let distanceMinutes = Math.floor(distance / (milisecond * 60));
//     let distanceSecond = Math.floor(distance / milisecond);

//     if (distanceMonth > 0) {
//         return `${distanceMonth} Months Ago`
//     } else if (distanceDay > 0) {
//         return `${distanceDay} Days Ago`
//     } else if (distanceHours > 0) {
//         return `${distanceHours} Hours Ago`
//     } else if (distanceMinutes > 0) {
//         return `${distanceMinutes} Minutes Ago`
//     } else {
//         return `${distanceSecond} Seconds Ago`
//     }
// }

// setInterval(function () {
//     renderBlog();
// }, 3000);


// let starts = dataBlog[index].start;
// let ends = dataBlog[index].end;
// let hitung = starts - ends;
// console.log(hitung);


let dataBlog = [];
function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;
  
  // duration
  let start = new Date (document.getElementById("input-blog-start").value);
  let end = new Date (document.getElementById("input-blog-end").value);
  let dates = Math.abs(end - start); 
  let months = Math.floor(dates / (1000 * 60 * 60 * 24 * 30)); 
  let days = Math.floor(dates / (1000 * 60 * 60 * 24)) % 30;

  // Choose Technologies
  const robot = '<img class="img-icon-robot" src="Image/robot.png">';
  const sword = '<img class="img-icon-sword" src="Image/sword.png">';
  const gun = '<img class="img-icon-gun" src="Image/gun.png">';
  const fruit = '<img class="img-icon-fruit" src="Image/fruit.png">';

  let checkRobot = document.getElementById("check-robot").checked ? robot: "";
  let checkSword = document.getElementById("check-sword").checked ? sword: "";
  let checkGun = document.getElementById("check-gun").checked ? gun: "";
  let checkFruit = document.getElementById("check-fruit").checked ? fruit: "";

  // untuk membuat url gambar
  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    title,
    months,
    days,
    content,
    image,
    checkFruit,
    checkGun,
    checkRobot,
    checkSword,
    postAt: new Date(),
    author: "Alexandria",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  //   for (let index = 0; index < dataBlog.length; index++) {
  //     console.log(index);
  //   }

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
                            <div class="jarak">
                              <div id="contents" class="blog-list">
                                <div class="blog-list-item">
                                 <div class="blog-image">
                                     <img src="${dataBlog[index].image}" alt="blog_img"/>
                                 </div>
                                 <div class="blog-content">
                                 <div class="text-box">
                                 <h1>
                                     <a style="color: darkred;" href="blog-detail.html" target="_blank">${dataBlog[index].title}</a>
                                 </h1>
                                 <div style="color: gray; font-size: 15px;">Duration :</div>
                                 <div> ${dataBlog[index].months} Bulan, ${dataBlog[index].days} Hari</div>
                                 <div></div>
                                 <div class="detail-blog-content">
                                      ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
                                  </div>
                                  <div>Ability</div>
                                  <div>
                                     ${dataBlog[index].checkFruit}
                                     ${dataBlog[index].checkSword}
                                     ${dataBlog[index].checkGun}
                                     ${dataBlog[index].checkRobot}
                                  </div>
                                  <div>
                                     <p>
                                         ${dataBlog[index].content}
                                     </p>
                                 </div>
                                 <div style="margin: 10px;  float: right; color: gray;">
                                     <p style="font-size: 15px; margin-left: 230px;">
                                         ${getDistanceTime(dataBlog[index].postAt)}
                                     </p>
                                      <div class="btn-group">
                                          <button class="btn-edit">Edit Post</button>
                                          <buttom class="btn-delete">Delete Post</buttom>
                                      </div>
                                  </div>
                                 </div>
                             </div>
                         </div>
                        </div>
    `;
  }
}

function getFullTime(time) {
  // console.log("get full time");
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = time.getDate();

  let monthIndex = time.getMonth();

  let year = time.getFullYear();

  let hours = time.getHours();
  
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

// Find time per second
function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  console.log(distance);

  let milisecond = 1000;
  let secondInHours = 3600;
  let hoursInDays = 24;

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays));
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} Days Ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} Hours Ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} Minutes Ago`;
  } else {
    return `${distanceSeconds} Seconds Ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 10000);