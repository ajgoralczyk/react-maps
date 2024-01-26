import React from 'react';

declare const Mozambique: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MozambiqueProps) => React.JSX.Element;
interface MozambiqueProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Mozambique as default };
