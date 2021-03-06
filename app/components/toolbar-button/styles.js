export default function getStyles(theme) {
  const unit = theme.GRID.unit;

  return {
    block: {
      width: '100%',
      color: theme.PALETTE.primary,
      marginBottom: unit,
      fontSize: unit * 2,
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
      boxSizing: 'border-box',
      alignSelf: 'flex-start'
    }
  };
}