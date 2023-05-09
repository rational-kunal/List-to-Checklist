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
import SaveIcon from '@mui/icons-material/Save'

function App() {
  const [isExtensionEnable, setIsExtensionEnable] = useState(false)
  const [inputURLs, setInputURLs] = useState([])
  const [updateEnabled, setUpdateEnabled] = useState(false)

  useEffect(() => {
    settings.optedInURLs().then((URLs) => {
      setInputURLs(URLs.join(', '))
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
    const newOptedInURLs =
      inputURLs
        .split(',')
        .map((url) => url.trim())
        .filter((url) => url !== '') || []
    settings.updateOptedInURL(newOptedInURLs)
    setUpdateEnabled(false)
  }

  const version = `v${chrome.runtime.getManifest().version}`

  return (
    <DarkApp>
      <Container sx={{ marginTop: 3.5 }} maxWidth="sm">
        <Box>
          <Stack direction="column" spacing={1.5}>
            <Stack direction="column">
              <Typography variant="h3">List to Checklist</Typography>
              <Typography variant="subtitle1">
                A Chrome extension that converts all list elements into checklist elements, making
                it easier to keep track of tasks and progress.
              </Typography>
            </Stack>

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

            <Paper elevation={1} sx={{ padding: 1.5 }} hidden={!isExtensionEnable}>
              <Stack direction="column" spacing={1.5}>
                <TextField
                  label="Opted in URLs separated by comma"
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
                  startIcon={<SaveIcon />}
                >
                  Update
                </Button>
              </Stack>
            </Paper>
            <Typography variant="subtitle1">{version}</Typography>
          </Stack>
        </Box>
      </Container>
    </DarkApp>
  )
}

export default App
