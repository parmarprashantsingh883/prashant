import React, { Component } from 'react'

export class class_card extends Component {
  render() {
    return (
      <>
       <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-wrap p-lg-4 p-md-3 p-sm-2">
      <div className="card flex-fill h-100 d-flex flex-column">
        <img src={this.props.img} className="card-img-top" alt style={{ height: "350px", objectFit: "cover" }} />
        <div className="card-body d-flex flex-column justify-content-between p-3">
          <div>
            <h5 className="card-title">{ this .props.title}</h5>
            <p className="card-text">{this.props.desc}</p>
          </div>
          <a href="#" className="btn btn-danger mt-auto">Go somewhere</a>
        </div>
      </div>
      </div>
     </>
    
    )
  }
}

export default class_card