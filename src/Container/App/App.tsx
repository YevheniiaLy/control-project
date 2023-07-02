import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Main from 'Container/Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline>
                    <Main />
                </CssBaseline>
            </StyledEngineProvider>
        </>
    )
}
export default App
