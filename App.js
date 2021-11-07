
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import  './Index.css'
import Plan from './Paln'
export default class App extends Component {
    //This is State Field
    state={
        items:[],
        text:""
    }
    HandlChange=e=>{
        this.setState({text:e.target.value})
    }
    HandleAdd=e=>{
        if(this.state.text !== ""){
            const items=[...this.state.items, this.state.text];
            this.setState({items: items,text:""});
        }
    }
    handleDelete= id =>{
        console.log("deleted", id)
        const Olditems = [...this.state.items]
        console.log("Olditems", Olditems)
        const items = Olditems.filter((element, i) =>{
            return i !== id
        })
        this.setState({items:items});
    }
    render() {
        return (
            <>
            <div className="container-fluid my-5">
               <div className="row">
                    <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                  <h2 className="text-center">Today's Plan</h2>
                  <div className="row">
                      <div className="col-9">
                          <input type="text"
                           className="form-control"
                           placeholder="Enter Your Plan" value={this.state.text} onChange={this.HandlChange}/>
                      </div>
                      <div className="col-2">
                          <button className="btn btn-warning" px-5 
                          font-weight-bold onClick={this.HandleAdd}>Add</button>
                      </div>
                      <div className="container-fluid">
                          <ul className="list-unstyled row m-5">
                              {
                                  this.state.items.map((value, i)=>{
                                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                                  })
                              }
                          </ul>
                      </div>
                  </div>
                    </div>
               </div>    
            </div>
            </>
        )
    }
}
