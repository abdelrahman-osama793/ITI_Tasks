var element = document.getElementById('PAR');
var fFamily;
var tAlignment;
var lHeight;
var letterSpac;
var indent;
var textTrans;
var tDecoration;
var tBorder;
var bColor;


function ChangeFont(newFont) {
    fontFam = newFont;
    element.style.fontFamily = fontFam;
}

function ChangeAlign(newAlign) {
    tAlignment = newAlign;
    element.style.textAlign = tAlignment;
}

function ChangeHeight(newHeight) {
    lHeight = newHeight;
    element.style.lineHeight = lHeight;
}

function ChangeLSpace(newLetterSpace) {
    letterSpac = newLetterSpace;
    element.style.letterSpacing = letterSpac;
}

function ChangeIndent(newIndent) {
    indent = newIndent;
    element.style.textIndent = indent;
}

function ChangeTransform(newTransform) {
    textTrans = newTransform;
    element.style.textTransform = textTrans;
}

function ChangeDecorate(newDecoration) {
    tDecoration = newDecoration;
    element.style.textDecoration = tDecoration;
}

function ChangeBorder(newBorder) {
    tBorder = newBorder;
    element.style.border = tBorder;
}

function ChangeBorderColor(newBorderColor) {
    bColor = newBorderColor;
    element.style.borderColor = bColor;
}