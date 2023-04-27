import '@fontsource/roboto/300.css'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DarkApp from '../DarkApp'

function App() {
  const goToOptions = () => {
    chrome.runtime.openOptionsPage()
  }

  const version = `v${chrome.runtime.getManifest().version}`

  return (
    <DarkApp>
      <Box p={1} sx={{ width: '250px' }}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h5">List to Checklist</Typography>

          <Button
            variant="outlined"
            size="medium"
            startIcon={<SettingsIcon />}
            onClick={goToOptions}
          >
            Options
          </Button>

          <Typography variant="subtitle">{version}</Typography>
        </Stack>
      </Box>
    </DarkApp>
  )
}

export default App
