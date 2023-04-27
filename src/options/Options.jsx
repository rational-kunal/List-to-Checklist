import '@fontsource/roboto/300.css'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import DarkApp from '../DarkApp'
import settings from '../core/settings'

function App() {
  const [isExtensionEnable, setIsExtensionEnable] = useState(false)
  const [inputURLs, setInputURLs] = useState([])
  const [updateEnabled, setUpdateEnabled] = useState(false)

  useEffect(() => {
    settings.optedInURLs().then((URLs) => {
      setInputURLs(URLs.join(','))
    })

    settings.isExtensionEnable().then((enable) => {
      setIsExtensionEnable(enable)
    })
  }, [])

  const enableTapHandler = () => {
    settings.setIsExtensionEnable(!isExtensionEnable)
    setIsExtensionEnable(!isExtensionEnable)
  }

  const updateTapHandler = () => {
    settings.updateOptedInURL(inputURLs.split(','))
    setUpdateEnabled(false)
  }

  const version = `v${chrome.runtime.getManifest().version}`

  return (
    <DarkApp>
      <Container maxWidth="sm">
        <Box>
          <Stack direction="column" spacing={1}>
            <Typography variant="h1">List to Checklist</Typography>

            <Paper elevation={1} sx={{ padding: 1 }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PowerSettingsNewIcon />}
                color={isExtensionEnable ? 'error' : 'success'}
                onClick={enableTapHandler}
                fullWidth
              >
                {isExtensionEnable ? 'Disable' : 'Enable'}
              </Button>
            </Paper>

            <Paper elevation={1} sx={{ padding: 1 }}>
              <Stack direction="column" spacing={1}>
                <TextField
                  label="Opted in URLs"
                  multiline
                  rows={4}
                  placeholder="https://www.example.com, https://www.example2.com"
                  value={inputURLs}
                  onChange={(e) => {
                    setUpdateEnabled(true)
                    setInputURLs(e.target.value)
                  }}
                />
                <Button
                  variant="outlined"
                  size="medium"
                  onClick={updateTapHandler}
                  disabled={!updateEnabled}
                >
                  Update
                </Button>
              </Stack>
            </Paper>
            <Typography variant="subtitle">{version}</Typography>
          </Stack>
        </Box>
      </Container>
    </DarkApp>
  )
}

export default App
