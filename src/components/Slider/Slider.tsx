import { Dispatch, SetStateAction } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

type TypePropsSlider = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    array: [];
};

const Slider = ({ open, setOpen, array }: TypePropsSlider) => {
    return (
        <Lightbox
            slides={array}
            open={open}
            close={() => setOpen(false)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
    );
};

export default Slider;
