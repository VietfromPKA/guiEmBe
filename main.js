// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anhh và anh có những điều muốn gởi gắm đến tình iu của anhh❤️. Cảm ơn em đã đến bên anhh những lúc anh cô đơn buồn tủi nhất.Cuộc sống thực sự chẳng có ý nghĩa gì nếu không có em. Em làm cho anh luôn cảm thấy đặc biệt và hoàn hảo. Anh chẳng biết nói gì ngoài lời cảm ơn em, anh rất yêu em💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ
function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val  
            
            // Kiểm tra nếu đã gõ xong nội dung thì hiển thị link
            if (index === letterContentSplited.length - 1) {
                setTimeout(() => {
                    // Hiển thị link sau khi hoàn thành chữ 1 giây
                    document.querySelector(".linkFb").classList.add("showLink")
                }, 1000)
            }
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        // Luôn ẩn link mỗi khi mở thiệp trước khi gõ chữ
        document.querySelector(".linkFb").classList.remove("showLink")
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
            // Ẩn link khi đóng thiệp
            document.querySelector(".linkFb").classList.remove("showLink")
        }, 1000)
    }
})