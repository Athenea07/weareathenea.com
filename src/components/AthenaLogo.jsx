import React from 'react';

// Owl of wisdom + ascending growth arrows / wings, stylized "A"
function AthenaLogo({ className = 'h-10 w-10', color = '#acacacba' }) {
    return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Rising wing / arrow strokes */}
            <path d="M32 8 L20 56 L28 56 L32 30 L36 56 L44 56 Z" fill="currentColor" style={{ color }} />
            <path d="M34 20 C42 16 52 18 58 12 C50 22 44 24 36 26 Z" fill="currentColor" style={{ color }} opacity="0.85" />
            <path d="M34 26 C41 24 49 25 55 20 C48 29 43 30 37 31 Z" fill="currentColor" style={{ color }} opacity="0.55" />
            {/* crossbar of the A */}
            <rect x="25" y="40" width="14" height="4" rx="2" fill="currentColor" style={{ color }} />
        </svg>
    );
}

export default AthenaLogo;
