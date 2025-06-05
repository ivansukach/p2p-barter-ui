import * as React from 'react';
import './Footer.css';
import { Box } from '@mui/material';

export default function Footer() {
    return (
        <Box component="footer" style={{ borderTop: '1px solid', borderTopColor: 'var(--mui-palette-divider)' }}>
            <div className="copyrights">
                <div>Released under the MIT License</div>
                <div>Copyright © 2025 <a href='https://github.com/ivansukach'>Ivan Sukach</a> - All Rights Reserved</div>
            </div>
        </Box>
    );
}