import { DataDisplay } from '@components/DataDisplay';
import { useBtc, useTheme } from '@hooks';
import { Box, Container } from '@mui/material';
import { TitlesStyled } from '@styles/material-ui/Titles';

export const TopSearches = () => {
  const btcContext = useBtc();
  const themeContext = useTheme();

  const countMap: { [hash: string]: number } = {};
  btcContext.searches.forEach((hash) => {
    if (countMap[hash]) {
      countMap[hash]++;
    } else {
      countMap[hash] = 1;
    }
  });

  const sortedHashes = Object.keys(countMap).sort((a, b) => countMap[b] - countMap[a]);

  const topSearches = sortedHashes.slice(0, 5);

  return (
    <Container
      sx={{
        padding: '10px',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: themeContext.theme.colors.secundary,
        borderRadius: '10px',
        transition: '0.2s ease',
      }}
    >
      <TitlesStyled sx={{ color: themeContext.theme.colors.fontDefault }}>TOP SEARCHES</TitlesStyled>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        {topSearches.map((hash, index) => (
          <DataDisplay hash={hash} index={index + 1} key={index} />
        ))}
      </Box>
    </Container>
  );
};
