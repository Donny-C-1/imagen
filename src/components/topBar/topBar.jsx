import logo from '../../assets/images/logo.png';
import SettingsSVG from '../../assets/images/settings.jsx';
import ShareSVG from '../../assets/images/shareSVG.jsx';

function TopBar({ canvas, imageName, updateName }) {
    return (
        <div className=" px-16 py-4 flex items-center bg-bluegray-900 border-b border-myblue-300">
            <span>
                <img src={logo} alt='' width='100%' height='auto' className='w-20' />
            </span>
            <NameInput name={imageName} updateName={updateName} />
            <button className="mr-8">
                <SettingsSVG />
            </button>
            <button className='flex items-center bg-myblue-700 px-4 py-2 gap-2 rounded-full font-medium text-sm' onClick={() => exportImage(canvas.current, imageName)}>
                <ShareSVG /> EXPORT
            </button>
            
        </div>
    )
}

function NameInput({ name, updateName }) {
    return (
        <>
            <input type='text' className="w-96 mx-auto border-2 border-myblue-400 rounded-2xl px-4 py-2 text-center outline-none" defaultValue={name} onInput={(e) => updateName(e.currentTarget.value)} />
        </>
    )
}

function exportImage(c, name) {
    const link = document.createElement('a');
    const canvasData = c.toDataURL('image/png');
    link.setAttribute('href', canvasData);
    link.setAttribute('download', name)
    link.click();
}

export default TopBar;