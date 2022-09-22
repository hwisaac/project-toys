import express from "express";

const app = express(); // express application 생성
const PORT = 4321;  // 포트 넘버를 임의로 정하기

const handleListen = () => {
    console.log(`localhost:${PORT}`)
}

app.listen(PORT, handleListen)
