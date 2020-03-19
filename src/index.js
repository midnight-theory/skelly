import { InitSkellyCircle } from '~Components/skelly-circle/skelly-circle';
import { InitSkellyRectangle } from '~Components/skelly-rectangle/skelly-rectangle';

export {
    InitSkellyCircle,
    InitSkellyRectangle
};

export const InitAll = () => {
    InitSkellyCircle();
    InitSkellyRectangle();
};
window.onload = () => InitAll();