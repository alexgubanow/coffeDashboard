
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
/*trying to revive it*/
var TestItems = 
[
    {
        id : "itemCoffee0",
        image : "img/1-milk.png",
        price : "1",
        name : "Espresso"
    },
    {
        id : "itemCoffee1",
        image : "img/2-espresso.png",
        price : "1.2",
        name : "Espresso Macchiato"
    },
    {
        id : "itemCoffee2",
        image : "img/3-steamed-milk.png",
        price : "1.2",
        name : "Espresso con Panna"
    },
    {
        id : "itemCoffee3",
        image : "img/4-hot-water-espresso.png",
        price : "1.2",
        name : "Caffe Latte"
    },
    {
        id : "itemCoffee4",
        image : "img/5-whipped-cream-milk-syrup-espresso.png",
        price : "1.2",
        name : "Flat White"
    },
    {
        id : "itemCoffee5",
        image : "img/6-milk-foam-steamed.png",
        price : "1.2",
        name : "Caffe Breve"
    }
];
class ModalWin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSave = this.handleClickSave.bind(this); 
    this.handleClickClose = this.handleClickClose.bind(this); 
    this.state = {
        isShow: this.props.isShow,
        imageInputValue: "",
        priceInputValue : "",
        nameInputValue : ""
      };
  }
  componentWillReceiveProps(newProps) {
    this.setState({isShow : newProps.isShow});
  }

  handleClickSave(e)
  {
      this.props.onGetNewItem(this.state.imageInputValue,this.state.priceInputValue,this.state.nameInputValue);
      this.setState( { 
          imageInputValue: "",
          priceInputValue : "",
          nameInputValue : "",
          isShow : false
       } );
      
  }
  handleClickClose()
  {
      this.setState({isShow : false});
  }
  handleimageInputAddItem(e)
  {
      this.setState( { 
          imageInputValue: e.target.value
       } );
       
  }
  handlepriceInputAddItem(e)
  {
      this.setState( { 
          priceInputValue: e.target.value
       } );
       
  }
  handlenameInputAddItem(e)
  {
      this.setState( { 
          nameInputValue: e.target.value
       } );
       
  }
  render() {
    return (
        <Modal show={this.state.isShow}>
          <Modal.Header>
            <Modal.Title>Add new coffee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="form-group">
            <label htmlFor="imageInputAddItem">Url To Image</label>
              <input id="imageInputAddItem" type="text" className="form-control" value={this.state.imageInputValue}
              onChange={el => this.handleimageInputAddItem(el)}/>
          </div>
          <div className="form-group">
          <label htmlFor="priceInputAddItem">Price</label>
              <input id="priceInputAddItem" type="text" className="form-control" value={this.state.priceInputValue}
              onChange={el => this.handlepriceInputAddItem(el)}/>
          </div>
          <div className="form-group">
              <label htmlFor="nameInputAddItem">Name</label>
              <input id="nameInputAddItem" type="text" className="form-control" value={this.state.nameInputValue}
              onChange={el => this.handlenameInputAddItem(el)}/>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClickClose}>Close</Button>
            <Button onClick={this.handleClickSave}>Save</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
class NavBarBS extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          EditButtonIsEnable: true,
          DoneButtonIsEnable: false,
          AddItemButtonIsEnable: false,
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
            AddItemButtonIsEnable: true,
            RemoveAllButtonIsEnable: true,
            LoadTestButtonIsEnable: true
         } );
         
    }
    handleClickDoneButton(e)
    {
        this.props.onChangeisEdit(this.state.EditButtonIsEnable);
        this.setState( { 
            EditButtonIsEnable: true,
            DoneButtonIsEnable: false,
            AddItemButtonIsEnable: false,
            RemoveAllButtonIsEnable: false,
            LoadTestButtonIsEnable: false
         } );
    }
    handleClickRemoveAllButton(e)
    {
        this.props.onRemoveAll(true);
    }
    handleClickAddItem(e)
    {
        this.props.onAddItem(true);
    }
    handleClickLoadTestButton(e)
    {
        window.sessionStorage.clear();
        window.location.reload();
    }
   render() {
       return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
        <button type="button" id="EditButton"  style={{'marginRight': '5px'}}
        className={this.state.EditButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickEditButton(el)}>Edit</button>

        <button type="button" id="DoneButton"  style={{'marginRight': '5px'}}
        className={this.state.DoneButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickDoneButton(el)}>Done</button>

        <button type="button" id="AddItemButton"  style={{'marginRight': '5px'}}
        className={this.state.AddItemButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickAddItem(el)}>Add</button>

        <button type="button" id="RemoveAllButton"  style={{'marginRight': '5px'}}
        className={this.state.RemoveAllButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickRemoveAllButton(el)}>Remove all</button>

        <button type="button" id="LoadTestButton"  style={{'marginRight': '5px'}}
        className={this.state.LoadTestButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickLoadTestButton(el)}>Load test arr</button>
        </div>
        </nav>
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
        this.props.onNewPrice(e);
        this.setState( { 
            price: e.target.value
         } );
    }
   render() {
       return (
        <div className="col-xs-12 col-sm-3">
        <div className="well">
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
                           onChange={el => this.handleNewPrice(el)}/>
                       </div>
                   </div>
               </li>
           </ul>
        </div>            
        </div>
    );
   }
  }
