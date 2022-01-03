import * as React from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';
import '../styles/reset.css';
import '../styles/grid/bootstrap-grid.css';
import '../styles/global.css';
import '../styles/typography.css';
import { content } from '../styles/modules/layout.module.css';

export function Layout({ children }) {
    return (
        <>
            <div class="container">
                <div class="row">
                    <Navbar />
                    <main className={content}>{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
