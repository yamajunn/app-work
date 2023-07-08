import { Box, SxProps, Theme } from "@mui/material";

export const Piano = () => {
    return (
        <Box className="Piano" sx={sx}>
            <Box className="PianoBase">

            </Box>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Piano": {
        width: "100%",
    },
};
