import React, { Component } from "react";
import { Button } from "antd-mobile";
import RequestIndex from "./../../service/module/index.js";
class Detail extends Component {
  // async  componentDidMount(){
  //    const res= await  RequestIndex.homeList();
  //    console.log(res)
  // }

  render() {
    return (
      <div className="App">
        <Button type="primary">Detail</Button>
        <div>我是导航二</div>
      </div>
    );
  }
}

export default Detail