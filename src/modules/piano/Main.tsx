import { Box, SxProps, Theme, Typography } from "@mui/material";
import { useEffect, VFC } from 'react';

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

const Sample: VFC = () => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'q') {
            var sound = new Audio(C1);
            sound.play();
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

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, false)
    }, [])

    return <Typography></Typography>
}

export const Main = () => {
    return (
        <Box className="HeMainader" sx={sx}>
            <Sample></Sample>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Main": {
        width: "100%",
    },
};
