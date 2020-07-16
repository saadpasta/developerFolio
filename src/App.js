import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";




const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const [setup, setSetup] = useState({
    theme: "lightTheme",
    themeIcon: <Moon />
  });

  const toggleTheme = () => {
    if (setup.theme === "lightTheme") {
      setSetup({
        theme: "darkTheme",
        themeIcon: <Sun className="icon-swt" />
      });
    } else {
      setSetup({
        theme: "lightTheme",
        themeIcon: <Moon className="icon-swt" />
      });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <ThemeProvider
        theme={setup.theme === "lightTheme" ? lightTheme : darkTheme}
      >
        <Container fluid={true} className="App">
          <GlobalStyles />
          <Row className="wrapper_header d-flex flex-column align-items-center ">
            <Head toggleTheme={toggleTheme} icon={setup.themeIcon} />
            <Home />
          </Row>
          <Projects />
          <About />
          <Row className="wrapper_contact d-flex flex-column ">
            <Contact />
            <Footer />

          </Row>
        </Container>
     </ThemeProvider>
   );
	/}
}; 
function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
