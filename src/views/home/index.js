import React, { Component } from "react";
import { Button } from "antd-mobile";
import RequestIndex from "./../../service/module/index.js";
import  {Link} from 'react-router-dom'
// reduex  部分
import { connect } from "react-redux";
import { homeData } from "../../store/home.js";
const mapStateToProps = (state, ownProps) => {
  return {
    indexData: state.homeRedurces.indexData
  };
};
class Home extends Component {
  // async  componentDidMount(){
  //    const res= await  RequestIndex.homeList();
  //    console.log(res)
  // }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
   if(Object.getOwnPropertyNames(this.props.indexData).length === 0) {
    this.props.homeData()
   };
  }
  render() {
    const {indexData} =this.props;
    console.log(indexData)
    return (
      <div className="App">
        {/* <Link to="/indexDetail/"> */}
        <Button type="primary">详情页面</Button>
        {/* </Link> */}
        <div>我是首页</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { homeData }
)(Home);
