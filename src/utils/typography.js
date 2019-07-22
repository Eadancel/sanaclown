import Typography from "typography";

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1,
    googleFonts: [
        {
          name: 'Oxygen Mono',
          styles: [
            'normal',
            'bold'
          ],
        },
        {
          name: 'Baloo',
          styles: [
            'regular'
          ],
        },
        {
          name: 'Hind',
          styles: [
            'regular',
            'bold'
          ],
        }
      ],
    headerFontFamily: ['Baloo'],
    bodyFontFamily: ['Hind'],
    headerWeight:'bold',
 });

export default typography;