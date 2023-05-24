const HoveringComponent = () => {
    return(
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center gap-5">
            <svg width="71" height="324" viewBox="0 0 71 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2.6072C2 -0.41733 2.14656 8.68885 2.68738 11.6435C4.05641 19.123 6.78762 25.596 9.42365 32.5092C14.3724 45.4878 18.5859 58.7471 23.996 71.4475C34.2784 95.5857 42.7934 122.206 47.5042 148.667C49.769 161.388 51.597 179.754 46.267 191.22C43.3069 197.587 31.1695 196.662 26.0581 196.313C19.8784 195.891 21.7964 180.574 21.7964 175.94C21.7964 162.338 33.2103 154.261 44.0674 154.91C58.8725 155.795 67.319 182.393 67.5756 196.806C67.7523 206.734 69.9291 216.732 68.5379 226.708C66.9594 238.027 62.5712 249.855 58.6397 260.224C52.6499 276.022 42.9306 289.954 34.4441 303.927C31.24 309.203 25.977 315.883 24.271 322" stroke="#82868D" strokeOpacity="0.24" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6"/>
            </svg>
            <p className="text-[#FFFFFF50] 2lg:text-[30px] lg:text-[24px]">Drag and drop</p>
        </div>
    )
}

export default HoveringComponent
