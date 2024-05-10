import { Dispatch, SetStateAction } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

type TypePropsSlider = {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    array: [];
};

const Slider = ({ index, setIndex, array }: TypePropsSlider) => {
    return (
        <Lightbox
            slides={array}
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
    );
};

export default Slider;
