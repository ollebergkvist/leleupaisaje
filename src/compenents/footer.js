import * as React from 'react';
import { SocialLinks } from './social';

export function Footer() {
    return (
        <div class="footer">
            <footer>
                <div class="col">
                    <SocialLinks />
                </div>
                <div class="col">
                    Developed with love by{' '}
                    <a href="https://www.ollebergkvist.com">Olle Bergkvist</a>.
                    Copyright:
                    {new Date().getFullYear()},
                </div>
            </footer>
        </div>
    );
}
