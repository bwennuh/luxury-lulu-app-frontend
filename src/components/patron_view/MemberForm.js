import React, {Component} from 'react' 

export default class MemberForm extends Component {

    state ={
        patron_name: "",
        age: "",
        phone_number: "",
        email: ""
    }

    requestToServer = (e)=>{
        e.preventDefault()
        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method:  "POST",
            body: JSON.stringify({...this.state})
        }

        fetch("http://localhost:9292/patrons/", reqObj)
        .then(res => res.json())
        .then((patron => this.props.addmember(patron)))
      }

//      phone_number = (inputtxt) => 
//       {const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//           if(inputtxt.value.match(phoneno))
//           {
//               return true;
//           }
          
//           else
//           {
//               alert("Error");
//           return false;
//           }
//   }
  
      render() {
        return (
          <section className="form">
            <div>
              <h2> Become a Lulu Luxury Member</h2>
              <h4>Vacations should be easy, fun and unforgettable. More than a reward for hard work, they’re an opportunity to recharge, reconnect and remind each other what matters most. They’re fuel for a better life in between our moments away, because knowing another vacation is just around the corner keeps us going. That’s what a Lulu Luxury Resorts membership delivers. Our destinations, events and experiences help you make a habit of breaking from the routine. With access to a lifetime of entertainment and activities, you and your family can enjoy all that vacations offer over and over again.</h4>
            </div>
            <form onSubmit= {this.requestToServer} className="form-inline ml-4">

              <input value = {this.state.patron_name} onChange={(e)=> this.setState({patron_name:e.target.value})}type="text" className="form-control mb-2 mr-sm-2" placeholder="Full Name"/>
                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.age}onChange={(e)=> this.setState({age: e.target.value})} type="text" className="form-control" placeholder="Age"/>
                </div>

                         <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.email}onChange={(e)=> this.setState({email: e.target.value})} type="text" className="form-control" placeholder="Email"/>
                </div>

                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.phone_number} onChange={(e)=> this.setState({phone_number: e.target.value})} type="text" className="form-control" placeholder="Mobile Number"/>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            </section>
        )

    }
}

// add & import to where this will show 
// addMember = patron => this.setState({
//     patrons: [...this.state.patrons, patron]
//     })
     