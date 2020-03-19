// Styles
import './skelly-shine.scss';

// Scripts
import Color from 'color';
import convertArray from '~Utils/convert-array';

export const backgroundColor = '#DFDFDF';

export const InitSkellyShine = () => {
    const className = 'skelly-shine';
    const $array = convertArray(document.querySelectorAll(`.${className}`)) || [];

    if ($array.length) {
        $array.forEach($el => {
            const mixBlendMode = $el.dataset.mixBlendMode || 'none';
            const animationDirection = $el.dataset.animationDirection || 'normal';
            const animationDuration = $el.dataset.animationDuration || '1.5s';
            const animationTimingFunction = $el.dataset.animationTimingFunction || 'linear';
            const backgroundImage = `
                linear-gradient(to right, ${colorStops({
                    color: $el.dataset.color || backgroundColor,
                    lightOpacity: $el.dataset.lightOpacity || 0.25,
                    darkOpacity: $el.dataset.darkOpacity || 0.125,
                    lightMultiplier: $el.dataset.lightMultiplier || 0.5,
                    darkMultiplier: $el.dataset.darkMultiplier || 0.5,
                    lightSaturation: $el.dataset.lightSaturation || 0.75,
                    darkSaturation: $el.dataset.darkSaturation || 0.75
                })})
            `;


            // Set styling
            $el.style.mixBlendMode = mixBlendMode;
            $el.style.animationDirection = animationDirection;
            $el.style.animationDuration = animationDuration;
            $el.style.animationTimingFunction = animationTimingFunction;
            $el.style.backgroundImage = backgroundImage;
        });
    }
}

const setColor = ({
    dark = false,
    color,
    multiplier,
    saturation
}) => {
    if (dark)
        return Color(color).darken(multiplier).saturate(saturation).rgb();
    else
        return Color(color).lighten(multiplier).saturate(saturation).rgb();
};

const colorStops = ({
    color,
    lightOpacity,
    darkOpacity,
    lightMultiplier,
    lightSaturation,
    darkMultiplier,
    darkSaturation
}) => {
    const lightColorString = setColor({
        color,
        multiplier: lightMultiplier,
        saturation: lightSaturation
    }).array().join(',');
    
    const darkColorString = setColor({
        dark: true,
        color,
        multiplier: darkMultiplier,
        saturation: darkSaturation
    }).array().join(',');

    return [
        `rgba(${lightColorString}, 0) 0%`,
        `rgba(${lightColorString}, ${lightOpacity * 0.5}) 12.5%`,
        `rgba(${lightColorString}, ${lightOpacity}) 25%`,
        `rgba(${lightColorString}, ${lightOpacity * 0.5}) 37.5%`,
        `rgba(${lightColorString}, 0) 50%`,
        `rgba(${darkColorString}, 0) 50%`,
        `rgba(${darkColorString}, ${darkOpacity * 0.5}) 62.5%`,
        `rgba(${darkColorString}, ${darkOpacity}) 75%`,
        `rgba(${darkColorString}, ${darkOpacity * 0.5}) 87.5%`,
        `rgba(${darkColorString}, 0) 100%`,
    ].join(',');
}
