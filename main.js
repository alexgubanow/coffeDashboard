/*basic element is working with static content*/
var buttons = 
[
    {
        id : 0,
        text : "Edit",
        isVisible : true
    },
    {
        id : 1,
        text : "Done",
        isVisible : false
    },
    {
        id : 2,
        text : "Add",
        isVisible : false
    }
];

var elems = 
[
    {
        id : 0,
        image : '',
        price : 1,
        name : 'Espresso'
    },
    {
        id : 1,
        image : '',
        price : 1.2,
        name : 'Espresso Macchiato',
    },
    {
        id : 2,
        image : '',
        price : 1.2,
        name : 'Espresso con Panna',
    },
    {
        id : 3,
        image : '',
        price : 1.2,
        name : 'Caffe Latte',
    },
    {
        id : 4,
        image : '',
        price : 1.2,
        name : 'Flat White',
    },
    {
        id : 5,
        image : '',
        price : 1.2,
        name : 'Caffe Breve',
    }
];

var NavBarButton = React.createClass({
    render: function() {
        return (
            <button type="button" className="btn btn-default navbar-btn">
            {
                this.props.text
            }
            </button>
        );
    }
});

var GridElem = React.createClass({
    render: function() {
        return (
            // <div className="well col-xs-12 col-sm-3 col-md-3" >
            //     <ul className="list-unstyled">
            //         <li>{this.props.price}</li>
            //         <li>{this.props.name}</li>
            //     </ul>            
            // </div>
            <div className="well col-xs-12 col-sm-3 col-md-3" >
            {this.props.text}           
        </div>
        );
    }
});

var AllContent = React.createClass({
    render: function() {
        var NavBarButtons = buttons.map(button => <NavBarButton key={button.id} text={button.text}/>);
        var GridElems = elems.map(elem => <GridElem key={elem.id} text={elem.text}/>);         
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">{NavBarButtons}</div>
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

ReactDOM.render(<AllContent text="Hi))"/>, document.getElementById('contentSheet') );