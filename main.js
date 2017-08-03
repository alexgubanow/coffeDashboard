/*trying to revive it*/
var elems = 
[
    {
        id : 0,
        image : 'img/1-milk.png',
        price : 1,
        name : 'Espresso',
        isEdit : false
    },
    {
        id : 1,
        image : 'img/2-espresso.png',
        price : 1.2,
        name : 'Espresso Macchiato',
        isEdit : false
    },
    {
        id : 2,
        image : 'img/3-steamed-milk.png',
        price : 1.2,
        name : 'Espresso con Panna',
        isEdit : false
    },
    {
        id : 3,
        image : 'img/4-hot-water-espresso.png',
        price : 1.2,
        name : 'Caffe Latte',
        isEdit : false
    },
    {
        id : 4,
        image : 'img/5-whipped-cream-milk-syrup-espresso.png',
        price : 1.2,
        name : 'Flat White',
        isEdit : false
    },
    {
        id : 5,
        image : 'img/6-milk-foam-steamed.png',
        price : 1.2,
        name : 'Caffe Breve',
        isEdit : false
    }
];


var GridElem = React.createClass({
    handleNewPrice: function(event) {
        
    },
    render: function(props) {
        return (
            <div className="well col-xs-12 col-sm-3">
            <button type="button" className="close hidden" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <ul className="list-unstyled">
                    <li><img src={this.props.image} className="img-thumbnail img-rounded" alt={this.props.name}/></li>
                    <li style={{'verticalAlign':'middle'}}>
                        <div className="row">
                        <div className="col-sm-6">
                        <span className="pull-left">{this.props.name}</span>
                        </div>
                        <div className="col-sm-6">
                        <span className="pull-right">{this.props.price}</span>
                        <span className="pull-right hidden"><input type="text" className="form-control" value={this.props.price} onChange={this.handleNewPrice}/></span>
                        </div>
                        </div>
                    </li>
                </ul>            
            </div>
        );
    }
});

var AllContent = React.createClass({
    render: function() {
        var GridElems = elems.map(elem => <GridElem key={elem.id} image={elem.image} price={elem.price} name={elem.name}/>);         
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    <button type="button" className="btn btn-default navbar-btn">Edit</button>
                    <button type="button" className="btn btn-default navbar-btn hidden">Done</button>
                    <button type="button" className="btn btn-default navbar-btn hidden">Add</button>
                    <button type="button" className="btn btn-default navbar-btn hidden">Remove all</button>
                    <button type="button" className="btn btn-default navbar-btn hidden">Load test arr</button>
                    </div>
                </nav>
                <div className="container-fluid">
                <div className="row">
                    {GridElems}
                </div>
            </div>
          </div>
        );
    }
});

ReactDOM.render(<AllContent/>, document.getElementById('contentSheet') );