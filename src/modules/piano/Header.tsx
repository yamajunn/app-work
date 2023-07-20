import { styled, alpha, SxProps, Theme, Typography, Button } from '@mui/material/';
import { IconContext } from 'react-icons'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbFileImport } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";


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
                    <Box className="Buttons" >
                        <IconContext.Provider value={{ color: '#FFF', size: '30px' }}>
                            <Button>
                                <FaAngleDoubleLeft className="button" />
                            </Button>
                            <Button>
                                <FaPlay className="button" />
                            </Button>
                            <Button>
                                <FaAngleDoubleRight className="button" />
                            </Button>
                            {/* <TbFileImport />
                            <FaDownload /> */}
                        </IconContext.Provider>
                    </Box>
                    <Box className="RightBox">
                        <Button>
                            <Typography className="toukou" variant='h5'>投稿</Typography>
                        </Button>
                        <Button>
                            <Typography className="loggin" variant='h5'>ログイン</Typography>
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
    ".Buttons": {
        color: "#FFF",
        marginLeft: "35%",
        display: "flex",
    },
    ".button": {
        marginRight: "5px",
        marginLeft: "5px",
    },
    ".RightBox": {
        color: "#99999999",
        display: "flex",
        margin: "0 0 0 300px",
    },
    ".toukou": {
        color: "#99999999",
        marginRight: "30px",
    },
    ".loggin": {
        color: "#99999999",
    }
};

