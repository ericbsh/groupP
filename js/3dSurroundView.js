// Create viewer
viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    //背景圖
    "panorama": "assets/image/3dSurroundView.jpg",
    "hfov": "120",
    "autoLoad": true,
    "hotSpots": [{
            "pitch": -30,
            "yaw": 50,
            "cssClass": "custom-hotspot accountManagement",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "accountManagement",
            "clickHandlerFunc": accountManagement
        },
        {
            "pitch": 25,
            "yaw": 160,
            "cssClass": "custom-hotspot collect",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "collect",
            "clickHandlerFunc": collect
        },
        {
            "pitch": -25,
            "yaw": 76,
            "cssClass": "custom-hotspot consumptionRecord",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "consumptionRecord",
            "clickHandlerFunc": consumptionRecord
        },
        {
            "pitch": -10,
            "yaw": 218,
            "cssClass": "custom-hotspot customCharacter",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "customCharacter",
            "clickHandlerFunc": customCharacter
        },
        {
            "pitch": 25,
            "yaw": 348,
            "cssClass": "custom-hotspot myListing",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "myListing",
            "clickHandlerFunc": myListing
        }
    ]
});

//宣告元素
const accountManagement_bouncing = document.querySelector(".accountManagement_bouncing");
const collect_bouncing = document.querySelector(".collect_bouncing");
const consumptionRecord_bouncing = document.querySelector(".consumptionRecord_bouncing");
const customCharacter_bouncing = document.querySelector(".customCharacter_bouncing");
const myListing_bouncing = document.querySelector(".myListing_bouncing");

const bouncingBox = document.querySelectorAll(".bouncingBox");
const closes = document.querySelectorAll(".close");
for (let i = 0; 5 > i; i++) {
    bouncingBox[i].style.display = "none"
}

// 創建圓點的function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}
//帳號管理
function accountManagement() {
    accountManagement_bouncing.style.display = "block"
}
//收藏
function collect() {
    collect_bouncing.style.display = "block"
}
//消費紀錄
function consumptionRecord() {
    consumptionRecord_bouncing.style.display = "block"
}
//客製化人物
function customCharacter() {
    customCharacter_bouncing.style.display = "block"
}
//我的上架
function myListing() {
    myListing_bouncing.style.display = "block"
}

closes[0].onclick = function(e) {
    bouncingBox[0].style.display = "none"
}
closes[1].onclick = function(e) {
    bouncingBox[1].style.display = "none"
}
closes[2].onclick = function(e) {
    bouncingBox[2].style.display = "none"
}
closes[3].onclick = function(e) {
    bouncingBox[3].style.display = "none"
}
closes[4].onclick = function(e) {
        bouncingBox[4].style.display = "none"
    }
    //導覽列
const navButtonClick_button = document.querySelector(".navButtonClick_button");
const bouncingBox_bouncing = document.querySelector(".bouncingBox_bouncing");
bouncingBox_bouncing.style.display = "none"
navButtonClick_button.onclick = function(e) {
    if (bouncingBox_bouncing.style.display == "none") {
        bouncingBox_bouncing.style.display = "flex"
    } else {
        bouncingBox_bouncing.style.display = "none"
    }
}