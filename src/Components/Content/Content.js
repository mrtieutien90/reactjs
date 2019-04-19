import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            title: '',
        }

    }

    editClick = () => {
        this.setState({
            status: 1
        });
    }

    removeClick = () => {
        alert(' Btn Remove Click ');
    }

    saveClick = () => {
        this.setState({
            status: 0
        });
        console.log(this.temp.value);
        
    }

    renderButton = () => {
        return (
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={this.editClick}>Edit</div>
                    <div className="btn btn-warning" onClick={() => this.removeClick()}>Remove</div>
                </div>
            </div>
        );
    }
    renderForm = () => {
        return (
            <div className="row">
                <div className="form-group">
                    <input type="text" ref={(inputSave)=>{ this.temp = inputSave }} className="form-control" name="save" placeholder="Insert Name" defaultValue={this.props.title} />
                </div>
                <div className="form-group">
                    <div className="btn btn-success" onClick={() => this.saveClick()}>Save</div>
                </div>
            </div>
        )
    }
    displayCheck = () => {
        if (this.state.status === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"col-lg-6 " + this.props.imgPosition}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={"img/" + this.props.imgSrc} alt={this.props.title} />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">{this.props.title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>

                                {/* render Button */}
                                {this.displayCheck()}
                                {/* render Form */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;