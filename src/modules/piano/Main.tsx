import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import { useEffect, useCallback } from "react";
import React, { useState } from 'react';


import C1 from "../../resources/piano/C1.mp3"
import Db1 from "../../resources/piano/Db1.mp3"
import D1 from "../../resources/piano/D1.mp3"
import Eb1 from "../../resources/piano/Eb1.mp3"
import E1 from "../../resources/piano/E1.mp3"
import F1 from "../../resources/piano/F1.mp3"
import Gb1 from "../../resources/piano/Gb1.mp3"
import G1 from "../../resources/piano/G1.mp3"
import Ab1 from "../../resources/piano/Ab1.mp3"
import A1 from "../../resources/piano/A1.mp3"
import Bb1 from "../../resources/piano/Bb1.mp3"
import B1 from "../../resources/piano/B1.mp3"
import C2 from "../../resources/piano/C2.mp3"
import Db2 from "../../resources/piano/Db2.mp3"
import D2 from "../../resources/piano/D2.mp3"
import Eb2 from "../../resources/piano/Eb2.mp3"
import E2 from "../../resources/piano/E2.mp3"
import F2 from "../../resources/piano/F2.mp3"
import Gb2 from "../../resources/piano/Gb2.mp3"
import G2 from "../../resources/piano/G2.mp3"
import Ab2 from "../../resources/piano/Ab2.mp3"
import A2 from "../../resources/piano/A2.mp3"
import Bb2 from "../../resources/piano/Bb2.mp3"
import B2 from "../../resources/piano/B2.mp3"
import C3 from "../../resources/piano/C3.mp3"
import Db3 from "../../resources/piano/Db3.mp3"
import D3 from "../../resources/piano/D3.mp3"
import Eb3 from "../../resources/piano/Eb3.mp3"
import E3 from "../../resources/piano/E3.mp3"
import F3 from "../../resources/piano/F3.mp3"
import Gb3 from "../../resources/piano/Gb3.mp3"
import G3 from "../../resources/piano/G3.mp3"
import Ab3 from "../../resources/piano/Ab3.mp3"
import A3 from "../../resources/piano/A3.mp3"
import Bb3 from "../../resources/piano/Bb3.mp3"
import B3 from "../../resources/piano/B3.mp3"
import C4 from "../../resources/piano/C4.mp3"


