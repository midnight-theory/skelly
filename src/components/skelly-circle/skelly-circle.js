// Styles
import './skelly-circle.scss';

// Scripts
import convertArray from '~Utils/convert-array';
import {
    InitSkellyShine,
    backgroundColor
} from '~Components/skelly-shine/skelly-shine';

export const InitSkellyCircle = () => {
    const className = 'skelly-circle';
    const $array = convertArray(document.querySelectorAll(`.${className}`)) || [];

    if ($array.length) {
        $array.forEach($el => {
            if ($el.innerHTML.trim() === '') {
                $el.style.width = $el.dataset.size || '100%';
                $el.style.height = $el.dataset.size || '100%';
                const color = $el.dataset.color || backgroundColor;

                // Init skelly-shine within
                $el.innerHTML = `
                    <div class="skelly-circle__shape" style="background-color: ${color}">
                        <div class="skelly-shine"></div>
                    </div>
                `;
                InitSkellyShine();
            }
        });
    }
};