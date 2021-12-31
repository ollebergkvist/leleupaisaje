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
          Developed by <a href="https://ollebergkvist.com">Avenir</a>.
          Copyright:
          {new Date().getFullYear()},
        </div>
      </footer>
    </div>
  );
}
