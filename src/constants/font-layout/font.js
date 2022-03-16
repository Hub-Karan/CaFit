const getFont = (fontSize, fontFamily) => {
    return (
        {
            fontSize,
            fontFamily
        }
    )
}

const fonts = {
    largeFont69: getFont(69, "Quicksand-Bold"),
    largeFont: getFont(36, "Quicksand-Bold"),
    primaryFont: getFont(24, "Quicksand-Bold"),
    secondaryFont: getFont(20, "Quicksand-Bold"),
    mediumFont: getFont(16, "Quicksand-Medium"),
    mediumFontXs: getFont(14, "Quicksand-Medium"),
    regularBoldFont4x: getFont(18, "Quicksand-Bold"),
    regularBoldFont2x: getFont(16, "Quicksand-Bold"),
    regularBoldFont: getFont(14, "Quicksand-Bold"),
    regularFont6x: getFont(20, "Quicksand-Regular"),
    regularFont4x: getFont(18, "Quicksand-Regular"),
    regularFont2x: getFont(16, "Quicksand-Regular"),
    regularFont: getFont(14, "Quicksand-Regular"),
    regularFontXs: getFont(12, "Quicksand-Bold")
}


export default fonts