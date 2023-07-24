import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import { useEffect, useCallback } from "react";
import { useState } from 'react';
import { C1, D1, E1, F1, G1, A1, B1, C2, D2, E2, F2, G2, A2, B2, C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4, C5, D5, E5, F5, G5, A5, B5, C6, D6, E6, F6, G6, A6, B6, C7, D7, E7, F7, G7, A7, B7, C8, Db1, Eb1, Gb1, Ab1, Bb1, Db2, Eb2, Gb2, Ab2, Bb2, Db3, Eb3, Gb3, Ab3, Bb3, Db4, Eb4, Gb4, Ab4, Bb4, Db5, Eb5, Gb5, Ab5, Bb5, Db6, Eb6, Gb6, Ab6, Bb6, Db7, Eb7, Gb7, Ab7, Bb7, } from "../../resources/piano/";
import file from "../../resources/SongFile/test1.json";

let c1 = new KeyboardEvent("keydown", { key: "q" }), d1 = new KeyboardEvent("keydown", { key: "w" }), e1 = new KeyboardEvent("keydown", { key: "e" }), f1 = new KeyboardEvent("keydown", { key: "r" }), g1 = new KeyboardEvent("keydown", { key: "t" }), a1 = new KeyboardEvent("keydown", { key: "y" }), b1 = new KeyboardEvent("keydown", { key: "u" })
let c2 = new KeyboardEvent("keydown", { key: "i" }), d2 = new KeyboardEvent("keydown", { key: "o" }), e2 = new KeyboardEvent("keydown", { key: "p" }), f2 = new KeyboardEvent("keydown", { key: "@" }), g2 = new KeyboardEvent("keydown", { key: "[" }), a2 = new KeyboardEvent("keydown", { key: "z" }), b2 = new KeyboardEvent("keydown", { key: "x" })
let c3 = new KeyboardEvent("keydown", { key: "c" }), d3 = new KeyboardEvent("keydown", { key: "v" }), e3 = new KeyboardEvent("keydown", { key: "b" }), f3 = new KeyboardEvent("keydown", { key: "n" }), g3 = new KeyboardEvent("keydown", { key: "m" }), a3 = new KeyboardEvent("keydown", { key: "," }), b3 = new KeyboardEvent("keydown", { key: "." })
let c4 = new KeyboardEvent("keydown", { key: "/" })
let db1 = new KeyboardEvent("keydown", { key: "2" }), eb1 = new KeyboardEvent("keydown", { key: "3" }), gb1 = new KeyboardEvent("keydown", { key: "5" }), ab1 = new KeyboardEvent("keydown", { key: "6" }), bb1 = new KeyboardEvent("keydown", { key: "7" })
let db2 = new KeyboardEvent("keydown", { key: "9" }), eb2 = new KeyboardEvent("keydown", { key: "0" }), gb2 = new KeyboardEvent("keydown", { key: "^" }), ab2 = new KeyboardEvent("keydown", { key: "¥" }), bb2 = new KeyboardEvent("keydown", { key: "s" })
let db3 = new KeyboardEvent("keydown", { key: "f" }), eb3 = new KeyboardEvent("keydown", { key: "g" }), gb3 = new KeyboardEvent("keydown", { key: "h" }), ab3 = new KeyboardEvent("keydown", { key: "k" }), bb3 = new KeyboardEvent("keydown", { key: "l" })

let KeyList = [c1, d1, e1, f1, g1, a1, b1, c2, d2, e2, f2, g2, a2, b2, c3, d3, e3, f3, g3, a3, b3, c4, db1, eb1, gb1, ab1, bb1, db2, eb2, gb2, ab2, bb2, db3, eb3, gb3, ab3, bb3]

