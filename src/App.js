import { ThemeProvider } from "@material-ui/core";
import { ConfirmProvider } from "material-ui-confirm";
import { Provider } from "react-redux";



function App() {

  return (
    <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ConfirmProvider defaultOptions={{
                    title: 'Porfavor Confirma Esta Acción',
                    confirmationText : 'Confirmar',
                    cancellationText : 'Cancelar'
                }}>
                    <div>asdasd</div>
                </ConfirmProvider>
            </ThemeProvider>
      </Provider>
    );
}

export default App;
