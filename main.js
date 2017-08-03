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
var NavBarButton = React.createClass({
    render: function() {
        return (
            <button type="button" className="btn btn-default navbar-btn">{this.props.text}</button>
        );
    }
});

var AllContent = React.createClass({
    render: function() {
        var NavBarButtons = buttons.map(el => <NavBarButton key={el.id} text={el.text}/>);
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">{NavBarButtons}</div>
                </nav>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3" style={{'backgroundColor' : 'lavender'}}>
                        {this.props.text}
                    </div>
                </div>
            </div>
          </div>
        );
    }
});

ReactDOM.render(<AllContent text="Hi))"/>, document.getElementById('contentSheet') );