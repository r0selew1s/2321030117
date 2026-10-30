var danhSachVid = [
        {
            id: 1,
            ten: "Lạc Trôi",
            duongDanAnh: "LT.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/WQU8avEv6CQ?si=NhqYxnVaFrOTC38N"
        },
        {
            id: 2,
            ten: "Em Của Ngày Hôm Qua",
            duongDanAnh: "ECNHQ.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/V4DSk-LXhuw?si=E0GHzuPRvCTw9I8I"

        },
        {
            id: 3,
            ten: "Nơi Này Có Anh",
            duongDanAnh: "NNCA.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/FN7ALfpGxiI?si=t57J9hXJTYrGOknW"

        },
        {
            id: 4,
            ten: "Nắng Ấm Xa Dần",
            duongDanAnh: "NAXD.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/0HBX281CWlY?si=tFZgmr_YtnOwdRHq"

        },
        {
            id: 5,
            ten: "Ấn Nút Nhớ Thả Giấc Mơ",
            duongDanAnh: "ANN.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/2jeqQ6Py-o8?si=KLxyN_agv0iVzKgi"

        },
    ];

    function chonPhim(id){
        for (let i= 0; i < danhSachVid.length; i++){
            if(danhSachVid[i].id ==id){
                document.getElementsByClassName("video")[0].src =danhSachVid[i].duongDanYoutube
            }
        }

    }