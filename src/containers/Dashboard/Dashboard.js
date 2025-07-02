import * as React from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BallotIcon from '@mui/icons-material/Ballot';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BlocksIcon from '../../assets/navigation/BlocksIcon';
import TransactionsIcon from '../../assets/navigation/TransactionsIcon';
import {AppProvider} from '@toolpad/core/AppProvider';
import {DashboardLayout, ThemeSwitcher} from '@toolpad/core/DashboardLayout';
import {PageContainer} from '@toolpad/core/PageContainer';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Footer from '../Footer/Footer';
import logo from '../../assets/p2pbarter-slim-transparent.png';
import DashboardContent from '../../components/Dashboard/DashboardContent';
import Chart from "../../components/common/Chart/Chart";

const NAVIGATION = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon/>,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Wallet',
    },
    {
        segment: 'controlPanel',
        title: 'Control Panel',
        icon: <AddBoxIcon/>,
    },
    {
        segment: 'transactionHistory',
        title: 'Transaction History',
        icon: <ReceiptLongIcon/>,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Chain Explorer',
    },
    {
        segment: 'blocks',
        title: 'Blocks',
        icon: <BlocksIcon/>,
    },
    {
        segment: 'transactions',
        title: 'Transactions',
        icon: <TransactionsIcon/>,
    },
    {
        segment: 'validators',
        title: 'Validators',
        icon: <FactCheckIcon/>,
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <BarChartIcon/>,
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <DescriptionIcon/>,
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <DescriptionIcon/>,
            },
        ],
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon/>,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Governance',
    },
    {
        segment: 'newGovernanceProposal',
        title: 'Governance proposal',
        icon: <AssignmentAddIcon/>,
    },
    {
        segment: 'governancePolls',
        title: 'Governance polls',
        icon: <BallotIcon/>,
    },
];

const demoTheme = createTheme({
    colorSchemes: {light: true, dark: true},
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function useDemoRouter(initialPath) {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

const Skeleton = styled('div')(({theme, height}) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

function ToolbarActionsSearch() {
    return (
        <Stack direction="row">
            <Tooltip title="Search" enterDelay={1000}>
                <div>
                    <IconButton
                        type="button"
                        aria-label="search"
                        sx={{
                            display: { xs: 'inline', md: 'none' },
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
            </Tooltip>
            <TextField
                label="Search"
                variant="outlined"
                size="small"
                slotProps={{
                    input: {
                        endAdornment: (
                            <IconButton type="button" aria-label="search" size="small">
                                <SearchIcon />
                            </IconButton>
                        ),
                        sx: { pr: 0.5 },
                    },
                }}
                sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
            />
            <ThemeSwitcher />
        </Stack>
    );
}

export default function DashboardLayoutBasic(props) {
    const {window} = props;

    const router = useDemoRouter('/dashboard');

    const [session, setSession] = React.useState({
        user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    // Remove this const when copying and pasting into your project.
    const demoWindow = window ? window() : undefined;

    return (
        <ThemeProvider theme={demoTheme}>
            <AppProvider
                navigation={NAVIGATION}
                session={session}
                authentication={authentication}
                router={router}
                theme={demoTheme}
                window={demoWindow}
            >
                <DashboardLayout
                    branding={{
                        logo: <img src={logo} alt="P2P logo" />,
                        title: '',
                        homeUrl: '/',
                    }}
                    slots={{
                        toolbarActions: ToolbarActionsSearch,
                    }}
                    sx={{ width: '100%', height: "auto" }}
                >
                    <PageContainer>
                        <Grid container spacing={1}>
                            <Grid size={5}/>
                            <Grid size={12}>
                                <Chart />
                            </Grid>
                            <Grid size={12}>
                                <Skeleton height={14}/>
                            </Grid>
                            <Grid size={24}>
                                <Skeleton height={300}/>
                            </Grid>
                            <Grid size={4}>
                                <Skeleton height={100}/>
                            </Grid>
                            <Grid size={8}>
                                <Skeleton height={100}/>
                            </Grid>

                            <Grid size={12}>
                                <Skeleton height={150}/>
                            </Grid>
                            <Grid size={12}>
                                <Skeleton height={14}/>
                            </Grid>

                            <Grid size={3}>
                                <Skeleton height={100}/>
                            </Grid>
                            <Grid size={3}>
                                <Skeleton height={100}/>
                            </Grid>
                            <Grid size={3}>
                                <Skeleton height={100}/>
                            </Grid>
                            <Grid size={3}>
                                <Skeleton height={100}/>
                            </Grid>
                        </Grid>
                    </PageContainer>
                </DashboardLayout>
            </AppProvider>
            <Footer/>
        </ThemeProvider>
    );
}