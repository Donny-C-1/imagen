import { useState } from "react";
import UploadIcon from "../../assets/icons/upload_icon";
import { useRef } from "react";
import './canvas.css';

function Canvas({ canvas }) {
    const [ noOfImages, setNoOfImages ] = useState(0);

    const addImage = (e) => {
        uploadImage(e, canvas.current);
        setNoOfImages(v => v + 1);
    }

    return (
        <div id="viewport" className="flex-auto grid place-items-center">
            {noOfImages == 0 && (<label htmlFor='fileGet' className="hover:cursor-pointer">
                <input type="file" name="fileGet" id="fileGet" onInput={addImage} hidden />
                <UploadIcon />
            </label>)}
            <canvas ref={canvas} hidden>Sorry! Your browser does not support canvas. Use a more recent browser.</canvas>
        </div>
    )
}

function uploadImage(e, c) {
    const ctx = c.getContext('2d');
    const img = document.createElement('img');
    img.src = URL.createObjectURL(e.currentTarget.files[0]);

    img.onload = () => {
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img, 0, 0);
        c.removeAttribute('hidden');
    }
}

export default Canvas;