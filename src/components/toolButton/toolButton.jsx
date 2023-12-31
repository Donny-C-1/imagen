function ToolButton({ children }) {
    return (
        <button className="p-4 rounded-md hover:text-myblue-700 hover:bg-myblue-300 transition duration-300 active:scale-90">{children}</button>
    )
}

export default ToolButton;