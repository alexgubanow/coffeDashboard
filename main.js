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

class Buttons extends React.Component {
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
    handleClickLoadTestButton(e)
    {
        window.sessionStorage.clear();
        window.location.reload();
    }
   render() {
       return (
        <div className="container-fluid">
        <button type="button" id="EditButton"  style={{'marginRight': '5px'}}
        className={this.state.EditButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickEditButton(el)}>Edit</button>

        <button type="button" id="DoneButton"  style={{'marginRight': '5px'}}
        className={this.state.DoneButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickDoneButton(el)}>Done</button>

        <button type="button" id="AddItemButton"  style={{'marginRight': '5px'}}  data-toggle="modal" data-target="#AddItemFormModal"
        className={this.state.AddItemButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        >Add</button>

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

  class AddItemForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imageInputValue: "",
        priceInputValue : "",
        nameInputValue : ""
      };
    }

    handleClickSaveButton(e)
    {
        this.props.onGetNewItem(this.state.imageInputValue,this.state.priceInputValue,this.state.nameInputValue);
        this.setState( { 
            imageInputValue: "",
            priceInputValue : "",
            nameInputValue : ""
         } );
        $('#AddItemFormModal').modal('hide');
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
        <div id="AddItemFormModal" className={"modal fade"}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Add new coffee</h4>
                </div>
                <div className="modal-body">
                <ul className="list-unstyled">
                <li>
                    <div className="input-group">
                        <span className="input-group-addon">url to image</span>
                        <input id="imageInputAddItem" type="text" className="form-control" value={this.state.imageInputValue}
                        onChange={el => this.handleimageInputAddItem(el)}/>
                    </div>
                </li>
                <li>
                    <div className="input-group">
                        <span className="input-group-addon">price</span>
                        <input id="priceInputAddItem" type="text" className="form-control" value={this.state.priceInputValue}
                        onChange={el => this.handlepriceInputAddItem(el)}/>
                    </div>
                </li>
                <li>
                    <div className="input-group">
                        <span className="input-group-addon">name</span>
                        <input id="nameInputAddItem" type="text" className="form-control" value={this.state.nameInputValue}
                        onChange={el => this.handlenameInputAddItem(el)}/>
                    </div>
                </li>
                </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" 
                    onClick={el => this.handleClickSaveButton(el)}>Save</button>
                </div>
            </div>
        </div>
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
            TestItems.map(el => window.sessionStorage.setItem(el.id, (el.id +':'+ el.image +':'+ el.price +':'+ el.name)));
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
                    var currItem = window.sessionStorage.getItem(el).split(':');
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
        //this.setState({newItem: {image: imgStr, price : priceStr, name: nameStr}});
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
        displayedItems.map(el => window.sessionStorage.setItem(el.id, (el.id +':'+ el.image +':'+ el.price +':'+ el.name)));
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
                    window.sessionStorage.setItem(el.id, (el.id +':'+ el.image +':'+ price +':'+ el.name));
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
      this.RemoveAll = this.RemoveAll.bind(this);
      this.state = {
        isEdit: false,
        isRemoveAll: false
        };
    }

    handleisEdit(currState) {
      this.setState({isEdit: currState});
    }
    RemoveAll(currState) {
        this.setState({isRemoveAll: currState});
    }
  
    render() {
      return (
        <div>
        <input id="fileInput" type="file"  className="hidden" />
        <AddItemForm onGetNewItem={(imgStr, priceStr, nameStr) => 
            { this.childGridElems.GetNewItem(imgStr, priceStr, nameStr); }} />
            <nav className="navbar navbar-default">
                <Buttons onChangeisEdit={this.handleisEdit} onRemoveAll={this.RemoveAll} />
            </nav>
            <GridElems ref={instance => { this.childGridElems = instance; }}
             isEdit={this.state.isEdit} 
             isRemoveAll={this.state.isRemoveAll}/>
        </div>
      );
    }
  }

ReactDOM.render(<AllContent/>, document.getElementById("contentSheet") );