const Sample = () => {
    const [C1_, C1__] = useState('#FFF')
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'q') {
            var sound = new Audio(C1);
            sound.play();
            C1__("#990000");
            resetColor();
        }
        if (event.key === '2') {
            var sound = new Audio(Db1);
            sound.play();
        }
        if (event.key === 'w') {
            var sound = new Audio(D1);
            sound.play();
        }
        if (event.key === '3') {
            var sound = new Audio(Eb1);
            sound.play();
        }
        if (event.key === 'e') {
            var sound = new Audio(E1);
            sound.play();
        }
        if (event.key === 'r') {
            var sound = new Audio(F1);
            sound.play();
        }
        if (event.key === '5') {
            var sound = new Audio(Gb1);
            sound.play();
        }
        if (event.key === 't') {
            var sound = new Audio(G1);
            sound.play();
        }
        if (event.key === '6') {
            var sound = new Audio(Ab1);
            sound.play();
        }
        if (event.key === 'y') {
            var sound = new Audio(A1);
            sound.play();
        }
        if (event.key === '7') {
            var sound = new Audio(Bb1);
            sound.play();
        }
        if (event.key === 'u') {
            var sound = new Audio(B1);
            sound.play();
        }
        if (event.key === 'i') {
            var sound = new Audio(C2);
            sound.play();
        }
        if (event.key === '9') {
            var sound = new Audio(Db2);
            sound.play();
        }
        if (event.key === 'o') {
            var sound = new Audio(D2);
            sound.play();
        }
        if (event.key === '0') {
            var sound = new Audio(Eb2);
            sound.play();
        }
        if (event.key === 'p') {
            var sound = new Audio(E2);
            sound.play();
        }
        if (event.key === '@') {
            var sound = new Audio(F2);
            sound.play();
        }
        if (event.key === '^') {
            var sound = new Audio(Gb2);
            sound.play();
        }
        if (event.key === '[') {
            var sound = new Audio(G2);
            sound.play();
        }
        if (event.key === '¥') {
            var sound = new Audio(Ab2);
            sound.play();
        }
        if (event.key === 'z') {
            var sound = new Audio(A2);
            sound.play();
        }
        if (event.key === 's') {
            var sound = new Audio(Bb2);
            sound.play();
        }
        if (event.key === 'x') {
            var sound = new Audio(B2);
            sound.play();
        }
        if (event.key === 'c') {
            var sound = new Audio(C3);
            sound.play();
        }
        if (event.key === 'f') {
            var sound = new Audio(Db3);
            sound.play();
        }
        if (event.key === 'v') {
            var sound = new Audio(D3);
            sound.play();
        }
        if (event.key === 'g') {
            var sound = new Audio(Eb3);
            sound.play();
        }
        if (event.key === 'b') {
            var sound = new Audio(E3);
            sound.play();
        }
        if (event.key === 'n') {
            var sound = new Audio(F3);
            sound.play();
        }
        if (event.key === 'j') {
            var sound = new Audio(Gb3);
            sound.play();
        }
        if (event.key === 'm') {
            var sound = new Audio(G3);
            sound.play();
        }
        if (event.key === 'k') {
            var sound = new Audio(Ab3);
            sound.play();
        }
        if (event.key === ',') {
            var sound = new Audio(A3);
            sound.play();
        }
        if (event.key === 'l') {
            var sound = new Audio(Bb3);
            sound.play();
        }
        if (event.key === '.') {
            var sound = new Audio(B3);
            sound.play();
        }
        if (event.key === '/') {
            var sound = new Audio(C4);
            sound.play();
        }
    }

    const resetColor = useCallback(() => {
        setTimeout(() => {
            C1__("#FFF");
        }, 100);
    }, [C1_]);

    return (
        <Box className="Piano">
            <Box className="Piano-white">
                <Button className="C1" onKeyDown={(e) => handleKeyDown(e)} tabIndex={0} sx={{ backgroundColor: C1_, width: "59px", height: "100%", border: "1px solid #000", textAlign: "center", }} color="error"></Button>
                <Button className="D1" color="error"></Button>
                <Button className="E1" color="error"></Button>
                <Button className="F1" color="error"></Button>
                <Button className="G1" color="error"></Button>
                <Button className="A1" color="error"></Button>
                <Button className="B1" color="error"></Button>
                <Button className="C2" color="error"></Button>
                <Button className="D2" color="error"></Button>
                <Button className="E2" color="error"></Button>
                <Button className="F2" color="error"></Button>
                <Button className="G2" color="error"></Button>
                <Button className="A2" color="error"></Button>
                <Button className="B2" color="error"></Button>
                <Button className="C3" color="error"></Button>
                <Button className="D3" color="error"></Button>
                <Button className="E3" color="error"></Button>
                <Button className="F3" color="error"></Button>
                <Button className="G3" color="error"></Button>
                <Button className="A3" color="error"></Button>
                <Button className="B3" color="error"></Button>
                <Button className="C4" color="error"></Button>
            </Box>
            <Box className="Piano-black">
                <Button className="Db1" color="error"></Button>
                <Button className="Eb1" color="error"></Button>
                <Button className="Gb1" color="error"></Button>
                <Button className="Ab1" color="error"></Button>
                <Button className="Bb1" color="error"></Button>
                <Button className="Db2" color="error"></Button>
                <Button className="Eb2" color="error"></Button>
                <Button className="Gb2" color="error"></Button>
                <Button className="Ab2" color="error"></Button>
                <Button className="Bb2" color="error"></Button>
                <Button className="Db3" color="error"></Button>
                <Button className="Eb3" color="error"></Button>
                <Button className="Gb3" color="error"></Button>
                <Button className="Ab3" color="error"></Button>
                <Button className="Bb3" color="error"></Button>
            </Box>
        </Box>
    );
}

export const Main = () => {
    return (
        <Box className="Main" sx={sx}>
            <Sample></Sample>
            {/* <Button color="error" sx={{ width: "100px", height: "100px", backgroundColor: "#FFF", }}></Button>q */}
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
    ".D1": {
        backgroundColor: "#FFF",
        width: "10px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".E1": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".F1": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".G1": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".A1": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".B1": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".C2": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".D2": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".E2": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".F2": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".G2": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".A2": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".B2": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".C3": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".D3": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".E3": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".F3": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".G3": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".A3": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".B3": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".C4": {
        backgroundColor: "#FFF",
        width: "50px",
        height: "100%",
        border: "1px solid #000",
        textAlign: "center",
    },
    ".Piano-black": {
        position: "relative",
        width: "100%",
        height: "70%",
        display: "flex",
    },
    ".Db1": {
        backgroundColor: "#000",
        width: "20px",
        height: "280px",
        margin: "0 0 0 30px",
    },
    ".Eb1": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Gb1": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 55px",
    },
    ".Ab1": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Bb1": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Db2": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 55px",
    },
    ".Eb2": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Gb2": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 55px",
    },
    ".Ab2": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Bb2": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Db3": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 55px",
    },
    ".Eb3": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Gb3": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 55px",
    },
    ".Ab3": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
    ".Bb3": {
        backgroundColor: "#000",
        width: "40px",
        height: "280px",
        margin: "0 0 0 5px",
    },
};
