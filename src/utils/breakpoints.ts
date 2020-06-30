const size = {
  mobile: '575px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
} as const;

const breakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
} as const;

export default breakpoints;
