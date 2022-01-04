import * as React from 'react';
import { SocialLinks } from './social';

export function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="col">
                    <SocialLinks />
                </div>
                <div className="col">
                    Developed with love by{' '}
                    <a href="https://www.ollebergkvist.com">Olle Bergkvist</a>.
                    Copyright:
                    {new Date().getFullYear()},
                </div>
            </footer>
        </div>
    );
}
