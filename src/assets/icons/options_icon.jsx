function OptionsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <g style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }}>
                <line x1="368" y1="128" x2="448" y2="128" />
                <line x1="64" y1="128" x2="304" y2="128" />
                <line x1="368" y1="384" x2="448" y2="384" />
                <line x1="64" y1="384" x2="304" y2="384" />
                <line x1="208" y1="256" x2="448" y2="256" />
                <line x1="64" y1="256" x2="144" y2="256" />
                <circle cx="336" cy="128" r="32" />
                <circle cx="176" cy="256" r="32" />
                <circle cx="336" cy="384" r="32" />
            </g>
        </svg>)
}

export default OptionsIcon;