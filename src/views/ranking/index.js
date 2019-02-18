import React, { Component } from "react";
import { Button } from "antd-mobile";
import RequestIndex from "./../../service/module/index.js";

// reduex  部分
import { connect } from "react-redux";
import { homeData } from "../../store/home.js";

const mapStateToProps = (state, ownProps) => {
  return {
    indexData: state.homeRedurces.indexData
  };
};
// reduex  部分

class Ranking extends Component {
  // async  componentDidMount(){
  //    const res= await  RequestIndex.homeList();
  //    console.log(res)
  // }

  render() {
    return (
      <div className="App">
        <Button type="primary">Ranking</Button>
        <div>我是导航三</div>
      </div>
    );
  }
}

export default Ranking