import React from 'react'
import NoUse from './components/NoUse'

export let Context = React.createContext<any>({age:33})

class App extends React.Component{
    render(){
        return (
            <div>
                <Context.Provider value={{age:22}}><NoUse></NoUse></Context.Provider>
            </div>
        )
    }
}


export default App