import {Component} from "react"
export default class Table extends Component{
    constructor(props){
        super()
        this.state={
            keys:[],
            values:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json()).then(x=>{
            this.setState({
                keys:Object.keys(x[0]).slice(0,4),
                values:x.slice(0,5)
            })
        }
        )
    }
    render(){
        return(
             <table border={2}>
                <thead id="demo">
                    <tr>
                    {this.state.keys.map((x,y)=>{
                        return(
                            <th key={y}>{x}</th>)
                    })}
                </tr></thead>
                <tbody>
                {this.state.values.map((x,y)=>{
                    return(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.username}</td>
                        <td>{x.email}</td>
                    </tr>
                )})}
                </tbody>
             </table>
        )
    }

}