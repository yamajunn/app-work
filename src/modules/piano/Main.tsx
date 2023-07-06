import { Box, SxProps, Theme, Typography } from "@mui/material";
import useSound from 'use-sound';
import { useEffect, VFC } from 'react';

import Sound from "../../resources/piano/C1.mp3";

const Sample: VFC = () => {
    const handleKeyDown = (event: KeyboardEvent) => {
        const [play, { stop, pause }] = useSound(Sound);
        if (event.key === 'q') {
            var sound = new Audio(Sound);
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
