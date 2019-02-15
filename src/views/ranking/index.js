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
class App extends Component {
  // async  componentDidMount(){
  //    const res= await  RequestIndex.homeList();
  //    console.log(res)
  // }
  constructor(props) {
    super(props);
    this.state = {
      color: "#000"
    };
  }
  componentDidMount() {
    this.props.homeData();
  }
  render() {
    const {indexData} =this.props
    return (
      <div className="App">
        <Button type="primary">primary</Button>
        <div>少时诵诗书</div>
      </div>
    );
  }
}
// reduex  部分

class Detail extends Component {
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

export default Detail