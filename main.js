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

var Buttons = React.createClass({
    getInitialState: function(){
        return {
            EditButtonIsEnable: true,
            DoneButtonIsEnable: false,
            AddButtonIsEnable: false,
            RemoveAllButtonIsEnable: false,
            LoadTestButtonIsEnable: false
        }
    },
    handleClickEditButton: function(event)
    {
        this.setState( { 
            EditButtonIsEnable: false,
            DoneButtonIsEnable: true,
            AddButtonIsEnable: true,
            RemoveAllButtonIsEnable: true,
            LoadTestButtonIsEnable: true
         } );
         
    },
    handleClickDoneButton: function(event)
    {
        this.setState( { 
            EditButtonIsEnable: true,
            DoneButtonIsEnable: false,
            AddButtonIsEnable: false,
            RemoveAllButtonIsEnable: false,
            LoadTestButtonIsEnable: false
         } );
    },
    handleClickAddButton: function(event)
    {

    },
    handleClickRemoveAllButton: function(event)
    {
        
    },
    handleClickLoadTestButton: function(event)
    {
        
    },
   render: function() {
       return (
        <div className="container-fluid">
        <button type="button" id="EditButton" 
        className={this.state.EditButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickEditButton(el)}>Edit</button>

        <button type="button" id="DoneButton" 
        className={this.state.DoneButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickDoneButton(el)}>Done</button>

        <button type="button" id="AddButton" 
        className={this.state.AddButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickAddButton(el)}>Add</button>

        <button type="button" id="RemoveAllButton" 
        className={this.state.RemoveAllButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickRemoveAllButton(el)}>Remove all</button>

        <button type="button" id="LoadTestButton" 
        className={this.state.LoadTestButtonIsEnable ? "btn btn-default navbar-btn" :"btn btn-default navbar-btn hidden"} 
        onClick={el => this.handleClickLoadTestButton(el)}>Load test arr</button>
        </div>
    );
   }
});

var GridElem = React.createClass({
    getInitialState: function() {
        return {
            price : this.props.price
        };
    },
    handleRemoveItem: function(event) {
        console.log(this.props.name);
    },
    handleNewPrice: function(event) {
        this.setState( { 
            price: document.getElementById(event.target.getAttribute("id")).value
         } );
    },
    handleClickSavePrice: function(event)
    {
        
    },
    render: function(image = "img/1-milk.png", price = 1, name = "Espresso", isEdit = false) {
        return (
            <div className="well col-xs-12 col-sm-3">
            <button type="button" 
            className={this.props.isEdit ? "close" :"close hidden"} id={"closeBtn" + this.props.id} 
             aria-label="Close" onClick={el => this.handleRemoveItem(el)}><span aria-hidden="true">&times;</span></button>
                <ul className="list-unstyled">
                    <li><img src={this.props.image} className="img-thumbnail img-rounded" alt={this.props.name}/></li>
                    <li style={{"verticalAlign":"middle"}}>
                        <div className="row">
                        <div className="col-sm-6">
                        <span className="pull-left">{this.props.name}</span>
                        </div>
                        <div className="col-sm-6">
                        <span className={this.props.isEdit ? "pull-right hidden" : "pull-right"}>{this.state.price}</span>
                        <span className={this.props.isEdit ? "pull-right" :"pull-right hidden"}>
                            <input type="text" 
                            id={"priceInput" + this.props.id} 
                            className="form-control" value={this.state.price} 
                            onChange={el => this.handleNewPrice(el)}
                            onClick={el => this.handleClickSavePrice(el)}/></span>
                        </div>
                        </div>
                    </li>
                </ul>            
            </div>
        );
    }
});

var GridElems = React.createClass({
    getInitialState: function() {
        return {
            displayedItems: TestItems,
            isEdit : true
        };
    },
    enterInEdit: function(event) {
        console.log(event);
    },
    render: function() {
        return (
            <div className="container-fluid">
            <div className="row">
                {this.state.displayedItems.map(elem => 
                    <GridElem key={elem.id} id={elem.id} image={elem.image} price={elem.price} name={elem.name} isEdit={this.state.isEdit}/>)}
            </div>
        </div>
        );
    }
});

ReactDOM.render(
    <div>
    <input id="fileInput" type="file"  className="hidden" />
        <nav className="navbar navbar-default">
            <Buttons/>
        </nav>
        <GridElems/>
    </div>, document.getElementById("contentSheet") );