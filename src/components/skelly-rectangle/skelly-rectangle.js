// Styles
import './skelly-rectangle.scss';

// Scripts
import convertArray from '~Utils/convert-array';
import {
    InitSkellyShine,
    backgroundColor
} from '~Components/skelly-shine/skelly-shine';

export const InitSkellyRectangle = () => {
    const className = 'skelly-rectangle';
    const $array = convertArray(document.querySelectorAll(`.${className}`)) || [];

    if ($array.length) {
        $array.forEach($el => {
            if ($el.innerHTML.trim() === '') {
                const width = $el.dataset.width || '100%';
                const height = $el.dataset.height || '12px';
                const radius = $el.dataset.radius || '3px';
                const color = $el.dataset.color || backgroundColor;

                // Init skelly-shine within
                $el.innerHTML = `
                    <div class="skelly-rectangle__shape" 
                        style="
                            background-color: ${color};
                            border-radius: ${radius};
                            width: ${width};
                            height: ${height};
                        "
                    >
                        <div class="skelly-shine"></div>
                    </div>
                `;
                InitSkellyShine();
            }
        });
    }
};