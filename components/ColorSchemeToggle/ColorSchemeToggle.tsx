import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

// const useStyles = createStyles((theme) => ({
//   : {},
// }));

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const { classes } = useStyles();

  return (
    <Group position="center" mt="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.orange[6],
          marginTop: -22,
          ...theme.fn.hover({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
          }),
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={18} stroke={1.5} />
        ) : (
          <IconMoonStars size={18} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