const Sample = () => {
    const [C1_, C1__] = useState('#FFF'), [D1_, D1__] = useState('#FFF'), [E1_, E1__] = useState('#FFF'), [F1_, F1__] = useState('#FFF'), [G1_, G1__] = useState('#FFF'), [A1_, A1__] = useState('#FFF'), [B1_, B1__] = useState('#FFF')
    const [C2_, C2__] = useState('#FFF'), [D2_, D2__] = useState('#FFF'), [E2_, E2__] = useState('#FFF'), [F2_, F2__] = useState('#FFF'), [G2_, G2__] = useState('#FFF'), [A2_, A2__] = useState('#FFF'), [B2_, B2__] = useState('#FFF')
    const [C3_, C3__] = useState('#FFF'), [D3_, D3__] = useState('#FFF'), [E3_, E3__] = useState('#FFF'), [F3_, F3__] = useState('#FFF'), [G3_, G3__] = useState('#FFF'), [A3_, A3__] = useState('#FFF'), [B3_, B3__] = useState('#FFF')
    const [C4_, C4__] = useState('#FFF')

    const [Db1_, Db1__] = useState('#000'), [Eb1_, Eb1__] = useState('#000'), [Gb1_, Gb1__] = useState('#000'), [Ab1_, Ab1__] = useState('#000'), [Bb1_, Bb1__] = useState('#000')
    const [Db2_, Db2__] = useState('#000'), [Eb2_, Eb2__] = useState('#000'), [Gb2_, Gb2__] = useState('#000'), [Ab2_, Ab2__] = useState('#000'), [Bb2_, Bb2__] = useState('#000')
    const [Db3_, Db3__] = useState('#000'), [Eb3_, Eb3__] = useState('#000'), [Gb3_, Gb3__] = useState('#000'), [Ab3_, Ab3__] = useState('#000'), [Bb3_, Bb3__] = useState('#000')


    let piano_count = 2;
    let start = Boolean(false);
    let time = 0;
    let recordList: any[] = [];

    function colorChange(num: number) {
        if (num === 0) { C1__("#990000") }; if (num === 1) { D1__("#990000") }; if (num === 2) { E1__("#990000") }; if (num === 3) { F1__("#990000") }; if (num === 4) { G1__("#990000") }; if (num === 5) { A1__("#990000") }; if (num === 6) { B1__("#990000") };
        if (num === 7) { C2__("#990000") }; if (num === 8) { D2__("#990000") }; if (num === 9) { E2__("#990000") }; if (num === 10) { F2__("#990000") }; if (num === 11) { G2__("#990000") }; if (num === 12) { A2__("#990000") }; if (num === 13) { B2__("#990000") };
        if (num === 14) { C3__("#990000") }; if (num === 15) { D3__("#990000") }; if (num === 16) { E3__("#990000") }; if (num === 17) { F3__("#990000") }; if (num === 18) { G3__("#990000") }; if (num === 19) { A3__("#990000") }; if (num === 20) { B3__("#990000") };
        if (num === 21) { C4__("#990000") };
        if (num === 22) { Db1__("#990000") }; if (num === 23) { Eb1__("#990000") }; if (num === 24) { Gb1__("#990000") }; if (num === 25) { Ab1__("#990000") }; if (num === 26) { Bb1__("#990000") };
        if (num === 27) { Db2__("#990000") }; if (num === 28) { Eb2__("#990000") }; if (num === 29) { Gb2__("#990000") }; if (num === 30) { Ab2__("#990000") }; if (num === 31) { Bb2__("#990000") };
        if (num === 32) { Db3__("#990000") }; if (num === 33) { Eb3__("#990000") }; if (num === 34) { Gb3__("#990000") }; if (num === 35) { Ab3__("#990000") }; if (num === 36) { Bb3__("#990000") };
        resetColor();
    }


    function handleKeyDown(event: any, recordList: any[]) {
        let soundfile = [C1, D1, E1, F1, G1, A1, B1, C2, D2, E2, F2, G2, A2, B2, C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4, C5, D5, E5, F5, G5, A5, B5, C6, D6, E6, F6, G6, A6, B6, C7, D7, E7, F7, G7, A7, B7, C8, Db1, Eb1, Gb1, Ab1, Bb1, Db2, Eb2, Gb2, Ab2, Bb2, Db3, Eb3, Gb3, Ab3, Bb3, Db4, Eb4, Gb4, Ab4, Bb4, Db5, Eb5, Gb5, Ab5, Bb5, Db6, Eb6, Gb6, Ab6, Bb6, Db7, Eb7, Gb7, Ab7, Bb7]

        if (event.keyCode === 39 && piano_count < 4) {
            piano_count += 1;
        }
        if (event.keyCode === 37 && piano_count > 0) {
            piano_count -= 1;
        }
        if (event.key === 'q') {
            let sound = new Audio(soundfile[0 + piano_count * 7]); sound.play(); C1__("#990000"); resetColor(); if (start) { recordList.push([Date.now() - time, 50 + piano_count * 5]) }
        }
        if (event.key === '2') {
            let sound = new Audio(soundfile[50 + piano_count * 5]); sound.play(); Db1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 50 + piano_count * 5) }
        }
        if (event.key === 'w') {
            let sound = new Audio(soundfile[1 + piano_count * 7]); sound.play(); D1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 1 + piano_count * 7) }
        }
        if (event.key === '3') {
            let sound = new Audio(soundfile[51 + piano_count * 5]); sound.play(); Eb1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 51 + piano_count * 5) }
        }
        if (event.key === 'e') {
            let sound = new Audio(soundfile[2 + piano_count * 7]); sound.play(); E1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 2 + piano_count * 7) }
        }
        if (event.key === 'r') {
            let sound = new Audio(soundfile[3 + piano_count * 7]); sound.play(); F1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 3 + piano_count * 7) }
        }
        if (event.key === '5') {
            let sound = new Audio(soundfile[52 + piano_count * 5]); sound.play(); Gb1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 52 + piano_count * 5) }
        }
        if (event.key === 't') {
            let sound = new Audio(soundfile[4 + piano_count * 7]); sound.play(); G1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 4 + piano_count * 7) }
        }
        if (event.key === '6') {
            let sound = new Audio(soundfile[53 + piano_count * 5]); sound.play(); Ab1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 53 + piano_count * 5) }
        }
        if (event.key === 'y') {
            let sound = new Audio(soundfile[5 + piano_count * 7]); sound.play(); A1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 5 + piano_count * 7) }
        }
        if (event.key === '7') {
            let sound = new Audio(soundfile[54 + piano_count * 5]); sound.play(); Bb1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 54 + piano_count * 5) }
        }
        if (event.key === 'u') {
            let sound = new Audio(soundfile[6 + piano_count * 7]); sound.play(); B1__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 6 + piano_count * 7) }
        }
        if (event.key === 'i') {
            let sound = new Audio(soundfile[7 + piano_count * 7]); sound.play(); C2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 7 + piano_count * 7) }
        }
        if (event.key === '9') {
            let sound = new Audio(soundfile[55 + piano_count * 5]); sound.play(); Db2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 55 + piano_count * 5) }
        }
        if (event.key === 'o') {
            let sound = new Audio(soundfile[8 + piano_count * 7]); sound.play(); D2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 8 + piano_count * 7) }
        }
        if (event.key === '0') {
            let sound = new Audio(soundfile[56 + piano_count * 5]); sound.play(); Eb2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 56 + piano_count * 5) }
        }
        if (event.key === 'p') {
            let sound = new Audio(soundfile[9 + piano_count * 7]); sound.play(); E2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 9 + piano_count * 7) }
        }
        if (event.key === '@') {
            let sound = new Audio(soundfile[10 + piano_count * 7]); sound.play(); F2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 10 + piano_count * 7) }
        }
        if (event.key === '^') {
            let sound = new Audio(soundfile[57 + piano_count * 5]); sound.play(); Gb2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 57 + piano_count * 5) }
        }
        if (event.key === '[') {
            let sound = new Audio(soundfile[11 + piano_count * 7]); sound.play(); G2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 11 + piano_count * 7) }
        }
        if (event.key === '¥') {
            let sound = new Audio(soundfile[58 + piano_count * 5]); sound.play(); Ab2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 58 + piano_count * 5) }
        }
        if (event.key === 'z') {
            let sound = new Audio(soundfile[12 + piano_count * 7]); sound.play(); A2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 12 + piano_count * 7) }
        }
        if (event.key === 's') {
            let sound = new Audio(soundfile[59 + piano_count * 5]); sound.play(); Bb2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 59 + piano_count * 5) }
        }
        if (event.key === 'x') {
            let sound = new Audio(soundfile[13 + piano_count * 7]); sound.play(); B2__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 13 + piano_count * 7) }
        }
        if (event.key === 'c') {
            let sound = new Audio(soundfile[14 + piano_count * 7]); sound.play(); C3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 14 + piano_count * 7) }
        }
        if (event.key === 'f') {
            let sound = new Audio(soundfile[60 + piano_count * 5]); sound.play(); Db3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 60 + piano_count * 5) }
        }
        if (event.key === 'v') {
            let sound = new Audio(soundfile[15 + piano_count * 7]); sound.play(); D3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 15 + piano_count * 7) }
        }
        if (event.key === 'g') {
            let sound = new Audio(soundfile[61 + piano_count * 5]); sound.play(); Eb3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 61 + piano_count * 5) }
        }
        if (event.key === 'b') {
            let sound = new Audio(soundfile[16 + piano_count * 7]); sound.play(); E3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 16 + piano_count * 7) }
        }
        if (event.key === 'n') {
            let sound = new Audio(soundfile[17 + piano_count * 7]); sound.play(); F3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 17 + piano_count * 7) }
        }
        if (event.key === 'j') {
            let sound = new Audio(soundfile[62 + piano_count * 5]); sound.play(); Gb3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 62 + piano_count * 5) }
        }
        if (event.key === 'm') {
            let sound = new Audio(soundfile[18 + piano_count * 7]); sound.play(); G3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 18 + piano_count * 7) }
        }
        if (event.key === 'k') {
            let sound = new Audio(soundfile[63 + piano_count * 5]); sound.play(); Ab3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 63 + piano_count * 5) }
        }
        if (event.key === ',') {
            let sound = new Audio(soundfile[19 + piano_count * 7]); sound.play(); A3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 19 + piano_count * 7) }
        }
        if (event.key === 'l') {
            let sound = new Audio(soundfile[64 + piano_count * 5]); sound.play(); Bb3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 64 + piano_count * 5) }
        }
        if (event.key === '.') {
            let sound = new Audio(soundfile[20 + piano_count * 7]); sound.play(); B3__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 20 + piano_count * 7) }
        }
        if (event.key === '/') {
            let sound = new Audio(soundfile[21 + piano_count * 7]); sound.play(); C4__("#990000"); resetColor(); if (start) { recordList.push(Date.now() - time, 21 + piano_count * 7) }
        }
        if (event.key === ":") {
            for (let item of file) {
                let sound = new Audio(soundfile[item[1]]);
                setTimeout(() => {
                    colorChange(item[1] - Math.floor(item[1] / 21) * 21)
                    sound.play()
                }, item[0]);
            }
        }
        if (event.key === "_") {
            time = Date.now()
            start = true
        }
        if (event.key === "]") {
            var jstr = JSON.stringify(recordList);
            const blob = new Blob([jstr], { type: "text/plain" });

            const link = document.createElement('a');

            link.href = URL.createObjectURL(blob);

            link.download = "test2.json";

            link.click();
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            handleKeyDown(event, recordList);
        }, false);
    }, []);

    const resetColor = useCallback(() => {
        setTimeout(() => {
            C1__("#FFF"); D1__("#FFF"); E1__("#FFF"); F1__("#FFF"); G1__("#FFF"); A1__("#FFF"); B1__("#FFF"); C2__("#FFF"); D2__("#FFF"); E2__("#FFF"); F2__("#FFF"); G2__("#FFF"); A2__("#FFF"); B2__("#FFF"); C3__("#FFF"); D3__("#FFF"); E3__("#FFF"); F3__("#FFF"); G3__("#FFF"); A3__("#FFF"); B3__("#FFF"); C4__("#FFF");
            Db1__("#000"); Eb1__("#000"); Gb1__("#000"); Ab1__("#000"); Bb1__("#000"); Db2__("#000"); Eb2__("#000"); Gb2__("#000"); Ab2__("#000"); Bb2__("#000"); Db3__("#000"); Eb3__("#000"); Gb3__("#000"); Ab3__("#000"); Bb3__("#000");

        }, 150);
    }, [C1_, D1_, E1_, F1_, G1_, A1_, B1_, C2_, D2_, E2_, F2_, G2_, A2_, B2_, C3_, D3_, E3_, F3_, G3_, A3_, B3_, C4_, Db1_, Eb1_, Gb1_, Ab1_, Bb1_, Db2_, Eb2_, Gb2_, Ab2_, Bb2_, Db3_, Eb3_, Gb3_, Ab3_, Bb3_]);
    return (
        <Box className="Piano">
            {Math.floor(10 / 21)}
            <Box className="Piano-white">
                <Button className="C1" variant="contained" sx={{ backgroundColor: C1_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="D1" variant="contained" sx={{ backgroundColor: D1_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="E1" variant="contained" sx={{ backgroundColor: E1_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="F1" variant="contained" sx={{ backgroundColor: F1_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="G1" variant="contained" sx={{ backgroundColor: G1_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="A1" variant="contained" sx={{ backgroundColor: A1_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="B1" variant="contained" sx={{ backgroundColor: B1_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="C2" variant="contained" sx={{ backgroundColor: C2_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="D2" variant="contained" sx={{ backgroundColor: D2_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="E2" variant="contained" sx={{ backgroundColor: E2_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="F2" variant="contained" sx={{ backgroundColor: F2_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="G2" variant="contained" sx={{ backgroundColor: G2_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="A2" variant="contained" sx={{ backgroundColor: A2_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="B2" variant="contained" sx={{ backgroundColor: B2_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="C3" variant="contained" sx={{ backgroundColor: C3_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="D3" variant="contained" sx={{ backgroundColor: D3_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="E3" variant="contained" sx={{ backgroundColor: E3_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="F3" variant="contained" sx={{ backgroundColor: F3_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="G3" variant="contained" sx={{ backgroundColor: G3_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="A3" variant="contained" sx={{ backgroundColor: A3_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="B3" variant="contained" sx={{ backgroundColor: B3_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="C4" variant="contained" sx={{ backgroundColor: C4_, border: "1px solid #000", "&:hover": { opacity: 1 } }} color="error"></Button>
            </Box>
            <Box className="Piano-black">
                <Button className="Db1" variant="contained" sx={{ backgroundColor: Db1_, border: "1px solid #000", margin: "0 0 0 30px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Eb1" variant="contained" sx={{ backgroundColor: Eb1_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Gb1" variant="contained" sx={{ backgroundColor: Gb1_, border: "1px solid #000", margin: "0 0 0 55px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Ab1" variant="contained" sx={{ backgroundColor: Ab1_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Bb1" variant="contained" sx={{ backgroundColor: Bb1_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Db2" variant="contained" sx={{ backgroundColor: Db2_, border: "1px solid #000", margin: "0 0 0 55px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Eb2" variant="contained" sx={{ backgroundColor: Eb2_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Gb2" variant="contained" sx={{ backgroundColor: Gb2_, border: "1px solid #000", margin: "0 0 0 55px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Ab2" variant="contained" sx={{ backgroundColor: Ab2_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Bb2" variant="contained" sx={{ backgroundColor: Bb2_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Db3" variant="contained" sx={{ backgroundColor: Db3_, border: "1px solid #000", margin: "0 0 0 55px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Eb3" variant="contained" sx={{ backgroundColor: Eb3_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Gb3" variant="contained" sx={{ backgroundColor: Gb3_, border: "1px solid #000", margin: "0 0 0 55px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Ab3" variant="contained" sx={{ backgroundColor: Ab3_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
                <Button className="Bb3" variant="contained" sx={{ backgroundColor: Bb3_, border: "1px solid #000", margin: "0 0 0 5px", "&:hover": { opacity: 1 } }} color="error"></Button>
            </Box>
        </Box>
    );
}

function saveToFile(recordList: any) {
    const element = document.createElement('a');
    const file = new Blob([recordList], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "record.json";
    element.click();
};

export const Main = (recordList: any) => {
    return (
        <Box className="Main" sx={sx}>
            {/* <Button className="Button" onClick={saveToFile()}><Typography className="ButtonText" variant="h4">保存</Typography></Button> */}
            <Sample></Sample>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Main": {
        width: "100%",
    },
    ".Piano": {
        width: "1333px",
        height: "300px",
        margin: "10% 1% 0"
    },
    ".Piano-white": {
        position: "absolute",
        widht: "100%",
        height: "400px",
        display: "flex",
    },
    ".Piano-black": {
        position: "relative",
        width: "100%",
        height: "95%",
        display: "flex",
    },
    ".Button": {
        top: "50px",
        height: "60px",
        width: "100px",
        marginLeft: "90%",
        backgroundColor: "#555555"
    },
    ".ButtonText": {
        color: "#FFF",
        // height: "10px",
    },
};
