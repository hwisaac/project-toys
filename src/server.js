import express from "express";

const app = express(); // express application 생성
const PORT = 4321;  // 포트 넘버를 임의로 정하기

app.get("/", (req,res) => res.send("Hi~!")) // 루트("/")로 접속하면 Hi~! 라고 메세지 보내기

const handleListen = () => {
    console.log("hello")
}

app.listen(PORT, handleListen);