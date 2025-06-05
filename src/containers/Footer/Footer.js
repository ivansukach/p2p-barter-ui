import * as React from 'react';
import './Footer.css';
import { useTheme } from '@mui/material/styles';

export default function Footer(props) {
    const theme = useTheme();

    return (
        <footer style={{ borderTop: '1px solid', borderTopColor: theme.palette.divider }}>
            <div className="copyrights">
                <div>Released under the MIT License</div>
                <div>Copyright © 2025 <a href='https://github.com/ivansukach'>Ivan Sukach</a> - All Rights Reserved</div>
                <div>Сейчас тема: {theme.palette.mode}</div>
            </div>
        </footer>
    );
}