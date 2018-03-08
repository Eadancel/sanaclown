import Typography from "typography";

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1,
    googleFonts: [
        {
          name: 'Oxygen Mono',
          styles: [
            'normal',
            'bold'
          ],
        }],
    headerFontFamily: ['Oxygen Mono'],
    bodyFontFamily: ['Oxygen Mono'],
    headerWeight:'normal',
 });

export default typography;