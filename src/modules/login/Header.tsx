import { styled, alpha, SxProps, Theme, Typography, Button } from '@mui/material/';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const Header = () => {
    return (
        <Box className="Header" sx={sx}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box className="RightBox">
                        <Button href='/piano'>
                            <Typography className="modoru" variant='h5'>戻る</Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
const sx: SxProps<Theme> = {
    "&.Header": {
        width: "100%",
        backgroundColor: "#303030",
    },
    ".RightBox": {
        display: "flex",
        marginLeft: "1100px",
    },
    ".modoru": {
        color: "#999",
    }
};

