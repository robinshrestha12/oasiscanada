import React, {Component} from "react";
import repFrench from "../../assets/pdffiles/report/10yearsrreport_French.pdf"

class reports extends Component (){
  render(){
    <div className="Report_French">
       <a href = {repFrench} target = "_blank"> View Pdf</a>
    </div>
  }
}

export default reports;