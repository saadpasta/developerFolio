import React, {useState, useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";
import GridLoader from "react-spinners/GridLoader";

function App() {
	const [loading, setLoading]=useState(false);
	useEffect(()=>{
		setLoading(true);
		setTimeout(()=>{
			setLoading(false);
		}, 5000)
	}, [])

  return (
    <div className="App">
    {
    	loading ? (
    		<div className="loader">
    			<GridLoader color={'#D4AAF8'} loading={loading} size={30} />
    		</div>
    	) : (
      		<Main />
      	)
    }
    </div>
  );
}

export default App;
