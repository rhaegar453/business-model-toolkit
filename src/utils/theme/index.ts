const colors = {
  bg: '#041C32',
  primary: '#51C4D3',
  secondary: '#126E82',
  ternary: '#072E51',
  text_primary: '#D8E3E7',
  danger: '#EF617C',
};

export default colors;
export type ColorTypes=keyof typeof colors;

const sizes = {
  s: '5px',
  m: '10px',
  l: '20px',
  xl: '30px',
};

export type SizeTypes=keyof typeof sizes;

export interface ThemeType{
  colors?:{
    [property in ColorTypes]?:string
  }
  margins?:{
    [property in SizeTypes]?:string
  }
  paddings?:{
    [property in SizeTypes]?:string
  },
  borderRadii?:{
    [property in SizeTypes]?:string
  }
}

export const theme:ThemeType = {
  colors: {
    ...colors,
  },
  margins: {
    ...sizes,
  },
  paddings: {
    ...sizes,
  },
  borderRadii: {
    ...sizes,
  },
};

export const getColor = (theme:ThemeType, color:ColorTypes, colors:any) => theme?.colors?.[color] || colors?.[color];
