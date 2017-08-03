var AllContent = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-3" style={{'background-color' : 'lavender'}}>{this.props.text}</div>
            </div>
          </div>
        );
    }
});

ReactDOM.render(<AllContent text="saxsacs"/>, document.getElementById('contentSheet') );