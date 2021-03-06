﻿
import * as React from 'react';

export default class AboutView extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { loaded: false };
    }
    
    componentDidMount() {
        this.setState({ loaded: true });
    }
    
    render() {
        var loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h2>About {loading}</h2>
            <p>
                ABOUT :)
            </p>
        </div>;
    }
}
