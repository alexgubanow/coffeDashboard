/*trying to revive it*/
var TestItems = 
[
    {
        id : 0,
        image : "img/1-milk.png",
        price : 1,
        name : "Espresso"
    },
    {
        id : 1,
        image : "img/2-espresso.png",
        price : 1.2,
        name : "Espresso Macchiato"
    },
    {
        id : 2,
        image : "img/3-steamed-milk.png",
        price : 1.2,
        name : "Espresso con Panna"
    },
    {
        id : 3,
        image : "img/4-hot-water-espresso.png",
        price : 1.2,
        name : "Caffe Latte"
    },
    {
        id : 4,
        image : "img/5-whipped-cream-milk-syrup-espresso.png",
        price : 1.2,
        name : "Flat White"
    },
    {
        id : 5,
        image : "img/6-milk-foam-steamed.png",
        price : 1.2,
        name : "Caffe Breve"
    }
];

class Buttons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          EditButtonIsEnable: true,
          DoneButtonIsEnable: false,
          AddButtonIsEnable: false,
          RemoveAllButtonIsEnable: false,
          LoadTestButtonIsEnable: false
        };
    }
  
    handleClickEditButton(e)
    {
        this.props.onChangeisEdit(this.state.EditButtonIsEnable);
        this.setState( { 
            EditButtonIsEnable: false,
            DoneButtonIsEnable: true,
            AddButtonIsEnable: true,
            RemoveAllButtonIsEnable: true,
            LoadTestButtonIsEnable: true
         } );
         
    };
    handleClickDoneButton(e)
    {
        this.props.onChangeisEdit(this.state.EditButtonIsEnable);
        this.setState( { 
            EditButtonIsEnable: true,
            DoneButtonIsEnable: false,
            AddButtonIsEnable: false,
            RemoveAllButtonIsEnable: false,
            LoadTestButtonIsEnable: false
         } );
    };
    handleClickAddButton(e)
    {

    };
    handleClickRemoveAllButton(e)
    {
        
    };
    handleClickLoadTestButton(e)
    {
        
    };
   render() {
       return (
        <div className="container-fluid">
        <button type="button" id="EditButton"  style={{'marginRight': '5px'}}
        className={this.state.EditButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickEditButton(el)}>Edit</button>

        <button type="button" id="DoneButton"  style={{'marginRight': '5px'}}
        className={this.state.DoneButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickDoneButton(el)}>Done</button>

        <button type="button" id="AddButton"  style={{'marginRight': '5px'}}
        className={this.state.AddButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickAddButton(el)}>Add</button>

        <button type="button" id="RemoveAllButton"  style={{'marginRight': '5px'}}
        className={this.state.RemoveAllButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickRemoveAllButton(el)}>Remove all</button>

        <button type="button" id="LoadTestButton"  style={{'marginRight': '5px'}}
        className={this.state.LoadTestButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickLoadTestButton(el)}>Load test arr</button>
        </div>
    );
   }
  }

  class GridElem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          price : this.props.price
        };
    }
    handleRemoveItem(e) {
        this.props.onRemove(e);
    }
    handleNewPrice(e) {
        this.setState( { 
            price: document.getElementById(e.target.getAttribute("id")).value
         } );
    }
    handleClickSavePrice(e)
    {
        
    }
   render() {
       return (
        <div className="well col-xs-12 col-sm-3" style={{'marginRight': '20px'}}>
        <button type="button" className={this.props.isEdit ? "close" :"close hidden"} 
         aria-label="Close" onClick={el => this.handleRemoveItem(el)}>
         <span id={"closeBtn" + this.props.id} aria-hidden="true">&times;</span></button>
            <ul className="list-unstyled">
                <li><img src={this.props.image} className="img-thumbnail img-rounded" style={{'marginBottom': '10px'}} alt={this.props.name}/></li>
                <li style={{"verticalAlign":"middle"}}>
                    <div className="row">
                        <div className="col-sm-6">
                        <p className="form-control-static">{this.props.name}</p></div>
                        <div className="col-sm-6">
                            <p className={this.props.isEdit ? "form-control-static pull-right hidden" :"form-control-static pull-right"}>{this.state.price} EUR</p>
                            <input type="text" id={"priceInput" + this.props.id}
                            className={this.props.isEdit ? "form-control pull-right":"form-control pull-right hidden"} value={this.state.price} 
                            onChange={el => this.handleNewPrice(el)} onClick={el => this.handleClickSavePrice(el)}/>
                        </div>
                    </div>
                </li>
            </ul>            
        </div>
    );
   }
  }
class GridElems extends React.Component {
    constructor(props) {
      super(props);
      this.RemoveItem = this.RemoveItem.bind(this);
      this.state = {
        displayedItems: TestItems
      };
    }
    RemoveItem(item) {
        var idToRemove = item.target.getAttribute("id").replace("closeBtn","");
        var displayedItems = TestItems.filter(item => item.id != idToRemove);
        TestItems = displayedItems;//need to save on disk
        this.setState({
            displayedItems: displayedItems
        });
    }
    
    render() {
        return (
            <div className="container-fluid">
            <div className="row" style={{'display': 'flex','display': '-webkit-flex','flexWrap': 'wrap'}}>
                {this.state.displayedItems.map(elem => 
                    <GridElem key={elem.id} onRemove={this.RemoveItem} id={elem.id} image={elem.image} price={elem.price} name={elem.name} isEdit={this.props.isEdit} onChange={this.handleChange}/>)}
            </div>
        </div>
        );
    }
  }
class AllContent extends React.Component {
    constructor(props) {
      super(props);
      this.handleisEdit = this.handleisEdit.bind(this);
      this.state = {isEdit: false};
    }

    handleisEdit(currState) {
      this.setState({isEdit: currState});
    }  
  
    render() {
      return (
        <div>
        <input id="fileInput" type="file"  className="hidden" />
            <nav className="navbar navbar-default">
                <Buttons onChangeisEdit={this.handleisEdit}/>
            </nav>
            <GridElems isEdit={this.state.isEdit}/>
        </div>
      );
    }
  }

ReactDOM.render(<AllContent/>, document.getElementById("contentSheet") );