class GridElems extends React.Component {
    constructor(props) {
      super(props);
      this.NewPrice = this.NewPrice.bind(this); 
      this.RemoveItem = this.RemoveItem.bind(this);   
      var indexStr = window.sessionStorage.getItem("indexStr");
      if(indexStr == null)
        {
            var indexArr = TestItems.map(el => el.id);
            window.sessionStorage.setItem("indexStr", JSON.stringify(indexArr));
            TestItems.map(el => window.sessionStorage.setItem(el.id, JSON.stringify([el.id, el.image, el.price, el.name])));
            this.state = {
              displayedItems: TestItems,
              indexArr : indexArr
            };
        }
        else
        {
            var indexArr = JSON.parse(indexStr);
            var displayedItems = indexArr.map(el => 
                {
                    var currItem = JSON.parse(window.sessionStorage.getItem(el));
                    return {id : currItem[0], image : currItem[1], price : currItem[2], name : currItem[3]};
                }
            );
            this.state = {
              displayedItems: displayedItems,
              indexArr : indexArr
            };
        }
    }

    GetNewItem(imgStr, priceStr, nameStr) {
        var MaxIndex = 0;
        this.state.indexArr.map(el => {
            var currIndex = parseInt(el.replace("itemCoffee",''));
            if (currIndex > MaxIndex) { MaxIndex = currIndex}
        });
        var newIndex = "itemCoffee" + MaxIndex + 1;
        var indexArr = this.state.indexArr;
        indexArr.push(newIndex);
        var displayedItems = this.state.displayedItems;
        displayedItems.push({id : newIndex, image: imgStr, price : priceStr, name: nameStr});
        window.sessionStorage.setItem("indexStr", JSON.stringify(indexArr));
        displayedItems.map(el => window.sessionStorage.setItem(el.id, JSON.stringify([el.id, el.image, el.price, el.name])));
        this.setState({
            displayedItems: displayedItems,
            indexArr : indexArr
        });
    }

    NewPrice(e) {
        var displayedItems = this.state.displayedItems.map(el => {
            if (el.id == e.target.getAttribute("id").replace("priceInput",''))
                {
                    var price = e.target.value;
                    window.sessionStorage.setItem(el.id, JSON.stringify([el.id, el.image, el.price, el.name]));
                    return {id : el.id, image : el.image, price : price, name : el.name}
                }
            else
                {
                    return {id : el.id, image : el.image, price : el.price, name : el.name}
                }
        });
        this.setState({
            displayedItems: displayedItems
        });
    }
    
    componentWillReceiveProps(newProps) {
        if(newProps.isRemoveAll)
            {
                this.state.indexArr.map(el => window.sessionStorage.removeItem(el));
                window.sessionStorage.setItem("indexStr", JSON.stringify([]));
                this.setState({
                    displayedItems: [],
                    indexArr : []
                });
            }
    }

    RemoveItem(e) {
        var idToRemove = e.target.getAttribute("id").replace("closeBtn","");
        var displayedItems = this.state.displayedItems.filter(el => el.id != idToRemove);
        var indexArr = this.state.indexArr.filter(el => el != idToRemove);
        window.sessionStorage.removeItem(idToRemove);
        window.sessionStorage.setItem("indexStr", JSON.stringify(indexArr));
        this.setState({
            displayedItems: displayedItems,
            indexArr : indexArr
        });
    }
    
    render() {
        return (
            <div className="container-fluid">
            <div className="row" style={{'display': 'flex','display': '-webkit-flex','flexWrap': 'wrap'}}>
                {this.state.displayedItems.map(elem => 
                    <GridElem 
                    key={elem.id} 
                    onRemove={this.RemoveItem} 
                    onNewPrice={this.NewPrice} 
                    onChange={this.handleChange}
                    id={elem.id} 
                    image={elem.image} 
                    price={elem.price} 
                    name={elem.name} 
                    isEdit={this.props.isEdit}/>)}
            </div>
        </div>
        );
    }
  }
  
class AllContent extends React.Component {
    constructor(props) {
      super(props);
      this.handleisEdit = this.handleisEdit.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
      this.RemoveAll = this.RemoveAll.bind(this);
      this.state = {
        isEdit: false,
        showModal: false,
        isRemoveAll: false
        };
    }

    handleisEdit(currState) {
        this.setState({isEdit: currState});
    }
    handleAddItem(currState) {
        this.setState({showModal: currState});
        console.log("showModal " + this.state.showModal);
    }
    RemoveAll(currState) {
        this.setState({isRemoveAll: currState});
    }
  
    render() {
      return (
        <div>
        <ModalWin isShow={this.state.showModal} onGetNewItem={(imgStr, priceStr, nameStr) => 
            { this.childGridElems.GetNewItem(imgStr, priceStr, nameStr); }}/>
            <NavBarBS onAddItem={this.handleAddItem} onChangeisEdit={this.handleisEdit} onRemoveAll={this.RemoveAll} />
            <GridElems ref={instance => { this.childGridElems = instance; }}
             isEdit={this.state.isEdit} 
             isRemoveAll={this.state.isRemoveAll}/>
        </div>
      );
    }
  }

ReactDOM.render(<AllContent/>, document.getElementById("contentSheet") );