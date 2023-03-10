import { createStyles, MantineProvider } from '@mantine/core';
// import { useState } from 'react';
import { AppHeader, MainTitle /*, ProgressBar, GoalsTitle*/ } from '../components';

const useStyles = createStyles((theme) => ({
  sideMarginProvider: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -50,
    maxWidth: 1000,
    padding: `0 ${theme.spacing.md}px`,
  },
}));
export default function HomePage() {
  const { classes } = useStyles();
  // const [currentGoalTimeframe, setGoalTimeframe] = useState('Lifetime');
  // const [allGoals, setAllGoals] = useState<any | any>([]);
  return (
    <MantineProvider
      inherit
      theme={{
        defaultGradient: { from: 'red', to: 'orange', deg: 45 },
        primaryColor: 'orange',
      }}
    >
      <AppHeader />
      <div className={classes.sideMarginProvider}>
        <MainTitle />
      </div>
    </MantineProvider>
  );
}
