import ToolButton from "../toolButton/toolButton";
import FilterIcon from "../../assets/icons/filter_icon.jsx";
import TextIcon from "../../assets/icons/text_icon.jsx";
import CropIcon from "../../assets/icons/crop_icon.jsx";
import OptionsIcon from "../../assets/icons/options_icon.jsx";

function SideToolBar() {
    return (
        <div className="flex flex-col items-center pt-8 px-2 w-max bg-bluegray-900 border-r border-myblue-300">
            <ToolButton>
                <FilterIcon />
            </ToolButton>
            <ToolButton>
                <TextIcon />
            </ToolButton>
            <ToolButton>
                <CropIcon />
            </ToolButton>
            <ToolButton>
                <OptionsIcon />
            </ToolButton>
        </div>
    )
}

export default SideToolBar;