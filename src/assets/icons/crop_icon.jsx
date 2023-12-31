function CropIcon() {
    return (
        <svg width="512" height="512" viewBox="0 0 512 512">
            <g style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }}>
                <path d="M144,48V320a48,48,0,0,0,48,48H464" />
                <path d="M368,304V192a48,48,0,0,0-48-48H208" />
                <line x1="368" y1="368" x2="368" y2="464" />
                <line x1="144" y1="144" x2="48" y2="144" />
            </g>
        </svg>
    )
}

export default CropIcon;